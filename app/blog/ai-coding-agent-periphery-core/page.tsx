import type { Metadata } from "next";
import { BlogPostLayout } from "../../components/BlogPostLayout";
import { buildPostMetadata } from "../../lib/blog/post-metadata";
import type { PostSlug } from "../../lib/blog/posts";
import {
  ArticleLede,
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

export const metadata: Metadata = buildPostMetadata(SLUG);

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
