import type { Metadata } from "next";
import Link from "next/link";
import { siHabr, siMedium, siTelegram } from "simple-icons";
import TrackedLink from "./TrackedLink";
import styles from "./page.module.css";

const secondaryCtaHref = "#process";
const heroCtaHref = "https://t.me/sg4tech?start=site_hero";
const finalCtaHref = "https://t.me/sg4tech?start=site_final";

const navigationItems = [
  { href: "#problem", label: "Problem", mobileNav: "primary" },
  { href: "#solution", label: "Solution", mobileNav: "secondary" },
  { href: "#results", label: "Results", mobileNav: "primary" },
  { href: "#process", label: "How I work", mobileNav: "primary" },
  { href: "#fit", label: "Who I work with", mobileNav: "secondary" },
  { href: "#insights", label: "Insights", mobileNav: "secondary" },
  { href: "#final-cta", label: "Contact", mobileNav: "primary" }
];

const stageProblems = [
  {
    title: "🚀 Early-stage",
    points: [
      "MVP takes longer than expected",
      "Everything depends on a few key people",
      "Constant rework and changing direction",
      "Hard to go from idea to working product"
    ],
    closing: "You're moving — but not fast enough."
  },
  {
    title: "📈 Growth-stage",
    points: [
      "Features take too long to ship",
      "Deadlines slip — even with planning",
      "Teams are busy, but output feels low",
      "Bugs increase with every release",
      "Delivery becomes unpredictable"
    ],
    closing: "You have a team. You have processes. But it still doesn't work."
  },
  {
    title: "🏗️ Scale",
    points: [
      "Too many processes, but no real visibility",
      "Coordination overhead slows everything down",
      "Decisions are based on intuition, not data",
      "Improvements don't stick"
    ],
    closing: "You try to fix it — but complexity keeps growing."
  }
];

const solutionSteps = [
  {
    title: "1. Identify the real constraint",
    description: "Using Theory of Constraints and delivery metrics, I find where your system actually breaks."
  },
  {
    title: "2. Rebuild the flow",
    description: "Time to Market (T2M), Cycle Time, and Work in Progress (WIP) turn chaos into a manageable system."
  },
  {
    title: "3. Accelerate with AI",
    description: "Reduce manual work, speed up development, and improve consistency where AI creates real leverage."
  }
];

const credibilityPoints = [
  "Engineering background — built MVPs and systems hands-on",
  "Management experience — scaled teams and aligned engineering with business",
  "System thinking — metrics, constraints, predictability",
  "AI-first approach — applying modern tools where they actually create leverage"
];

const trustPoints = [
  "15+ years in engineering",
  "8+ years in leadership",
  "Built MVPs hands-on",
  "Scaled teams and improved delivery systems",
  "Write about engineering metrics, bottlenecks, and AI workflows"
];

const caseStudies = [
  {
    title: "Case 1 — Scaling delivery",
    company: "B2B product company (international markets, 3 cross-functional teams)",
    problem: ["Slow and unpredictable delivery", "High bug rate"],
    work: ["Introduced delivery metrics", "Rebuilt development flow", "Aligned engineering with product"],
    result: ["2–3x faster delivery", "10x fewer bugs", "Predictable releases"]
  },
  {
    title: "Case 2 — From chaos to system",
    company: "EdTech company (growth stage)",
    problem: ["Chaotic development", "Long time-to-market", "Low NPS"],
    work: ["Split Discovery / Delivery", "Introduced structured process", "Added feedback loops"],
    result: ["2x faster time-to-market", "2x throughput", "NPS improved significantly"]
  },
  {
    title: "Case 3 — Cost & efficiency",
    company: "Product company (scaling phase)",
    problem: ["High engineering cost", "Low effective throughput"],
    work: ["Identified bottlenecks (ToC)", "Reduced unnecessary work", "Improved prioritization"],
    result: ["~1.5x cost reduction", "Higher effective throughput", "More stable system"]
  }
];

const workSteps = [
  {
    title: "1. Quick audit (1–2 weeks)",
    points: ["Analyze your system", "Identify bottlenecks", "Review metrics and flow"],
    output: "clear diagnosis"
  },
  {
    title: "2. System redesign",
    points: ["Define metrics (T2M, Cycle Time, WIP)", "Rebuild delivery flow", "Align engineering with business"],
    output: "structured system"
  },
  {
    title: "3. Implementation",
    points: ["Introduce changes step by step", "Support teams", "Ensure adoption"],
    output: "working system"
  },
  {
    title: "4. AI acceleration",
    points: ["Reduce manual work", "Increase speed", "Improve consistency"],
    output: "faster delivery"
  }
];

const expectationPoints = [
  "First insights — within 1–2 weeks",
  "Visible improvements — within weeks, not months",
  "Full system shift — depends on complexity, but starts early"
];

const fitGroups = [
  {
    title: "🎯 Best fit",
    points: [
      "Product companies (B2B / SaaS / platforms) with 5–50 engineers",
      "Already shipping, but struggling with delivery speed, predictability, or engineering efficiency",
      "Growth or scaling stage"
    ]
  },
  {
    title: "⚠️ Typical triggers",
    points: [
      "Delivery is too slow",
      "Deadlines are unpredictable",
      "Bugs increase",
      "Engineering feels expensive",
      "Scaling doesn't help"
    ]
  },
  {
    title: "🚫 Not a good fit",
    points: [
      "No product / no team",
      "Looking for staff augmentation or pure hands-on coding",
      "Expect instant fixes without org or process changes"
    ]
  }
];

const insightTopics = [
  "Metrics that actually matter (T2M, Throughput, Bugs)",
  "Why delivery slows down as teams grow",
  "The real bottleneck: why “Ready” is an illusion",
  "From chaos to predictable flow",
  "AI in engineering: leverage or noise?"
];

const specializationLinks = [
  {
    href: "/yii2",
    title: "Running a Yii2 project?",
    description: "There is a dedicated landing page for Yii2 delivery consulting: quality, release predictability, speed, and modernization without defaulting to a rewrite."
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
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-demin/",
    iconPath:
      "M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3Zm14.19 9.84c0-3.45-1.84-5.05-4.3-5.05-1.98 0-2.86 1.09-3.36 1.86V8.5H8.4c.04.76 0 11.5 0 11.5h3.38v-6.42c0-.343.025-.685.126-.93.276-.686.905-1.396 1.963-1.396 1.384 0 1.938 1.053 1.938 2.597V20h3.38l.001-7.16Z",
    description: "Operator perspective, case-based observations, and updates on engineering leadership."
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

const faqItems = [
  {
    question: "What does a fractional CTO help with?",
    answer:
      "I help product companies fix slow, unpredictable delivery systems. That includes bottlenecks, delivery metrics, engineering efficiency, flow, and applying AI where it creates real leverage."
  },
  {
    question: "When are you the right fit?",
    answer:
      "Best fit is product companies with 5–50 engineers that are already shipping but struggling with delivery speed, predictability, or engineering efficiency."
  },
  {
    question: "When are you not the right fit?",
    answer:
      "Not a fit if you only need staff augmentation, pure hands-on coding, or expect instant results without process and operating model changes."
  },
  {
    question: "How fast can we see results?",
    answer:
      "First insights usually appear within 1–2 weeks. Visible improvements often start within weeks, not months, depending on the system and adoption speed."
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
        "Engineering delivery consultant helping product teams improve speed, predictability, and efficiency through system thinking, metrics, and AI.",
      sameAs: [
        "https://github.com/sg4tech/",
        "https://www.linkedin.com/in/victor-demin/",
        "https://t.me/cto_lifehacks",
        "https://habr.com/users/sg4tech/",
        "https://medium.com/@sg4tech"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://sg4.tech/#service",
      name: "Victor Demin Fractional CTO Consulting",
      url: "https://sg4.tech",
      serviceType: "Fractional CTO and engineering delivery consulting",
      description:
        "Fractional CTO consulting for product teams that need faster, more predictable software delivery using system thinking, delivery metrics, and AI.",
      areaServed: "Global",
      founder: {
        "@id": "https://sg4.tech/#person"
      },
      sameAs: [
        "https://github.com/sg4tech/",
        "https://www.linkedin.com/in/victor-demin/",
        "https://t.me/cto_lifehacks"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://sg4.tech/#faq",
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
  title: "Fractional CTO Consulting for Faster, Predictable Delivery",
  description:
    "I help product teams fix broken delivery systems with metrics, system thinking, and AI so engineering becomes faster, more predictable, and less chaotic.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Fractional CTO Consulting for Faster, Predictable Delivery",
    description:
      "I help product teams fix broken delivery systems with metrics, system thinking, and AI so engineering becomes faster, more predictable, and less chaotic.",
    type: "website",
    siteName: "sg4.tech",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CTO Consulting for Faster, Predictable Delivery",
    description:
      "I help product teams fix broken delivery systems with metrics, system thinking, and AI so engineering becomes faster, more predictable, and less chaotic."
  }
};

function SectionIntro({ children }: { children: string }) {
  return <p className={styles.sectionIntro}>{children}</p>;
}

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
      <p className={styles.eyebrow}>Fractional CTO consulting</p>
      <div className={styles.heroLayout}>
        <div className={styles.heroPrimary}>
          <h1>I turn slow, expensive engineering into fast, predictable delivery systems.</h1>
        </div>
        <div className={styles.heroSecondary}>
          <p className={styles.heroLead}>AI alone won't fix your delivery. But combined with the right system — it will.</p>
          <p className={styles.heroText}>
            Using system thinking, delivery metrics, and AI, I help product teams ship faster with less chaos.
          </p>
          <p className={styles.heroCredibility}>Experience across startups and scaling product companies.</p>
          <ul className={styles.heroMetrics} aria-label="Key outcomes">
            <li>2–3x faster delivery ⚡</li>
            <li>Up to 10x fewer bugs and downtime 🐞</li>
            <li>Higher predictability 📈</li>
          </ul>
          <div className={styles.heroActions}>
            <TrackedLink
              href={heroCtaHref}
              className={styles.primaryButton}
              target="_blank"
              rel="noreferrer"
              eventName="cta_click"
              payload={{ location: "hero" }}
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
      <h2>Most engineering problems look different on the surface — but the root is usually the same: a broken delivery system.</h2>
      <div className={styles.stageGrid}>
        {stageProblems.map((stage) => (
          <article key={stage.title} className={styles.card}>
            <h3>{stage.title}</h3>
            <ul className={styles.bulletList}>
              {stage.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className={styles.cardNote}>{stage.closing}</p>
          </article>
        ))}
      </div>
      <div className={styles.callout}>
        <p>This is not a people problem.</p>
        <p>And it's not solved by adding more process.</p>
        <p>You tried hiring more engineers. You added process. It didn't fix the problem.</p>
        <p>It's a system problem.</p>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section id="solution" className={styles.section}>
      <h2>I don't optimize developers. I fix the delivery system.</h2>
      <div className={styles.stack}>
        {solutionSteps.map((step) => (
          <article key={step.title} className={styles.step}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
      <div className={styles.subsection}>
        <h3>Why this works</h3>
        <ul className={styles.bulletList}>
          {credibilityPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section id="results" className={styles.section}>
      <h2>Results</h2>
      <SectionIntro>Real examples of what changes when the system improves.</SectionIntro>
      <div className={styles.stack}>
        {caseStudies.map((study) => (
          <article key={study.title} className={styles.caseStudy}>
            <header className={styles.caseHeader}>
              <h3>{study.title}</h3>
              <p>{study.company}</p>
            </header>
            <div className={styles.caseGrid}>
              <div>
                <h4>Problem</h4>
                <ul className={styles.bulletList}>
                  {study.problem.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>What I did</h4>
                <ul className={styles.bulletList}>
                  {study.work.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Result</h4>
                <ul className={styles.resultList}>
                  {study.result.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className={`${styles.section} ${styles.trustSection}`}>
      <h2 className={styles.trustHeading}>Why me</h2>
      <SectionIntro>
        Victor Demin — operator-level engineering leader focused on fixing delivery systems, not decorating process.
      </SectionIntro>
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
    <section id="process" className={styles.section}>
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
      <p className={styles.processNote}>No magic. Just a system that works.</p>
      <div className={styles.expectationBox}>
        <h3>What to expect</h3>
        <ul className={styles.bulletList}>
          {expectationPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FitSection() {
  return (
    <section id="fit" className={styles.section}>
      <h2>Who I work with</h2>
      <div className={styles.fitGrid}>
        {fitGroups.map((group) => (
          <article key={group.title} className={styles.fitCard}>
            <h3>{group.title}</h3>
            <ul className={styles.bulletList}>
              {group.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function SpecializationSection() {
  return (
    <section className={styles.section}>
      <h2>Specialized offers</h2>
      <SectionIntro>If your situation is more specific than a general delivery problem, start with the offer tailored to that system.</SectionIntro>
      <div className={styles.specializationGrid}>
        {specializationLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.specializationCard}>
            <span className={styles.specializationLabel}>Dedicated page</span>
            <span className={styles.specializationTitle}>{link.title}</span>
            <span className={styles.specializationDescription}>{link.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function InsightsSection() {
  return (
    <section id="insights" className={styles.section}>
      <h2>Insights / Writing</h2>
      <SectionIntro>
        I write about delivery systems, bottlenecks, metrics, and how AI changes engineering workflows.
      </SectionIntro>
      <p className={styles.bodyCopy}>Not theory — practical patterns from real systems.</p>
      <ul className={styles.bulletList}>
        {insightTopics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
      <p className={styles.bodyCopy}>If you want to understand how your system behaves — start here.</p>
      <div className={styles.insightGrid} aria-label="Writing channels">
        {insightLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={styles.insightCard}
            target="_blank"
            rel="noreferrer"
          >
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

function FinalCtaSection() {
  return (
    <section id="final-cta" className={styles.finalCta}>
      <h2>Describe your situation — I'll tell you where your system breaks.</h2>
      <p>Share the delivery symptoms, constraints, and team stage. I&apos;ll help you locate the real bottleneck and the fastest next step.</p>
      <div className={styles.finalActions}>
        <TrackedLink
          href={finalCtaHref}
          className={styles.primaryButton}
          target="_blank"
          rel="noreferrer"
          eventName="cta_click"
          payload={{ location: "final" }}
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

function FaqSection() {
  return (
    <section className={styles.section} aria-labelledby="faq-title">
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

export default function HomePage() {
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
      <ResultsSection />
      <ProcessSection />
      <FitSection />
      <SpecializationSection />
      <InsightsSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}
