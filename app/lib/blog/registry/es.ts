import type { EnPostSlug } from "./en";
import type { PostEntry } from "./types";

// Posts translated into this locale. Each sets `translationOf` to the English
// original, which is what links the language versions for hreflang.
export const ES_POST_SLUGS = [
  "donde-falla-la-entrega-de-software",
  "prever-entregas-con-percentiles",
  "mvp-de-vibecoding-estancado",
  "ia-empezar-gratis-terminar-caro",
  "agentes-de-ia-periferia-y-nucleo",
  "entropia-del-codigo-controles-ci"
] as const;
export type EsPostSlug = (typeof ES_POST_SLUGS)[number];

export const esPosts: ReadonlyArray<PostEntry<EsPostSlug, EnPostSlug>> = [
  {
    slug: "donde-falla-la-entrega-de-software",
    locale: "es",
    translationOf: "diagnose-broken-engineering-delivery",
    title: "Cómo diagnosticar dónde falla de verdad la entrega de software",
    seoTitle: "Dónde falla la entrega de software y cómo diagnosticarlo",
    description:
      "Guía de métricas para líderes técnicos: divide el T2M en Lead Time y Cycle Time, encuentra el cuello de botella con la ley de Little y fija límites de WIP.",
    publishedAt: "2026-05-22",
    modifiedAt: "2026-05-22",
    readingMinutes: 20,
    tags: ["métricas de desarrollo", "entrega de software", "WIP", "teoría de restricciones"]
  },
  {
    slug: "prever-entregas-con-percentiles",
    locale: "es",
    translationOf: "forecast-delivery-with-percentiles",
    title: "El lead time medio te engaña: cómo prever entregas con percentiles",
    seoTitle: "El lead time medio engaña: prevé entregas con percentiles",
    description:
      "El lead time medio oculta cómo funciona tu entrega. Prevé con la mediana, la dispersión y los percentiles p85/p95 para dar fechas que sí puedes cumplir.",
    publishedAt: "2026-05-29",
    modifiedAt: "2026-05-29",
    readingMinutes: 8,
    tags: ["previsión de entregas", "lead time", "percentiles", "previsibilidad", "métricas de flujo"]
  },
  {
    slug: "mvp-de-vibecoding-estancado",
    locale: "es",
    translationOf: "vibecoded-mvp-stopped-shipping",
    title: "MVP de vibecoding estancado: gestiona la IA como a un junior",
    description:
      "Un MVP de vibecoding se atasca como el código de juniors. Gestiona los agentes de IA con las prácticas de siempre para juniors: un caso real con cifras.",
    publishedAt: "2026-06-11",
    modifiedAt: "2026-06-11",
    readingMinutes: 9,
    tags: ["vibecoding", "código generado por IA", "controles automáticos", "proceso de entrega"]
  },
  {
    slug: "ia-empezar-gratis-terminar-caro",
    locale: "es",
    translationOf: "ai-made-starting-free-finishing-expensive",
    title: "Con la IA, empezar el trabajo es casi gratis. Terminarlo sigue siendo caro.",
    seoTitle: "Con IA, empezar es casi gratis. Terminar sigue siendo caro",
    description:
      "Los equipos con IA empiezan más trabajo que nunca y entregan lo mismo. La ley de Little aplicada a agentes: un hilo por tarea y límites de WIP.",
    publishedAt: "2026-07-11",
    modifiedAt: "2026-07-11",
    readingMinutes: 8,
    tags: ["entrega con IA", "WIP", "ley de Little", "cambio de contexto", "métricas de entrega"]
  },
  {
    slug: "agentes-de-ia-periferia-y-nucleo",
    locale: "es",
    translationOf: "ai-coding-agent-periphery-core",
    title: "Agentes de IA para programar: dales la periferia, deja el núcleo a las personas",
    seoTitle: "Qué delegar a los agentes de IA: periferia frente a núcleo",
    description:
      "Los agentes de IA para programar brillan en unas tareas y son peligrosos en otras. Qué delegar: dales la periferia y deja el núcleo en manos de personas.",
    publishedAt: "2026-07-12",
    modifiedAt: "2026-07-12",
    readingMinutes: 6,
    tags: ["agentes de IA", "IA en la empresa", "IA autoalojada", "entrega de software"]
  },
  {
    slug: "entropia-del-codigo-controles-ci",
    locale: "es",
    translationOf: "code-entropy-ci-checks-ai-legacy",
    title: "Entropía del código: cómo los controles de CI frenan el legacy que acumula la IA",
    seoTitle: "Evita la deuda técnica que genera la IA con controles de CI",
    description:
      "La entropía del código crece sola y los agentes de IA la aceleran. Siete niveles de controles de CI contra el legacy, con herramientas para Python, PHP y JS/TS.",
    publishedAt: "2026-10-08",
    modifiedAt: "2026-10-08",
    readingMinutes: 7,
    tags: ["agentes de IA", "código generado por IA", "controles de CI", "calidad del código", "arquitectura de software"]
  }
];
