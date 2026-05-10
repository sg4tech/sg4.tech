import { readFile, rename, writeFile } from "node:fs/promises";
import { join } from "node:path";

const out = join(process.cwd(), "out");

const renames = [
  ["opengraph-image", "opengraph-image.png"],
  ["yii2/opengraph-image", "yii2/opengraph-image.png"]
];

const htmlFiles = ["index.html", "yii2.html"];

const PATTERN = "/opengraph-image?";
const REPLACEMENT = "/opengraph-image.png?";

for (const [from, to] of renames) {
  await rename(join(out, from), join(out, to));
}

for (const html of htmlFiles) {
  const path = join(out, html);
  const content = await readFile(path, "utf8");
  if (!content.includes(PATTERN)) {
    throw new Error(
      `[postbuild-og] expected substring "${PATTERN}" in out/${html} — Next.js URL format may have changed; rename step is unsafe`
    );
  }
  await writeFile(path, content.replaceAll(PATTERN, REPLACEMENT));
}

console.log("[postbuild-og] OG artifacts suffixed with .png and HTML references rewritten");
