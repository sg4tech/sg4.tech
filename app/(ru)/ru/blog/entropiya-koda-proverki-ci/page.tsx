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
      "С проверками ошибка всплывает на упавшей сборке, где она обходится дешевле, чем на ревью или в продакшене. В проекте с легаси лимиты ставят на текущем уровне, так что в первый день ничего не блокируется.",
    answerNode: <p>С проверками ошибка всплывает на упавшей сборке, где она обходится дешевле, чем на ревью или в продакшене. В проекте с легаси лимиты ставят на текущем уровне, так что в первый день ничего не блокируется.</p>
  },
  {
    question: "Можно ли добавить эти проверки в существующий легаси-проект?",
    answer:
      "Да. Зафиксируйте текущий уровень как лимит, чтобы хуже не становилось, и снижайте его шаг за шагом по мере рефакторинга.",
    answerNode: <p>Да. Зафиксируйте текущий уровень как лимит, чтобы хуже не становилось, и снижайте его шаг за шагом по мере рефакторинга.</p>
  },
  {
    question: "Разве для этого не хватит код-ревью?",
    answer:
      "Ревью держится на внимательности и не успевает за тем, как быстро агенты пишут код. Проверка запускается на каждом изменении и падает всегда одинаково.",
    answerNode: <p>Ревью держится на внимательности и не успевает за тем, как быстро агенты пишут код. Проверка запускается на каждом изменении и падает всегда одинаково.</p>
  },
  {
    question: "Нужно ли вводить все семь уровней сразу?",
    answer:
      "Нет. Добавляйте по порядку: сначала дешёвые — мёртвый код, форматирование и типы. Лимиты на сложность и архитектуру окупаются, когда кода становится много.",
    answerNode: <p>Нет. Добавляйте по порядку: сначала дешёвые — мёртвый код, форматирование и типы. Лимиты на сложность и архитектуру окупаются, когда кода становится много.</p>
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
