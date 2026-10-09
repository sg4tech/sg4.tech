import type { ReactNode } from "react";
import styles from "./BlogCta.module.css";

type BlogCtaProps = {
  heading: ReactNode;
  /** Telegram deep link; the start parameter attributes the click to the post. */
  href: string;
  children: ReactNode;
};

// The single conversion block at the end of a post.
export function BlogCta({ heading, href, children }: BlogCtaProps) {
  return (
    <aside className={styles.cta}>
      <h3 className={styles.ctaHeading}>{heading}</h3>
      <p className={styles.ctaText}>{children}</p>
      <a href={href} target="_blank" rel="noreferrer" className={styles.ctaButton}>
        Book a diagnostic call on Telegram
      </a>
    </aside>
  );
}
