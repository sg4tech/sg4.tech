import type { Metadata } from "next";
import { PostArticle } from "../../../../components/PostArticle";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import * as content from "./article-content";
import * as tail from "./article-tail";
import styles from "../../../../views/posts/ai-made-starting-free-finishing-expensive.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "ia-empezar-gratis-terminar-caro";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word so
// an AI snippet matches the page.
const faqItems = [
  {
    question: "¿Por qué mi agente de IA rinde peor cuando le doy varias tareas a la vez?",
    answer:
      "Porque la memoria de trabajo de un agente, su ventana de contexto, es un límite fijo, y los estudios muestran que la tasa de éxito se desploma a medida que se acumula contexto irrelevante en un hilo. Cinco tareas en una conversación significan detalles borrosos y decisiones olvidadas. Usa un hilo por tarea y manda el trabajo secundario a otra parte; con el mismo agente entregarás más.",
    answerNode: (
      <p>
        Porque la memoria de trabajo de un agente, su ventana de contexto, es un límite fijo, y los
        estudios muestran que la tasa de éxito se desploma a medida que se acumula contexto irrelevante
        en un hilo. Cinco tareas en una conversación significan detalles borrosos y decisiones
        olvidadas. Usa un hilo por tarea y manda el trabajo secundario a otra parte; con el mismo agente
        entregarás más.
      </p>
    )
  },
  {
    question: "¿El coste en tokens es lo que hay que optimizar?",
    answer:
      "Normalmente no. Con una higiene básica, los tokens son una partida menor. Lo caro es el trabajo sin terminar: tareas que consumieron iteraciones y murieron antes de llegar a producción, y colas donde un trabajo casi terminado espera revisión. Optimiza primero la tasa de tareas terminadas; el precio de los tokens, más adelante, si acaso.",
    answerNode: (
      <p>
        Normalmente no. Con una higiene básica, los tokens son una partida menor. Lo caro es el trabajo
        sin terminar: tareas que consumieron iteraciones y murieron antes de llegar a producción, y
        colas donde un trabajo casi terminado espera revisión. Optimiza primero la tasa de tareas
        terminadas; el precio de los tokens, más adelante, si acaso.
      </p>
    )
  },
  {
    question: "¿La IA deja obsoletos los límites de WIP?",
    answer:
      "Al contrario. Los límites de WIP existían porque empezar era tentador y terminar era difícil. La IA ha hecho que empezar sea casi gratis, lo que vuelve la tentación más fuerte y el límite más valioso. Y ahora se aplica tanto a tus agentes como a tu equipo.",
    answerNode: (
      <p>
        Al contrario. Los límites de WIP existían porque empezar era tentador y terminar era difícil. La
        IA ha hecho que empezar sea casi gratis, lo que vuelve la tentación más fuerte y el límite más
        valioso. Y ahora se aplica tanto a tus agentes como a tu equipo.
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
      eyebrow="Entrega con IA"
      faqItems={faqItems}
      partOf="donde-falla-la-entrega-de-software"
      sections={{ ...content, ...tail }}
      bodyClassName={styles.body}
    />
  );
}
