import Image from "next/image";
import { getDictionary } from "../lib/i18n/dictionary";
import type { Locale } from "../lib/i18n/locales";
import type { HeroSignal } from "../lib/proof";
import { BrandIcon } from "./BrandIcon";
import styles from "./HeroSignals.module.css";

type HeroSignalsProps = {
  locale: Locale;
  signals: ReadonlyArray<HeroSignal>;
  className?: string;
};

/**
 * HeroSignals — the brand's hero credibility row: a wrap of pill chips, each
 * a client logo, a brand-icon link, or a plain label. Shared across all three
 * landing heroes so the trust row stays identical and edits land in one place.
 */
export function HeroSignals({ locale, signals, className }: HeroSignalsProps) {
  const cls = [styles.signals, className].filter(Boolean).join(" ");
  return (
    <div className={cls} aria-label={getDictionary(locale).proof.heroSignalsAriaLabel}>
      {signals.map((item) => {
        const inner = (
          <>
            {item.logo ? (
              <Image
                src={item.logo}
                alt={item.label}
                width={item.logoWidth ?? 100}
                height={item.logoHeight ?? 30}
                className={styles.logo}
                unoptimized
              />
            ) : null}
            {item.iconPath ? <BrandIcon label={item.label} path={item.iconPath} className={styles.icon} /> : null}
            {!item.logo || item.iconPath || item.labelAfterLogo ? <span className={styles.label}>{item.label}</span> : null}
          </>
        );
        if (item.href) {
          return (
            <a key={item.label} href={item.href} className={styles.signal} target="_blank" rel="noreferrer">
              {inner}
            </a>
          );
        }
        return (
          <span key={item.label} className={styles.signal}>
            {inner}
          </span>
        );
      })}
    </div>
  );
}
