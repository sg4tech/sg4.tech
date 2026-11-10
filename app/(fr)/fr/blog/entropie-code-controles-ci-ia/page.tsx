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
const SLUG: PostSlug = "entropie-code-controles-ci-ia";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// Each question targets an objection the body doesn't answer head-on. The
// schema `answer` string mirrors the rendered `answerNode` word-for-word so an
// AI snippet matches the page.
const faqItems = [
  {
    question: "Des contrôles CI stricts ne vont-ils pas ralentir l’équipe ?",
    answer:
      "Les contrôles déplacent le coût de la revue et de la production vers un build qui échoue, là où il est le plus faible. Sur un code legacy, vous partez du niveau actuel, donc rien ne bloque dès le premier jour.",
    answerNode: (
      <p>
        Les contrôles déplacent le coût de la revue et de la production vers un build qui échoue, là
        où il est le plus faible. Sur un code legacy, vous partez du niveau actuel, donc rien ne
        bloque dès le premier jour.
      </p>
    )
  },
  {
    question: "Puis-je ajouter ces contrôles à un projet legacy existant ?",
    answer:
      "Oui : figez le niveau actuel comme limite pour que rien ne se dégrade, puis abaissez-la pas à pas au fil du refactoring.",
    answerNode: (
      <p>
        Oui&nbsp;: figez le niveau actuel comme limite pour que rien ne se dégrade, puis abaissez-la
        pas à pas au fil du refactoring.
      </p>
    )
  },
  {
    question: "La revue de code ne suffit-elle pas à repérer tout cela ?",
    answer:
      "La revue dépend de l’attention et ne suit pas le rythme auquel les agents écrivent du code. Un contrôle s’exécute à chaque modification et échoue de la même façon à chaque fois.",
    answerNode: (
      <p>
        La revue dépend de l’attention et ne suit pas le rythme auquel les agents écrivent du code.
        Un contrôle s’exécute à chaque modification et échoue de la même façon à chaque fois.
      </p>
    )
  },
  {
    question: "Faut-il mettre en place les sept niveaux d’un coup ?",
    answer:
      "Non. Ajoutez-les dans l’ordre : code mort, formatage et types d’abord, parce qu’ils coûtent peu. Les limites de complexité et d’architecture deviennent rentables quand le code grossit.",
    answerNode: (
      <p>
        Non. Ajoutez-les dans l’ordre&nbsp;: code mort, formatage et types d’abord, parce qu’ils
        coûtent peu. Les limites de complexité et d’architecture deviennent rentables quand le code
        grossit.
      </p>
    )
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
      eyebrow="Agents IA de code"
      lede={<ArticleLede />}
      faqItems={faqItems}
      partOf="diagnostiquer-livraison-logicielle"
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
