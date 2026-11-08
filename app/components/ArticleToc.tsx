import { getDictionary } from "../lib/i18n/dictionary";
import { getPostBySlug, type PostSlug } from "../lib/blog/posts";
import styles from "./ArticleToc.module.css";

export type TocItem = {
  id: string;
  title: string;
};

type ArticleTocProps = {
  /** The post this block belongs to; its language comes from the post registry. */
  post: PostSlug;
  items: ReadonlyArray<TocItem>;
};

// Contents list for long posts: in-page links to each section's h2 id.
export function ArticleToc({ post, items }: ArticleTocProps) {
  return (
    <nav className={styles.toc} aria-labelledby="article-toc-title">
      <p id="article-toc-title" className={styles.title}>{getDictionary(getPostBySlug(post).locale).blog.tocHeading}</p>
      <ol className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={styles.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
