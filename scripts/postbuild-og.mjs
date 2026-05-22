// Postbuild step: Next.js emits extensionless `opengraph-image` assets from
// route-segment opengraph-image.tsx files, and HTML <meta og:image> references
// point at the same extensionless URL. Some social-card scrapers and static
// hosts handle that worse than an explicit .png — Twitter/X and Telegram
// scrapers are historically strict on Content-Type, and static hosts may
// serve extensionless files as application/octet-stream without explicit
// mime mapping. So we rename every emitted asset to *.png and rewrite the
// corresponding HTML references.
//
// Auto-discover (vs a hardcoded route list) prevents a class of silent
// regressions where new OG-emitting routes ship without their asset URLs
// being normalized, because nobody remembered to update this script.

import { readdir, readFile, rename, writeFile } from "node:fs/promises";
import { join } from "node:path";

const out = join(process.cwd(), "out");
const PATTERN = "/opengraph-image?";
const REPLACEMENT = "/opengraph-image.png?";

async function walk(dir) {
  const ogFiles = [];
  const htmlFiles = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      const sub = await walk(full);
      ogFiles.push(...sub.ogFiles);
      htmlFiles.push(...sub.htmlFiles);
    } else if (entry.name === "opengraph-image") {
      ogFiles.push(full);
    } else if (entry.name === "index.html") {
      htmlFiles.push(full);
    }
  }
  return { ogFiles, htmlFiles };
}

const { ogFiles, htmlFiles } = await walk(out);

if (ogFiles.length === 0) {
  throw new Error(
    "[postbuild-og] no extensionless opengraph-image files found under out/ — build may have failed or Next.js OG asset naming changed; rename step is unsafe"
  );
}

for (const path of ogFiles) {
  await rename(path, `${path}.png`);
}

let rewritten = 0;
for (const path of htmlFiles) {
  const content = await readFile(path, "utf8");
  if (content.includes(PATTERN)) {
    await writeFile(path, content.replaceAll(PATTERN, REPLACEMENT));
    rewritten++;
  }
}

// Why >= and not ===: pages without their own opengraph-image.tsx inherit
// the root layout's og:image meta tag, so their HTML references the root
// asset and gets rewritten too (e.g., the auto-generated 404 page). So
// rewritten >= ogFiles.length is the correct invariant — every renamed
// asset must have at least one HTML consumer, but inheritance can push
// rewrite count higher.
if (rewritten < ogFiles.length) {
  throw new Error(
    `[postbuild-og] only ${rewritten} HTML file(s) rewritten for ${ogFiles.length} renamed OG asset(s) — some OG assets have no HTML reference, sharing will break for those routes`
  );
}

console.log(
  `[postbuild-og] OG artifacts suffixed with .png (${ogFiles.length} file${ogFiles.length === 1 ? "" : "s"}), HTML references rewritten`
);
