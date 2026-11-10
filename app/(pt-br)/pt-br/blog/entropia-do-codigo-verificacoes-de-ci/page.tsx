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
const SLUG: PostSlug = "entropia-do-codigo-verificacoes-de-ci";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word so
// an AI snippet matches the page.
const faqItems = [
  {
    question: "Verificações de CI rígidas não vão deixar a equipe mais lenta?",
    answer:
      "As verificações levam o custo da revisão e da produção para um build que falha, onde ele sai mais barato. Num código legado, você parte do nível atual, então nada trava no primeiro dia.",
    answerNode: <p>As verificações levam o custo da revisão e da produção para um build que falha, onde ele sai mais barato. Num código legado, você parte do nível atual, então nada trava no primeiro dia.</p>
  },
  {
    question: "Dá para adicionar essas verificações a um projeto legado que já existe?",
    answer:
      "Sim: congele o nível atual como limite, para que nada piore, e depois baixe-o passo a passo conforme refatora.",
    answerNode: <p>Sim: congele o nível atual como limite, para que nada piore, e depois baixe-o passo a passo conforme refatora.</p>
  },
  {
    question: "A revisão de código não basta para pegar isso?",
    answer:
      "A revisão depende da atenção e não acompanha a velocidade com que os agentes escrevem código. Uma verificação roda em cada mudança e falha do mesmo jeito todas as vezes.",
    answerNode: <p>A revisão depende da atenção e não acompanha a velocidade com que os agentes escrevem código. Uma verificação roda em cada mudança e falha do mesmo jeito todas as vezes.</p>
  },
  {
    question: "Preciso dos sete níveis de uma vez?",
    answer:
      "Não. Adicione-os em ordem: código morto, formatação e tipos primeiro, porque são baratos. Os limites de complexidade e de arquitetura compensam quando o código cresce.",
    answerNode: <p>Não. Adicione-os em ordem: código morto, formatação e tipos primeiro, porque são baratos. Os limites de complexidade e de arquitetura compensam quando o código cresce.</p>
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
      partOf="diagnosticar-gargalos-na-entrega"
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
