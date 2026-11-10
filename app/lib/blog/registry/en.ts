import type { PostEntry } from "./types";

// The English posts — the originals every translation points back to.
export const EN_POST_SLUGS = [
  "diagnose-broken-engineering-delivery",
  "forecast-delivery-with-percentiles",
  "vibecoded-mvp-stopped-shipping",
  "ai-made-starting-free-finishing-expensive",
  "ai-coding-agent-periphery-core",
  "code-entropy-ci-checks-ai-legacy"
] as const;
export type EnPostSlug = (typeof EN_POST_SLUGS)[number];

export const enPosts: ReadonlyArray<PostEntry<EnPostSlug>> = [
  {
    slug: "diagnose-broken-engineering-delivery",
    locale: "en",
    title: "How to diagnose where engineering delivery is actually broken",
    description:
      "An engineering leader's metrics playbook: split T2M into Lead Time and Cycle Time, find the WIP bottleneck with Little's Law, and set WIP limits.",
    publishedAt: "2026-05-22",
    modifiedAt: "2026-05-22",
    readingMinutes: 18,
    tags: ["engineering metrics", "delivery", "WIP", "Theory of Constraints"]
  },
  {
    slug: "forecast-delivery-with-percentiles",
    locale: "en",
    title: "Average lead time is lying to you — how to forecast delivery with percentiles",
    seoTitle: "Average lead time is lying: forecast with percentiles",
    description:
      "Average lead time hides what your delivery system really does. Forecast with median, spread, and p85/p95 percentiles to commit to dates you can actually hit.",
    publishedAt: "2026-05-29",
    modifiedAt: "2026-05-29",
    readingMinutes: 7,
    tags: ["delivery forecasting", "lead time", "percentiles", "predictability", "flow metrics"]
  },
  {
    slug: "vibecoded-mvp-stopped-shipping",
    locale: "en",
    title: "Vibecoded MVP stopped shipping? Manage your AI like a junior",
    description:
      "A vibecoded MVP stalls the way junior-built codebases always have. Manage AI coding agents with junior-developer practices — a real rescue case with numbers.",
    publishedAt: "2026-06-11",
    modifiedAt: "2026-06-11",
    readingMinutes: 8,
    tags: ["vibecoding", "AI-generated code", "guardrails", "delivery system"]
  },
  {
    slug: "ai-made-starting-free-finishing-expensive",
    locale: "en",
    title: "AI made starting work nearly free. Finishing is still expensive.",
    seoTitle: "AI made starting work free. Finishing is still expensive.",
    description:
      "AI-assisted teams start more work than ever and ship about the same. Little's Law applied to agents, and the case for one-thread-one-task and WIP limits.",
    publishedAt: "2026-07-11",
    modifiedAt: "2026-07-11",
    readingMinutes: 7,
    tags: ["AI-assisted delivery", "WIP", "Little's Law", "context switching", "delivery metrics"]
  },
  {
    slug: "ai-coding-agent-periphery-core",
    locale: "en",
    title: "AI coding agents: give them the periphery, keep humans on the core",
    seoTitle: "What to delegate to AI coding agents: periphery vs core",
    description:
      "AI coding agents are brilliant at some work and dangerous at other work. What to delegate: give them the periphery, keep humans on the core.",
    publishedAt: "2026-07-12",
    modifiedAt: "2026-07-12",
    readingMinutes: 5,
    tags: ["AI coding agents", "enterprise AI", "self-hosted AI", "engineering delivery"]
  },
  {
    slug: "code-entropy-ci-checks-ai-legacy",
    locale: "en",
    title: "Code entropy: how CI checks keep AI from piling up legacy",
    seoTitle: "Prevent AI-generated technical debt with CI checks",
    description:
      "Code entropy grows on its own, and AI coding agents speed it up. Seven levels of CI checks that stop legacy piling up, with tools for Python, PHP, and JS/TS.",
    publishedAt: "2026-10-08",
    modifiedAt: "2026-10-08",
    readingMinutes: 6,
    tags: ["AI coding agents", "AI-generated code", "CI guardrails", "code quality", "software architecture"]
  }
]
;
