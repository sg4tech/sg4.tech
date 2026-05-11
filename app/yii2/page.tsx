import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siHabr, siMedium, siPhp, siTelegram, siYoutube } from "simple-icons";
import TrackedLink from "../TrackedLink";
import { BrandIcon } from "../components/BrandIcon";
import { GITHUB_SVG_PATH, LINKEDIN_SVG_PATH, TELEGRAM_SVG_PATH } from "../lib/social-icons";
import styles from "./page.module.css";

const heroCtaHref = "https://t.me/sg4tech?start=site_yii2_hero";
const finalCtaHref = "https://t.me/sg4tech?start=site_yii2_final";

const navigationItems = [
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
    iconPath: "M12 8v4l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
  },
  {
    text: "Every release increases the risk of bugs, regressions, and manual firefighting.",
    iconPath: "M12 8v5M12 17h.01M2.5 17.5L11 4l8.5 13.5h-17z"
  },
  {
    text: "Legacy code, manual checks, and chaotic process slow the business down more than it seems.",
    iconPath: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0zM12 7v5l3 3M5 5l4 4M19 5l-4 4M5 19l4-4M19 19l-4-4"
  },
  {
    text: "The team stays busy, but product delivery speed still feels unacceptable.",
    iconPath: "M3 12h4l3-7 4 14 3-7h4"
  }
];

const qualityLevers = [
  {
    text: "guardrails in code and process so predictable mistakes never reach production",
    iconPath: "M12 3 4 6v6c0 5 3 8 8 9 5-1 8-4 8-9V6l-8-3zM9 12l2 2 4-4"
  },
  {
    text: "CI/CD that checks critical scenarios before release instead of after an incident",
    iconPath: "M5 5h4v4H5zM15 5h4v4h-4zM5 15h4v4H5zM15 15h4v4h-4zM9 7h6M17 9v6M9 17H7a4 4 0 0 1 0-8h2"
  },
  {
    text: "monitoring and alerts that surface degradation before customers notice it",
    iconPath: "M3 13h4l2-7 6 14 2-7h4"
  },
  {
    text: "AI and focused automation for routine checks, regressions, and legacy support",
    iconPath: "M9 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3zM18 11l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"
  }
];

const speedLevers = [
  {
    text: "I find where the real slowdown lives: queues, manual approvals, and hidden dependencies",
    iconPath: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5"
  },
  {
    text: "I set up delivery metrics so the bottleneck becomes visible instead of debated",
    iconPath: "M3 21V5M3 21h18M8 21V14M13 21V9M18 21V11"
  },
  {
    text: "I align people, process, and priorities around one delivery flow",
    iconPath: "M3 7h12l-3-3M15 7l-3 3M3 12h18l-3-3M21 12l-3 3M3 17h12l-3-3M15 17l-3 3"
  },
  {
    text: "I introduce AI agents where they remove manual work and shorten the cycle",
    iconPath: "M13 3 4 14h6l-1 7 9-12h-6z"
  }
];

const whyMePoints = [
  {
    text: "15+ years in the industry.",
    iconPath: "M8 2v4M16 2v4M3 9h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
  },
  {
    text: "I have fixed delivery systems many times where speed and quality were working against each other.",
    iconPath: "M14 3l-1 5h6l-9 13 1-7H5l9-11z"
  },
  {
    text: "I work both hands-on and system-level: architecture, process, metrics, and management.",
    iconPath: "M3 12l9-9 9 9-9 9-9-9zM12 3v18M3 12h18"
  },
  {
    text: "Experience in Wowworks (B2B facility management, EU, $3.6M raised) and Skyeng (K-12 EdTech platform, 2M+ MAU, $100M+ valuation).",
    iconPath: "M3 21h18M3 7h18v14H3zM7 7V3h10v4M9 11h2M13 11h2M9 15h2M13 15h2"
  }
];

const credibilityMetrics = [
  {
    number: "10×",
    caption: "fewer bugs and production incidents",
    iconPath: "M9 7c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2M5 8l2 2M19 8l-2 2M5 16l2-1M19 16l-2-1M5 12h2M17 12h2M9 11h6M12 11v9M9 13a3 3 0 0 0 6 0v-2H9v2z"
  },
  {
    number: "5×",
    caption: "less downtime, more predictable releases",
    iconPath: "M3 12h4l2-6 6 12 2-6h4"
  },
  {
    number: "2–3×",
    caption: "faster delivery without extra hiring",
    iconPath: "M13 3 4 14h6l-1 7 9-12h-6z"
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
    iconPath: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5",
    points: ["Review the codebase and deployment health", "Find the real bottlenecks", "Assess release risk, quality, and coverage"],
    output: "a clear diagnosis and a prioritized action list"
  },
  {
    title: "2. Quality foundation",
    iconPath: "M12 3 4 6v6c0 5 3 8 8 9 5-1 8-4 8-9V6l-8-3zM9 12l2 2 4-4",
    points: ["Add CI/CD and guardrails", "Set up monitoring and alerts", "Reduce the probability of production incidents"],
    output: "stable, lower-risk releases"
  },
  {
    title: "3. Delivery acceleration",
    iconPath: "M13 3 4 14h6l-1 7 9-12h-6z",
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

const footerLinks = [
  { label: "GitHub", href: "https://github.com/sg4tech/", iconPath: GITHUB_SVG_PATH },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/victor-demin/", iconPath: LINKEDIN_SVG_PATH },
  { label: "Telegram", href: "https://t.me/cto_lifehacks", iconPath: TELEGRAM_SVG_PATH }
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
    {
      "@type": "Person",
      "@id": "https://sg4.tech/#person",
      name: "Victor Demin",
      url: "https://sg4.tech",
      sameAs: [
        "https://habr.com/users/sg4tech/",
        "https://t.me/cto_lifehacks",
        "https://medium.com/@sg4tech",
        "https://www.linkedin.com/in/victor-demin/"
      ]
    }
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

function DeliveryTransformationDiagram() {
  return (
    <svg viewBox="0 0 640 260" className={styles.visualSvg} focusable="false">
      <defs>
        <linearGradient id="panelWarm" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#f6efe7" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="panelCool" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#eef4f0" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="300" height="244" rx="22" fill="url(#panelWarm)" stroke="#d8d3cb" />
      <rect x="332" y="8" width="300" height="244" rx="22" fill="url(#panelCool)" stroke="#d8d3cb" />
      <text x="24" y="34" className={styles.visualTextMuted}>
        FIRE FIGHTING MODE
      </text>
      <text x="348" y="34" className={styles.visualTextMuted}>
        DELIVERY SYSTEM MODE
      </text>

      <rect x="36" y="58" width="138" height="44" rx="14" className={styles.visualNodeWarm} />
      <rect x="148" y="118" width="138" height="44" rx="14" className={styles.visualNodeWarm} />
      <rect x="60" y="180" width="138" height="44" rx="14" className={styles.visualNodeWarm} />
      <circle cx="270" cy="138" r="8" className={styles.visualAlertDot} />
      <path d="M174 86 C 200 96, 195 110, 175 118" className={styles.visualLineWarm} />
      <path d="M180 162 C 178 172, 165 175, 158 180" className={styles.visualLineWarm} />
      <path d="M70 180 C 30 168, 32 110, 52 92" className={styles.visualLineWarm} />
      <text x="50" y="86" className={styles.visualTextStrong}>
        manual checks
      </text>
      <text x="166" y="146" className={styles.visualTextStrong}>
        hidden queue
      </text>
      <text x="98" y="208" className={styles.visualTextStrong}>
        hotfixes
      </text>

      <rect x="358" y="58" width="116" height="44" rx="14" className={styles.visualNodeCool} />
      <rect x="490" y="58" width="116" height="44" rx="14" className={styles.visualNodeCool} />
      <rect x="424" y="118" width="116" height="44" rx="14" className={styles.visualNodeCool} />
      <rect x="402" y="180" width="160" height="40" rx="14" className={styles.visualOutcomeNode} />
      <path d="M474 80 H490" className={styles.visualLineCool} />
      <path d="M416 102 C 416 110, 432 114, 450 118" className={styles.visualLineCool} />
      <path d="M548 102 C 548 110, 532 114, 514 118" className={styles.visualLineCool} />
      <path d="M482 162 V180" className={styles.visualLineCool} />
      <circle cx="482" cy="80" r="6" className={styles.visualStatusDot} />
      <circle cx="482" cy="140" r="6" className={styles.visualStatusDot} />
      <text x="378" y="86" className={styles.visualTextStrong}>
        guardrails
      </text>
      <text x="525" y="86" className={styles.visualTextStrong}>
        CI/CD
      </text>
      <text x="448" y="146" className={styles.visualTextStrong}>
        monitoring
      </text>
      <text x="420" y="206" className={styles.visualTextOutcome}>
        predictable releases
      </text>
    </svg>
  );
}

function DeliveryTransformationVisual() {
  return (
    <div className={styles.visualFrame} aria-hidden="true">
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>From fragile release flow to an operating system for delivery</p>
        <p className={styles.visualSummary}>Legacy code is survivable. Unreliable delivery is what actually slows the business down.</p>
      </div>
      <DeliveryTransformationDiagram />
      <div className={styles.visualFooter}>
        <div className={styles.visualStat} data-state="before">
          <span className={styles.visualStatHeader}>
            <svg className={styles.visualStatIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M12 8v5M12 17h.01M2.5 17.5L11 4l8.5 13.5h-17z" />
            </svg>
            <span className={styles.visualStatValue}>before</span>
          </span>
          <span className={styles.visualStatLabel}>risky releases and reactive work</span>
        </div>
        <div className={styles.visualStat} data-state="after">
          <span className={styles.visualStatHeader}>
            <svg className={styles.visualStatIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M12 3l8 4v6c0 5-3 8-8 9-5-1-8-4-8-9V7l8-4zM9 12l2 2 4-4" />
            </svg>
            <span className={styles.visualStatValue}>after</span>
          </span>
          <span className={styles.visualStatLabel}>guarded flow with visible bottlenecks</span>
        </div>
        <div className={styles.visualStat} data-state="goal">
          <span className={styles.visualStatHeader}>
            <svg className={styles.visualStatIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 12h.01" />
            </svg>
            <span className={styles.visualStatValue}>goal</span>
          </span>
          <span className={styles.visualStatLabel}>faster shipping without chaos</span>
        </div>
      </div>
    </div>
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

function TopNavigation() {
  return (
    <nav className={styles.nav} aria-label="Yii2 landing page navigation">
      <div className={styles.navInner}>
        <Link href="/" className={styles.brand}>
          Victor Demin
        </Link>
        <div className={styles.navLinks}>
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} data-mobile-nav={item.mobileNav}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
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
            <svg
              className={styles.metricIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d={item.iconPath} />
            </svg>
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
      <p className={styles.eyebrow}>Yii2 delivery consulting</p>
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
            <div className={styles.heroInlineVisual}>
              <DeliveryTransformationVisual />
            </div>
            <HeroMetricList />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem" className={styles.section}>
      <h2>When a Yii2 project has been around for years, the problem is almost never just the code.</h2>
      <ul className={styles.iconList} data-tone="warm">
        {painPoints.map((item) => (
          <li key={item.text}>
            <CardIcon path={item.iconPath} />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <p className={styles.callout}>If development has become the bottleneck, the code is not the only thing that is broken. The delivery system is breaking too.</p>
    </section>
  );
}

function CardIcon({ path }: { path: string }) {
  return (
    <svg
      className={styles.cardIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} />
    </svg>
  );
}

function QualitySection() {
  return (
    <section id="quality" className={styles.section}>
      <h2>First we fix quality: uptime, bugs, and release predictability.</h2>
      <p className={styles.sectionIntro}>With guardrails, CI/CD, AI, and monitoring, we reduce release risk before customers or the business ever see the problem.</p>
      <div className={`${styles.cardGrid} ${styles.cardGridQuality}`}>
        {qualityLevers.map((item) => (
          <article key={item.text} className={styles.card}>
            <CardIcon path={item.iconPath} />
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SpeedSection() {
  return (
    <section id="speed" className={styles.section}>
      <h2>Then we fix speed. Speed is not solved by code alone.</h2>
      <p className={styles.sectionIntro}>
        Speed is solved through people, process, metrics, and AI agents. Otherwise the Yii2 team stays trapped in urgent work and constant firefighting.
      </p>
      <div className={`${styles.cardGrid} ${styles.cardGridSpeed}`}>
        {speedLevers.map((item) => (
          <article key={item.text} className={styles.card}>
            <CardIcon path={item.iconPath} />
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyMeSection() {
  return (
    <section id="why-me" className={styles.section}>
      <h2>Why me</h2>
      <p className={styles.sectionIntro}>
        Not an outside advisor in theory, but an operator-level engineering leader who has fixed delivery systems inside real companies, repeatedly and hands-on.
      </p>
      <div className={`${styles.whyGrid} ${styles.whySurface}`}>
        <div className={styles.profileCard}>
          <p className={styles.profileName}>Victor Demin</p>
          <p className={styles.profileRole}>Fractional CTO / engineering delivery consultant</p>
        </div>
        <div className={styles.profileBody}>
          <ul className={styles.iconList}>
            {whyMePoints.map((item) => (
              <li key={item.text}>
                <CardIcon path={item.iconPath} />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className={styles.section}>
      <h2>How I work</h2>
      <p className={styles.sectionIntro}>
        No magic, and no pre-decided fixes. First we make the system observable and safe. Then we speed up the delivery flow.
      </p>
      <ProcessVisual />
      <div className={styles.processGrid}>
        {workSteps.map((step) => (
          <article key={step.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <CardIcon path={step.iconPath} />
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
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <h2 id="faq-title">FAQ</h2>
      <div className={styles.faqList}>
        {faqItems.map((item) => (
          <article key={item.question} className={styles.faqItem}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section id="proof" className={styles.section}>
      <h2>Proof and public material</h2>
      <p className={styles.sectionIntro}>
        Use these to quickly evaluate the thinking, operating style, and the way I work with quality, speed, systems, and AI in engineering.
      </p>
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
    </section>
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

function FooterSection() {
  return (
    <footer className={styles.footer} aria-label="Footer">
      <p className={styles.footerCopy}>© 2026 Victor Demin</p>
      <div className={styles.footerLinks}>
        {footerLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.footerLink} target="_blank" rel="noreferrer">
            <BrandIcon label={link.label} path={link.iconPath} className={styles.footerIcon} />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}

export default function Yii2Page() {
  return (
    <main id="main" className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TopNavigation />
      <HeroSection />
      <ProblemSection />
      <QualitySection />
      <SpeedSection />
      <WhyMeSection />
      <ProcessSection />
      <FaqSection />
      <ProofSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}
