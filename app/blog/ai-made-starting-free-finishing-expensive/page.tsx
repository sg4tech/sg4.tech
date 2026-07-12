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
  SectionConstraintMoved,
  SectionCostVisible,
  SectionMetricsSurvive,
  SectionOneThread,
  SectionParallelTasks
} from "./article-content";
import { ArticleCta, ArticleRelated } from "./article-tail";
import styles from "./page.module.css";

// PostSlug-typed: a typo here fails the build via type-narrowed
// getPostBySlug, not via runtime "cannot read 'title' of undefined".
const SLUG: PostSlug = "ai-made-starting-free-finishing-expensive";
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
// Each question targets a query intent head-on and adds the actionable move the
// body argues toward. The schema `answer` string mirrors the rendered
// `answerNode` word-for-word so an AI snippet matches the page.
const faqItems = [
  {
    question: "Why does my AI agent get worse when I give it several tasks at once?",
    answer:
      "Because an agent's working memory — its context window — is a hard limit, and research shows success rates collapsing as irrelevant context accumulates in a thread. Five tasks in one conversation means blurred details and forgotten decisions. Run one thread per task and route side-work elsewhere; you'll ship more with the same agent.",
    answerNode: (
      <p>
        Because an agent&apos;s working memory — its context window — is a hard limit, and research
        shows success rates collapsing as irrelevant context accumulates in a thread. Five tasks in
        one conversation means blurred details and forgotten decisions. Run one thread per task and
        route side-work elsewhere; you&apos;ll ship more with the same agent.
      </p>
    )
  },
  {
    question: "Is token cost the right thing to optimize?",
    answer:
      "Usually not. With basic hygiene, tokens are a minor line item. The expensive thing is unfinished work: tasks that consumed iterations and died before production, and queues where finished-enough work waits for review. Optimize completion rate first; token prices later, if ever.",
    answerNode: (
      <p>
        Usually not. With basic hygiene, tokens are a minor line item. The expensive thing is
        unfinished work: tasks that consumed iterations and died before production, and queues where
        finished-enough work waits for review. Optimize completion rate first; token prices later,
        if ever.
      </p>
    )
  },
  {
    question: "Does AI make WIP limits obsolete?",
    answer:
      "The opposite. WIP limits existed because starting was tempting and finishing was hard. AI made starting nearly free — which makes the temptation stronger and the limit more valuable, not less. And it now applies to your agents as much as to your team.",
    answerNode: (
      <p>
        The opposite. WIP limits existed because starting was tempting and finishing was hard. AI
        made starting nearly free — which makes the temptation stronger and the limit more valuable,
        not less. And it now applies to your agents as much as to your team.
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
      <SectionCostVisible />
      <SectionMetricsSurvive />
      <SectionParallelTasks />
      <SectionOneThread />
      <SectionConstraintMoved />
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
        <Eyebrow>AI-assisted delivery</Eyebrow>
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
