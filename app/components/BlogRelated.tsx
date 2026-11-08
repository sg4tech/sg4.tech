import Link from "next/link";
import type { ReactNode } from "react";
import { getDictionary } from "../lib/i18n/dictionary";
import { getPostBySlug, type PostSlug } from "../lib/blog/posts";
import styles from "./BlogRelated.module.css";

type RelatedLink = {
  href: string;
  title: string;
  description: string;
};

type BlogRelatedProps = {
  /** The post this block belongs to; its language comes from the post registry. */
  post: PostSlug;
  links: ReadonlyArray<RelatedLink>;
  intro?: ReactNode;
};

// Related links run across the post's topic cluster and to the matching
// service page, never to the CTA destination.
export function BlogRelated({ post, links, intro }: BlogRelatedProps) {
  const { blog } = getDictionary(getPostBySlug(post).locale);
  return (
    <aside className={styles.related}>
      <h3 className={styles.relatedTitle}>{blog.relatedHeading}</h3>
      <p className={styles.relatedIntro}>{intro ?? blog.relatedIntro}</p>
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
