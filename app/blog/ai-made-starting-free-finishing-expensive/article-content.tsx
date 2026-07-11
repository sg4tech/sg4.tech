// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: starting got cheap while finishing didn't →
// the cost of work is now visible → the old metrics still apply → the losses
// come from waiting and context (Little's Law covers agents too) → the fix is
// finishing discipline → the constraint has moved off code production.

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./page.module.css";

const PILLAR_HREF = "/blog/diagnose-broken-engineering-delivery/";
const INTERRUPTED_WORK_HREF = "https://ics.uci.edu/~gmark/chi08-mark.pdf";
const LONG_CONTEXT_STUDY_HREF = "https://arxiv.org/html/2512.04307v1";

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
        Teams with AI agents start more work than ever and ship about the same. The entry got
        cheap; verification, integration, and shipping didn&apos;t. Here&apos;s where the work
        actually goes — and the discipline that gets it moving again.
      </p>
    </header>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Starting new work has never been cheaper. One more agent thread. One more idea. One more
        experiment running in the background. The cost of <em>beginning</em> something has
        collapsed — an AI agent will take any task you hand it, instantly, at any hour.
      </p>
      <p>
        Here is what didn&apos;t collapse: the cost of <em>finishing</em>. Verification,
        integration, review, deployment — getting work to the state where it runs on production and
        earns its keep — costs almost exactly what it cost before.
      </p>
      <p>
        So teams start more than ever and ship about the same. Boards fill up with half-done work.
        Agents run all day, the token bill grows, and somehow the release notes look no longer than
        last quarter&apos;s.
      </p>
      <p>
        This isn&apos;t a tooling problem, and better prompts won&apos;t fix it. It&apos;s an old
        flow problem, amplified by new tools. Let me show you where the work actually goes.
      </p>
    </>
  );
}

export function SectionCostVisible(): ReactNode {
  return (
    <>
      <h2 id="cost">What AI-assisted work really costs — and how to count it</h2>
      <p>
        For decades, the cost of one task was invisible — buried inside fixed salaries. A
        developer&apos;s month costs the same whether a feature took three attempts or thirty, so
        nobody counted attempts. With AI agents, every action has a price tag — and the accounting
        becomes very visible, very fast.
      </p>
      <p>
        Here&apos;s what it looks like in practice. An agent made 40 attempts, spent $15 in
        tokens, and still failed to deliver a working feature. The loop behind that bill is
        familiar to anyone who runs agents on real work: an attempt. Almost works. One more
        attempt. A bit better. Then something breaks, the context slips, you start fixing — and it
        gets worse. Somewhere around there you see it clearly: one &ldquo;task&rdquo; is rarely
        one action. It&apos;s dozens of iterations — attempts, corrections, dead ends — and you pay
        for every one of them, including the ones you throw away.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-made-starting-free-finishing-expensive/ai-agent-pnl.webp"
          alt="Hand-drawn AI agent P&L statement: output — zero working features; cost — $15 in tokens and infrastructure; result — minus $15, no working feature delivered"
          width={1200}
          height={1200}
          className={styles.figureImage}
          unoptimized
        />
        <figcaption className={styles.figureCaption}>
          The P&amp;L of one failed task: every attempt billed, nothing shipped.
        </figcaption>
      </figure>
      <p>To know what your delivery actually costs, you only need to count three things:</p>
      <ul>
        <li>how many tasks reached a working result,</li>
        <li>how many iterations that took,</li>
        <li>and what those iterations cost.</li>
      </ul>
      <p>
        Divide total spend by finished tasks and you get the number that matters:{" "}
        <strong>cost per successful task</strong>{" "}
        — what one <em>finished</em>{" "}
        piece of work really costs you.
      </p>
      <p>
        The payoff is that optimization stops being guesswork. Does the new prompt actually help?
        Do tests around the agent pay for themselves? Did that workflow change do anything?
        Subjectively, everything always &ldquo;feels better.&rdquo; The number doesn&apos;t care
        how it feels: after any change, cost per successful task either went down or it
        didn&apos;t.
      </p>
      <p>
        One warning before you go optimize it. Watch teams work on this metric and you&apos;ll see
        them go straight for token prices and model tiers — and miss the real leak.{" "}
        <strong>
          The goal isn&apos;t to minimize token usage; it&apos;s to maximize successful outcomes
          per dollar spent.
        </strong>{" "}
        And the biggest driver of cost per <em>finished</em>{" "}
        task isn&apos;t the price of an iteration. It&apos;s all the work you started and never
        finished.
      </p>
    </>
  );
}

function MetricsTable(): ReactNode {
  return (
    <table className={styles.mappingTable}>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Classic team</th>
          <th>AI-assisted work</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Throughput</th>
          <td>Tasks shipped per period</td>
          <td>Tasks that reached production, not tasks generated</td>
        </tr>
        <tr>
          <th>Time to Market</th>
          <td>From idea to release</td>
          <td>From prompt to working result in users&apos; hands</td>
        </tr>
        <tr>
          <th>Quality</th>
          <td>Defects and rework after release</td>
          <td>Share of output usable without rework</td>
        </tr>
        <tr>
          <th>NPS</th>
          <td>Whether users value what shipped</td>
          <td>Whether the result creates value at all</td>
        </tr>
        <tr>
          <th>Cost per successful task</th>
          <td>Invisible — buried in fixed salaries</td>
          <td>Total spend divided by tasks that reached a working state</td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionMetricsSurvive(): ReactNode {
  return (
    <>
      <h2 id="metrics">Your delivery metrics still apply to AI-assisted work</h2>
      <p>
        If you&apos;ve read <Link href={PILLAR_HREF}>how I diagnose delivery systems</Link>, the
        frame here is the same. Every metric that described a human team has a direct equivalent in
        AI-assisted work:
      </p>
      <MetricsTable />
      <p>
        You can ship fast but expensive, cheap but drowning in rework, or a lot of it but nothing
        users need — and the economics quietly stops converging.
      </p>
      <p>The measurement system survived. What changed is where the work piles up.</p>
    </>
  );
}

export function SectionParallelTasks(): ReactNode {
  return (
    <>
      <h2 id="parallel-tasks">Why your AI agent gets worse with every parallel task</h2>
      <p>Two mechanisms eat the gains. Both are old; both got amplified.</p>
      <p>
        <strong>The first is waiting.</strong>{" "}
        Most tasks in most systems are not being worked on —
        they&apos;re waiting. Now look at an AI-assisted workflow: you wait for the agent
        (generation, tests, deploy), then the agent waits for you (an answer, a decision, the next
        instruction). While a task waits, you switch to another one — starting it is nearly free,
        after all. Every task you add makes the queue longer for all of them. Little&apos;s Law —
        lead time equals work in progress divided by throughput — doesn&apos;t care whether the
        workers are humans or agents. Start more without finishing more, and every task simply
        lives longer.
      </p>
      <p>
        <strong>The second is context.</strong>{" "}
        Every system has a limit on how much active work it
        can hold. For a human, the limit is attention and memory. Research on interrupted work
        found that people do compensate for switching — they work faster — but pay with measurably
        higher workload, stress, and frustration (
        <a href={INTERRUPTED_WORK_HREF} target="_blank" rel="noreferrer">
          Mark, Gudith &amp; Klocke, 2008
        </a>
        ). The cost is real; it&apos;s just hidden in the humans instead of the invoice.
      </p>
      <p>
        For an agent, the limit is the context window — and there the degradation is measurable in
        output, not stress. A{" "}
        <a href={LONG_CONTEXT_STUDY_HREF} target="_blank" rel="noreferrer">
          study of web agents on long-context tasks
        </a>{" "}
        found that performance collapses as irrelevant history accumulates in the context — exactly
        what a multi-task thread produces. With noise built up toward 150,000 tokens, success rates
        fell from 40–50% to single digits for some frontier models — GPT-4.1 dropped from roughly
        45% to 2.7%.
      </p>
      <p className={styles.pullquote}>
        Humans lose focus, agents lose context — but it&apos;s the same failure. Too much work in
        progress degrades the worker, whether the worker is made of neurons or tokens.
      </p>
    </>
  );
}

export function SectionOneThread(): ReactNode {
  return (
    <>
      <h2 id="one-thread">One thread, one task — WIP limits for AI-assisted work</h2>
      <p>
        The discipline that fixes this has existed for decades. AI didn&apos;t make it obsolete; AI
        made it mandatory, because the temptation to start more has never been this cheap.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-made-starting-free-finishing-expensive/busy-not-delivering.webp"
          alt="Two kanban boards compared: starting more crams the In Progress column while Done stays thin; finishing more keeps work in progress small and fills Done with completed tasks"
          width={1200}
          height={800}
          className={styles.figureImage}
          unoptimized
        />
        <figcaption className={styles.figureCaption}>
          Starting more fills the board. Finishing more fills production.
        </figcaption>
      </figure>
      <ul>
        <li>
          <strong>For agents: one thread, one task.</strong>{" "}
          Keep a thread focused on a single outcome. When side-issues surface — a bug you noticed,
          a refactor worth doing — they go to a list, or to another agent, not into the same
          conversation. A focused thread finishes; an overloaded one circles.
        </li>
        <li>
          <strong>For you: finish before you start.</strong>{" "}
          Before opening a new task, ask what you can close. An agent waiting for your review is
          work in progress. Three agents waiting for your review is a queue — and you are the
          bottleneck in it.
        </li>
        <li>
          <strong>For the team: the same WIP limits, applied to both kinds of workers.</strong>{" "}
          The count that matters is not tasks started, and not agent activity — it&apos;s how much
          unfinished work sits in the system. A long list of active threads is not progress.
          It&apos;s inventory.
        </li>
      </ul>
      <p>
        The uncomfortable shift is in what counts as a signal of progress. Started work used to be
        scarce, so starting meant something. Now that starting is nearly free,{" "}
        <strong>
          the winner isn&apos;t whoever launches the most — it&apos;s whoever finishes the most.
        </strong>{" "}
        Fewer things in flight, more things done.
      </p>
    </>
  );
}

export function SectionConstraintMoved(): ReactNode {
  return (
    <>
      <h2 id="constraint">The constraint has moved — make sure you follow it</h2>
      <p>One more consequence — for AI-heavy startups, the most important one.</p>
      <p>
        For a solo founder or a tiny team with disciplined AI use, writing code has almost stopped
        being the constraint. Iterations are cheap compared to the cost of unfinished work; the
        generation itself is fast. What&apos;s scarce now is the ability to decide <em>what</em> to
        build, <em>why</em>, and <em>for whom</em>{" "}
        — and the ability to drive work to done. For a
        5–50 engineer product team, coding isn&apos;t free yet, but the direction is the same: the
        bottleneck is drifting out of code production and into decisions and finishing.
      </p>
      <p>
        This is Theory of Constraints 101: when the constraint moves, optimizing the old one is
        wasted effort. Squeezing another 10% out of code generation changes nothing if work dies
        waiting for verification, review, and a decision.
      </p>
      <p>
        AI doesn&apos;t abolish systems thinking. It makes system errors more expensive — because
        now the bill for them arrives immediately, itemized, in dollars. If your delivery system
        loses work between &ldquo;started&rdquo; and &ldquo;shipped,&rdquo; agents will happily
        scale that loss for you. (If that&apos;s where you are with an AI-built product, I wrote
        about <Link href="/ai-vibecoding/">the rescue path</Link> separately.)
      </p>
    </>
  );
}
