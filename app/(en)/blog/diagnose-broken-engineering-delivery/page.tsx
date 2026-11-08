import type { Metadata } from "next";
import { ArticleToc } from "../../../components/ArticleToc";
import { BlogPostLayout } from "../../../components/BlogPostLayout";
import { buildPostMetadata } from "../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../lib/blog/posts";
import {
  ArticleLede,
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

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "diagnose-broken-engineering-delivery";

// Mirrors the section h2s (ids and text); tests/article-toc.test.ts keeps them in sync.
const tocItems = [
  { id: "symptoms", title: "1. Symptoms of slow delivery — and the wrong first reflex" },
  { id: "decompose-t2m", title: "2. Decompose T2M — Discovery and Lead Time aren't the same problem" },
  { id: "lead-time-cycle-time", title: "3. Lead Time = Waiting + Cycle Time" },
  { id: "where-stuck", title: "4. Where work actually gets stuck: why time-in-status can mislead" },
  { id: "count-tasks", title: "5. How to find bottlenecks without measuring time" },
  { id: "wip", title: "6. Work in Progress (WIP): the variable that controls delivery speed" },
  { id: "littles-law", title: "7. Little's Law: Lead Time = WIP / Throughput" },
  { id: "wip-limits", title: "8. WIP limits: the lever that fixes most slow engineering teams" },
  { id: "introduce-wip-limits", title: "9. How to introduce WIP limits without team revolt" },
  { id: "full-system-view", title: "10. The full system view: speed, value, and sustainability in engineering delivery" },
  { id: "closing", title: "When metrics become a diagnostic tool" }
];

// FAQ items must not duplicate body content. Paraphrased FAQ entries reduce
// the citation-trust signal for AI engines that index the FAQPage schema
// (duplicate content across body + FAQ looks like keyword stuffing). Each
// question here targets a query intent that the body doesn't directly
// answer.
const faqItems = [
  {
    question: "What's the difference between Lead Time and Cycle Time?",
    // Schema text mirrors the rendered answerNode word-for-word (with dl
    // dt/dd flattened to "term: definition." prose) so anyone landing on
    // the page from an AI snippet or FAQ rich-result finds the same
    // wording on screen. Same for the other three answers in this array.
    answer:
      "Lead Time: Total time a task spends inside development — from “ready for development” to “in production.” Includes the waiting. Cycle Time: Just the active work portion — from “actually picked up” to “done.” Excludes the waiting. The gap between them is queue depth.",
    answerNode: (
      <>
        <dl>
          <dt>Lead Time</dt>
          <dd>
            Total time a task spends inside development — from “ready for development” to “in
            production.” Includes the waiting.
          </dd>
          <dt>Cycle Time</dt>
          <dd>
            Just the active work portion — from “actually picked up” to “done.” Excludes the
            waiting.
          </dd>
        </dl>
        <p>The gap between them is queue depth.</p>
      </>
    )
  },
  {
    question: "What's a reasonable WIP limit for a team of N?",
    answer:
      "Industry guidance ranges from 1–3 tasks per developer; software-dev teams typically run on the tighter end — 1–2 per dev. Team of 6 → ~6–12 active tasks system-wide, not 80. The exact number matters less than the discipline of having one and enforcing it — most teams find their right level by starting tight and relaxing if work consistently stalls for non-WIP reasons.",
    answerNode: (
      <>
        <p>
          Industry guidance ranges from <strong>1–3 tasks per developer</strong>; software-dev
          teams typically run on the tighter end — <strong>1–2 per dev</strong>.
        </p>
        <p className={styles.faqHighlight}>
          Team of 6 → ~6–12 active tasks system-wide, not 80.
        </p>
        <p>
          The exact number matters less than the discipline of having one and enforcing it — most
          teams find their right level by starting tight and relaxing if work consistently stalls
          for non-WIP reasons.
        </p>
      </>
    )
  },
  {
    question: "How is this different from Scrum sprint capacity?",
    answer:
      "Sprint capacity: How much work the team commits to for a two-week period. WIP limit: How much work is in flight at any given moment, regardless of sprint. A team can have a sensible sprint commitment and still be running 60+ tasks in parallel — sprint capacity says nothing about whether work is being finished versus just started. WIP limits are orthogonal to sprint planning and tend to fix problems sprint planning alone doesn't reach.",
    answerNode: (
      <>
        <dl>
          <dt>Sprint capacity</dt>
          <dd>How much work the team commits to for a two-week period.</dd>
          <dt>WIP limit</dt>
          <dd>How much work is in flight at any given moment, regardless of sprint.</dd>
        </dl>
        <p>
          A team can have a sensible sprint commitment and still be running 60+ tasks in parallel —
          sprint capacity says nothing about whether work is being <em>finished</em> versus just{" "}
          <em>started</em>. WIP limits are orthogonal to sprint planning and tend to fix problems
          sprint planning alone doesn't reach.
        </p>
      </>
    )
  },
  {
    question: "What if our throughput is genuinely too low?",
    answer:
      "Sometimes throughput really is the constraint. If WIP is already under control and Lead Time remains high, the team may not have enough capacity for the demand. Before hiring, check three things: Are tasks oversized? Is execution itself slow? Is the team spending serious time on non-delivery work? Support, incidents, meetings, operational load. If those are all clean and throughput still lags demand, hiring may be the right call. WIP limits don't replace hiring — they help distinguish a capacity problem from a flow problem.",
    answerNode: (
      <>
        <p>
          Sometimes throughput really is the constraint. If WIP is already under control and Lead
          Time remains high, the team may not have enough capacity for the demand.
        </p>
        <p>Before hiring, check three things:</p>
        <ol>
          <li>
            <strong>Are tasks oversized?</strong>
          </li>
          <li>
            <strong>Is execution itself slow?</strong>
          </li>
          <li>
            <strong>Is the team spending serious time on non-delivery work?</strong> Support,
            incidents, meetings, operational load.
          </li>
        </ol>
        <p>
          If those are all clean and throughput still lags demand, hiring may be the right call.
          WIP limits don't replace hiring — they help distinguish a capacity problem from a flow
          problem.
        </p>
      </>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

function ArticleBody() {
  return (
    <div className={styles.body}>
      <IntroSection />
      <ArticleToc post="diagnose-broken-engineering-delivery" items={tocItems} />
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
    <BlogPostLayout
      slug={SLUG}
      eyebrow="Engineering delivery"
      lede={<ArticleLede />}
      faqItems={faqItems}
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
