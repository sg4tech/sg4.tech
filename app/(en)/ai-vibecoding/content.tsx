import type { OgCardContent } from "../../_og/render";
import type { AiVibecodingContent } from "../../views/ai-vibecoding/ai-vibecoding-content";

const title = "AI Vibecoding Cleanup: From Stuck MVP to Shipping Business";
const description =
  "Your vibecoded MVP isn't broken — the delivery system around it is missing. I build the guardrails, tests, pipeline, and architecture AI never ships with the code.";

export const aiVibecodingContent: AiVibecodingContent = {
  meta: { title, description },
  service: {
    name: "AI Vibecoding Cleanup",
    serviceType: "Software development for AI-built MVPs",
    description:
      "Development for founders with AI-built MVPs that have stopped shipping — I build the delivery system AI doesn't ship with the code."
  },
  hero: {
    eyebrow: "Vibecoded MVP → working business",
    headlineLeadIn: "Your vibecoded MVP isn't broken. ",
    headline: "The delivery system around it is missing.",
    statement:
      "You've tried switching AI tools. You've tried refactor sprints. The fix is the delivery system AI never built.",
    promise: "I find what's missing, build it, and leave you with a codebase that ships without me.",
    outcome: "So you can ship without fear of breaking what works.",
    habrSignal: { label: "Wrote about this pattern, 2023", href: "https://habr.com/ru/articles/719352/" },
    statsAriaLabel: "Key outcomes",
    metrics: [
      { id: "experience", figure: "15+", label: "years of engineering" },
      { id: "rps", figure: "4K+", label: "RPS production systems" },
      { id: "teams", figure: "14+", label: "teams delivery accelerated" }
    ],
    primaryCta: { label: "DM me your situation", href: "https://t.me/sg4tech?start=site_ai_vibecoding_hero" },
    secondaryCtaLabel: "How it works",
    transformation: {
      withoutSystem: {
        title: "AI without system",
        subtitle: "You get code. Then the chaos begins.",
        generate: "AI generates code",
        patch: "Patch a bug",
        breakFeature: "Break a feature",
        patchAgain: "Patch again",
        regressions: "More regressions",
        incident: "Production issue at 3 AM",
        footer: "Unpredictable. Expensive. Stressful."
      },
      withSystem: {
        title: "AI inside the system",
        subtitle: "AI moves fast. The system keeps it safe.",
        generate: "AI generates code",
        guardrails: "Guardrails",
        tests: "Tests",
        cicd: "CI/CD",
        safeReleases: "Safe releases",
        footer: "Predictable. Scalable. Sustainable."
      },
      caption: "Same AI. Different system around it."
    }
  },
  problem: {
    title: "The cracks in a vibecoded MVP show up the same way every time.",
    points: [
      {
        id: "breaks",
        text: "One feature gets added. Three others quietly break. You spend the next two days figuring out which."
      },
      {
        id: "unknown",
        text: "There are parts of your code nobody fully understands — including you. Touching them feels like Russian roulette."
      },
      {
        id: "loops",
        text: "AI keeps rewriting the same code differently. Each fix undoes the last one. You're paying for tokens to go in circles."
      },
      {
        id: "prod",
        text: "Demo works fine. A real user enters something weird, and prod breaks at 3 AM. You stare at the code, no idea how it works."
      }
    ],
    callout: "None of these are bugs. They're what's missing — the system AI doesn't ship with the code."
  },
  guardrails: {
    title: "The five layers of system AI doesn't ship",
    intro:
      "Five separate layers, each enforces something AI doesn't. Together they're the system that keeps your codebase shipping.",
    productionLabel: "Production",
    agentsLabel: "AI agents",
    layers: [
      {
        id: "architecture",
        label: "Architecture rules",
        text: "Architecture that holds itself together. Boundaries, dependencies, contracts — encoded so AI agents work within them, not around them."
      },
      {
        id: "pipeline",
        label: "Pipeline guardrails",
        text: "CI/CD gates that block bad releases. Monitoring that catches problems before customers — and before 3 AM."
      },
      {
        id: "tests",
        label: "Test guardrails",
        text: "Automated tests that don't trust the next generation. Unit, integration, and regression coverage — so adding one feature doesn't quietly break three."
      },
      {
        id: "code",
        label: "Code-level guardrails",
        text: "Linters, type checks, static analysis, security scans. The basics most vibecoded MVPs skip — and the reason fix-one-break-ten keeps happening."
      },
      {
        id: "aiWorkflow",
        label: "AI-workflow guardrails",
        text: "The rails AI was missing. Agent rule sets, context discipline, and self-check gates so AI doesn't undo last week's fix while making today's feature."
      }
    ]
  },
  trust: {
    intro:
      "I don't replace your AI. I build the system around it. Same pattern as the startup-mode codebases I've cleaned up for years — different generator, same fix.",
    points: [
      {
        id: "experience-stack",
        text: "15+ years across PHP, Python, Java, TypeScript, Node, C++, C#, iOS, Android (and yes, Flash once). The codebase patterns that kill delivery don't change with the stack. AI just made them faster."
      },
      {
        id: "track-record",
        text: "I've fixed this pattern at Wowworks — startup-mode codebase to EU-ready production — and at an EdTech scale-up. The cleanup pattern is older than AI — different source, same fix.",
        outcomes: [
          { company: "Wowworks", chips: ["bugs ↓10×", "delivery ↑3×", "efficiency ↑4×"] },
          { company: "EdTech", chips: ["delivery ↑2×", "downtime ↓10×", "eNPS −100→100"] }
        ]
      },
      {
        id: "habr",
        text: (
          <>
            Wrote about this exact cleanup pattern on{" "}
            <a href="https://habr.com/ru/articles/719352/" target="_blank" rel="noreferrer">
              Habr
            </a>{" "}
            in 2023, before AI accelerated it. Same fix, different generator.
          </>
        )
      },
      {
        id: "hands-on",
        text: "I do the work, not just advise. Architecture, guardrails, AI workflow tuning, refactoring — hands-on."
      }
    ]
  },
  process: {
    title: "How I work",
    intro:
      "No pre-decided fixes. First we see what's actually broken. Then we make changes safe to ship. Then we make the system one that scales.",
    outputLabel: "Output:",
    steps: [
      {
        title: "Review",
        duration: "1–2 weeks",
        points: [
          "Review the codebase, dev workflow, and AI usage patterns",
          "Find what's hurting, what's working, what's missing",
          "Prioritize fixes by business impact"
        ],
        output: "A clear picture and a prioritized fix plan"
      },
      {
        title: "Safety net",
        duration: "Weeks to ~2 months",
        points: [
          "Set up dev fundamentals: git, CI/CD, monitoring, logs",
          "Add all five guardrail layers including AI-workflow",
          "Fix critical bugs they surface"
        ],
        output: "Production-safe codebase, critical bugs fixed, AI works inside guardrails"
      },
      {
        title: "Scale",
        duration: "Ongoing — months",
        points: [
          "Define target architecture and refactor toward it safely",
          "Tune for your real load profile",
          "Hire targeted specialists only if scaling demands it"
        ],
        output: "Maintainable codebase, team scales without re-breaking it"
      }
    ],
    note: "The goal isn't a heroic refactor sprint. The goal is reduced chaos, predictable shipping, and the confidence to keep going.",
    expectations: {
      title: "What to expect",
      points: [
        "First improvements in CI/CD and monitoring within 2-4 weeks",
        "Critical bug fixes typically within the first month",
        "Architectural maturity unfolds over months — pace depends on starting state and team velocity"
      ]
    }
  },
  whoNotFor: {
    title: "Who I'm not for",
    items: [
      "Marketing and sales are your real bottleneck. You need a GTM operator, not a delivery one.",
      "You don't have a working MVP yet. Build it before fixing it.",
      "You're looking for free or DIY help. That's a different kind of service than this."
    ]
  },
  featuredEssay: {
    label: "Featured essay",
    slug: "vibecoded-mvp-stopped-shipping"
  },
  faq: [
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
  ],
  finalCta: {
    heading: (
      <>
        You don&apos;t need another AI tool. You need <em>a fix that holds.</em>
      </>
    ),
    text: "Just write me. We'll figure out fit fast and the right next step toward shipping without fear.",
    label: "Send me your project",
    href: "https://t.me/sg4tech?start=site_ai_vibecoding_final"
  }
};

export const aiVibecodingOgCard: OgCardContent = {
  alt: "AI Vibecoding Cleanup — From Stuck MVP to Shipping Business",
  eyebrow: "AI vibecoding",
  title: "From stuck MVP to shipping business",
  subtitle: "Guardrails, tests, pipeline, and architecture AI never ships"
};
