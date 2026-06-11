// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds the argument: the stall pattern → the junior reframe →
// the proof case → the practice mapping → why past fixes failed → the restart
// sequence. Prose approved by Viktor in
// docs/private/writing-drafts/vibecoded-mvp-junior-codebase-draft.md.

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./page.module.css";

const PILLAR_HREF = "/blog/diagnose-broken-engineering-delivery/";
const HUB_HREF = "/ai-vibecoding/";
const HANGOVER_HREF = "https://www.fastcompany.com/91398622/the-vibe-coding-hangover-is-upon-us";
const VIBE_STUDY_HREF = "https://arxiv.org/abs/2512.11922";
const CONVERGED_HREF =
  "https://www.cio.com/article/4162085/your-ai-coding-agent-isnt-a-tool-its-a-junior-developer-treat-it-like-one.html";
const VERACODE_HREF = "https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/";
const AGENTS_MD_HREF = "https://agents.md";

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
        A vibecoded MVP stalls for the same reason a team of junior developers without a senior
        stalls: code gets written fast, nothing catches mistakes before they reach production, and
        every next change quietly breaks the last one.
      </p>
    </header>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        The same story keeps surfacing in founder communities — the tech press has already named it{" "}
        <a href={HANGOVER_HREF} target="_blank" rel="noreferrer">
          the vibe-coding hangover
        </a>{" "}
        — and it always reaches the same point. The MVP exists. It has real users, sometimes real
        revenue. The first months were the best building experience of the founder&apos;s life —
        describe a feature in Cursor, Claude Code, Lovable, or Bolt, and get a feature. And then,
        months in, shipping slows to a stop. Not all at once. Releases get scarier, fixes take
        longer, and changes that used to take an afternoon start taking weeks.
      </p>
      <p>
        The usual conclusion at this point is that AI coding was a trap, or that the codebase is
        garbage and needs a rewrite. I don&apos;t think either is true. What I see in these codebases
        is something I&apos;d been fixing for years before an LLM ever wrote a line of production
        code: the output of fast, unsupervised junior work. The industry has known how to handle
        that for decades — and inside a typical vibecoded MVP, almost none of that knowledge has
        been applied. That&apos;s the good news: your situation is well understood, and so are the
        fixes.
      </p>
    </>
  );
}

export function SectionStall(): ReactNode {
  return (
    <>
      <h2 id="stall">The shape of the stall</h2>
      <p>The pattern repeats so consistently that I can list the symptoms without seeing the codebase:</p>
      <ul>
        <li>
          You add one feature and three others break. Finding out <em>which</em> three takes longer
          than the feature did.
        </li>
        <li>
          There are parts of the AI-generated codebase nobody understands — including you, and
          including the AI that wrote them. Touching those parts is a gamble.
        </li>
        <li>
          The AI keeps rewriting the same code differently. Each fix undoes a previous fix.
          You&apos;re paying for tokens to go in circles.
        </li>
        <li>
          The demo flow works. Then a real user does something slightly unusual, and production
          breaks at night — and the first you hear of it is a user complaint.
        </li>
      </ul>
      <p>
        All four symptoms come from the same place: nothing in the codebase or the workflow is
        holding earlier decisions in place, so every new change re-rolls the dice on everything
        before it. Research is starting to document the same trade-off:{" "}
        <a href={VIBE_STUDY_HREF} target="_blank" rel="noreferrer">
          a recent study of vibe coding in practice
        </a>{" "}
        describes seamless generation paid for later in architectural inconsistency, security gaps,
        and maintenance overhead.
      </p>
    </>
  );
}

export function SectionJunior(): ReactNode {
  return (
    <>
      <h2 id="junior">The fastest junior you&apos;ve ever hired</h2>
      <p>
        Here&apos;s the reframe that makes the whole situation tractable: treat the coding agent as
        a teammate with a very specific profile. It is the fastest junior developer you have ever
        worked with — it produces a feature in minutes, never pushes back, never gets tired — and it
        has zero memory of why last month&apos;s decisions were made, no fear of touching anything,
        and no ownership of the outcome. It will confidently hand you code that looks finished,
        because looking finished is what it optimizes for.
      </p>
      <p>
        Software teams have employed exactly this person for as long as the industry has existed —
        every practice built around junior developers exists because of this profile. Experienced
        engineers have{" "}
        <a href={CONVERGED_HREF} target="_blank" rel="noreferrer">
          largely converged on this framing
        </a>
        ; what hasn&apos;t reached founders is the half that matters — the management system that
        comes with it.
      </p>
      <p>
        I say this as someone who builds with AI agents every day — my own product work is
        vibecoded, and I have no intention of stopping. Every change my agents produce passes
        linters, type checks, and tests in CI before it lands. The tools differ by stack — mypy and
        pytest on Python, tsc and ESLint on Node, PHPStan and PHPUnit on PHP — the idea stays the
        same. The speed is real. So is the profile.
      </p>
    </>
  );
}

export function SectionCase(): ReactNode {
  return (
    <>
      <p>
        I&apos;ve cleaned up after the human version of this several times. At one EdTech startup
        where I worked as a fractional CTO, production could be down for hours before anyone found
        out: nothing was watching. No alerts, no error tracking. Functional bugs sat in the product
        with nobody paying attention to them. The code had been written quickly, by people with more
        speed than experience, and the biggest gaps sat around it: nobody reviewed changes, nothing
        tested the critical paths, nothing watched production, and a release meant a developer
        logging into the production server and changing things by hand.
      </p>
      <p>
        We put monitoring in place, added tests, code review, and a QA step, replaced hand-edits on
        the server with a release pipeline, and rewrote some parts of the code along the way. The
        outages stopped; production stayed stable from then on. Over the engagement, downtime fell
        more than tenfold, delivery — time-to-market and throughput — more than doubled, running
        costs dropped 1.5×, and the team&apos;s eNPS went from −100% to +100%. Alongside the tooling
        I sat down with the developer one-on-one — his goals, how to reach them — because managing a
        junior includes growing one. None of this is exotic; it&apos;s the standard kit, applied
        late.
      </p>
      <p className={styles.pullquote}>
        AI didn&apos;t exist for that startup, and the failure is identical to the one inside an
        AI-built MVP. AI just reaches it faster.
      </p>
    </>
  );
}

function MappingTable(): ReactNode {
  return (
    <table className={styles.mappingTable}>
      <thead>
        <tr>
          <th>How teams handle juniors</th>
          <th>The AI equivalent</th>
          <th>What it stops</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>An onboarding doc: how we structure code here, what we never do</th>
          <td>
            A conventions file the agent reads on every task (
            <a href={AGENTS_MD_HREF} target="_blank" rel="noreferrer">
              AGENTS.md
            </a>{" "}
            / CLAUDE.md)
          </td>
          <td>The agent re-inventing architecture from scratch on every request</td>
        </tr>
        <tr>
          <th>Code review before anything merges</th>
          <td>A human or senior agent reviews every AI change; linters and type checkers run as a hard gate</td>
          <td>&ldquo;Looks finished&rdquo; code silently breaking features that worked</td>
        </tr>
        <tr>
          <th>A test suite that must stay green</th>
          <td>Tests on the critical paths, run automatically; a red suite blocks the merge</td>
          <td>The fix that breaks two other things; the regression you find in production</td>
        </tr>
        <tr>
          <th>CI that won&apos;t let bad changes through</th>
          <td>The same pipeline, applied to agent output: lint, types, security scan, build</td>
          <td>Hardcoded credentials, unvalidated input, dependencies nobody chose on purpose</td>
        </tr>
        <tr>
          <th>Monitoring, so problems surface before customers do</th>
          <td>Error tracking and alerts wired to the deployed product</td>
          <td>Production down for hours while everyone assumes it&apos;s fine</td>
        </tr>
        <tr>
          <th>Small, scoped tasks — a junior never gets &ldquo;rebuild billing&rdquo; as one ticket</th>
          <td>One change per request, sized so a human can actually review the diff</td>
          <td>The 4,000-line diff nobody can check, which is where the worst surprises live</td>
        </tr>
        <tr>
          <th>Regular one-on-ones and feedback, so the junior grows instead of repeating mistakes</th>
          <td>What review catches gets folded back into the conventions file, so the agent stops making that mistake</td>
          <td>Paying for the same correction, in tokens and review time, every single week</td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionMapping(): ReactNode {
  return (
    <>
      <h2 id="practices">What experienced teams do about juniors — and the AI equivalent of each</h2>
      <p>
        The practices that turn junior output into a working business are boringly well known. Every
        one of them has a direct AI-era equivalent, and a vibecoded MVP is usually missing all of
        them at once.
      </p>
      <MappingTable />
      <p>
        The left column and the right column are the same list. That&apos;s the entire argument of
        this essay: the discipline for managing AI agents already exists, fully road-tested, and is
        waiting to be applied.
      </p>
      <p>
        The security row carries a number worth knowing: in{" "}
        <a href={VERACODE_HREF} target="_blank" rel="noreferrer">
          Veracode&apos;s 2025 GenAI Code Security Report
        </a>
        , 45% of AI-generated code samples — across more than 100 models — failed security checks.
        The gate exists because the junior ships vulnerabilities at scale.
      </p>
      <p>
        Better prompting is missing from the list on purpose. A senior fixes the environment around
        a junior so that careless work physically can&apos;t reach production — however the ticket
        is phrased.
      </p>
    </>
  );
}

export function SectionFailedFixes(): ReactNode {
  return (
    <>
      <h2 id="failed-fixes">The fixes you already tried, and why they didn&apos;t hold</h2>
      <p>
        By the time a founder starts looking for outside help, they&apos;ve usually been through two
        or three rescue attempts. The attempts fail in predictable ways, and the junior lens
        explains every one of them.
      </p>
      <p>
        <strong>Switching AI tools.</strong> Swapping Cursor for Windsurf or Copilot replaces one
        junior with another junior. The new one may be smarter; it still has no memory, no fear, and
        no review waiting for its output. The same patterns return within weeks, because they were
        never about which model wrote the code.
      </p>
      <p>
        <strong>Better prompts and rules files.</strong> Closer — this is the onboarding doc, and
        it&apos;s a real layer. But an instruction the pipeline doesn&apos;t enforce is a
        suggestion. A junior nods at the style guide and then ships whatever they ship; what makes
        the guide real is the review and the gates behind it.
      </p>
      <p>
        <strong>The refactor sprint.</strong> &ldquo;Let&apos;s stop features for two weeks and
        clean up.&rdquo; Refactoring without tests is how a junior turns old bugs into new bugs —
        the codebase ends up <em>differently</em> broken, and you&apos;ve paid two weeks of
        standstill for it. Cleanup comes after the net that catches what cleanup breaks.
      </p>
      <p>
        <strong>Hiring a senior developer.</strong> The right instinct, often at the wrong moment.
        Drop a senior into a codebase with no tests, no review history, and no monitoring, and their
        first months disappear into archaeology — rediscovering, by hand, facts that tooling should
        be stating outright. Some leave. Build the safety net first and the same hire becomes
        effective in week one — if you still need them at all.
      </p>
    </>
  );
}

export function SectionRestart(): ReactNode {
  return (
    <>
      <h2 id="restart">Restarting delivery</h2>
      <p>The order of operations matters more than any individual practice.</p>
      <ol>
        <li>
          <strong>Diagnose first.</strong> Which missing layer is actually stopping shipping{" "}
          <em>now</em>? If production breaks silently, monitoring comes first. If every change
          causes regressions, tests on the two or three critical user paths come first. A vibecoded
          MVP can&apos;t absorb six new practices in a week; start with the one that hurts most,
          then add the next.
        </li>
        <li>
          <strong>Build the safety net.</strong> Monitoring and error tracking, a CI pipeline with
          real gates, tests on the paths the business dies without, review on every change — human
          or agent, the rule is the same: nothing merges unseen. This phase is measured in weeks — a
          couple of months at the outside — and it&apos;s where shipping quietly restarts, because
          changes stop being frightening.
        </li>
        <li>
          <strong>Only then scale.</strong> Architecture cleanup, performance tuning, hiring
          decisions — the work of scaling AI-generated software. All of it is cheap once the net
          exists and reckless while it doesn&apos;t.
        </li>
      </ol>
      <p>
        This is the same sequence I&apos;ve run on junior-built codebases for years, and it&apos;s
        exactly what I offer for vibecoded products — the longer version, with what each phase costs
        and what it returns, is on the <Link href={HUB_HREF}>AI vibecoding cleanup</Link> page. And
        if you want to <em>measure</em> where your delivery actually stalls instead of guessing —
        which tasks stick, and at which stage — I wrote a separate playbook on{" "}
        <Link href={PILLAR_HREF}>diagnosing a delivery system with metrics</Link>; it applies to a
        two-person AI-assisted team exactly as it does to a forty-engineer org.
      </p>
    </>
  );
}
