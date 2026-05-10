import type { Metadata } from "next";
import Link from "next/link";
import { siHabr, siMedium, siPhp, siTelegram, siYoutube } from "simple-icons";
import TrackedLink from "../TrackedLink";
import styles from "./page.module.css";

const heroCtaHref = "https://t.me/sg4tech?start=site_yii2_hero";
const finalCtaHref = "https://t.me/sg4tech?start=site_yii2_final";

const navigationItems = [
  { href: "#problem", label: "Problem" },
  { href: "#quality", label: "Quality" },
  { href: "#speed", label: "Speed" },
  { href: "#why-me", label: "Why me" },
  { href: "#process", label: "How I work" },
  { href: "#faq", label: "FAQ" },
  { href: "#proof", label: "Proof" },
  { href: "#final-cta", label: "Contact" }
];

const painPoints = [
  "New functionality in Yii2 ships slower and slower.",
  "Every release increases the risk of bugs, regressions, and manual firefighting.",
  "Legacy code, manual checks, and chaotic process slow the business down more than it seems.",
  "The team stays busy, but product delivery speed still feels unacceptable."
];

const qualityLevers = [
  "guardrails in code and process so predictable mistakes never reach production",
  "CI/CD that checks critical scenarios before release instead of after an incident",
  "monitoring and alerts that surface degradation before customers notice it",
  "AI and focused automation for routine checks, regressions, and legacy support"
];

const speedLevers = [
  "I find where the real slowdown lives: queues, manual approvals, and hidden dependencies",
  "I set up delivery metrics so the bottleneck becomes visible instead of debated",
  "I align people, process, and priorities around one delivery flow",
  "I introduce AI agents where they remove manual work and shorten the cycle"
];

const whyMePoints = [
  "15+ years in the industry.",
  "I have fixed delivery systems many times where speed and quality were working against each other.",
  "I work both hands-on and system-level: architecture, process, metrics, and management.",
  "Experience in Wowworks (B2B facility management, EU, $3.6M raised) and Skyeng (K-12 EdTech platform, 2M+ MAU, $100M+ valuation)."
];

const credibilityMetrics = [
  "fewer bugs and production incidents",
  "higher uptime and more predictable releases",
  "faster delivery without chaotic hiring"
];

const heroSignals = ["Wowworks", "Skyeng", "PHPConf speaker"];

const workSteps = [
  {
    title: "1. Audit (1-2 weeks)",
    points: ["Review the codebase and deployment health", "Find the real bottlenecks", "Assess release risk, quality, and coverage"],
    output: "a clear diagnosis and a prioritized action list"
  },
  {
    title: "2. Quality foundation",
    points: ["Add CI/CD and guardrails", "Set up monitoring and alerts", "Reduce the probability of production incidents"],
    output: "stable, lower-risk releases"
  },
  {
    title: "3. Delivery acceleration",
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
    iconPath:
      "M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3Zm14.19 9.84c0-3.45-1.84-5.05-4.3-5.05-1.98 0-2.86 1.09-3.36 1.86V8.5H8.4c.04.76 0 11.5 0 11.5h3.38v-6.42c0-.343.025-.685.126-.93.276-.686.905-1.396 1.963-1.396 1.384 0 1.938 1.053 1.938 2.597V20h3.38l.001-7.16Z",
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
  {
    label: "GitHub",
    href: "https://github.com/sg4tech/",
    iconPath:
      "M12 1.5A10.5 10.5 0 0 0 8.676 22c.525.098.72-.227.72-.507 0-.249-.009-.909-.014-1.784-2.93.637-3.549-1.412-3.549-1.412-.48-1.218-1.17-1.543-1.17-1.543-.957-.654.072-.641.072-.641 1.058.074 1.615 1.087 1.615 1.087.94 1.61 2.466 1.145 3.067.876.095-.681.368-1.145.669-1.409-2.339-.266-4.798-1.169-4.798-5.202 0-1.149.411-2.089 1.085-2.826-.109-.266-.47-1.337.103-2.787 0 0 .885-.283 2.9 1.08A10.09 10.09 0 0 1 12 6.614a10.1 10.1 0 0 1 2.64.355c2.014-1.363 2.897-1.08 2.897-1.08.575 1.45.214 2.521.105 2.787.676.737 1.083 1.677 1.083 2.826 0 4.043-2.464 4.933-4.81 5.194.378.325.714.967.714 1.949 0 1.408-.012 2.544-.012 2.889 0 .282.192.61.726.506A10.5 10.5 0 0 0 12 1.5Z"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-demin/",
    iconPath:
      "M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3Zm14.19 9.84c0-3.45-1.84-5.05-4.3-5.05-1.98 0-2.86 1.09-3.36 1.86V8.5H8.4c.04.76 0 11.5 0 11.5h3.38v-6.42c0-.343.025-.685.126-.93.276-.686.905-1.396 1.963-1.396 1.384 0 1.938 1.053 1.938 2.597V20h3.38l.001-7.16Z"
  },
  {
    label: "Telegram",
    href: "https://t.me/cto_lifehacks",
    iconPath:
      "M20.665 4.717 3.93 11.172c-1.142.458-1.135 1.094-.208 1.378l4.294 1.34 1.654 5.177c.2.553.102.772.682.772.448 0 .646-.204.897-.446l2.083-2.023 4.334 3.2c.8.441 1.375.214 1.575-.743l2.85-13.425c.292-1.173-.448-1.704-1.426-1.26ZM8.694 13.58l9.965-6.289c.496-.301.95-.139.577.192l-8.53 7.699-.332 3.512-1.68-5.115Z"
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
  openGraph: {
    title: "Yii2 Consulting for Faster Delivery and Better Quality",
    description:
      "I help companies running Yii2 projects improve quality, uptime, and delivery speed without chaos or endless firefighting.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yii2 Consulting for Faster Delivery and Better Quality",
    description:
      "I help companies running Yii2 projects improve quality, uptime, and delivery speed without chaos or endless firefighting."
  }
};

function BrandIcon({ label, path }: { label: string; path: string }) {
  return (
    <span className={styles.brandIcon} aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <title>{label}</title>
        <path d={path} fill="currentColor" />
      </svg>
    </span>
  );
}

function DeliveryTransformationDiagram() {
  return (
    <svg viewBox="0 0 760 340" className={styles.visualSvg} focusable="false">
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
      <rect x="12" y="20" width="340" height="300" rx="28" fill="url(#panelWarm)" stroke="#d8d3cb" />
      <rect x="408" y="20" width="340" height="300" rx="28" fill="url(#panelCool)" stroke="#d8d3cb" />
      <text x="40" y="60" className={styles.visualTextMuted}>
        FIRE FIGHTING MODE
      </text>
      <text x="436" y="60" className={styles.visualTextMuted}>
        DELIVERY SYSTEM MODE
      </text>

      <rect x="40" y="92" width="126" height="58" rx="16" className={styles.visualNodeWarm} />
      <rect x="186" y="132" width="126" height="58" rx="16" className={styles.visualNodeWarm} />
      <rect x="72" y="210" width="126" height="58" rx="16" className={styles.visualNodeWarm} />
      <circle cx="308" cy="102" r="10" className={styles.visualAlertDot} />
      <circle cx="56" cy="190" r="8" className={styles.visualAlertDotSoft} />
      <path d="M166 121 C190 108, 182 150, 210 161" className={styles.visualLineWarm} />
      <path d="M250 190 C224 196, 206 232, 198 238" className={styles.visualLineWarm} />
      <path d="M132 209 C132 182, 94 170, 62 182" className={styles.visualLineWarm} />
      <text x="58" y="124" className={styles.visualTextStrong}>
        manual checks
      </text>
      <text x="204" y="164" className={styles.visualTextStrong}>
        hidden queue
      </text>
      <text x="90" y="242" className={styles.visualTextStrong}>
        hotfixes
      </text>

      <rect x="436" y="92" width="122" height="58" rx="16" className={styles.visualNodeCool} />
      <rect x="584" y="92" width="122" height="58" rx="16" className={styles.visualNodeCool} />
      <rect x="510" y="176" width="122" height="58" rx="16" className={styles.visualNodeCool} />
      <rect x="510" y="254" width="122" height="40" rx="14" className={styles.visualOutcomeNode} />
      <path d="M558 121 H584" className={styles.visualLineCool} />
      <path d="M646 150 C646 168, 604 170, 584 182" className={styles.visualLineCool} />
      <path d="M570 234 V254" className={styles.visualLineCool} />
      <circle cx="570" cy="121" r="8" className={styles.visualStatusDot} />
      <circle cx="646" cy="121" r="8" className={styles.visualStatusDot} />
      <circle cx="570" cy="205" r="8" className={styles.visualStatusDot} />
      <text x="464" y="124" className={styles.visualTextStrong}>
        guardrails
      </text>
      <text x="615" y="124" className={styles.visualTextStrong}>
        CI/CD
      </text>
      <text x="536" y="208" className={styles.visualTextStrong}>
        monitoring
      </text>
      <text x="526" y="280" className={styles.visualTextOutcome}>
        predictable release flow
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
        <div className={styles.visualStat}>
          <span className={styles.visualStatValue}>before</span>
          <span className={styles.visualStatLabel}>risky releases and reactive work</span>
        </div>
        <div className={styles.visualStat}>
          <span className={styles.visualStatValue}>after</span>
          <span className={styles.visualStatLabel}>guarded flow with visible bottlenecks</span>
        </div>
        <div className={styles.visualStat}>
          <span className={styles.visualStatValue}>goal</span>
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
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className={styles.hero}>
      <Link href="/" className={styles.backLink}>
        Back to main consulting page
      </Link>
      <p className={styles.eyebrow}>Yii2 delivery consulting</p>
      <div className={styles.heroPanel}>
        <div className={styles.heroLayout}>
          <div className={styles.heroMain}>
            <h1>Is your Yii2 project slowing the business down?</h1>
            <p className={styles.heroStatement}>For most companies, the real cost is not legacy itself. It is slow release flow, fragile quality, and lost business momentum.</p>
          </div>
          <div className={styles.heroAside}>
            <p className={styles.heroLead}>Usually the problem is not one bug or one developer. It is the delivery system around the project that makes every release slow, risky, and expensive.</p>
            <p className={styles.heroText}>
              I help turn Yii2 delivery into a system that works: fewer incidents, more predictable releases, and faster shipping without defaulting to a rewrite-first strategy.
            </p>
            <p className={styles.heroNote}>This is not a framework migration pitch. It is a delivery transformation offer for a live business system.</p>
            <div className={styles.heroInlineVisual}>
              <DeliveryTransformationVisual />
            </div>
            <div className={styles.heroSignals} aria-label="Selected credibility signals">
              {heroSignals.map((item) => (
                <span key={item} className={styles.heroSignal}>
                  {item}
                </span>
              ))}
            </div>
            <ul className={styles.metricList} aria-label="Key outcomes">
              {credibilityMetrics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.actions}>
              <TrackedLink
                href={heroCtaHref}
                className={styles.primaryButton}
                target="_blank"
                rel="noreferrer"
                eventName="cta_click"
                payload={{ location: "yii2_hero" }}
              >
                Discuss the project
              </TrackedLink>
              <Link href="#quality" className={styles.secondaryButton}>
                How it works
              </Link>
            </div>
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
      <ul className={styles.problemList}>
        {painPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className={styles.callout}>If development has become the bottleneck, the code is not the only thing that is broken. The delivery system is breaking too.</p>
    </section>
  );
}

function QualitySection() {
  return (
    <section id="quality" className={styles.section}>
      <h2>First we fix quality: uptime, bugs, and release predictability.</h2>
      <p className={styles.sectionIntro}>With guardrails, CI/CD, AI, and monitoring, we reduce release risk before customers or the business ever see the problem.</p>
      <div className={`${styles.cardGrid} ${styles.cardGridQuality}`}>
        {qualityLevers.map((item) => (
          <article key={item} className={styles.card}>
            <p>{item}</p>
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
          <article key={item} className={styles.card}>
            <p>{item}</p>
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
          <ul className={styles.problemList}>
            {whyMePoints.map((item) => (
              <li key={item}>{item}</li>
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
        No magic, and no rewrite for the sake of rewriting. First we make the system observable and safe. Then we speed up the delivery flow.
      </p>
      <ProcessVisual />
      <div className={styles.processGrid}>
        {workSteps.map((step) => (
          <article key={step.title} className={styles.card}>
            <h3>{step.title}</h3>
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
      <div className={styles.proofColumns}>
        <section className={`${styles.proofColumn} ${styles.proofColumnTalks}`} aria-labelledby="talks-title">
          <p id="talks-title" className={styles.proofTitle}>
            Talks
          </p>
          <div className={styles.linkGrid}>
            {talkLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.linkCard} target="_blank" rel="noreferrer">
                <span className={styles.linkHeader}>
                  <BrandIcon label={link.label} path={link.iconPath} />
                  <span className={styles.linkLabel}>{link.label}</span>
                </span>
                <span className={styles.linkDescription}>{link.description}</span>
              </a>
            ))}
          </div>
        </section>
        <section className={`${styles.proofColumn} ${styles.proofColumnWriting}`} aria-labelledby="writing-title">
          <p id="writing-title" className={styles.proofTitle}>
            Writing and profile
          </p>
          <div className={styles.linkGrid}>
            {writingLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.linkCard} target="_blank" rel="noreferrer">
                <span className={styles.linkHeader}>
                  <BrandIcon label={link.label} path={link.iconPath} />
                  <span className={styles.linkLabel}>{link.label}</span>
                </span>
                <span className={styles.linkDescription}>{link.description}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section id="final-cta" className={styles.finalCta}>
      <h2>If your Yii2 project is slowing the business down, you do not need to rewrite it. You need to turn it into a working system.</h2>
      <p className={styles.finalText}>
        Share the team context, release pain, and the main symptoms. I will help you identify the bottleneck and the fastest high-leverage next step.
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
          Get an action plan
        </TrackedLink>
        <Link href="#problem" className={styles.secondaryButton}>
          Review the symptoms
        </Link>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.footerLinks}>
        {footerLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.footerLink} target="_blank" rel="noreferrer">
            <span className={styles.footerIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d={link.iconPath} fill="currentColor" />
              </svg>
            </span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}

export default function Yii2Page() {
  return (
    <main className={styles.page}>
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
