// Article body sections, split out of page.tsx to satisfy ESLint
// max-lines-per-function and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: complexity grows on its own and AI speeds
// it up → seven levels of CI checks, cheapest first → one table of tools per
// language → checks beat written rules because an agent can't skip a red build
// → a ready-made Python template that bundles all of it.

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./page.module.css";

const VIBECODED_HREF = "/blog/vibecoded-mvp-stopped-shipping/";
const TEMPLATE_HREF = "https://github.com/sg4tech/python-guardrails-template";
const LEHMAN_HREF = "https://en.wikipedia.org/wiki/Lehman%27s_laws_of_software_evolution";
const HOARE_HREF = "https://everythingsysadmin.com/2009/01/tony-hoare-apologizes-for-inve.html";
const HARNESS_HREF = "https://www.harness.io/blog/10-exception-types-in-production-java-applications";
const MILLER_HREF = "https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two";

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
        AI didn&apos;t change the law that code complexity grows on its own — it just sped it up.
        Here are seven levels of CI checks that stop legacy from piling up, in the order I add them.
      </p>
    </header>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Entropy grows on its own. In physics this is the second law of thermodynamics. Software
        development looks similar: mess accumulates easily, and order takes effort.
      </p>
      <p>
        It has always been this way. As a project grows, so does its complexity: legacy piles up,
        the project gets harder to maintain, every change gets heavier, and the risk of breaking
        something keeps rising. In 1974 Manny Lehman wrote this down as{" "}
        <a href={LEHMAN_HREF} target="_blank" rel="noreferrer">
          a law of software evolution
        </a>
        : a system&apos;s complexity increases unless work is done to reduce it. AI
        didn&apos;t change that. It only made legacy pile up faster.
      </p>
      <p>
        You want to keep code as simple as possible, and this is where CI checks help.
      </p>
    </>
  );
}

// The seven levels as a staircase: listed bottom-up in source order (cheapest
// first) and drawn with the cheapest step at the bottom. Level 7 is the only
// non-deterministic one, so it gets a dashed outline and a different tag.
const ladderSteps = [
  { level: 1, name: "Dead code" },
  { level: 2, name: "Linters and formatters" },
  { level: 3, name: "Static analysis" },
  { level: 4, name: "Unit tests and coverage" },
  { level: 5, name: "Complexity and duplication" },
  { level: 6, name: "Architecture and coupling" },
  { level: 7, name: "Written rules (AGENTS.md)" }
] as const;

const SOFT_LEVEL = 7;

export function LevelLadder(): ReactNode {
  return (
    <figure className={styles.ladderFigure}>
      <ol className={styles.ladder}>
        {ladderSteps.map((step) => {
          const isSoft = step.level === SOFT_LEVEL;
          return (
            <li
              key={step.level}
              className={isSoft ? `${styles.ladderStep} ${styles.ladderStepSoft}` : styles.ladderStep}
              style={{ marginLeft: `calc(${step.level - 1} * var(--step-shift))` }}
            >
              <span className={styles.ladderNumber}>{step.level}</span>
              <span className={styles.ladderName}>{step.name}</span>
              <span className={styles.ladderTag}>{isSoft ? "not enforced by CI" : "fails the build"}</span>
            </li>
          );
        })}
      </ol>
      <figcaption className={styles.ladderCaption}>
        Cheapest checks at the bottom. Levels 1–6 fail the build every time; written rules on top
        guide the agent but can&apos;t stop it.
      </figcaption>
    </figure>
  );
}

export function SectionCheapLevels(): ReactNode {
  return (
    <>
      <h2 id="dead-code">1. Dead code</h2>
      <p>
        The simplest step is to delete what is no longer used. This can be automated too: put a
        dead-code finder in CI (vulture for Python, knip for JS/TS), and unused code simply fails
        the build.
      </p>
      <h2 id="linters">2. Linters and formatters</h2>
      <p>
        Next comes the linter: phpcs for PHP, ruff for Python, ESLint and Prettier for JS/TS, and
        so on. Every language has its own code style, and which one you pick doesn&apos;t matter.
        What matters is not spending time and money on reading code and on review comments like
        &ldquo;change double quotes to single quotes&rdquo;. Agree on the style once, and from then
        on CI checks it automatically.
      </p>
      <h2 id="static-analysis">3. Static analysis</h2>
      <p>
        The next level is static analyzers: PHPStan for PHP, mypy for Python, tsc for JS/TS.
        Strict static type checking catches simple mistakes: a string passed where a number was
        expected, or forgetting that a value can be empty. It won&apos;t check your logic, but it
        removes a whole class of errors. Empty values are the classic case: Tony Hoare, who
        invented the null reference, called it his{" "}
        <a href={HOARE_HREF} target="_blank" rel="noreferrer">
          &ldquo;billion-dollar mistake&rdquo;
        </a>
        , and according to{" "}
        <a href={HARNESS_HREF} target="_blank" rel="noreferrer">
          Harness&apos;s 2020 data
        </a>
        , NullPointerException was still in the top 10
        exceptions in 70% of the Java production environments they looked at.
      </p>
      <h2 id="unit-tests">4. Unit tests and 80% coverage</h2>
      <p>
        Why? Because bad code is very hard to unit-test. To make code coverable by unit tests, you
        have to split it into separate classes and functions, think about coupling and interfaces,
        decide what stays public and what stays private, use dependency injection, and avoid
        global state. Of course it&apos;s not a 100% guarantee, especially since AI easily inflates
        coverage with tests that check almost nothing. But one way or another, the threshold puts
        constraints on the design and raises the odds of good code.
      </p>
    </>
  );
}

export function SectionComplexity(): ReactNode {
  return (
    <>
      <h2 id="complexity">5. Complexity and duplication</h2>
      <p>
        Human working memory holds only a few independent items at once: George Miller{" "}
        <a href={MILLER_HREF} target="_blank" rel="noreferrer">
          counted 7 ± 2
        </a>{" "}
        in 1956, and Nelson Cowan refined it to about four in 2001. Anything beyond that gets
        hard and goes to swap. I haven&apos;t seen research on this for AI, but if code is
        understandable to a human, the odds go up that AI won&apos;t hallucinate. And if code is so
        tangled that a human can&apos;t follow it, AI will most likely pile new layers of legacy on
        top.
      </p>
      <p>
        So I set hard limits on duplication and complexity metrics. Limit exceeded → CI fails → you
        have to refactor and extract code into separate methods and classes. For Python, complexipy
        is one example.
      </p>
      <p>
        If legacy has already piled up, you can start from where you are: set the limit at your
        most complex function, and things at least won&apos;t get worse. But that doesn&apos;t make
        the debt go away. You pay it down separately: set aside time for refactoring and lower the
        limit after each step to lock in the result. Checks don&apos;t clean things up on their
        own. They only stop the mess from growing.
      </p>
    </>
  );
}

export function SectionArchitectureAndRules(): ReactNode {
  return (
    <>
      <h2 id="architecture">6. Architecture and coupling</h2>
      <p>
        Hard boundaries reduce complexity too, one level up. It&apos;s like encapsulation in OOP:
        the system is built from large blocks whose internals you don&apos;t need to keep in your
        head; knowing their contract is enough. And a block&apos;s implementation can be replaced
        when needed, without rewriting the rest of the system. Instead of dozens of classes and
        connections, you reason about a few large blocks. Again you shrink the number of things you
        have to hold in your head at once, this time at every level of the architecture.
      </p>
      <p>
        In practice this means Clean Architecture and Hexagonal Architecture: code is split into
        layers, and dependencies between them are strictly limited. The domain knows nothing about
        the database, HTTP, or external APIs, and outside code reaches it through predefined
        interfaces. This is checked automatically too (import-linter for Python, for example): a
        forbidden import appears, CI fails.
      </p>
      <h2 id="written-rules">7. Written rules</h2>
      <p>
        The last level is written rules. These used to be guidelines and documentation for
        developers; now it&apos;s an AGENTS.md file and documentation for AI. Unlike the checks
        above, the outcome here isn&apos;t deterministic: AI can read a rule and still break it. So
        written rules are the last mile. They hold only what couldn&apos;t be covered by checks.
        All else equal, skip the prose and write a hard check in code.
      </p>
      <p>
        AI keeps trying to switch off the check instead of fixing the code: raise the limit, add an
        exception, silence the rule with a comment. So my rules file says it on a separate line:
        weakening a check to make it pass is a workaround, not a fix.
      </p>
    </>
  );
}

type ToolRow = {
  level: string;
  python: string;
  php: string;
  js: string;
};

const toolRows: ReadonlyArray<ToolRow> = [
  { level: "Dead code", python: "vulture", php: "shipmonk/dead-code-detector (PHPStan)", js: "knip" },
  { level: "Linters and formatters", python: "ruff", php: "PHP_CodeSniffer (phpcs)", js: "ESLint + Prettier" },
  { level: "Static analysis", python: "mypy (strict)", php: "PHPStan", js: "tsc (strict)" },
  { level: "Unit tests and coverage", python: "pytest + coverage", php: "PHPUnit", js: "Jest / Vitest" },
  {
    level: "Complexity",
    python: "complexipy",
    php: "PHPMD, cognitive-complexity (PHPStan)",
    js: "ESLint complexity"
  },
  { level: "Duplication", python: "pylint duplicate-code", php: "jscpd", js: "jscpd" },
  { level: "Architecture and coupling", python: "import-linter", php: "Deptrac", js: "dependency-cruiser" }
];

export function SectionToolTable(): ReactNode {
  return (
    <>
      <h2 id="tools">The tools, by language</h2>
      <table className={styles.toolTable}>
        <caption className={styles.tableCaption}>
          Here&apos;s what I use for each level; the specific tools matter less than having every
          level fail the build.
        </caption>
        <thead>
          <tr>
            <th scope="col">Level</th>
            <th scope="col">Python</th>
            <th scope="col">PHP</th>
            <th scope="col">JS/TS</th>
          </tr>
        </thead>
        <tbody>
          {toolRows.map((row) => (
            <tr key={row.level}>
              <th scope="row">{row.level}</th>
              <td data-label="Python">{row.python}</td>
              <td data-label="PHP">{row.php}</td>
              <td data-label="JS/TS">{row.js}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export function SectionBottomLine(): ReactNode {
  return (
    <>
      <h2 id="bottom-line">Bottom line</h2>
      <p>
        Entropy will grow regardless; the only question is who holds it back. The more rules move
        from written guidelines into automated CI checks, the less it depends on a human paying
        attention in review. AI runs the checks itself, sees what failed, and fixes it: it can skip
        a line in AGENTS.md, but it can&apos;t skip a failed CI run. And the more of these checks
        you have, the more calmly you can hand code over to it.
      </p>
      <p>
        If you&apos;re a founder and don&apos;t read code, this list still works as a set of
        questions for your team: which of these levels actually fail the build? Every &ldquo;we
        catch that in review&rdquo; answer is a rule that depends on someone&apos;s attention on a
        given day. Why agent-built code needs these guardrails in the first place is its own story
        — <Link href={VIBECODED_HREF}>managing AI like a junior</Link>.
      </p>
    </>
  );
}

export function SectionTemplate(): ReactNode {
  return (
    <>
      <h2 id="python-template">A template for Python</h2>
      <p>
        The approach doesn&apos;t depend on the language. For Python I&apos;ve packaged all of it
        into a ready-made template; feel free to use it:{" "}
        <a href={TEMPLATE_HREF} target="_blank" rel="noreferrer">
          python-guardrails-template
        </a>
        .
      </p>
      <p>Inside:</p>
      <ul>
        <li>
          every check from this post behind a single <code>make verify</code> command in Docker,
          and the same command in GitHub Actions;
        </li>
        <li>architecture layers with import checks;</li>
        <li>a commit-time secret scanner;</li>
        <li>an AGENTS.md where nearly every rule points to the check that enforces it;</li>
        <li>a small example, so the checks pass right after the project is created.</li>
      </ul>
      <p>A new project is created with one command:</p>
      <pre>
        <code>copier copy gh:sg4tech/python-guardrails-template my-project</code>
      </pre>
      <p>
        And when the template gets updated, <code>copier update</code> brings the new checks into
        existing projects and keeps your changes. No more setting everything up from scratch in
        every new project.
      </p>
    </>
  );
}
