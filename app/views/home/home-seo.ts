import type { Metadata } from "next";
import { VICTOR_SAME_AS } from "../../lib/brand";
import { withSiteName } from "../../lib/i18n/site-name";
import type { Locale } from "../../lib/i18n/locales";
import { buildPageMetadata } from "../../lib/page-metadata";
import { buildLandingStructuredData } from "../../lib/structured-data";
import type { HomeContent } from "./home-content";

// The home page's search title carries the site name itself, as a complete
// title, so no layout's template adds it again — whether or not the route
// sits in its layout's own segment. Link previews keep the bare title.
export function buildHomeMetadata(locale: Locale, content: HomeContent): Metadata {
  return buildPageMetadata(locale, "home", content.meta, { searchTitle: withSiteName(locale, content.meta.title) });
}

export function buildHomeStructuredData(locale: Locale, content: HomeContent) {
  return buildLandingStructuredData(locale, "home", content.service, content.faq, {
    areaServed: "Global",
    sameAs: VICTOR_SAME_AS
  });
}
