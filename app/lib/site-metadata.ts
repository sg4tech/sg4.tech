import type { Metadata, Viewport } from "next";
import { LINKEDIN_URL, SITE_URL, VICTOR_NAME } from "./brand";
import { getDictionary } from "./i18n/dictionary";
import type { Locale } from "./i18n/locales";

// Site-wide metadata defaults. Each locale's root layout exports these; the
// global 404 spreads them too, because it renders outside every layout and
// inherits nothing.
export const SITE_TITLE_TEMPLATE = `%s | ${VICTOR_NAME}`;

export function buildSiteMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: VICTOR_NAME,
      template: SITE_TITLE_TEMPLATE
    },
    description: getDictionary(locale).document.description,
    authors: [{ name: VICTOR_NAME, url: LINKEDIN_URL }],
    creator: VICTOR_NAME,
    publisher: VICTOR_NAME,
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
