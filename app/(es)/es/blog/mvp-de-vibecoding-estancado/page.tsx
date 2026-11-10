import type { Metadata } from "next";
import { BlogPostLayout } from "../../../../components/BlogPostLayout";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import {
  ArticleLede,
  IntroSection,
  SectionCase,
  SectionFailedFixes,
  SectionJunior,
  SectionMapping,
  SectionRestart,
  SectionStall
} from "./article-content";
import { ArticleCta, ArticleRelated } from "./article-tail";
import styles from "../../../../views/posts/vibecoded-mvp-stopped-shipping.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "mvp-de-vibecoding-estancado";

// On-page H1 differs from the registry title on purpose: that title is the
// query-matched SERP/index-card title; the H1 carries the essay's voice.
// Article.headline mirrors the H1 so the schema matches the rendered page.
const H1_TITLE = "Tu MVP de vibecoding ha dejado de salir a producción, como todo código escrito por juniors antes que él";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word so
// an AI snippet matches the page.
const faqItems = [
  {
    question: "¿Tengo que reescribir el MVP desde cero?",
    answer:
      "Casi seguro que no. Hace décadas que se rescata código escrito por juniors sin empezar de nuevo, y el método se aplica tal cual: estabilizar, poner la red de seguridad y después reescribir las peores partes pieza a pieza, con la red ahí para atrapar lo que rompa la reescritura. Reescribir tira a la basura el único activo que de verdad tienes, un código que funciona y que tus usuarios usan cada día, y vuelve a empezar el mismo proceso con las mismas prácticas ausentes.",
    answerNode: (
      <p>
        Casi seguro que no. Hace décadas que se rescata código escrito por juniors sin empezar de nuevo,
        y el método se aplica tal cual: estabilizar, poner la red de seguridad y después reescribir las
        peores partes pieza a pieza, con la red ahí para atrapar lo que rompa la reescritura. Reescribir
        tira a la basura el único activo que de verdad tienes, un código que funciona y que tus usuarios
        usan cada día, y vuelve a empezar el mismo proceso con las mismas prácticas ausentes.
      </p>
    )
  },
  {
    question: "¿Esto es simplemente deuda técnica?",
    answer:
      "Es algo más concreto. La deuda técnica supone que alguien entendió el compromiso y eligió la velocidad. Un código generado por IA contiene decisiones que nadie tomó de forma consciente y que nadie sabe explicar: la deuda está en la comprensión. Por eso el arreglo empieza por hacer el código observable y testeable; la limpieza viene después.",
    answerNode: (
      <p>
        Es algo más concreto. La deuda técnica supone que alguien entendió el compromiso y eligió la
        velocidad. Un código generado por IA contiene decisiones que nadie tomó de forma consciente y
        que nadie sabe explicar: la deuda está en la <em>comprensión</em>. Por eso el arreglo empieza
        por hacer el código observable y testeable; la limpieza viene después.
      </p>
    )
  },
  {
    question: "¿Puedo seguir construyendo con IA mientras se arregla esto?",
    answer:
      "Sí, de eso se trata precisamente. El objetivo es rodear al junior de revisión, tests y controles mientras el teclado sigue en sus manos. Sigues lanzando con IA todo el tiempo; lo que produce el agente simplemente empieza a pasar por los mismos controles que el trabajo de una persona. Yo construyo con IA a diario justo dentro de un entorno así.",
    answerNode: (
      <p>
        Sí, de eso se trata precisamente. El objetivo es rodear al junior de revisión, tests y controles
        mientras el teclado sigue en sus manos. Sigues lanzando con IA todo el tiempo; lo que produce el
        agente simplemente empieza a pasar por los mismos controles que el trabajo de una persona. Yo
        construyo con IA a diario justo dentro de un entorno así.
      </p>
    )
  },
  {
    question: "¿Puede la IA arreglar el código que ella misma rompió?",
    answer:
      "En parte, y solo dentro de unos controles. Los agentes son realmente buenos en el mantenimiento que necesita un código generado por IA (escribir tests, añadir manejo de errores, refactorizaciones mecánicas) en cuanto un pipeline revisa lo que producen. Pedirle a un agente que «limpie el código» sin tests ni controles es pedirle al mismo junior que se ponga nota a sí mismo.",
    answerNode: (
      <p>
        En parte, y solo dentro de unos controles. Los agentes son realmente buenos en el mantenimiento
        que necesita un código generado por IA (escribir tests, añadir manejo de errores,
        refactorizaciones mecánicas) en cuanto un pipeline revisa lo que producen. Pedirle a un agente
        que «limpie el código» sin tests ni controles es pedirle al mismo junior que se ponga nota a sí
        mismo.
      </p>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

function ArticleBody() {
  return (
    <div className={styles.body}>
      <IntroSection />
      <SectionStall />
      <SectionJunior />
      <SectionCase />
      <SectionMapping />
      <SectionFailedFixes />
      <SectionRestart />
      <ArticleCta />
      <ArticleRelated />
    </div>
  );
}

export default function ArticlePage() {
  return (
    <BlogPostLayout
      slug={SLUG}
      eyebrow="Vibecoding con IA"
      lede={<ArticleLede />}
      faqItems={faqItems}
      headline={H1_TITLE}
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
