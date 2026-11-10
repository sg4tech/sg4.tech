import type { Metadata } from "next";
import { PostArticle } from "../../../../components/PostArticle";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import * as content from "./article-content";
import * as tail from "./article-tail";
import styles from "../../../../views/posts/ai-made-starting-free-finishing-expensive.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "nachat-deshevo-zakonchit-dorogo";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word so
// an AI snippet matches the page.
const faqItems = [
  {
    question: "Почему ИИ-агент работает хуже, когда я даю ему несколько задач сразу?",
    answer:
      "Рабочая память агента — его контекстное окно, и она жёстко ограничена. Исследования показывают, что доля успешных решений резко падает, когда в чате копится нерелевантный контекст. Пять задач в одном чате — это размытые детали и забытые решения. Ведите один чат на задачу, а побочную работу отдавайте в другие: с тем же агентом вы выпустите больше.",
    answerNode: (
      <p>
        Рабочая память агента — его контекстное окно, и она жёстко ограничена. Исследования
        показывают, что доля успешных решений резко падает, когда в чате копится нерелевантный
        контекст. Пять задач в одном чате — это размытые детали и забытые решения. Ведите один чат
        на задачу, а побочную работу отдавайте в другие: с тем же агентом вы выпустите больше.
      </p>
    )
  },
  {
    question: "Стоит ли в первую очередь экономить токены?",
    answer:
      "Обычно нет. При базовой гигиене токены — небольшая статья расходов. Дорого обходится незаконченная работа: задачи, которые съели итерации и умерли до продакшена, и очереди, где почти готовые задачи ждут ревью. Сначала добейтесь, чтобы до конца доходило больше задач. Цены на токены — потом, если это вообще понадобится.",
    answerNode: (
      <p>
        Обычно нет. При базовой гигиене токены — небольшая статья расходов. Дорого обходится
        незаконченная работа: задачи, которые съели итерации и умерли до продакшена, и очереди, где
        почти готовые задачи ждут ревью. Сначала добейтесь, чтобы до конца доходило больше задач.
        Цены на токены — потом, если это вообще понадобится.
      </p>
    )
  },
  {
    question: "Делает ли ИИ WIP-лимиты ненужными?",
    answer:
      "Наоборот. WIP-лимиты придумали, потому что начинать соблазнительно, а заканчивать трудно. ИИ сделал начало почти бесплатным: соблазн стал сильнее, а лимит — ценнее. И теперь он нужен вашим агентам так же, как команде.",
    answerNode: (
      <p>
        Наоборот. WIP-лимиты придумали, потому что начинать соблазнительно, а заканчивать трудно.
        ИИ сделал начало почти бесплатным: соблазн стал сильнее, а лимит — ценнее. И теперь он
        нужен вашим агентам так же, как команде.
      </p>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

export default function ArticlePage() {
  return (
    <PostArticle
      original="ai-made-starting-free-finishing-expensive"
      slug={SLUG}
      eyebrow="Разработка с ИИ"
      faqItems={faqItems}
      partOf="diagnostika-razrabotki"
      sections={{ ...content, ...tail }}
      bodyClassName={styles.body}
    />
  );
}
