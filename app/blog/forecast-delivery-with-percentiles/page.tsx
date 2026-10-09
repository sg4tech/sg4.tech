import type { Metadata } from "next";
import { BlogPostLayout } from "../../components/BlogPostLayout";
import { buildPostMetadata } from "../../lib/blog/post-metadata";
import type { PostSlug } from "../../lib/blog/posts";
import {
  ArticleLede,
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

export const metadata: Metadata = buildPostMetadata(SLUG);

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
    <BlogPostLayout
      slug={SLUG}
      eyebrow="Engineering delivery"
      lede={<ArticleLede />}
      faqItems={faqItems}
      partOf="diagnose-broken-engineering-delivery"
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
