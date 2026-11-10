import type { Metadata } from "next";
import { PostArticle } from "../../../../components/PostArticle";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import * as content from "./article-content";
import * as tail from "./article-tail";
import styles from "../../../../views/posts/ai-coding-agent-periphery-core.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "ki-coding-agenten-peripherie-kern";

// FAQ items must not duplicate body content: each question targets a query
// intent the body doesn't answer head-on (training, cloud-vs-self-host,
// agent-vs-chatbot, founder viability). The schema `answer` string mirrors the
// rendered `answerNode` word for word so an AI snippet matches the page.
const faqItems = [
  {
    question: "Müssen KI-Coding-Agenten auf unserer Codebasis trainiert oder feinabgestimmt werden?",
    answer:
      "Nein. Sie arbeiten, indem sie zur Laufzeit Ihren vorhandenen Code, Ihre Dokumentation, Aufgaben und Logs lesen; ein erneutes Training brauchen sie dafür nicht. Deshalb ist es viel wichtiger, die Zugänge einzurichten, als das Modell abzustimmen.",
    answerNode: (
      <p>
        Nein. Sie arbeiten, indem sie zur Laufzeit Ihren vorhandenen Code, Ihre Dokumentation,
        Aufgaben und Logs lesen; ein erneutes Training brauchen sie dafür nicht. Deshalb ist es viel
        wichtiger, die Zugänge einzurichten, als das Modell abzustimmen.
      </p>
    )
  },
  {
    question: "Sollten wir einen KI-Dienst in der Cloud nutzen oder ein selbst gehostetes Modell?",
    answer:
      "Startups beginnen meist mit einem Cloud-Dienst; regulierte oder sicherheitssensible Unternehmen hosten zunehmend selbst ein Open-Source-Modell, damit die Daten ihren Sicherheitsbereich nie verlassen. Sie wägen Kontrolle und Datenschutz gegen den Aufwand ab, den ganzen Stack selbst zu betreiben.",
    answerNode: (
      <p>
        Startups beginnen meist mit einem Cloud-Dienst; regulierte oder sicherheitssensible
        Unternehmen hosten zunehmend selbst ein Open-Source-Modell, damit die Daten ihren
        Sicherheitsbereich nie verlassen. Sie wägen Kontrolle und Datenschutz gegen den Aufwand ab, den
        ganzen Stack selbst zu betreiben.
      </p>
    )
  },
  {
    question: "Was unterscheidet einen KI-Coding-Agenten von einem Chatbot?",
    answer:
      "Der Zugang. Ein Chatbot antwortet aus Allgemeinwissen; ein Agent, der mit Ihrem Code, Ihrer Dokumentation, Ihren Aufgaben und Logs verbunden ist, handelt mitten in Ihrem echten Projekt. Genau deshalb kommt es so sehr darauf an, wo die Grenze verläuft zwischen dem, was er anfassen darf, und dem, was nicht.",
    answerNode: (
      <p>
        Der Zugang. Ein Chatbot antwortet aus Allgemeinwissen; ein Agent, der mit Ihrem Code, Ihrer
        Dokumentation, Ihren Aufgaben und Logs verbunden ist, handelt mitten in Ihrem echten Projekt.
        Genau deshalb kommt es so sehr darauf an, wo die Grenze verläuft zwischen dem, was er anfassen
        darf, und dem, was nicht.
      </p>
    )
  },
  {
    question: "Können Gründer ohne technischen Hintergrund mit KI-Coding-Agenten wirklich Produkte ausliefern?",
    answer:
      "Ja. Die Grenze liegt heute darin, zu wissen, was gebaut werden soll, und die Codebasis beim Wachsen wartbar zu halten. Gründer liefern auf diese Weise regelmäßig echte Produkte aus; wenn sie scheitern, dann an vernachlässigter Struktur.",
    answerNode: (
      <p>
        Ja. Die Grenze liegt heute darin, zu wissen, was gebaut werden soll, und die Codebasis beim
        Wachsen wartbar zu halten. Gründer liefern auf diese Weise regelmäßig echte Produkte aus; wenn
        sie scheitern, dann an vernachlässigter Struktur.
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
      eyebrow="KI-Coding-Agenten"
      faqItems={faqItems}
      partOf="engpaesse-in-der-entwicklung-finden"
      sections={{ ...content, ...tail }}
      bodyClassName={styles.body}
    />
  );
}
