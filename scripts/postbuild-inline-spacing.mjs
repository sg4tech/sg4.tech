// Post-build guardrail: fail the build if SWC's JSX whitespace handling ate a
// space at an inline-tag boundary (</strong>word, </em>word, </a>word).
//
// Why this exists: the JSX source `<strong>A.</strong> B` sometimes compiles
// to `</strong>B` — the interior space is dropped for some (not all) sites,
// and the defect is invisible in source review and in `next dev`; it only
// exists in the built HTML. Found 2026-07-10 on a new article, then 15 more
// occurrences across every existing article. The fix is an explicit
// `{" "}` after the closing tag; this check makes any regression loud.
//
// Chars allowed to follow a closing inline tag without a space: punctuation
// that legitimately hugs the tag (sentence period after a linked phrase,
// comma, closing paren, etc.) and HTML entities.

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = join(process.cwd(), "out");
const ALLOWED_AFTER_TAG = new Set([" ", ".", ",", ";", ":", ")", "?", "!", "…", "’", '"']);

const pages = readdirSync(OUT_DIR, { recursive: true })
  .map(String)
  .filter((path) => path.endsWith("index.html"));

const offenders = [];

for (const page of pages) {
  const html = readFileSync(join(OUT_DIR, page), "utf8");
  const boundary = /<\/(?:em|strong|a)>(?:<!-- -->)?([^<]{1,24})/g;
  for (const match of html.matchAll(boundary)) {
    const tail = match[1];
    if (!ALLOWED_AFTER_TAG.has(tail[0]) && !tail.startsWith("&")) {
      offenders.push(`${page}: …${match[0].slice(0, 40)}…`);
    }
  }
}

if (offenders.length > 0) {
  console.error(
    '[postbuild-inline-spacing] Eaten space at inline-tag boundary — add an explicit {" "} after the closing tag in the JSX source:'
  );
  for (const line of offenders) console.error(`  ${line}`);
  process.exit(1);
}

console.log(
  `[postbuild-inline-spacing] ${pages.length} pages checked, no eaten spaces at inline-tag boundaries`
);
