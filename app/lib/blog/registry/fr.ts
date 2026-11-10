import type { EnPostSlug } from "./en";
import type { PostEntry } from "./types";

// Posts translated into this locale. Each sets `translationOf` to the English
// original, which is what links the language versions for hreflang.
export const FR_POST_SLUGS = [
  "diagnostiquer-livraison-logicielle",
  "prevoir-livraisons-percentiles",
  "mvp-vibe-coding-bloque",
  "ia-demarrer-gratuit-finir-cher",
  "agents-ia-code-peripherie-coeur",
  "entropie-code-controles-ci-ia"
] as const;
export type FrPostSlug = (typeof FR_POST_SLUGS)[number];

export const frPosts: ReadonlyArray<PostEntry<FrPostSlug, EnPostSlug>> = [
  {
    slug: "diagnostiquer-livraison-logicielle",
    locale: "fr",
    translationOf: "diagnose-broken-engineering-delivery",
    title: "Diagnostiquer où vos livraisons bloquent vraiment",
    seoTitle: "Diagnostiquer où la livraison logicielle bloque vraiment",
    description:
      "Les métriques d’un responsable technique : découper le T2M en Lead Time et Cycle Time, trouver le goulot avec la loi de Little et fixer des limites de WIP.",
    publishedAt: "2026-05-22",
    modifiedAt: "2026-05-22",
    readingMinutes: 20,
    tags: ["métriques de développement", "livraison", "WIP", "théorie des contraintes"]
  },
  {
    slug: "prevoir-livraisons-percentiles",
    locale: "fr",
    translationOf: "forecast-delivery-with-percentiles",
    title: "Le lead time moyen vous trompe : prévoyez vos livraisons avec les percentiles",
    seoTitle: "Lead time moyen trompeur : prévoir avec les percentiles",
    description:
      "Le lead time moyen cache le vrai comportement de vos livraisons. Prévoyez avec la médiane, la dispersion et les percentiles p85/p95 pour tenir vos dates.",
    publishedAt: "2026-05-29",
    modifiedAt: "2026-05-29",
    readingMinutes: 8,
    tags: ["prévision des livraisons", "lead time", "percentiles", "prévisibilité", "métriques de flux"]
  },
  {
    slug: "mvp-vibe-coding-bloque",
    locale: "fr",
    translationOf: "vibecoded-mvp-stopped-shipping",
    title: "Votre MVP en vibe coding est à l’arrêt : gérez l’IA comme un junior",
    seoTitle: "MVP en vibe coding bloqué : gérez l’IA comme un junior",
    description:
      "Un MVP en vibe coding s’enlise comme le code écrit par des juniors. Encadrez vos agents IA comme des juniors : un cas réel, chiffres à l’appui.",
    publishedAt: "2026-06-11",
    modifiedAt: "2026-06-11",
    readingMinutes: 9,
    tags: ["vibe coding", "code généré par l’IA", "garde-fous", "système de livraison"]
  },
  {
    slug: "ia-demarrer-gratuit-finir-cher",
    locale: "fr",
    translationOf: "ai-made-starting-free-finishing-expensive",
    title: "L’IA a rendu le démarrage presque gratuit. Finir coûte toujours cher.",
    seoTitle: "Avec l’IA, démarrer est gratuit. Finir coûte toujours cher.",
    description:
      "Avec l’IA, les équipes lancent plus de travail que jamais et livrent autant qu’avant. La loi de Little appliquée aux agents : une tâche par fil, un WIP limité.",
    publishedAt: "2026-07-11",
    modifiedAt: "2026-07-11",
    readingMinutes: 8,
    tags: ["livraison assistée par l’IA", "WIP", "loi de Little", "changement de contexte", "métriques de livraison"]
  },
  {
    slug: "agents-ia-code-peripherie-coeur",
    locale: "fr",
    translationOf: "ai-coding-agent-periphery-core",
    title: "Agents IA de code : la périphérie pour eux, le cœur pour les humains",
    seoTitle: "Que déléguer aux agents IA de code : périphérie ou cœur",
    description:
      "Les agents IA de code excellent sur certaines tâches et sont dangereux sur d’autres. Que leur déléguer : la périphérie à l’agent, le cœur aux humains.",
    publishedAt: "2026-07-12",
    modifiedAt: "2026-07-12",
    readingMinutes: 6,
    tags: ["agents IA de code", "IA en entreprise", "IA auto-hébergée", "livraison logicielle"]
  },
  {
    slug: "entropie-code-controles-ci-ia",
    locale: "fr",
    translationOf: "code-entropy-ci-checks-ai-legacy",
    title: "Entropie du code : des contrôles CI pour que l’IA n’empile pas du legacy",
    seoTitle: "Éviter la dette technique générée par l’IA grâce à la CI",
    description:
      "L’entropie du code croît d’elle-même, et les agents IA l’accélèrent. Sept niveaux de contrôles CI contre le legacy, avec des outils pour Python, PHP et JS/TS.",
    publishedAt: "2026-10-08",
    modifiedAt: "2026-10-08",
    readingMinutes: 7,
    tags: ["agents IA de code", "code généré par l’IA", "garde-fous CI", "qualité du code", "architecture logicielle"]
  }
];
