"use client";

import { Globe } from "lucide-react";
import { useEffect, useRef } from "react";
import type { LanguageVersion } from "../lib/navigation";
import { Icon } from "./Icon";
import styles from "./TopNavigation.module.css";

type TopNavigationLanguageMenuProps = {
  label: string;
  versions: ReadonlyArray<LanguageVersion>;
};

// The language menu at the end of the site menu: a native disclosure, so it
// opens without JavaScript, from the keyboard and on touch. The button shows
// the current language's code; the list names every language in its own words.
// Once the page is interactive, a click elsewhere or Escape closes it, as a
// menu is expected to.
export function TopNavigationLanguageMenu({ label, versions }: TopNavigationLanguageMenuProps) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (menu === null) {
      return undefined;
    }
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (menu.open && event.target instanceof Node && !menu.contains(event.target)) {
        menu.open = false;
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (menu.open && event.key === "Escape") {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const shown = versions.find((version) => version.current);
  return (
    <details ref={menuRef} className={styles.languageMenu}>
      <summary className={styles.languageSwitch} aria-label={label}>
        <Icon icon={Globe} className={styles.languageIcon} />
        {shown?.code}
      </summary>
      <ul className={styles.languageList}>
        {versions.map((version) => (
          <li key={version.href}>
            <a
              href={version.href}
              hrefLang={version.lang}
              lang={version.lang}
              aria-current={version.current ? "true" : undefined}
            >
              {version.name}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
