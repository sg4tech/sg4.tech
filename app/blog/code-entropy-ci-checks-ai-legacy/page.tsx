import type { Metadata } from "next";
import { BlogPostLayout } from "../../components/BlogPostLayout";
import { buildPostMetadata } from "../../lib/blog/post-metadata";
import type { PostSlug } from "../../lib/blog/posts";
import {
  ArticleLede,
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

export const metadata: Metadata = buildPostMetadata(SLUG);

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
    <BlogPostLayout
      slug={SLUG}
      eyebrow="AI coding agents"
      lede={<ArticleLede />}
      faqItems={faqItems}
      partOf="diagnose-broken-engineering-delivery"
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
