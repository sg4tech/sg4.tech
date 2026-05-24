import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "../../components/Eyebrow";
import { FaqSection } from "../../components/FaqSection";
import { FooterSection } from "../../components/FooterSection";
import { Page } from "../../components/Page";
import { Section } from "../../components/Section";
import { TopNavigation } from "../../components/TopNavigation";
import { BRAND_COPYRIGHT, BRAND_NAME, footerLinks, personSchema, SITE_URL } from "../../lib/brand";
import type { NavigationItem } from "../../lib/navigation";
import { formatPostDate, getPostBySlug, type PostSlug } from "../../lib/blog/posts";
import {
  ArticleHeader,
  IntroSection,
  SectionCountTasks,
  SectionDecomposeT2M,
  SectionLeadTimeCycleTime,
  SectionLittlesLaw,
  SectionSymptoms,
  SectionWhereStuck,
  SectionWip,
  SectionWipLimits
} from "./article-content";
import {
  ArticleCta,
  ArticleRelated,
  SectionClosing,
  SectionFullSystemView,
  SectionIntroduceWipLimits
} from "./article-tail";
import styles from "./page.module.css";

// PostSlug-typed: a typo here fails the build via type-narrowed
// getPostBySlug, not via runtime "cannot read 'title' of undefined".
const SLUG: PostSlug = "diagnose-broken-engineering-delivery";
const POST = getPostBySlug(SLUG);
const POST_URL = `${SITE_URL}/blog/${SLUG}/`;

const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home", mobileNav: "primary" },
  { href: "/blog/", label: "Blog", mobileNav: "primary" },
  { href: "/yii2/", label: "Yii2", mobileNav: "secondary" },
  { href: "/ai-vibecoding/", label: "AI vibecoding", mobileNav: "secondary" }
];

// FAQ items must not duplicate body content. Paraphrased FAQ entries reduce
// the citation-trust signal for AI engines that index the FAQPage schema
// (duplicate content across body + FAQ looks like keyword stuffing). Each
// question here targets a query intent that the body doesn't directly
// answer.
const faqItems = [
  {
    question: "What's the difference between Lead Time and Cycle Time?",
    answer:
      "Lead Time is the total time a task spends inside development — from “ready for development” to “in production.” Cycle Time is just the active work portion — from “actually picked up” to “done.” Lead Time includes the waiting; Cycle Time excludes it. The gap between them is queue depth."
  },
  {
    question: "What's a reasonable WIP limit for a team of N?",
    answer:
      "Industry guidance ranges from one to three tasks per developer; software-dev teams typically run on the tighter end — one to two per dev. For a team of six, that lands you somewhere around six to twelve system-wide tasks, not eighty. The exact number matters less than the discipline of having one and enforcing it — most teams find their right level by starting tight and relaxing if work consistently stalls for non-WIP reasons."
  },
  {
    question: "How is this different from Scrum sprint capacity?",
    answer:
      "Sprint capacity limits how much work the team commits to for a two-week period. WIP limits how much work is in flight at any given moment, regardless of sprint. A team can have a sensible sprint commitment and still be running 60+ tasks in parallel — sprint capacity says nothing about whether work is being finished versus just started. WIP limits are orthogonal to sprint planning and tend to fix problems sprint planning alone doesn't reach."
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
  // Publisher = Person (same @id as author) because sg4.tech is a personal
  // brand, not a separate organization — Victor is both the author and the
  // publishing entity. Google's "prefer Organization" guidance assumes a
  // corporate brand; for solo operator personal sites, Person-as-publisher
  // is the honest and appropriate shape.
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
      <SectionSymptoms />
      <SectionDecomposeT2M />
      <SectionLeadTimeCycleTime />
      <SectionWhereStuck />
      <SectionCountTasks />
      <SectionWip />
      <SectionLittlesLaw />
      <SectionWipLimits />
      <SectionIntroduceWipLimits />
      <SectionFullSystemView />
      <SectionClosing />
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
      <FooterSection links={footerLinks} copyright={BRAND_COPYRIGHT} />
    </Page>
  );
}
