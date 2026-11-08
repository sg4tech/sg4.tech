import { SITE_URL } from "./brand";
import type { SitePath } from "./i18n/locales";

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
    "@id": `${SITE_URL}${path}#faq`,
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
