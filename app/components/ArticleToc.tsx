import { getDictionary } from "../lib/i18n/dictionary";
import type { Locale } from "../lib/i18n/locales";
import styles from "./ArticleToc.module.css";

export type TocItem = {
  id: string;
  title: string;
};

type ArticleTocProps = {
  locale: Locale;
  items: ReadonlyArray<TocItem>;
};

// Contents list for long posts: in-page links to each section's h2 id.
export function ArticleToc({ locale, items }: ArticleTocProps) {
  return (
    <nav className={styles.toc} aria-labelledby="article-toc-title">
      <p id="article-toc-title" className={styles.title}>{getDictionary(locale).blog.tocHeading}</p>
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
