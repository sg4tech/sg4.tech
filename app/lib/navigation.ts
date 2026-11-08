import { getDictionary } from "./i18n/dictionary";
import type { Locale } from "./i18n/locales";
import { pagePath } from "./i18n/pages";
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

type NavigationKey = SiteDictionary["navigation"]["items"][number]["key"];

// How each menu item behaves on phones. Where it points comes from the page
// registry; labels and their order come from the locale's dictionary.
const getMobileNav = createLookup<NavigationKey, NavigationItem["mobileNav"]>({
  home: "primary",
  blog: "primary",
  yii2: "secondary",
  "ai-vibecoding": "secondary"
});

// The one site menu, rendered on every page via <SiteNav />. Navigation only:
// pages, no in-page anchors and no Contact (each page has its own CTAs).
// "secondary" items are hidden on phones, where four pills do not fit.
export function getSiteNavigationItems(locale: Locale): NavigationItem[] {
  return getDictionary(locale).navigation.items.map(({ key, label }) => ({
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

// Internal legal/utility links in the footer. Trailing-slash paths match
// next.config trailingSlash: true (the slash-less form 301-redirects).
export function getLegalLinks(locale: Locale): LegalLink[] {
  return [{ label: getDictionary(locale).footer.privacyLabel, href: pagePath(locale, "privacy") }];
}
