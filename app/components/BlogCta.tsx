import type { ReactNode } from "react";
import { getDictionary } from "../lib/i18n/dictionary";
import { getPostBySlug, type PostSlug } from "../lib/blog/posts";
import styles from "./BlogCta.module.css";

type BlogCtaProps = {
  /** The post this block belongs to; its language comes from the post registry. */
  post: PostSlug;
  heading: ReactNode;
  /** Telegram deep link; the start parameter attributes the click to the post. */
  href: string;
  children: ReactNode;
};

// The single conversion block at the end of a post.
export function BlogCta({ post, heading, href, children }: BlogCtaProps) {
  return (
    <aside className={styles.cta}>
      <h3 className={styles.ctaHeading}>{heading}</h3>
      <p className={styles.ctaText}>{children}</p>
      <a href={href} target="_blank" rel="noreferrer" className={styles.ctaButton}>
        {getDictionary(getPostBySlug(post).locale).blog.ctaButton}
      </a>
    </aside>
  );
}
