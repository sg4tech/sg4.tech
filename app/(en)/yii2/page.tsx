import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Building2,
  Bug,
  Calendar,
  Clock,
  Cog,
  Compass,
  Flame,
  GitBranch,
  Inbox,
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
import { siHabr, siMedium, siPhp, siTelegram, siYoutube } from "simple-icons";
import { BrandIcon } from "../../components/BrandIcon";
import { ChannelLinks } from "../../components/ChannelLinks";
import { FaqSection } from "../../components/FaqSection";
import { SiteFooter } from "../../components/SiteFooter";
import { HeroSignals } from "../../components/HeroSignals";
import { Icon } from "../../components/Icon";
import { MarkList } from "../../components/MarkList";
import { Page } from "../../components/Page";
import { Section } from "../../components/Section";
import { ResultsCaption } from "../../components/ResultsCaption";
import { SectionHeader } from "../../components/SectionHeader";
import { Stat } from "../../components/Stat";
import { StatementCta } from "../../components/StatementCta";
import { Steps } from "../../components/Steps";
import { SiteNav } from "../../components/SiteNav";
import { Button } from "../../components/Button";
import { WhyMeSection, type WhyMePoint } from "../../components/WhyMeSection";
import { BRAND_NAME, LINKEDIN_URL, personSchema, SITE_URL } from "../../lib/brand";
import { LINKEDIN_SVG_PATH } from "../../lib/social-icons";
import landing from "../../styles/landing.module.css";
import styles from "./page.module.css";

const heroCtaHref = "https://t.me/sg4tech?start=site_yii2_hero";
const finalCtaHref = "https://t.me/sg4tech?start=site_yii2_final";


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

const whyMePoints: WhyMePoint[] = [
  {
    id: "experience",
    icon: Calendar,
    content: <span>15+ years in the industry.</span>
  },
  {
    id: "fixes",
    icon: Wrench,
    content: (
      <span>
        I have fixed delivery systems many times where speed and quality were working against each other.
      </span>
    )
  },
  {
    id: "hands-on",
    icon: Compass,
    content: (
      <span>I work both hands-on and system-level: architecture, process, metrics, and management.</span>
    )
  },
  {
    id: "track-record",
    icon: Building2,
    content: (
      <span>
        Experience in Wowworks (B2B facility management, EU, $3.6M raised) and Skyeng (K-12 EdTech platform, 2M+ MAU, $100M+ valuation).
      </span>
    )
  }
];

const credibilityMetrics = [
  { number: "10×", caption: "fewer bugs and production incidents", icon: Bug },
  { number: "5×", caption: "less downtime, more predictable releases", icon: Activity },
  { number: "2–3×", caption: "faster delivery without extra hiring", icon: Zap }
];

const heroSignals = [
  { label: "Wowworks", logo: "/logos/wowworks.svg", logoWidth: 104, logoHeight: 30 },
  { label: "Skyeng", logo: "/logos/skyeng.svg", logoWidth: 185, logoHeight: 56 },
  { label: "PHP Russia speaker", logo: "/logos/php-russia.svg", logoWidth: 24, logoHeight: 24, labelAfterLogo: true }
];

const workSteps = [
  {
    title: "Review (1-2 weeks)",
    summary: "Find what is actually slowing delivery down.",
    points: ["Review the codebase and deployment health", "Find the real bottlenecks", "Assess release risk, quality, and coverage"],
    output: "a clear plan and a prioritized action list"
  },
  {
    title: "Quality foundation",
    summary: "Reduce risk before the next release goes out.",
    points: ["Add CI/CD and guardrails", "Set up monitoring and alerts", "Reduce the probability of production incidents"],
    output: "stable, lower-risk releases"
  },
  {
    title: "Delivery acceleration",
    summary: "Shorten the path from request to production.",
    points: ["Fix the team flow", "Introduce delivery metrics", "Apply AI where it creates real leverage"],
    output: "faster, more predictable delivery"
  }
];

const expectationPoints = [
  "First visible improvements in CI/CD and monitoring within 2-4 weeks",
  "Clear delivery improvements typically within months, not quarters",
  "The pace depends on team size and the depth of accumulated debt"
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
    question: "Do you do the work yourself?",
    answer:
      "Yes. I fix the code, set up pipelines and guardrails, and work with your team until the changes run end-to-end."
  }
];

const writingLinks = [
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
      "@id": `${SITE_URL}/yii2/#service`,
      name: "Yii2 Development",
      url: `${SITE_URL}/yii2/`,
      serviceType: "Yii2 development",
      description:
        "Development for companies running Yii2 projects that need better speed, higher uptime, fewer bugs, and more predictable delivery through guardrails, CI/CD, monitoring, and AI.",
      founder: { "@id": `${SITE_URL}/#person` }
    },
    personSchema,
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/yii2/#faq`,
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
  title: "Yii2 Development for Faster Delivery and Better Quality",
  description:
    "A dedicated landing page for Yii2 projects: I help teams remove delivery bottlenecks through guardrails, CI/CD, monitoring, delivery metrics, and AI.",
  alternates: {
    canonical: "/yii2/"
  },
  openGraph: {
    title: "Yii2 Development for Faster Delivery and Better Quality",
    description:
      "I help companies running Yii2 projects improve quality, uptime, and delivery speed without chaos or endless firefighting.",
    type: "website",
    siteName: BRAND_NAME,
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yii2 Development for Faster Delivery and Better Quality",
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
          viewBox="0 0 100 80"
          focusable="false"
          aria-hidden="true"
        >
          <defs>
            <marker id="arrow-warm" viewBox="0 0 6 6" markerWidth="5.5" markerHeight="5.5" refX="4" refY="3" orient="auto">
              <path d="M0 0 L6 3 L0 6 Z" fill="var(--viz-warm-strong)" />
            </marker>
          </defs>
          <path d="M 30 9 Q 55 4 67 31" markerEnd="url(#arrow-warm)" />
          <path d="M 70 42 Q 50 58 32 70" markerEnd="url(#arrow-warm)" />
          <path d="M 10 72 Q 2 42 16 13.5" markerEnd="url(#arrow-warm)" />
        </svg>
        <div className={styles.node} data-pos="top-left">
          <span className={styles.nodeIcon}><Icon icon={Search} /></span>
          <span>manual checks</span>
        </div>
        <div className={styles.node} data-pos="mid-right">
          <span className={styles.nodeIcon}><Icon icon={Inbox} /></span>
          <span>hidden queue</span>
        </div>
        <div className={styles.node} data-pos="bottom-left">
          <span className={styles.nodeIcon}><Icon icon={Flame} /></span>
          <span>hotfixes</span>
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
          viewBox="0 0 100 80"
          focusable="false"
          aria-hidden="true"
        >
          <defs>
            <marker id="arrow-cool" viewBox="0 0 6 6" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
              <path d="M0 0 L6 3 L0 6 Z" fill="var(--viz-cool-strong)" />
            </marker>
          </defs>
          <path d="M 22 11 Q 32 19.5 42 29" markerEnd="url(#arrow-cool)" />
          <path d="M 82 11 Q 68 19.5 58 29" markerEnd="url(#arrow-cool)" />
          <path d="M 50 40 Q 50.5 51 50 62" markerEnd="url(#arrow-cool)" />
        </svg>
        <div className={styles.node} data-pos="top-left">
          <span className={styles.nodeIcon}><Icon icon={ShieldCheck} /></span>
          <span>guardrails</span>
        </div>
        <div className={styles.node} data-pos="top-right">
          <span className={styles.nodeIcon}><Icon icon={InfinityIcon} /></span>
          <span>CI/CD</span>
        </div>
        <div className={styles.node} data-pos="mid-center">
          <span className={styles.nodeIcon}><Icon icon={Activity} /></span>
          <span>monitoring</span>
        </div>
        <div className={`${styles.node} ${styles.nodeOutcome}`} data-pos="bottom-center">
          <span className={styles.nodeIcon}><Icon icon={Rocket} /></span>
          <span>predictable releases</span>
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
          <span className={styles.visualStatValue}>Before</span>
        </span>
        <span className={styles.visualStatLabel}>risky releases and reactive work</span>
      </div>
      <div className={styles.visualStat} data-state="after">
        <span className={styles.visualStatHeader}>
          <Icon icon={ShieldCheck} className={styles.visualStatIcon} />
          <span className={styles.visualStatValue}>After</span>
        </span>
        <span className={styles.visualStatLabel}>guarded flow with visible bottlenecks</span>
      </div>
      <div className={styles.visualStat} data-state="goal">
        <span className={styles.visualStatHeader}>
          <Icon icon={Target} className={styles.visualStatIcon} />
          <span className={styles.visualStatValue}>Goal</span>
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

function HeroMetricList() {
  return (
    <>
      <ul className={landing.metricList} aria-label="Key outcomes">
        {credibilityMetrics.map((item) => (
          <li key={item.caption}>
            <Stat figure={item.number} icon={item.icon} label={item.caption} />
          </li>
        ))}
      </ul>
      <ResultsCaption locale="en" />
    </>
  );
}

function HeroSection() {
  return (
    <section className={landing.hero}>
      <div className={landing.heroPanel}>
        <div className={landing.heroLayout}>
          <div className={landing.heroMain}>
            <h1>
              <span className={landing.heroLeadIn}>Your Yii2 project is </span>
              slowing your business.
            </h1>
            <p className={landing.heroAction}>I find what&apos;s actually broken — and fix it.</p>
            <p className={landing.heroStatement}>
              What&apos;s slowing you down is rarely the codebase — it&apos;s the delivery system around it.
            </p>
            <p className={landing.heroPromise}>
              I find it, fix it, and leave you with a system that runs without me.
            </p>
            <div className={landing.actions}>
              <Button
                href={heroCtaHref}
                target="_blank"
                rel="noreferrer"
                eventName="cta_click"
                payload={{ location: "yii2_hero" }}
              >
                DM me your situation
              </Button>
              <Button variant="secondary" href="#quality">
                How it works
              </Button>
            </div>
          </div>
          <div className={landing.heroAside}>
            <HeroSignals locale="en" signals={heroSignals} />
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
      <SectionHeader title="When a Yii2 project has been around for years, the problem is almost never just the code." />
      <ul className={landing.iconList} data-tone="warm">
        {painPoints.map((item) => (
          <li key={item.text}>
            <Icon icon={item.icon} className={landing.cardIcon} />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <p className={landing.callout}>If development has become the bottleneck, the code is not the only thing that is broken. The delivery system is breaking too.</p>
    </Section>
  );
}

// Quality and Speed are two stages of one plan, so they sit side by side as
// two columns of one section. Both anchors (#quality, #speed) are kept.
function LeversSection() {
  return (
    <Section id="quality">
      <div className={landing.stageColumns}>
        <div className={landing.stageColumn}>
          <SectionHeader
            title="First we fix quality: uptime, bugs, and release predictability."
            intro="With guardrails, CI/CD, AI, and monitoring, we reduce release risk before customers or the business ever see the problem."
            headingClassName={landing.stageHeading}
          />
          <ul className={landing.iconList} data-tone="cool">
            {qualityLevers.map((item) => (
              <li key={item.text}>
                <Icon icon={item.icon} className={landing.cardIcon} />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div id="speed" className={`${landing.stageColumn} ${landing.stageAnchor}`}>
          <SectionHeader
            title="Then we fix speed. Speed is not solved by code alone."
            intro="Speed is solved through people, process, metrics, and AI agents. Otherwise the Yii2 team stays trapped in urgent work and constant firefighting."
            headingClassName={landing.stageHeading}
          />
          <ul className={landing.iconList} data-tone="warm">
            {speedLevers.map((item) => (
              <li key={item.text}>
                <Icon icon={item.icon} className={landing.cardIcon} />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function TrustSection() {
  return (
    <WhyMeSection locale="en"
      intro="Not an outside advisor in theory, but an operator-level engineering leader who has fixed delivery systems inside real companies, repeatedly and hands-on."
      points={whyMePoints}
    />
  );
}

function ProcessSection() {
  return (
    <Section id="process">
      <SectionHeader
        title="How I work"
        intro="No magic, and no pre-decided fixes. First we make the system observable and safe. Then we speed up the delivery flow."
      />
      <Steps
        variant="card"
        items={workSteps.map((step) => ({
          title: step.title,
          body: (
            <>
              <p className={landing.stepSummary}>{step.summary}</p>
              <MarkList items={step.points} />
              <p className={landing.output}>Output: {step.output}</p>
            </>
          )
        }))}
      />
      <p className={landing.processNote}>The goal is not heroic effort. The goal is a delivery system that starts working for the business.</p>
      <div className={landing.expectationBox}>
        <h3>What to expect</h3>
        <MarkList items={expectationPoints} kind="check" />
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
      <div className={landing.proofGrid}>
        {talkLinks.map((link) => (
          <a key={link.label} href={link.href} className={landing.linkCard} target="_blank" rel="noreferrer">
            <span className={landing.linkHeader}>
              <BrandIcon label={link.label} path={link.iconPath} className={landing.brandIcon} />
              <span className={landing.linkLabel}>{link.label}</span>
            </span>
            <span className={landing.linkDescription}>{link.description}</span>
            <Icon icon={ArrowRight} className={landing.linkArrow} />
          </a>
        ))}
      </div>
      <ChannelLinks items={writingLinks} ariaLabel="Writing channels" />
    </Section>
  );
}

function FinalCtaSection() {
  return (
    <StatementCta
      id="final-cta"
      heading={
        <>
          You don&apos;t need a six-month strategy debate. You need{" "}
          <em>a diagnosis — and a fix.</em>
        </>
      }
      text="Share what's hurting most — and what you want instead. I'll reply with a short diagnosis and what I'd fix first."
      primary={{
        href: finalCtaHref,
        label: "Tell me where it hurts",
        target: "_blank",
        rel: "noreferrer",
        eventName: "cta_click",
        payload: { location: "yii2_final" }
      }}
    />
  );
}

export default function Yii2Page() {
  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteNav locale="en" current="/yii2/" />
      <HeroSection />
      <TransformationSection />
      <ProblemSection />
      <LeversSection />
      <TrustSection />
      <ProcessSection />
      <ProofSection />
      <FaqSection locale="en" items={faqItems} />
      <FinalCtaSection />
      <SiteFooter locale="en" />
    </Page>
  );
}
