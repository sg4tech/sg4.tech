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
  SectionBarrier,
  SectionRule,
  SectionWhatNot,
  SectionWhatWorks
} from "./article-content";
import { ArticleCta, ArticleRelated } from "./article-tail";
import styles from "./page.module.css";

// PostSlug-typed: a typo here fails the build via type-narrowed
// getPostBySlug, not via runtime "cannot read 'title' of undefined".
const SLUG: PostSlug = "ai-coding-agent-periphery-core";
const POST = getPostBySlug(SLUG);
const POST_URL = `${SITE_URL}/blog/${SLUG}/`;

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// Each question targets a query intent the body doesn't answer head-on
// (training, cloud-vs-self-host, agent-vs-chatbot, founder viability). The
// schema `answer` string mirrors the rendered `answerNode` word-for-word so an
// AI snippet matches the page.
const faqItems = [
  {
    question: "Do AI coding agents need to be trained or fine-tuned on our codebase?",
    answer:
      "No. They work by reading your existing code, docs, tasks, and logs at run time — not by retraining. That's why getting access set up matters far more than any model tuning.",
    answerNode: (
      <p>
        No. They work by reading your existing code, docs, tasks, and logs at run time — not by
        retraining. That&apos;s why getting access set up matters far more than any model tuning.
      </p>
    )
  },
  {
    question: "Should we use a cloud AI service or a self-hosted model?",
    answer:
      "Startups usually start on a cloud service; regulated or security-sensitive companies increasingly self-host an open-source model so data never leaves their perimeter. The trade-off is control and privacy versus the effort of running the stack yourself.",
    answerNode: (
      <p>
        Startups usually start on a cloud service; regulated or security-sensitive companies
        increasingly self-host an open-source model so data never leaves their perimeter. The
        trade-off is control and privacy versus the effort of running the stack yourself.
      </p>
    )
  },
  {
    question: "What makes an AI coding agent different from a chatbot?",
    answer:
      "Access. A chatbot answers from general knowledge; an agent connected to your code, docs, tasks, and logs acts inside your actual project — which is exactly why the line between what it should and shouldn't touch matters.",
    answerNode: (
      <p>
        Access. A chatbot answers from general knowledge; an agent connected to your code, docs,
        tasks, and logs acts inside your actual project — which is exactly why the line between what
        it should and shouldn&apos;t touch matters.
      </p>
    )
  },
  {
    question: "Can non-technical founders really ship products with AI coding agents?",
    answer:
      "Yes — the limit isn't building anymore, it's knowing what to build and keeping the codebase maintainable as it grows. Founders regularly ship real products this way; the failure mode is neglected structure, not missing code.",
    answerNode: (
      <p>
        Yes — the limit isn&apos;t building anymore, it&apos;s knowing what to build and keeping the
        codebase maintainable as it grows. Founders regularly ship real products this way; the
        failure mode is neglected structure, not missing code.
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
      <SectionBarrier />
      <SectionWhatWorks />
      <SectionWhatNot />
      <SectionRule />
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
