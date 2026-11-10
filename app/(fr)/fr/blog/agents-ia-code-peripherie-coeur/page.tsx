import type { Metadata } from "next";
import { PostArticle } from "../../../../components/PostArticle";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import * as content from "./article-content";
import * as tail from "./article-tail";
import styles from "../../../../views/posts/ai-coding-agent-periphery-core.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "agents-ia-code-peripherie-coeur";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word so
// an AI snippet matches the page.
const faqItems = [
  {
    question: "Faut-il entraîner ou affiner les agents IA de code sur notre base de code ?",
    answer:
      "Non. Ils lisent votre code, votre documentation, vos tâches et vos logs au moment où ils travaillent, sans aucun réentraînement. C’est pourquoi bien configurer les accès compte bien plus que n’importe quel réglage du modèle.",
    answerNode: (
      <p>
        Non. Ils lisent votre code, votre documentation, vos tâches et vos logs au moment où ils
        travaillent, sans aucun réentraînement. C’est pourquoi bien configurer les accès compte bien
        plus que n’importe quel réglage du modèle.
      </p>
    )
  },
  {
    question: "Faut-il un service d’IA dans le cloud ou un modèle auto-hébergé ?",
    answer:
      "Les startups commencent en général avec un service cloud ; les entreprises réglementées ou attentives à la sécurité sont de plus en plus nombreuses à héberger elles-mêmes un modèle open source, pour que les données ne quittent jamais leur périmètre. D’un côté, le contrôle et la confidentialité ; de l’autre, l’effort de faire tourner toute la pile vous-même.",
    answerNode: (
      <p>
        Les startups commencent en général avec un service cloud&nbsp;; les entreprises réglementées
        ou attentives à la sécurité sont de plus en plus nombreuses à héberger elles-mêmes un modèle
        open source, pour que les données ne quittent jamais leur périmètre. D’un côté, le contrôle et
        la confidentialité&nbsp;; de l’autre, l’effort de faire tourner toute la pile vous-même.
      </p>
    )
  },
  {
    question: "Qu’est-ce qui distingue un agent IA de code d’un chatbot ?",
    answer:
      "L’accès. Un chatbot répond à partir de connaissances générales ; un agent connecté à votre code, votre documentation, vos tâches et vos logs agit dans votre vrai projet. C’est précisément pour cela que la frontière entre ce qu’il peut toucher et ce qu’il doit laisser compte autant.",
    answerNode: (
      <p>
        L’accès. Un chatbot répond à partir de connaissances générales&nbsp;; un agent connecté à
        votre code, votre documentation, vos tâches et vos logs agit dans votre vrai projet. C’est
        précisément pour cela que la frontière entre ce qu’il peut toucher et ce qu’il doit laisser
        compte autant.
      </p>
    )
  },
  {
    question: "Un fondateur non technique peut-il vraiment livrer un produit avec des agents IA de code ?",
    answer:
      "Oui. Aujourd’hui, la vraie limite est de savoir quoi construire et de garder le code maintenable à mesure qu’il grandit. Des fondateurs livrent régulièrement de vrais produits de cette façon ; quand un projet échoue, c’est presque toujours parce qu’on a négligé sa structure.",
    answerNode: (
      <p>
        Oui. Aujourd’hui, la vraie limite est de savoir quoi construire et de garder le code
        maintenable à mesure qu’il grandit. Des fondateurs livrent régulièrement de vrais produits de
        cette façon&nbsp;; quand un projet échoue, c’est presque toujours parce qu’on a négligé sa
        structure.
      </p>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

export default function ArticlePage() {
  return (
    <PostArticle
      original="ai-coding-agent-periphery-core"
      slug={SLUG}
      eyebrow="Agents IA de code"
      faqItems={faqItems}
      partOf="diagnostiquer-livraison-logicielle"
      sections={{ ...content, ...tail }}
      bodyClassName={styles.body}
    />
  );
}
