import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "../../components/Eyebrow";
import { FaqSection } from "../../components/FaqSection";
import { FooterSection } from "../../components/FooterSection";
import { Page } from "../../components/Page";
import { Section } from "../../components/Section";
import { TopNavigation } from "../../components/TopNavigation";
import { BRAND_COPYRIGHT, BRAND_NAME, footerLinks, footerDisclaimers, legalLinks, personSchema, SITE_URL } from "../../lib/brand";
import type { NavigationItem } from "../../lib/navigation";
import { formatPostDate, getPostBySlug, type PostSlug } from "../../lib/blog/posts";
import {
  ArticleHeader,
  IntroSection,
  SectionCase,
  SectionFailedFixes,
  SectionJunior,
  SectionMapping,
  SectionRestart,
  SectionStall
} from "./article-content";
import { ArticleCta, ArticleRelated } from "./article-tail";
import styles from "./page.module.css";

// PostSlug-typed: a typo here fails the build via type-narrowed
// getPostBySlug, not via runtime "cannot read 'title' of undefined".
const SLUG: PostSlug = "vibecoded-mvp-stopped-shipping";
const POST = getPostBySlug(SLUG);
const POST_URL = `${SITE_URL}/blog/${SLUG}/`;

// On-page H1 differs from POST.title on purpose: POST.title is the
// query-matched SERP/index-card title; the H1 carries the essay's voice.
// Article.headline mirrors the H1 so the schema matches the rendered page.
const H1_TITLE = "Your vibecoded MVP stopped shipping — like every junior-built codebase before it";

const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home", mobileNav: "primary" },
  { href: "/blog/", label: "Blog", mobileNav: "primary" },
  { href: "/yii2/", label: "Yii2", mobileNav: "secondary" },
  { href: "/ai-vibecoding/", label: "AI vibecoding", mobileNav: "secondary" }
];

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// Each question targets a query intent the body doesn't answer head-on. The
// schema `answer` string mirrors the rendered `answerNode` word-for-word so an
// AI snippet matches the page.
const faqItems = [
  {
    question: "Do I need to rewrite the MVP from scratch?",
    answer:
      "Almost certainly not. Junior-built codebases have been rescued without starting over for decades, and the method transfers directly: stabilize, add the safety net, then rewrite the worst parts piece by piece — with the net there to catch what the rewrite breaks. A rewrite throws away the one asset you actually have — working code that users already exercise daily — and restarts the same process with the same missing practices.",
    answerNode: (
      <p>
        Almost certainly not. Junior-built codebases have been rescued without starting over for
        decades, and the method transfers directly: stabilize, add the safety net, then rewrite the
        worst parts piece by piece — with the net there to catch what the rewrite breaks. A rewrite
        throws away the one asset you actually have — working code that users already exercise daily
        — and restarts the same process with the same missing practices.
      </p>
    )
  },
  {
    question: "Is this just technical debt?",
    answer:
      "It's a more specific thing. Technical debt implies someone understood the trade-off and chose speed. An AI-generated codebase contains decisions nobody made consciously and nobody can explain — the debt sits in comprehension. That's why the fix starts with making the codebase observable and testable; cleanup comes after.",
    answerNode: (
      <p>
        It&apos;s a more specific thing. Technical debt implies someone understood the trade-off and
        chose speed. An AI-generated codebase contains decisions nobody made consciously and nobody
        can explain — the debt sits in <em>comprehension</em>. That&apos;s why the fix starts with
        making the codebase observable and testable; cleanup comes after.
      </p>
    )
  },
  {
    question: "Can I keep building with AI while this gets fixed?",
    answer:
      "Yes — that's rather the point. The goal is to put review, tests, and gates around the junior while the keyboard stays where it is. You keep shipping with AI throughout; the agent's output simply starts passing through the same checks a human's would. I build with AI daily inside exactly this kind of setup.",
    answerNode: (
      <p>
        Yes — that&apos;s rather the point. The goal is to put review, tests, and gates around the
        junior while the keyboard stays where it is. You keep shipping with AI throughout; the
        agent&apos;s output simply starts passing through the same checks a human&apos;s would. I
        build with AI daily inside exactly this kind of setup.
      </p>
    )
  },
  {
    question: "Can AI fix the codebase it broke?",
    answer:
      "Partially, and only inside guardrails. Agents are genuinely good at the maintenance work an AI-generated codebase needs — writing tests, adding error handling, mechanical refactors — once a pipeline checks their output. Asking an agent to \"clean up the codebase\" with no tests and no gates is asking the same junior to mark their own homework.",
    answerNode: (
      <p>
        Partially, and only inside guardrails. Agents are genuinely good at the maintenance work an
        AI-generated codebase needs — writing tests, adding error handling, mechanical refactors —
        once a pipeline checks their output. Asking an agent to &ldquo;clean up the codebase&rdquo;
        with no tests and no gates is asking the same junior to mark their own homework.
      </p>
    )
  }
];

const articleSchema = {
  "@type": "Article",
  "@id": `${POST_URL}#article`,
  mainEntityOfPage: POST_URL,
  url: POST_URL,
  headline: H1_TITLE,
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
      <SectionStall />
      <SectionJunior />
      <SectionCase />
      <SectionMapping />
      <SectionFailedFixes />
      <SectionRestart />
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
        <Eyebrow>AI vibecoding</Eyebrow>
        <ArticleHeader
          title={H1_TITLE}
          publishedAt={POST.publishedAt}
          readingMinutes={POST.readingMinutes}
          formattedDate={formatPostDate(POST.publishedAt)}
        />
        <ArticleBody />
      </Section>
      <FaqSection items={faqItems} contentWrapperClassName={styles.faqColumn} />
      <FooterSection links={footerLinks} copyright={BRAND_COPYRIGHT} legalLinks={legalLinks} disclaimers={footerDisclaimers} />
    </Page>
  );
}
