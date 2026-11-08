import type { Metadata, Viewport } from "next";
import { LINKEDIN_URL, SITE_URL } from "./brand";

// Site-wide metadata defaults. Root layouts export these; the global 404 spreads
// them too, because it renders outside every layout and inherits nothing.
export const SITE_TITLE_TEMPLATE = "%s | Victor Demin";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Victor Demin",
    template: SITE_TITLE_TEMPLATE
  },
  description:
    "Victor Demin — hands-on software engineer and engineering leader. Software systems that ship on time and hold up in production.",
  authors: [{ name: "Victor Demin", url: LINKEDIN_URL }],
  creator: "Victor Demin",
  publisher: "Victor Demin",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/logo.svg", type: "image/svg+xml" }
    ]
  }
};

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111"
};
