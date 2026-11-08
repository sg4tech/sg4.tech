import { createLookup } from "../lookup";
import { buildLanguageAlternates } from "./alternates";
import { DEFAULT_LOCALE, getLocaleConfig, localizePath, type Locale, type SitePath } from "./locales";

// The site's pages (other than blog posts, which the post registry owns): where
// each lives and which languages it is published in. A page is listed under a
// locale only once that locale's route exists — this is what hreflang, the
// sitemap, and language links read.
export type PageKey = "home" | "yii2" | "ai-vibecoding" | "blog" | "privacy";

type PageSpec = {
  path: SitePath;
  locales: ReadonlyArray<Locale>;
};

const getPageSpec = createLookup<PageKey, PageSpec>({
  home: { path: "/", locales: ["en"] },
  yii2: { path: "/yii2/", locales: ["en"] },
  "ai-vibecoding": { path: "/ai-vibecoding/", locales: ["en"] },
  blog: { path: "/blog/", locales: ["en"] },
  privacy: { path: "/privacy/", locales: ["en"] }
});

/** Whether the page has a version in `locale`. */
export function isPagePublished(locale: Locale, page: PageKey): boolean {
  return getPageSpec(page).locales.includes(locale);
}

/** The page's served path in `locale`. Throws for a page with no version in
 * that locale: the link would be a 404, so the build fails and whoever adds
 * it decides where it should point instead. */
export function pagePath(locale: Locale, page: PageKey): SitePath {
  if (!isPagePublished(locale, page)) {
    throw new Error(`[pages] "${page}" is not published in ${locale}; add it to the registry or link elsewhere`);
  }
  return localizePath(locale, getPageSpec(page).path);
}

/** The locales the page is published in. */
export function pageLocales(page: PageKey): ReadonlyArray<Locale> {
  return getPageSpec(page).locales;
}

/** hreflang map across the page's language versions; undefined while it has one. */
export function pageLanguageAlternates(page: PageKey): Record<string, string> | undefined {
  return buildLanguageAlternates(
    pageLocales(page).map((locale) => ({ lang: getLocaleConfig(locale).htmlLang, path: pagePath(locale, page) })),
    getLocaleConfig(DEFAULT_LOCALE).htmlLang
  );
}
