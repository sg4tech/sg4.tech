import type { Metadata } from "next";
import { PostArticle } from "../../../../components/PostArticle";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import * as content from "./article-content";
import * as tail from "./article-tail";
import styles from "../../../../views/posts/forecast-delivery-with-percentiles.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "prevoir-livraisons-percentiles";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// Each question targets a query intent the body doesn't answer head-on. The
// schema `answer` string mirrors the rendered `answerNode` word-for-word (dl
// flattened to "term: definition." prose) so an AI snippet matches the page.
const faqItems = [
  {
    question: "Pourquoi le lead time moyen est-il une métrique trompeuse ?",
    answer:
      "Quelques tâches très lentes tirent la moyenne arithmétique vers le haut, si bien qu’elle se retrouve bien au-dessus de la durée réelle de la plupart des tâches. Elle décrit un système qui n’existe pas : la plupart du travail va plus vite, une poignée de tâches va beaucoup plus lentement. Une prévision fondée sur elle se trompe donc dans les deux sens.",
    answerNode: (
      <p>
        Quelques tâches très lentes tirent la moyenne arithmétique vers le haut, si bien qu’elle se
        retrouve bien au-dessus de la durée réelle de la plupart des tâches. Elle décrit un système
        qui n’existe pas&nbsp;: la plupart du travail va plus vite, une poignée de tâches va beaucoup
        plus lentement. Une prévision fondée sur elle se trompe donc dans les deux sens.
      </p>
    )
  },
  {
    question: "Quelle différence entre le lead time médian et le lead time moyen ?",
    answer:
      "Médiane : la tâche typique, celle du milieu ; la moitié des tâches finit plus vite, l’autre moitié plus lentement. Moyenne : la moyenne arithmétique, qu’une longue traîne de retardataires peut fortement fausser. Quand la moyenne dépasse largement la médiane, la dispersion est forte et vous avez un problème de files d’attente ; quand elles sont proches, le système est stable.",
    answerNode: (
      <>
        <dl>
          <dt>Médiane</dt>
          <dd>
            La tâche typique, celle du milieu&nbsp;; la moitié des tâches finit plus vite, l’autre
            moitié plus lentement.
          </dd>
          <dt>Moyenne</dt>
          <dd>La moyenne arithmétique, qu’une longue traîne de retardataires peut fortement fausser.</dd>
        </dl>
        <p>
          Quand la moyenne dépasse largement la médiane, la dispersion est forte et vous avez un
          problème de files d’attente&nbsp;; quand elles sont proches, le système est stable.
        </p>
      </>
    )
  },
  {
    question: "Comment annoncer une date de livraison que je peux vraiment tenir ?",
    answer:
      "Choisissez-la à partir d’un percentile (p85/p95) de la distribution de votre cycle time, plutôt qu’à partir d’une moyenne au jugé. Vers l’extérieur, vous donnez toujours une seule date ferme : celle que le système vous permet de tenir. Vous vous engagez sur une date ; la probabilité reste en coulisses.",
    answerNode: (
      <>
        <p>
          Choisissez-la à partir d’un percentile (p85/p95) de la distribution de votre cycle time,
          plutôt qu’à partir d’une moyenne au jugé. Vers l’extérieur, vous donnez toujours une seule
          date ferme&nbsp;: celle que le système vous permet de tenir.
        </p>
        <p className={styles.faqHighlight}>Vous vous engagez sur une date&nbsp;; la probabilité reste en coulisses.</p>
      </>
    )
  },
  {
    question: "Où trouver la médiane et les percentiles ?",
    answer:
      "Le Control Chart de Jira et les nuages de points du cycle time affichent la moyenne, la médiane et des bandes de percentiles à partir des données que vous avez déjà, sans saisie manuelle des temps. La plupart des outils de suivi dotés d’un module de flux ou d’analytique proposent la même chose.",
    answerNode: (
      <p>
        Le Control Chart de Jira et les nuages de points du cycle time affichent la moyenne, la
        médiane et des bandes de percentiles à partir des données que vous avez déjà, sans saisie
        manuelle des temps. La plupart des outils de suivi dotés d’un module de flux ou d’analytique
        proposent la même chose.
      </p>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

export default function ArticlePage() {
  return (
    <PostArticle
      original="forecast-delivery-with-percentiles"
      slug={SLUG}
      eyebrow="Livraison logicielle"
      faqItems={faqItems}
      partOf="diagnostiquer-livraison-logicielle"
      sections={{ ...content, ...tail }}
      bodyClassName={styles.body}
    />
  );
}
