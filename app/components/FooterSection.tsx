import { BrandIcon } from "./BrandIcon";
import type { FooterLink } from "../lib/navigation";
import styles from "./FooterSection.module.css";

type FooterSectionProps = {
  links: ReadonlyArray<FooterLink>;
  copyright: string;
};

export function FooterSection({ links, copyright }: FooterSectionProps) {
  return (
    <footer className={styles.footer} aria-label="Footer">
      <p className={styles.footerCopy}>{copyright}</p>
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
    </footer>
  );
}
