import type { Metadata } from "next";
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { metadata as aiVibecodingMetadata } from "@/app/(en)/ai-vibecoding/page";
import { metadata as blogIndexMetadata } from "@/app/(en)/blog/page";
import { metadata as homeMetadata } from "@/app/(en)/page";
import { metadata as yii2Metadata } from "@/app/(en)/yii2/page";
import { buildPostMetadata } from "@/app/lib/blog/post-metadata";
import { POST_SLUGS, validateTranslations } from "@/app/lib/blog/posts";
import { buildLanguageAlternates } from "@/app/lib/i18n/alternates";

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

// No page is translated yet, so no page may advertise a language version that
// does not exist: an hreflang pointing at a 404 is worse than none.
describe("untranslated site", () => {
  const pages: ReadonlyArray<readonly [string, Metadata]> = [
    ["home", homeMetadata],
    ["yii2", yii2Metadata],
    ["ai-vibecoding", aiVibecodingMetadata],
    ["blog index", blogIndexMetadata],
    ...POST_SLUGS.map((slug) => [slug, buildPostMetadata(slug)] as const)
  ];

  it.each(pages)("%s declares no language alternates", (_name, metadata) => {
    expect(metadata.alternates?.languages).toBeUndefined();
  });

  it("lists no language alternates in the sitemap", () => {
    for (const entry of sitemap()) {
      expect(entry.alternates).toBeUndefined();
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
