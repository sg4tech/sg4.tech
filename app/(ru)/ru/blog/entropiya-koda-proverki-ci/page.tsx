import type { Metadata } from "next";
import { PostArticle } from "../../../../components/PostArticle";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import * as content from "./article-content";
import * as tail from "./article-tail";
import styles from "../../../../views/posts/code-entropy-ci-checks-ai-legacy.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "entropiya-koda-proverki-ci";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word so
// an AI snippet matches the page.
const faqItems = [
  {
    question: "Не замедлят ли строгие проверки в CI работу команды?",
    answer:
      "Проверки переносят цену ошибки с ревью и продакшена на упавшую сборку, где она ниже всего. В проекте с легаси вы начинаете с текущего уровня, поэтому в первый день ничего не блокируется.",
    answerNode: <p>Проверки переносят цену ошибки с ревью и продакшена на упавшую сборку, где она ниже всего. В проекте с легаси вы начинаете с текущего уровня, поэтому в первый день ничего не блокируется.</p>
  },
  {
    question: "Можно ли добавить эти проверки в существующий легаси-проект?",
    answer:
      "Да: зафиксируйте текущий уровень как лимит, чтобы ничего не ухудшалось, а потом снижайте его шаг за шагом по мере рефакторинга.",
    answerNode: <p>Да: зафиксируйте текущий уровень как лимит, чтобы ничего не ухудшалось, а потом снижайте его шаг за шагом по мере рефакторинга.</p>
  },
  {
    question: "Разве код-ревью не достаточно, чтобы это ловить?",
    answer:
      "Ревью зависит от внимательности и не поспевает за скоростью, с которой агенты пишут код. Проверка запускается на каждое изменение и каждый раз падает одинаково.",
    answerNode: <p>Ревью зависит от внимательности и не поспевает за скоростью, с которой агенты пишут код. Проверка запускается на каждое изменение и каждый раз падает одинаково.</p>
  },
  {
    question: "Нужно ли вводить все семь уровней сразу?",
    answer:
      "Нет. Добавляйте их по порядку: сначала мёртвый код, форматирование и типы, потому что они дешёвые. Ограничения на сложность и архитектуру окупаются, когда код разрастается.",
    answerNode: <p>Нет. Добавляйте их по порядку: сначала мёртвый код, форматирование и типы, потому что они дешёвые. Ограничения на сложность и архитектуру окупаются, когда код разрастается.</p>
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

export default function ArticlePage() {
  return (
    <PostArticle
      original="code-entropy-ci-checks-ai-legacy"
      slug={SLUG}
      eyebrow="ИИ-агенты"
      faqItems={faqItems}
      partOf="diagnostika-razrabotki"
      sections={{ ...content, ...tail }}
      bodyClassName={styles.body}
    />
  );
}
