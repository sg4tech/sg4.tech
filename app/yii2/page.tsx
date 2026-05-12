import {
  Activity,
  AlertTriangle,
  BarChart3,
  Building2,
  Bug,
  Calendar,
  Clock,
  Cog,
  Compass,
  Flame,
  Folder,
  GitBranch,
  Infinity as InfinityIcon,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Wrench,
  Zap
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siHabr, siMedium, siPhp, siTelegram, siYoutube } from "simple-icons";
import { BrandIcon } from "../components/BrandIcon";
import { FaqSection } from "../components/FaqSection";
import { FooterSection } from "../components/FooterSection";
import { Icon } from "../components/Icon";
import { Page } from "../components/Page";
import { Section } from "../components/Section";
import { SectionHeader } from "../components/SectionHeader";
import { TopNavigation } from "../components/TopNavigation";
import TrackedLink from "../components/TrackedLink";
import { BRAND_COPYRIGHT, footerLinks, personSchema } from "../lib/brand";
import type { NavigationItem } from "../lib/navigation";
import { LINKEDIN_SVG_PATH } from "../lib/social-icons";
import styles from "./page.module.css";

const heroCtaHref = "https://t.me/sg4tech?start=site_yii2_hero";
const finalCtaHref = "https://t.me/sg4tech?start=site_yii2_final";

const navigationItems: NavigationItem[] = [
  { href: "#problem", label: "Problem", mobileNav: "primary" },
  { href: "#quality", label: "Quality", mobileNav: "secondary" },
  { href: "#speed", label: "Speed", mobileNav: "secondary" },
  { href: "#why-me", label: "Why me", mobileNav: "secondary" },
  { href: "#process", label: "How I work", mobileNav: "primary" },
  { href: "#faq", label: "FAQ", mobileNav: "primary" },
  { href: "#proof", label: "Proof", mobileNav: "secondary" },
  { href: "#final-cta", label: "Contact", mobileNav: "primary" }
];

const painPoints = [
  {
    text: "New functionality in Yii2 ships slower and slower.",
    icon: Clock
  },
  {
    text: "Every release increases the risk of bugs, regressions, and manual firefighting.",
    icon: AlertTriangle
  },
  {
    text: "Legacy code, manual checks, and chaotic process slow the business down more than it seems.",
    icon: Cog
  },
  {
    text: "The team stays busy, but product delivery speed still feels unacceptable.",
    icon: Activity
  }
];

const qualityLevers = [
  {
    text: "guardrails in code and process so predictable mistakes never reach production",
    icon: ShieldCheck
  },
  {
    text: "CI/CD that checks critical scenarios before release instead of after an incident",
    icon: GitBranch
  },
  {
    text: "monitoring and alerts that surface degradation before customers notice it",
    icon: Activity
  },
  {
    text: "AI and focused automation for routine checks, regressions, and legacy support",
    icon: Sparkles
  }
];

const speedLevers = [
  {
    text: "I find where the real slowdown lives: queues, manual approvals, and hidden dependencies",
    icon: Search
  },
  {
    text: "I set up delivery metrics so the bottleneck becomes visible instead of debated",
    icon: BarChart3
  },
  {
    text: "I align people, process, and priorities around one delivery flow",
    icon: Workflow
  },
  {
    text: "I introduce AI agents where they remove manual work and shorten the cycle",
    icon: Zap
  }
];

const whyMePoints = [
  {
    text: "15+ years in the industry.",
    icon: Calendar
  },
  {
    text: "I have fixed delivery systems many times where speed and quality were working against each other.",
    icon: Wrench
  },
  {
    text: "I work both hands-on and system-level: architecture, process, metrics, and management.",
    icon: Compass
  },
  {
    text: "Experience in Wowworks (B2B facility management, EU, $3.6M raised) and Skyeng (K-12 EdTech platform, 2M+ MAU, $100M+ valuation).",
    icon: Building2
  }
];

const credibilityMetrics = [
  {
    number: "10×",
    caption: "fewer bugs and production incidents",
    icon: Bug
  },
  {
    number: "5×",
    caption: "less downtime, more predictable releases",
    icon: Activity
  },
  {
    number: "2–3×",
    caption: "faster delivery without extra hiring",
    icon: Zap
  }
];

const heroSignals = [
  { label: "Wowworks", logo: "/logos/wowworks.svg", logoWidth: 104, logoHeight: 30 },
  { label: "Skyeng", logo: "/logos/skyeng.svg", logoWidth: 185, logoHeight: 56 },
  { label: "PHP Russia speaker", logo: "/logos/php-russia.svg", logoWidth: 24, logoHeight: 24, labelAfterLogo: true }
];

const workSteps = [
  {
    title: "1. Audit (1-2 weeks)",
    icon: Search,
    points: ["Review the codebase and deployment health", "Find the real bottlenecks", "Assess release risk, quality, and coverage"],
    output: "a clear diagnosis and a prioritized action list"
  },
  {
    title: "2. Quality foundation",
    icon: ShieldCheck,
    points: ["Add CI/CD and guardrails", "Set up monitoring and alerts", "Reduce the probability of production incidents"],
    output: "stable, lower-risk releases"
  },
  {
    title: "3. Delivery acceleration",
    icon: Zap,
    points: ["Fix the team flow", "Introduce delivery metrics", "Apply AI where it creates real leverage"],
    output: "faster, more predictable delivery"
  }
];

const faqItems = [
  {
    question: "Do we need to rewrite the whole project?",
    answer:
      "No. The point is to improve the existing Yii2 project without an expensive and risky rewrite. First we make the system reliable and manageable."
  },
  {
    question: "What if the project has almost no test coverage?",
    answer:
      "That is not a blocker. It is a common starting point for legacy systems. Coverage should be added by risk and value, not through a months-long freeze on delivery."
  },
  {
    question: "How soon can we expect results?",
    answer:
      "CI/CD and monitoring improvements are usually visible within 2-4 weeks. Delivery speed gains depend on the team and the amount of debt, but the first noticeable changes usually come quickly."
  },
  {
    question: "Is this consulting or hands-on execution?",
    answer:
      "Both. I can audit and advise, or set up pipelines and guardrails directly and help the team get the implementation working end-to-end."
  }
];

const writingLinks = [
  {
    label: "Habr",
    href: "https://habr.com/users/sg4tech/",
    iconPath: siHabr.path,
    description: "Long-form breakdowns of delivery systems, bottlenecks, metrics, and engineering operating models."
  },
  {
    label: "Telegram",
    href: "https://t.me/cto_lifehacks",
    iconPath: siTelegram.path,
    description: "Short practical notes on CTO work, process design, and faster engineering delivery."
  },
  {
    label: "Medium",
    href: "https://medium.com/@sg4tech",
    iconPath: siMedium.path,
    description: "English-language writing on engineering flow, AI leverage, and system-level change."
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-demin/",
    iconPath: LINKEDIN_SVG_PATH,
    description: "Role history, operating context, and additional public material."
  }
];

const talkLinks = [
  {
    label: "PHPConf talk",
    href: "https://phprussia.ru/2019/meetups#1457427",
    iconPath: siPhp.path,
    description: "Official event page for “How to use Yii2 in Enterprise? Borrowing Symfony best practices.”"
  },
  {
    label: "YouTube recording",
    href: "https://www.youtube.com/watch?v=lCMn52lMQks",
    iconPath: siYoutube.path,
    description: "Watch the full talk recording on YouTube."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://sg4.tech/yii2#service",
      name: "Yii2 Delivery Consulting",
      url: "https://sg4.tech/yii2",
      serviceType: "Yii2 delivery consulting",
      description:
        "Consulting for companies running Yii2 projects that need better speed, higher uptime, fewer bugs, and more predictable delivery through guardrails, CI/CD, monitoring, and AI."
    },
    personSchema
  ]
};

export const metadata: Metadata = {
  title: "Yii2 Consulting for Faster Delivery and Better Quality",
  description:
    "A dedicated landing page for Yii2 projects: I help teams remove delivery bottlenecks through guardrails, CI/CD, monitoring, delivery metrics, and AI.",
  alternates: {
    canonical: "/yii2"
  },
  openGraph: {
    title: "Yii2 Consulting for Faster Delivery and Better Quality",
    description:
      "I help companies running Yii2 projects improve quality, uptime, and delivery speed without chaos or endless firefighting.",
    type: "website",
    siteName: "sg4.tech",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yii2 Consulting for Faster Delivery and Better Quality",
    description:
      "I help companies running Yii2 projects improve quality, uptime, and delivery speed without chaos or endless firefighting."
  }
};

function FireFightingPanel() {
  return (
    <div className={styles.visualPanel} data-mode="warm">
      <p className={styles.panelTitle}>Fire fighting mode</p>
      <div className={styles.panelBody}>
        <svg
          className={styles.panelConnectors}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          focusable="false"
          aria-hidden="true"
        >
          <defs>
            <marker id="arrow-warm" viewBox="0 0 6 6" markerWidth="5" markerHeight="5" refX="4" refY="3" orient="auto">
              <path d="M0 0 L6 3 L0 6 Z" fill="var(--viz-warm-strong)" />
            </marker>
          </defs>
          <path d="M 38 24 Q 62 28 62 42" markerEnd="url(#arrow-warm)" />
          <path d="M 52 66 Q 42 76 36 80" markerEnd="url(#arrow-warm)" />
          <path d="M 20 78 Q 4 50 18 28" markerEnd="url(#arrow-warm)" />
        </svg>
        <div className={styles.node} data-pos="top-left">
          <span className={styles.nodeIcon}><Icon icon={Search} /></span>
          <span className={styles.nodeLabel}>manual checks</span>
        </div>
        <div className={styles.node} data-pos="mid-right">
          <span className={styles.nodeIcon}><Icon icon={Folder} /></span>
          <span className={styles.nodeLabel}>hidden queue</span>
        </div>
        <div className={styles.node} data-pos="bottom-left">
          <span className={styles.nodeIcon}><Icon icon={Flame} /></span>
          <span className={styles.nodeLabel}>hotfixes</span>
        </div>
      </div>
    </div>
  );
}

function DeliverySystemPanel() {
  return (
    <div className={styles.visualPanel} data-mode="cool">
      <p className={styles.panelTitle}>Delivery system mode</p>
      <div className={styles.panelBody}>
        <svg
          className={styles.panelConnectors}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          focusable="false"
          aria-hidden="true"
        >
          <defs>
            <marker id="arrow-cool" viewBox="0 0 6 6" markerWidth="5" markerHeight="5" refX="4" refY="3" orient="auto">
              <path d="M0 0 L6 3 L0 6 Z" fill="var(--viz-cool-strong)" />
            </marker>
          </defs>
          <path d="M 27 26 Q 38 38 48 48" markerEnd="url(#arrow-cool)" />
          <path d="M 73 26 Q 62 38 52 48" markerEnd="url(#arrow-cool)" />
          <path d="M 50 64 V 78" markerEnd="url(#arrow-cool)" />
        </svg>
        <div className={styles.node} data-pos="top-left">
          <span className={styles.nodeIcon}><Icon icon={ShieldCheck} /></span>
          <span className={styles.nodeLabel}>guardrails</span>
        </div>
        <div className={styles.node} data-pos="top-right">
          <span className={styles.nodeIcon}><Icon icon={InfinityIcon} /></span>
          <span className={styles.nodeLabel}>CI/CD</span>
        </div>
        <div className={styles.node} data-pos="mid-center">
          <span className={styles.nodeIcon}><Icon icon={Activity} /></span>
          <span className={styles.nodeLabel}>monitoring</span>
        </div>
        <div className={`${styles.node} ${styles.nodeOutcome}`} data-pos="bottom-center">
          <span className={styles.nodeIcon}><Icon icon={Rocket} /></span>
          <span className={styles.nodeLabel}>predictable releases</span>
        </div>
      </div>
    </div>
  );
}

function VisualStateFooter() {
  return (
    <div className={styles.visualFooter}>
      <div className={styles.visualStat} data-state="before">
        <span className={styles.visualStatHeader}>
          <Icon icon={AlertTriangle} className={styles.visualStatIcon} />
          <span className={styles.visualStatValue}>before</span>
        </span>
        <span className={styles.visualStatLabel}>risky releases and reactive work</span>
      </div>
      <div className={styles.visualStat} data-state="after">
        <span className={styles.visualStatHeader}>
          <Icon icon={ShieldCheck} className={styles.visualStatIcon} />
          <span className={styles.visualStatValue}>after</span>
        </span>
        <span className={styles.visualStatLabel}>guarded flow with visible bottlenecks</span>
      </div>
      <div className={styles.visualStat} data-state="goal">
        <span className={styles.visualStatHeader}>
          <Icon icon={Target} className={styles.visualStatIcon} />
          <span className={styles.visualStatValue}>goal</span>
        </span>
        <span className={styles.visualStatLabel}>faster shipping without chaos</span>
      </div>
    </div>
  );
}

function DeliveryTransformationVisual() {
  return (
    <div className={styles.visualFrame} aria-hidden="true">
      <div className={styles.visualPanels}>
        <FireFightingPanel />
        <DeliverySystemPanel />
      </div>
      <VisualStateFooter />
    </div>
  );
}

function TransformationSection() {
  return (
    <Section id="transformation">
      <SectionHeader
        title="From fragile release flow to an operating system for delivery"
        intro="Legacy code is survivable. Unreliable delivery is what actually slows the business down."
      />
      <DeliveryTransformationVisual />
    </Section>
  );
}

function ProcessVisual() {
  return (
    <div className={styles.processVisual} aria-hidden="true">
      <div className={styles.processVisualStep}>
        <span className={styles.processVisualIndex}>01</span>
        <p className={styles.processVisualTitle}>Audit</p>
        <p className={styles.processVisualText}>Find what is actually slowing delivery down.</p>
      </div>
      <div className={styles.processVisualArrow} />
      <div className={styles.processVisualStep}>
        <span className={styles.processVisualIndex}>02</span>
        <p className={styles.processVisualTitle}>Guardrails</p>
        <p className={styles.processVisualText}>Reduce risk before the next release goes out.</p>
      </div>
      <div className={styles.processVisualArrow} />
      <div className={styles.processVisualStep}>
        <span className={styles.processVisualIndex}>03</span>
        <p className={styles.processVisualTitle}>Acceleration</p>
        <p className={styles.processVisualText}>Shorten the path from request to production.</p>
      </div>
    </div>
  );
}

function HeroSignalsBar() {
  return (
    <div className={styles.heroSignals} aria-label="Selected credibility signals">
      {heroSignals.map((item) => (
        <span key={item.label} className={styles.heroSignal}>
          {item.logo && (
            <Image
              src={item.logo}
              alt={item.label}
              width={item.logoWidth}
              height={item.logoHeight}
              className={item.labelAfterLogo ? styles.heroSignalIcon : styles.heroSignalLogo}
              unoptimized
            />
          )}
          {(!item.logo || item.labelAfterLogo) && (
            <span className={styles.heroSignalLabel}>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

function HeroMetricList() {
  return (
    <ul className={styles.metricList} aria-label="Key outcomes">
      {credibilityMetrics.map((item) => (
        <li key={item.caption}>
          <span className={styles.metricHeader}>
            <Icon icon={item.icon} className={styles.metricIcon} />
            <span className={styles.metricNumber}>{item.number}</span>
          </span>
          <span className={styles.metricCaption}>{item.caption}</span>
        </li>
      ))}
    </ul>
  );
}

function HeroSection() {
  return (
    <section className={styles.hero}>
      <Link href="/" className={styles.backLink}>
        <span aria-hidden="true" className={styles.backLinkArrow}>←</span>
        Back to main consulting
      </Link>
      <div className={styles.heroPanel}>
        <div className={styles.heroLayout}>
          <div className={styles.heroMain}>
            <h1>Your Yii2 project is slowing your business.</h1>
            <p className={styles.heroAction}>I find what&apos;s actually broken — and fix it.</p>
            <p className={styles.heroStatement}>
              What&apos;s slowing you down is rarely the codebase — it&apos;s the delivery system around it.
            </p>
            <p className={styles.heroPromise}>
              I find it, fix it, and leave you with a system that runs without me.
            </p>
            <HeroSignalsBar />
            <div className={styles.actions}>
              <TrackedLink
                href={heroCtaHref}
                className={styles.primaryButton}
                target="_blank"
                rel="noreferrer"
                eventName="cta_click"
                payload={{ location: "yii2_hero" }}
              >
                DM me your situation
              </TrackedLink>
              <Link href="#quality" className={styles.secondaryButton}>
                How it works
              </Link>
            </div>
          </div>
          <div className={styles.heroAside}>
            <HeroMetricList />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <Section id="problem">
      <h2>When a Yii2 project has been around for years, the problem is almost never just the code.</h2>
      <ul className={styles.iconList} data-tone="warm">
        {painPoints.map((item) => (
          <li key={item.text}>
            <Icon icon={item.icon} className={styles.cardIcon} />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <p className={styles.callout}>If development has become the bottleneck, the code is not the only thing that is broken. The delivery system is breaking too.</p>
    </Section>
  );
}

function QualitySection() {
  return (
    <Section id="quality">
      <SectionHeader
        title="First we fix quality: uptime, bugs, and release predictability."
        intro="With guardrails, CI/CD, AI, and monitoring, we reduce release risk before customers or the business ever see the problem."
      />
      <div className={`${styles.cardGrid} ${styles.cardGridQuality}`}>
        {qualityLevers.map((item) => (
          <article key={item.text} className={styles.card}>
            <Icon icon={item.icon} className={styles.cardIcon} />
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function SpeedSection() {
  return (
    <Section id="speed">
      <SectionHeader
        title="Then we fix speed. Speed is not solved by code alone."
        intro="Speed is solved through people, process, metrics, and AI agents. Otherwise the Yii2 team stays trapped in urgent work and constant firefighting."
      />
      <div className={`${styles.cardGrid} ${styles.cardGridSpeed}`}>
        {speedLevers.map((item) => (
          <article key={item.text} className={styles.card}>
            <Icon icon={item.icon} className={styles.cardIcon} />
            <p>{item.text}</p>
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
        intro="Not an outside advisor in theory, but an operator-level engineering leader who has fixed delivery systems inside real companies, repeatedly and hands-on."
      />
      <div className={`${styles.whyGrid} ${styles.whySurface}`}>
        <div className={styles.profileCard}>
          <p className={styles.profileName}>Victor Demin</p>
          <p className={styles.profileRole}>Fractional CTO / engineering delivery consultant</p>
        </div>
        <div className={styles.profileBody}>
          <ul className={styles.iconList}>
            {whyMePoints.map((item) => (
              <li key={item.text}>
                <Icon icon={item.icon} className={styles.cardIcon} />
                <span>{item.text}</span>
              </li>
            ))}
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
        intro="No magic, and no pre-decided fixes. First we make the system observable and safe. Then we speed up the delivery flow."
      />
      <ProcessVisual />
      <div className={styles.processGrid}>
        {workSteps.map((step) => (
          <article key={step.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <Icon icon={step.icon} className={styles.cardIcon} />
              <h3>{step.title}</h3>
            </div>
            <ul className={styles.problemList}>
              {step.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className={styles.output}>Output: {step.output}</p>
          </article>
        ))}
      </div>
      <p className={styles.processNote}>The goal is not heroic effort. The goal is a delivery system that starts working for the business.</p>
      <div className={styles.expectationBox}>
        <h3>What to expect</h3>
        <ul className={styles.problemList}>
          <li>First visible improvements in CI/CD and monitoring within 2-4 weeks</li>
          <li>Clear delivery improvements typically within months, not quarters</li>
          <li>The pace depends on team size and the depth of accumulated debt</li>
        </ul>
      </div>
    </Section>
  );
}


function ProofSection() {
  return (
    <Section id="proof">
      <SectionHeader
        title="Proof and public material"
        intro="Use these to quickly evaluate the thinking, operating style, and the way I work with quality, speed, systems, and AI in engineering."
      />
      <div className={styles.proofGrid}>
        {[...talkLinks, ...writingLinks].map((link) => (
          <a key={link.label} href={link.href} className={styles.linkCard} target="_blank" rel="noreferrer">
            <span className={styles.linkHeader}>
              <BrandIcon label={link.label} path={link.iconPath} className={styles.brandIcon} />
              <span className={styles.linkLabel}>{link.label}</span>
            </span>
            <span className={styles.linkDescription}>{link.description}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}

function FinalCtaSection() {
  return (
    <section id="final-cta" className={styles.finalCta}>
      <h2>You don&apos;t need a six-month strategy debate. You need a diagnosis — and a fix.</h2>
      <p className={styles.finalText}>
        Share what&apos;s hurting most — and what you want instead. I&apos;ll reply with a short diagnosis and what I&apos;d fix first.
      </p>
      <div className={styles.actions}>
        <TrackedLink
          href={finalCtaHref}
          className={styles.primaryButton}
          target="_blank"
          rel="noreferrer"
          eventName="cta_click"
          payload={{ location: "yii2_final" }}
        >
          Tell me where it hurts
        </TrackedLink>
      </div>
    </section>
  );
}

export default function Yii2Page() {
  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TopNavigation items={navigationItems} ariaLabel="Yii2 landing page navigation" />
      <HeroSection />
      <TransformationSection />
      <ProblemSection />
      <QualitySection />
      <SpeedSection />
      <WhyMeSection />
      <ProcessSection />
      <FaqSection items={faqItems} />
      <ProofSection />
      <FinalCtaSection />
      <FooterSection links={footerLinks} copyright={BRAND_COPYRIGHT} />
    </Page>
  );
}
