import type { Metadata } from "next";
import { BlogPostLayout } from "../../components/BlogPostLayout";
import { buildPostMetadata } from "../../lib/blog/post-metadata";
import type { PostSlug } from "../../lib/blog/posts";
import {
  ArticleLede,
  IntroSection,
  SectionConstraintMoved,
  SectionCostVisible,
  SectionMetricsSurvive,
  SectionOneThread,
  SectionParallelTasks
} from "./article-content";
import { ArticleCta, ArticleRelated } from "./article-tail";
import styles from "./page.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "ai-made-starting-free-finishing-expensive";

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

export const metadata: Metadata = buildPostMetadata(SLUG);

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
    <BlogPostLayout
      slug={SLUG}
      eyebrow="AI-assisted delivery"
      lede={<ArticleLede />}
      faqItems={faqItems}
      partOf="diagnose-broken-engineering-delivery"
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
