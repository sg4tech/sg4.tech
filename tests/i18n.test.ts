import { describe, expect, it } from "vitest";
import { formatPostDate } from "@/app/lib/blog/posts";
import { getDictionary } from "@/app/lib/i18n/dictionary";
import { DEFAULT_LOCALE, LOCALES, localizePath } from "@/app/lib/i18n/locales";
import { createLookup } from "@/app/lib/lookup";

describe("locales", () => {
  it("serves the default locale at the site root, with no prefix", () => {
    expect(DEFAULT_LOCALE).toBe("en");
    expect(localizePath("en", "/")).toBe("/");
    expect(localizePath("en", "/yii2/")).toBe("/yii2/");
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
