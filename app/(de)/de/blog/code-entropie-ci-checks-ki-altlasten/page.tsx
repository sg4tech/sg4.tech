import type { Metadata } from "next";
import { PostArticle } from "../../../../components/PostArticle";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import * as content from "./article-content";
import * as tail from "./article-tail";
import styles from "../../../../views/posts/code-entropy-ci-checks-ai-legacy.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "code-entropie-ci-checks-ki-altlasten";

// FAQ items must not duplicate body content: each question targets an
// objection the body doesn't answer head-on. The schema `answer` string
// mirrors the rendered `answerNode` word for word so an AI snippet matches the
// page.
const faqItems = [
  {
    question: "Bremsen strenge CI-Checks das Team nicht aus?",
    answer:
      "Checks verlagern die Kosten aus Review und Produktion in einen fehlgeschlagenen Build, wo sie am geringsten sind. Bei einer Legacy-Codebasis starten Sie vom aktuellen Stand, sodass am ersten Tag nichts blockiert.",
    answerNode: <p>Checks verlagern die Kosten aus Review und Produktion in einen fehlgeschlagenen Build, wo sie am geringsten sind. Bei einer Legacy-Codebasis starten Sie vom aktuellen Stand, sodass am ersten Tag nichts blockiert.</p>
  },
  {
    question: "Kann ich diese Checks in ein bestehendes Legacy-Projekt einbauen?",
    answer:
      "Ja: Frieren Sie den aktuellen Stand als Grenzwert ein, damit nichts schlechter wird, und senken Sie ihn dann Schritt für Schritt, während Sie refaktorieren.",
    answerNode: <p>Ja: Frieren Sie den aktuellen Stand als Grenzwert ein, damit nichts schlechter wird, und senken Sie ihn dann Schritt für Schritt, während Sie refaktorieren.</p>
  },
  {
    question: "Reicht ein Code-Review nicht aus, um so etwas zu finden?",
    answer:
      "Ein Review hängt von der Aufmerksamkeit ab und hält mit dem Tempo, in dem Agenten Code schreiben, nicht mit. Ein Check läuft bei jeder Änderung und schlägt jedes Mal auf dieselbe Weise fehl.",
    answerNode: <p>Ein Review hängt von der Aufmerksamkeit ab und hält mit dem Tempo, in dem Agenten Code schreiben, nicht mit. Ein Check läuft bei jeder Änderung und schlägt jedes Mal auf dieselbe Weise fehl.</p>
  },
  {
    question: "Brauche ich alle sieben Ebenen auf einmal?",
    answer:
      "Nein. Führen Sie sie der Reihe nach ein: zuerst toter Code, Formatierung und Typen, weil sie billig sind. Grenzwerte für Komplexität und Architektur zahlen sich aus, sobald die Codebasis wächst.",
    answerNode: <p>Nein. Führen Sie sie der Reihe nach ein: zuerst toter Code, Formatierung und Typen, weil sie billig sind. Grenzwerte für Komplexität und Architektur zahlen sich aus, sobald die Codebasis wächst.</p>
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

export default function ArticlePage() {
  return (
    <PostArticle
      original="code-entropy-ci-checks-ai-legacy"
      slug={SLUG}
      eyebrow="KI-Coding-Agenten"
      faqItems={faqItems}
      partOf="engpaesse-in-der-entwicklung-finden"
      sections={{ ...content, ...tail }}
      bodyClassName={styles.body}
    />
  );
}
