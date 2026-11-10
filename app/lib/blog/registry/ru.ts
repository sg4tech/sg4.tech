import type { EnPostSlug } from "./en";
import type { PostEntry } from "./types";

// Posts translated into this locale. Each sets `translationOf` to the English
// original, which is what links the language versions for hreflang.
export const RU_POST_SLUGS = [
  "diagnostika-razrabotki",
  "prognoz-srokov-percentili",
  "mvp-posle-vaibkodinga",
  "nachat-deshevo-zakonchit-dorogo",
  "ii-agenty-periferiya-yadro",
  "entropiya-koda-proverki-ci"
] as const;
export type RuPostSlug = (typeof RU_POST_SLUGS)[number];

export const ruPosts: ReadonlyArray<PostEntry<RuPostSlug, EnPostSlug>> = [
  {
    slug: "diagnostika-razrabotki",
    locale: "ru",
    translationOf: "diagnose-broken-engineering-delivery",
    title: "Как найти, где на самом деле ломается разработка",
    seoTitle: "Метрики разработки: как найти узкое место",
    description:
      "Метрики для руководителя разработки: разложите T2M на Lead Time и Cycle Time, найдите узкое место по закону Литтла и введите WIP-лимиты.",
    publishedAt: "2026-05-22",
    modifiedAt: "2026-05-22",
    readingMinutes: 18,
    tags: ["метрики разработки", "выпуск продукта", "WIP", "теория ограничений"]
  },
  {
    slug: "prognoz-srokov-percentili",
    locale: "ru",
    translationOf: "forecast-delivery-with-percentiles",
    title: "Средний Lead Time вам врёт. Прогнозируйте сроки по перцентилям",
    seoTitle: "Средний Lead Time врёт: прогноз сроков по перцентилям",
    description:
      "Средний Lead Time скрывает, как реально работает разработка. Прогнозируйте по медиане, разбросу и перцентилям p85/p95 и называйте сроки, которые выдержите.",
    publishedAt: "2026-05-29",
    modifiedAt: "2026-05-29",
    readingMinutes: 6,
    tags: ["прогноз сроков", "Lead Time", "перцентили", "предсказуемость", "метрики потока"]
  },
  {
    slug: "mvp-posle-vaibkodinga",
    locale: "ru",
    translationOf: "vibecoded-mvp-stopped-shipping",
    title: "MVP после вайбкодинга перестал выходить в релиз. Управляйте ИИ как джуном",
    seoTitle: "MVP после вайбкодинга застрял: управляйте ИИ как джуном",
    description:
      "MVP после вайбкодинга буксует так же, как всегда буксовал код джунов. Управляйте ИИ-агентами по правилам работы с джунами. Реальный кейс с цифрами.",
    publishedAt: "2026-06-11",
    modifiedAt: "2026-06-11",
    readingMinutes: 9,
    tags: ["вайбкодинг", "код от ИИ", "автопроверки", "процесс разработки"]
  },
  {
    slug: "nachat-deshevo-zakonchit-dorogo",
    locale: "ru",
    translationOf: "ai-made-starting-free-finishing-expensive",
    title: "С ИИ начать работу стало почти бесплатно. Закончить — всё ещё дорого",
    seoTitle: "С ИИ начать почти бесплатно. Закончить — всё ещё дорого",
    description:
      "Команды с ИИ начинают больше задач, чем когда-либо, а выпускают столько же. Закон Литтла для агентов, правило «один тред — одна задача» и WIP-лимиты.",
    publishedAt: "2026-07-11",
    modifiedAt: "2026-07-11",
    readingMinutes: 7,
    tags: ["разработка с ИИ", "WIP", "закон Литтла", "переключение контекста", "метрики разработки"]
  },
  {
    slug: "ii-agenty-periferiya-yadro",
    locale: "ru",
    translationOf: "ai-coding-agent-periphery-core",
    title: "ИИ-агентам в разработке — периферию, людям — ядро",
    seoTitle: "Что поручать ИИ-агентам в разработке: периферия и ядро",
    description:
      "С одной работой ИИ-агенты справляются блестяще, в другой опасны. Что им поручать: отдайте агентам периферию, а ядро оставьте людям.",
    publishedAt: "2026-07-12",
    modifiedAt: "2026-07-12",
    readingMinutes: 5,
    tags: ["ИИ-агенты", "ИИ в компании", "свой ИИ-контур", "процесс разработки"]
  },
  {
    slug: "entropiya-koda-proverki-ci",
    locale: "ru",
    translationOf: "code-entropy-ci-checks-ai-legacy",
    title: "Энтропия кода: как проверки в CI не дают ИИ плодить легаси",
    seoTitle: "Техдолг от ИИ: как его останавливают проверки в CI",
    description:
      "Энтропия кода растёт сама, а ИИ-агенты её ускоряют. Семь уровней проверок в CI, которые не дают копиться легаси, и инструменты для Python, PHP и JS/TS.",
    publishedAt: "2026-10-08",
    modifiedAt: "2026-10-08",
    readingMinutes: 6,
    tags: ["ИИ-агенты", "код от ИИ", "проверки в CI", "качество кода", "архитектура ПО"]
  }
];
