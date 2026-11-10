import type { Metadata } from "next";
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { metadata as aiVibecodingMetadata } from "@/app/(en)/ai-vibecoding/page";
import { metadata as blogIndexMetadata } from "@/app/(en)/blog/page";
import { metadata as homeMetadata } from "@/app/(en)/page";
import { metadata as yii2Metadata } from "@/app/(en)/yii2/page";
import { metadata as ruYii2Metadata } from "@/app/(ru)/ru/yii2/page";
import { absoluteUrl } from "@/app/lib/brand";
import { buildPostMetadata } from "@/app/lib/blog/post-metadata";
import { POST_SLUGS, validateTranslations } from "@/app/lib/blog/posts";
import { buildLanguageAlternates } from "@/app/lib/i18n/alternates";
import { PAGE_KEYS, type PageKey, pageLanguageAlternates, pageLocales, pagePath } from "@/app/lib/i18n/pages";

describe("buildLanguageAlternates", () => {
  it("emits nothing for a page that exists in one language", () => {
    expect(buildLanguageAlternates([{ lang: "en", path: "/yii2/" }], "en")).toBeUndefined();
  });

  it("links every language version plus x-default once a translation exists", () => {
    expect(
      buildLanguageAlternates(
        [
          { lang: "en", path: "/yii2/" },
          { lang: "ru", path: "/ru/yii2/" }
        ],
        "en"
      )
    ).toEqual({
      en: "https://sg4.tech/yii2/",
      ru: "https://sg4.tech/ru/yii2/",
      "x-default": "https://sg4.tech/yii2/"
    });
  });

  it("refuses two versions in one language instead of silently dropping one", () => {
    expect(() =>
      buildLanguageAlternates(
        [
          { lang: "en", path: "/a/" },
          { lang: "en", path: "/b/" }
        ],
        "en"
      )
    ).toThrow('two versions in "en"');
  });

  it("uses absolute, trailing-slash URLs (the served form)", () => {
    const alternates = buildLanguageAlternates(
      [
        { lang: "en", path: "/" },
        { lang: "ru", path: "/ru/" }
      ],
      "en"
    );
    for (const url of Object.values(alternates ?? {})) {
      expect(url).toMatch(/^https:\/\/sg4\.tech\/.*\/$|^https:\/\/sg4\.tech\/$/);
    }
  });
});

// A page links its language versions exactly when it has more than one, so no
// hreflang ever points at a 404. Pages from the registry carry the same set on
// every language version; posts are covered by their own translation links.
describe("language alternates follow the registry", () => {
  const pages: ReadonlyArray<readonly [PageKey, Metadata]> = [
    ["home", homeMetadata],
    ["yii2", yii2Metadata],
    ["ai-vibecoding", aiVibecodingMetadata],
    ["blog", blogIndexMetadata]
  ];

  it.each(pages)("%s declares alternates only when translated", (page, metadata) => {
    expect(metadata.alternates?.languages).toEqual(pageLanguageAlternates(page));
  });

  it("gives the Russian /yii2 the same set as the English one", () => {
    expect(ruYii2Metadata.alternates?.languages).toEqual({
      en: "https://sg4.tech/yii2/",
      ru: "https://sg4.tech/ru/yii2/",
      de: "https://sg4.tech/de/yii2/",
      "pt-BR": "https://sg4.tech/pt-br/yii2/",
      fr: "https://sg4.tech/fr/yii2/",
      es: "https://sg4.tech/es/yii2/",
      "x-default": "https://sg4.tech/yii2/"
    });
    expect(yii2Metadata.alternates?.languages).toEqual(ruYii2Metadata.alternates?.languages);
  });

  it.each(POST_SLUGS)("post %s declares no alternates while it has no translation", (slug) => {
    expect(buildPostMetadata(slug).alternates?.languages).toBeUndefined();
  });

  it("lists alternates in the sitemap only for translated pages", () => {
    const translated = new Set(
      PAGE_KEYS.filter((page) => pageLocales(page).length > 1).flatMap((page) =>
        pageLocales(page).map((locale) => absoluteUrl(pagePath(locale, page)))
      )
    );
    for (const entry of sitemap()) {
      expect(entry.alternates !== undefined, entry.url).toBe(translated.has(entry.url));
    }
  });
});

describe("post translation links", () => {
  const post = (slug: string, locale: string, translationOf?: string) =>
    ({ slug, locale, translationOf }) as unknown as Parameters<typeof validateTranslations>[0][number];

  it("accepts originals and one translation per language", () => {
    expect(() => validateTranslations([post("a", "en"), post("a-ru", "ru", "a")])).not.toThrow();
  });

  it.each([
    ["a translation of a translation", [post("a", "en"), post("b", "ru", "a"), post("c", "de", "b")], "must translate an original"],
    ["a link to a missing post", [post("b", "ru", "nope")], "must translate an original"],
    ["two versions in one language", [post("a", "en"), post("b", "en", "a")], "two en versions"]
  ])("rejects %s", (_name, posts, message) => {
    expect(() => validateTranslations(posts)).toThrow(message);
  });
});
