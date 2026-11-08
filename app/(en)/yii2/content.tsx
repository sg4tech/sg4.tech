import type { OgCardContent } from "../../_og/render";
import type { Yii2Content } from "../../views/yii2/yii2-content";

const title = "Yii2 Development for Faster Delivery and Better Quality";

export const yii2Content: Yii2Content = {
  meta: {
    title,
    description:
      "A dedicated landing page for Yii2 projects: I help teams remove delivery bottlenecks through guardrails, CI/CD, monitoring, delivery metrics, and AI.",
    socialDescription:
      "I help companies running Yii2 projects improve quality, uptime, and delivery speed without chaos or endless firefighting."
  },
  service: {
    name: "Yii2 Development",
    serviceType: "Yii2 development",
    description:
      "Development for companies running Yii2 projects that need better speed, higher uptime, fewer bugs, and more predictable delivery through guardrails, CI/CD, monitoring, and AI."
  },
  hero: {
    headlineLeadIn: "Your Yii2 project is ",
    headline: "slowing your business.",
    action: "I find what's actually broken — and fix it.",
    statement: "What's slowing you down is rarely the codebase — it's the delivery system around it.",
    promise: "I find it, fix it, and leave you with a system that runs without me.",
    primaryCta: { label: "DM me your situation", href: "https://t.me/sg4tech?start=site_yii2_hero" },
    secondaryCtaLabel: "How it works",
    phpRussiaLabel: "PHP Russia speaker",
    statsAriaLabel: "Key outcomes",
    metrics: [
      { id: "bugs", figure: "10×", label: "fewer bugs and production incidents" },
      { id: "downtime", figure: "5×", label: "less downtime, more predictable releases" },
      { id: "delivery", figure: "2–3×", label: "faster delivery without extra hiring" }
    ]
  },
  transformation: {
    title: "From fragile release flow to an operating system for delivery",
    intro: "Legacy code is survivable. Unreliable delivery is what actually slows the business down.",
    fireFighting: {
      title: "Fire fighting mode",
      manualChecks: "manual checks",
      hiddenQueue: "hidden queue",
      hotfixes: "hotfixes"
    },
    deliverySystem: {
      title: "Delivery system mode",
      guardrails: "guardrails",
      cicd: "CI/CD",
      monitoring: "monitoring",
      outcome: "predictable releases"
    },
    states: [
      { id: "before", value: "Before", label: "risky releases and reactive work" },
      { id: "after", value: "After", label: "guarded flow with visible bottlenecks" },
      { id: "goal", value: "Goal", label: "faster shipping without chaos" }
    ]
  },
  problem: {
    title: "When a Yii2 project has been around for years, the problem is almost never just the code.",
    points: [
      { id: "slowdown", text: "New functionality in Yii2 ships slower and slower." },
      { id: "risk", text: "Every release increases the risk of bugs, regressions, and manual firefighting." },
      {
        id: "legacy",
        text: "Legacy code, manual checks, and chaotic process slow the business down more than it seems."
      },
      { id: "busy", text: "The team stays busy, but product delivery speed still feels unacceptable." }
    ],
    callout:
      "If development has become the bottleneck, the code is not the only thing that is broken. The delivery system is breaking too."
  },
  levers: {
    quality: {
      title: "First we fix quality: uptime, bugs, and release predictability.",
      intro:
        "With guardrails, CI/CD, AI, and monitoring, we reduce release risk before customers or the business ever see the problem.",
      points: [
        { id: "guardrails", text: "guardrails in code and process so predictable mistakes never reach production" },
        { id: "cicd", text: "CI/CD that checks critical scenarios before release instead of after an incident" },
        { id: "monitoring", text: "monitoring and alerts that surface degradation before customers notice it" },
        { id: "automation", text: "AI and focused automation for routine checks, regressions, and legacy support" }
      ]
    },
    speed: {
      title: "Then we fix speed. Speed is not solved by code alone.",
      intro:
        "Speed is solved through people, process, metrics, and AI agents. Otherwise the Yii2 team stays trapped in urgent work and constant firefighting.",
      points: [
        {
          id: "bottleneck",
          text: "I find where the real slowdown lives: queues, manual approvals, and hidden dependencies"
        },
        { id: "metrics", text: "I set up delivery metrics so the bottleneck becomes visible instead of debated" },
        { id: "alignment", text: "I align people, process, and priorities around one delivery flow" },
        { id: "agents", text: "I introduce AI agents where they remove manual work and shorten the cycle" }
      ]
    }
  },
  trust: {
    intro:
      "Not an outside advisor in theory, but an operator-level engineering leader who has fixed delivery systems inside real companies, repeatedly and hands-on.",
    points: [
      { id: "experience", text: "15+ years in the industry." },
      {
        id: "fixes",
        text: "I have fixed delivery systems many times where speed and quality were working against each other."
      },
      {
        id: "hands-on",
        text: "I work both hands-on and system-level: architecture, process, metrics, and management."
      },
      {
        id: "track-record",
        text: "Experience in Wowworks (B2B facility management, EU, $3.6M raised) and Skyeng (K-12 EdTech platform, 2M+ MAU, $100M+ valuation)."
      }
    ]
  },
  process: {
    title: "How I work",
    intro:
      "No magic, and no pre-decided fixes. First we make the system observable and safe. Then we speed up the delivery flow.",
    outputLabel: "Output:",
    steps: [
      {
        title: "Review (1-2 weeks)",
        summary: "Find what is actually slowing delivery down.",
        points: [
          "Review the codebase and deployment health",
          "Find the real bottlenecks",
          "Assess release risk, quality, and coverage"
        ],
        output: "a clear plan and a prioritized action list"
      },
      {
        title: "Quality foundation",
        summary: "Reduce risk before the next release goes out.",
        points: [
          "Add CI/CD and guardrails",
          "Set up monitoring and alerts",
          "Reduce the probability of production incidents"
        ],
        output: "stable, lower-risk releases"
      },
      {
        title: "Delivery acceleration",
        summary: "Shorten the path from request to production.",
        points: ["Fix the team flow", "Introduce delivery metrics", "Apply AI where it creates real leverage"],
        output: "faster, more predictable delivery"
      }
    ],
    note: "The goal is not heroic effort. The goal is a delivery system that starts working for the business.",
    expectations: {
      title: "What to expect",
      points: [
        "First visible improvements in CI/CD and monitoring within 2-4 weeks",
        "Clear delivery improvements typically within months, not quarters",
        "The pace depends on team size and the depth of accumulated debt"
      ]
    }
  },
  proof: {
    title: "Proof and public material",
    intro:
      "Use these to quickly evaluate the thinking, operating style, and the way I work with quality, speed, systems, and AI in engineering.",
    talks: [
      {
        id: "event",
        label: "PHPConf talk",
        href: "https://phprussia.ru/2019/meetups#1457427",
        description: "Official event page for “How to use Yii2 in Enterprise? Borrowing Symfony best practices.”"
      },
      {
        id: "recording",
        label: "YouTube recording",
        href: "https://www.youtube.com/watch?v=lCMn52lMQks",
        description: "Watch the full talk recording on YouTube."
      }
    ],
    channelsAriaLabel: "Writing channels"
  },
  faq: [
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
  ],
  finalCta: {
    heading: (
      <>
        You don&apos;t need a six-month strategy debate. You need <em>a diagnosis — and a fix.</em>
      </>
    ),
    text: "Share what's hurting most — and what you want instead. I'll reply with a short diagnosis and what I'd fix first.",
    label: "Tell me where it hurts",
    href: "https://t.me/sg4tech?start=site_yii2_final"
  }
};

export const yii2OgCard: OgCardContent = {
  alt: "Yii2 Development — Faster Delivery, Better Quality",
  eyebrow: "Yii2 development",
  title: "Quality, predictability, speed — without rewrite",
  subtitle: "CI/CD, monitoring, delivery metrics, AI leverage",
  footer: "Victor Demin"
};
