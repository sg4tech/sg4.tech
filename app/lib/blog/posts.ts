import { absoluteUrl, type SitePath } from "../brand";
import { DEFAULT_LOCALE, getLocaleConfig, type Locale } from "../i18n/locales";
import { pagePath } from "../i18n/pages";

// Single source of truth for blog posts. Referenced by:
// - /blog index page (post list)
// - /blog/[slug] page metadata (title, description, dates)
// - sitemap.ts (URL list)
//
// Adding a new post:
// 1. Add the slug to POST_SLUGS below (type-narrows callers via PostSlug)
// 2. Append the post object to blogPosts
// 3. Create app/blog/<slug>/page.tsx that renders BlogPostLayout with that slug

// POST_SLUGS is the source of truth for which routes exist. The PostSlug type
// is derived from it, so any string passed to getPostBySlug() is checked at
// compile time — a slug typo in a route file fails the build instead of
// crashing at runtime. blogPosts entries must use one of these slugs.
export const POST_SLUGS = [
  "diagnose-broken-engineering-delivery",
  "forecast-delivery-with-percentiles",
  "vibecoded-mvp-stopped-shipping",
  "ai-made-starting-free-finishing-expensive",
  "ai-coding-agent-periphery-core",
  "code-entropy-ci-checks-ai-legacy"
] as const;
export type PostSlug = (typeof POST_SLUGS)[number];

export type BlogPost = {
  slug: PostSlug;
  /** The language the post is written in; it is published under that locale's blog. */
  locale: Locale;
  /** For a translation: the slug of the original post. Links the language
   * versions for hreflang; leave unset on originals. */
  translationOf?: PostSlug;
  title: string;
  /** Search-result title for the <title> tag when it should name the searched-for topic more
   * plainly than the on-page headline. Falls back to `title`; H1, Open Graph, and schema
   * headline always use `title`. */
  seoTitle?: string;
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
];

// Returns BlogPost (not undefined) because PostSlug is type-narrowed. The
// throw is a defensive guard for the case where POST_SLUGS and blogPosts
// fall out of sync inside this file (e.g., slug added to one but not the
// other) — runtime check because the type system can't enforce that every
// PostSlug literal has a matching blogPosts entry.
/** A locale's posts, newest first; pass `limit` to take only the most recent ones. */
export function getLatestPosts(locale: Locale, limit?: number): ReadonlyArray<BlogPost> {
  const sorted = blogPosts
    .filter((post) => post.locale === locale)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  return limit === undefined ? sorted : sorted.slice(0, limit);
}

/** A locale's latest posts, or the default locale's while it has none — for
 * blocks that should not sit empty before the first translated post. */
export function getLatestPostsOrDefault(locale: Locale, limit?: number): ReadonlyArray<BlogPost> {
  const own = getLatestPosts(locale, limit);
  return own.length > 0 ? own : getLatestPosts(DEFAULT_LOCALE, limit);
}

/** Every language version of a post (the original and its translations). */
export function getPostTranslations(slug: PostSlug): ReadonlyArray<BlogPost> {
  const original = getPostBySlug(slug).translationOf ?? slug;
  return blogPosts.filter((post) => post.slug === original || post.translationOf === original);
}

// The translation links must form simple groups: every translation points at
// an original (never at another translation), in another language, and each
// language appears once per group. Anything else yields a broken hreflang set,
// so the registry is checked when it loads and the build fails on a bad link.
export function validateTranslations(posts: ReadonlyArray<Pick<BlogPost, "slug" | "locale" | "translationOf">>): void {
  const bySlug = new Map(posts.map((post) => [post.slug, post]));
  const groupLocales = new Map<string, Set<string>>();
  for (const post of posts) {
    const original = post.translationOf === undefined ? post : bySlug.get(post.translationOf);
    if (original === undefined || original.translationOf !== undefined) {
      throw new Error(`[blog] "${post.slug}" must translate an original post, not "${String(post.translationOf)}"`);
    }
    const locales = groupLocales.get(original.slug) ?? new Set<string>();
    if (locales.has(post.locale)) {
      throw new Error(`[blog] "${original.slug}" has two ${post.locale} versions`);
    }
    locales.add(post.locale);
    groupLocales.set(original.slug, locales);
  }
}

validateTranslations(blogPosts);

// Where a post is served: under its own language's blog, as the page registry
// places it. Every link, canonical, schema @id, sitemap entry, and feed item
// derives its URL from here.
export function getPostPath(slug: PostSlug): SitePath {
  const post = getPostBySlug(slug);
  return `${pagePath(post.locale, "blog")}${post.slug}/`;
}

export function getPostUrl(slug: PostSlug): string {
  return absoluteUrl(getPostPath(slug));
}

// A blog's last content change: the newest modifiedAt among the locale's posts.
// ISO-8601 dates sort lexically the same as chronologically. Undefined when the
// locale has no posts.
export function getBlogLastModifiedAt(locale: Locale): string | undefined {
  return blogPosts
    .filter((post) => post.locale === locale)
    .map((post) => post.modifiedAt)
    .sort()
    .at(-1);
}

export function getPostBySlug(slug: PostSlug): BlogPost {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    throw new Error(
      `[blog] POST_SLUGS includes "${slug}" but blogPosts has no matching entry — sources out of sync inside app/lib/blog/posts.ts`
    );
  }
  return post;
}

// Post dates are calendar days (YYYY-MM-DD); pinned to UTC midnight so every
// consumer (display, sitemap, feed) reads the same day regardless of time zone.
export function parsePostDate(iso: string): Date {
  return new Date(`${iso}T00:00:00Z`);
}

// Formats a post date as a long, locale-native date ("May 22, 2026" in
// English) without a date library, the same way on every page.
export function formatPostDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(getLocaleConfig(locale).intlTag, {
    dateStyle: "long",
    timeZone: "UTC"
  }).format(parsePostDate(iso));
}
