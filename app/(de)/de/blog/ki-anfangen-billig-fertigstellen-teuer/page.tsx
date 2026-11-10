import type { Metadata } from "next";
import { PostArticle } from "../../../../components/PostArticle";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import * as content from "./article-content";
import * as tail from "./article-tail";
import styles from "../../../../views/posts/ai-made-starting-free-finishing-expensive.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "ki-anfangen-billig-fertigstellen-teuer";

// FAQ items must not duplicate body content. The schema `answer` string
// mirrors the rendered `answerNode` word for word so an AI snippet matches
// the page.
const faqItems = [
  {
    question: "Warum wird mein KI-Agent schlechter, wenn ich ihm mehrere Aufgaben auf einmal gebe?",
    answer:
      "Weil das Arbeitsgedächtnis eines Agenten, sein Kontextfenster, eine harte Grenze hat, und Studien zeigen, dass die Erfolgsquote einbricht, sobald sich in einem Thread irrelevanter Kontext ansammelt. Fünf Aufgaben in einer Unterhaltung bedeuten verschwommene Details und vergessene Entscheidungen. Arbeiten Sie mit einem Thread pro Aufgabe und lagern Sie Nebenarbeiten aus; mit demselben Agenten liefern Sie dann mehr aus.",
    answerNode: (
      <p>
        Weil das Arbeitsgedächtnis eines Agenten, sein Kontextfenster, eine harte Grenze hat, und
        Studien zeigen, dass die Erfolgsquote einbricht, sobald sich in einem Thread irrelevanter
        Kontext ansammelt. Fünf Aufgaben in einer Unterhaltung bedeuten verschwommene Details und
        vergessene Entscheidungen. Arbeiten Sie mit einem Thread pro Aufgabe und lagern Sie
        Nebenarbeiten aus; mit demselben Agenten liefern Sie dann mehr aus.
      </p>
    )
  },
  {
    question: "Sollte ich vor allem die Token-Kosten optimieren?",
    answer:
      "Meistens nicht. Mit etwas Grunddisziplin sind Tokens ein kleiner Posten. Teuer ist unfertige Arbeit: Aufgaben, die Iterationen verbraucht haben und vor der Produktion gestorben sind, und Warteschlangen, in denen fast fertige Arbeit auf ein Review wartet. Optimieren Sie zuerst die Abschlussquote; die Token-Preise später, wenn überhaupt.",
    answerNode: (
      <p>
        Meistens nicht. Mit etwas Grunddisziplin sind Tokens ein kleiner Posten. Teuer ist unfertige
        Arbeit: Aufgaben, die Iterationen verbraucht haben und vor der Produktion gestorben sind, und
        Warteschlangen, in denen fast fertige Arbeit auf ein Review wartet. Optimieren Sie zuerst die
        Abschlussquote; die Token-Preise später, wenn überhaupt.
      </p>
    )
  },
  {
    question: "Macht KI WIP-Limits überflüssig?",
    answer:
      "Im Gegenteil. WIP-Limits gab es, weil das Anfangen verlockend und das Fertigstellen schwer war. KI hat das Anfangen fast kostenlos gemacht, und dadurch wird die Versuchung stärker und das Limit noch wertvoller. Außerdem gilt es jetzt für Ihre Agenten genauso wie für Ihr Team.",
    answerNode: (
      <p>
        Im Gegenteil. WIP-Limits gab es, weil das Anfangen verlockend und das Fertigstellen schwer
        war. KI hat das Anfangen fast kostenlos gemacht, und dadurch wird die Versuchung stärker und
        das Limit noch wertvoller. Außerdem gilt es jetzt für Ihre Agenten genauso wie für Ihr Team.
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
      eyebrow="KI-gestützte Entwicklung"
      faqItems={faqItems}
      partOf="engpaesse-in-der-entwicklung-finden"
      sections={{ ...content, ...tail }}
      bodyClassName={styles.body}
    />
  );
}
