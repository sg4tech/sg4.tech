import type { Metadata } from "next";
import Link from "next/link";
import { siHabr, siMedium, siTelegram } from "simple-icons";
import TrackedLink from "./TrackedLink";
import { BrandIcon } from "./components/BrandIcon";
import { FooterSection } from "./components/FooterSection";
import { TopNavigation } from "./components/TopNavigation";
import { BRAND_COPYRIGHT, footerLinks, personSchema } from "./lib/brand";
import type { NavigationItem } from "./lib/navigation";
import { LINKEDIN_SVG_PATH } from "./lib/social-icons";
import styles from "./page.module.css";

const secondaryCtaHref = "#process";
const heroCtaHref = "https://t.me/sg4tech?start=site_hero";
const finalCtaHref = "https://t.me/sg4tech?start=site_final";

const navigationItems: NavigationItem[] = [
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
    iconPath: LINKEDIN_SVG_PATH,
    description: "Operator perspective, case-based observations, and updates on engineering leadership."
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
    personSchema,
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
              <BrandIcon label={link.label} path={link.iconPath} className={styles.brandIcon} />
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

export default function HomePage() {
  return (
    <main id="main" className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TopNavigation items={navigationItems} ariaLabel="Section navigation" />
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
      <FooterSection links={footerLinks} copyright={BRAND_COPYRIGHT} />
    </main>
  );
}
