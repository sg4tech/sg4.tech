import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { Page } from "../components/Page";
import { Section } from "../components/Section";
import { SectionHeader } from "../components/SectionHeader";
import { TopNavigation } from "../components/TopNavigation";
import { BRAND_NAME, personSchema, SITE_URL } from "../lib/brand";
import { blogPosts, formatPostDate } from "../lib/blog/posts";
import { siteNavigationItems } from "../lib/navigation";
import styles from "./page.module.css";

// The blog index drops its own "/blog/" self-link but otherwise mirrors the
// canonical site nav, so derive from siteNavigationItems instead of duplicating
// it — a new site-nav entry then reaches this page automatically.
const navigationItems = siteNavigationItems.filter((item) => item.href !== "/blog/");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog/#blog`,
      url: `${SITE_URL}/blog/`,
      name: "Blog — Victor Demin",
      description:
        "Long-form essays on engineering delivery systems, metrics, bottlenecks, and the operator practices behind predictable shipping.",
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
  description:
    "Long-form essays on engineering delivery systems, metrics, bottlenecks, and the operator practices behind predictable shipping.",
  alternates: {
    canonical: "/blog/"
  },
  openGraph: {
    title: "Blog — Victor Demin",
    description:
      "Long-form essays on engineering delivery systems, metrics, bottlenecks, and the operator practices behind predictable shipping.",
    type: "website",
    siteName: BRAND_NAME,
    locale: "en_US",
    url: `${SITE_URL}/blog/`
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Victor Demin",
    description:
      "Long-form essays on engineering delivery systems, metrics, bottlenecks, and the operator practices behind predictable shipping."
  }
};

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );

  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TopNavigation items={navigationItems} ariaLabel="Site navigation" />
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
