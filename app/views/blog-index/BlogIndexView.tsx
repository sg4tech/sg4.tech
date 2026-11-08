import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { Page } from "../../components/Page";
import { Section } from "../../components/Section";
import { SectionHeader } from "../../components/SectionHeader";
import { SiteNav } from "../../components/SiteNav";
import { formatPostDate, getLatestPosts, getPostPath } from "../../lib/blog/posts";
import { getDictionary } from "../../lib/i18n/dictionary";
import type { Locale } from "../../lib/i18n/locales";
import { pagePath } from "../../lib/i18n/pages";
import type { BlogIndexContent } from "./blog-index-content";
import { buildBlogIndexStructuredData } from "./blog-index-seo";
import styles from "./BlogIndexView.module.css";


type BlogIndexViewProps = {
  locale: Locale;
  content: BlogIndexContent;
};

// The blog index, the same in every locale; it lists that locale's posts.
export function BlogIndexView({ locale, content }: BlogIndexViewProps) {
  const { blog } = getDictionary(locale);

  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBlogIndexStructuredData(locale, content)) }}
      />
      <SiteNav locale={locale} current={pagePath(locale, "blog")} />
      <Section className={styles.intro}>
        <SectionHeader level="h1" title={content.heading} intro={content.intro} />
        <ul className={styles.list}>
          {getLatestPosts(locale).map((post) => (
            <li key={post.slug}>
              <Link href={getPostPath(post.slug)} className={styles.card}>
                <p className={styles.meta}>
                  <span className={styles.metaItem}>
                    <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt, locale)}</time>
                  </span>
                  <span className={styles.metaItem}>{blog.readingTime(post.readingMinutes)}</span>
                </p>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.description}>{post.description}</p>
                {post.tags.length > 0 ? (
                  <ul className={styles.tags} aria-label={blog.tagsAriaLabel}>
                    {post.tags.map((tag) => (
                      <li key={tag} className={styles.tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <SiteFooter locale={locale} />
    </Page>
  );
}
