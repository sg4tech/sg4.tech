import type { Metadata } from "next";
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { metadata as aiVibecodingMetadata } from "@/app/(en)/ai-vibecoding/page";
import { metadata as blogIndexMetadata } from "@/app/(en)/blog/page";
import { metadata as homeMetadata } from "@/app/(en)/page";
import { metadata as yii2Metadata } from "@/app/(en)/yii2/page";
import { buildPostMetadata } from "@/app/lib/blog/post-metadata";
import { POST_SLUGS } from "@/app/lib/blog/posts";
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
