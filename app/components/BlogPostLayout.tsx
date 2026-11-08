import Link from "next/link";
import type { ReactNode } from "react";
import { buildPostStructuredData } from "../lib/blog/post-schema";
import { getPostBySlug, type PostSlug } from "../lib/blog/posts";
import { getDictionary } from "../lib/i18n/dictionary";
import { localizePath, type Locale } from "../lib/i18n/locales";
import { BlogPostHeader } from "./BlogPostHeader";
import { Eyebrow } from "./Eyebrow";
import { FaqSection, type FaqItemData } from "./FaqSection";
import { Page } from "./Page";
import { Section } from "./Section";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import styles from "./BlogPostLayout.module.css";

type BlogPostLayoutProps = {
  locale: Locale;
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
  locale,
  slug,
  eyebrow,
  lede,
  faqItems,
  headline,
  partOf,
  children
}: BlogPostLayoutProps) {
  const post = getPostBySlug(slug);
  const blogPath = localizePath(locale, "/blog/");
  const structuredData = buildPostStructuredData(slug, faqItems, { headline, partOf });

  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteNav locale={locale} current={blogPath} />
      <Section className={styles.article}>
        <Link href={blogPath} className={styles.backLink}>
          {getDictionary(locale).blog.backLink}
        </Link>
        <Eyebrow>{eyebrow}</Eyebrow>
        <BlogPostHeader
          locale={locale}
          title={headline ?? post.title}
          publishedAt={post.publishedAt}
          readingMinutes={post.readingMinutes}
          lede={lede}
        />
        {children}
      </Section>
      <FaqSection locale={locale} items={faqItems} contentWrapperClassName={styles.faqColumn} />
      <SiteFooter locale={locale} />
    </Page>
  );
}
