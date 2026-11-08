import type { Metadata } from "next";
import { blogFeedAlternates } from "../../lib/blog/feed";
import { blogPosts, getPostUrl } from "../../lib/blog/posts";
import { absoluteUrl, personSchema } from "../../lib/brand";
import type { Locale } from "../../lib/i18n/locales";
import { pagePath } from "../../lib/i18n/pages";
import { buildPageMetadata } from "../../lib/page-metadata";
import type { BlogIndexContent } from "./blog-index-content";

export function buildBlogIndexMetadata(locale: Locale, content: BlogIndexContent): Metadata {
  return buildPageMetadata(locale, "blog", content.meta, { feed: blogFeedAlternates(locale) });
}

export function buildBlogIndexStructuredData(locale: Locale, content: BlogIndexContent) {
  const blogUrl = absoluteUrl(pagePath(locale, "blog"));
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      {
        "@type": "Blog",
        "@id": `${blogUrl}#blog`,
        url: blogUrl,
        name: content.meta.socialTitle,
        description: content.meta.description,
        author: { "@id": personSchema["@id"] },
        blogPost: blogPosts
          .filter((post) => post.locale === locale)
          .map((post) => ({
            "@type": "BlogPosting",
            "@id": `${getPostUrl(post.slug)}#article`,
            url: getPostUrl(post.slug),
            headline: post.title,
            description: post.description,
            datePublished: post.publishedAt,
            dateModified: post.modifiedAt,
            author: { "@id": personSchema["@id"] }
          }))
      }
    ]
  };
}
