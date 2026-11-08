import type { Metadata } from "next";
import { BRAND_NAME } from "./brand";
import { getLocaleConfig, type Locale } from "./i18n/locales";
import { pageLanguageAlternates, pagePath, type PageKey } from "./i18n/pages";

// What a landing says about itself to search results and link previews.
export type LandingMeta = {
  title: string;
  description: string;
  /** Description for link previews when it should differ from the search one. */
  socialDescription?: string;
};

// One builder for every landing's Next.js metadata, so canonical, Open Graph,
// and Twitter cards are shaped the same way on every landing and locale.
export function buildLandingMetadata(locale: Locale, page: PageKey, meta: LandingMeta): Metadata {
  const languages = pageLanguageAlternates(page);
  const socialDescription = meta.socialDescription ?? meta.description;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: pagePath(locale, page),
      ...(languages ? { languages } : {})
    },
    openGraph: {
      title: meta.title,
      description: socialDescription,
      type: "website",
      siteName: BRAND_NAME,
      locale: getLocaleConfig(locale).ogLocale
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: socialDescription
    }
  };
}
