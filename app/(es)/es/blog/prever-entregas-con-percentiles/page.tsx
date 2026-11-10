import type { Metadata } from "next";
import { BlogPostLayout } from "../../../../components/BlogPostLayout";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import {
  ArticleLede,
  IntroSection,
  SectionAverageComfort,
  SectionGapDiagnosis,
  SectionMedianTypical,
  SectionPickPercentile,
  SectionPredictability
} from "./article-content";
import { ArticleCta, ArticleRelated } from "./article-tail";
import styles from "../../../../views/posts/forecast-delivery-with-percentiles.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "prever-entregas-con-percentiles";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word (dl
// flattened to "term: definition." prose) so an AI snippet matches the page.
const faqItems = [
  {
    question: "¿Por qué el lead time medio es una métrica engañosa?",
    answer:
      "Unas pocas tareas muy lentas tiran de la media aritmética hacia arriba, así que la media queda muy por encima de lo que tardan de verdad la mayoría de las tareas. Describe un sistema que no existe: casi todo el trabajo va más rápido y unas pocas tareas van muchísimo más lentas. Por eso una previsión basada en ella falla en las dos direcciones.",
    answerNode: (
      <p>
        Unas pocas tareas muy lentas tiran de la media aritmética hacia arriba, así que la media queda
        muy por encima de lo que tardan de verdad la mayoría de las tareas. Describe un sistema que no
        existe: casi todo el trabajo va más rápido y unas pocas tareas van muchísimo más lentas. Por
        eso una previsión basada en ella falla en las dos direcciones.
      </p>
    )
  },
  {
    question: "¿Qué diferencia hay entre la mediana y la media del lead time?",
    answer:
      "Mediana: La tarea típica, la del medio; la mitad termina antes y la otra mitad después. Media: El promedio aritmético, que una larga cola de tareas rezagadas puede distorsionar mucho. Si la media queda muy por encima de la mediana, hay mucha dispersión y un problema de colas; si están cerca, el sistema es estable.",
    answerNode: (
      <>
        <dl>
          <dt>Mediana</dt>
          <dd>La tarea típica, la del medio; la mitad termina antes y la otra mitad después.</dd>
          <dt>Media</dt>
          <dd>El promedio aritmético, que una larga cola de tareas rezagadas puede distorsionar mucho.</dd>
        </dl>
        <p>
          Si la media queda muy por encima de la mediana, hay mucha dispersión y un problema de colas;
          si están cerca, el sistema es estable.
        </p>
      </>
    )
  },
  {
    question: "¿Cómo doy una fecha de entrega que de verdad pueda cumplir?",
    answer:
      "Sácala de un percentil (p85/p95) de la distribución de tu cycle time, y deja de lado la media a ojo. Hacia fuera sigues dando una sola fecha: la que el sistema dice que vas a cumplir. Te comprometes con la fecha; la probabilidad es asunto tuyo.",
    answerNode: (
      <>
        <p>
          Sácala de un percentil (p85/p95) de la distribución de tu cycle time, y deja de lado la media
          a ojo. Hacia fuera sigues dando una sola fecha: la que el sistema dice que vas a cumplir.
        </p>
        <p className={styles.faqHighlight}>Te comprometes con la fecha; la probabilidad es asunto tuyo.</p>
      </>
    )
  },
  {
    question: "¿Dónde veo la mediana y los percentiles?",
    answer:
      "El Control Chart de Jira y los diagramas de dispersión del cycle time muestran la media, la mediana y las franjas de percentiles con datos que ya tienes, sin registrar tiempos a mano. La mayoría de los gestores de tareas con un módulo de flujo o de analítica ofrecen lo mismo.",
    answerNode: (
      <p>
        El Control Chart de Jira y los diagramas de dispersión del cycle time muestran la media, la
        mediana y las franjas de percentiles con datos que ya tienes, sin registrar tiempos a mano. La
        mayoría de los gestores de tareas con un módulo de flujo o de analítica ofrecen lo mismo.
      </p>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

function ArticleBody() {
  return (
    <div className={styles.body}>
      <IntroSection />
      <SectionAverageComfort />
      <SectionMedianTypical />
      <SectionGapDiagnosis />
      <SectionPickPercentile />
      <SectionPredictability />
      <ArticleCta />
      <ArticleRelated />
    </div>
  );
}

export default function ArticlePage() {
  return (
    <BlogPostLayout
      slug={SLUG}
      eyebrow="Entrega de software"
      lede={<ArticleLede />}
      faqItems={faqItems}
      partOf="donde-falla-la-entrega-de-software"
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
