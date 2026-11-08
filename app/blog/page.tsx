import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { Page } from "../components/Page";
import { Section } from "../components/Section";
import { SectionHeader } from "../components/SectionHeader";
import { SiteNav } from "../components/SiteNav";
import { BRAND_NAME, personSchema, SITE_URL } from "../lib/brand";
import { BLOG_FEED_ALTERNATE } from "../lib/blog/feed";
import {
  BLOG_DESCRIPTION,
  BLOG_TITLE,
  blogPosts,
  formatPostDate,
  getLatestPosts
} from "../lib/blog/posts";
import styles from "./page.module.css";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog/#blog`,
      url: `${SITE_URL}/blog/`,
      name: BLOG_TITLE,
      description: BLOG_DESCRIPTION,
      author: { "@id": `${SITE_URL}/#person` },
      blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        "@id": `${SITE_URL}/blog/${post.slug}/#article`,
        url: `${SITE_URL}/blog/${post.slug}/`,
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.modifiedAt,
        author: { "@id": `${SITE_URL}/#person` }
      }))
    }
  ]
};

export const metadata: Metadata = {
  title: "Blog",
  description: BLOG_DESCRIPTION,
  alternates: {
    canonical: "/blog/",
    types: BLOG_FEED_ALTERNATE
  },
  openGraph: {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    type: "website",
    siteName: BRAND_NAME,
    locale: "en_US",
    url: `${SITE_URL}/blog/`
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION
  }
};

export default function BlogIndexPage() {
  const posts = getLatestPosts();

  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteNav current="/blog/" />
      <Section className={styles.intro}>
        <SectionHeader
          level="h1"
          title="Essays on engineering delivery"
          intro="Long-form pieces on the systems behind predictable shipping — metrics, bottlenecks, WIP, and the operator practices that move them."
        />
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}/`} className={styles.card}>
                <p className={styles.meta}>
                  <span className={styles.metaItem}>
                    <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                  </span>
                  <span className={styles.metaItem}>{post.readingMinutes} min read</span>
                </p>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.description}>{post.description}</p>
                {post.tags.length > 0 ? (
                  <ul className={styles.tags} aria-label="Tags">
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
      <SiteFooter />
    </Page>
  );
}
