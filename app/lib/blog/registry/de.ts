import type { EnPostSlug } from "./en";
import type { PostEntry } from "./types";

// Posts translated into this locale. Each sets `translationOf` to the English
// original, which is what links the language versions for hreflang.
export const DE_POST_SLUGS = [
  "engpaesse-in-der-entwicklung-finden",
  "lieferprognose-mit-perzentilen",
  "vibecoding-mvp-keine-releases-mehr",
  "ki-anfangen-billig-fertigstellen-teuer",
  "ki-coding-agenten-peripherie-kern",
  "code-entropie-ci-checks-ki-altlasten"
] as const;
export type DePostSlug = (typeof DE_POST_SLUGS)[number];

export const dePosts: ReadonlyArray<PostEntry<DePostSlug, EnPostSlug>> = [
  {
    slug: "engpaesse-in-der-entwicklung-finden",
    locale: "de",
    translationOf: "diagnose-broken-engineering-delivery",
    title: "So finden Sie heraus, wo Ihre Software-Delivery wirklich hakt",
    seoTitle: "Engpässe in der Softwareentwicklung mit Metriken finden",
    description:
      "Ein Metrik-Leitfaden für technische Leiter: T2M in Lead Time und Cycle Time zerlegen, den WIP-Engpass mit Little's Law finden und WIP-Limits setzen.",
    publishedAt: "2026-05-22",
    modifiedAt: "2026-05-22",
    readingMinutes: 20,
    tags: ["Entwicklungsmetriken", "Software-Delivery", "WIP", "Engpasstheorie"]
  },
  {
    slug: "lieferprognose-mit-perzentilen",
    locale: "de",
    translationOf: "forecast-delivery-with-percentiles",
    title: "Die durchschnittliche Lead Time täuscht: Liefertermine mit Perzentilen prognostizieren",
    seoTitle: "Mittlere Lead Time täuscht: Termine mit Perzentilen planen",
    description:
      "Die durchschnittliche Lead Time verdeckt, wie Ihre Entwicklung wirklich liefert. Mit Median, Streuung und p85/p95 sagen Sie Termine zu, die Sie auch halten.",
    publishedAt: "2026-05-29",
    modifiedAt: "2026-05-29",
    readingMinutes: 6,
    tags: ["Lieferprognose", "Lead Time", "Perzentile", "Planbarkeit", "Flow-Metriken"]
  },
  {
    slug: "vibecoding-mvp-keine-releases-mehr",
    locale: "de",
    translationOf: "vibecoded-mvp-stopped-shipping",
    title: "Ihr Vibecoding-MVP schafft keine Releases mehr: Führen Sie die KI wie einen Junior",
    seoTitle: "Vibecoding-MVP stockt: Führen Sie die KI wie einen Junior",
    description:
      "Ein Vibecoding-MVP gerät ins Stocken wie jede Codebasis von Juniors. Führen Sie KI-Coding-Agenten mit bewährten Junior-Praktiken – ein echter Fall mit Zahlen.",
    publishedAt: "2026-06-11",
    modifiedAt: "2026-06-11",
    readingMinutes: 10,
    tags: ["Vibecoding", "KI-generierter Code", "Leitplanken", "Entwicklungsprozess"]
  },
  {
    slug: "ki-anfangen-billig-fertigstellen-teuer",
    locale: "de",
    translationOf: "ai-made-starting-free-finishing-expensive",
    title: "KI macht das Anfangen fast kostenlos. Das Fertigstellen bleibt teuer.",
    seoTitle: "KI macht Anfangen kostenlos. Fertigstellen bleibt teuer.",
    description:
      "Teams mit KI beginnen mehr Arbeit als je zuvor, liefern aber kaum mehr aus. Little's Law für Agenten – und warum ein Thread pro Aufgabe und WIP-Limits helfen.",
    publishedAt: "2026-07-11",
    modifiedAt: "2026-07-11",
    readingMinutes: 8,
    tags: ["KI-gestützte Entwicklung", "WIP", "Little's Law", "Kontextwechsel", "Delivery-Metriken"]
  },
  {
    slug: "ki-coding-agenten-peripherie-kern",
    locale: "de",
    translationOf: "ai-coding-agent-periphery-core",
    title: "KI-Coding-Agenten: Die Peripherie für die KI, der Kern für Menschen",
    seoTitle: "Was Sie an KI-Coding-Agenten abgeben: Peripherie und Kern",
    description:
      "KI-Coding-Agenten glänzen bei mancher Arbeit und sind bei anderer gefährlich. Was Sie abgeben sollten: die Peripherie an die Agenten, den Kern an Menschen.",
    publishedAt: "2026-07-12",
    modifiedAt: "2026-07-12",
    readingMinutes: 4,
    tags: ["KI-Coding-Agenten", "KI im Unternehmen", "selbst gehostete KI", "Software-Delivery"]
  },
  {
    slug: "code-entropie-ci-checks-ki-altlasten",
    locale: "de",
    translationOf: "code-entropy-ci-checks-ai-legacy",
    title: "Code-Entropie: Wie CI-Checks verhindern, dass KI Altlasten anhäuft",
    seoTitle: "Technische Schulden aus KI-Code mit CI-Checks verhindern",
    description:
      "Code-Entropie wächst von selbst, und KI-Coding-Agenten beschleunigen sie. Sieben Ebenen von CI-Checks gegen neue Altlasten, mit Tools für Python, PHP und JS/TS.",
    publishedAt: "2026-10-08",
    modifiedAt: "2026-10-08",
    readingMinutes: 7,
    tags: ["KI-Coding-Agenten", "KI-generierter Code", "CI-Leitplanken", "Codequalität", "Softwarearchitektur"]
  }
];
