import Link from "next/link";
import { BrandIcon } from "./BrandIcon";
import type { FooterDisclaimer } from "../lib/i18n/types";
import type { FooterLink, LegalLink } from "../lib/navigation";
import styles from "./FooterSection.module.css";

type FooterSectionProps = {
  links: ReadonlyArray<FooterLink>;
  copyright: string;
  legalLinks?: ReadonlyArray<LegalLink>;
  disclaimers?: ReadonlyArray<FooterDisclaimer>;
  ariaLabel: string;
  legalAriaLabel: string;
};

export function FooterSection({
  links,
  copyright,
  legalLinks,
  disclaimers,
  ariaLabel,
  legalAriaLabel
}: FooterSectionProps) {
  return (
    <footer className={styles.footer} aria-label={ariaLabel}>
      <div className={styles.footerTop}>
        <div className={styles.footerMeta}>
          <span aria-hidden className={styles.footerMark} />
          <p className={styles.footerCopy}>{copyright}</p>
          {legalLinks && legalLinks.length > 0 ? (
            <nav className={styles.footerLegal} aria-label={legalAriaLabel}>
              {legalLinks.map((link) => (
                <Link key={link.label} href={link.href} className={styles.footerLegalLink}>
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
        <div className={styles.footerLinks}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.footerLink}
              target="_blank"
              rel="noreferrer"
            >
              <BrandIcon label={link.label} path={link.iconPath} className={styles.footerIcon} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
      {disclaimers && disclaimers.length > 0 ? (
        <div className={styles.footerFinePrint}>
          {disclaimers.map((disclaimer) => (
            <p key={disclaimer.label} className={styles.footerDisclaimer}>
              <span className={styles.footerDisclaimerLabel}>{disclaimer.label}.</span>{" "}
              {disclaimer.body}
            </p>
          ))}
        </div>
      ) : null}
    </footer>
  );
}
