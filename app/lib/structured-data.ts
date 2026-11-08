import { absoluteUrl, personSchema, type SitePath } from "./brand";
import type { Locale } from "./i18n/locales";
import { pagePath, type PageKey } from "./i18n/pages";

// A question with its plain-text answer, as engines read it from FAQPage
// JSON-LD. Pages may render a richer answer for people; the schema text stays.
export type FaqSchemaEntry = {
  question: string;
  answer: string;
};

// schema.org FAQPage node for the FAQ on the page at `path`.
export function buildFaqPageSchema(path: SitePath, items: ReadonlyArray<FaqSchemaEntry>) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

// What a landing offers, as its schema.org ProfessionalService node says it.
export type ServiceInfo = {
  name: string;
  serviceType: string;
  description: string;
};

// Service fields only some landings state. Named, so they cannot overwrite the
// node's @id, url, or description, which come from the registry and content.
type ServiceExtra = {
  areaServed?: string;
  sameAs?: ReadonlyArray<string>;
};

// A landing's JSON-LD graph: the shared Person, the page's service (operated by
// that Person), and its FAQ.
export function buildLandingStructuredData(
  locale: Locale,
  page: PageKey,
  service: ServiceInfo,
  faq: ReadonlyArray<FaqSchemaEntry>,
  serviceExtra: ServiceExtra = {}
) {
  const path = pagePath(locale, page);
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      {
        "@type": "ProfessionalService",
        "@id": `${absoluteUrl(path)}#service`,
        name: service.name,
        url: absoluteUrl(path),
        serviceType: service.serviceType,
        description: service.description,
        ...serviceExtra,
        founder: { "@id": personSchema["@id"] }
      },
      buildFaqPageSchema(path, faq)
    ]
  };
}
