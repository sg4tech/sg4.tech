// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument incrementally (average lies → median →
// spread → percentiles → where to read it → why predictability wins). If a
// section is reordered, check that the surrounding text still reads.

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./page.module.css";

const PILLAR_HREF = "/blog/diagnose-broken-engineering-delivery/";

type ArticleHeaderProps = {
  title: string;
  publishedAt: string;
  readingMinutes: number;
  formattedDate: string;
};

export function ArticleHeader({
  title,
  publishedAt,
  readingMinutes,
  formattedDate
}: ArticleHeaderProps): ReactNode {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.byline}>
        <Image
          src="/brand/victor-demin.jpg"
          alt="Victor Demin"
          width={40}
          height={40}
          className={styles.bylineAvatar}
          unoptimized
        />
        <div className={styles.bylineMeta}>
          <p className={styles.bylineBio}>
            <span className={styles.bylineName}>Victor Demin</span>
            {" has 15+ years helping engineering organizations improve delivery speed, predictability, and system health."}
          </p>
          <p className={styles.bylineDate}>
            <time dateTime={publishedAt}>{formattedDate}</time>
            {" · "}
            {readingMinutes} min read
          </p>
        </div>
      </div>
      <p className={styles.lede}>
        Most teams forecast delivery off the average. It&apos;s the single number almost guaranteed to
        misrepresent the system — and a big reason delivery dates keep slipping. Here&apos;s what to
        read instead.
      </p>
    </header>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        I&apos;ve written elsewhere about T2M, Lead Time, and Cycle Time — the{" "}
        <Link href={PILLAR_HREF}>metrics that tell you where delivery actually breaks</Link>.
        Measuring one task is easy. But a real team has hundreds of finished tasks, all different, and
        to forecast anything you have to collapse them into a number.
      </p>
      <p>
        The number almost everyone reaches for is the arithmetic mean. That&apos;s where the trouble
        starts.
      </p>
    </>
  );
}

export function SectionAverageLies(): ReactNode {
  return (
    <>
      <h2 id="average-lies">1. The average describes a system you don&apos;t have</h2>
      <p>Take a simple month of finished work:</p>
      <div className={styles.numericExample}>
        <p>9 tasks finished in ~1 day each</p>
        <p>1 task took a month</p>
        <p>→ average lead time ≈ 4 days</p>
      </div>
      <p>
        But no task in this system takes four days. Most take one; a single straggler drags the mean
        up. Forecast off &ldquo;about four days&rdquo; and you&apos;re too pessimistic for the fast 90%
        and wildly optimistic for the one task that&apos;s actually stuck.
      </p>
      <p className={styles.pullquote}>The average lead time describes a system you don&apos;t have.</p>
    </>
  );
}

export function SectionMedian(): ReactNode {
  return (
    <>
      <h2 id="median">2. The median is the typical task</h2>
      <p>
        The median is the middle task — half finish faster, half slower. In the example above it&apos;s
        about one day. That single number tells you most work flows through the system quickly.
      </p>
      <p>
        Which reframes the problem. When someone asks &ldquo;our average lead time is four days, why
        are we so slow?&rdquo; the average is hiding the real shape: ninety percent of the work is fine,
        and a few tasks are rotting in a queue somewhere. The problem isn&apos;t the whole system —
        it&apos;s the stragglers.
      </p>
    </>
  );
}

export function SectionSpread(): ReactNode {
  return (
    <>
      <h2 id="spread">3. The gap between mean and median is your spread</h2>
      <p>
        The most useful read in the whole exercise costs nothing: put the mean and the median side by
        side.
      </p>
      <table className={styles.diagnosticTable}>
        <thead>
          <tr>
            <th>What you see</th>
            <th>What it means</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Mean far above median</th>
            <td>
              Wide spread. Work moves unevenly — some tasks fly through, others sit in queues, reviews,
              approvals, or dependencies. The gap is queue depth.
            </td>
          </tr>
          <tr>
            <th>Mean ≈ median</th>
            <td>
              Tight spread. Work moves at a consistent pace. The system is stable and predictable.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        The gap itself is the signal. A fat gap means a long tail — blockers, hand-offs, things waiting
        on someone. Close those and the mean falls toward the median. You can read this at a glance,
        without putting a stopwatch on anyone.
      </p>
    </>
  );
}

export function SectionPercentiles(): ReactNode {
  return (
    <>
      <h2 id="percentiles">4. Forecast with percentiles, not point estimates</h2>
      <p>
        Stakeholders ask one question: when will it be done? They want a precise answer — and the
        honest precise answer isn&apos;t a single number, it&apos;s a probability.
      </p>
      <p>
        A percentile turns the distribution into a commitment. The 95th percentile is the value 95% of
        tasks finish within. So instead of &ldquo;about four days&rdquo; — a guess that&apos;s wrong
        most of the time — you say:
      </p>
      <p className={styles.pullquote}>With 95% confidence, this is done by [date].</p>
      <p>
        That&apos;s a commitment you can keep, because it comes from what the system has actually done,
        not from a gut feel. Match the percentile to the stakes: p85 for a routine commitment, p95 when
        a miss is expensive. If the task is already in progress, forecast its remaining time against the
        same distribution.
      </p>
    </>
  );
}

export function SectionReadInTracker(): ReactNode {
  return (
    <>
      <h2 id="read-in-tracker">5. You already have these numbers</h2>
      <p>
        None of this needs a new tool or a time-tracking ritual. Jira&apos;s Control Chart shows the
        mean and median directly; a cycle-time scatterplot shows the full distribution and its
        percentile bands. Most trackers with a flow or analytics module expose the same.
      </p>
      <p>
        It&apos;s the same principle as{" "}
        <Link href={PILLAR_HREF}>counting tasks per status</Link>: read the system from the data it
        already produces, instead of asking people to log hours. The numbers are sitting in your
        tracker right now.
      </p>
    </>
  );
}

export function SectionPredictability(): ReactNode {
  return (
    <>
      <h2 id="predictability">6. Predictability beats heroic speed</h2>
      <p>
        The instinct is to celebrate the task that shipped in a day. But a system with a tight spread
        is worth more to the business than one with occasional heroic-fast tasks and a long tail of
        stragglers. &ldquo;Reliably done by Friday&rdquo; beats &ldquo;sometimes a day, sometimes a
        month.&rdquo;
      </p>
      <p>
        And predictability isn&apos;t luck. A tight spread comes from controlled work in progress. High
        WIP builds long queues, long queues create the fat tail, and the fat tail is exactly what pushes
        the mean above the median. Control WIP — the lever from{" "}
        <Link href={PILLAR_HREF}>Little&apos;s Law and the metrics playbook</Link> — and the
        distribution tightens on its own.
      </p>
      <p>
        Most teams forecast off the average and then wonder why the dates keep slipping. The fix
        isn&apos;t better estimating. It&apos;s reading the distribution you already have: the median
        for the typical case, the spread for the health of the system, and a percentile for the
        commitment you make out loud.
      </p>
    </>
  );
}
