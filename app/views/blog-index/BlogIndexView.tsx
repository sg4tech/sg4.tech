import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { Page } from "../../components/Page";
import { Section } from "../../components/Section";
import { SectionHeader } from "../../components/SectionHeader";
import { SiteNav } from "../../components/SiteNav";
import { blogPosts, formatPostDate, getLatestPosts, postPath } from "../../lib/blog/posts";
import { BRAND_NAME, personSchema, SITE_URL } from "../../lib/brand";
import { getDictionary } from "../../lib/i18n/dictionary";
import { getLocaleConfig, type Locale } from "../../lib/i18n/locales";
import { pageLanguageAlternates, pagePath } from "../../lib/i18n/pages";
import styles from "./BlogIndexView.module.css";


// Everything the blog index says, in one locale. Post titles, dates, and
// descriptions come from the post registry.
export type BlogIndexContent = {
  title: string;
  /** Title for link previews and the Blog schema node. */
  socialTitle: string;
  description: string;
  heading: string;
  intro: string;
};

export function buildBlogIndexMetadata(locale: Locale, content: BlogIndexContent): Metadata {
  const path = pagePath(locale, "blog");
  const languages = pageLanguageAlternates("blog");
  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: path,
      ...(languages ? { languages } : {})
    },
    openGraph: {
      title: content.socialTitle,
      description: content.description,
      type: "website",
      siteName: BRAND_NAME,
      locale: getLocaleConfig(locale).ogLocale,
      url: `${SITE_URL}${path}`
    },
    twitter: {
      card: "summary_large_image",
      title: content.socialTitle,
      description: content.description
    }
  };
}

function buildStructuredData(locale: Locale, content: BlogIndexContent) {
  const blogUrl = `${SITE_URL}${pagePath(locale, "blog")}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      {
        "@type": "Blog",
        "@id": `${blogUrl}#blog`,
        url: blogUrl,
        name: content.socialTitle,
        description: content.description,
        author: { "@id": `${SITE_URL}/#person` },
        blogPost: blogPosts
          .filter((post) => post.locale === locale)
          .map((post) => ({
            "@type": "BlogPosting",
            "@id": `${SITE_URL}${postPath(post)}#article`,
            url: `${SITE_URL}${postPath(post)}`,
            headline: post.title,
            description: post.description,
            datePublished: post.publishedAt,
            dateModified: post.modifiedAt,
            author: { "@id": `${SITE_URL}/#person` }
          }))
      }
    ]
  };
}

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData(locale, content)) }}
      />
      <SiteNav locale={locale} current={pagePath(locale, "blog")} />
      <Section className={styles.intro}>
        <SectionHeader level="h1" title={content.heading} intro={content.intro} />
        <ul className={styles.list}>
          {getLatestPosts(locale).map((post) => (
            <li key={post.slug}>
              <Link href={postPath(post)} className={styles.card}>
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
