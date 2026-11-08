import type { Metadata } from "next";
import { absoluteUrl, BRAND_NAME, LINKEDIN_URL } from "../brand";
import { BLOG_FEED_URL } from "./feed";
import { getPostBySlug, getPostPath, type PostSlug } from "./posts";

// Advertises the blog feed via <link rel="alternate">: set as alternates.types
// on the blog index and on every post.
export const blogFeedAlternates = { "application/rss+xml": BLOG_FEED_URL };

// One builder for every post's Next.js metadata, so a change to how posts
// present themselves to search engines and social cards happens in one place.
export function buildPostMetadata(slug: PostSlug): Metadata {
  const post = getPostBySlug(slug);
  const path = getPostPath(slug);

  return {
    // Absolute: the layout's site-name suffix would push post titles past the
    // length search results show.
    title: { absolute: post.seoTitle ?? post.title },
    description: post.description,
    alternates: {
      canonical: path,
      types: blogFeedAlternates
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      siteName: BRAND_NAME,
      locale: "en_US",
      url: absoluteUrl(path),
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt,
      authors: [LINKEDIN_URL]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description
    }
  };
}
