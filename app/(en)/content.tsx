import type { OgCardContent } from "../_og/render";
import type { HomeContent } from "../views/home/home-content";

const description =
  "I build software systems that ship on time and hold up in production — writing the code, fixing what's broken, and leading development with product teams.";

export const homeContent: HomeContent = {
  meta: {
    title: "Software Engineering & Technical Leadership",
    description
  },
  service: {
    name: "Victor Demin Software Engineering",
    serviceType: "Software development and technical leadership",
    description
  },
  hero: {
    eyebrow: "Software engineering & technical leadership",
    headline: "I build systems that work.",
    phpRussiaLabel: "PHP Russia speaker",
    lead: "Software that ships on time, holds up in production, and doesn't fall apart as it grows.",
    text: <>Using system thinking, delivery metrics, and AI, I&nbsp;build it — faster and with less chaos.</>,
    primaryCta: { label: "Discuss your project", href: "https://t.me/sg4tech?start=site_hero" },
    secondaryCtaLabel: "See how I work",
    credibility: "Experience across startups and scaling product companies.",
    statsAriaLabel: "Key outcomes",
    metrics: [
      { id: "speed", figure: "2–3x", label: "faster delivery" },
      { id: "quality", note: "Up to", figure: "10x", label: "fewer bugs and downtime" },
      { id: "predictability", label: "Higher predictability" }
    ]
  },
  problem: {
    title: "The product sells. The software can't keep up.",
    stages: [
      {
        id: "early",
        title: "Early traction",
        points: [
          "The MVP code is hard to change",
          "New features take longer than expected",
          "Everything depends on one or two people"
        ],
        closing: "Traction is there. The codebase isn't ready for it."
      },
      {
        id: "growth",
        title: "Growth",
        points: [
          "Features take too long to ship",
          "Deadlines slip — even with planning",
          "Bugs increase with every release"
        ],
        closing: "You have a team. It's busy. Output still feels low."
      },
      {
        id: "scale",
        title: "Scale",
        points: [
          "Every change touches too many parts of the system",
          "Coordination overhead slows everything down",
          "Releases get riskier as the system grows"
        ],
        closing: "Complexity grows faster than the product."
      }
    ],
    callout: [
      "Hiring more people rarely fixes it.",
      "The fix is in how the software is built and shipped — and that's what I do."
    ]
  },
  trust: {
    intro: "I write the code, lead the work, and stay until it runs in production.",
    points: [
      { id: "experience", text: "15+ years in engineering" },
      { id: "leadership", text: "8+ years in leadership" },
      { id: "mvp", text: "Built MVPs hands-on" },
      { id: "scale", text: "Scaled teams and improved delivery systems" },
      { id: "writing", text: "Write about engineering metrics, bottlenecks, and AI workflows" }
    ]
  },
  results: {
    title: "Results",
    intro: "Past roles and projects — what changed when I led development.",
    problemLabel: "Problem",
    workLabel: "What I did",
    cases: [
      {
        title: "Scaling delivery",
        company: "B2B product company (international markets, 3 cross-functional teams)",
        problem: ["Slow and unpredictable delivery", "High bug rate"],
        work: ["Introduced delivery metrics", "Rebuilt development flow", "Aligned engineering with product"],
        metrics: [
          { figure: "2–3x", label: "faster delivery" },
          { figure: "10x", label: "fewer bugs" },
          { icon: "predictable", label: "Predictable releases" }
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
          { icon: "nps", label: "NPS improved significantly" }
        ]
      },
      {
        title: "Cost & efficiency",
        company: "Product company (scaling phase)",
        problem: ["High engineering cost", "Low effective throughput"],
        work: ["Identified bottlenecks (ToC)", "Reduced unnecessary work", "Improved prioritization"],
        metrics: [
          { figure: "~1.5x", label: "cost reduction" },
          { icon: "throughput", label: "Higher effective throughput" },
          { icon: "stable", label: "More stable system" }
        ]
      }
    ]
  },
  process: {
    title: "How I work",
    outputLabel: "Output:",
    steps: [
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
    ],
    note: "No magic. Just a system that works."
  },
  fit: {
    title: "Who I work with",
    intro: "I ship the product. You bring the customers.",
    groups: [
      {
        id: "fit",
        title: "Best fit",
        points: [
          "Founders and product companies (B2B / SaaS / platforms) that need their product built or fixed",
          "You know your customers and have a validated product (at least an MVP)",
          "You already have revenue and a working sales channel"
        ]
      },
      {
        id: "notFit",
        title: "Not a good fit",
        points: [
          "Idea stage — no clear audience, validated MVP, or revenue yet",
          "Unpaid work or equity-only deals",
          "Marketing, growth, or lead-generation services",
          "Staff augmentation only, without ownership of the result"
        ]
      }
    ]
  },
  specializations: {
    title: "Specialized offers",
    intro: "If your situation is more specific, start with the page built for it.",
    links: [
      {
        target: "yii2",
        title: "Running a Yii2 project?",
        description:
          "There is a dedicated landing page for Yii2 development: quality, release predictability, speed, and modernization without defaulting to a rewrite."
      },
      {
        target: "ai-vibecoding",
        title: "Vibecoded MVP slowing you down?",
        description:
          "Dedicated landing page for cleaning up AI-built MVPs without rewriting from scratch — I build the delivery system AI never shipped with the code."
      }
    ]
  },
  writing: {
    title: "Writing",
    intro: "I write about delivery systems, bottlenecks, metrics, and how AI changes engineering workflows.",
    allPostsLabel: "All posts",
    channelsAriaLabel: "Writing channels"
  },
  faq: [
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
  ],
  finalCta: {
    heading: (
      <>
        Tell me what you&apos;re building — <em>I&apos;ll ship it.</em>
      </>
    ),
    text: "Share where the product is, who uses it, and what has to ship next. I'll reply with how I'd scope the work and the first release.",
    label: "Discuss your project",
    href: "https://t.me/sg4tech?start=site_final"
  }
};

export const homeOgCard: OgCardContent = {
  alt: "Victor Demin — Software engineering & technical leadership",
  eyebrow: "Software engineering & technical leadership",
  title: "I build systems that work.",
  subtitle: "Software that ships on time and holds up in production"
};
