// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and max-lines (700) constraints. Each section
// is its own component so editorial passes touch one focused unit at a time.
//
// Sections 1–8 + header/intro live here. The trailing sections (9, 10, closing)
// plus CTA/Related/Attribution are in article-tail.tsx to keep this file
// under the 700-line cap.
//
// Section order is meaningful — the article builds an argument incrementally.
// If a section is reordered, check that the preceding text doesn't reference
// the now-displaced one.

import Image from "next/image";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/diagnose-broken-engineering-delivery.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";

export function ArticleLede(): ReactNode {
  return (
    <>
      La plupart des équipes de développement lentes ont en réalité un problème de flux. Et le premier réflexe de presque tout le monde face à ce problème
      ralentit encore le système.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Voici un schéma que j’ai vu bien des fois au fil des années&nbsp;: une équipe de six personnes
        avec 60 à 80&nbsp;tâches actives au tableau, des mises en production passées de quelques jours à
        quelques semaines, puis à «&nbsp;on verra le mois prochain&nbsp;», et une conclusion très
        raisonnable&nbsp;: plus de bras régleront le problème. En général, le vrai goulot
        d’étranglement est ailleurs.
      </p>
      <p>
        Le diagnostic décompose la trajectoire d’une seule tâche, de l’idée jusqu’à l’utilisateur,
        jusqu’à pouvoir désigner l’étape précise où le système cesse de fonctionner. Une fois cette
        étape désignée, la solution est généralement évidente, et la plupart du temps, elle ne passe
        par aucun recrutement. L’ordre ci-dessous suit celui d’une vraie mission&nbsp;: symptômes →
        décomposition → trouver le goulot → parler du levier.
      </p>
    </>
  );
}

export function SectionSymptoms(): ReactNode {
  return (
    <>
      <h2 id="symptoms">1. Les symptômes de livraisons lentes, et le mauvais premier réflexe</h2>
      <p>
        La première conversation commence presque toujours de la même façon. Le T2M se compte en
        mois. Le débit est proche de zéro. Il y a plus de bugs au tableau que de tâches ouvertes. Le
        NPS de l’équipe, interne ou externe, oscille entre mauvais et pire.
      </p>
      <p>
        Les ingénieurs travaillent, l’engineering manager fait de son mieux, le product manager
        avance péniblement dans le backlog. Et pourtant, le premier réflexe, à chaque fois, est
        «&nbsp;il nous faut plus d’ingénieurs&nbsp;». C’est le mauvais réflexe.
      </p>
      <p>
        Voici pourquoi. Quand un programme ne fonctionne pas, on ne le répare pas en ajoutant des
        développeurs au dépôt. On ouvre un débogueur. On regarde dans quel état se trouve le
        programme, où il bloque, ce qu’il fait réellement par rapport à ce qu’on attendait. Il en va
        de même pour un système d’ingénierie. Les métriques ci-dessus vous disent que le résultat est
        mauvais. Elles ne vous disent pas où le système déraille. Faire grandir l’équipe sans cette
        information ne fait que complexifier le système (plus de passages de relais, plus de travail
        en cours, des files d’attente plus profondes) et le rend presque toujours plus lent.
      </p>
      <p>
        Avant toute discussion sur le recrutement, il faut donc décomposer le processus en ses
        différentes parties et trouver où il commence à se dégrader. C’est à ce moment-là que les
        métriques cessent d’être un bulletin de notes pour devenir un outil de diagnostic.
      </p>
    </>
  );
}

export function SectionDecomposeT2M(): ReactNode {
  return (
    <>
      <h2 id="decompose-t2m">2. Décomposer le T2M&nbsp;: Discovery et Lead Time sont deux problèmes distincts</h2>
      <p>
        Quand une tâche apparaît, ce n’est pas encore vraiment une tâche. C’est une idée brute&nbsp;:
        une demande client, un rapport de bug, une hypothèse du fondateur, quelque chose que
        quelqu’un a remarqué en réunion. Avant que l’équipe puisse la construire, quelqu’un doit lui
        donner forme&nbsp;: clarifier ce qu’elle signifie vraiment, esquisser la solution, décider si
        elle en vaut la peine, obtenir les bonnes validations. Toutes les idées ne franchissent pas
        cette étape, et celles qui la franchissent ne le font pas toujours vite.
      </p>
      <p>
        Cet intervalle compte, parce que c’est là que beaucoup d’équipes brûlent des semaines sans
        s’en rendre compte.{" "}
        <strong>Le T2M, ou Time to Market, est le temps total qui sépare l’idée de la mise en
        production.</strong>{" "}
        Le premier découpage utile se fait à la frontière entre Discovery et Delivery.
      </p>
      <p>
        <strong>La Discovery</strong>{" "}
        regroupe tout ce qui se passe avant qu’un ticket soit réellement prêt à être pris par un
        développeur. Clarification des exigences, conception, cadrage, alignement des parties
        prenantes, priorisation. Résultat&nbsp;: un ticket que quelqu’un pourrait effectivement
        commencer à développer.
      </p>
      <p>
        <strong>La Delivery</strong>{" "}
        regroupe tout ce qui vient après, de «&nbsp;prêt pour le développement&nbsp;» à «&nbsp;en
        production&nbsp;». C’est ce que mesurent implicitement la plupart des métriques
        d’ingénierie, et c’est la partie sur laquelle l’équipe a une prise directe.
      </p>
      <p>
        La métrique que j’utilise pour cette seconde moitié est le <strong>Lead Time</strong>&nbsp;: le
        temps qu’un ticket passe précisément sous la responsabilité de l’équipe de développement.
        Donc&nbsp;:
      </p>
      <p className={styles.formula}>T2M = Discovery + Lead Time (Delivery)</p>
      <p>Deux chiffres, et deux problèmes très différents cachés derrière un seul T2M dégradé.</p>
      <p>
        <strong>Si le T2M est élevé mais le Lead Time faible</strong>, le goulot d’étranglement se
        situe en amont de l’ingénierie. L’équipe sait exécuter, mais le travail reste coincé en
        analyse, attend une partie prenante, patiente derrière une décision de priorisation qui n’a
        pas été prise. Recruter plus d’ingénieurs n’aidera pas&nbsp;: ils seront simplement inoccupés
        d’une autre manière. Le travail consiste à réparer le pipeline de Discovery&nbsp;: qui décide
        de ce qui est prêt, à quel rythme, avec quelles informations.
      </p>
      <p>
        <strong>Si le Lead Time est élevé</strong>, le problème se trouve dans la Delivery elle-même.
        Les tâches bloquent une fois que l’équipe les a prises&nbsp;: au développement, en revue, en
        QA, au déploiement. Il faut regarder à l’intérieur du Lead Time et identifier précisément où
        le temps passe.
      </p>
      <p>
        En pratique, la plupart des équipes avec lesquelles je travaille ont des problèmes des deux
        côtés, mais rarement dans les mêmes proportions. La première chose que fait la séparation
        entre T2M et Lead Time, c’est de vous dire quelle conversation mener en premier. Côté
        Discovery, c’est généralement une conversation avec le fondateur, le product manager et la
        personne qui porte la priorisation. Côté Delivery, c’est une conversation avec l’engineering
        manager et l’équipe. Confondre les deux est l’un des moyens les plus sûrs d’appliquer le
        mauvais remède.
      </p>
      <p>
        À l’intérieur du Lead Time, «&nbsp;travailler sur une tâche&nbsp;» et «&nbsp;la tâche est en
        cours de traitement&nbsp;» se révèlent être deux choses différentes, et c’est là que ça
        devient intéressant.
      </p>
    </>
  );
}

function TimelineDiagram(): ReactNode {
  return (
    <figure className={styles.timelineDiagram}>
      <svg viewBox="0 0 800 220" role="img" aria-labelledby="timeline-title">
        <title id="timeline-title">
          Trajectoire d’une tâche&nbsp;: Discovery, attente et Cycle Time, et les trois façons de les
          mesurer.
        </title>
        {/* Top row: 3 segments of the actual task timeline */}
        <rect x="20" y="20" width="180" height="56" rx="3" className={styles.tlSegmentDiscoveryBg} />
        <rect x="200" y="20" width="240" height="56" className={styles.tlSegmentWaitingBg} />
        <rect x="440" y="20" width="340" height="56" rx="3" className={styles.tlSegmentCycleBg} />
        <text x="110" y="55" textAnchor="middle" className={styles.tlSegmentLabel}>Discovery</text>
        <text x="320" y="55" textAnchor="middle" className={styles.tlSegmentLabel}>Attente</text>
        <text x="610" y="55" textAnchor="middle" className={styles.tlSegmentLabelOnDark}>Travail actif</text>
        {/* Alignment guides */}
        <line x1="200" y1="76" x2="200" y2="210" className={styles.tlGuide} />
        <line x1="440" y1="76" x2="440" y2="210" className={styles.tlGuide} />
        {/* Measurement bar: T2M (spans all 3) */}
        <rect x="20" y="92" width="760" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="400" y="113" textAnchor="middle" className={styles.tlMeasureLabel}>T2M&nbsp;: de l’idée à la production</text>
        {/* Measurement bar: Lead Time (Waiting + Cycle) */}
        <rect x="200" y="134" width="580" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="490" y="155" textAnchor="middle" className={styles.tlMeasureLabel}>Lead Time&nbsp;: au sein de l’équipe de dev</text>
        {/* Measurement bar: Cycle Time (Cycle only) */}
        <rect x="440" y="176" width="340" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="610" y="197" textAnchor="middle" className={styles.tlMeasureLabel}>Cycle Time&nbsp;: travail actif seul</text>
      </svg>
      <FigureCaption>
        Une même trajectoire, trois mesures différentes. Chaque métrique pointe vers un goulot
        d’étranglement différent.
      </FigureCaption>
    </figure>
  );
}

export function SectionLeadTimeCycleTime(): ReactNode {
  return (
    <>
      <h2 id="lead-time-cycle-time">3. Lead Time = attente + Cycle Time</h2>
      <p>
        La plupart des équipes pensent qu’une fois une tâche «&nbsp;prête pour le
        développement&nbsp;», le vrai travail a commencé. Ce n’est pas le cas. La tâche est posée sur
        un tableau. Un développeur est occupé par la précédente. Quelqu’un est en congé. Un bug plus
        prioritaire passe devant. Le ticket reste là. Du point de vue du tableau, la tâche est «&nbsp;en
        cours&nbsp;». Du point de vue du système, elle attend.
      </p>
      <p>
        C’est pourquoi le Lead Time seul manque de précision. Il faut séparer le temps où l’on
        travaille réellement sur une tâche du temps où elle dort dans une file. La métrique que
        j’utilise pour cela est le <strong>Cycle Time</strong>&nbsp;: le temps entre le moment où une
        tâche est réellement prise en main et celui où elle est terminée. Uniquement le travail réel.
      </p>
      <p>Mis bout à bout&nbsp;:</p>
      <div className={styles.formula}>
        T2M = Discovery + Lead Time
        <br />
        Lead Time = attente + Cycle Time
        <br />
        Cycle Time = travail, uniquement
      </div>
      <TimelineDiagram />
      <p>Deux nouvelles questions de diagnostic en découlent.</p>
      <p>
        <strong>Si le Cycle Time est élevé</strong>, le problème se trouve dans le développement
        lui-même. Une fois qu’on y travaille, la tâche met du temps à se terminer. Le goulot
        d’étranglement est dans l’exécution&nbsp;: complexité du code, revues qui traînent, tests
        instables, cycles de QA manuels, déploiements pénibles. C’est là que vous commencez à
        chercher avec l’équipe.
      </p>
      <p>
        <strong>Si le Cycle Time est faible mais le Lead Time élevé</strong>, l’équipe va bien.
        L’exécution va bien. Le système reçoit plus de travail qu’il ne peut en traiter. Les tâches
        s’empilent dans la file et attendent que l’équipe finisse le lot précédent avant même de
        pouvoir être commencées.
      </p>
      <p>
        C’est ce second cas qui prend les fondateurs au dépourvu. L’équipe avance vite sur chaque
        tâche prise isolément. Le tableau, lui, semble figé. Le réflexe est de pousser sur le débit
        individuel, alors que le vrai problème oppose la demande en amont à la capacité de l’équipe.
        La bonne conversation porte ici sur deux options&nbsp;: ajouter de la capacité de façon
        ciblée, ou limiter la quantité de travail que l’équipe accepte en même temps. Nous y
        reviendrons.
      </p>
      <p>
        <strong>Tableau de diagnostic rapide</strong> pour un premier échange avec la direction&nbsp;:
      </p>
      <table className={styles.diagnosticTable}>
        <thead>
          <tr>
            <th scope="col">Ce que montre la métrique</th>
            <th scope="col">Ce que cela signifie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Cycle Time élevé</th>
            <td>Problème d’exécution&nbsp;: regardez dans le développement.</td>
          </tr>
          <tr>
            <th scope="row">Lead Time élevé, Cycle Time normal</th>
            <td>La demande dépasse la capacité.</td>
          </tr>
          <tr>
            <th scope="row">Cycle Time faible, Lead Time faible, T2M élevé</th>
            <td>Le goulot d’étranglement est dans la Discovery.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Cela fait trois chiffres. Vous pouvez tous les extraire de Jira ou de Linear en un
        après-midi, et ils raconteront déjà une autre histoire que «&nbsp;il faut recruter&nbsp;».
      </p>
    </>
  );
}

export function SectionWhereStuck(): ReactNode {
  return (
    <>
      <h2 id="where-stuck">4. Où le travail bloque vraiment&nbsp;: pourquoi le temps par statut peut tromper</h2>
      <p>
        Le Cycle Time est donc élevé. Le réflexe naturel est de regarder à l’intérieur&nbsp;: mesurer
        le temps passé dans chaque statut. In Progress, Code Review, QA, Deploy. Additionner les
        heures. Trouver la colonne la plus lente. La réparer.
      </p>
      <p>
        C’est ce que font la plupart des équipes, et cela fonctionne, jusqu’à un certain point. Si vos
        tâches bloquent en revue de code, vous pouvez lire le temps passé dans la colonne et ouvrir
        une vraie discussion sur la charge des relecteurs, la taille des PR, le délai de revue
        attendu. Même chose pour les goulots en QA, même chose pour les files de déploiement. Les
        données sont réelles et l’intervention est ciblée.
      </p>
      <p>Mais il y a un piège, et je veux être précis à son sujet.</p>
      <p>
        Les tâches ne traversent pas les étapes de façon linéaire. Elles reviennent en arrière&nbsp;: de
        la QA au développement quand un bug est trouvé, de la revue au développement quand un
        commentaire tombe, du déploiement au développement quand quelque chose échoue en staging. La
        même tâche traverse la même étape deux, trois, parfois cinq fois. Dès que vous mesurez le
        «&nbsp;temps moyen en QA&nbsp;», cette moyenne mélange en silence des tickets à leur premier
        passage et d’autres à leur troisième retour en QA.
      </p>
      <p>
        À ce stade, la plupart des équipes redoublent d’efforts sur la mesure. Des tableaux de bord
        plus détaillés. Le suivi de chaque transition. Des métriques sur le «&nbsp;taux d’échec en QA
        au premier passage&nbsp;» et les «&nbsp;retours de revue par ticket&nbsp;». Des rapports Jira
        sur mesure. Vous finissez avec un magnifique instrument dont personne ne peut rien tirer,
        parce que les données se sont compliquées plus vite que le système ne s’est éclairci.
      </p>
      <p>
        L’erreur est de mesurer le système au mauvais niveau. L’optimisation locale, qui consiste à
        accélérer chaque colonne, suppose que le travail s’écoule de façon linéaire. Ce n’est pas le
        cas. Le système est un flux, avec ses remous, ses boucles et ses files d’attente.
      </p>
      <p>
        Ce qui aide vraiment, c’est d’arrêter de vouloir mesurer chaque étape plus précisément et de
        regarder comment le travail circule dans le système dans son ensemble. La bonne question
        devient&nbsp;: «&nbsp;combien de tickets se trouvent dans le système en même temps, et quelle
        part avance réellement plutôt que d’être simplement retenue&nbsp;?&nbsp;» Une fois cette
        question posée, le reste du diagnostic se simplifie beaucoup.
      </p>
    </>
  );
}

function QueueChart(): ReactNode {
  return (
    <figure className={styles.queueChart}>
      <svg viewBox="0 0 800 220" role="img" aria-labelledby="queue-chart-title">
        <title id="queue-chart-title">
          Nombre de tâches par statut&nbsp;: en cours 5, revue de code 3, QA 25, déploiement 2. La QA
          est le goulot d’étranglement.
        </title>
        {/* In Progress: 5 → bar 110px (scale 22 px/unit) */}
        <text x="140" y="40" textAnchor="end" className={styles.qcLabel}>En cours</text>
        <rect x="160" y="20" width="110" height="30" rx="3" className={styles.qcBar} />
        <text x="280" y="40" className={styles.qcValue}>5</text>
        {/* Code Review: 3 → bar 66px */}
        <text x="140" y="90" textAnchor="end" className={styles.qcLabel}>Revue de code</text>
        <rect x="160" y="70" width="66" height="30" rx="3" className={styles.qcBar} />
        <text x="236" y="90" className={styles.qcValue}>3</text>
        {/* QA: 25 → bar 550px — the bottleneck */}
        <text x="140" y="140" textAnchor="end" className={styles.qcLabelBottleneck}>QA</text>
        <rect x="160" y="120" width="550" height="30" rx="3" className={styles.qcBarBottleneck} />
        <text x="720" y="140" className={styles.qcValueBottleneck}>25</text>
        {/* Deploy: 2 → bar 44px */}
        <text x="140" y="190" textAnchor="end" className={styles.qcLabel}>Déploiement</text>
        <rect x="160" y="170" width="44" height="30" rx="3" className={styles.qcBar} />
        <text x="214" y="190" className={styles.qcValue}>2</text>
      </svg>
      <FigureCaption>
        Là où les tâches s’accumulent, la capacité du système atteint son plafond.
      </FigureCaption>
    </figure>
  );
}

export function SectionCountTasks(): ReactNode {
  return (
    <>
      <h2 id="count-tasks">5. Comment trouver les goulots d’étranglement sans mesurer le temps</h2>
      <p>Voici le geste de diagnostic le plus sous-estimé que je connaisse.</p>
      <p>
        Pas besoin de mesurer le temps passé dans chaque statut pour trouver le goulot
        d’étranglement. Il suffit de <strong>compter les tâches dans chaque statut</strong>.
      </p>
      <p>
        Sortez ces chiffres de Jira en cinq minutes. La forme ressemble presque toujours à
        ceci&nbsp;:
      </p>
      <QueueChart />
      <p>Cherchez ensuite les déséquilibres.</p>
      <p>
        Si vous avez cinq tâches en développement, trois en revue et vingt-cinq en QA, vous n’avez
        pas besoin de chronomètre. Ni d’un tableau de bord Looker. Le goulot, c’est la QA&nbsp;: les
        tâches s’y entassent. Le système a un endroit
        où le travail s’accumule plus vite qu’il ne s’écoule.
      </p>
      <p>
        Ce simple comptage vous apprend presque tout ce que vous apprendrait le temps par statut, pour
        environ un pour cent de l’effort. Il fonctionne parce que les files d’attente sont la face
        visible d’un problème de flux&nbsp;: là où elles se forment, la capacité du système atteint
        son plafond.
      </p>
      <p>
        Il recadre aussi la conversation. Le temps par statut invite à débattre de «&nbsp;combien de
        temps en QA, c’est trop&nbsp;». Le comptage rend le problème évident&nbsp;: vingt-cinq tâches
        qui attendent deux ingénieurs QA, c’est un problème de système, et l’équipe QA n’y peut rien
        en travaillant plus vite.
      </p>
      <p>
        C’est le diagnostic le moins cher et le plus rapide de tout le guide, et la plupart des
        équipes passent devant sans s’arrêter, pressées de construire des tableaux de bord dont elles
        ne se serviront jamais.
      </p>
      <p>
        Mais il soulève une question plus profonde. <strong>Pourquoi</strong> vingt-cinq tâches
        sont-elles en QA&nbsp;? D’où viennent-elles&nbsp;? Pourquoi l’équipe continue-t-elle
        d’accepter du nouveau travail alors qu’un mur de tickets inachevés encombre déjà le
        système&nbsp;?
      </p>
    </>
  );
}

export function SectionWip(): ReactNode {
  return (
    <>
      <h2 id="wip">6. Le travail en cours (WIP)&nbsp;: la variable qui pilote la vitesse de livraison</h2>
      <p className={styles.pullquote}>Six ingénieurs. Quatre-vingts tâches en cours. Rien n’aboutit.</p>
      <p>
        Ce n’est pas une exagération. J’ai vu exactement cette configuration à plusieurs reprises.
        Une équipe de trois développeurs, deux ingénieurs QA et un tech lead&nbsp;: plus de
        quatre-vingts tickets actifs au tableau. Pour une équipe de six.
      </p>
      <p>
        L’histoire est toujours la même. Un développeur termine la partie active d’une tâche et
        l’envoie en revue. Son ticket est désormais bloqué par quelqu’un d’autre. Plutôt que
        d’attendre, il en prend un autre dans le backlog. Celui-là se bloque aussi, en attente de la
        QA. Il en prend un autre. Le tableau se remplit de tâches techniquement «&nbsp;en
        cours&nbsp;», qui en réalité attendent quelqu’un d’autre, ailleurs, pour une autre raison.
      </p>
      <p>
        C’est le <strong>travail en cours (WIP, Work in Progress)</strong>&nbsp;: le nombre de tâches
        que le système porte à un instant donné.
      </p>
      <p>
        L’équipe ne peut matériellement pas travailler sur quatre-vingts choses à la fois. Six
        personnes, quatre-vingts tâches. L’essentiel du travail dort. En attente de revue, bloqué en
        QA, mis de côté parce qu’une partie prenante n’a pas répondu, en partie fait et fusionné mais
        pas encore déployé. Chacun de ces tickets occupe une place dans le système&nbsp;: une place
        dans la tête de quelqu’un, une place au tableau, un état dont quelqu’un doit entretenir le
        contexte.
      </p>
      <p>Le coût s’accumule&nbsp;:</p>
      <ul>
        <li>
          Les tâches perdent leur pertinence métier pendant qu’elles attendent. Quand l’équipe y
          revient, les exigences ont bougé ou l’urgence s’est évaporée.
        </li>
        <li>
          Les conflits de fusion s’accumulent. Une branche de fonctionnalité qui dort trois semaines
          pendant que la branche principale avance devient un petit chantier archéologique à
          intégrer.
        </li>
        <li>
          Les changements de contexte coûtent cher. Chaque développeur garde en tête trois ou quatre
          tâches «&nbsp;en cours&nbsp;» à la fois. Aucune n’avance réellement.
        </li>
        <li>
          Les bugs passent plus facilement. Avec plus de travail en cours, chaque élément reçoit moins
          d’attention. La qualité baisse.
        </li>
      </ul>
      <p>
        Et les métriques le confirment. Un WIP élevé va de pair avec un T2M élevé (les tâches mettent
        plus de temps à sortir), un débit faible (moins de tâches terminées par semaine), plus de bugs
        (moins d’attention par tâche) et un NPS plus bas, côté clients comme côté équipe.
      </p>
      <p>
        C’est la variable qui pilote le système&nbsp;: la quantité de travail que l’équipe essaie de
        mener de front.
      </p>
    </>
  );
}

export function SectionLittlesLaw(): ReactNode {
  return (
    <>
      <h2 id="littles-law">7. La loi de Little&nbsp;: Lead Time = WIP / débit</h2>
      <p>
        Si vous avez l’impression que les sections précédentes reviennent toujours à la même
        conclusion, vous avez raison. Il y a une raison à cela.
      </p>
      <p>
        La recherche opérationnelle l’a établi il y a des décennies. La relation entre la quantité de
        travail dans un système et le temps que ce travail met à en sortir est donnée par la{" "}
        <strong>loi de Little</strong>&nbsp;:
      </p>
      <p className={styles.formula}>Lead Time = WIP / débit</p>
      <p>Dans le langage de la livraison logicielle&nbsp;:</p>
      <ul>
        <li>
          <strong>WIP</strong>&nbsp;: combien de tâches se trouvent dans le système en même temps
        </li>
        <li>
          <strong>Débit</strong>&nbsp;: combien de tâches l’équipe termine par période
        </li>
        <li>
          <strong>Lead Time</strong>&nbsp;: combien de temps une tâche vit dans le système, en moyenne
        </li>
      </ul>
      <p>La formule est d’une simplicité presque gênante, et sa conséquence est brutale.</p>
      <p>
        À débit constant, augmentez le WIP, et le lead time augmente proportionnellement. Exemple
        chiffré&nbsp;: une équipe qui termine dix tâches par semaine.
      </p>
      <div className={styles.numericExample}>
        <p>10 tâches dans le système → lead time moyen ≈ 1 semaine</p>
        <p>30 tâches → ≈ 3 semaines</p>
        <p>80 tâches → ≈ 8 semaines</p>
      </div>
      <p>
        L’équipe travaille à la même vitesse dans les trois scénarios. Les ingénieurs ne sont pas
        plus lents. Les tickets ne sont pas plus complexes. La seule chose qui a changé, c’est le
        nombre de tâches que le système essaie de porter simultanément. Et le lead time moyen a été
        multiplié par 8.
      </p>
      <p>
        C’est pourquoi les équipes qui travaillent plus dur ne livrent pas forcément plus vite. À
        force d’efforts, vous pouvez gagner 10 à 20&nbsp;% de débit. Avec de la discipline, vous
        pouvez réduire le WIP de 50&nbsp;% ou plus. Les maths disent que le second levier pèse plus
        sur les résultats.
      </p>
      <p>
        C’est aussi pourquoi «&nbsp;il nous faut plus d’ingénieurs&nbsp;» aggrave si souvent les
        choses. Les nouveaux ingénieurs apportent leur propre travail en cours. Le WIP augmente plus
        vite que le débit, et le lead time se dégrade avant de s’améliorer. L’onboarding le rend
        presque inévitable&nbsp;: les recrues mettent six à huit semaines à contribuer vraiment, et
        pendant ce temps, le WIP de l’équipe existante augmente (mentorat, transmission du contexte,
        revue des PR des nouveaux).
      </p>
      <p className={styles.pullquote}>
        Si vous ne retenez qu’une formule, retenez celle-ci&nbsp;: Lead Time = WIP / débit.
      </p>
      <p>
        C’est la mécanique du système derrière presque toutes les conversations du type «&nbsp;on
        avance trop lentement&nbsp;» que j’ai eues avec des équipes d’ingénierie.
      </p>
    </>
  );
}

export function SectionWipLimits(): ReactNode {
  return (
    <>
      <h2 id="wip-limits">8. Les limites de WIP&nbsp;: le levier qui répare la plupart des équipes lentes</h2>
      <p>
        Si le WIP est la variable qui pilote la vitesse du système, et qu’on peut rarement changer le
        débit de façon spectaculaire à court terme, le levier est évident&nbsp;: limiter le WIP.
      </p>
      <p>
        Derrière le problème de productivité de la plupart des équipes d’ingénierie se cache un
        problème de WIP. Réglez le WIP, et la plupart des autres symptômes (lead times longs, bugs
        fréquents, faible prévisibilité, changements de contexte permanents) s’améliorent en même
        temps.
      </p>
      <p>
        <strong>Les limites de WIP</strong> sont une discipline qui consiste à dire&nbsp;: ce système
        ne portera pas plus de N tâches à la fois. Si le WIP atteint la limite, aucun nouveau travail
        ne commence tant qu’un travail existant n’est pas terminé. Point.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/diagnose-broken-engineering-delivery/too-much-wip-vs-wip-limits.webp"
          alt="Deux pipelines de livraison comparés sous Lead Time = WIP / débit&nbsp;: sans limites, les tâches s’entassent en QA et le lead time devient imprévisible&nbsp;; avec des limites de WIP, chaque étape porte quelques tâches et le travail s’écoule de façon prévisible"
          width={1200}
          height={800}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Même débit, WIP différent&nbsp;: les files raccourcissent et le lead time devient
          prévisible.
        </FigureCaption>
      </figure>
      <p>Ce que les limites de WIP améliorent concrètement&nbsp;:</p>
      <ul>
        <li>Moins de changements de contexte, parce que chacun porte moins de choses en parallèle</li>
        <li>Des files plus courtes à chaque étape, parce qu’il y a moins de travail dans le système</li>
        <li>Un Lead Time plus court, mécaniquement, par la loi de Little</li>
        <li>Moins de bugs, parce que l’attention se concentre sur finir plutôt que sur démarrer</li>
        <li>Plus de prévisibilité, parce que le système cesse d’osciller entre sous-charge et blocage</li>
      </ul>
      <p>
        Ce que les limites de WIP ne font pas, et c’est ce qui déroute la direction, c’est accélérer
        chaque développeur individuellement. Elles accélèrent le système. L’équipe ne produit pas plus
        de code par heure-personne. Elle produit simplement moins de morceaux de code à moitié finis
        en parallèle, ce qui veut dire qu’une plus grande part de ce qu’elle produit arrive réellement
        en production.
      </p>
      <p>
        C’est aussi l’un des très rares leviers qui améliorent la livraison sans recrutement, sans
        nouvel outil et sans refonte des processus. Il ne coûte rien. Il peut s’appliquer dès cette
        semaine. Et presque personne ne l’actionne, parce qu’il exige de dire «&nbsp;non&nbsp;» au
        démarrage de nouveaux travaux, et dire «&nbsp;non&nbsp;» à une partie prenante qui demande
        une chose de plus en parallèle est plus difficile que dire «&nbsp;oui&nbsp;».
      </p>
      <p>
        Les limites de WIP sont avant tout une affaire de discipline&nbsp;: celle d’une équipe et de
        ses parties prenantes capables de finir avant de commencer.
      </p>
    </>
  );
}
