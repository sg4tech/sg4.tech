import type { MetadataRoute } from "next";
import { BLOG_INDEX_PATH, blogPosts, getBlogLastModifiedAt, getPostUrl, parsePostDate } from "./lib/blog/posts";
import { absoluteUrl, type SitePath } from "./lib/brand";
import { LANDING_PATHS } from "./lib/landings";

export const dynamic = "force-static";

// Explicit per-landing modifiedAt dates instead of `new Date()` at build time.
// Why: marking every landing as "fresh-modified on every deploy" is a known SEO
// anti-pattern — Google explicitly says "if <lastmod> isn't consistently and
// verifiably accurate, it's ignored." Static dates require dev discipline to
// bump when content meaningfully changes, but in exchange the crawl signal
// stays trustworthy.
//
// /blog index isn't listed here because its modifiedAt is auto-derived from
// the most recently modified post — no manual maintenance needed.
// Tighter shape than the MetadataRoute.Sitemap entry:
// - `path` is a SitePath (the served trailing-slash form) taken from
//   LANDING_PATHS — a sitemap must list final URLs, not 301 redirects
// - `priority` is a literal union of the sitemap-protocol values we
//   actually use, blocking accidental NaN / out-of-range / typos
//   (sitemap.org defines priority as 0.0 to 1.0; we use a discrete
//   subset to encode landing weight)
type Landing = {
  path: SitePath;
  modifiedAt: string;
  changeFrequency: "monthly" | "weekly";
  priority: 0.6 | 0.7 | 0.8 | 1;
};

const landings: ReadonlyArray<Landing> = [
  { path: LANDING_PATHS.home, modifiedAt: "2026-11-08", changeFrequency: "monthly", priority: 1 },
  { path: LANDING_PATHS.yii2, modifiedAt: "2026-11-08", changeFrequency: "monthly", priority: 0.8 },
  { path: LANDING_PATHS.aiVibecoding, modifiedAt: "2026-11-08", changeFrequency: "monthly", priority: 0.8 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const landingEntries: MetadataRoute.Sitemap = landings.map((landing) => ({
    url: absoluteUrl(landing.path),
    lastModified: new Date(landing.modifiedAt),
    changeFrequency: landing.changeFrequency,
    priority: landing.priority
  }));

  // /blog index is only advertised when there's at least one post. An empty
  // blog index with a stale hardcoded date would be a worse SEO signal than
  // simply omitting the URL until content exists.
  const blogLastModifiedAt = getBlogLastModifiedAt();
  const blogIndex: MetadataRoute.Sitemap =
    blogLastModifiedAt === undefined
      ? []
      : [
          {
            url: absoluteUrl(BLOG_INDEX_PATH),
            lastModified: parsePostDate(blogLastModifiedAt),
            changeFrequency: "weekly",
            priority: 0.7
          }
        ];

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: getPostUrl(post.slug),
    lastModified: parsePostDate(post.modifiedAt),
    changeFrequency: "monthly",
    priority: 0.6
  }));

  return [...landingEntries, ...blogIndex, ...posts];
}
