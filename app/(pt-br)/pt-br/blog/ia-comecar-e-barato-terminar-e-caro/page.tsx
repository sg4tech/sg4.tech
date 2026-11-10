import type { Metadata } from "next";
import { BlogPostLayout } from "../../../../components/BlogPostLayout";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import {
  ArticleLede,
  IntroSection,
  SectionConstraintMoved,
  SectionCostVisible,
  SectionMetricsSurvive,
  SectionOneThread,
  SectionParallelTasks
} from "./article-content";
import { ArticleCta, ArticleRelated } from "./article-tail";
import styles from "../../../../views/posts/ai-made-starting-free-finishing-expensive.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "ia-comecar-e-barato-terminar-e-caro";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word so
// an AI snippet matches the page.
const faqItems = [
  {
    question: "Por que meu agente de IA piora quando passo várias tarefas de uma vez?",
    answer:
      "Porque a memória de trabalho do agente, a janela de contexto, é um limite rígido, e pesquisas mostram as taxas de sucesso despencando conforme contexto irrelevante se acumula numa thread. Cinco tarefas numa conversa significam detalhes borrados e decisões esquecidas. Use uma thread por tarefa e mande o resto para outro lugar; você vai entregar mais com o mesmo agente.",
    answerNode: (
      <p>
        Porque a memória de trabalho do agente, a janela de contexto, é um limite rígido, e pesquisas
        mostram as taxas de sucesso despencando conforme contexto irrelevante se acumula numa thread.
        Cinco tarefas numa conversa significam detalhes borrados e decisões esquecidas. Use uma thread
        por tarefa e mande o resto para outro lugar; você vai entregar mais com o mesmo agente.
      </p>
    )
  },
  {
    question: "O custo dos tokens é a coisa certa a otimizar?",
    answer:
      "Normalmente, não. Com uma higiene básica, os tokens são um item pequeno da conta. O que sai caro é o trabalho inacabado: tarefas que consumiram iterações e morreram antes da produção, e filas onde trabalho quase pronto espera revisão. Otimize primeiro a taxa de conclusão; o preço dos tokens fica para depois, se é que algum dia.",
    answerNode: (
      <p>
        Normalmente, não. Com uma higiene básica, os tokens são um item pequeno da conta. O que sai caro
        é o trabalho inacabado: tarefas que consumiram iterações e morreram antes da produção, e filas
        onde trabalho quase pronto espera revisão. Otimize primeiro a taxa de conclusão; o preço dos
        tokens fica para depois, se é que algum dia.
      </p>
    )
  },
  {
    question: "A IA torna os limites de WIP obsoletos?",
    answer:
      "Pelo contrário. Os limites de WIP existiam porque começar era tentador e terminar era difícil. A IA deixou começar quase de graça, o que aumenta a tentação e faz o limite valer ainda mais. E agora ele vale tanto para os seus agentes quanto para a sua equipe.",
    answerNode: (
      <p>
        Pelo contrário. Os limites de WIP existiam porque começar era tentador e terminar era difícil.
        A IA deixou começar quase de graça, o que aumenta a tentação e faz o limite valer ainda mais. E
        agora ele vale tanto para os seus agentes quanto para a sua equipe.
      </p>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

function ArticleBody() {
  return (
    <div className={styles.body}>
      <IntroSection />
      <SectionCostVisible />
      <SectionMetricsSurvive />
      <SectionParallelTasks />
      <SectionOneThread />
      <SectionConstraintMoved />
      <ArticleCta />
      <ArticleRelated />
    </div>
  );
}

export default function ArticlePage() {
  return (
    <BlogPostLayout
      slug={SLUG}
      eyebrow="Entrega com IA"
      lede={<ArticleLede />}
      faqItems={faqItems}
      partOf="diagnosticar-gargalos-na-entrega"
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
