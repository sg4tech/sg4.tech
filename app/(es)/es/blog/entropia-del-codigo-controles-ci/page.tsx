import type { Metadata } from "next";
import { BlogPostLayout } from "../../../../components/BlogPostLayout";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import {
  ArticleLede,
  IntroSection,
  LevelLadder,
  SectionArchitectureAndRules,
  SectionBottomLine,
  SectionCheapLevels,
  SectionComplexity,
  SectionTemplate,
  SectionToolTable
} from "./article-content";
import { ArticleCta, ArticleRelated } from "./article-tail";
import styles from "../../../../views/posts/code-entropy-ci-checks-ai-legacy.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "entropia-del-codigo-controles-ci";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word so
// an AI snippet matches the page.
const faqItems = [
  {
    question: "¿Unos controles de CI estrictos no frenarán al equipo?",
    answer:
      "Los controles llevan el coste de la revisión y de producción a un build que falla, que es donde sale más barato. En un proyecto legacy empiezas desde el nivel actual, así que el primer día no se bloquea nada.",
    answerNode: <p>Los controles llevan el coste de la revisión y de producción a un build que falla, que es donde sale más barato. En un proyecto legacy empiezas desde el nivel actual, así que el primer día no se bloquea nada.</p>
  },
  {
    question: "¿Puedo añadir estos controles a un proyecto legacy que ya existe?",
    answer:
      "Sí: congela el nivel actual como límite para que nada empeore y luego bájalo paso a paso a medida que refactorizas.",
    answerNode: <p>Sí: congela el nivel actual como límite para que nada empeore y luego bájalo paso a paso a medida que refactorizas.</p>
  },
  {
    question: "¿No basta con la revisión de código para detectar esto?",
    answer:
      "La revisión depende de la atención y no escala al ritmo al que escriben código los agentes. Un control se ejecuta en cada cambio y falla siempre de la misma manera.",
    answerNode: <p>La revisión depende de la atención y no escala al ritmo al que escriben código los agentes. Un control se ejecuta en cada cambio y falla siempre de la misma manera.</p>
  },
  {
    question: "¿Necesito los siete niveles a la vez?",
    answer:
      "No. Añádelos en orden: primero el código muerto, el formato y los tipos, porque son baratos. Los límites de complejidad y de arquitectura compensan cuando el código crece.",
    answerNode: <p>No. Añádelos en orden: primero el código muerto, el formato y los tipos, porque son baratos. Los límites de complejidad y de arquitectura compensan cuando el código crece.</p>
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

function ArticleBody() {
  return (
    <div className={styles.body}>
      <IntroSection />
      <LevelLadder />
      <SectionCheapLevels />
      <SectionComplexity />
      <SectionArchitectureAndRules />
      <SectionToolTable />
      <SectionBottomLine />
      <SectionTemplate />
      <ArticleCta />
      <ArticleRelated />
    </div>
  );
}

export default function ArticlePage() {
  return (
    <BlogPostLayout
      slug={SLUG}
      eyebrow="Agentes de IA"
      lede={<ArticleLede />}
      faqItems={faqItems}
      partOf="donde-falla-la-entrega-de-software"
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
