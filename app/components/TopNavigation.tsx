import Link from "next/link";
import type { LanguageVersion, NavigationItem } from "../lib/navigation";
import styles from "./TopNavigation.module.css";
import { TopNavigationLanguageMenu } from "./TopNavigationLanguageMenu";

type TopNavigationProps = {
  items: ReadonlyArray<NavigationItem>;
  ariaLabel: string;
  // Accessible name of the language menu button.
  languageMenuLabel: string;
  // Home page of the current locale, linked from the brand mark.
  homeHref: string;
  // href of the page being shown, marked with aria-current.
  current?: string;
  // Every language version of the shown page, the shown one included; empty
  // hides the language menu.
  languageVersions: ReadonlyArray<LanguageVersion>;
};

export function TopNavigation({
  items,
  ariaLabel,
  languageMenuLabel,
  homeHref,
  current,
  languageVersions
}: TopNavigationProps) {
  // On phones the logo, two page pills and the language menu do not fit one
  // row, so a page with a menu drops the Home pill there: the logo leads home.
  const mobileNav = (item: NavigationItem) =>
    languageVersions.length > 0 && item.href === homeHref ? "secondary" : item.mobileNav;
  return (
    <nav className={styles.nav} aria-label={ariaLabel}>
      <div className={styles.navInner}>
        <Link href={homeHref} className={styles.brand}>
          <span aria-hidden className={styles.brandMark} />
          <span>
            Victor Demin<span aria-hidden className={styles.brandDot}>.</span>
          </span>
        </Link>
        <div className={styles.navLinks}>
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-mobile-nav={mobileNav(item)}
              aria-current={item.href === current ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
          {languageVersions.length > 0 ? (
            <TopNavigationLanguageMenu label={languageMenuLabel} versions={languageVersions} />
          ) : null}
        </div>
      </div>
    </nav>
  );
}
