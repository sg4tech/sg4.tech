import { TopNavigation } from "./TopNavigation";
import { getDictionary } from "../lib/i18n/dictionary";
import type { Locale } from "../lib/i18n/locales";
import { type PageKey, pagePath, pagePathOrDefault } from "../lib/i18n/pages";
import type { PostSlug } from "../lib/blog/posts";
import { getLanguageMenu, getPostLanguageMenu, getSiteNavigationItems } from "../lib/navigation";

type SiteNavProps = {
  locale: Locale;
  // The registry page being shown: marks it in the menu and links its other
  // language versions. Omit on pages outside the registry.
  page?: PageKey;
  // The blog post being shown: links its other language versions.
  post?: PostSlug;
  // href to mark as current when it is not the shown page's own (a blog post
  // marks the blog). Defaults to the shown page's path.
  current?: string;
};

// The one site menu, the same on every page.
export function SiteNav({ locale, page, post, current }: SiteNavProps) {
  return (
    <TopNavigation
      items={getSiteNavigationItems(locale)}
      ariaLabel={getDictionary(locale).navigation.ariaLabel}
      languageMenuLabel={getDictionary(locale).navigation.languageMenuLabel}
      homeHref={pagePathOrDefault(locale, "home")}
      current={current ?? (page === undefined ? undefined : pagePath(locale, page))}
      languageVersions={languageVersions(locale, page, post)}
    />
  );
}

function languageVersions(locale: Locale, page: PageKey | undefined, post: PostSlug | undefined) {
  if (post !== undefined) {
    return getPostLanguageMenu(post);
  }
  return page === undefined ? [] : getLanguageMenu(locale, page);
}
