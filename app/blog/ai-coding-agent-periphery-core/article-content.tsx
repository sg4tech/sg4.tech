// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: an agent is a teammate that shines on the
// periphery and fails at the core → for a founder that line is forgiving → in a
// company the real blocker is access, not capability → here is what the agent is
// actually good at, and what it isn't → the rule underneath it all is the cost
// of error, which quietly changes the engineer's job.

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./page.module.css";

const STARTING_CHEAP_HREF = "/blog/ai-made-starting-free-finishing-expensive/";
const RESCUE_HREF = "/ai-vibecoding/";

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
        AI coding agents are brilliant at some work and dangerous at other work. Give them the
        periphery, keep humans on the core — here&apos;s where they earn their place, and where they
        don&apos;t.
      </p>
    </header>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        An AI coding agent can find the root cause of a bug in code no one has touched in a year —
        and, the same afternoon, confidently ship one that takes down checkout, if you let it near
        the core. The gap between those two moments is the same at every scale. For a solo founder
        it&apos;s forgiving; inside a company it&apos;s the whole game.
      </p>
      <p>
        For a founder, most of this is already settled. Over the past year I&apos;ve watched people
        with no serious engineering background build and grow real products themselves — a CRM for
        an offline school, a tool for business analysts, marketing automation for their own needs.{" "}
        <Link href={STARTING_CHEAP_HREF}>The entry cost of building has collapsed</Link>; you can
        wire up metric collection from Jira and GitLab in an evening.
      </p>
      <p>
        The pitfalls haven&apos;t gone anywhere — agents lose context, generate strange code, and
        some projects slide into chaos. That&apos;s solvable, and it&apos;s a lot of what I do; I
        wrote about <Link href={RESCUE_HREF}>the rescue path</Link>{" "}
        separately. That&apos;s the
        founder&apos;s version — the hard part starts one scale up, inside a company.
      </p>
    </>
  );
}

export function SectionBarrier(): ReactNode {
  return (
    <>
      <h2 id="barrier">The real barrier inside a company isn&apos;t the agent</h2>
      <p>
        At enterprise scale the agent is just as capable — the hard part is being allowed to use it.
        AI is already a standard tool in startups; inside a company, adoption stalls for weeks on
        approvals: security reviews, which data can reach the model, who owns the platform, how
        agents are governed.
      </p>
      <p>
        The insight that unlocks it: nothing has to leave the building. You can run an
        OpenAI-compatible API entirely inside your own perimeter — an open-source model like Qwen
        served through LiteLLM and vLLM, reachable only over the corporate VPN, with an agent like
        Opencode or Hermes wired into the IDE and MCP servers linking it to Jira, GitLab, Confluence,
        and the rest of your internal tools. It runs on a developer&apos;s own credentials, touches only what that
        developer already can, and logs every action for audit. Security stops being the blocker.
        Standing the full stack up is a topic of its own, but it&apos;s no longer the barrier it was
        a year ago.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-coding-agent-periphery-core/enterprise-ai-perimeter.webp"
          alt="Enterprise AI inside the corporate perimeter: a developer IDE feeds an AI agent, which reaches an OpenAI-compatible API and a self-hosted open-source model, all wired to internal systems like GitLab, Jira, Confluence, and Grafana — with no external APIs, no additional privileges, and a full audit trail."
          width={1372}
          height={1374}
          className={styles.figureImage}
          unoptimized
        />
        <figcaption className={styles.figureCaption}>
          Inside the perimeter: the agent runs on internal infrastructure, with a developer&apos;s
          own access and a full audit trail — nothing leaves the company.
        </figcaption>
      </figure>
      <p>
        Once it&apos;s in — founder&apos;s laptop or corporate VPN — the question is the same: what
        do you actually give it?
      </p>
    </>
  );
}

export function SectionWhatWorks(): ReactNode {
  return (
    <>
      <h2 id="what-works">What AI coding agents are good at</h2>
      <p>
        Connected to your code, docs, tasks, tests, logs, and metrics — whether it&apos;s Cursor,
        Claude Code, or a self-hosted internal agent — it starts to understand your project.
        Here&apos;s where it earns its place.
      </p>
      <ul>
        <li>
          <strong>Getting up to speed on unfamiliar code</strong>{" "}
          — digging into code you&apos;ve never touched, finding the root cause of a bug in
          functionality you know nothing about,
          answering an analyst&apos;s question about a feature you&apos;d never heard of.
        </li>
        <li>
          <strong>Development support</strong>{" "}
          — the tools and automations nobody ever had time for: metric collection, data exports from
          Jira and GitLab, agent skills for repetitive work like standard integrations. Not the core
          product where code quality is critical — the stuff there was never time for.
        </li>
        <li>
          <strong>Artifacts around the code</strong>{" "}
          — documentation, UML diagrams, automated tests, TestRail cases, presentations.
        </li>
        <li>
          <strong>Reviews</strong>{" "}
          — of code, requirements, and specs. 50/50 so far: sometimes pure noise, sometimes a
          genuinely useful catch.
        </li>
      </ul>
    </>
  );
}

export function SectionWhatNot(): ReactNode {
  return (
    <>
      <h2 id="what-not">What AI coding agents shouldn&apos;t own</h2>
      <p>
        <strong>End-to-end development of anything that matters.</strong>{" "}
        Money, blockchains, high-load systems, core architecture — anywhere a mistake is easy to make
        and expensive to reverse. In a startup, handing a whole feature to the agent already partly
        works; in production, with real traffic and real money on the line, it isn&apos;t a good idea
        yet. Does it speed things up? Yes. Does it replace a senior developer? No.
      </p>
    </>
  );
}

export function SectionRule(): ReactNode {
  return (
    <>
      <h2 id="rule">The periphery-vs-core rule</h2>
      <p>
        The pattern is simple. The agent covers the <strong>periphery</strong> around development:
        routine work, supporting tasks, navigating unfamiliar code, artifacts — everything with high
        volume but a relatively low cost of error. The <strong>core</strong>, where the cost of error
        is measured in money and users, stays with humans.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-coding-agent-periphery-core/periphery-vs-core.webp"
          alt="Radial diagram: a human-owned core labelled “engineering decisions” at the centre, surrounded by the periphery an AI agent covers — debugging, documentation, tests, reviews, requirements, standard integrations, automation, and presentations."
          width={1200}
          height={1200}
          className={styles.figureImage}
          unoptimized
        />
        <figcaption className={styles.figureCaption}>
          The agent works the periphery; the human core is the engineering decision.
        </figcaption>
      </figure>
      <p>
        Engineers used to spend hours searching for information and grinding through routine. Now the
        main job is making the right engineering decision.
      </p>
    </>
  );
}
