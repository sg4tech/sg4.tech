// Single source of truth for blog posts. Referenced by:
// - /blog index page (post list)
// - /blog/[slug] page metadata (title, description, dates)
// - sitemap.ts (URL list)
// - llms.txt postbuild (if/when we wire AI-discovery automation)
//
// Adding a new post:
// 1. Append metadata here
// 2. Create app/blog/<slug>/page.tsx
// 3. Bump sitemap.ts (already reads this list)

type BlogPost = {
  slug: string;
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
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
