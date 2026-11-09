import { TopNavigation } from "./TopNavigation";
import { getDictionary } from "../lib/i18n/dictionary";
import type { Locale } from "../lib/i18n/locales";
import { pagePathOrDefault } from "../lib/i18n/pages";
import { getSiteNavigationItems } from "../lib/navigation";

type SiteNavProps = {
  locale: Locale;
  // href of the page being shown; omit on pages that are not in the menu.
  current?: string;
};

// The one site menu, the same on every page.
export function SiteNav({ locale, current }: SiteNavProps) {
  return (
    <TopNavigation
      items={getSiteNavigationItems(locale)}
      ariaLabel={getDictionary(locale).navigation.ariaLabel}
      homeHref={pagePathOrDefault(locale, "home")}
      current={current}
    />
  );
}
