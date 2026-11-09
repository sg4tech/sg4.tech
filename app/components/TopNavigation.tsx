import { Globe } from "lucide-react";
import Link from "next/link";
import type { LanguageVersion, NavigationItem } from "../lib/navigation";
import { Icon } from "./Icon";
import styles from "./TopNavigation.module.css";

type TopNavigationProps = {
  items: ReadonlyArray<NavigationItem>;
  ariaLabel: string;
  // Home page of the current locale, linked from the brand mark.
  homeHref: string;
  // href of the page being shown, marked with aria-current.
  current?: string;
  // The shown page in other languages; rendered after the page links.
  languageVersions: ReadonlyArray<LanguageVersion>;
};

export function TopNavigation({ items, ariaLabel, homeHref, current, languageVersions }: TopNavigationProps) {
  // On phones the logo, two page pills and the language switch do not fit one
  // row, so a page with a switch drops the Home pill there: the logo leads home.
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
          {languageVersions.map((version) => (
            <a
              key={version.href}
              href={version.href}
              hrefLang={version.lang}
              lang={version.lang}
              aria-label={version.label}
              className={styles.languageSwitch}
            >
              <Icon icon={Globe} className={styles.languageIcon} />
              {version.code}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
