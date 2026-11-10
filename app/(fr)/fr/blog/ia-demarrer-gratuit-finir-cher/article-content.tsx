// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: starting got cheap while finishing didn't →
// the cost of work is now visible → the old metrics still apply → the losses
// come from waiting and context (Little's Law covers agents too) → the fix is
// finishing discipline → the constraint has moved off code production.

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/ai-made-starting-free-finishing-expensive.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const PILLAR_HREF = getPostPathInLocale("diagnose-broken-engineering-delivery", "fr");
const RESCUE_HREF = pagePath("fr", "ai-vibecoding");
const INTERRUPTED_WORK_HREF = "https://ics.uci.edu/~gmark/chi08-mark.pdf";
const LONG_CONTEXT_STUDY_HREF = "https://arxiv.org/html/2512.04307v1";

export function ArticleLede(): ReactNode {
  return (
    <>
      Les équipes dotées d’agents IA démarrent plus de travail que jamais et livrent à peu près
      autant qu’avant. Le démarrage est devenu bon marché&nbsp;; la vérification, l’intégration et la
      mise en production ont gardé leur prix. La solution est une vieille discipline&nbsp;: limiter
      le travail en cours et compter ce qui est fini.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Démarrer un nouveau travail n’a jamais coûté aussi peu. Un fil d’agent de plus. Une idée de
        plus. Une expérience de plus qui tourne en arrière-plan. Le coût pour <em>commencer</em>{" "}
        quelque chose s’est effondré&nbsp;: un agent IA prend n’importe quelle tâche que vous lui
        donnez, immédiatement, à toute heure.
      </p>
      <p>
        Ce qui ne s’est pas effondré, c’est le coût pour <em>finir</em>. Vérification, intégration,
        revue, déploiement&nbsp;: amener le travail au point où il tourne en production et rapporte
        coûte presque exactement ce que cela coûtait avant.
      </p>
      <p>
        Les équipes démarrent donc plus que jamais et livrent à peu près autant. Les tableaux se
        remplissent de travail à moitié fait. Les agents tournent toute la journée, la facture de
        tokens grimpe, et pourtant les notes de version ne sont pas plus longues qu’au trimestre
        dernier.
      </p>
      <p>
        C’est un vieux problème de flux, amplifié par de nouveaux outils, et sa solution est tout
        aussi ancienne&nbsp;:{" "}
        <strong>
          limiter le travail en cours et optimiser pour finir. Celui qui gagne, c’est celui qui
          termine le plus.
        </strong>{" "}
        La suite de cet article défend cette thèse&nbsp;: d’abord en argent, puis en mécanique.
      </p>
    </>
  );
}

export function SectionCostVisible(): ReactNode {
  return (
    <>
      <h2 id="cost">Ce que coûte vraiment le travail assisté par l’IA, et comment le compter</h2>
      <p>
        Pendant des décennies, le coût d’une tâche est resté invisible, noyé dans des salaires
        fixes. Le mois d’un développeur coûte la même chose qu’une fonctionnalité ait demandé trois
        tentatives ou trente&nbsp;; personne ne comptait donc les tentatives. Avec les agents IA,
        chaque action a un prix, et la comptabilité devient très visible, très vite.
      </p>
      <p>
        Voici à quoi cela ressemble en pratique. Un agent a fait 40&nbsp;tentatives, dépensé
        15&nbsp;$ en tokens, et n’a toujours pas livré de fonctionnalité qui marche. Multipliez
        maintenant par chaque tâche que votre équipe mène en un mois. La boucle derrière cette
        facture est familière à quiconque fait travailler des agents sur de vrais projets&nbsp;: une
        tentative. Ça marche presque. Encore une tentative. Un peu mieux. Puis quelque chose casse,
        le contexte dérape, vous commencez à corriger, et ça empire. Quelque part par là, vous le
        voyez clairement&nbsp;: une «&nbsp;tâche&nbsp;» est rarement une seule action. Ce sont des
        dizaines d’itérations (tentatives, corrections, impasses), et vous les payez toutes, y
        compris celles que vous jetez.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-made-starting-free-finishing-expensive/ai-agent-pnl.webp"
          alt="Compte de résultat d’un agent IA, dessiné à la main&nbsp;: production, zéro fonctionnalité qui marche&nbsp;; coût, 15&nbsp;$ de tokens et d’infrastructure&nbsp;; résultat, moins 15&nbsp;$, aucune fonctionnalité livrée"
          width={1200}
          height={1200}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Le compte de résultat d’une tâche ratée&nbsp;: chaque tentative facturée, rien de livré.
        </FigureCaption>
      </figure>
      <p>Pour savoir ce que coûtent réellement vos livraisons, il suffit de compter trois choses&nbsp;:</p>
      <ul>
        <li>combien de tâches ont abouti à un résultat qui fonctionne,</li>
        <li>combien d’itérations il a fallu,</li>
        <li>et combien ces itérations ont coûté.</li>
      </ul>
      <p>
        Divisez la dépense totale par le nombre de tâches terminées, et vous obtenez le chiffre qui
        compte&nbsp;: <strong>le coût par tâche réussie</strong>, ce que vous coûte réellement un
        travail <em>terminé</em>.
      </p>
      <p>
        L’optimisation cesse alors d’être une affaire de devinette. Le nouveau prompt aide-t-il
        vraiment&nbsp;? Les tests autour de l’agent sont-ils rentables&nbsp;? Ce changement de
        méthode a-t-il servi à quelque chose&nbsp;? Subjectivement, tout «&nbsp;a l’air mieux&nbsp;»,
        toujours. Le chiffre se moque des impressions&nbsp;: après chaque changement, le coût
        par tâche réussie a baissé, ou il n’a pas baissé.
      </p>
      <p>
        Un avertissement avant de vous lancer dans l’optimisation. Observez des équipes travailler
        sur cette métrique&nbsp;: elles foncent sur le prix des tokens et le choix des modèles, et
        passent à côté de la vraie fuite.{" "}
        <strong>
          L’objectif est de maximiser les résultats obtenus pour chaque dollar dépensé.
        </strong>{" "}
        Et ce qui pèse le plus sur le coût par tâche <em>terminée</em>, c’est tout le travail que
        vous avez commencé sans jamais le finir, bien plus que le prix d’une itération.
      </p>
    </>
  );
}

function MetricsTable(): ReactNode {
  return (
    <table className={styles.mappingTable}>
      <thead>
        <tr>
          <th>Métrique</th>
          <th>Ce qui change avec les agents IA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Débit&nbsp;: tâches livrées par période</th>
          <td>Rien. Ce qui compte, c’est la production.</td>
        </tr>
        <tr>
          <th>Time to Market&nbsp;: de l’idée au résultat qui fonctionne</th>
          <td>Rien. Le chronomètre court toujours jusqu’à la production.</td>
        </tr>
        <tr>
          <th>Qualité&nbsp;: travail utilisable sans reprise</th>
          <td>Rien. Ce sont toujours les reprises qui vous ruinent.</td>
        </tr>
        <tr>
          <th>NPS&nbsp;: le résultat crée-t-il de la valeur</th>
          <td>Rien. La valeur reste l’objectif.</td>
        </tr>
        <tr>
          <th>Coût par tâche réussie&nbsp;: dépense totale ÷ tâches terminées</th>
          <td>
            <strong>
              Tout. Il était invisible, noyé dans les salaires. Désormais, chaque tâche a sa facture.
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionMetricsSurvive(): ReactNode {
  return (
    <>
      <h2 id="metrics">Vos métriques de livraison s’appliquent toujours au travail assisté par l’IA</h2>
      <p>
        Si vous avez lu <Link href={PILLAR_HREF}>comment je diagnostique les systèmes de
        livraison</Link>, le cadre est le même ici. Toutes les métriques qui décrivaient une équipe
        humaine s’appliquent toujours. Une seule chose a vraiment changé&nbsp;:
      </p>
      <MetricsTable />
      <p>
        Vous pouvez livrer vite mais cher, pas cher mais noyé sous les reprises, ou beaucoup mais
        rien dont les utilisateurs ont besoin, et l’économie du projet cesse discrètement de tenir.
      </p>
      <p>Le système de mesure a survécu. Ce qui a changé, c’est l’endroit où le travail s’accumule.</p>
    </>
  );
}

export function SectionParallelTasks(): ReactNode {
  return (
    <>
      <h2 id="parallel-tasks">Pourquoi votre agent IA se dégrade à chaque tâche menée en parallèle</h2>
      <p>Deux mécanismes mangent les gains. Tous deux sont anciens&nbsp;; tous deux ont été amplifiés.</p>
      <p>
        <strong>Le premier, c’est l’attente.</strong>{" "}
        Dans la plupart des systèmes, la plupart des tâches ne sont pas en train d’être
        traitées&nbsp;: elles attendent. Regardez un flux de travail assisté par l’IA&nbsp;: vous
        attendez l’agent (génération, tests, déploiement), puis l’agent vous attend (une réponse,
        une décision, la consigne suivante). Pendant qu’une tâche attend, vous passez à une autre,
        puisque la démarrer ne coûte presque rien. Chaque tâche ajoutée allonge la file pour toutes
        les autres. La loi de Little (le lead time est égal au travail en cours divisé par le débit)
        se moque de savoir si le travail est fait par des humains ou par des agents. Démarrez plus
        sans finir plus, et chaque tâche vit simplement plus longtemps.
      </p>
      <p>
        <strong>Le second, c’est le contexte.</strong>{" "}
        Tout système a une limite à la quantité de travail actif qu’il peut porter. Pour un humain,
        cette limite, c’est l’attention et la mémoire. Une étude sur le travail interrompu a montré
        que les gens compensent bien les changements de tâche, en travaillant plus vite, mais le
        paient par une charge de travail, un stress et une frustration nettement plus élevés (
        <a href={INTERRUPTED_WORK_HREF} target="_blank" rel="noreferrer">
          Mark, Gudith &amp; Klocke, 2008
        </a>
        ). Le coût est réel&nbsp;; il se cache simplement chez les humains au lieu de figurer sur la
        facture.
      </p>
      <p>
        Pour un agent, la limite est la fenêtre de contexte, et là, la dégradation se mesure dans le
        résultat lui-même. Une{" "}
        <a href={LONG_CONTEXT_STUDY_HREF} target="_blank" rel="noreferrer">
          étude sur des agents web confrontés à des tâches à long contexte
        </a>{" "}
        (Chung et al.) a montré que les performances s’effondrent à mesure que de l’historique sans
        rapport s’accumule dans le contexte, exactement ce que produit un fil multitâche. Avec un
        bruit accumulé jusqu’à 150&nbsp;000&nbsp;tokens, les taux de réussite sont tombés de 40–50&nbsp;%
        à moins de 10&nbsp;% pour certains des modèles testés&nbsp;: GPT-4.1 est passé d’environ
        45&nbsp;% à 2,7&nbsp;%.
      </p>
      <p className={styles.pullquote}>
        Les humains perdent leur concentration, les agents perdent leur contexte&nbsp;: c’est la même
        défaillance. Trop de travail en cours dégrade celui qui travaille, qu’il soit fait de neurones
        ou de tokens.
      </p>
    </>
  );
}

export function SectionOneThread(): ReactNode {
  return (
    <>
      <h2 id="one-thread">Un fil, une tâche&nbsp;: des limites de WIP pour le travail assisté par l’IA</h2>
      <p>
        La discipline qui règle ce problème existe depuis des décennies. L’IA l’a rendue
        obligatoire, parce que la tentation de démarrer davantage n’a jamais été aussi bon marché.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-made-starting-free-finishing-expensive/busy-not-delivering.webp"
          alt="Deux tableaux kanban comparés&nbsp;: démarrer plus engorge la colonne «&nbsp;In Progress&nbsp;» (en cours) pendant que «&nbsp;Done&nbsp;» (terminé) reste maigre&nbsp;; finir plus garde peu de travail en cours et remplit «&nbsp;Done&nbsp;» de tâches terminées"
          width={1200}
          height={800}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Démarrer plus remplit le tableau. Finir plus remplit la production.
        </FigureCaption>
      </figure>
      <ul>
        <li>
          <strong>Pour les agents&nbsp;: un fil, une tâche.</strong>{" "}
          Gardez chaque fil centré sur un seul résultat. Quand des sujets annexes surgissent, un bug
          repéré au passage, un refactoring qui vaudrait le coup, notez-les dans une liste ou
          confiez-les à un autre agent, hors de la conversation en cours. Un fil centré aboutit&nbsp;;
          un fil surchargé tourne en rond.
        </li>
        <li>
          <strong>Pour vous&nbsp;: finir avant de démarrer.</strong>{" "}
          Avant d’ouvrir une nouvelle tâche, demandez-vous ce que vous pouvez clore. Un agent qui
          attend votre revue, c’est du travail en cours. Trois agents qui attendent votre revue, c’est
          une file d’attente, et le goulot d’étranglement, c’est vous.
        </li>
        <li>
          <strong>Pour l’équipe&nbsp;: les mêmes limites de WIP, pour les deux types de travailleurs.</strong>{" "}
          Le chiffre qui compte, c’est la quantité de travail inachevé présente dans le système. Une
          longue liste de fils actifs, c’est du stock.
        </li>
      </ul>
      <p>
        Le changement inconfortable porte sur ce qui compte comme signe de progrès. Le travail
        démarré était rare, donc démarrer voulait dire quelque chose. Maintenant que démarrer ne
        coûte presque rien,{" "}
        <strong>celui qui gagne, c’est celui qui termine le plus.</strong> Moins de choses en cours,
        plus de choses terminées.
      </p>
    </>
  );
}

export function SectionConstraintMoved(): ReactNode {
  return (
    <>
      <h2 id="constraint">La contrainte s’est déplacée&nbsp;: suivez-la</h2>
      <p>
        Si vous adhérez à la thèse, finir avant de démarrer, une conséquence de plus en découle, et
        pour les startups qui misent beaucoup sur l’IA, c’est la plus importante.
      </p>
      <p>
        Pour un fondateur seul ou une toute petite équipe qui utilise l’IA avec discipline, écrire du
        code a presque cessé d’être la contrainte. Les itérations coûtent peu comparées au coût du
        travail inachevé&nbsp;; la génération elle-même est rapide. Ce qui est rare désormais, c’est
        la capacité à décider <em>quoi</em> construire, <em>pourquoi</em> et <em>pour qui</em>, et la
        capacité à mener le travail jusqu’au bout. Pour une équipe produit de 5 à 50&nbsp;ingénieurs,
        coder n’est pas encore gratuit, mais la direction est la même&nbsp;: le goulot d’étranglement
        quitte la production de code pour aller vers les décisions et la finition.
      </p>
      <p>
        C’est le b.a.-ba de la théorie des contraintes&nbsp;: quand la contrainte se déplace,
        optimiser l’ancienne est un effort perdu. Gagner encore 10&nbsp;% sur la génération de code
        ne change rien si le travail meurt en attendant la vérification, la revue et une décision.
      </p>
      <p>
        L’IA rend la pensée systémique plus nécessaire que jamais, car elle rend les erreurs de
        système plus coûteuses&nbsp;: la facture arrive désormais immédiatement, détaillée, en
        dollars. Si votre système de livraison perd du travail entre «&nbsp;démarré&nbsp;» et
        «&nbsp;livré&nbsp;», les agents se feront un plaisir de démultiplier cette perte. (Si c’est
        là que vous en êtes avec un produit construit par l’IA, j’ai décrit à part{" "}
        <Link href={RESCUE_HREF}>comment remettre un tel projet d’aplomb</Link>.)
      </p>
    </>
  );
}
