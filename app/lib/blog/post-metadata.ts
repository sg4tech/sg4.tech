import type { Metadata } from "next";
import { BRAND_NAME, LINKEDIN_URL, SITE_URL } from "../brand";
import { getPostBySlug, type PostSlug } from "./posts";

// One builder for every post's Next.js metadata, so a change to how posts
// present themselves to search engines and social cards happens in one place.
export function buildPostMetadata(slug: PostSlug): Metadata {
  const post = getPostBySlug(slug);
  const path = `/blog/${slug}/`;

  return {
    // Absolute: the layout's site-name suffix would push post titles past the
    // length search results show.
    title: { absolute: post.seoTitle ?? post.title },
    description: post.description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      siteName: BRAND_NAME,
      locale: "en_US",
      url: `${SITE_URL}${path}`,
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
