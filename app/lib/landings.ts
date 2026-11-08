import type { SitePath } from "./brand";

// Served paths of the landing pages. The one list the pages' canonical and
// og:url, the sitemap, and the tests read, so a landing cannot be added or
// moved in one of them only.
export const LANDING_PATHS = {
  home: "/",
  yii2: "/yii2/",
  aiVibecoding: "/ai-vibecoding/"
} as const satisfies Record<string, SitePath>;
