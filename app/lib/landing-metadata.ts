import type { Metadata } from "next";
import { BRAND_NAME } from "./brand";
import { getLocaleConfig, type Locale, type SitePath } from "./i18n/locales";

// What a landing says about itself to search results and link previews.
export type LandingMeta = {
  title: string;
  description: string;
  /** Description for link previews when it should differ from the search one. */
  socialDescription?: string;
};

// One builder for every landing's Next.js metadata, so canonical, Open Graph,
// and Twitter cards are shaped the same way on every landing and locale.
export function buildLandingMetadata(locale: Locale, path: SitePath, meta: LandingMeta): Metadata {
  const socialDescription = meta.socialDescription ?? meta.description;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: path
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
