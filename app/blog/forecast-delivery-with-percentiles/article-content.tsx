// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: average misleads → median → the gap is the
// diagnosis → pick the date from a percentile → predictability is the product.

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
        Most teams forecast delivery off the average. It&apos;s the one number almost guaranteed to
        misrepresent the system — and every time you quote it and miss, you spend trust you
        didn&apos;t have to. Here&apos;s what to quote instead.
      </p>
    </header>
  );
}

export function IntroSection(): ReactNode {
  return (
    <p>
      Once a team starts measuring delivery — the{" "}
      <Link href={PILLAR_HREF}>metrics that show where it actually breaks</Link> — the next question
      from founders is always the same: given all this data, when can we promise something? Almost
      everyone answers with an average. It&apos;s the worst available number for the job.
    </p>
  );
}

export function SectionAverageComfort(): ReactNode {
  return (
    <>
      <h2 id="average">1. The average is a comfort, not a forecast</h2>
      <p>
        Managers reach for the average because it collapses a messy reality into one number you can
        say out loud in a standup. That comfort is exactly the problem.
      </p>
      <p>Take a month of finished work:</p>
      <div className={styles.numericExample}>
        <p>9 tasks finished in ~1 day each</p>
        <p>1 task dragged on for a month</p>
        <p>→ average lead time ≈ 4 days</p>
      </div>
      <p>
        No task in this system actually takes four days. Most take one; a single straggler drags the
        mean up. You can drown crossing a river that&apos;s four feet deep <em>on average</em>.
      </p>
      <p className={styles.pullquote}>The average lead time describes a system you don&apos;t have.</p>
    </>
  );
}

export function SectionMedianTypical(): ReactNode {
  return (
    <>
      <h2 id="median">2. The median is the typical task</h2>
      <p>
        The median is the middle task — half finish faster, half slower. Here it&apos;s about one day,
        and that single number tells you most work flows through quickly.
      </p>
      <p>
        That reframes the complaint. When someone asks &ldquo;our average is four days, why are we so
        slow?&rdquo;, the average is hiding the real shape: ninety percent of the work is fine, a few
        tasks are stranded. The times I&apos;ve pulled up a control chart with a team, the gap between
        mean and median was usually the whole story — most tickets clearing in a day or two, one or
        two buried for weeks in a review queue nobody was watching. The system isn&apos;t slow. A
        handful of tasks are stuck.
      </p>
    </>
  );
}

// Right-skewed lead-time distribution. One bar per day (day 0–25); heights
// fall off into a long tail. Mean sits visibly right of the median — the
// whole point of section 3.
const DIST_HEIGHTS = [
  12, 150, 120, 70, 42, 30, 22, 16, 12, 10, 8, 7, 6, 5, 5, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1, 1
];
const DIST_TICKS = [0, 5, 10, 15, 20, 25];

function DistributionChart(): ReactNode {
  return (
    <figure className={styles.distChart}>
      <svg
        viewBox="0 0 600 244"
        role="img"
        aria-label="A right-skewed lead-time distribution: most tasks finish in one to three days, with a long tail of slow tasks. The median sits at about two days inside the tall bars; the mean is pulled right to about five days, where few tasks land."
      >
        <line className={styles.dcAxis} x1="50" y1="40" x2="50" y2="200" />
        <line className={styles.dcAxis} x1="50" y1="200" x2="570" y2="200" />
        {DIST_HEIGHTS.map((h, d) => (
          <rect key={d} className={styles.dcBar} x={50 + d * 20} y={200 - h} width="18" height={h} />
        ))}
        <line className={styles.dcMedian} x1="90" y1="200" x2="90" y2="44" />
        <text className={styles.dcMedianLabel} x="86" y="36" textAnchor="end">
          Median ~2d
        </text>
        <line className={styles.dcMean} x1="150" y1="200" x2="150" y2="44" />
        <text className={styles.dcMeanLabel} x="154" y="36" textAnchor="start">
          Mean ~5d
        </text>
        {DIST_TICKS.map((t) => (
          <text key={t} className={styles.dcTick} x={50 + t * 20} y="216" textAnchor="middle">
            {t}
          </text>
        ))}
        <text className={styles.dcAxisLabel} x="310" y="236" textAnchor="middle">
          lead time (days)
        </text>
      </svg>
      <figcaption className={styles.distCaption}>
        Lead-time distribution: most work clears in a day or two (the tall bars), but a long tail of
        stuck tasks drags the average out to where almost nothing actually lands.
      </figcaption>
    </figure>
  );
}

export function SectionGapDiagnosis(): ReactNode {
  return (
    <>
      <h2 id="gap">3. The gap between mean and median is the diagnosis</h2>
      <p>
        So the most useful read in the whole exercise costs nothing: put the mean and the median side
        by side.
      </p>
      <DistributionChart />
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
              Wide spread. Work moves unevenly — some tasks fly, others sit in queues, reviews,
              approvals. The gap is queue depth.
            </td>
          </tr>
          <tr>
            <th>Mean ≈ median</th>
            <td>Tight spread. Work moves at a consistent pace. The system is stable and predictable.</td>
          </tr>
        </tbody>
      </table>
      <p>
        The gap itself is the signal. A fat gap means a long tail — blockers, hand-offs, things waiting
        on a person. Close those and the mean falls back toward the median. You can see it at a glance,
        without a stopwatch on anyone.
      </p>
    </>
  );
}

function PercentileTable(): ReactNode {
  return (
    <table className={styles.diagnosticTable}>
      <thead>
        <tr>
          <th>Percentile</th>
          <th>Lead time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>P50 (median)</th>
          <td>2 days</td>
        </tr>
        <tr>
          <th>P85</th>
          <td>6 days</td>
        </tr>
        <tr>
          <th>P95</th>
          <td>11 days</td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionPickPercentile(): ReactNode {
  return (
    <>
      <h2 id="percentile">4. Pick the date from a percentile, not a gut average</h2>
      <p>
        Stakeholders ask one question: when will it be done? And they want one date, not a statistics
        lecture. Fair — so give them one date. Just stop picking it from the wrong number.
      </p>
      <p>
        A point estimate off the average is a promise the spread won&apos;t let you keep. Quote
        &ldquo;about four days,&rdquo; miss it, and you&apos;ve spent trust — then you do it again next
        sprint. A percentile fixes which number you pick from: it&apos;s the value some share of tasks
        finish within. Pull a real distribution — less extreme than the toy above, same shape — and it
        reads something like:
      </p>
      <PercentileTable />
      <p>
        Now the choice is concrete. Routine work? Commit to the{" "}
        <strong>P85 — &ldquo;by day six.&rdquo;</strong> Something a customer or another team is blocked
        on, where a miss is expensive? Quote the <strong>P95 — &ldquo;by day eleven.&rdquo;</strong>{" "}
        Same data, different promise — both ones you&apos;ll keep.
      </p>
      <p>
        This isn&apos;t hiding the uncertainty — it&apos;s the honest version of a date. You&apos;re
        committing to one you&apos;ll hit 95 times out of 100 (or 85, if that&apos;s the line you
        picked), rather than a gut estimate the system&apos;s spread was always going to break. If
        anyone wants the confidence level, give it to them; most just want the date.
      </p>
      <p className={styles.pullquote}>
        The percentile isn&apos;t what you tell the stakeholder — it&apos;s how you pick the date you
        tell them.
      </p>
      <p>
        For a task already in flight, forecast the time it has <em>left</em>, conditioned on how long
        it&apos;s already run, against the same distribution. And the first time you give someone a
        date and then hit it, you stop being the team that&apos;s &ldquo;always late&rdquo; and become
        the team that&apos;s &ldquo;predictable&rdquo; — a reputation worth more than the occasional
        fast ticket.
      </p>
    </>
  );
}

export function SectionPredictability(): ReactNode {
  return (
    <>
      <h2 id="predictability">5. Predictability is the product</h2>
      <p>
        Because predictability — not raw speed — is what the business actually buys. Sales commits to
        customers on your dates, marketing books launches on them, support staffs against them. A team
        that&apos;s reliably done by Friday beats one that&apos;s sometimes done Tuesday and sometimes
        in three weeks, because everyone downstream can plan.
      </p>
      <p>
        And a tight spread isn&apos;t luck. It comes from controlled work in progress: high WIP builds
        long queues, long queues create the long tail, and the tail is what pushes the mean above the
        median — so <Link href={PILLAR_HREF}>controlling WIP</Link> tightens the distribution on its
        own. None of this needs a new tool; Jira&apos;s Control Chart shows mean, median, and
        percentiles from data you already have.
      </p>
      <p>
        Most teams forecast off the average and then wonder why the dates keep slipping. The fix
        isn&apos;t estimating harder. It&apos;s reading the distribution you already have — the median
        for the typical case, the gap for the system&apos;s health, and a percentile for the date you
        commit to.
      </p>
    </>
  );
}
