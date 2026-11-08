import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { Page } from "../components/Page";
import { Section } from "../components/Section";
import { SectionHeader } from "../components/SectionHeader";
import { SiteNav } from "../components/SiteNav";
import { absoluteUrl, BRAND_NAME, personSchema } from "../lib/brand";
import { blogFeedAlternates } from "../lib/blog/post-metadata";
import {
  BLOG_DESCRIPTION,
  BLOG_INDEX_PATH,
  BLOG_TITLE,
  blogPosts,
  formatPostDate,
  getLatestPosts,
  getPostPath,
  getPostUrl
} from "../lib/blog/posts";
import styles from "./page.module.css";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    {
      "@type": "Blog",
      "@id": `${absoluteUrl(BLOG_INDEX_PATH)}#blog`,
      url: absoluteUrl(BLOG_INDEX_PATH),
      name: BLOG_TITLE,
      description: BLOG_DESCRIPTION,
      author: { "@id": personSchema["@id"] },
      blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        "@id": `${getPostUrl(post.slug)}#article`,
        url: getPostUrl(post.slug),
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.modifiedAt,
        author: { "@id": personSchema["@id"] }
      }))
    }
  ]
};

export const metadata: Metadata = {
  title: "Blog",
  description: BLOG_DESCRIPTION,
  alternates: {
    canonical: BLOG_INDEX_PATH,
    types: blogFeedAlternates
  },
  openGraph: {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    type: "website",
    siteName: BRAND_NAME,
    locale: "en_US",
    url: absoluteUrl(BLOG_INDEX_PATH)
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
              <Link href={getPostPath(post.slug)} className={styles.card}>
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
