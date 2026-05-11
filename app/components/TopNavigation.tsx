import Link from "next/link";
import type { NavigationItem } from "../lib/navigation";
import styles from "./TopNavigation.module.css";

type TopNavigationProps = {
  items: ReadonlyArray<NavigationItem>;
  ariaLabel: string;
};

export function TopNavigation({ items, ariaLabel }: TopNavigationProps) {
  return (
    <nav className={styles.nav} aria-label={ariaLabel}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.brand}>
          Victor Demin
        </Link>
        <div className={styles.navLinks}>
          {items.map((item) => (
            <a key={item.href} href={item.href} data-mobile-nav={item.mobileNav}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
