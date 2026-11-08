import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// The site describes a software development practice, so the homepage, the
// landings migrated so far and every site-wide signal — shared bio, default
// metadata, link previews, the blog CTA, llms.txt — must not sell consulting or
// a "fractional CTO" service. Past CTO roles stay as facts of experience; that
// wording is allowed.
const positioningSurfaces = [
  // Landing copy (page text and link-preview cards) lives in each route's content.tsx.
  ["app", "(en)", "content.tsx"],
  ["app", "lib", "brand.ts"],
  // Shared UI strings: footer fine print, byline, blog CTA label.
  ["app", "lib", "i18n", "en.ts"],
  ["app", "(en)", "layout.tsx"],
  ["app", "components", "BlogCta.tsx"],
  ["public", "llms.txt"],
  ["app", "(en)", "yii2", "content.tsx"],
  ["app", "(en)", "ai-vibecoding", "content.tsx"],
  // Post descriptions render on landings (related-post cards) and as blog meta.
  ["app", "lib", "blog", "posts.ts"]
];

const bannedPositioning = [/consult/i, /fractional/i, /diagnostic call/i, /delivery diagnosis/i];

describe("development positioning", () => {
  for (const segments of positioningSurfaces) {
    it(`${segments.join("/")} does not sell consulting`, () => {
      const content = readFileSync(join(process.cwd(), ...segments), "utf8");
      for (const pattern of bannedPositioning) {
        expect(content).not.toMatch(pattern);
      }
    });
  }
});
