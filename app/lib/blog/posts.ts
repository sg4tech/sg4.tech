import { absoluteUrl, type SitePath } from "../brand";
import { DEFAULT_LOCALE, getLocaleConfig, type Locale } from "../i18n/locales";
import { pagePath } from "../i18n/pages";
import { DE_POST_SLUGS, dePosts } from "./registry/de";
import { EN_POST_SLUGS, enPosts } from "./registry/en";
import { ES_POST_SLUGS, esPosts } from "./registry/es";
import { FR_POST_SLUGS, frPosts } from "./registry/fr";
import { PT_BR_POST_SLUGS, ptBrPosts } from "./registry/pt-br";
import { RU_POST_SLUGS, ruPosts } from "./registry/ru";
import type { PostEntry } from "./registry/types";

// Single source of truth for blog posts. Referenced by:
// - /blog index page (post list)
// - /blog/[slug] page metadata (title, description, dates)
// - sitemap.ts (URL list)
//
// Adding a new post:
// 1. Add the slug and entry to the locale's file in ./registry/ (a translation
//    sets translationOf to the English original)
// 2. Create app/(<locale>)/…/blog/<slug>/page.tsx that renders BlogPostLayout with that slug

// Every locale's posts. Each locale's registry file (./registry/) owns its
// slugs; the union below is what routes and links are type-checked against,
// so a slug typo in a route file fails the build instead of crashing at runtime.
export const POST_SLUGS = [
  ...EN_POST_SLUGS,
  ...RU_POST_SLUGS,
  ...DE_POST_SLUGS,
  ...PT_BR_POST_SLUGS,
  ...FR_POST_SLUGS,
  ...ES_POST_SLUGS
] as const;
export type PostSlug = (typeof POST_SLUGS)[number];

export type BlogPost = PostEntry<PostSlug, PostSlug>;

export const blogPosts: ReadonlyArray<BlogPost> = [...enPosts, ...ruPosts, ...dePosts, ...ptBrPosts, ...frPosts, ...esPosts];

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

/** The post's version in `locale`, or the original while it has none there. */
export function getPostInLocaleOrOriginal(slug: PostSlug, locale: Locale): BlogPost {
  const translations = getPostTranslations(slug);
  return (
    translations.find((post) => post.locale === locale) ??
    translations.find((post) => post.translationOf === undefined) ??
    getPostBySlug(slug)
  );
}

/** Where a link to the post goes for a reader of `locale`: its translation
 * there, or the original while it has none. */
export function getPostPathInLocale(slug: PostSlug, locale: Locale): SitePath {
  return getPostPath(getPostInLocaleOrOriginal(slug, locale).slug);
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
