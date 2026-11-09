import type { Metadata, Viewport } from "next";
import { LINKEDIN_URL, SITE_URL } from "./brand";
import { getDictionary } from "./i18n/dictionary";
import type { Locale } from "./i18n/locales";
import { siteTitleTemplate } from "./i18n/site-name";

// Site-wide metadata defaults. Each locale's root layout exports these; the
// global 404 spreads them too, because it renders outside every layout and
// inherits nothing.

export function buildSiteMetadata(locale: Locale): Metadata {
  const { author, document } = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: author.name,
      template: siteTitleTemplate(locale)
    },
    description: document.description,
    authors: [{ name: author.name, url: LINKEDIN_URL }],
    creator: author.name,
    publisher: author.name,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/brand/logo.svg", type: "image/svg+xml" }
      ]
    }
  };
}

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111"
};
