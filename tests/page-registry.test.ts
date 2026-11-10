import { describe, expect, it } from "vitest";
import { getDictionary } from "@/app/lib/i18n/dictionary";
import { getLocaleConfig, LOCALES } from "@/app/lib/i18n/locales";
import { createPageRegistry, isPagePublished, PAGE_KEYS, pagePath } from "@/app/lib/i18n/pages";
import { getPostPath, getPostTranslations, POST_SLUGS } from "@/app/lib/blog/posts";
import { getLanguageMenu, getPostLanguageMenu, getSiteNavigationItems, keepPublishedItems } from "@/app/lib/navigation";
import { SiteNav } from "@/app/components/SiteNav";
import { renderView } from "./support/render";

describe("page registry", () => {
  it("knows which locales a page is published in", () => {
    expect(isPagePublished("en", "yii2")).toBe(true);
    expect(isPagePublished("ru", "yii2")).toBe(true);
    expect(isPagePublished("ru", "privacy")).toBe(false);
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

describe("language menu", () => {
  // Every language the page is published in, in the site's locale order, each
  // named in its own language; empty while the page has one language.
  it.each(PAGE_KEYS.flatMap((page) => LOCALES.map((locale) => [locale, page] as const)))(
    "on %s %s lists the page's language versions",
    (locale, page) => {
      const published = LOCALES.filter((other) => isPagePublished(other, page));
      const expected =
        published.length < 2
          ? []
          : published.map((other) => ({
              href: pagePath(other, page),
              code: getDictionary(other).language.code,
              name: getDictionary(other).language.name,
              lang: getLocaleConfig(other).htmlLang,
              current: other === locale
            }));
      expect(getLanguageMenu(locale, page)).toEqual(expected);
    }
  );

  // A post's menu lists its translations from the post registry, the same way.
  it.each(POST_SLUGS)("on post %s lists the post's language versions", (slug) => {
    const translations = getPostTranslations(slug);
    const own = translations.find((post) => post.slug === slug);
    const expected =
      translations.length < 2
        ? []
        : LOCALES.flatMap((locale) => translations.filter((post) => post.locale === locale)).map((post) => ({
            href: getPostPath(post.slug),
            code: getDictionary(post.locale).language.code,
            name: getDictionary(post.locale).language.name,
            lang: getLocaleConfig(post.locale).htmlLang,
            current: post.locale === own?.locale
          }));
    expect(getPostLanguageMenu(slug)).toEqual(expected);
  });

  const nav = (props: Parameters<typeof SiteNav>[0]) => renderView(SiteNav, props);

  it("offers the other languages of a translated page in a menu", () => {
    const html = nav({ locale: "en", page: "yii2" });
    expect(html).toContain("<details");
    expect(html).toContain(`aria-label="${getDictionary("en").navigation.languageMenuLabel}"`);
    expect(html).toContain('href="/ru/yii2/" hrefLang="ru" lang="ru"');
    expect(html).toContain(">Русский<");
    expect(html).toContain('href="/yii2/" hrefLang="en" lang="en" aria-current="true"');
  });

  it("shows the current language's code on the menu button", () => {
    expect(nav({ locale: "ru", page: "yii2" })).toMatch(/<summary[^>]*>[\s\S]*?RU<\/summary>/);
  });

  it("marks the shown page as current", () => {
    expect(nav({ locale: "en", page: "yii2" })).toContain('href="/yii2/" data-mobile-nav="secondary" aria-current="page"');
  });

  // On phones the logo, two page pills and the switch do not fit one row; the
  // Home pill goes, since the logo already leads home.
  it.each([
    ["en", "yii2", "secondary"],
    ["en", "privacy", "primary"]
  ] as const)("on %s %s keeps the Home pill %s on phones", (locale, page, mobileNav) => {
    expect(nav({ locale, page })).toContain(`href="/" data-mobile-nav="${mobileNav}"`);
  });

  it("shows no language menu on a page with one language", () => {
    expect(nav({ locale: "en", page: "privacy" })).not.toContain("<details");
    expect(nav({ locale: "en" })).not.toContain("<details");
  });
});
