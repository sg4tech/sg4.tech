import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const file = join(process.cwd(), "app", "not-found.tsx");

// Without app/not-found.tsx, the static export ships Next's default black
// 404: no brand, no nav, no way back to the site.
describe("custom 404 page", () => {
  it("exists", () => {
    expect(existsSync(file)).toBe(true);
  });

  const source = existsSync(file) ? readFileSync(file, "utf8") : "";

  it.each([
    "Page not found",
    "The page you&apos;re looking for doesn&apos;t exist or has moved.",
    "Back to home"
  ])("shows the approved copy: %s", (text) => {
    expect(source).toContain(text);
  });

  it("uses the site nav and footer and links home", () => {
    expect(source).toContain("<SiteNav />");
    expect(source).toContain("<SiteFooter />");
    expect(source).toMatch(/<Button href="\/">/);
  });

  it("keeps the page out of search results", () => {
    expect(source).toContain("robots: { index: false");
  });
});
