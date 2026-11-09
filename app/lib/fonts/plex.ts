import { IBM_Plex_Sans } from "next/font/google";

// Russian brand typeface: closest to Hanken Grotesk's proportions among the
// open-licence faces with Cyrillic. It stops at bold; heavier weights render
// at bold on Russian pages.
//
// Not preloaded: Turbopack bundles the font CSS of every root layout together
// and preloads all of it on every page, so a preloaded Plex would be fetched by
// English pages too. Unpreloaded, the browser fetches it only where the brand
// variable resolves to it — on Russian pages.
export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["cyrillic", "latin"],
  variable: "--font-brand",
  display: "swap",
  preload: false
});
