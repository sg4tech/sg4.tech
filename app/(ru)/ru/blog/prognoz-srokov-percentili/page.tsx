import type { Metadata } from "next";
import { PostArticle } from "../../../../components/PostArticle";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import * as content from "./article-content";
import * as tail from "./article-tail";
import styles from "../../../../views/posts/forecast-delivery-with-percentiles.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "prognoz-srokov-percentili";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word (dl
// flattened to "term: definition." prose) so an AI snippet matches the page.
const faqItems = [
  {
    question: "Почему средний Lead Time — обманчивая метрика?",
    answer:
      "Несколько медленных выбросов тянут среднее арифметическое вверх, и оно оказывается заметно выше того, сколько занимает большинство задач. Среднее описывает систему, которой не существует: большая часть работы идёт быстрее, а несколько задач — намного медленнее. Поэтому прогноз по среднему ошибается в обе стороны.",
    answerNode: (
      <p>
        Несколько медленных выбросов тянут среднее арифметическое вверх, и оно оказывается заметно
        выше того, сколько занимает большинство задач. Среднее описывает систему, которой не
        существует: большая часть работы идёт быстрее, а несколько задач — намного медленнее.
        Поэтому прогноз по среднему ошибается в обе стороны.
      </p>
    )
  },
  {
    question: "Чем медиана Lead Time отличается от среднего?",
    answer:
      "Медиана: типичная задача, та, что посередине. Половина задач завершается быстрее, половина — медленнее. Среднее: арифметическое среднее, которое длинный хвост застрявших задач может сильно исказить. Если среднее намного выше медианы, у вас большой разброс и проблема с очередями. Если они близки, система стабильна.",
    answerNode: (
      <>
        <dl>
          <dt>Медиана</dt>
          <dd>Типичная задача, та, что посередине. Половина задач завершается быстрее, половина — медленнее.</dd>
          <dt>Среднее</dt>
          <dd>Арифметическое среднее, которое длинный хвост застрявших задач может сильно исказить.</dd>
        </dl>
        <p>
          Если среднее намного выше медианы, у вас большой разброс и проблема с очередями. Если они
          близки, система стабильна.
        </p>
      </>
    )
  },
  {
    question: "Как назвать срок, в который команда действительно успеет?",
    answer:
      "Берите его из перцентиля (p85/p95) распределения Cycle Time. Оценка по среднему «на глаз» для этого не годится. Наружу вы по-прежнему называете одну дату, просто ту, в которую система, судя по данным, успевает. Вы обещаете дату, а вероятность держите при себе.",
    answerNode: (
      <>
        <p>
          Берите его из перцентиля (p85/p95) распределения Cycle Time. Оценка по среднему «на глаз»
          для этого не годится. Наружу вы по-прежнему называете одну дату, просто ту, в которую
          система, судя по данным, успевает.
        </p>
        <p className={styles.faqHighlight}>Вы обещаете дату, а вероятность держите при себе.</p>
      </>
    )
  },
  {
    question: "Где посмотреть медиану и перцентили?",
    answer:
      "Control Chart в Jira и точечные диаграммы Cycle Time показывают среднее, медиану и перцентили по данным, которые у вас уже есть, без ручного учёта времени. То же есть в большинстве трекеров с модулем аналитики потока.",
    answerNode: (
      <p>
        Control Chart в Jira и точечные диаграммы Cycle Time показывают среднее, медиану и
        перцентили по данным, которые у вас уже есть, без ручного учёта времени. То же есть в
        большинстве трекеров с модулем аналитики потока.
      </p>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

export default function ArticlePage() {
  return (
    <PostArticle
      original="forecast-delivery-with-percentiles"
      slug={SLUG}
      eyebrow="Метрики разработки"
      faqItems={faqItems}
      partOf="diagnostika-razrabotki"
      sections={{ ...content, ...tail }}
      bodyClassName={styles.body}
    />
  );
}
