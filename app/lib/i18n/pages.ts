import type { SitePath } from "../brand";
import { createLookup } from "../lookup";
import { buildLanguageAlternates } from "./alternates";
import { DEFAULT_LOCALE, getLocaleConfig, type Locale } from "./locales";

// The site's pages (other than blog posts, which the post registry owns): where
// each lives and which languages it is published in. A page is listed under a
// locale only once that locale's route exists — this is what hreflang, the
// sitemap, and language links read.
export const PAGE_KEYS = ["home", "yii2", "ai-vibecoding", "blog", "privacy"] as const;
export type PageKey = (typeof PAGE_KEYS)[number];

type PageSpec<L extends string> = {
  path: SitePath;
  locales: ReadonlyArray<L>;
};

/** What the registry needs to know about a locale to build its URLs. */
type LocaleUrls = {
  htmlLang: string;
  /** URL prefix in front of every path; empty for the default locale. */
  pathPrefix: "" | `/${string}`;
};

// Builds the registry's accessors over a page table and locale config. The
// site uses one instance (below); tests build their own with more locales.
export function createPageRegistry<L extends string>(
  pages: Record<PageKey, PageSpec<L>>,
  localeUrls: (locale: L) => LocaleUrls,
  defaultLocale: L
) {
  const getPageSpec = createLookup<PageKey, PageSpec<L>>(pages);

  // Prefixes a path with the locale's URL segment. Private: every localized
  // path goes through the registry (pagePath here, getPostPath for posts), so
  // none can point at a page that does not exist in that locale.
  function localizePath(locale: L, path: SitePath): SitePath {
    const { pathPrefix } = localeUrls(locale);
    return pathPrefix === "" ? path : `${pathPrefix}${path}`;
  }

  /** Whether the page has a version in `locale`. */
  function isPagePublished(locale: L, page: PageKey): boolean {
    return getPageSpec(page).locales.includes(locale);
  }

  /** The page's served path in `locale`. Throws for a page with no version in
   * that locale: the link would be a 404, so the build fails and whoever adds
   * it decides where it should point instead. */
  function pagePath(locale: L, page: PageKey): SitePath {
    if (!isPagePublished(locale, page)) {
      throw new Error(`[pages] "${page}" is not published in ${locale}; add it to the registry or link elsewhere`);
    }
    return localizePath(locale, getPageSpec(page).path);
  }

  /** The page's path in `locale`, or in the default locale while it has no
   * version there. For links every page carries (the logo, the footer's legal
   * links); a link that must stay in the reader's language uses pagePath. */
  function pagePathOrDefault(locale: L, page: PageKey): SitePath {
    return pagePath(isPagePublished(locale, page) ? locale : defaultLocale, page);
  }

  /** The locales the page is published in. */
  function pageLocales(page: PageKey): ReadonlyArray<L> {
    return getPageSpec(page).locales;
  }

  /** hreflang map across the page's language versions; undefined while it has one. */
  function pageLanguageAlternates(page: PageKey): Record<string, string> | undefined {
    return buildLanguageAlternates(
      pageLocales(page).map((locale) => ({ lang: localeUrls(locale).htmlLang, path: pagePath(locale, page) })),
      localeUrls(defaultLocale).htmlLang
    );
  }

  return { isPagePublished, pagePath, pagePathOrDefault, pageLocales, pageLanguageAlternates };
}

const registry = createPageRegistry<Locale>(
  {
    home: { path: "/", locales: ["en", "ru", "de", "pt-br", "fr", "es"] },
    yii2: { path: "/yii2/", locales: ["en", "ru", "de", "pt-br", "fr", "es"] },
    "ai-vibecoding": { path: "/ai-vibecoding/", locales: ["en", "ru", "de", "pt-br", "fr", "es"] },
    blog: { path: "/blog/", locales: ["en"] },
    privacy: { path: "/privacy/", locales: ["en"] }
  },
  getLocaleConfig,
  DEFAULT_LOCALE
);

export const { isPagePublished, pagePath, pagePathOrDefault, pageLocales, pageLanguageAlternates } = registry;
