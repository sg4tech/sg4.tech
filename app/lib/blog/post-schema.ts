import { personSchema, SITE_URL } from "../brand";
import { getPostBySlug, type PostSlug } from "./posts";

// One builder for every post's JSON-LD graph (Person, Article, FAQPage,
// BreadcrumbList), so posts differ only in their data, not in schema shape.

export type FaqSchemaEntry = {
  question: string;
  /** Plain-text answer; must mirror the rendered answer word-for-word so an AI snippet matches the page. */
  answer: string;
};

type PostSchemaOptions = {
  /** Article headline when the on-page H1 differs from the registry title. */
  headline?: string;
  /** Pillar post this one belongs to; links the two in the entity graph so engines route topical authority between them. */
  partOf?: PostSlug;
};

const articleId = (slug: PostSlug): string => `${SITE_URL}/blog/${slug}/#article`;

function buildArticleSchema(slug: PostSlug, options: PostSchemaOptions) {
  const post = getPostBySlug(slug);
  const postUrl = `${SITE_URL}/blog/${slug}/`;

  return {
    "@type": "Article",
    "@id": articleId(slug),
    mainEntityOfPage: postUrl,
    url: postUrl,
    headline: options.headline ?? post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt,
    inLanguage: "en",
    // Image required for Google Article rich-result cards; reuse the generated OG
    // PNG so the schema asset always matches the one used by social scrapers.
    image: {
      "@type": "ImageObject",
      url: `${postUrl}opengraph-image.png`,
      width: 1200,
      height: 630
    },
    author: { "@id": `${SITE_URL}/#person` },
    // Publisher = Person (same @id as author): sg4.tech is a personal brand, not a
    // separate organization. Victor is both author and publishing entity.
    publisher: { "@id": `${SITE_URL}/#person` },
    ...(options.partOf ? { isPartOf: { "@id": articleId(options.partOf) } } : {}),
    keywords: post.tags.join(", ")
  };
}

function buildFaqPageSchema(slug: PostSlug, faqItems: ReadonlyArray<FaqSchemaEntry>) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/blog/${slug}/#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

function buildBreadcrumbSchema(slug: PostSlug) {
  const post = getPostBySlug(slug);
  const postUrl = `${SITE_URL}/blog/${slug}/`;

  return {
    "@type": "BreadcrumbList",
    "@id": `${postUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl }
    ]
  };
}

export function buildPostStructuredData(
  slug: PostSlug,
  faqItems: ReadonlyArray<FaqSchemaEntry>,
  options: PostSchemaOptions = {}
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      buildArticleSchema(slug, options),
      buildFaqPageSchema(slug, faqItems),
      buildBreadcrumbSchema(slug)
    ]
  };
}
