import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "../../components/Eyebrow";
import { FaqSection } from "../../components/FaqSection";
import { Page } from "../../components/Page";
import { Section } from "../../components/Section";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { BRAND_NAME, personSchema, SITE_URL } from "../../lib/brand";
import { formatPostDate, getPostBySlug, type PostSlug } from "../../lib/blog/posts";
import {
  ArticleHeader,
  IntroSection,
  LevelLadder,
  SectionArchitectureAndRules,
  SectionBottomLine,
  SectionCheapLevels,
  SectionComplexity,
  SectionTemplate,
  SectionToolTable
} from "./article-content";
import { ArticleCta, ArticleRelated } from "./article-tail";
import styles from "./page.module.css";

// PostSlug-typed: a typo here fails the build via type-narrowed
// getPostBySlug, not via runtime "cannot read 'title' of undefined".
const SLUG: PostSlug = "code-entropy-ci-checks-ai-legacy";
const POST = getPostBySlug(SLUG);
const POST_URL = `${SITE_URL}/blog/${SLUG}/`;

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// Each question targets an objection the body doesn't answer head-on. The
// schema `answer` string mirrors the rendered `answerNode` word-for-word so an
// AI snippet matches the page.
const faqItems = [
  {
    question: "Won't strict CI checks slow the team down?",
    answer:
      "Checks move the cost from review and production into a failing build, where it's cheapest. On a legacy codebase you start from the current level, so nothing blocks on day one.",
    answerNode: <p>Checks move the cost from review and production into a failing build, where it&apos;s cheapest. On a legacy codebase you start from the current level, so nothing blocks on day one.</p>
  },
  {
    question: "Can I add these checks to an existing legacy project?",
    answer:
      "Yes: freeze the current level as the limit so nothing gets worse, then lower it step by step as you refactor.",
    answerNode: <p>Yes: freeze the current level as the limit so nothing gets worse, then lower it step by step as you refactor.</p>
  },
  {
    question: "Isn't code review enough to catch this?",
    answer:
      "Review depends on attention and doesn't scale with how fast agents write code. A check runs on every change and fails the same way every time.",
    answerNode: <p>Review depends on attention and doesn&apos;t scale with how fast agents write code. A check runs on every change and fails the same way every time.</p>
  },
  {
    question: "Do I need all seven levels at once?",
    answer:
      "No. Add them in order: dead code, formatting and types first, because they're cheap. Complexity and architecture limits pay off once the codebase grows.",
    answerNode: <p>No. Add them in order: dead code, formatting and types first, because they&apos;re cheap. Complexity and architecture limits pay off once the codebase grows.</p>
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
  // Connect the spoke to the delivery pillar in the entity graph so engines
  // route topical authority between them.
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
  title: { absolute: POST.seoTitle ?? POST.title },
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
      <LevelLadder />
      <SectionCheapLevels />
      <SectionComplexity />
      <SectionArchitectureAndRules />
      <SectionToolTable />
      <SectionBottomLine />
      <SectionTemplate />
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
      <SiteNav />
      <Section className={styles.article}>
        <Link href="/blog/" className={styles.backLink}>
          ← Blog
        </Link>
        <Eyebrow>AI coding agents</Eyebrow>
        <ArticleHeader
          title={POST.title}
          publishedAt={POST.publishedAt}
          readingMinutes={POST.readingMinutes}
          formattedDate={formatPostDate(POST.publishedAt)}
        />
        <ArticleBody />
      </Section>
      <FaqSection items={faqItems} contentWrapperClassName={styles.faqColumn} />
      <SiteFooter />
    </Page>
  );
}
