import type { Metadata } from "next";
import { ArticleToc } from "../../../../components/ArticleToc";
import { BlogPostLayout } from "../../../../components/BlogPostLayout";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import {
  ArticleLede,
  IntroSection,
  SectionCountTasks,
  SectionDecomposeT2M,
  SectionLeadTimeCycleTime,
  SectionLittlesLaw,
  SectionSymptoms,
  SectionWhereStuck,
  SectionWip,
  SectionWipLimits
} from "./article-content";
import {
  ArticleCta,
  ArticleRelated,
  SectionClosing,
  SectionFullSystemView,
  SectionIntroduceWipLimits
} from "./article-tail";
import styles from "../../../../views/posts/diagnose-broken-engineering-delivery.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "diagnostiquer-livraison-logicielle";

// Mirrors the section h2s (ids and text).
const tocItems = [
  { id: "symptoms", title: "1. Les symptômes de livraisons lentes, et le mauvais premier réflexe" },
  { id: "decompose-t2m", title: "2. Décomposer le T2M : Discovery et Lead Time sont deux problèmes distincts" },
  { id: "lead-time-cycle-time", title: "3. Lead Time = attente + Cycle Time" },
  { id: "where-stuck", title: "4. Où le travail bloque vraiment : pourquoi le temps par statut peut tromper" },
  { id: "count-tasks", title: "5. Comment trouver les goulots d’étranglement sans mesurer le temps" },
  { id: "wip", title: "6. Le travail en cours (WIP) : la variable qui pilote la vitesse de livraison" },
  { id: "littles-law", title: "7. La loi de Little : Lead Time = WIP / débit" },
  { id: "wip-limits", title: "8. Les limites de WIP : le levier qui répare la plupart des équipes lentes" },
  { id: "introduce-wip-limits", title: "9. Introduire des limites de WIP sans révolte de l’équipe" },
  { id: "full-system-view", title: "10. La vue d’ensemble du système : vitesse, valeur et durabilité de la livraison" },
  { id: "closing", title: "Quand les métriques deviennent un outil de diagnostic" }
];

// FAQ items must not duplicate body content. Paraphrased FAQ entries reduce
// the citation-trust signal for AI engines that index the FAQPage schema
// (duplicate content across body + FAQ looks like keyword stuffing). Each
// question here targets a query intent that the body doesn't directly
// answer.
const faqItems = [
  {
    question: "Quelle différence entre Lead Time et Cycle Time ?",
    // Schema text mirrors the rendered answerNode word-for-word (with dl
    // dt/dd flattened to "term: definition." prose) so anyone landing on
    // the page from an AI snippet or FAQ rich-result finds the same
    // wording on screen. Same for the other three answers in this array.
    answer:
      "Lead Time : le temps total qu’une tâche passe dans le développement, de « prête pour le développement » à « en production ». L’attente comprise. Cycle Time : uniquement la part de travail actif, de « réellement prise en main » à « terminée ». Sans l’attente. L’écart entre les deux mesure la profondeur de la file d’attente.",
    answerNode: (
      <>
        <dl>
          <dt>Lead Time</dt>
          <dd>
            Le temps total qu’une tâche passe dans le développement, de «&nbsp;prête pour le
            développement&nbsp;» à «&nbsp;en production&nbsp;». L’attente comprise.
          </dd>
          <dt>Cycle Time</dt>
          <dd>
            Uniquement la part de travail actif, de «&nbsp;réellement prise en main&nbsp;» à
            «&nbsp;terminée&nbsp;». Sans l’attente.
          </dd>
        </dl>
        <p>L’écart entre les deux mesure la profondeur de la file d’attente.</p>
      </>
    )
  },
  {
    question: "Quelle limite de WIP est raisonnable pour une équipe de N personnes ?",
    answer:
      "Les recommandations du secteur vont de 1 à 3 tâches par développeur ; les équipes de développement logiciel se situent généralement dans le bas de la fourchette, 1 à 2 par développeur. Équipe de 6 → environ 6 à 12 tâches actives dans tout le système, et certainement pas 80. Le chiffre exact compte moins que la discipline d’en avoir un et de le faire respecter : la plupart des équipes trouvent leur bon niveau en commençant serré, puis en relâchant si le travail cale régulièrement pour des raisons étrangères au WIP.",
    answerNode: (
      <>
        <p>
          Les recommandations du secteur vont de <strong>1 à 3 tâches par développeur</strong>&nbsp;;
          les équipes de développement logiciel se situent généralement dans le bas de la fourchette,{" "}
          <strong>1 à 2 par développeur</strong>.
        </p>
        <p className={styles.faqHighlight}>
          Équipe de 6 → environ 6 à 12 tâches actives dans tout le système, et certainement pas 80.
        </p>
        <p>
          Le chiffre exact compte moins que la discipline d’en avoir un et de le faire
          respecter&nbsp;: la plupart des équipes trouvent leur bon niveau en commençant serré, puis
          en relâchant si le travail cale régulièrement pour des raisons étrangères au WIP.
        </p>
      </>
    )
  },
  {
    question: "En quoi est-ce différent de la capacité de sprint en Scrum ?",
    answer:
      "Capacité de sprint : la quantité de travail sur laquelle l’équipe s’engage pour une période de deux semaines. Limite de WIP : la quantité de travail en cours à un instant donné, indépendamment du sprint. Une équipe peut avoir un engagement de sprint raisonnable et mener malgré tout plus de 60 tâches en parallèle : la capacité de sprint ne dit rien sur le fait que le travail soit terminé ou seulement commencé. Les limites de WIP sont indépendantes de la planification de sprint et règlent souvent des problèmes que la planification seule n’atteint pas.",
    answerNode: (
      <>
        <dl>
          <dt>Capacité de sprint</dt>
          <dd>La quantité de travail sur laquelle l’équipe s’engage pour une période de deux semaines.</dd>
          <dt>Limite de WIP</dt>
          <dd>La quantité de travail en cours à un instant donné, indépendamment du sprint.</dd>
        </dl>
        <p>
          Une équipe peut avoir un engagement de sprint raisonnable et mener malgré tout plus de
          60&nbsp;tâches en parallèle&nbsp;: la capacité de sprint ne dit rien sur le fait que le
          travail soit <em>terminé</em> ou seulement <em>commencé</em>. Les limites de WIP sont
          indépendantes de la planification de sprint et règlent souvent des problèmes que la
          planification seule n’atteint pas.
        </p>
      </>
    )
  },
  {
    question: "Et si notre débit est réellement trop faible ?",
    answer:
      "Il arrive que le débit soit vraiment la contrainte. Si le WIP est déjà maîtrisé et que le Lead Time reste élevé, l’équipe n’a peut-être pas assez de capacité pour la demande. Avant de recruter, vérifiez trois choses : Les tâches sont-elles trop grosses ? L’exécution elle-même est-elle lente ? L’équipe passe-t-elle beaucoup de temps sur autre chose que la livraison ? Support, incidents, réunions, charge opérationnelle. Si tout cela est sain et que le débit reste en deçà de la demande, recruter est peut-être la bonne décision. Les limites de WIP aident surtout à distinguer un problème de capacité d’un problème de flux.",
    answerNode: (
      <>
        <p>
          Il arrive que le débit soit vraiment la contrainte. Si le WIP est déjà maîtrisé et que le
          Lead Time reste élevé, l’équipe n’a peut-être pas assez de capacité pour la demande.
        </p>
        <p>Avant de recruter, vérifiez trois choses&nbsp;:</p>
        <ol>
          <li>
            <strong>Les tâches sont-elles trop grosses&nbsp;?</strong>
          </li>
          <li>
            <strong>L’exécution elle-même est-elle lente&nbsp;?</strong>
          </li>
          <li>
            <strong>L’équipe passe-t-elle beaucoup de temps sur autre chose que la livraison&nbsp;?</strong>{" "}
            Support, incidents, réunions, charge opérationnelle.
          </li>
        </ol>
        <p>
          Si tout cela est sain et que le débit reste en deçà de la demande, recruter est peut-être
          la bonne décision. Les limites de WIP aident surtout à distinguer un problème de capacité d’un
          problème de flux.
        </p>
      </>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

function ArticleBody() {
  return (
    <div className={styles.body}>
      <IntroSection />
      <ArticleToc post="diagnostiquer-livraison-logicielle" items={tocItems} />
      <SectionSymptoms />
      <SectionDecomposeT2M />
      <SectionLeadTimeCycleTime />
      <SectionWhereStuck />
      <SectionCountTasks />
      <SectionWip />
      <SectionLittlesLaw />
      <SectionWipLimits />
      <SectionIntroduceWipLimits />
      <SectionFullSystemView />
      <SectionClosing />
      <ArticleCta />
      <ArticleRelated />
    </div>
  );
}

export default function ArticlePage() {
  return (
    <BlogPostLayout
      slug={SLUG}
      eyebrow="Livraison logicielle"
      lede={<ArticleLede />}
      faqItems={faqItems}
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
