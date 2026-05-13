import {
  Activity,
  AlertTriangle,
  BookOpen,
  Bot,
  Bug,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  Flame,
  GitBranch,
  HelpCircle,
  Layers,
  LucideIcon,
  RefreshCw,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wrench
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siHabr } from "simple-icons";
import { BrandIcon } from "../components/BrandIcon";
import { Eyebrow } from "../components/Eyebrow";
import { FaqSection } from "../components/FaqSection";
import { FooterSection } from "../components/FooterSection";
import { Icon } from "../components/Icon";
import { Page } from "../components/Page";
import { Section } from "../components/Section";
import { SectionHeader } from "../components/SectionHeader";
import { TopNavigation } from "../components/TopNavigation";
import { Button } from "../components/Button";
import { BRAND_COPYRIGHT, footerLinks, personSchema } from "../lib/brand";
import type { NavigationItem } from "../lib/navigation";
import landing from "../styles/landing.module.css";
import styles from "./page.module.css";

const heroCtaHref = "https://t.me/sg4tech?start=site_ai_vibecoding_hero";
const finalCtaHref = "https://t.me/sg4tech?start=site_ai_vibecoding_final";

const navigationItems: NavigationItem[] = [
  { href: "#problem", label: "Problem", mobileNav: "primary" },
  { href: "#guardrails", label: "The system", mobileNav: "primary" },
  { href: "#process", label: "How I work", mobileNav: "primary" },
  { href: "#why-me", label: "Why me", mobileNav: "secondary" },
  { href: "#faq", label: "FAQ", mobileNav: "primary" },
  { href: "#final-cta", label: "Contact", mobileNav: "primary" }
];

const heroSignals: Array<{
  label: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  iconPath?: string;
  href?: string;
}> = [
  { label: "Wowworks", logo: "/logos/wowworks.svg", logoWidth: 104, logoHeight: 30 },
  { label: "Skyeng", logo: "/logos/skyeng.svg", logoWidth: 185, logoHeight: 56 },
  { label: "Wrote about this pattern, 2023", iconPath: siHabr.path, href: "https://habr.com/ru/articles/719352/" }
];

const credibilityMetrics = [
  { number: "15+", caption: "years of engineering", icon: Calendar },
  { number: "4K+", caption: "RPS production systems", icon: Activity },
  { number: "14+", caption: "teams delivery accelerated", icon: TrendingUp }
];

const painPoints = [
  {
    text: "One feature gets added. Three others quietly break. You spend the next two days figuring out which.",
    icon: Bug
  },
  {
    text: "There are parts of your code nobody fully understands — including you. Touching them feels like Russian roulette.",
    icon: HelpCircle
  },
  {
    text: "AI keeps rewriting the same code differently. Each fix undoes the last one. You're paying for tokens to go in circles.",
    icon: RefreshCw
  },
  {
    text: "Demo works fine. A real user enters something weird, and prod breaks at 3 AM. You stare at the code, no idea how it works.",
    icon: Clock
  }
];

const guardrailCards = [
  {
    title: "AI-workflow guardrails",
    text: "The rails AI was missing. Agent rule sets, context discipline, and self-check gates so AI doesn't undo last week's fix while making today's feature.",
    icon: Sparkles
  },
  {
    title: "Code-level guardrails",
    text: "Linters, type checks, static analysis, security scans. The basics most vibecoded MVPs skip — and the reason fix-one-break-ten keeps happening.",
    icon: Code2
  },
  {
    title: "Test guardrails",
    text: "Automated tests that don't trust the next generation. Unit, integration, and regression coverage — so adding one feature doesn't quietly break three.",
    icon: ShieldCheck
  },
  {
    title: "Pipeline guardrails",
    text: "CI/CD gates that block bad releases. Monitoring that catches problems before customers — and before 3 AM.",
    icon: GitBranch
  },
  {
    title: "Architecture rules",
    text: "Architecture that holds itself together. Boundaries, dependencies, contracts — encoded so AI agents work within them, not around them.",
    icon: Layers
  }
];

const workSteps = [
  {
    title: "1. Diagnose (1-2 weeks)",
    icon: Search,
    points: [
      "Audit codebase, dev workflow, and AI usage patterns",
      "Find what's hurting, what's working, what's missing",
      "Prioritize fixes by business impact"
    ],
    output: "A clear diagnosis and a prioritized fix plan"
  },
  {
    title: "2. Safety net",
    icon: ShieldCheck,
    points: [
      "Set up dev fundamentals: git, CI/CD, monitoring, logs",
      "Add all five guardrail layers including AI-workflow",
      "Fix critical bugs they surface"
    ],
    output: "Production-safe codebase, critical bugs fixed, AI works inside guardrails"
  },
  {
    title: "3. Scale",
    icon: TrendingUp,
    points: [
      "Define target architecture and refactor toward it safely",
      "Tune for your real load profile",
      "Hire targeted specialists only if scaling demands it"
    ],
    output: "Maintainable codebase, team scales without re-breaking it"
  }
];

const whoNotForItems = [
  "Marketing and sales are your real bottleneck. You need a GTM operator, not a delivery one.",
  "You don't have a working MVP yet. Build it before fixing it.",
  "You're looking for free or DIY help. That's a different kind of service than this."
];

const faqItems = [
  {
    question: "Will I have to stop using my AI tools?",
    answer:
      "No. I'm a vibecoder myself — my own toolkit is Claude Code + Codex + JetBrains IDE. I'm stack-agnostic, so whatever your team uses is fine. The fix is the system around your AI workflow, not abandoning it."
  },
  {
    question: "How much does it cost?",
    answer:
      "Monthly retainer, hands-on, 2-4 months typical. Specific pricing depends on scope — we work it out in conversation."
  },
  {
    question: "Will I have to hire a bunch of new expensive developers?",
    answer:
      "Not necessarily. First we squeeze more from what AI is already doing — better rules, better guardrails, better architecture around it. If scaling demands specific expertise after that, we bring in targeted specialists. Hiring isn't the first move."
  },
  {
    question: "Will you work with our existing developer or CTO?",
    answer:
      "Yes. The system I build is meant to make whatever team you have ship faster — not replace anyone. If you have a CTO or developer, they stay in the picture and we collaborate on what gets implemented."
  },
  {
    question: "We've already tried switching AI tools / a refactor sprint / hiring a senior. What's different here?",
    answer:
      "Switching tools doesn't fix what's missing — the same patterns keep showing up. Refactor sprints without tests in place create new bugs instead of fixing old ones. A senior dev alone needs the system around the code to make changes safely. The difference is building that system first, enforced by tooling, not by team discipline."
  },
  {
    question: "What specifically do you put in place?",
    answer:
      "Standard tooling: Agents.md, linters (ESLint, PHPStan, mypy), type checkers, security scanners, test frameworks (Jest, Pytest, PHPUnit), GitHub Actions, Sentry/DataDog. None of it is exotic. The work is wiring them together so AI agents can't drift around them on the next request."
  },
  {
    question: "Is my user data at risk right now?",
    answer:
      "It might be. Vibecoded MVPs often have hardcoded credentials, missing input validation, and untracked dependencies — AI doesn't ship secure by default. Computer security was my university specialty; I treat it as a primary requirement, not an add-on. Phase 2 (Safety net) systematically addresses these patterns."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://sg4.tech/ai-vibecoding#service",
      name: "AI Vibecoding Cleanup",
      url: "https://sg4.tech/ai-vibecoding",
      serviceType: "AI vibecoding delivery consulting",
      description:
        "Consulting for founders with AI-built MVPs that have stopped shipping — I build the delivery system AI doesn't ship with the code."
    },
    personSchema
  ]
};

export const metadata: Metadata = {
  title: "AI Vibecoding Cleanup: From Stuck MVP to Shipping Business",
  description:
    "Your vibecoded MVP isn't broken — the delivery system around it is missing. I build the guardrails, tests, pipeline, and architecture AI never ships with the code.",
  alternates: {
    canonical: "/ai-vibecoding"
  },
  openGraph: {
    title: "AI Vibecoding Cleanup: From Stuck MVP to Shipping Business",
    description:
      "Your vibecoded MVP isn't broken — the delivery system around it is missing. I build the guardrails, tests, pipeline, and architecture AI never ships with the code.",
    type: "website",
    siteName: "sg4.tech",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Vibecoding Cleanup: From Stuck MVP to Shipping Business",
    description:
      "Your vibecoded MVP isn't broken — the delivery system around it is missing. I build the guardrails, tests, pipeline, and architecture AI never ships with the code."
  }
};

function FlowStep({ icon, title, desc, variant }: {
  icon: LucideIcon;
  title: string;
  desc?: string;
  variant?: "outcome" | "warn";
}) {
  const base = styles.flowStep;
  const cls = variant === "outcome"
    ? `${base} ${styles.flowStepOutcome}`
    : variant === "warn"
    ? `${base} ${styles.flowStepWarnOutcome}`
    : base;
  return (
    <div className={cls}>
      <span className={styles.flowStepIcon}><Icon icon={icon} /></span>
      <div className={styles.flowStepContent}>
        <p className={styles.flowStepTitle}>{title}</p>
        {desc && <p className={styles.flowStepDesc}>{desc}</p>}
      </div>
    </div>
  );
}

function AiWithoutSystemPanel() {
  return (
    <div className={styles.transformPanel} data-mode="warm">
      <p className={styles.transformPanelTitle}>AI without system</p>
      <p className={styles.transformPanelSubtitle}>You get code. Then the chaos begins.</p>
      <div className={styles.flowList}>
        <FlowStep icon={Sparkles} title="AI generates code" />
        <div className={styles.flowArrow}>↓</div>
        <div className={styles.loopBlock}>
          <FlowStep icon={Wrench} title="Patch a bug" />
          <div className={styles.flowArrow}>↓</div>
          <FlowStep icon={AlertTriangle} title="Break a feature" />
          <div className={styles.flowArrow}>↓</div>
          <FlowStep icon={RefreshCw} title="Patch again" />
          <div className={styles.flowArrow}>↓</div>
          <FlowStep icon={Bug} title="More regressions" />
        </div>
        <div className={styles.flowArrow}>↓</div>
        <FlowStep icon={Flame} title="Production issue at 3 AM" variant="warn" />
      </div>
      <p className={styles.flowFooter}>✕ Unpredictable. Expensive. Stressful.</p>
    </div>
  );
}

function AiWithSystemPanel() {
  return (
    <div className={styles.transformPanel} data-mode="cool">
      <p className={styles.transformPanelTitle}>AI inside the system</p>
      <p className={styles.transformPanelSubtitle}>AI moves fast. The system keeps it safe.</p>
      <div className={styles.flowList}>
        <FlowStep icon={Sparkles} title="AI generates code" />
        <div className={styles.flowArrow}>↓</div>
        <FlowStep icon={ShieldCheck} title="Guardrails" desc="Rules, context, and self-checks keep AI on track" />
        <div className={styles.flowArrow}>↓</div>
        <FlowStep icon={Code2} title="Tests" desc="Automated tests catch issues before they spread" />
        <div className={styles.flowArrow}>↓</div>
        <FlowStep icon={GitBranch} title="CI/CD" desc="Gates prevent bad releases from reaching production" />
        <div className={styles.flowArrow}>↓</div>
        <FlowStep icon={Activity} title="Monitoring" desc="Real-time visibility before users are affected" />
        <div className={styles.flowArrow}>↓</div>
        <FlowStep icon={Layers} title="Architecture rules" desc="Boundaries and contracts keep the system maintainable" />
        <div className={styles.flowArrow}>↓</div>
        <FlowStep icon={CheckCircle2} title="Safe, predictable production releases" variant="outcome" />
      </div>
      <p className={styles.flowFooter}>✓ Predictable. Scalable. Sustainable.</p>
    </div>
  );
}

function AiSystemTransformationVisual() {
  return (
    <div className={styles.transformFrame} aria-hidden="true">
      <div className={styles.transformPanels}>
        <AiWithoutSystemPanel />
        <AiWithSystemPanel />
      </div>
      <p className={styles.transformCaption}>Same AI. Different system around it.</p>
    </div>
  );
}

const systemLayersStack = [
  { icon: Layers,      label: "Architecture rules",      tag: "The system holds itself together" },
  { icon: GitBranch,   label: "Pipeline guardrails",     tag: "Keep bad code out. Detect issues early" },
  { icon: ShieldCheck, label: "Test guardrails",         tag: "Prove it works. Every time" },
  { icon: Code2,       label: "Code-level guardrails",   tag: "Catch issues before they become bugs" },
  { icon: Sparkles,    label: "AI-workflow guardrails",  tag: "Guide AI to work the right way, every time" },
];

function SystemLayersVisual() {
  return (
    <div className={styles.layersStack} aria-hidden="true">
      <div className={styles.layersProduction}>
        <Icon icon={Rocket} className={styles.layersProductionIcon} />
        Production
      </div>
      {systemLayersStack.map((layer) => (
        <div key={layer.label}>
          <div className={styles.layersConnector}>↑</div>
          <div className={styles.layerRow}>
            <span className={styles.layerRowIcon}><Icon icon={layer.icon} /></span>
            <div>
              <p className={styles.layerRowTitle}>{layer.label}</p>
              <p className={styles.layerRowTag}>{layer.tag}</p>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.layersConnector}>↑</div>
      <div className={styles.layersAgents}>
        <Icon icon={Bot} className={styles.layersAgentsIcon} />
        AI agents
      </div>
    </div>
  );
}

function ProcessVisual() {
  return (
    <div className={landing.processVisual} aria-hidden="true">
      <div className={landing.processVisualStep}>
        <span className={landing.processVisualIndex}>01</span>
        <p className={landing.processVisualTitle}>Diagnose</p>
        <p className={landing.processVisualText}>Find what&apos;s actually breaking.</p>
      </div>
      <div className={landing.processVisualArrow} />
      <div className={landing.processVisualStep}>
        <span className={landing.processVisualIndex}>02</span>
        <p className={landing.processVisualTitle}>Safety net</p>
        <p className={landing.processVisualText}>Build the layers AI doesn&apos;t ship.</p>
      </div>
      <div className={landing.processVisualArrow} />
      <div className={landing.processVisualStep}>
        <span className={landing.processVisualIndex}>03</span>
        <p className={landing.processVisualTitle}>Scale</p>
        <p className={landing.processVisualText}>Refactor architecture; hire only when needed.</p>
      </div>
    </div>
  );
}

function HeroSignalsBar() {
  return (
    <div className={landing.heroSignals} aria-label="Selected credibility signals">
      {heroSignals.map((item) => {
        const inner = (
          <>
            {item.logo ? (
              <Image
                src={item.logo}
                alt={item.label}
                width={item.logoWidth ?? 100}
                height={item.logoHeight ?? 30}
                className={landing.heroSignalLogo}
                unoptimized
              />
            ) : null}
            {item.iconPath ? (
              <BrandIcon label={item.label} path={item.iconPath} className={landing.heroSignalIcon} />
            ) : null}
            {(!item.logo || item.iconPath) ? (
              <span className={landing.heroSignalLabel}>{item.label}</span>
            ) : null}
          </>
        );
        if (item.href) {
          return (
            <a key={item.label} href={item.href} className={landing.heroSignal} target="_blank" rel="noreferrer">
              {inner}
            </a>
          );
        }
        return <span key={item.label} className={landing.heroSignal}>{inner}</span>;
      })}
    </div>
  );
}

function HeroMetricList() {
  return (
    <ul className={landing.metricList} aria-label="Key outcomes">
      {credibilityMetrics.map((item) => (
        <li key={item.caption}>
          <span className={landing.metricHeader}>
            <Icon icon={item.icon} className={landing.metricIcon} />
            <span className={landing.metricNumber}>{item.number}</span>
          </span>
          <span className={landing.metricCaption}>{item.caption}</span>
        </li>
      ))}
    </ul>
  );
}

function HeroSection() {
  return (
    <section className={landing.hero}>
      <Link href="/" className={landing.backLink}>
        <span aria-hidden="true" className={landing.backLinkArrow}>←</span>
        Back to main consulting
      </Link>
      <div className={landing.heroPanel}>
        <div className={landing.heroLayout}>
          <div className={landing.heroMain}>
            <Eyebrow>Vibecoded MVP → working business</Eyebrow>
            <h1>Your vibecoded MVP isn&apos;t broken. The delivery system around it is missing.</h1>
            <p className={landing.heroStatement}>
              You&apos;ve tried switching AI tools. You&apos;ve tried refactor sprints. The fix is the delivery system AI never built.
            </p>
            <p className={landing.heroPromise}>
              I find what&apos;s missing, build it, and leave you with a codebase that ships without me.
            </p>
            <p className={styles.outcomeCloser}>
              So you can ship without fear of breaking what works.
            </p>
            <HeroSignalsBar />
            <HeroMetricList />
            <div className={landing.actions}>
              <Button
                href={heroCtaHref}
                target="_blank"
                rel="noreferrer"
                eventName="cta_click"
                payload={{ location: "ai_vibecoding_hero" }}
              >
                DM me your situation
              </Button>
              <Button variant="secondary" href="#guardrails">
                How it works
              </Button>
            </div>
          </div>
          <div className={landing.heroAside}>
            <AiSystemTransformationVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <Section id="problem">
      <SectionHeader title="The cracks in a vibecoded MVP show up the same way every time." />
      <ul className={landing.iconList} data-tone="warm">
        {painPoints.map((item) => (
          <li key={item.text}>
            <Icon icon={item.icon} className={landing.cardIcon} />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <p className={landing.callout}>
        None of these are bugs. They&apos;re what&apos;s missing — the system AI doesn&apos;t ship with the code.
      </p>
    </Section>
  );
}

function GuardrailsSection() {
  return (
    <Section id="guardrails">
      <SectionHeader
        title="The five layers of system AI doesn't ship"
        intro="Five separate layers, each enforces something AI doesn't. Together they're the system that keeps your codebase shipping."
      />
      <SystemLayersVisual />
      <div className={`${landing.cardGrid} ${landing.cardGridQuality}`}>
        {guardrailCards.map((card) => (
          <article key={card.title} className={landing.card}>
            <div className={landing.cardHeader}>
              <Icon icon={card.icon} className={landing.cardIcon} />
              <h3>{card.title}</h3>
            </div>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function WhyMeSection() {
  return (
    <Section id="why-me">
      <SectionHeader
        title="Why me"
        intro="I don't replace your AI. I build the system around it. Same pattern as the startup-mode codebases I've cleaned up for years — different generator, same fix."
      />
      <div className={`${landing.whyGrid} ${landing.whySurface}`}>
        <div className={landing.profileCard}>
          <p className={landing.profileName}>Victor Demin</p>
          <p className={landing.profileRole}>Fractional CTO / engineering delivery consultant</p>
        </div>
        <div className={landing.profileBody}>
          <ul className={landing.iconList}>
            <li>
              <Icon icon={Calendar} className={landing.cardIcon} />
              <span>15+ years across PHP, Python, Java, TypeScript, Node, C++, C#, iOS, Android (and yes, Flash once). The codebase patterns that kill delivery don&apos;t change with the stack. AI just made them faster.</span>
            </li>
            <li>
              <Icon icon={Building2} className={landing.cardIcon} />
              <span>I&apos;ve fixed this pattern at Wowworks (bugs ↓10×, delivery ↑3×, operational efficiency ↑4× — startup-mode codebase to EU-ready production) and at an EdTech scale-up (delivery ↑2×, downtime ↓10×, eNPS −100→100). The cleanup pattern is older than AI — different source, same fix.</span>
            </li>
            <li>
              <Icon icon={BookOpen} className={landing.cardIcon} />
              <span>Wrote about this exact cleanup pattern on{" "}<a href="https://habr.com/ru/articles/719352/" target="_blank" rel="noreferrer">Habr</a>{" "}in 2023, before AI accelerated it. Same fix, different generator.</span>
            </li>
            <li>
              <Icon icon={Wrench} className={landing.cardIcon} />
              <span>I do the work, not just advise. Architecture, guardrails, AI workflow tuning, refactoring — hands-on.</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function ProcessSection() {
  return (
    <Section id="process">
      <SectionHeader
        title="How I work"
        intro="No pre-decided fixes. First we see what's actually broken. Then we make changes safe to ship. Then we make the system one that scales."
      />
      <ProcessVisual />
      <div className={landing.processGrid}>
        {workSteps.map((step) => (
          <article key={step.title} className={landing.card}>
            <div className={landing.cardHeader}>
              <Icon icon={step.icon} className={landing.cardIcon} />
              <h3>{step.title}</h3>
            </div>
            <ul className={landing.problemList}>
              {step.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className={landing.output}>Output: {step.output}</p>
          </article>
        ))}
      </div>
      <p className={landing.processNote}>
        The goal isn&apos;t a heroic refactor sprint. The goal is reduced chaos, predictable shipping, and the confidence to keep going.
      </p>
      <div className={landing.expectationBox}>
        <h3>What to expect</h3>
        <ul className={landing.problemList}>
          <li>First improvements in CI/CD and monitoring within 2-4 weeks</li>
          <li>Critical bug fixes typically within the first month</li>
          <li>Architectural maturity unfolds over months — pace depends on starting state and team velocity</li>
        </ul>
      </div>
    </Section>
  );
}

function WhoNotForSection() {
  return (
    <Section>
      <SectionHeader title="Who I'm not for" />
      <ul className={styles.whoNotForList}>
        {whoNotForItems.map((item) => (
          <li key={item} className={styles.whoNotForItem}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}

function FinalCtaSection() {
  return (
    <section id="final-cta" className={landing.finalCta}>
      <h2>You don&apos;t need another AI tool. You need a fix that holds.</h2>
      <p className={landing.finalText}>
        Just write me. We&apos;ll figure out fit fast and the right next step toward shipping without fear.
      </p>
      <div className={landing.actions}>
        <Button
          href={finalCtaHref}
          target="_blank"
          rel="noreferrer"
          eventName="cta_click"
          payload={{ location: "ai_vibecoding_final" }}
        >
          Send me your project
        </Button>
      </div>
    </section>
  );
}

export default function AiVibecodingPage() {
  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TopNavigation items={navigationItems} ariaLabel="AI vibecoding landing page navigation" />
      <HeroSection />
      <ProblemSection />
      <GuardrailsSection />
      <WhyMeSection />
      <ProcessSection />
      <FaqSection items={faqItems} />
      <WhoNotForSection />
      <FinalCtaSection />
      <FooterSection links={footerLinks} copyright={BRAND_COPYRIGHT} />
    </Page>
  );
}
