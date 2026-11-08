import { absoluteUrl } from "../brand";
import { renderRss, type RssItem } from "../rss";
import {
  BLOG_DESCRIPTION,
  BLOG_INDEX_PATH,
  BLOG_TITLE,
  type BlogPost,
  getBlogLastModifiedAt,
  getLatestPosts,
  getPostUrl,
  parsePostDate
} from "./posts";

// The blog's RSS feed: which posts go in and how they map to feed items.
// Served by app/blog/feed.xml/route.ts at BLOG_FEED_URL.
export const BLOG_FEED_URL = `${absoluteUrl(BLOG_INDEX_PATH)}feed.xml`;

function toFeedItem(post: BlogPost): RssItem {
  return {
    title: post.title,
    link: getPostUrl(post.slug),
    pubDate: parsePostDate(post.publishedAt),
    description: post.description
  };
}

export function buildBlogFeed(): string {
  const lastModified = getBlogLastModifiedAt();

  return renderRss(
    {
      title: BLOG_TITLE,
      link: absoluteUrl(BLOG_INDEX_PATH),
      description: BLOG_DESCRIPTION,
      language: "en",
      selfUrl: BLOG_FEED_URL,
      // The newest content change, not the time of the build, so rebuilds stay identical.
      lastBuildDate: lastModified === undefined ? undefined : parsePostDate(lastModified)
    },
    getLatestPosts().map(toFeedItem)
  );
}
