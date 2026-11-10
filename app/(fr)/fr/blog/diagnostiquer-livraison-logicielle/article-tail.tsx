// Tail half of the article — sections 9–10 + closing, plus the CTA, Related,
// and Attribution asides. Split out of article-content.tsx so each file stays
// under the 700-line ESLint cap.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_fr_blog_metrics";

// Pillar -> spoke links come from the post registry so titles/descriptions
// never drift from the articles' own metadata.
const percentilesPost = getPostBySlug("prevoir-livraisons-percentiles");
const vibecodingPost = getPostBySlug("mvp-vibe-coding-bloque");
const finishingPost = getPostBySlug("ia-demarrer-gratuit-finir-cher");

// Spokes first (continue reading), then the landings. Excludes any card that
// points to the same destination as `ArticleCta` above — listing the same
// conversion path twice in the same scroll dilutes it. If `ArticleCta` is
// ever rerouted, re-check this list for overlap.
const relatedLinks = [
  {
    href: getPostPath(percentilesPost.slug),
    title: percentilesPost.title,
    description: percentilesPost.description
  },
  {
    href: getPostPath(vibecodingPost.slug),
    title: vibecodingPost.title,
    description: vibecodingPost.description
  },
  {
    href: getPostPath(finishingPost.slug),
    title: finishingPost.title,
    description: finishingPost.description
  },
  {
    href: pagePath("fr", "yii2"),
    title: "Pour les projets Yii2",
    description:
      "La page dédiée au legacy : des mises en production prévisibles, des garde-fous qualité et une modernisation sans réécriture par défaut."
  },
  {
    href: pagePath("fr", "ai-vibecoding"),
    title: "Le service de remise en ordre de MVP en vibe coding",
    description:
      "Comment ajouter les couches du système de livraison que l’IA n’a pas générées : règles d’architecture, contrôles dans le pipeline, couverture de tests."
  }
] as const;

function FailureModesList(): ReactNode {
  return (
    <ul>
      <li>
        Les développeurs voient leurs collègues bloqués en revue ou en QA, refusent de «&nbsp;rester
        les bras croisés&nbsp;» tant qu’il reste du travail dans le backlog, et commencent quand même
        de nouveaux tickets en douce
      </li>
      <li>
        Une partie prenante a besoin d’un sujet urgent, l’engineering manager subit la pression d’en
        haut, la limite est suspendue «&nbsp;juste pour cette fois&nbsp;»
      </li>
      <li>
        La direction passe devant l’équipe, voit des gens qui ne tapent pas visiblement sur leur
        clavier, et demande pourquoi l’équipe n’est pas pleinement utilisée
      </li>
    </ul>
  );
}

function WipSequenceList(): ReactNode {
  return (
    <ul>
      <li>
        <strong>Rendre l’objectif explicite.</strong>{" "}
        L’objectif est de finir le travail déjà commencé. Répétez-le régulièrement. Imprimez-le sur
        un autocollant. Tout ce qu’il faut pour que le message s’installe.
      </li>
      <li>
        <strong>Expliquer pourquoi.</strong>{" "}
        Montrez la loi de Little à l’équipe. Montrez-lui le diagnostic par comptage des tâches par
        statut. Argumentez avec les maths du système&nbsp;: on suit bien mieux une pratique qu’on
        comprend qu’une règle imposée par l’autorité.
      </li>
      <li>
        <strong>Montrer des exemples réels.</strong>{" "}
        Citez des cas où l’introduction de limites de WIP a visiblement changé le système&nbsp;: vos
        propres équipes passées, des articles comme celui-ci, des retours d’expérience d’autres
        équipes. La reconnaissance de situations vécues fait l’essentiel du travail que les
        exhortations n’arrivent pas à faire.
      </li>
      <li>
        <strong>Ramener le focus, souvent.</strong>{" "}
        Chaque fois que quelqu’un s’apprête à prendre une nouvelle tâche, demandez&nbsp;: «&nbsp;que
        peux-tu faire maintenant pour faire avancer un travail existant jusqu’au bout&nbsp;?&nbsp;»
        Débloquer un coéquipier. Faire une revue. Répondre à une question de la QA. Résoudre à deux un
        conflit de fusion qui traîne. L’instinct de l’équipe est de prendre du travail neuf&nbsp;; la
        discipline consiste à rediriger cet instinct.
      </li>
    </ul>
  );
}

export function SectionIntroduceWipLimits(): ReactNode {
  return (
    <>
      <h2 id="introduce-wip-limits">9. Introduire des limites de WIP sans révolte de l’équipe</h2>
      <p>
        Les maths sont une chose. Convaincre le système de les adopter en est une autre. Les équipes
        qui ont lu des choses sur les limites de WIP, ont essayé de les mettre en place, puis ont
        discrètement abandonné sont nombreuses. La majorité, je dirais.
      </p>
      <p>
        Voici comment ça échoue. Quelqu’un, généralement l’engineering manager ou un ingénieur senior
        qui a lu le livre sur Kanban, annonce&nbsp;: «&nbsp;à partir de lundi, la limite de WIP est de
        5 par développeur, sans exception.&nbsp;» Deux semaines plus tard, il n’en reste rien. Les
        raisons de l’échec sont prévisibles&nbsp;:
      </p>
      <FailureModesList />
      <p>
        Les limites de WIP s’installent quand on les présente comme un changement de focus. Presque
        personne, ni chez les développeurs ni à la direction, ne trouve
        la règle intuitive en elle-même. Vu de l’extérieur, dire à un développeur de ne pas prendre
        de nouveau travail paraît irrationnel. C’est une posture qui va à rebours d’une culture qui
        récompense le fait de lancer des choses.
      </p>
      <p>
        Je commence donc rarement par la limite elle-même. Je commence par déplacer le focus de
        l’équipe, de démarrer vers finir. La limite s’intègre une fois ce changement de focus acquis.
      </p>
      <p>La séquence que j’utilise, dans les grandes lignes&nbsp;:</p>
      <WipSequenceList />
      <p>
        Un commentaire sous l’un de mes propres posts racontait une histoire qui résume bien tout
        cela. Une équipe avait fixé WIP = 5. Au début, les parties prenantes y ont vu un échec&nbsp;:
        trop peu de choses visiblement en cours en même temps. En un trimestre, la vitesse de
        livraison s’était améliorée, la qualité aussi, la collaboration aussi, la prévisibilité
        aussi. Le regard des parties prenantes s’est inversé. Elles ont cessé de demander
        «&nbsp;pourquoi si peu de choses en cours&nbsp;?&nbsp;» pour demander «&nbsp;pourquoi
        n’utilisons-nous pas des limites de WIP ailleurs dans l’entreprise&nbsp;?&nbsp;»
      </p>
      <p>
        Le plus difficile est généralement le management, qui assimile taux d’occupation et
        productivité. Si tout le monde dans l’équipe est «&nbsp;occupé à 100&nbsp;%&nbsp;», le
        management est rassuré&nbsp;; si quelqu’un est visiblement entre deux tickets, l’alarme
        sonne. La vérité, inconfortable, est qu’une équipe occupée à 100&nbsp;% livre presque
        toujours moins qu’une équipe occupée à 80&nbsp;%. C’est la marge dans le système qui permet
        au travail de s’écouler.
      </p>
      <p>
        Les limites de WIP n’ont pas besoin d’un formalisme Kanban. Inutile d’afficher des chiffres
        sur le tableau. Il suffit que l’équipe et ses parties prenantes s’accordent, dans les
        faits&nbsp;: on finit avant de commencer.
      </p>
    </>
  );
}

export function SectionFullSystemView(): ReactNode {
  return (
    <>
      <h2 id="full-system-view">10. La vue d’ensemble du système&nbsp;: vitesse, valeur et durabilité de la livraison</h2>
      <p>
        La vitesse seule ne donne pas une image complète. Tout cadre de métriques d’ingénierie qui
        n’optimise que la vitesse finira par casser quelque chose de plus important.
      </p>
      <p>Le modèle de diagnostic complet a trois dimensions&nbsp;:</p>
      <p>
        <strong>La vitesse du système</strong>&nbsp;: à quelle vitesse nous livrons des changements.
      </p>
      <ul>
        <li>T2M (Time to Market)&nbsp;: le temps total de l’idée à la production</li>
        <li>Débit&nbsp;: les tâches terminées par période</li>
        <li>Lead Time, Cycle Time, WIP&nbsp;: la décomposition que nous avons déjà parcourue</li>
      </ul>
      <p>
        <strong>La valeur du produit</strong>&nbsp;: ce que nous livrons est-il vraiment utile.
      </p>
      <ul>
        <li>Qualité&nbsp;: bugs ouverts, taux de régression, taux d’incidents</li>
        <li>NPS / satisfaction client&nbsp;: l’utilisateur a-t-il le sentiment que le produit s’améliore</li>
      </ul>
      <p>
        <strong>La durabilité de l’équipe</strong>&nbsp;: l’équipe peut-elle continuer à fonctionner
        ainsi.
      </p>
      <ul>
        <li>eNPS (Employee NPS)&nbsp;: l’équipe recommanderait-elle de travailler ici</li>
        <li>Signaux d’épuisement, taux de départ, charge d’astreinte</li>
      </ul>
      <p>
        Les trois comptent, ensemble, parce que deux d’entre elles peuvent toujours être
        artificiellement gonflées au détriment de la troisième. Vous pouvez livrer plus vite en
        sautant la QA et en épuisant l’équipe&nbsp;: la vitesse monte, la valeur et la durabilité
        s’effondrent. Vous pouvez peaufiner la qualité jusqu’à la perfection sans rien livrer&nbsp;:
        la valeur par fonctionnalité monte, mais l’équipe et l’entreprise stagnent. Vous pouvez
        garder l’équipe heureuse et désœuvrée&nbsp;: la durabilité est excellente, la vitesse est
        nulle.
      </p>
      <p>
        Un système de livraison qui fonctionne maintient les trois dimensions en tension. Il est
        assez rapide pour que l’entreprise reste compétitive, assez utile pour que les clients
        restent, et assez durable pour que l’équipe soit encore là l’an prochain. Quand des
        fondateurs me demandent à quoi ressemble un «&nbsp;bon&nbsp;» système, voici la
        réponse&nbsp;: trois chiffres qui évoluent à peu près ensemble.
      </p>
      <p>
        L’eNPS, en particulier, est souvent négligé parce qu’il paraît plus flou que le reste. C’est
        pourtant le système d’alerte précoce de tout le reste. Une équipe dont l’eNPS baisse
        commencera, d’ici trois à six mois, à perdre ses seniors. Leurs remplaçants seront des juniors
        qu’il faudra faire monter en compétence. Le WIP augmentera, la connaissance s’amincira, la
        qualité baissera, les bugs se multiplieront. La métrique qui avait bougé en premier était
        celle que vous aviez ignorée.
      </p>
      <p>
        Vous pouvez calculer presque tout cela à partir de Jira et d’un sondage RH régulier. Aucun
        outil spécial n’est nécessaire. Il faut seulement accepter de regarder le système avec
        honnêteté, dans ses trois dimensions à la fois.
      </p>
    </>
  );
}

export function SectionClosing(): ReactNode {
  return (
    <>
      <h2 id="closing">Quand les métriques deviennent un outil de diagnostic</h2>
      <p>
        Les métriques ne sont pas nouvelles. Les idées non plus&nbsp;: la{" "}
        <a
          href="https://en.wikipedia.org/wiki/Theory_of_constraints"
          target="_blank"
          rel="noreferrer"
        >
          théorie des contraintes
        </a>{" "}
        (années 1980), le{" "}
        <a
          href="https://en.wikipedia.org/wiki/Toyota_Production_System"
          target="_blank"
          rel="noreferrer"
        >
          Toyota Production System
        </a>{" "}
        (années 1950), la{" "}
        <a
          href="https://en.wikipedia.org/wiki/Kanban_(development)"
          target="_blank"
          rel="noreferrer"
        >
          méthode Kanban appliquée au logiciel
        </a>{" "}
        (David Anderson, années 2000) et la{" "}
        <a
          href="https://en.wikipedia.org/wiki/Little%27s_law"
          target="_blank"
          rel="noreferrer"
        >
          loi de Little
        </a>{" "}
        (1961) décrivent toutes différents aspects d’un même problème de fond&nbsp;: le travail
        circule dans des systèmes, et les systèmes ralentissent quand le flux se casse. Ce qui
        change, c’est l’usage qu’en fait votre équipe&nbsp;: un rapport ou un outil de diagnostic. Un
        rapport vous dit que quelque chose est cassé. Un diagnostic vous dit où.
      </p>
      <p>
        Quand les livraisons sont lentes, la tentation est de réagir au rapport&nbsp;: recruter des
        ingénieurs, ajouter du processus, installer un nouvel outil. La réaction ressemble à du
        mouvement&nbsp;; le progrès, lui, commence quand les métriques deviennent assez précises pour
        désigner la vraie contrainte.
      </p>
      <p>
        Si vous avez sous les yeux un tableau avec 60 à 80&nbsp;tâches actives pour une équipe de six,
        comptez les tâches par statut. Mesurez le Lead Time et le Cycle Time. Regardez la relation
        entre le WIP et le débit. Les maths du système feront l’essentiel du travail.
      </p>
    </>
  );
}

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="diagnostiquer-livraison-logicielle" heading="Un regard extérieur sur votre système de livraison" href={CTA_HREF}>
      Le premier appel de diagnostic dure 30 minutes sur Telegram. Décrivez les symptômes, et je vous
      aide à localiser le vrai goulot d’étranglement.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return (
    <BlogRelated
      post="diagnostiquer-livraison-logicielle"
      links={relatedLinks}
      intro="Si ces symptômes ressemblent aux vôtres, voici où aller ensuite selon la nature de votre code."
    />
  );
}
