import { describe, expect, it } from "vitest";
import { formatPostDate } from "@/app/lib/blog/posts";
import { getDictionary } from "@/app/lib/i18n/dictionary";
import { BlogPostHeader } from "@/app/components/BlogPostHeader";
import { WhyMeSection } from "@/app/components/WhyMeSection";
import { DEFAULT_LOCALE, getLocaleConfig, LOCALES, type Locale } from "@/app/lib/i18n/locales";
import { isPagePublished, PAGE_KEYS, pagePath } from "@/app/lib/i18n/pages";
import { createLookup } from "@/app/lib/lookup";
import { renderView } from "./support/render";

describe("locales", () => {
  it("serves the default locale at the site root, with no prefix", () => {
    expect(DEFAULT_LOCALE).toBe("en");
    expect(pagePath("en", "home")).toBe("/");
    expect(pagePath("en", "yii2")).toBe("/yii2/");
  });

  it.each(LOCALES)("has a dictionary for %s", (locale) => {
    const dictionary = getDictionary(locale);
    expect(dictionary.document.skipLink).not.toBe("");
    expect(dictionary.navigation.items).toHaveLength(4);
  });
});

describe("createLookup", () => {
  const lookup = createLookup<"a" | "b", number>({ a: 1, b: 2 });

  it("returns the entry for a key", () => {
    expect(lookup("a")).toBe(1);
    expect(lookup("b")).toBe(2);
  });

  it("fails loudly for a key the table lacks", () => {
    expect(() => (lookup as (key: string) => number)("c")).toThrow('no entry for "c"');
  });
});

describe("formatPostDate", () => {
  it.each([
    ["2026-05-22", "May 22, 2026"],
    ["2026-10-08", "October 8, 2026"],
    ["2026-01-01", "January 1, 2026"]
  ])("formats %s as %s in English", (iso, expected) => {
    expect(formatPostDate(iso, "en")).toBe(expected);
  });
});

describe("author name", () => {
  // The entity name in structured data stays Latin everywhere; what a reader
  // sees is the locale's own spelling.
  const whyMe = (locale: Locale) => renderView(WhyMeSection, { locale, intro: null, points: [] });
  const header = (locale: Locale) =>
    renderView(BlogPostHeader, { locale, title: "T", publishedAt: "2026-05-22", readingMinutes: 7, lede: null });

  it.each([
    ["en", "Victor Demin"],
    ["ru", "Виктор Демин"]
  ] as const)("renders in the %s spelling", (locale, name) => {
    for (const html of [whyMe(locale), header(locale)]) {
      expect(html).toContain(`alt="${name}"`);
      expect(html).toContain(`>${name}</`);
    }
  });

  it("shows no Latin name on Russian pages", () => {
    expect(whyMe("ru")).not.toContain("Victor Demin");
    expect(header("ru")).not.toContain("Victor Demin");
  });
});

describe("ru locale", () => {
  it("serves under /ru with Russian document settings", () => {
    expect(getLocaleConfig("ru")).toEqual({ htmlLang: "ru", intlTag: "ru-RU", ogLocale: "ru_RU", pathPrefix: "/ru" });
  });

  it("publishes no pages until their Russian content exists", () => {
    for (const page of PAGE_KEYS) {
      expect(isPagePublished("ru", page)).toBe(false);
    }
  });
});
