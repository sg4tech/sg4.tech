import { TopNavigation } from "./TopNavigation";
import { getDictionary } from "../lib/i18n/dictionary";
import type { Locale } from "../lib/i18n/locales";
import { type PageKey, pagePath, pagePathOrDefault } from "../lib/i18n/pages";
import { getLanguageVersions, getSiteNavigationItems } from "../lib/navigation";

type SiteNavProps = {
  locale: Locale;
  // The registry page being shown: marks it in the menu and links its other
  // language versions. Omit on pages outside the registry.
  page?: PageKey;
  // href to mark as current when it is not the shown page's own (a blog post
  // marks the blog). Defaults to the shown page's path.
  current?: string;
};

// The one site menu, the same on every page.
export function SiteNav({ locale, page, current }: SiteNavProps) {
  return (
    <TopNavigation
      items={getSiteNavigationItems(locale)}
      ariaLabel={getDictionary(locale).navigation.ariaLabel}
      homeHref={pagePathOrDefault(locale, "home")}
      current={current ?? (page === undefined ? undefined : pagePath(locale, page))}
      languageVersions={page === undefined ? [] : getLanguageVersions(locale, page)}
    />
  );
}
