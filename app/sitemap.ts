import type { MetadataRoute } from "next";
import { blogPosts } from "./lib/blog/posts";

export const dynamic = "force-static";

const baseUrl = "https://sg4.tech";

// Explicit per-landing modifiedAt dates instead of `new Date()` at build time.
// Why: marking every landing as "fresh-modified on every deploy" is a known SEO
// anti-pattern — Google explicitly says "if <lastmod> isn't consistently and
// verifiably accurate, it's ignored." Static dates require dev discipline to
// bump when content meaningfully changes, but in exchange the crawl signal
// stays trustworthy.
//
// /blog index isn't listed here because its modifiedAt is auto-derived from
// the most recently modified post — no manual maintenance needed.
type Landing = {
  path: string;
  modifiedAt: string;
  changeFrequency: "monthly" | "weekly";
  priority: number;
};

const landings: ReadonlyArray<Landing> = [
  { path: "/", modifiedAt: "2026-05-22", changeFrequency: "monthly", priority: 1 },
  { path: "/yii2", modifiedAt: "2026-05-13", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ai-vibecoding", modifiedAt: "2026-05-13", changeFrequency: "monthly", priority: 0.8 }
];

// Newest post's modifiedAt, used as the /blog index lastmod. Caller must
// guard blogPosts.length > 0 — see sitemap() below. ISO-8601 YYYY-MM-DD
// strings sort lexically the same as chronologically, so a plain .sort()
// suffices (no Date object comparison needed).
function latestBlogModifiedAt(): string {
  return blogPosts.map((post) => post.modifiedAt).sort().at(-1)!;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const landingEntries: MetadataRoute.Sitemap = landings.map((landing) => ({
    url: `${baseUrl}${landing.path}`,
    lastModified: new Date(landing.modifiedAt),
    changeFrequency: landing.changeFrequency,
    priority: landing.priority
  }));

  // /blog index is only advertised when there's at least one post. An empty
  // blog index with a stale hardcoded date would be a worse SEO signal than
  // simply omitting the URL until content exists.
  const blogIndex: MetadataRoute.Sitemap =
    blogPosts.length === 0
      ? []
      : [
          {
            url: `${baseUrl}/blog`,
            lastModified: new Date(latestBlogModifiedAt()),
            changeFrequency: "weekly",
            priority: 0.7
          }
        ];

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedAt),
    changeFrequency: "monthly",
    priority: 0.6
  }));

  return [...landingEntries, ...blogIndex, ...posts];
}
