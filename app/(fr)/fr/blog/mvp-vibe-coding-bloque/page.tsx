import type { Metadata } from "next";
import { PostArticle } from "../../../../components/PostArticle";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import * as content from "./article-content";
import * as tail from "./article-tail";
import styles from "../../../../views/posts/vibecoded-mvp-stopped-shipping.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "mvp-vibe-coding-bloque";

// On-page H1 differs from the registry title on purpose: that title is the
// query-matched SERP/index-card title; the H1 carries the essay's voice.
// Article.headline mirrors the H1 so the schema matches the rendered page.
const H1_TITLE =
  "Votre MVP en vibe coding est à l’arrêt, comme toutes les bases de code écrites par des juniors avant lui";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// Each question targets a query intent the body doesn't answer head-on. The
// schema `answer` string mirrors the rendered `answerNode` word-for-word so an
// AI snippet matches the page.
const faqItems = [
  {
    question: "Faut-il réécrire le MVP de zéro ?",
    answer:
      "Presque certainement pas. Depuis des décennies, on sauve des bases de code écrites par des juniors sans repartir de zéro, et la méthode se transpose telle quelle : stabiliser, poser le filet de sécurité, puis réécrire les pires parties morceau par morceau, avec le filet pour rattraper ce que la réécriture casse. Une réécriture jette le seul actif que vous ayez vraiment, du code qui fonctionne et que vos utilisateurs sollicitent chaque jour, et relance le même processus avec les mêmes pratiques manquantes.",
    answerNode: (
      <p>
        Presque certainement pas. Depuis des décennies, on sauve des bases de code écrites par des
        juniors sans repartir de zéro, et la méthode se transpose telle quelle&nbsp;: stabiliser, poser le filet
        de sécurité, puis réécrire les pires parties morceau par morceau, avec le filet pour
        rattraper ce que la réécriture casse. Une réécriture jette le seul actif que vous ayez
        vraiment, du code qui fonctionne et que vos utilisateurs sollicitent chaque jour, et relance
        le même processus avec les mêmes pratiques manquantes.
      </p>
    )
  },
  {
    question: "Est-ce simplement de la dette technique ?",
    answer:
      "C’est quelque chose de plus précis. La dette technique suppose que quelqu’un a compris le compromis et choisi la vitesse. Un code généré par l’IA contient des décisions que personne n’a prises consciemment et que personne ne sait expliquer : la dette se loge dans la compréhension. C’est pourquoi la remise en ordre commence par rendre le code observable et testable ; le nettoyage vient après.",
    answerNode: (
      <p>
        C’est quelque chose de plus précis. La dette technique suppose que quelqu’un a compris le
        compromis et choisi la vitesse. Un code généré par l’IA contient des décisions que personne
        n’a prises consciemment et que personne ne sait expliquer&nbsp;: la dette se loge dans la{" "}
        <em>compréhension</em>. C’est pourquoi la remise en ordre commence par rendre le code
        observable et testable&nbsp;; le nettoyage vient après.
      </p>
    )
  },
  {
    question: "Puis-je continuer à développer avec l’IA pendant la remise en ordre ?",
    answer:
      "Oui, et c’est même tout l’intérêt. Il s’agit de placer la revue, les tests et les contrôles autour du junior, sans lui retirer le clavier. Vous continuez à livrer avec l’IA du début à la fin ; le code de l’agent passe simplement par les mêmes contrôles que celui d’un humain. Je développe moi-même avec l’IA tous les jours, exactement dans ce type de cadre.",
    answerNode: (
      <p>
        Oui, et c’est même tout l’intérêt. Il s’agit de placer la revue, les tests et les contrôles
        autour du junior, sans lui retirer le clavier. Vous continuez à livrer avec l’IA du début à
        la fin&nbsp;; le code de l’agent passe simplement par les mêmes contrôles que celui d’un
        humain. Je développe moi-même avec l’IA tous les jours, exactement dans ce type de cadre.
      </p>
    )
  },
  {
    question: "L’IA peut-elle réparer le code qu’elle a abîmé ?",
    answer:
      "En partie, et seulement dans un cadre. Les agents sont vraiment bons pour le travail de maintenance dont un code généré par l’IA a besoin : écrire des tests, ajouter la gestion des erreurs, faire des refactorings mécaniques, à condition qu’un pipeline vérifie leur travail. Demander à un agent de « nettoyer le code » sans tests ni contrôles, c’est demander au même junior de corriger sa propre copie.",
    answerNode: (
      <p>
        En partie, et seulement dans un cadre. Les agents sont vraiment bons pour le travail de
        maintenance dont un code généré par l’IA a besoin&nbsp;: écrire des tests, ajouter la gestion
        des erreurs, faire des refactorings mécaniques, à condition qu’un pipeline vérifie leur
        travail. Demander à un agent de «&nbsp;nettoyer le code&nbsp;» sans tests ni contrôles,
        c’est demander au même junior de corriger sa propre copie.
      </p>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

export default function ArticlePage() {
  return (
    <PostArticle
      original="vibecoded-mvp-stopped-shipping"
      slug={SLUG}
      eyebrow="Vibe coding IA"
      faqItems={faqItems}
      headline={H1_TITLE}
      sections={{ ...content, ...tail }}
      bodyClassName={styles.body}
    />
  );
}
