import { getDictionary } from "./i18n/dictionary";
import { localizePath, type Locale, type SitePath } from "./i18n/locales";
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

// Where each menu item points and how it behaves on phones. Labels and their
// order come from the locale's dictionary.
const getNavigationRoute = createLookup<NavigationKey, { path: SitePath; mobileNav: NavigationItem["mobileNav"] }>({
  home: { path: "/", mobileNav: "primary" },
  blog: { path: "/blog/", mobileNav: "primary" },
  yii2: { path: "/yii2/", mobileNav: "secondary" },
  "ai-vibecoding": { path: "/ai-vibecoding/", mobileNav: "secondary" }
});

// The one site menu, rendered on every page via <SiteNav />. Navigation only:
// pages, no in-page anchors and no Contact (each page has its own CTAs).
// "secondary" items are hidden on phones, where four pills do not fit.
export function getSiteNavigationItems(locale: Locale): NavigationItem[] {
  return getDictionary(locale).navigation.items.map(({ key, label }) => {
    const route = getNavigationRoute(key);
    return { href: localizePath(locale, route.path), label, mobileNav: route.mobileNav };
  });
}

// Internal legal/utility links in the footer. Trailing-slash paths match
// next.config trailingSlash: true (the slash-less form 301-redirects).
export function getLegalLinks(locale: Locale): LegalLink[] {
  return [{ label: getDictionary(locale).footer.privacyLabel, href: localizePath(locale, "/privacy/") }];
}
