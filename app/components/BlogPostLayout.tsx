import Link from "next/link";
import type { ReactNode } from "react";
import { buildPostStructuredData } from "../lib/blog/post-schema";
import { getPostBySlug, type PostSlug } from "../lib/blog/posts";
import { BlogPostHeader } from "./BlogPostHeader";
import { Eyebrow } from "./Eyebrow";
import { FaqSection, type FaqItemData } from "./FaqSection";
import { Page } from "./Page";
import { Section } from "./Section";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import styles from "./BlogPostLayout.module.css";

type BlogPostLayoutProps = {
  slug: PostSlug;
  eyebrow: string;
  lede: ReactNode;
  faqItems: ReadonlyArray<FaqItemData>;
  /** On-page H1 (and schema headline) when it differs from the registry title. */
  headline?: string;
  /** Pillar post this one belongs to, for the Article schema's isPartOf. */
  partOf?: PostSlug;
  /** The article body, CTA and related links. */
  children: ReactNode;
};

// Shell shared by every blog post: JSON-LD, nav, a single 42rem reading column
// (back link → eyebrow → header → body), the FAQ in the same column, footer.
export function BlogPostLayout({
  slug,
  eyebrow,
  lede,
  faqItems,
  headline,
  partOf,
  children
}: BlogPostLayoutProps) {
  const post = getPostBySlug(slug);
  const structuredData = buildPostStructuredData(slug, faqItems, { headline, partOf });

  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteNav />
      <Section className={styles.article}>
        <Link href="/blog/" className={styles.backLink}>
          ← Blog
        </Link>
        <Eyebrow>{eyebrow}</Eyebrow>
        <BlogPostHeader
          title={headline ?? post.title}
          publishedAt={post.publishedAt}
          readingMinutes={post.readingMinutes}
          lede={lede}
        />
        {children}
      </Section>
      <FaqSection items={faqItems} contentWrapperClassName={styles.faqColumn} />
      <SiteFooter />
    </Page>
  );
}
