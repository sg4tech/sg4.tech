import { absoluteUrl, personSchema } from "../brand";
import { getLocaleConfig } from "../i18n/locales";
import { pagePath } from "../i18n/pages";
import { getNavigationLabel } from "../navigation";
import { buildFaqPageSchema, type FaqSchemaEntry } from "../structured-data";
import { getPostBySlug, getPostPath, getPostUrl, type PostSlug } from "./posts";

// One builder for every post's JSON-LD graph (Person, Article, FAQPage,
// BreadcrumbList), so posts differ only in their data, not in schema shape.

type PostSchemaOptions = {
  /** Article headline when the on-page H1 differs from the registry title. */
  headline?: string;
  /** Pillar post this one belongs to; links the two in the entity graph so engines route topical authority between them. */
  partOf?: PostSlug;
};

const articleId = (slug: PostSlug): string => `${getPostUrl(slug)}#article`;

function buildArticleSchema(slug: PostSlug, options: PostSchemaOptions) {
  const post = getPostBySlug(slug);
  const url = getPostUrl(slug);

  return {
    "@type": "Article",
    "@id": articleId(slug),
    mainEntityOfPage: url,
    url,
    headline: options.headline ?? post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt,
    inLanguage: getLocaleConfig(post.locale).htmlLang,
    // Image required for Google Article rich-result cards; reuse the generated OG
    // PNG so the schema asset always matches the one used by social scrapers.
    image: {
      "@type": "ImageObject",
      url: `${url}opengraph-image.png`,
      width: 1200,
      height: 630
    },
    author: { "@id": personSchema["@id"] },
    // Publisher = Person (same @id as author): sg4.tech is a personal brand, not a
    // separate organization. Victor is both author and publishing entity.
    publisher: { "@id": personSchema["@id"] },
    ...(options.partOf ? { isPartOf: { "@id": articleId(options.partOf) } } : {}),
    keywords: post.tags.join(", ")
  };
}

// Crumbs reuse the locale's menu labels and the page registry's paths, so the
// trail reads like the nav and never points at a page missing in that locale.
function buildBreadcrumbSchema(slug: PostSlug) {
  const { locale, title } = getPostBySlug(slug);
  const url = getPostUrl(slug);

  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: getNavigationLabel(locale, "home"), item: absoluteUrl(pagePath(locale, "home")) },
      { "@type": "ListItem", position: 2, name: getNavigationLabel(locale, "blog"), item: absoluteUrl(pagePath(locale, "blog")) },
      { "@type": "ListItem", position: 3, name: title, item: url }
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
      buildFaqPageSchema(getPostPath(slug), faqItems),
      buildBreadcrumbSchema(slug)
    ]
  };
}
