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
const SLUG: PostSlug = "previsao-de-entrega-com-percentis";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word (dl
// flattened to "term: definition." prose) so an AI snippet matches the page.
const faqItems = [
  {
    question: "Por que o lead time médio é uma métrica enganosa?",
    answer:
      "Algumas poucas tarefas muito lentas puxam a média aritmética para cima, e ela fica bem acima do tempo que a maioria das tarefas realmente leva. Ela descreve um sistema que não existe: a maior parte do trabalho é mais rápida, e um punhado é muito mais lento. Por isso, prever com base nela erra para os dois lados.",
    answerNode: (
      <p>
        Algumas poucas tarefas muito lentas puxam a média aritmética para cima, e ela fica bem acima
        do tempo que a maioria das tarefas realmente leva. Ela descreve um sistema que não existe: a
        maior parte do trabalho é mais rápida, e um punhado é muito mais lento. Por isso, prever com
        base nela erra para os dois lados.
      </p>
    )
  },
  {
    question: "Qual é a diferença entre a mediana e a média do lead time?",
    answer:
      "Mediana: a tarefa típica (a do meio); metade termina mais rápido, metade mais devagar. Média: a média aritmética, que uma cauda longa de retardatárias pode distorcer bastante. Quando a média fica bem acima da mediana, há uma dispersão larga e um problema de fila; quando as duas estão próximas, o sistema é estável.",
    answerNode: (
      <>
        <dl>
          <dt>Mediana</dt>
          <dd>A tarefa típica (a do meio); metade termina mais rápido, metade mais devagar.</dd>
          <dt>Média</dt>
          <dd>A média aritmética, que uma cauda longa de retardatárias pode distorcer bastante.</dd>
        </dl>
        <p>
          Quando a média fica bem acima da mediana, há uma dispersão larga e um problema de fila;
          quando as duas estão próximas, o sistema é estável.
        </p>
      </>
    )
  },
  {
    question: "Como dar uma data de entrega que eu consiga cumprir?",
    answer:
      "Tire a data de um percentil (p85/p95) da distribuição do seu cycle time, em vez de uma média de cabeça. Para fora, você continua dando uma única data: aquela que o sistema diz que você vai cumprir. Você se compromete com a data; a probabilidade fica com você.",
    answerNode: (
      <>
        <p>
          Tire a data de um percentil (p85/p95) da distribuição do seu cycle time, em vez de uma média
          de cabeça. Para fora, você continua dando uma única data: aquela que o sistema diz que você
          vai cumprir.
        </p>
        <p className={styles.faqHighlight}>Você se compromete com a data; a probabilidade fica com você.</p>
      </>
    )
  },
  {
    question: "Onde vejo a mediana e os percentis?",
    answer:
      "O Control Chart do Jira e os gráficos de dispersão de cycle time mostram média, mediana e faixas de percentis a partir dos dados que você já tem, sem registro manual de horas. A maioria das ferramentas com um módulo de fluxo ou de analytics oferece o mesmo.",
    answerNode: (
      <p>
        O Control Chart do Jira e os gráficos de dispersão de cycle time mostram média, mediana e
        faixas de percentis a partir dos dados que você já tem, sem registro manual de horas. A
        maioria das ferramentas com um módulo de fluxo ou de analytics oferece o mesmo.
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
      partOf="diagnosticar-gargalos-na-entrega"
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
