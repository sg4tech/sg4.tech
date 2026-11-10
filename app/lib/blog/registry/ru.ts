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
    title: "Где ломается разработка и как найти узкое место",
    seoTitle: "Метрики разработки: как найти узкое место",
    description:
      "Почему разработка буксует и как это проверить: разложите T2M на Lead Time и Cycle Time, посчитайте задачи по статусам и ограничьте WIP.",
    publishedAt: "2026-05-22",
    modifiedAt: "2026-05-22",
    readingMinutes: 18,
    tags: ["метрики разработки", "выпуск продукта", "WIP", "теория ограничений"]
  },
  {
    slug: "prognoz-srokov-percentili",
    locale: "ru",
    translationOf: "forecast-delivery-with-percentiles",
    title: "Средний Lead Time вам врёт. Как называть сроки по перцентилям",
    seoTitle: "Средний Lead Time врёт: прогноз сроков по перцентилям",
    description:
      "Средний Lead Time прячет, как на деле идёт разработка. Медиана, разброс и перцентили p85/p95 дают сроки, к которым команда успевает.",
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
      "MVP после вайбкодинга буксует так же, как всегда буксовал код джунов. Управляйте ИИ-агентом как джуном: ревью, тесты, CI, мониторинг. Кейс с цифрами.",
    publishedAt: "2026-06-11",
    modifiedAt: "2026-06-11",
    readingMinutes: 9,
    tags: ["вайбкодинг", "код от ИИ", "автопроверки", "процесс разработки"]
  },
  {
    slug: "nachat-deshevo-zakonchit-dorogo",
    locale: "ru",
    translationOf: "ai-made-starting-free-finishing-expensive",
    title: "С ИИ начать стало почти бесплатно. Закончить — всё ещё дорого",
    seoTitle: "С ИИ начать почти бесплатно. Закончить — всё ещё дорого",
    description:
      "С ИИ-агентами команды начинают больше задач, а выпускают столько же. Закон Литтла для агентов, правило «один чат — одна задача» и WIP-лимиты.",
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
    seoTitle: "Что поручать ИИ-агентам в разработке, а что — людям",
    description:
      "Одну работу ИИ-агенты делают блестяще, в другой опасны. Разбираю, что им поручать: периферию — агентам, ядро — людям.",
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
    seoTitle: "Техдолг от ИИ: как его сдерживают проверки в CI",
    description:
      "Энтропия кода растёт сама, а ИИ-агенты её ускоряют. Семь уровней проверок в CI, которые не дают копиться легаси, и инструменты для Python, PHP и JS/TS.",
    publishedAt: "2026-10-08",
    modifiedAt: "2026-10-08",
    readingMinutes: 6,
    tags: ["ИИ-агенты", "код от ИИ", "проверки в CI", "качество кода", "архитектура ПО"]
  }
];
