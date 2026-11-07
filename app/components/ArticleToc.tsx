import styles from "./ArticleToc.module.css";

export type TocItem = {
  id: string;
  title: string;
};

type ArticleTocProps = {
  items: ReadonlyArray<TocItem>;
};

// Contents list for long posts: in-page links to each section's h2 id.
export function ArticleToc({ items }: ArticleTocProps) {
  return (
    <nav className={styles.toc} aria-labelledby="article-toc-title">
      <p id="article-toc-title" className={styles.title}>Contents</p>
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
