// Post-build guardrail: fail the build if a page preloads another language's
// brand face.
//
// Why this exists: each locale's root layout imports its own brand face, but
// Turbopack bundles the font CSS of every root layout together and preloads all
// of it on every page. So a preloaded Russian face would be downloaded by every
// English page. The fix is `preload: false` on non-default faces (see
// app/lib/fonts/); this check makes a regression loud — including one brought by
// a Next.js or Turbopack upgrade, which only the built HTML would show.

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = join(process.cwd(), "out");

// Faces that belong to one non-default language, by font-family as the built
// CSS names them. Keep in sync with app/lib/fonts/.
const FACE_LANG = new Map([["IBM Plex Sans", "ru"]]);

// Maps each font file to its family through the @font-face rules in the built CSS.
const css = readdirSync(join(OUT_DIR, "_next"), { recursive: true })
  .map(String)
  .filter((path) => path.endsWith(".css"))
  .map((path) => readFileSync(join(OUT_DIR, "_next", path), "utf8"))
  .join("\n");
const familyOfFile = new Map();
for (const [face] of css.matchAll(/@font-face\s*\{[^}]*\}/g)) {
  const family = /font-family:\s*['"]?([^;'"]+)/.exec(face)?.[1];
  for (const [, file] of face.matchAll(/url\(([^)]+\.woff2)\)/g)) {
    familyOfFile.set(file.split("/").pop(), family);
  }
}

const offenders = [];
const pages = readdirSync(OUT_DIR, { recursive: true })
  .map(String)
  .filter((path) => path.endsWith("index.html"));

for (const page of pages) {
  const html = readFileSync(join(OUT_DIR, page), "utf8");
  const lang = /<html[^>]*\blang="([^"]+)"/.exec(html)?.[1];
  for (const [, href] of html.matchAll(/<link rel="preload" href="([^"]+\.woff2)"[^>]*as="font"/g)) {
    const family = familyOfFile.get(href.split("/").pop());
    const owner = FACE_LANG.get(family);
    if (owner !== undefined && owner !== lang) {
      offenders.push(`${page} (lang=${lang}) preloads ${family}`);
    }
  }
}

if (offenders.length > 0) {
  console.error("[postbuild-font-preloads] A page preloads another language's face — set `preload: false` on it:");
  for (const offender of offenders) console.error(`  ${offender}`);
  process.exit(1);
}

console.log(`[postbuild-font-preloads] ${pages.length} pages checked, no foreign-language face preloaded`);
