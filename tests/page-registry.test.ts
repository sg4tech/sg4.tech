import { describe, expect, it } from "vitest";
import { createPageRegistry, isPagePublished, pagePath } from "@/app/lib/i18n/pages";
import { getLanguageVersions, getSiteNavigationItems, keepPublishedItems } from "@/app/lib/navigation";
import { SiteNav } from "@/app/components/SiteNav";
import { renderView } from "./support/render";

describe("page registry", () => {
  it("knows which locales a page is published in", () => {
    expect(isPagePublished("en", "yii2")).toBe(true);
    expect(isPagePublished("ru", "yii2")).toBe(true);
    expect(isPagePublished("ru", "blog")).toBe(false);
  });

  // A link to a page that has no version in this language would be a 404.
  // Failing the build makes whoever adds the link decide where it goes.
  it("refuses a path to a page that is not published in the locale", () => {
    expect(() => pagePath("ru", "privacy")).toThrow('"privacy" is not published in ru');
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

// The site publishes one language today; this registry has two, so the
// multi-locale paths (prefixes, hreflang, x-default, refusal) are exercised now
// rather than on the first Russian page.
describe("page registry with two published locales", () => {
  const urls = { en: { htmlLang: "en", pathPrefix: "" }, ru: { htmlLang: "ru", pathPrefix: "/ru" } } as const;
  const twoLocale = createPageRegistry<"en" | "ru">(
    {
      home: { path: "/", locales: ["en", "ru"] },
      yii2: { path: "/yii2/", locales: ["en", "ru"] },
      "ai-vibecoding": { path: "/ai-vibecoding/", locales: ["en"] },
      blog: { path: "/blog/", locales: ["en"] },
      privacy: { path: "/privacy/", locales: ["en"] }
    },
    (locale) => (locale === "en" ? urls.en : urls.ru),
    "en"
  );

  it.each([
    ["en", "home", "/"],
    ["ru", "home", "/ru/"],
    ["ru", "yii2", "/ru/yii2/"]
  ] as const)("serves %s %s at %s", (locale, page, path) => {
    expect(twoLocale.pagePath(locale, page)).toBe(path);
  });

  it("links the language versions of a translated page, with x-default on English", () => {
    expect(twoLocale.pageLanguageAlternates("yii2")).toEqual({
      en: "https://sg4.tech/yii2/",
      ru: "https://sg4.tech/ru/yii2/",
      "x-default": "https://sg4.tech/yii2/"
    });
  });

  // Links that every page carries (the logo, the footer's legal links) fall
  // back to the default language until the page is translated.
  it.each([
    ["ru", "yii2", "/ru/yii2/"],
    ["ru", "blog", "/blog/"],
    ["ru", "privacy", "/privacy/"],
    ["en", "privacy", "/privacy/"]
  ] as const)("links %s %s at %s, falling back to English", (locale, page, path) => {
    expect(twoLocale.pagePathOrDefault(locale, page)).toBe(path);
  });

  it("gives an untranslated page no alternates and refuses its missing version", () => {
    expect(twoLocale.pageLanguageAlternates("blog")).toBeUndefined();
    expect(() => twoLocale.pagePath("ru", "blog")).toThrow('"blog" is not published in ru');
  });
});

describe("language switch", () => {
  it.each([
    ["en", "yii2", [{ href: "/ru/yii2/", code: "RU", label: "Русская версия", lang: "ru" }]],
    ["ru", "yii2", [{ href: "/yii2/", code: "EN", label: "English version", lang: "en" }]],
    ["en", "blog", []]
  ] as const)("on %s %s links %j", (locale, page, expected) => {
    expect(getLanguageVersions(locale, page)).toEqual(expected);
  });

  const nav = (props: Parameters<typeof SiteNav>[0]) => renderView(SiteNav, props);

  it("shows the other language in the menu of a translated page", () => {
    const html = nav({ locale: "en", page: "yii2" });
    expect(html).toContain('href="/ru/yii2/"');
    expect(html).toContain('hrefLang="ru"');
    expect(html).toContain('lang="ru"');
    expect(html).toContain('aria-label="Русская версия"');
    expect(html).toContain(">RU<");
  });

  it("marks the shown page as current", () => {
    expect(nav({ locale: "en", page: "yii2" })).toContain('href="/yii2/" data-mobile-nav="secondary" aria-current="page"');
  });

  // On phones the logo, two page pills and the switch do not fit one row; the
  // Home pill goes, since the logo already leads home.
  it.each([
    ["en", "yii2", "secondary"],
    ["en", "home", "primary"]
  ] as const)("on %s %s keeps the Home pill %s on phones", (locale, page, mobileNav) => {
    expect(nav({ locale, page })).toContain(`href="/" data-mobile-nav="${mobileNav}"`);
  });

  it("shows no switch on a page with one language", () => {
    expect(nav({ locale: "en", page: "home" })).not.toContain("hrefLang");
    expect(nav({ locale: "en" })).not.toContain("hrefLang");
  });
});
