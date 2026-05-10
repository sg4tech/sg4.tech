import type { Metadata } from "next";
import Link from "next/link";
import { siHabr, siMedium, siTelegram } from "simple-icons";
import TrackedLink from "../TrackedLink";
import styles from "../page.module.css";

const heroCtaHref = "https://t.me/sg4tech?start=site_yii2_hero";
const finalCtaHref = "https://t.me/sg4tech?start=site_yii2_final";
const secondaryCtaHref = "#how";

const navigationItems = [
  { href: "#problem", label: "Problem", mobileNav: "primary" },
  { href: "#solution", label: "Solution", mobileNav: "primary" },
  { href: "#why-me", label: "Why me", mobileNav: "secondary" },
  { href: "#how", label: "How I work", mobileNav: "primary" },
  { href: "#faq", label: "FAQ", mobileNav: "secondary" },
  { href: "#contact", label: "Contact", mobileNav: "primary" }
];

const problemGroups = [
  {
    title: "🐌 Delivery slows down over time",
    points: [
      "Every new feature takes longer than the last",
      "Deadlines slip despite the team working hard",
      "Core parts of the codebase feel untouchable",
      "Adding engineers doesn't make things faster"
    ],
    closing: "You're moving — but not fast enough."
  },
  {
    title: "🐞 Quality erodes with every release",
    points: [
      "Bugs reach production regularly",
      "Deploys are stressful — something breaks each time",
      "No automated tests → every change is a risk",
      "Monitoring is absent or ignored"
    ],
    closing: "You fix one bug. Two more appear."
  }
];

const qualitySteps = [
  {
    title: "1. Guardrails & CI/CD",
    description:
      "Automated checks and deployment pipelines that catch issues before they reach production. No more fear-driven deploys."
  },
  {
    title: "2. Monitoring",
    description:
      "Real visibility into uptime, errors, and performance — so you know when something breaks and exactly why."
  },
  {
    title: "3. AI-assisted review",
    description:
      "AI tools that surface potential issues early and reduce the manual review burden on the team."
  }
];

const speedSteps = [
  {
    title: "1. Team & process alignment",
    description:
      "Clear ownership, explicit flow, and delivery metrics that make bottlenecks visible instead of invisible."
  },
  {
    title: "2. Metrics that matter",
    description:
      "Cycle Time, Throughput, WIP — numbers that show where the system breaks, not vanity metrics."
  },
  {
    title: "3. AI agents",
    description:
      "Automated workflows that remove manual work from the engineering cycle and speed up repetitive tasks."
  }
];

const trustPoints = [
  "15+ years in engineering",
  "CTO at Waveworks and Skyeng",
  "Improved delivery on legacy PHP/Yii2 systems without full rewrites",
  "Write about engineering systems, bottlenecks, and AI workflows"
];

// Add talk/presentation links here when available:
// const talkLinks = [
//   { label: "Talk title", href: "https://..." }
// ];

const workSteps = [
  {
    title: "1. Audit (1–2 weeks)",
    points: ["Review codebase and deployment health", "Identify the real bottlenecks", "Assess test coverage and deploy risk"],
    output: "clear diagnosis and prioritized list of fixes"
  },
  {
    title: "2. Quality foundation",
    points: ["Add CI/CD and guardrails", "Set up monitoring and alerting", "Start reducing production bug rate"],
    output: "stable, lower-risk deploys"
  },
  {
    title: "3. Delivery acceleration",
    points: ["Fix team flow and process", "Introduce delivery metrics", "Apply AI where it creates real leverage"],
    output: "faster, more predictable releases"
  }
];

const faqItems = [
  {
    question: "Do you rewrite the whole project?",
    answer:
      "No. I work with your existing Yii2 codebase. Rewrites are expensive and risky — the goal is to make the system you have work reliably and fast."
  },
  {
    question: "Our codebase has no tests. Is that a problem?",
    answer:
      "No, that's exactly the starting point I'm used to. We add coverage incrementally, starting with the highest-risk areas, rather than halting everything to write tests first."
  },
  {
    question: "How long before we see results?",
    answer:
      "CI/CD and monitoring improvements typically appear within 2–4 weeks. Delivery speed improvements take a few months depending on team size and current state."
  },
  {
    question: "Our team is small. Will this work for us?",
    answer:
      "Yes — most of my work is with teams of 3–15 engineers. Smaller teams often see faster results because there's less organizational inertia."
  },
  {
    question: "Is this consulting or hands-on work?",
    answer:
      "Both, depending on what you need. I can audit and advise, set up pipelines directly, or work alongside your team on implementation."
  }
];

const insightLinks = [
  {
    label: "Habr",
    href: "https://habr.com/users/sg4tech/",
    iconPath: siHabr.path,
    description: "Long-form breakdowns of delivery systems, bottlenecks, and engineering management patterns."
  },
  {
    label: "Telegram",
    href: "https://t.me/cto_lifehacks",
    iconPath: siTelegram.path,
    description: "Short practical notes on CTO work, delivery friction, and system-level decisions."
  },
  {
    label: "Medium",
    href: "https://medium.com/@sg4tech",
    iconPath: siMedium.path,
    description: "English-language writing on product delivery, AI leverage, and predictable engineering flow."
  }
];

const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/sg4tech/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 1.5A10.5 10.5 0 0 0 8.676 22c.525.098.72-.227.72-.507 0-.249-.009-.909-.014-1.784-2.93.637-3.549-1.412-3.549-1.412-.48-1.218-1.17-1.543-1.17-1.543-.957-.654.072-.641.072-.641 1.058.074 1.615 1.087 1.615 1.087.94 1.61 2.466 1.145 3.067.876.095-.681.368-1.145.669-1.409-2.339-.266-4.798-1.169-4.798-5.202 0-1.149.411-2.089 1.085-2.826-.109-.266-.47-1.337.103-2.787 0 0 .885-.283 2.9 1.08A10.09 10.09 0 0 1 12 6.614a10.1 10.1 0 0 1 2.64.355c2.014-1.363 2.897-1.08 2.897-1.08.575 1.45.214 2.521.105 2.787.676.737 1.083 1.677 1.083 2.826 0 4.043-2.464 4.933-4.81 5.194.378.325.714.967.714 1.949 0 1.408-.012 2.544-.012 2.889 0 .282.192.61.726.506A10.5 10.5 0 0 0 12 1.5Z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-demin/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3Zm14.19 9.84c0-3.45-1.84-5.05-4.3-5.05-1.98 0-2.86 1.09-3.36 1.86V8.5H8.4c.04.76 0 11.5 0 11.5h3.38v-6.42c0-.343.025-.685.126-.93.276-.686.905-1.396 1.963-1.396 1.384 0 1.938 1.053 1.938 2.597V20h3.38l.001-7.16Z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    label: "Telegram",
    href: "https://t.me/cto_lifehacks",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M20.665 4.717 3.93 11.172c-1.142.458-1.135 1.094-.208 1.378l4.294 1.34 1.654 5.177c.2.553.102.772.682.772.448 0 .646-.204.897-.446l2.083-2.023 4.334 3.2c.8.441 1.375.214 1.575-.743l2.85-13.425c.292-1.173-.448-1.704-1.426-1.26ZM8.694 13.58l9.965-6.289c.496-.301.95-.139.577.192l-8.53 7.699-.332 3.512-1.68-5.115Z"
          fill="currentColor"
        />
      </svg>
    )
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sg4.tech/#person",
      name: "Victor Demin",
      url: "https://sg4.tech",
      jobTitle: "Fractional CTO",
      description:
        "Engineering consultant specializing in Yii2 delivery systems — faster releases, fewer bugs, more predictable output."
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://sg4.tech/yii2#service",
      name: "Yii2 Engineering Consulting — Victor Demin",
      url: "https://sg4.tech/yii2",
      serviceType: "Yii2 engineering consulting and delivery improvement",
      description:
        "I help teams with Yii2 projects ship faster and with fewer bugs using CI/CD, guardrails, monitoring, and AI tools.",
      areaServed: "Global",
      founder: { "@id": "https://sg4.tech/#person" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://sg4.tech/yii2#faq",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer }
      }))
    }
  ]
};

export const metadata: Metadata = {
  title: "Yii2 Engineering Consulting — Faster Delivery & Fewer Bugs",
  description:
    "Your Yii2 project is slow and buggy. I can fix that — with CI/CD, guardrails, monitoring, and AI tools. 15+ years of engineering, CTO at Waveworks and Skyeng.",
  openGraph: {
    title: "Yii2 Engineering Consulting — Faster Delivery & Fewer Bugs",
    description:
      "Your Yii2 project is slow and buggy. I can fix that — with CI/CD, guardrails, monitoring, and AI tools.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yii2 Engineering Consulting — Faster Delivery & Fewer Bugs",
    description:
      "Your Yii2 project is slow and buggy. I can fix that — with CI/CD, guardrails, monitoring, and AI tools."
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

function TopNavigation() {
  return (
    <nav className={styles.nav} aria-label="Section navigation">
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

function HeroSection() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Yii2 Engineering Consulting</p>
      <div className={styles.heroLayout}>
        <div className={styles.heroPrimary}>
          <h1>Your Yii2 project is slowing your business down. Let&apos;s fix it.</h1>
        </div>
        <div className={styles.heroSecondary}>
          <p className={styles.heroLead}>
            Most Yii2 projects aren&apos;t broken. They&apos;re stuck — no tests, no CI/CD, and technical debt that
            compounds with every release.
          </p>
          <p className={styles.heroText}>
            I use guardrails, CI/CD, monitoring, and AI tools to improve quality and uptime. Then I work with your team
            on process and metrics to make delivery fast and predictable again.
          </p>
          <p className={styles.heroCredibility}>15+ years in engineering. CTO at Waveworks and Skyeng.</p>
          <ul className={styles.heroMetrics} aria-label="Key outcomes">
            <li>Up to 10x fewer bugs and production incidents 🐞</li>
            <li>2–3x faster delivery ⚡</li>
            <li>Predictable releases without rewrites 📈</li>
          </ul>
          <div className={styles.heroActions}>
            <TrackedLink
              href={heroCtaHref}
              className={styles.primaryButton}
              target="_blank"
              rel="noreferrer"
              eventName="cta_click"
              payload={{ location: "yii2_hero" }}
            >
              Book a diagnostic call
            </TrackedLink>
            <Link href={secondaryCtaHref} className={styles.secondaryButton}>
              See how I work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem" className={styles.section}>
      <h2>The symptoms look different. The root cause is usually the same.</h2>
      <div className={styles.stageGrid}>
        {problemGroups.map((group) => (
          <article key={group.title} className={styles.card}>
            <h3>{group.title}</h3>
            <ul className={styles.bulletList}>
              {group.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className={styles.cardNote}>{group.closing}</p>
          </article>
        ))}
      </div>
      <div className={styles.callout}>
        <p>This is not a people problem.</p>
        <p>It&apos;s a system problem — and Yii2 projects accumulate it faster than most.</p>
        <p>The good news: it&apos;s fixable without rewriting everything from scratch.</p>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section id="solution" className={styles.section}>
      <h2>Two levers. Both matter.</h2>
      <div className={styles.subsection}>
        <h3>Quality — fewer bugs, better uptime</h3>
        <div className={styles.stack}>
          {qualitySteps.map((step) => (
            <article key={step.title} className={styles.step}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.subsection}>
        <h3>Speed — faster, predictable delivery</h3>
        <div className={styles.stack}>
          {speedSteps.map((step) => (
            <article key={step.title} className={styles.step}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section id="why-me" className={`${styles.section} ${styles.trustSection}`}>
      <h2 className={styles.trustHeading}>Why me</h2>
      <p className={`${styles.sectionIntro} ${styles.trustSection}`}>
        Victor Demin — engineering leader with operator-level experience fixing delivery systems in real companies.
      </p>
      <div className={styles.trustCard}>
        <p className={styles.trustName}>Victor Demin</p>
        <ul className={styles.bulletList}>
          {trustPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="how" className={styles.section}>
      <h2>How I work</h2>
      <div className={styles.processGrid}>
        {workSteps.map((step) => (
          <article key={step.title} className={styles.step}>
            <h3>{step.title}</h3>
            <ul className={styles.bulletList}>
              {step.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className={styles.output}>Output: {step.output}</p>
          </article>
        ))}
      </div>
      <p className={styles.processNote}>No magic. No rewrite. Just a system that works.</p>
      <div className={styles.expectationBox}>
        <h3>What to expect</h3>
        <ul className={styles.bulletList}>
          <li>First improvements in CI/CD and monitoring — within 2–4 weeks</li>
          <li>Visible delivery improvements — within months, not quarters</li>
          <li>The pace depends on your team size and how deep the debt goes</li>
        </ul>
      </div>
    </section>
  );
}

function InsightsSection() {
  return (
    <section className={styles.section}>
      <h2>Writing</h2>
      <p className={styles.sectionIntro}>
        I write about delivery systems, bottlenecks, metrics, and how AI changes engineering workflows.
      </p>
      <div className={styles.insightGrid} aria-label="Writing channels">
        {insightLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.insightCard} target="_blank" rel="noreferrer">
            <span className={styles.insightHeader}>
              <BrandIcon label={link.label} path={link.iconPath} />
              <span className={styles.insightLabel}>{link.label}</span>
            </span>
            <span className={styles.insightDescription}>{link.description}</span>
          </a>
        ))}
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

function FinalCtaSection() {
  return (
    <section id="contact" className={styles.finalCta}>
      <h2>Tell me about your Yii2 project — I&apos;ll tell you where it breaks.</h2>
      <p>
        Share the symptoms: slow deploys, production bugs, team bottlenecks. I&apos;ll help you find the real
        constraint and the fastest next step.
      </p>
      <div className={styles.finalActions}>
        <TrackedLink
          href={finalCtaHref}
          className={styles.primaryButton}
          target="_blank"
          rel="noreferrer"
          eventName="cta_click"
          payload={{ location: "yii2_final" }}
        >
          Get a delivery diagnosis
        </TrackedLink>
        <Link href={secondaryCtaHref} className={styles.secondaryButton}>
          See how I work
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
            <span className={styles.footerIcon}>{link.icon}</span>
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
      <SolutionSection />
      <TrustSection />
      <ProcessSection />
      <InsightsSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}
