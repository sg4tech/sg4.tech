import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "../../components/Eyebrow";
import { FaqSection } from "../../components/FaqSection";
import { FooterSection } from "../../components/FooterSection";
import { Page } from "../../components/Page";
import { Section } from "../../components/Section";
import { TopNavigation } from "../../components/TopNavigation";
import { BRAND_COPYRIGHT, BRAND_NAME, footerLinks, legalLinks, personSchema, SITE_URL } from "../../lib/brand";
import type { NavigationItem } from "../../lib/navigation";
import { formatPostDate, getPostBySlug, type PostSlug } from "../../lib/blog/posts";
import {
  ArticleHeader,
  IntroSection,
  SectionAverageComfort,
  SectionGapDiagnosis,
  SectionMedianTypical,
  SectionPickPercentile,
  SectionPredictability
} from "./article-content";
import { ArticleCta, ArticleRelated } from "./article-tail";
import styles from "./page.module.css";

// PostSlug-typed: a typo here fails the build via type-narrowed
// getPostBySlug, not via runtime "cannot read 'title' of undefined".
const SLUG: PostSlug = "forecast-delivery-with-percentiles";
const POST = getPostBySlug(SLUG);
const POST_URL = `${SITE_URL}/blog/${SLUG}/`;

const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home", mobileNav: "primary" },
  { href: "/blog/", label: "Blog", mobileNav: "primary" },
  { href: "/yii2/", label: "Yii2", mobileNav: "secondary" },
  { href: "/ai-vibecoding/", label: "AI vibecoding", mobileNav: "secondary" }
];

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// Each question targets a query intent the body doesn't answer head-on. The
// schema `answer` string mirrors the rendered `answerNode` word-for-word (dl
// flattened to "term: definition." prose) so an AI snippet matches the page.
const faqItems = [
  {
    question: "Why is average lead time a misleading metric?",
    answer:
      "A few slow outliers pull the arithmetic mean up, so the average sits well above what most tasks actually take. It describes a system that doesn't exist — most work is faster, a handful is far slower — so forecasting off it is wrong in both directions.",
    answerNode: (
      <p>
        A few slow outliers pull the arithmetic mean up, so the average sits well above what most
        tasks actually take. It describes a system that doesn&apos;t exist — most work is faster, a
        handful is far slower — so forecasting off it is wrong in both directions.
      </p>
    )
  },
  {
    question: "What's the difference between median and average lead time?",
    answer:
      "Median: the typical (middle) task — half finish faster, half slower. Average: the arithmetic mean, which a long tail of stragglers can skew badly. When the mean sits far above the median you have a wide spread and a queue problem; when they're close, the system is stable.",
    answerNode: (
      <>
        <dl>
          <dt>Median</dt>
          <dd>The typical (middle) task — half finish faster, half slower.</dd>
          <dt>Average</dt>
          <dd>The arithmetic mean, which a long tail of stragglers can skew badly.</dd>
        </dl>
        <p>
          When the mean sits far above the median you have a wide spread and a queue problem; when
          they&apos;re close, the system is stable.
        </p>
      </>
    )
  },
  {
    question: "How do I give a delivery date I can actually hit?",
    answer:
      "Pick it from a percentile (p85/p95) of your cycle-time distribution, not a gut average. Externally you still give one flat date — just the one the system says you'll hit. You commit to the date, not the probability.",
    answerNode: (
      <>
        <p>
          Pick it from a percentile (p85/p95) of your cycle-time distribution, not a gut average.
          Externally you still give one flat date — just the one the system says you&apos;ll hit.
        </p>
        <p className={styles.faqHighlight}>You commit to the date, not the probability.</p>
      </>
    )
  },
  {
    question: "Where do I see median and percentiles?",
    answer:
      "Jira's Control Chart and cycle-time scatterplots show mean, median, and percentile bands from data you already have — no manual time-tracking. Most trackers with a flow or analytics module expose the same.",
    answerNode: (
      <p>
        Jira&apos;s Control Chart and cycle-time scatterplots show mean, median, and percentile bands
        from data you already have — no manual time-tracking. Most trackers with a flow or analytics
        module expose the same.
      </p>
    )
  }
];

const articleSchema = {
  "@type": "Article",
  "@id": `${POST_URL}#article`,
  mainEntityOfPage: POST_URL,
  url: POST_URL,
  headline: POST.title,
  description: POST.description,
  datePublished: POST.publishedAt,
  dateModified: POST.modifiedAt,
  inLanguage: "en",
  // Image required for Google Article rich-result cards; reuse the generated OG
  // PNG so the schema asset always matches the one used by social scrapers.
  image: {
    "@type": "ImageObject",
    url: `${POST_URL}opengraph-image.png`,
    width: 1200,
    height: 630
  },
  author: { "@id": `${SITE_URL}/#person` },
  // Publisher = Person (same @id as author): sg4.tech is a personal brand, not a
  // separate organization. Victor is both author and publishing entity.
  publisher: { "@id": `${SITE_URL}/#person` },
  // Connect the spoke to the pillar in the entity graph so engines route
  // topical authority between them.
  isPartOf: { "@id": `${SITE_URL}/blog/diagnose-broken-engineering-delivery/#article` },
  keywords: POST.tags.join(", ")
};

const faqPageSchema = {
  "@type": "FAQPage",
  "@id": `${POST_URL}#faq`,
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${POST_URL}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
    { "@type": "ListItem", position: 3, name: POST.title, item: POST_URL }
  ]
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [personSchema, articleSchema, faqPageSchema, breadcrumbSchema]
};

export const metadata: Metadata = {
  title: POST.title,
  description: POST.description,
  alternates: {
    canonical: `/blog/${SLUG}/`
  },
  openGraph: {
    title: POST.title,
    description: POST.description,
    type: "article",
    siteName: BRAND_NAME,
    locale: "en_US",
    url: POST_URL,
    publishedTime: POST.publishedAt,
    modifiedTime: POST.modifiedAt,
    authors: ["https://www.linkedin.com/in/victor-demin/"]
  },
  twitter: {
    card: "summary_large_image",
    title: POST.title,
    description: POST.description
  }
};

function ArticleBody() {
  return (
    <div className={styles.body}>
      <IntroSection />
      <SectionAverageComfort />
      <SectionMedianTypical />
      <SectionGapDiagnosis />
      <SectionPickPercentile />
      <SectionPredictability />
      <ArticleCta />
      <ArticleRelated />
    </div>
  );
}

export default function ArticlePage() {
  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TopNavigation items={navigationItems} ariaLabel="Site navigation" />
      <Section className={styles.article}>
        <Link href="/blog/" className={styles.backLink}>
          ← Blog
        </Link>
        <Eyebrow>Engineering delivery</Eyebrow>
        <ArticleHeader
          title={POST.title}
          publishedAt={POST.publishedAt}
          readingMinutes={POST.readingMinutes}
          formattedDate={formatPostDate(POST.publishedAt)}
        />
        <ArticleBody />
      </Section>
      <FaqSection items={faqItems} contentWrapperClassName={styles.faqColumn} />
      <FooterSection links={footerLinks} copyright={BRAND_COPYRIGHT} legalLinks={legalLinks} />
    </Page>
  );
}
