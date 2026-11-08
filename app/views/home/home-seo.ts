import type { Metadata } from "next";
import { VICTOR_SAME_AS, withSiteName } from "../../lib/brand";
import type { Locale } from "../../lib/i18n/locales";
import { buildPageMetadata } from "../../lib/page-metadata";
import { buildLandingStructuredData } from "../../lib/structured-data";
import type { HomeContent } from "./home-content";

// The home page sits in its root layout's own segment, where the layout's
// title template does not apply, so its search title carries the site name
// itself. Link previews keep the bare title.
export function buildHomeMetadata(locale: Locale, content: HomeContent): Metadata {
  return buildPageMetadata(locale, "home", content.meta, { searchTitle: withSiteName(content.meta.title) });
}

export function buildHomeStructuredData(locale: Locale, content: HomeContent) {
  return buildLandingStructuredData(locale, "home", content.service, content.faq, {
    areaServed: "Global",
    sameAs: VICTOR_SAME_AS
  });
}
