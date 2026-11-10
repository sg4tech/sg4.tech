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
      "Потому что рабочая память агента — его контекстное окно — жёстко ограничена, а исследования показывают, что доля успешных решений резко падает, когда в треде копится нерелевантный контекст. Пять задач в одном разговоре — это размытые детали и забытые решения. Ведите один тред на задачу, а побочную работу отправляйте в другие треды: с тем же агентом вы выпустите больше.",
    answerNode: (
      <p>
        Потому что рабочая память агента — его контекстное окно — жёстко ограничена, а исследования
        показывают, что доля успешных решений резко падает, когда в треде копится нерелевантный
        контекст. Пять задач в одном разговоре — это размытые детали и забытые решения. Ведите один
        тред на задачу, а побочную работу отправляйте в другие треды: с тем же агентом вы выпустите
        больше.
      </p>
    )
  },
  {
    question: "Стоит ли в первую очередь экономить токены?",
    answer:
      "Обычно нет. При базовой гигиене токены — небольшая статья расходов. Дорого обходится незаконченная работа: задачи, которые съели итерации и умерли до продакшена, и очереди, где почти готовая работа ждёт ревью. Сначала поднимайте долю задач, доведённых до конца, а цены на токены оптимизируйте потом, если это вообще понадобится.",
    answerNode: (
      <p>
        Обычно нет. При базовой гигиене токены — небольшая статья расходов. Дорого обходится
        незаконченная работа: задачи, которые съели итерации и умерли до продакшена, и очереди, где
        почти готовая работа ждёт ревью. Сначала поднимайте долю задач, доведённых до конца, а цены
        на токены оптимизируйте потом, если это вообще понадобится.
      </p>
    )
  },
  {
    question: "Делает ли ИИ WIP-лимиты ненужными?",
    answer:
      "Наоборот. WIP-лимиты появились, потому что начинать было соблазнительно, а заканчивать трудно. ИИ сделал начало почти бесплатным, поэтому соблазн стал сильнее, а лимит — ценнее. И теперь он касается ваших агентов так же, как и команды.",
    answerNode: (
      <p>
        Наоборот. WIP-лимиты появились, потому что начинать было соблазнительно, а заканчивать
        трудно. ИИ сделал начало почти бесплатным, поэтому соблазн стал сильнее, а лимит — ценнее. И
        теперь он касается ваших агентов так же, как и команды.
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
