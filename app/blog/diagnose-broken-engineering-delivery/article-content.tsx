// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and max-lines (700) constraints. Each section
// is its own component so editorial passes touch one focused unit at a time.
//
// Sections 1–8 + header/intro live here. The trailing sections (9, 10, closing)
// plus CTA/Related/Attribution are in article-tail.tsx to keep this file
// under the 700-line cap.
//
// Section order is meaningful — the article builds an argument incrementally.
// If a section is reordered, check that the preceding text doesn't reference
// the now-displaced one.

import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./page.module.css";

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
      <p className={styles.lede}>
        Most slow engineering teams don&apos;t have a productivity problem. They have a flow problem.
        And almost everyone&apos;s first reaction to it makes the system slower.
      </p>
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
          <span className={styles.bylineName}>Victor Demin · Fractional CTO</span>
          <span>
            <time dateTime={publishedAt}>{formattedDate}</time>
            {" · "}
            {readingMinutes} min read
          </span>
        </div>
      </div>
    </header>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Here&apos;s a pattern I&apos;ve seen many times over the years: a team of six with 60–80 active
        tasks on the board, releases that have stretched from days to weeks to &quot;we&apos;ll get to it
        next month,&quot; and a very reasonable conclusion that more hands will fix it. Usually that&apos;s
        not the real bottleneck.
      </p>
      <p>
        The diagnostic decomposes the timeline of a single task — from idea to user — until you can point
        at the specific stage where the system stops working. Once you can point at it, the fix is usually
        obvious; most of the time it doesn&apos;t involve hiring anyone. The order below mirrors a real
        engagement: symptoms → decompose → find the bottleneck → talk about the lever.
      </p>
    </>
  );
}

export function SectionSymptoms(): ReactNode {
  return (
    <>
      <h2 id="symptoms">1. The symptoms — and the wrong first reflex</h2>
      <p>
        The first conversation almost always starts the same way. T2M is in months. Throughput is near zero.
        There are more bugs on the board than open tasks. The team&apos;s NPS — internal or external — is
        sitting somewhere between bad and worse.
      </p>
      <p>
        The engineers are working, the EM is trying, the PM is grinding through a backlog. And yet the
        first reflex, every single time, is &quot;we need more engineers&quot; — the wrong reflex.
      </p>
      <p>
        Here&apos;s why. When a program doesn&apos;t work, we don&apos;t fix it by adding more developers to
        the source tree. We open a debugger. We look at what state the program is in, where it&apos;s
        getting stuck, what it&apos;s actually doing versus what we expected. The same is true for an
        engineering system. The metrics above tell you the outcome is bad. They don&apos;t tell you where
        the system is breaking down. Scaling the team without that information just makes the system more
        complex — more handoffs, more in-flight work, more queue depth — and almost always slower.
      </p>
      <p>
        So before any conversation about hiring, the work is to break the process down into its parts and
        find where it starts to degrade. That&apos;s the moment the metrics stop being a report card and
        start being a diagnostic tool.
      </p>
    </>
  );
}

export function SectionDecomposeT2M(): ReactNode {
  return (
    <>
      <h2 id="decompose-t2m">2. Decompose T2M — Discovery and Lead Time aren&apos;t the same problem</h2>
      <p>
        When a task first appears, it isn&apos;t really a task yet. It&apos;s a raw idea — a customer
        request, a bug report, a hypothesis from the founder, a thing someone noticed in a meeting. Before
        the team can build it, someone has to shape it: clarify what it actually means, sketch the solution,
        decide whether it&apos;s worth doing, get the right approvals. Not every idea makes it through that
        stage, and the ones that do don&apos;t always make it quickly.
      </p>
      <p>
        That gap is important, because it&apos;s where a lot of teams burn weeks without realizing it. So
        the first useful cut on T2M is the boundary between Discovery and Delivery.
      </p>
      <p>
        <strong>Discovery</strong> is everything that happens before a ticket is genuinely ready to be
        picked up by a developer. Requirements clarification, design, scoping, stakeholder alignment,
        prioritization. Output: a ticket someone could actually start building.
      </p>
      <p>
        <strong>Delivery</strong> is everything after that point — from &quot;ready for development&quot; to
        &quot;in production.&quot; This is what most engineering metrics implicitly measure, and it&apos;s
        the slice the team has direct control over.
      </p>
      <p>
        The metric I use for the second half is <strong>Lead Time</strong>: the time a ticket spends
        specifically inside the development team&apos;s responsibility. So:
      </p>
      <p className={styles.formula}>T2M = Discovery + Lead Time (Delivery)</p>
      <p>Two numbers, two very different problems hiding behind a single broken T2M.</p>
      <p>
        <strong>If T2M is high but Lead Time is low</strong>, the bottleneck is upstream of engineering. The
        team can execute, but work is sitting in analysis, waiting on a stakeholder, queued behind a
        prioritization decision that hasn&apos;t been made. Hiring more engineers won&apos;t help —
        they&apos;ll just be idle in a different way. The work is to fix the Discovery pipeline: who decides
        what&apos;s ready, on what cadence, with what input.
      </p>
      <p>
        <strong>If Lead Time is high</strong>, the problem is inside Delivery itself. Tasks are getting
        stuck after the team picks them up: in coding, in review, in QA, in deploy. We need to look inside
        Lead Time and figure out where, specifically, the time is being spent.
      </p>
      <p>
        In practice, most teams I work with have problems on both sides — but rarely in equal proportion.
        The first thing the T2M vs Lead Time split does is tell you which conversation to have first. The
        Discovery side is usually a conversation with the founder, the PM, and whoever owns prioritization.
        The Delivery side is a conversation with the EM and the team. Conflating the two is one of the more
        reliable ways to make the wrong fix.
      </p>
      <p>
        Inside Lead Time, &quot;working on a task&quot; and &quot;the task being worked on&quot; turn out
        to be different things — and that&apos;s where things get interesting.
      </p>
    </>
  );
}

function TimelineDiagram(): ReactNode {
  return (
    <figure className={styles.timelineDiagram}>
      <svg viewBox="0 0 800 220" role="img" aria-labelledby="timeline-title">
        <title id="timeline-title">
          Timeline of a task: Discovery, Waiting, and Cycle Time — and the three
          ways to measure them.
        </title>
        {/* Top row: 3 segments of the actual task timeline */}
        <rect x="20" y="20" width="180" height="56" rx="3" className={styles.tlSegmentDiscoveryBg} />
        <rect x="200" y="20" width="240" height="56" className={styles.tlSegmentWaitingBg} />
        <rect x="440" y="20" width="340" height="56" rx="3" className={styles.tlSegmentCycleBg} />
        <text x="110" y="55" textAnchor="middle" className={styles.tlSegmentLabel}>Discovery</text>
        <text x="320" y="55" textAnchor="middle" className={styles.tlSegmentLabel}>Waiting</text>
        <text x="610" y="55" textAnchor="middle" className={styles.tlSegmentLabelOnDark}>Active work</text>
        {/* Alignment guides */}
        <line x1="200" y1="76" x2="200" y2="210" className={styles.tlGuide} />
        <line x1="440" y1="76" x2="440" y2="210" className={styles.tlGuide} />
        {/* Measurement bar: T2M (spans all 3) */}
        <rect x="20" y="92" width="760" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="400" y="113" textAnchor="middle" className={styles.tlMeasureLabel}>T2M — idea to production</text>
        {/* Measurement bar: Lead Time (Waiting + Cycle) */}
        <rect x="200" y="134" width="580" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="490" y="155" textAnchor="middle" className={styles.tlMeasureLabel}>Lead Time — inside the dev team</text>
        {/* Measurement bar: Cycle Time (Cycle only) */}
        <rect x="440" y="176" width="340" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="610" y="197" textAnchor="middle" className={styles.tlMeasureLabel}>Cycle Time — active work only</text>
      </svg>
      <figcaption className={styles.timelineCaption}>
        Same timeline, three different measurements. Each metric points at a different bottleneck.
      </figcaption>
    </figure>
  );
}

export function SectionLeadTimeCycleTime(): ReactNode {
  return (
    <>
      <h2 id="lead-time-cycle-time">3. Lead Time = Waiting + Cycle Time</h2>
      <p>
        Most teams think that once a task is &quot;ready for development,&quot; real work has started. It
        hasn&apos;t. The task gets put on a board. A developer is busy with the previous one. Someone&apos;s
        on vacation. A higher-priority bug jumps the queue. The ticket sits there. From the board&apos;s
        perspective, the task is &quot;in progress.&quot; From the system&apos;s perspective, it&apos;s
        just waiting.
      </p>
      <p>
        This is why Lead Time on its own isn&apos;t sharp enough. We need to separate the time a task is
        actually being worked on from the time it&apos;s just sitting in a queue. The metric I use for that
        is <strong>Cycle Time</strong> — the time from when a task is genuinely picked up to when it&apos;s
        done. Real work only.
      </p>
      <p>Stacked up:</p>
      <div className={styles.formula}>
        T2M = Discovery + Lead Time
        <br />
        Lead Time = Waiting + Cycle Time
        <br />
        Cycle Time = work, only
      </div>
      <TimelineDiagram />
      <p>Two more diagnostic questions fall out of this.</p>
      <p>
        <strong>If Cycle Time is high</strong>, the problem is inside development itself. Once people are
        working on a task, the task is slow to finish. The bottleneck is in execution: code complexity,
        review delays, flaky test suites, manual QA cycles, painful deploys. That&apos;s where you start
        looking with the team.
      </p>
      <p>
        <strong>If Cycle Time is low but Lead Time is high</strong>, the team is fine. Execution is fine.
        The system has more incoming work than it can handle. Tasks are piling up in the queue, waiting for
        the team to finish the previous batch before they can even be started.
      </p>
      <p>
        This second case is the one that catches founders off guard. The team is moving fast on each
        individual task. The board still looks frozen. The instinct is to push harder on individual
        throughput — when the actual problem is upstream demand versus team capacity. The right conversation
        here isn&apos;t about speeding up the team. It&apos;s about either adding capacity in a targeted way
        or limiting how much work the team accepts at once. We&apos;ll get to that.
      </p>
      <p>
        <strong>Quick diagnostic table</strong> for the first conversation with leadership:
      </p>
      <table className={styles.diagnosticTable}>
        <thead>
          <tr>
            <th scope="col">What the metric shows</th>
            <th scope="col">What it means</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">High Cycle Time</th>
            <td>Execution problem — look inside dev.</td>
          </tr>
          <tr>
            <th scope="row">High Lead Time, normal Cycle Time</th>
            <td>Demand exceeds capacity.</td>
          </tr>
          <tr>
            <th scope="row">Low Cycle Time, low Lead Time, high T2M</th>
            <td>The bottleneck is in Discovery, not Delivery.</td>
          </tr>
        </tbody>
      </table>
      <p>
        That&apos;s three numbers. You can pull all of them from Jira or Linear in an afternoon, and
        they&apos;ll already tell you a different story than &quot;we need to hire.&quot;
      </p>
    </>
  );
}

export function SectionWhereStuck(): ReactNode {
  return (
    <>
      <h2 id="where-stuck">4. Where work actually gets stuck — and why finer measurement misleads</h2>
      <p>
        So Cycle Time is high. The natural next move is to look inside it: measure time-in-status. In
        Progress, Code Review, QA, Deploy. Add up where the hours go. Find the slowest column. Fix it.
      </p>
      <p>
        This is the move most teams make, and it works — to a point. If your tasks are getting stuck in code
        review, you can read off the column-time and start a real conversation about reviewer load, PR size,
        review SLA. Same with QA bottlenecks, same with deploy queues. The data is real and the intervention
        is targeted.
      </p>
      <p>But there&apos;s a trap, and I want to be specific about it.</p>
      <p>
        Tasks don&apos;t move through stages linearly. They bounce back: from QA to development when a bug
        is found, from review back to work when a comment lands, from deploy back to dev when something
        fails in staging. The same task crosses the same stage two, three, sometimes five times. The moment
        you start measuring &quot;average time in QA,&quot; that average is silently mixing first-pass
        tickets with their third QA bounce.
      </p>
      <p>
        What most teams do at this point is double down on measurement. More granular dashboards. Track
        every transition. Add metrics for &quot;first-pass QA failure rate&quot; and &quot;review bounces
        per ticket.&quot; Wire up custom Jira reports. Eventually you have a beautiful instrument that
        nobody can act on, because the data has gotten complicated faster than the underlying system has
        gotten clearer.
      </p>
      <p>
        The mistake is that you&apos;re trying to measure the system at the wrong level. Local optimization
        — making each column faster — assumes work flows linearly. It doesn&apos;t. The system isn&apos;t a
        pipeline; it&apos;s a flow with eddies, loops, and queues.
      </p>
      <p>
        The shift that actually helps is to stop trying to measure each stage more precisely and start
        asking how work is moving through the system as a whole. Not &quot;where do tickets sit longest,&quot;
        but &quot;how many tickets are in the system at once, and what&apos;s the proportion that&apos;s
        actually advancing versus just being held there.&quot; Once you ask that question, the rest of the
        diagnostic gets a lot simpler.
      </p>
    </>
  );
}

export function SectionCountTasks(): ReactNode {
  return (
    <>
      <h2 id="count-tasks">5. The cheap diagnostic — count tasks per status, not time</h2>
      <p>Here&apos;s the most underrated diagnostic move I know.</p>
      <p>
        You don&apos;t need to measure time in each status to find the bottleneck. You just need to{" "}
        <strong>count the tasks in each status</strong>.
      </p>
      <p>Pull it from Jira in five minutes. Open Excel. List it:</p>
      <ul>
        <li>In Progress: ____</li>
        <li>Code Review: ____</li>
        <li>QA: ____</li>
        <li>Deploy: ____</li>
      </ul>
      <p>Then look for imbalances.</p>
      <p>
        If you have five tasks in development, three in review, and twenty-five in QA — you don&apos;t need
        a stopwatch. You don&apos;t need a Looker dashboard. The bottleneck is QA. Not because tasks are
        individually slow there, but because tasks are queuing up there. The system has a place where work
        accumulates faster than it dissipates.
      </p>
      <p>
        This single counting exercise tells you almost everything time-in-status would, with about one
        percent of the effort. It works because queues are the visible side of a flow problem — wherever
        queues form, that&apos;s where the system&apos;s capacity is hitting its ceiling.
      </p>
      <p>
        It also reframes the conversation. Time-in-status invites a debate about &quot;how long is too long
        in QA.&quot; Task-count makes the problem self-evident: twenty-five things waiting on two QA
        engineers is a system-shaped problem, not a &quot;QA people need to work faster&quot; problem.
      </p>
      <p>
        This is the cheapest, fastest diagnostic in the playbook, and most teams skip straight past it on
        the way to building dashboards they&apos;ll never use.
      </p>
      <p>
        But it raises a deeper question. <strong>Why</strong> are twenty-five tasks in QA? Where did they
        come from? Why does the team keep accepting new work when there&apos;s already a wall of unfinished
        tickets in the system?
      </p>
    </>
  );
}

export function SectionWip(): ReactNode {
  return (
    <>
      <h2 id="wip">6. WIP — the variable that controls everything</h2>
      <p className={styles.pullquote}>Six engineers. Eighty tasks in progress. Nothing gets done.</p>
      <p>
        It&apos;s not an exaggeration. I&apos;ve seen this exact shape multiple times. A team of three
        developers, two QA engineers, and a tech lead — eighty-plus active tickets on the board. For a team
        of six.
      </p>
      <p>
        The story behind it is always the same. A developer finishes the active part of a task and pushes
        it to review. Their current ticket is now blocked on someone else. Rather than wait, they grab
        another from the backlog. That one gets blocked too — waiting on QA. They grab another. The board
        fills up with tasks that are technically &quot;in progress&quot; but actually waiting on someone
        else, somewhere else, for some other reason.
      </p>
      <p>
        This is <strong>Work in Progress (WIP)</strong> — the number of tasks the system is holding at any
        one time.
      </p>
      <p>
        The team can&apos;t physically work on eighty things at once. Six people, eighty tasks. Most of the
        work is just sitting. Waiting on review, blocked on QA, parked because a stakeholder hasn&apos;t
        responded, partially done and merged but not yet deployed. Each of those tickets is using a slot in
        the system — a slot in someone&apos;s mental context, a place on the board, a piece of state someone
        is responsible for keeping warm.
      </p>
      <p>The cost compounds:</p>
      <ul>
        <li>
          Tasks lose business relevance while they wait. By the time the team gets back to them, the
          requirements have shifted or the urgency has evaporated.
        </li>
        <li>
          Merge conflicts accumulate. A feature branch that sits for three weeks while the main branch keeps
          moving becomes a small archaeological project to integrate.
        </li>
        <li>
          Context switching gets expensive. Every developer is mentally holding three or four &quot;in
          progress&quot; tasks at once. None of them are actually advancing.
        </li>
        <li>
          Bugs get easier to ship. With more in-flight work, fewer eyes are on each piece. Quality drops.
        </li>
      </ul>
      <p>
        And the metrics confirm it. High WIP correlates with high T2M (tasks take longer to get out), low
        Throughput (fewer tasks finish per week), more bugs (less attention per task), and lower NPS — both
        customer and team.
      </p>
      <p>
        This is the variable that controls the system. Not how fast the team is. Not how senior the
        engineers are. How much they&apos;re trying to hold in flight at once.
      </p>
    </>
  );
}

export function SectionLittlesLaw(): ReactNode {
  return (
    <>
      <h2 id="littles-law">7. The math — Little&apos;s Law</h2>
      <p>
        If the previous sections feel like they keep arriving at the same conclusion, you&apos;re not wrong.
        There&apos;s a reason.
      </p>
      <p>
        Operations research figured this out decades ago. The relationship between the amount of work in a
        system and how long that work takes is captured by <strong>Little&apos;s Law</strong>:
      </p>
      <p className={styles.formula}>Lead Time = WIP / Throughput</p>
      <p>In the language of software delivery:</p>
      <ul>
        <li>
          <strong>WIP</strong> — how many tasks are in the system at the same time
        </li>
        <li>
          <strong>Throughput</strong> — how many tasks the team completes per period
        </li>
        <li>
          <strong>Lead Time</strong> — how long a task lives in the system, on average
        </li>
      </ul>
      <p>The formula is almost embarrassingly simple, and the implication is brutal.</p>
      <p>
        Hold throughput constant and increase WIP, and lead time scales linearly. Worked example: a team
        that completes ten tasks per week.
      </p>
      <div className={styles.numericExample}>
        <p>10 tasks in the system → avg lead time ≈ 1 week</p>
        <p>30 tasks → ≈ 3 weeks</p>
        <p>80 tasks → ≈ 8 weeks</p>
      </div>
      <p>
        The team is working at the same speed in all three scenarios. The individual engineers aren&apos;t
        slower. The tickets aren&apos;t more complex. The only thing that changed is how many tasks the
        system is trying to hold simultaneously. And the average lead time stretched by 8x.
      </p>
      <p>
        This is why teams that work harder don&apos;t necessarily ship faster. You can crank throughput up
        by 10–20% with effort. You can crank WIP down by 50% or more with discipline. The math says the
        second lever moves results more.
      </p>
      <p>
        It&apos;s also why &quot;we need more engineers&quot; so often makes things worse. New engineers
        bring their own in-flight work. WIP goes up faster than throughput, and lead time gets worse before
        it gets better. Onboarding makes this almost guaranteed — the new hires take six to eight weeks to
        start contributing meaningfully, and during that period the existing team&apos;s WIP increases
        (mentoring, context handoff, reviewing the new hire&apos;s PRs).
      </p>
      <p className={styles.pullquote}>
        If you take one number, take this one. Lead Time = WIP / Throughput.
      </p>
      <p>
        It&apos;s the system math behind almost every &quot;we&apos;re moving slow&quot; engineering
        conversation I&apos;ve ever had.
      </p>
    </>
  );
}

export function SectionWipLimits(): ReactNode {
  return (
    <>
      <h2 id="wip-limits">8. The lever — WIP limits</h2>
      <p>
        So if WIP is the variable that controls system speed, and we usually can&apos;t change throughput
        dramatically in the short term, the lever is obvious: limit WIP.
      </p>
      <p>
        Most engineering teams have a productivity problem because they have a WIP problem. Fix the WIP, and
        most of the other symptoms — long lead times, frequent bugs, low predictability, perpetual context
        switching — improve at the same time.
      </p>
      <p>
        <strong>WIP limits</strong> are the discipline of saying: this system will hold no more than N tasks
        at once. If WIP is at the limit, no new work gets started until something existing finishes. Period.
      </p>
      <p>What WIP limits actually improve:</p>
      <ul>
        <li>Less context switching, because each person is holding fewer in-flight things</li>
        <li>Shorter queues at each stage, because there&apos;s less in the system overall</li>
        <li>Shorter Lead Time, by Little&apos;s Law, mechanically</li>
        <li>Fewer bugs, because attention is concentrated on finishing rather than starting</li>
        <li>Higher predictability, because the system stops oscillating between underloaded and gridlocked</li>
      </ul>
      <p>
        What WIP limits don&apos;t do — and this is the part that confuses leadership — is make individual
        developers move faster. They make the system move faster. The team isn&apos;t producing more code
        per person-hour. It&apos;s just producing fewer parallel half-finished pieces of code, which means
        more of what they produce actually ships.
      </p>
      <p>
        This is also one of the very few levers that improves delivery without hiring, without new tools,
        and without process redesign. It costs nothing. It can be applied this week. And almost nobody does
        it, because it requires saying &quot;no&quot; to starting new work — and saying &quot;no&quot; to a
        stakeholder asking for one more thing in flight is harder than saying &quot;yes.&quot;
      </p>
      <p>
        WIP limits aren&apos;t really about Jira settings. They&apos;re about whether the team and its
        stakeholders have the discipline to finish before they start.
      </p>
    </>
  );
}
