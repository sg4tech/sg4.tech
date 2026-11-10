import type { Metadata } from "next";
import { PostArticle } from "../../../../components/PostArticle";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import * as content from "./article-content";
import * as tail from "./article-tail";
import styles from "../../../../views/posts/ai-coding-agent-periphery-core.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "ii-agenty-periferiya-yadro";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word so
// an AI snippet matches the page.
const faqItems = [
  {
    question: "Нужно ли дообучать ИИ-агентов на нашем коде?",
    answer:
      "Нет. Агент читает ваш код, документацию, задачи и логи прямо по ходу работы, переобучать модель для этого не нужно. Поэтому правильно настроенные доступы дают куда больше, чем любая донастройка модели.",
    answerNode: (
      <p>
        Нет. Агент читает ваш код, документацию, задачи и логи прямо по ходу работы,
        переобучать модель для этого не нужно. Поэтому правильно настроенные доступы дают
        куда больше, чем любая донастройка модели.
      </p>
    )
  },
  {
    question: "Что выбрать: облачный ИИ-сервис или свою модель на своих серверах?",
    answer:
      "Стартапы обычно начинают с облачного сервиса. Компании из регулируемых отраслей и те, для кого критична безопасность, всё чаще разворачивают у себя open-source модель, чтобы данные не покидали периметр. За контроль над данными вы платите тем, что поддерживаете всю инфраструктуру сами.",
    answerNode: (
      <p>
        Стартапы обычно начинают с облачного сервиса. Компании из регулируемых отраслей и
        те, для кого критична безопасность, всё чаще разворачивают у себя open-source
        модель, чтобы данные не покидали периметр. За контроль над данными вы платите тем,
        что поддерживаете всю инфраструктуру сами.
      </p>
    )
  },
  {
    question: "Чем ИИ-агент для разработки отличается от чат-бота?",
    answer:
      "Доступом. Чат-бот отвечает из общих знаний. Агент подключён к вашему коду, документации, задачам и логам и работает внутри вашего проекта. Поэтому так важно провести границу: что ему можно трогать, а что нельзя.",
    answerNode: (
      <p>
        Доступом. Чат-бот отвечает из общих знаний. Агент подключён к вашему коду,
        документации, задачам и логам и работает внутри вашего проекта. Поэтому так важно
        провести границу: что ему можно трогать, а что нельзя.
      </p>
    )
  },
  {
    question: "Может ли основатель без технического опыта выпустить продукт с помощью ИИ-агентов?",
    answer:
      "Да. Написать продукт больше не проблема. Сложнее понять, что именно делать, и по мере роста сохранить код понятным и удобным для изменений. Основатели регулярно так выпускают рабочие продукты. А если такой проект буксует, причина в запущенной структуре кода.",
    answerNode: (
      <p>
        Да. Написать продукт больше не проблема. Сложнее понять, что именно делать, и по
        мере роста сохранить код понятным и удобным для изменений. Основатели регулярно так
        выпускают рабочие продукты. А если такой проект буксует, причина в запущенной
        структуре кода.
      </p>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

export default function ArticlePage() {
  return (
    <PostArticle
      original="ai-coding-agent-periphery-core"
      slug={SLUG}
      eyebrow="ИИ-агенты"
      faqItems={faqItems}
      partOf="diagnostika-razrabotki"
      sections={{ ...content, ...tail }}
      bodyClassName={styles.body}
    />
  );
}
