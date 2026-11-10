import type { Metadata } from "next";
import { PostArticle } from "../../../../components/PostArticle";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import * as content from "./article-content";
import * as tail from "./article-tail";
import styles from "../../../../views/posts/ai-made-starting-free-finishing-expensive.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "ia-demarrer-gratuit-finir-cher";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// Each question targets a query intent head-on and adds the actionable move the
// body argues toward. The schema `answer` string mirrors the rendered
// `answerNode` word-for-word so an AI snippet matches the page.
const faqItems = [
  {
    question: "Pourquoi mon agent IA devient-il moins bon quand je lui confie plusieurs tâches à la fois ?",
    answer:
      "Parce que la mémoire de travail d’un agent, sa fenêtre de contexte, est une limite dure, et la recherche montre que les taux de réussite s’effondrent à mesure que du contexte sans rapport s’accumule dans un fil. Cinq tâches dans une même conversation, ce sont des détails brouillés et des décisions oubliées. Ouvrez un fil par tâche et envoyez le travail annexe ailleurs : vous livrerez davantage avec le même agent.",
    answerNode: (
      <p>
        Parce que la mémoire de travail d’un agent, sa fenêtre de contexte, est une limite dure, et
        la recherche montre que les taux de réussite s’effondrent à mesure que du contexte sans
        rapport s’accumule dans un fil. Cinq tâches dans une même conversation, ce sont des détails
        brouillés et des décisions oubliées. Ouvrez un fil par tâche et envoyez le travail annexe
        ailleurs&nbsp;: vous livrerez davantage avec le même agent.
      </p>
    )
  },
  {
    question: "Le coût des tokens est-il le bon levier à optimiser ?",
    answer:
      "Rarement. Avec une hygiène de base, les tokens restent une ligne mineure du budget. Ce qui coûte cher, c’est le travail inachevé : les tâches qui ont consommé des itérations et sont mortes avant la production, et les files où du travail presque fini attend une revue. Optimisez d’abord le taux d’achèvement ; le prix des tokens viendra plus tard, si jamais il compte.",
    answerNode: (
      <p>
        Rarement. Avec une hygiène de base, les tokens restent une ligne mineure du budget. Ce qui
        coûte cher, c’est le travail inachevé&nbsp;: les tâches qui ont consommé des itérations et
        sont mortes avant la production, et les files où du travail presque fini attend une revue.
        Optimisez d’abord le taux d’achèvement&nbsp;; le prix des tokens viendra plus tard, si jamais
        il compte.
      </p>
    )
  },
  {
    question: "L’IA rend-elle les limites de WIP obsolètes ?",
    answer:
      "C’est l’inverse. Les limites de WIP existaient parce que démarrer était tentant et finir, difficile. L’IA a rendu le démarrage presque gratuit : la tentation est donc plus forte, et la limite d’autant plus précieuse. Et elle s’applique désormais à vos agents autant qu’à votre équipe.",
    answerNode: (
      <p>
        C’est l’inverse. Les limites de WIP existaient parce que démarrer était tentant et finir,
        difficile. L’IA a rendu le démarrage presque gratuit&nbsp;: la tentation est donc plus forte,
        et la limite d’autant plus précieuse. Et elle s’applique désormais à vos agents autant qu’à
        votre équipe.
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
      eyebrow="Livraison assistée par l’IA"
      faqItems={faqItems}
      partOf="diagnostiquer-livraison-logicielle"
      sections={{ ...content, ...tail }}
      bodyClassName={styles.body}
    />
  );
}
