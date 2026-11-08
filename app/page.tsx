import {
  ArrowRight,
  Ban,
  BookOpen,
  Bug,
  Calendar,
  Gauge,
  Layers,
  Rocket,
  ShieldCheck,
  Smile,
  Target,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { siHabr, siMedium, siTelegram } from "simple-icons";
import { ChannelLinks } from "./components/ChannelLinks";
import { Eyebrow } from "./components/Eyebrow";
import { FaqSection } from "./components/FaqSection";
import { SiteFooter } from "./components/SiteFooter";
import { HeroSignals, type HeroSignal } from "./components/HeroSignals";
import { Icon } from "./components/Icon";
import { MarkList } from "./components/MarkList";
import { Page } from "./components/Page";
import { Section } from "./components/Section";
import { SectionHeader } from "./components/SectionHeader";
import { ResultsCaption } from "./components/ResultsCaption";
import { Stat } from "./components/Stat";
import { StatementCta } from "./components/StatementCta";
import { Steps } from "./components/Steps";
import { SiteNav } from "./components/SiteNav";
import { Button } from "./components/Button";
import { WhyMeSection, type WhyMePoint } from "./components/WhyMeSection";
import { formatPostDate, getLatestPosts } from "./lib/blog/posts";
import { BRAND_NAME, LINKEDIN_URL, personSchema, SITE_URL, VICTOR_SAME_AS } from "./lib/brand";
import { LINKEDIN_SVG_PATH } from "./lib/social-icons";
import styles from "./page.module.css";

const secondaryCtaHref = "#process";
const heroCtaHref = "https://t.me/sg4tech?start=site_hero";
const finalCtaHref = "https://t.me/sg4tech?start=site_final";


const stageProblems = [
  {
    title: "Early traction",
    icon: Rocket,
    points: [
      "The MVP code is hard to change",
      "New features take longer than expected",
      "Everything depends on one or two people"
    ],
    closing: "Traction is there. The codebase isn't ready for it."
  },
  {
    title: "Growth",
    icon: TrendingUp,
    points: [
      "Features take too long to ship",
      "Deadlines slip — even with planning",
      "Bugs increase with every release"
    ],
    closing: "You have a team. It's busy. Output still feels low."
  },
  {
    title: "Scale",
    icon: Layers,
    points: [
      "Every change touches too many parts of the system",
      "Coordination overhead slows everything down",
      "Releases get riskier as the system grows"
    ],
    closing: "Complexity grows faster than the product."
  }
];

const heroMetrics = [
  { text: "2–3x faster delivery", icon: Zap },
  { text: "Up to 10x fewer bugs and downtime", icon: Bug },
  { text: "Higher predictability", icon: TrendingUp }
];

// Real client / speaking proof — shared with the dedicated landings via the
// HeroSignals component so the trust row stays identical across pages.
const heroSignals: HeroSignal[] = [
  { label: "Wowworks", logo: "/logos/wowworks.svg", logoWidth: 104, logoHeight: 30 },
  { label: "Skyeng", logo: "/logos/skyeng.svg", logoWidth: 185, logoHeight: 56 },
  { label: "PHP Russia speaker", logo: "/logos/php-russia.svg", logoWidth: 24, logoHeight: 24, labelAfterLogo: true }
];

// Split a metric line into an optional "Up to" qualifier, the leading numeric
// figure (kept verbatim, incl. the "x"), and the remaining label. Qualitative
// lines with no number return just a label and fall back to their icon.
function parseMetric(text: string): { note?: string; figure?: string; label: string } {
  let rest = text;
  let note: string | undefined;
  if (/^up to /i.test(rest)) {
    note = rest.slice(0, 5);
    rest = rest.slice(6);
  }
  const space = rest.indexOf(" ");
  const figure = space === -1 ? rest : rest.slice(0, space);
  if (space === -1 || !/^\d/.test(figure)) return { label: text };
  return { note, figure, label: rest.slice(space + 1) };
}

const trustPoints: WhyMePoint[] = [
  { id: "experience", icon: Calendar, content: <span>15+ years in engineering</span> },
  { id: "leadership", icon: Users, content: <span>8+ years in leadership</span> },
  { id: "mvp", icon: Rocket, content: <span>Built MVPs hands-on</span> },
  { id: "scale", icon: TrendingUp, content: <span>Scaled teams and improved delivery systems</span> },
  {
    id: "writing",
    icon: BookOpen,
    content: <span>Write about engineering metrics, bottlenecks, and AI workflows</span>
  }
];

const caseStudies = [
  {
    title: "Scaling delivery",
    company: "B2B product company (international markets, 3 cross-functional teams)",
    problem: ["Slow and unpredictable delivery", "High bug rate"],
    work: ["Introduced delivery metrics", "Rebuilt development flow", "Aligned engineering with product"],
    metrics: [
      { figure: "2–3x", label: "faster delivery" },
      { figure: "10x", label: "fewer bugs" },
      { icon: TrendingUp, label: "Predictable releases" }
    ]
  },
  {
    title: "From chaos to system",
    company: "EdTech company (growth stage)",
    problem: ["Chaotic development", "Long time-to-market", "Low NPS"],
    work: ["Split Discovery / Delivery", "Introduced structured process", "Added feedback loops"],
    metrics: [
      { figure: "2x", label: "faster time-to-market" },
      { figure: "2x", label: "throughput" },
      { icon: Smile, label: "NPS improved significantly" }
    ]
  },
  {
    title: "Cost & efficiency",
    company: "Product company (scaling phase)",
    problem: ["High engineering cost", "Low effective throughput"],
    work: ["Identified bottlenecks (ToC)", "Reduced unnecessary work", "Improved prioritization"],
    metrics: [
      { figure: "~1.5x", label: "cost reduction" },
      { icon: Gauge, label: "Higher effective throughput" },
      { icon: ShieldCheck, label: "More stable system" }
    ]
  }
];

const workSteps = [
  {
    title: "Review (1–2 weeks)",
    points: [
      "Get to know your product, users, and business goals",
      "Review the codebase, architecture, and how it ships today",
      "Agree on scope, priorities, and the first release"
    ],
    output: "a scoped plan and a defined first release"
  },
  {
    title: "Build",
    points: [
      "Write the code — features, integrations, fixes",
      "Set up CI, tests, and guardrails from day one",
      "Short iterations with working increments you can see"
    ],
    output: "working software, shipped in increments"
  },
  {
    title: "Ship & stabilize",
    points: [
      "Release to production",
      "Fix and harden what real users run into",
      "Keep releases predictable as the product grows"
    ],
    output: "a product that holds up in production"
  },
  {
    title: "Grow with the product",
    points: [
      "Lead development as the scope grows",
      "Bring in and lead more engineers when needed",
      "Use AI and delivery metrics to keep the pace up"
    ],
    output: "a codebase and team that keep shipping"
  }
];

const fitGroups = [
  {
    title: "Best fit",
    icon: Target,
    kind: "check" as const,
    points: [
      "Founders and product companies (B2B / SaaS / platforms) that need their product built or fixed",
      "You know your customers and have a validated product (at least an MVP)",
      "You already have revenue and a working sales channel"
    ]
  },
  {
    title: "Not a good fit",
    icon: Ban,
    kind: "x" as const,
    points: [
      "Idea stage — no clear audience, validated MVP, or revenue yet",
      "Unpaid work or equity-only deals",
      "Marketing, growth, or lead-generation services",
      "Staff augmentation only, without ownership of the result"
    ]
  }
];

const specializationLinks = [
  {
    href: "/yii2/",
    title: "Running a Yii2 project?",
    description: "There is a dedicated landing page for Yii2 development: quality, release predictability, speed, and modernization without defaulting to a rewrite."
  },
  {
    href: "/ai-vibecoding/",
    title: "Vibecoded MVP slowing you down?",
    description: "Dedicated landing page for cleaning up AI-built MVPs without rewriting from scratch — I build the delivery system AI never shipped with the code."
  }
];

const insightLinks = [
  {
    label: "Habr",
    href: "https://habr.com/users/sg4tech/",
    iconPath: siHabr.path
  },
  {
    label: "Telegram",
    href: "https://t.me/cto_lifehacks",
    iconPath: siTelegram.path
  },
  {
    label: "Medium",
    href: "https://medium.com/@sg4tech",
    iconPath: siMedium.path
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    iconPath: LINKEDIN_SVG_PATH
  }
];

const faqItems = [
  {
    question: "What do you actually do?",
    answer:
      "I build and fix software for product companies — writing the code, leading development, and making delivery faster and more predictable with metrics and AI."
  },
  {
    question: "How soon will something ship?",
    answer:
      "The review takes 1–2 weeks and ends with a scoped plan and a defined first release. Working increments usually reach production within weeks, not months — the exact pace depends on the scope and the state of the codebase."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Victor Demin Software Engineering",
      url: SITE_URL,
      serviceType: "Software development and technical leadership",
      description:
        "I build software systems that ship on time and hold up in production — writing the code, fixing what's broken, and leading development with product teams.",
      areaServed: "Global",
      founder: {
        "@id": `${SITE_URL}/#person`
      },
      sameAs: VICTOR_SAME_AS
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    }
  ]
};

export const metadata: Metadata = {
  title: "Software Engineering & Technical Leadership",
  description:
    "I build software systems that ship on time and hold up in production — writing the code, fixing what's broken, and leading development with product teams.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Software Engineering & Technical Leadership",
    description:
      "I build software systems that ship on time and hold up in production — writing the code, fixing what's broken, and leading development with product teams.",
    type: "website",
    siteName: BRAND_NAME,
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineering & Technical Leadership",
    description:
      "I build software systems that ship on time and hold up in production — writing the code, fixing what's broken, and leading development with product teams."
  }
};

function HeroSection() {
  return (
    <section className={styles.hero}>
      <Eyebrow>Software engineering & technical leadership</Eyebrow>
      <div className={styles.heroLayout}>
        <div>
          <h1>I build systems that work.</h1>
          <HeroSignals signals={heroSignals} className={styles.heroSignals} />
        </div>
        <div className={styles.heroSecondary}>
          <p className={styles.heroLead}>
            Software that ships on time, holds up in production, and doesn&apos;t fall apart as it grows.
          </p>
          <p className={styles.heroText}>
            Using system thinking, delivery metrics, and AI, I&nbsp;build it — faster and with less chaos.
          </p>
          <div className={styles.heroActions}>
            <Button
              href={heroCtaHref}
              target="_blank"
              rel="noreferrer"
              eventName="cta_click"
              payload={{ location: "hero" }}
            >
              Discuss your project
            </Button>
            <Button variant="secondary" href={secondaryCtaHref}>
              See how I work
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.heroProof}>
        <p className={styles.heroCredibility}>Experience across startups and scaling product companies.</p>
        <ul className={styles.heroStats} aria-label="Key outcomes">
          {heroMetrics.map((metric) => {
            const parsed = parseMetric(metric.text);
            return (
              <li key={metric.text}>
                <Stat figure={parsed.figure} icon={metric.icon} note={parsed.note} label={parsed.label} />
              </li>
            );
          })}
        </ul>
        <ResultsCaption />
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <Section id="problem">
      <SectionHeader title="The product sells. The software can't keep up." />
      <div className={styles.stageGrid}>
        {stageProblems.map((stage) => (
          <article key={stage.title} className={styles.card}>
            <h3 className={styles.cardHeading}>
              <Icon icon={stage.icon} className={styles.cardHeadingIcon} />
              {stage.title}
            </h3>
            <MarkList items={stage.points} />
            <p className={styles.cardNote}>{stage.closing}</p>
          </article>
        ))}
      </div>
      <div className={styles.callout}>
        <p>Hiring more people rarely fixes it.</p>
        <p>The fix is in how the software is built and shipped — and that&apos;s what I do.</p>
      </div>
    </Section>
  );
}

function ResultsSection() {
  return (
    <Section id="results">
      <SectionHeader title="Results" intro="Past roles and projects — what changed when I led development." />
      <div className={styles.stack}>
        {caseStudies.map((study) => (
          <article key={study.title} className={styles.caseStudy}>
            <header className={styles.caseHeader}>
              <h3>{study.title}</h3>
              <p>{study.company}</p>
            </header>
            <div className={styles.caseMetrics}>
              {study.metrics.map((metric) => (
                <Stat figure={metric.figure} icon={metric.icon} label={metric.label} key={metric.label} />
              ))}
            </div>
            <dl className={styles.caseDetails}>
              <div>
                <dt>Problem</dt>
                <dd>{study.problem.join(" · ")}</dd>
              </div>
              <div>
                <dt>What I did</dt>
                <dd>{study.work.join(" · ")}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}

function TrustSection() {
  return (
    <WhyMeSection
      intro="I write the code, lead the work, and stay until it runs in production."
      points={trustPoints}
    />
  );
}

function ProcessSection() {
  return (
    <Section id="process">
      <SectionHeader title="How I work" />
      <Steps
        items={workSteps.map((step) => ({
          title: step.title,
          body: (
            <>
              <MarkList items={step.points} />
              <p className={styles.output}>Output: {step.output}</p>
            </>
          )
        }))}
      />
      <p className={styles.processNote}>No magic. Just a system that works.</p>
    </Section>
  );
}

function FitSection() {
  return (
    <Section id="fit">
      <SectionHeader title="Who I work with" intro="I ship the product. You bring the customers." />
      <div className={styles.fitGrid}>
        {fitGroups.map((group) => (
          <article key={group.title} className={styles.fitCard}>
            <h3 className={styles.cardHeading}>
              <Icon icon={group.icon} className={styles.cardHeadingIcon} />
              {group.title}
            </h3>
            <MarkList items={group.points} kind={group.kind} />
          </article>
        ))}
      </div>
    </Section>
  );
}

function SpecializationSection() {
  return (
    <Section>
      <SectionHeader
        title="Specialized offers"
        intro="If your situation is more specific, start with the page built for it."
      />
      <div className={styles.specializationGrid}>
        {specializationLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.specializationCard}>
            <span className={styles.specializationTitle}>{link.title}</span>
            <span className={styles.specializationDescription}>{link.description}</span>
            <Icon icon={ArrowRight} className={styles.specializationArrow} />
          </Link>
        ))}
      </div>
    </Section>
  );
}

// Split a title before its last word, so the trailing arrow can be glued to
// that word and never wrap onto a line of its own.
function titleHead(title: string): string {
  return title.slice(0, title.lastIndexOf(" ") + 1);
}

function titleTail(title: string): string {
  return title.slice(title.lastIndexOf(" ") + 1);
}

function InsightsSection() {
  return (
    <Section id="insights">
      <div className={styles.writingHeader}>
        <SectionHeader
          title="Writing"
          intro="I write about delivery systems, bottlenecks, metrics, and how AI changes engineering workflows."
          introClassName={styles.writingIntro}
        />
        <Link href="/blog/" className={styles.allPostsLink}>
          All posts
          <Icon icon={ArrowRight} className={styles.allPostsArrow} />
        </Link>
      </div>
      <ul className={styles.latestPosts}>
        {getLatestPosts(3).map((post) => (
          <li key={post.slug} className={styles.latestPostItem}>
            <Link href={`/blog/${post.slug}/`} className={styles.latestPost}>
              <span className={styles.latestPostMeta}>
                <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time> ·{" "}
                {post.readingMinutes} min read
              </span>
              <span className={styles.latestPostTitle}>
                {titleHead(post.title)}
                <span className={styles.titleTail}>
                  {titleTail(post.title)}
                  <Icon icon={ArrowRight} className={styles.latestPostArrow} />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <ChannelLinks items={insightLinks} ariaLabel="Writing channels" />
    </Section>
  );
}

function FinalCtaSection() {
  return (
    <StatementCta
      id="final-cta"
      heading={
        <>
          Tell me what you&apos;re building —{" "}
          <em>I&apos;ll ship it.</em>
        </>
      }
      text="Share where the product is, who uses it, and what has to ship next. I'll reply with how I'd scope the work and the first release."
      primary={{
        href: finalCtaHref,
        label: "Discuss your project",
        target: "_blank",
        rel: "noreferrer",
        eventName: "cta_click",
        payload: { location: "final" }
      }}
    />
  );
}

export default function HomePage() {
  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteNav current="/" />
      <HeroSection />
      <ProblemSection />
      <TrustSection />
      <ResultsSection />
      <ProcessSection />
      <FitSection />
      <SpecializationSection />
      <InsightsSection />
      <FaqSection items={faqItems} />
      <FinalCtaSection />
      <SiteFooter />
    </Page>
  );
}
