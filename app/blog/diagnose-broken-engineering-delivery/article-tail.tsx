// Tail half of the article — sections 9–10 + closing, plus the CTA, Related,
// and Attribution asides. Split out of article-content.tsx so each file stays
// under the 700-line ESLint cap.

import Link from "next/link";
import type { ReactNode } from "react";
import { getPostBySlug } from "../../lib/blog/posts";
import styles from "./page.module.css";

const CTA_HREF = "https://t.me/sg4tech?start=site_blog_metrics";

// Pillar -> spoke links come from the post registry so titles/descriptions
// never drift from the articles' own metadata.
const percentilesPost = getPostBySlug("forecast-delivery-with-percentiles");
const vibecodingPost = getPostBySlug("vibecoded-mvp-stopped-shipping");
const finishingPost = getPostBySlug("ai-made-starting-free-finishing-expensive");

// Spokes first (continue reading), then the landings. Excludes any card that
// points to the same destination as `ArticleCta` above — listing the same
// conversion path twice in the same scroll dilutes it. If `ArticleCta` is
// ever rerouted, re-check this list for overlap.
const relatedLinks = [
  {
    href: `/blog/${percentilesPost.slug}/`,
    title: percentilesPost.title,
    description: percentilesPost.description
  },
  {
    href: `/blog/${vibecodingPost.slug}/`,
    title: vibecodingPost.title,
    description: vibecodingPost.description
  },
  {
    href: `/blog/${finishingPost.slug}/`,
    title: finishingPost.title,
    description: finishingPost.description
  },
  {
    href: "/yii2/",
    title: "Running a Yii2 codebase?",
    description:
      "Legacy-specific landing: predictable releases, quality guardrails, and modernization without defaulting to a rewrite."
  },
  {
    href: "/ai-vibecoding/",
    title: "The rescue service: AI vibecoding cleanup",
    description:
      "How to add the delivery-system layers AI didn't generate — architecture rules, pipeline guardrails, test coverage."
  }
] as const;

function FailureModesList(): ReactNode {
  return (
    <ul>
      <li>
        Developers see colleagues blocked on review or QA, refuse to &quot;sit idle&quot; while there&apos;s
        work in the backlog, and quietly start new tickets anyway
      </li>
      <li>
        A stakeholder needs an urgent thing, the EM gets pressure from above, the limit is suspended
        &quot;just this once&quot;
      </li>
      <li>
        Leadership walks past the engineering area, sees people not visibly typing, and asks why the team
        isn&apos;t fully utilized
      </li>
    </ul>
  );
}

function WipSequenceList(): ReactNode {
  return (
    <ul>
      <li>
        <strong>Make the goal explicit.</strong>{" "}
        The objective is not to start more work. It&apos;s to
        finish work that&apos;s already been started. Repeat this regularly. Print it on a sticker. Whatever
        it takes for the framing to land.
      </li>
      <li>
        <strong>Explain why.</strong>{" "}
        Show the team Little&apos;s Law. Show them the
        count-tasks-per-status diagnostic. Make the case from system math, not from authority. People
        follow practices they understand far better than rules they don&apos;t.
      </li>
      <li>
        <strong>Show real examples.</strong>{" "}
        Reference cases where introducing WIP limits visibly changed
        the system — your own past teams, posts like this one, war stories from others. Pattern-matching
        does most of the work that exhortation can&apos;t.
      </li>
      <li>
        <strong>Bring the focus back, often.</strong>{" "}
        Whenever someone is about to pull a new task, ask:
        &quot;what can you do right now to move existing work to completion?&quot; Help unblock a teammate.
        Run a review. Answer a QA question. Pair on resolving a long-standing merge conflict. The
        team&apos;s instinct is to grab fresh work; the discipline is redirecting that instinct.
      </li>
    </ul>
  );
}

export function SectionIntroduceWipLimits(): ReactNode {
  return (
    <>
      <h2 id="introduce-wip-limits">9. How to introduce WIP limits without team revolt</h2>
      <p>
        The math is one thing. Convincing the system to adopt it is something else. The number of teams who
        have read about WIP limits, tried to implement them, and quietly abandoned the attempt is large.
        I&apos;d guess most of them.
      </p>
      <p>
        Here&apos;s the failure mode. Someone — usually the EM or a senior engineer who read the Kanban
        book — declares: &quot;starting Monday, WIP limit is 5 per developer, no exceptions.&quot; Two weeks
        later it&apos;s gone. The reasons it died are predictable:
      </p>
      <FailureModesList />
      <p>
        The mistake is introducing WIP limits as a rule rather than as a focus shift. Almost nobody —
        neither developers nor leadership — finds the rule itself intuitive. From the outside, telling a
        developer not to pick up new work looks irrational. It&apos;s a posture against scarcity, in a
        culture that rewards starting things.
      </p>
      <p>
        So I rarely start with the limit itself. I start by shifting the team&apos;s focus from starting
        work to finishing work. The limit gets internalized after the focus shift, not before.
      </p>
      <p>The sequence I use, roughly:</p>
      <WipSequenceList />
      <p>
        There&apos;s a story from a comment under one of my own posts that captured this well. A team set
        WIP = 5. The stakeholders initially saw it as a failure — too few things visibly happening at once.
        Within a quarter, delivery speed had improved, quality had improved, collaboration had improved,
        predictability had improved. The stakeholder view flipped. They stopped asking &quot;why are so few
        things active&quot; and started asking &quot;why aren&apos;t we using WIP limits in other parts of
        the company.&quot;
      </p>
      <p>
        The hardest part is usually not the engineering team. It&apos;s the management layer that equates
        utilization with productivity. If everyone on a team is &quot;100% busy,&quot; management feels
        comfortable; if anyone is visibly between tickets, alarm bells go off. The truth, which is
        uncomfortable, is that a team running at 100% utilization is almost always shipping less than a
        team running at 80%. Slack in the system is what lets work flow through it.
      </p>
      <p>
        WIP limits don&apos;t have to be Kanban-formal. You don&apos;t need to print numbers on the board.
        You just need the team and its stakeholders to agree, in practice: we finish before we start.
      </p>
    </>
  );
}

export function SectionFullSystemView(): ReactNode {
  return (
    <>
      <h2 id="full-system-view">10. The full system view: speed, value, and sustainability in engineering delivery</h2>
      <p>
        Speed alone is not a complete picture. Any engineering metrics framework that only optimizes for
        speed will eventually break something more important.
      </p>
      <p>The full diagnostic model has three dimensions:</p>
      <p>
        <strong>System speed</strong> — how fast we ship changes.
      </p>
      <ul>
        <li>T2M (Time to Market) — total time from idea to production</li>
        <li>Throughput — tasks completed per period</li>
        <li>Lead Time, Cycle Time, WIP — the decomposition we&apos;ve already walked through</li>
      </ul>
      <p>
        <strong>Product value</strong> — whether what we ship is actually useful.
      </p>
      <ul>
        <li>Quality — open bugs, regression rate, incident rate</li>
        <li>NPS / customer satisfaction — does the user feel like the product is getting better</li>
      </ul>
      <p>
        <strong>Team sustainability</strong> — whether the team can keep operating this way.
      </p>
      <ul>
        <li>eNPS (Employee NPS) — would the team recommend working here</li>
        <li>Burnout signals, attrition rate, on-call load</li>
      </ul>
      <p>
        The reason all three matter, together, is that any two can be temporarily faked at the expense of
        the third. You can ship faster by skipping QA and burning the team — speed goes up, value and
        sustainability collapse. You can polish quality to perfection and ship nothing — value per feature
        goes up, but the team and the company stagnate. You can keep the team happy and idle —
        sustainability is great, speed is zero.
      </p>
      <p>
        A working delivery system holds all three dimensions in tension. It&apos;s fast enough that the
        business can compete, valuable enough that customers stay, and sustainable enough that the team will
        still be here next year. When founders ask me what &quot;good&quot; looks like, this is the answer:
        not a single number, but three numbers moving roughly together.
      </p>
      <p>
        The eNPS metric in particular gets overlooked because it feels softer than the rest. It isn&apos;t.
        It&apos;s the early warning system for everything else. A team whose eNPS is dropping will, in three
        to six months, start losing senior people. The replacements will be juniors who need ramp-up. WIP
        will rise, knowledge will get thin, quality will drop, bugs will multiply. The metric you saw moving
        first was the one you ignored.
      </p>
      <p>
        You can compute almost all of these from Jira plus an HR pulse survey. None of them require a
        special tool. What they require is the willingness to look at the system honestly, all three
        dimensions at once.
      </p>
    </>
  );
}

export function SectionClosing(): ReactNode {
  return (
    <>
      <h2 id="closing">When metrics become a diagnostic tool</h2>
      <p>
        The metrics aren&apos;t new. Neither are the ideas —{" "}
        <a
          href="https://en.wikipedia.org/wiki/Theory_of_constraints"
          target="_blank"
          rel="noreferrer"
        >
          Theory of Constraints
        </a>{" "}
        (1980s),{" "}
        <a
          href="https://en.wikipedia.org/wiki/Toyota_Production_System"
          target="_blank"
          rel="noreferrer"
        >
          Toyota Production System
        </a>{" "}
        (1950s), the{" "}
        <a
          href="https://en.wikipedia.org/wiki/Kanban_(development)"
          target="_blank"
          rel="noreferrer"
        >
          Kanban Method for software
        </a>{" "}
        (David Anderson, 2000s), and{" "}
        <a
          href="https://en.wikipedia.org/wiki/Little%27s_law"
          target="_blank"
          rel="noreferrer"
        >
          Little&apos;s Law
        </a>{" "}
        (1961) all describe different aspects of the same underlying problem: work moves through
        systems, and systems slow down when flow breaks. What&apos;s new is whether your team uses
        them as a report or as a diagnostic. A report tells you something is broken. A diagnostic
        tells you where.
      </p>
      <p>
        When delivery is slow, the temptation is to react to the report — hire engineers, add process,
        install a new tool. The reaction looks like motion. It usually isn&apos;t progress. Progress
        starts when the metrics become specific enough to point at the actual constraint.
      </p>
      <p>
        If you&apos;re staring at a board with 60–80 active tasks and a team of six, count the tasks per
        status. Measure Lead Time and Cycle Time. Look at the relationship between WIP and throughput.
        The system math will do most of the work.
      </p>
    </>
  );
}

export function ArticleCta(): ReactNode {
  return (
    <aside className={styles.cta}>
      <h3 className={styles.ctaHeading}>Want a second pair of eyes on your delivery system?</h3>
      <p className={styles.ctaText}>
        The first diagnostic call is 30 minutes on Telegram. Describe the symptoms, I&apos;ll help you
        locate the real bottleneck.
      </p>
      <a href={CTA_HREF} target="_blank" rel="noreferrer" className={styles.ctaButton}>
        Book a diagnostic call on Telegram
      </a>
    </aside>
  );
}

export function ArticleRelated(): ReactNode {
  return (
    <aside className={styles.related}>
      <h3 className={styles.relatedTitle}>Related</h3>
      <p className={styles.relatedIntro}>
        If these symptoms match yours, here&apos;s where to go next depending on the codebase shape.
      </p>
      <ul className={styles.relatedList}>
        {relatedLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={styles.relatedLink}>
              <span className={styles.relatedLinkTitle}>{link.title}</span>
              <span className={styles.relatedLinkDescription}>{link.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

