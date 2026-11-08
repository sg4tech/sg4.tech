import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getDictionary } from "@/app/lib/i18n/dictionary";

const file = join(process.cwd(), "app", "global-not-found.tsx");

// Without a custom 404, the static export ships Next's default black page: no
// brand, no nav, no way back to the site. With one root layout per locale the
// 404 is app/global-not-found.tsx.
describe("custom 404 page", () => {
  it("exists", () => {
    expect(existsSync(file)).toBe(true);
  });

  const source = existsSync(file) ? readFileSync(file, "utf8") : "";

  it("keeps the approved English copy", () => {
    expect(getDictionary("en").notFound).toEqual({
      title: "Page not found",
      text: "The page you're looking for doesn't exist or has moved.",
      backHome: "Back to home"
    });
  });

  it("renders the copy from the dictionary", () => {
    for (const field of ["notFound.title", "notFound.text", "notFound.backHome"]) {
      expect(source).toContain(`{${field}}`);
    }
  });

  it("uses the site nav and footer and links home", () => {
    expect(source).toContain("<SiteNav locale={locale} />");
    expect(source).toContain("<SiteFooter locale={locale} />");
    expect(source).toMatch(/<Button href=\{localizePath\(locale, "\/"\)\}>/);
  });

  it("keeps the page out of search results", () => {
    expect(source).toContain("robots: { index: false");
  });
});
