import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./BlogRelated.module.css";

type RelatedLink = {
  href: string;
  title: string;
  description: string;
};

type BlogRelatedProps = {
  links: ReadonlyArray<RelatedLink>;
  intro?: ReactNode;
};

// Related links run across the post's topic cluster and to the matching
// service page, never to the CTA destination.
export function BlogRelated({
  links,
  intro = "Where to go next, depending on what you're working with."
}: BlogRelatedProps) {
  return (
    <aside className={styles.related}>
      <h3 className={styles.relatedTitle}>Related</h3>
      <p className={styles.relatedIntro}>{intro}</p>
      <ul className={styles.relatedList}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={styles.relatedLink}>
              <span className={styles.relatedLinkTitle}>{link.title}</span>
              <span className={styles.relatedLinkDescription}>{link.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
