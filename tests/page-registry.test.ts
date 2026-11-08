import { describe, expect, it } from "vitest";
import type { Locale } from "@/app/lib/i18n/locales";
import { isPagePublished, pagePath } from "@/app/lib/i18n/pages";
import { getSiteNavigationItems, keepPublishedItems } from "@/app/lib/navigation";

// A locale the registry does not publish anything in yet.
const unpublished = "ru" as Locale;

describe("page registry", () => {
  it("knows which locales a page is published in", () => {
    expect(isPagePublished("en", "yii2")).toBe(true);
    expect(isPagePublished(unpublished, "yii2")).toBe(false);
  });

  // A link to a page that has no version in this language would be a 404.
  // Failing the build makes whoever adds the link decide where it goes.
  it("refuses a path to a page that is not published in the locale", () => {
    expect(() => pagePath(unpublished, "privacy")).toThrow('"privacy" is not published in ru');
  });
});

describe("site menu", () => {
  it("lists every English page", () => {
    expect(getSiteNavigationItems("en").map((item) => item.href)).toEqual(["/", "/blog/", "/yii2/", "/ai-vibecoding/"]);
  });

  // A translated page's menu shows only pages that exist in its language.
  it.each([
    [["home", "blog", "yii2"], ["home", "yii2"], ["home", "yii2"]],
    [["home", "blog"], [], []],
    [["home", "yii2"], ["home", "blog", "yii2"], ["home", "yii2"]]
  ] as const)("keeps %j filtered by published %j as %j", (items, published, expected) => {
    const kept = keepPublishedItems(
      items.map((key) => ({ key, label: key })),
      (key) => (published as ReadonlyArray<string>).includes(key)
    );
    expect(kept.map((item) => item.key)).toEqual(expected);
  });
});
