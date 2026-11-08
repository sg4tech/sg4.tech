import { SITE_URL } from "./brand";

// Umami tracker script settings, rendered once by the root layout. Kept apart
// from analytics.ts because that module is imported by client components, and
// this one pulls in brand.ts.
//
// `domains` limits tracking to the production host, so local runs (dev server,
// preview, Lighthouse CI) never reach the stats.
export const umamiTracker = {
  src: "https://cloud.umami.is/script.js",
  websiteId: "e6f16f01-14da-478f-95c7-d574ee9122c2",
  domains: new URL(SITE_URL).hostname
} as const;
