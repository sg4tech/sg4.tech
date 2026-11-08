import type { Metadata } from "next";
import { absoluteUrl, BRAND_NAME, LINKEDIN_URL } from "../brand";
import { buildLanguageAlternates } from "../i18n/alternates";
import { DEFAULT_LOCALE, getLocaleConfig } from "../i18n/locales";
import { blogFeedAlternates } from "./feed";
import { getPostBySlug, getPostPath, getPostTranslations, type PostSlug } from "./posts";

/** hreflang map across a post's language versions; undefined while it has one. */
export function postLanguageAlternates(slug: PostSlug): Record<string, string> | undefined {
  return buildLanguageAlternates(
    getPostTranslations(slug).map((post) => ({
      lang: getLocaleConfig(post.locale).htmlLang,
      path: getPostPath(post.slug)
    })),
    getLocaleConfig(DEFAULT_LOCALE).htmlLang
  );
}

// One builder for every post's Next.js metadata, so a change to how posts
// present themselves to search engines and social cards happens in one place.
export function buildPostMetadata(slug: PostSlug): Metadata {
  const post = getPostBySlug(slug);
  const path = getPostPath(slug);
  const languages = postLanguageAlternates(slug);

  return {
    // Absolute: the layout's site-name suffix would push post titles past the
    // length search results show.
    title: { absolute: post.seoTitle ?? post.title },
    description: post.description,
    alternates: {
      canonical: path,
      ...(languages ? { languages } : {}),
      types: blogFeedAlternates(post.locale)
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      siteName: BRAND_NAME,
      locale: getLocaleConfig(post.locale).ogLocale,
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
