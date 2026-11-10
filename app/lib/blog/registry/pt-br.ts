import type { EnPostSlug } from "./en";
import type { PostEntry } from "./types";

// Posts translated into this locale. Each sets `translationOf` to the English
// original, which is what links the language versions for hreflang.
export const PT_BR_POST_SLUGS = [
  "diagnosticar-gargalos-na-entrega",
  "previsao-de-entrega-com-percentis",
  "mvp-de-vibecoding-parou-de-entregar",
  "ia-comecar-e-barato-terminar-e-caro",
  "agentes-de-ia-periferia-e-nucleo",
  "entropia-do-codigo-verificacoes-de-ci"
] as const;
export type PtBrPostSlug = (typeof PT_BR_POST_SLUGS)[number];

export const ptBrPosts: ReadonlyArray<PostEntry<PtBrPostSlug, EnPostSlug>> = [
  {
    slug: "diagnosticar-gargalos-na-entrega",
    locale: "pt-br",
    translationOf: "diagnose-broken-engineering-delivery",
    title: "Como diagnosticar onde a entrega de software realmente trava",
    seoTitle: "Como diagnosticar onde a entrega de software trava",
    description:
      "Um guia de métricas para líderes de engenharia: separe o T2M em Lead Time e Cycle Time, ache o gargalo de WIP com a Lei de Little e defina limites de WIP.",
    publishedAt: "2026-05-22",
    modifiedAt: "2026-05-22",
    readingMinutes: 19,
    tags: ["métricas de engenharia", "entrega", "WIP", "Teoria das Restrições"]
  },
  {
    slug: "previsao-de-entrega-com-percentis",
    locale: "pt-br",
    translationOf: "forecast-delivery-with-percentiles",
    title: "O lead time médio engana você: como prever entregas com percentis",
    seoTitle: "Lead time médio engana: preveja entregas com percentis",
    description:
      "O lead time médio esconde como as entregas realmente funcionam. Use mediana, dispersão e percentis p85/p95 para prometer datas que você consegue cumprir.",
    publishedAt: "2026-05-29",
    modifiedAt: "2026-05-29",
    readingMinutes: 7,
    tags: ["previsão de entregas", "lead time", "percentis", "previsibilidade", "métricas de fluxo"]
  },
  {
    slug: "mvp-de-vibecoding-parou-de-entregar",
    locale: "pt-br",
    translationOf: "vibecoded-mvp-stopped-shipping",
    title: "Seu MVP de vibecoding travou: gerencie a IA como um júnior",
    seoTitle: "MVP de vibecoding travado: gerencie a IA como um júnior",
    description:
      "Um MVP feito com vibecoding trava como todo código escrito por juniores. Gerencie agentes de IA com as práticas usadas com juniores: um caso real, com números.",
    publishedAt: "2026-06-11",
    modifiedAt: "2026-06-11",
    readingMinutes: 9,
    tags: ["vibecoding", "código gerado por IA", "verificações automáticas", "sistema de entrega"]
  },
  {
    slug: "ia-comecar-e-barato-terminar-e-caro",
    locale: "pt-br",
    translationOf: "ai-made-starting-free-finishing-expensive",
    title: "A IA deixou começar quase de graça. Terminar continua caro.",
    description:
      "Equipes com IA começam mais trabalho do que nunca e entregam o mesmo. A Lei de Little aplicada a agentes, e por que vale uma tarefa por thread e limites de WIP.",
    publishedAt: "2026-07-11",
    modifiedAt: "2026-07-11",
    readingMinutes: 7,
    tags: ["entrega com IA", "WIP", "Lei de Little", "troca de contexto", "métricas de entrega"]
  },
  {
    slug: "agentes-de-ia-periferia-e-nucleo",
    locale: "pt-br",
    translationOf: "ai-coding-agent-periphery-core",
    title: "Agentes de IA no código: a periferia para eles, o núcleo para as pessoas",
    seoTitle: "O que delegar a agentes de IA: periferia ou núcleo",
    description:
      "Agentes de IA são brilhantes em parte do trabalho e perigosos em outra. O que delegar: deixe a periferia com eles e o núcleo com as pessoas.",
    publishedAt: "2026-07-12",
    modifiedAt: "2026-07-12",
    readingMinutes: 5,
    tags: ["agentes de IA", "IA corporativa", "IA auto-hospedada", "entrega de software"]
  },
  {
    slug: "entropia-do-codigo-verificacoes-de-ci",
    locale: "pt-br",
    translationOf: "code-entropy-ci-checks-ai-legacy",
    title: "Entropia do código: como verificações de CI impedem a IA de acumular legado",
    seoTitle: "Dívida técnica gerada por IA: evite com verificações de CI",
    description:
      "A entropia do código cresce sozinha, e a IA acelera isso. Sete níveis de verificações de CI que barram o legado, com ferramentas para Python, PHP e JS/TS.",
    publishedAt: "2026-10-08",
    modifiedAt: "2026-10-08",
    readingMinutes: 6,
    tags: ["agentes de IA", "código gerado por IA", "verificações de CI", "qualidade de código", "arquitetura de software"]
  }
];
