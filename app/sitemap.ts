import type { MetadataRoute } from "next";
import { postLanguageAlternates } from "./lib/blog/post-metadata";
import { blogPosts, postPath } from "./lib/blog/posts";
import { SITE_URL } from "./lib/brand";
import { LOCALES, type Locale } from "./lib/i18n/locales";
import { pageLanguageAlternates, pageLocales, pagePath, type PageKey } from "./lib/i18n/pages";

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
// - `page` is a page-registry key; its served paths (trailing slash, under
//   each published locale) come from the registry, so the sitemap lists final
//   URLs, not redirects, and only languages that actually exist
// - `priority` is a literal union of the sitemap-protocol values we
//   actually use, blocking accidental NaN / out-of-range / typos
//   (sitemap.org defines priority as 0.0 to 1.0; we use a discrete
//   subset to encode landing weight)
type Landing = {
  page: Extract<PageKey, "home" | "yii2" | "ai-vibecoding">;
  modifiedAt: string;
  changeFrequency: "monthly" | "weekly";
  priority: 0.6 | 0.7 | 0.8 | 1;
};

const landings: ReadonlyArray<Landing> = [
  { page: "home", modifiedAt: "2026-06-15", changeFrequency: "monthly", priority: 1 },
  { page: "yii2", modifiedAt: "2026-06-15", changeFrequency: "monthly", priority: 0.8 },
  { page: "ai-vibecoding", modifiedAt: "2026-06-15", changeFrequency: "monthly", priority: 0.8 }
];

// Newest modifiedAt among a locale's posts, used as that locale's blog index
// lastmod; undefined when the locale has no posts. ISO-8601 YYYY-MM-DD strings
// sort lexically the same as chronologically, so a plain .sort() suffices.
function latestBlogModifiedAt(locale: Locale): string | undefined {
  return blogPosts
    .filter((post) => post.locale === locale)
    .map((post) => post.modifiedAt)
    .sort()
    .at(-1);
}

// Sitemap `alternates` only for pages with more than one language version.
function withAlternates(languages: Record<string, string> | undefined): Pick<MetadataRoute.Sitemap[number], "alternates"> {
  return languages ? { alternates: { languages } } : {};
}

export default function sitemap(): MetadataRoute.Sitemap {
  const landingEntries: MetadataRoute.Sitemap = landings.flatMap((landing) =>
    pageLocales(landing.page).map((locale) => ({
      url: `${SITE_URL}${pagePath(locale, landing.page)}`,
      lastModified: new Date(landing.modifiedAt),
      changeFrequency: landing.changeFrequency,
      priority: landing.priority,
      ...withAlternates(pageLanguageAlternates(landing.page))
    }))
  );

  // A locale's blog index is only advertised when it has at least one post. An
  // empty blog index with a stale hardcoded date would be a worse SEO signal
  // than simply omitting the URL until content exists.
  const blogIndexes: MetadataRoute.Sitemap = LOCALES.flatMap((locale) => {
    const lastModified = latestBlogModifiedAt(locale);
    if (lastModified === undefined || !pageLocales("blog").includes(locale)) {
      return [];
    }
    return [
      {
        url: `${SITE_URL}${pagePath(locale, "blog")}`,
        lastModified: new Date(lastModified),
        changeFrequency: "weekly" as const,
        priority: 0.7,
        ...withAlternates(pageLanguageAlternates("blog"))
      }
    ];
  });

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}${postPath(post)}`,
    lastModified: new Date(post.modifiedAt),
    changeFrequency: "monthly",
    priority: 0.6,
    ...withAlternates(postLanguageAlternates(post.slug))
  }));

  return [...landingEntries, ...blogIndexes, ...posts];
}
