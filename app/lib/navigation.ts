import { getPostPath, getPostTranslations, type PostSlug } from "./blog/posts";
import { getDictionary } from "./i18n/dictionary";
import { DEFAULT_LOCALE, getLocaleConfig, LOCALES, type Locale } from "./i18n/locales";
import { isPagePublished, type PageKey, pagePath, pagePathOrDefault } from "./i18n/pages";
import type { SiteDictionary } from "./i18n/types";
import { createLookup } from "./lookup";

export type NavigationItem = {
  href: string;
  label: string;
  mobileNav: "primary" | "secondary";
};

export type FooterLink = {
  label: string;
  href: string;
  iconPath: string;
};

// Internal legal/utility links (Privacy, etc.). No icon and no target="_blank" —
// these stay on-site, unlike the icon-bearing social links in FooterLink.
export type LegalLink = {
  label: string;
  href: string;
};

// One language version of the page shown, named in that language.
export type LanguageVersion = {
  href: string;
  code: string;
  name: string;
  lang: string;
  /** The version being shown. */
  current: boolean;
};

type NavigationKey = SiteDictionary["navigation"]["items"][number]["key"];

// How each menu item behaves on phones. Where it points comes from the page
// registry; labels and their order come from the locale's dictionary.
const getMobileNav = createLookup<NavigationKey, NavigationItem["mobileNav"]>({
  home: "primary",
  blog: "primary",
  yii2: "secondary",
  "ai-vibecoding": "secondary"
});

// Menu entries whose page exists in the locale; a page not yet translated
// drops out of that locale's menu instead of linking to a 404.
export function keepPublishedItems<Item extends { key: NavigationKey }>(
  items: ReadonlyArray<Item>,
  isPublished: (key: NavigationKey) => boolean
): Item[] {
  return items.filter((item) => isPublished(item.key));
}

// The one site menu, rendered on every page via <SiteNav />. Navigation only:
// pages, no in-page anchors and no Contact (each page has its own CTAs).
// "secondary" items are hidden on phones, where four pills do not fit.
export function getSiteNavigationItems(locale: Locale): NavigationItem[] {
  const items = keepPublishedItems(getDictionary(locale).navigation.items, (key) => isPagePublished(locale, key));
  return items.map(({ key, label }) => ({
    href: pagePath(locale, key),
    label,
    mobileNav: getMobileNav(key)
  }));
}

// The menu label for one page, e.g. for breadcrumbs that should read like the nav.
export function getNavigationLabel(locale: Locale, key: NavigationKey): string {
  const item = getDictionary(locale).navigation.items.find((entry) => entry.key === key);
  if (!item) {
    throw new Error(`[navigation] the ${locale} dictionary has no menu label for "${key}"`);
  }
  return item.label;
}

// Internal legal/utility links in the footer, in English until the page is
// translated. Trailing-slash paths match next.config trailingSlash: true (the
// slash-less form 301-redirects).
export function getLegalLinks(locale: Locale): LegalLink[] {
  return [{ label: getDictionary(locale).footer.privacyLabel, href: pagePathOrDefault(locale, "privacy") }];
}

// Every language the page is published in, for the language menu; empty for a
// page that exists in one language, so the menu never links to a 404.
export function getLanguageMenu(locale: Locale, page: PageKey): LanguageVersion[] {
  const versions = LOCALES.filter((other) => isPagePublished(other, page)).map((other) => ({
    locale: other,
    href: pagePath(other, page)
  }));
  return toLanguageMenu(locale, versions);
}

// The same menu for a blog post, from its translations in the post registry.
export function getPostLanguageMenu(slug: PostSlug): LanguageVersion[] {
  const translations = getPostTranslations(slug);
  const locale = translations.find((post) => post.slug === slug)?.locale ?? DEFAULT_LOCALE;
  const versions = LOCALES.flatMap((other) =>
    translations.filter((post) => post.locale === other).map((post) => ({ locale: other, href: getPostPath(post.slug) }))
  );
  return toLanguageMenu(locale, versions);
}

// Names each version in its own language; empty while there is only one.
function toLanguageMenu(
  locale: Locale,
  versions: ReadonlyArray<{ locale: Locale; href: string }>
): LanguageVersion[] {
  if (versions.length < 2) {
    return [];
  }
  return versions.map((version) => {
    const { language } = getDictionary(version.locale);
    return {
      href: version.href,
      code: language.code,
      name: language.name,
      lang: getLocaleConfig(version.locale).htmlLang,
      current: version.locale === locale
    };
  });
}
