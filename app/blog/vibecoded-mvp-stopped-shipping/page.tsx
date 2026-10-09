import type { Metadata } from "next";
import { BlogPostLayout } from "../../components/BlogPostLayout";
import { buildPostMetadata } from "../../lib/blog/post-metadata";
import type { PostSlug } from "../../lib/blog/posts";
import {
  ArticleLede,
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

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "vibecoded-mvp-stopped-shipping";

// On-page H1 differs from the registry title on purpose: that title is the
// query-matched SERP/index-card title; the H1 carries the essay's voice.
// Article.headline mirrors the H1 so the schema matches the rendered page.
const H1_TITLE = "Your vibecoded MVP stopped shipping — like every junior-built codebase before it";

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

export const metadata: Metadata = buildPostMetadata(SLUG);

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
    <BlogPostLayout
      slug={SLUG}
      eyebrow="AI vibecoding"
      lede={<ArticleLede />}
      faqItems={faqItems}
      headline={H1_TITLE}
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
