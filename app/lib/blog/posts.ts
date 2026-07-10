// Single source of truth for blog posts. Referenced by:
// - /blog index page (post list)
// - /blog/[slug] page metadata (title, description, dates)
// - sitemap.ts (URL list)
//
// Adding a new post:
// 1. Add the slug to POST_SLUGS below (type-narrows callers via PostSlug)
// 2. Append the post object to blogPosts
// 3. Create app/blog/<slug>/page.tsx that imports getPostBySlug with that slug

// POST_SLUGS is the source of truth for which routes exist. The PostSlug type
// is derived from it, so any string passed to getPostBySlug() is checked at
// compile time — a slug typo in a route file fails the build instead of
// crashing at runtime. blogPosts entries must use one of these slugs.
export const POST_SLUGS = [
  "diagnose-broken-engineering-delivery",
  "forecast-delivery-with-percentiles",
  "vibecoded-mvp-stopped-shipping",
  "ai-made-starting-free-finishing-expensive"
] as const;
export type PostSlug = (typeof POST_SLUGS)[number];

type BlogPost = {
  slug: PostSlug;
  title: string;
  description: string;
  /** ISO-8601 date string (YYYY-MM-DD). Used for Article schema datePublished. */
  publishedAt: string;
  /** ISO-8601 date string. Same as publishedAt unless content has been materially revised. */
  modifiedAt: string;
  /** Approximate reading time in minutes, rounded. */
  readingMinutes: number;
  /** Short topical tags. Surfaced on index card; not part of schema. */
  tags: ReadonlyArray<string>;
};

export const blogPosts: ReadonlyArray<BlogPost> = [
  {
    slug: "diagnose-broken-engineering-delivery",
    title: "How to diagnose where engineering delivery is actually broken",
    description:
      "A fractional CTO's metrics playbook: decomposing T2M into Lead Time and Cycle Time, the role of WIP, Little's Law, and how to introduce WIP limits without team revolt.",
    publishedAt: "2026-05-22",
    modifiedAt: "2026-05-22",
    readingMinutes: 18,
    tags: ["engineering metrics", "delivery", "WIP", "Theory of Constraints"]
  },
  {
    slug: "forecast-delivery-with-percentiles",
    title: "Average lead time is lying to you — how to forecast delivery with percentiles",
    description:
      "Average lead time hides what your delivery system actually does. A fractional CTO's guide to median, spread, and p95 forecasting — how to commit to delivery dates you can hit instead of estimates that keep slipping.",
    publishedAt: "2026-05-29",
    modifiedAt: "2026-05-29",
    readingMinutes: 7,
    tags: ["delivery forecasting", "lead time", "percentiles", "predictability", "flow metrics"]
  },
  {
    slug: "vibecoded-mvp-stopped-shipping",
    title: "Vibecoded MVP stopped shipping? Manage your AI like a junior",
    description:
      "A vibecoded MVP stalls the way junior-built codebases always have: code ships fast and nothing catches mistakes. A fractional CTO's playbook for managing AI coding agents with junior-developer practices — with a real rescue case and numbers.",
    publishedAt: "2026-06-11",
    modifiedAt: "2026-06-11",
    readingMinutes: 8,
    tags: ["vibecoding", "AI-generated code", "guardrails", "delivery system"]
  },
  {
    slug: "ai-made-starting-free-finishing-expensive",
    title: "AI made starting work nearly free. Finishing is still expensive.",
    description:
      "Why AI-assisted teams start more work than ever and ship about the same: waiting queues, context limits, and Little's Law applied to agents. A fractional CTO's case for one-thread-one-task and WIP limits in the AI era.",
    publishedAt: "2026-07-10",
    modifiedAt: "2026-07-10",
    readingMinutes: 7,
    tags: ["AI-assisted delivery", "WIP", "Little's Law", "context switching", "delivery metrics"]
  }
];

// Returns BlogPost (not undefined) because PostSlug is type-narrowed. The
// throw is a defensive guard for the case where POST_SLUGS and blogPosts
// fall out of sync inside this file (e.g., slug added to one but not the
// other) — runtime check because the type system can't enforce that every
// PostSlug literal has a matching blogPosts entry.
export function getPostBySlug(slug: PostSlug): BlogPost {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    throw new Error(
      `[blog] POST_SLUGS includes "${slug}" but blogPosts has no matching entry — sources out of sync inside app/lib/blog/posts.ts`
    );
  }
  return post;
}

// Formats an ISO-8601 YYYY-MM-DD date string as "Month D, YYYY" without
// pulling in a date library. Centralized here to avoid the previous shape
// where every page that rendered a post date had its own copy.
export function formatPostDate(iso: string): string {
  const [year, month, day] = iso.split("-").map((part) => Number.parseInt(part, 10));
  const monthName = new Date(Date.UTC(year, month - 1, day)).toLocaleString("en-US", {
    month: "long",
    timeZone: "UTC"
  });
  return `${monthName} ${day}, ${year}`;
}
