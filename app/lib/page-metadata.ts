import type { Metadata } from "next";
import { absoluteUrl, BRAND_NAME } from "./brand";
import { getLocaleConfig, type Locale } from "./i18n/locales";
import { pageLanguageAlternates, pagePath, type PageKey } from "./i18n/pages";

// What a page says about itself to search results and link previews.
export type PageMeta = {
  title: string;
  description: string;
  /** Title for link previews when it should differ from the search one. */
  socialTitle?: string;
  /** Description for link previews when it should differ from the search one. */
  socialDescription?: string;
};

type PageMetadataOptions = {
  /** The <title> when the layout's title template does not apply to the page. */
  searchTitle?: string;
  /** Extra <link rel="alternate"> types, e.g. the blog's RSS feed. */
  feed?: Record<string, string>;
};

// One builder for every registry page's Next.js metadata, so canonical,
// og:url, hreflang, Open Graph, and Twitter cards take the same shape on every
// page and locale, with the path coming from the page registry.
export function buildPageMetadata(
  locale: Locale,
  page: PageKey,
  meta: PageMeta,
  options: PageMetadataOptions = {}
): Metadata {
  const path = pagePath(locale, page);
  const languages = pageLanguageAlternates(page);
  const socialTitle = meta.socialTitle ?? meta.title;
  const socialDescription = meta.socialDescription ?? meta.description;
  return {
    title: options.searchTitle ?? meta.title,
    description: meta.description,
    alternates: {
      canonical: path,
      ...(languages ? { languages } : {}),
      ...(options.feed ? { types: options.feed } : {})
    },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      type: "website",
      siteName: BRAND_NAME,
      locale: getLocaleConfig(locale).ogLocale,
      url: absoluteUrl(path)
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription
    }
  };
}
