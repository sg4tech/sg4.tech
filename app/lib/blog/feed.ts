import { absoluteUrl } from "../brand";
import { getLocaleConfig, type Locale } from "../i18n/locales";
import { pagePath } from "../i18n/pages";
import { renderRss, type RssItem } from "../rss";
import { type BlogPost, getBlogLastModifiedAt, getLatestPosts, getPostUrl, parsePostDate } from "./posts";

// A locale's blog RSS feed: which posts go in and how they map to feed items.
// Served next to that locale's blog index (app/(en)/blog/feed.xml for English).

/** The feed's published URL, next to the locale's blog index. */
export function blogFeedUrl(locale: Locale): string {
  return `${absoluteUrl(pagePath(locale, "blog"))}feed.xml`;
}

/** Advertises the locale's feed via <link rel="alternate"> (alternates.types). */
export function blogFeedAlternates(locale: Locale) {
  return { "application/rss+xml": blogFeedUrl(locale) };
}

/** What the feed channel says about the blog; the blog index content supplies it. */
export type BlogFeedChannel = {
  title: string;
  description: string;
};

function toFeedItem(post: BlogPost): RssItem {
  return {
    title: post.title,
    link: getPostUrl(post.slug),
    pubDate: parsePostDate(post.publishedAt),
    description: post.description
  };
}

export function buildBlogFeed(locale: Locale, channel: BlogFeedChannel): string {
  const lastModified = getBlogLastModifiedAt(locale);

  return renderRss(
    {
      title: channel.title,
      link: absoluteUrl(pagePath(locale, "blog")),
      description: channel.description,
      language: getLocaleConfig(locale).htmlLang,
      selfUrl: blogFeedUrl(locale),
      // The newest content change, not the time of the build, so rebuilds stay identical.
      lastBuildDate: lastModified === undefined ? undefined : parsePostDate(lastModified)
    },
    getLatestPosts(locale).map(toFeedItem)
  );
}
