// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: average misleads → median → the gap is the
// diagnosis → pick the date from a percentile → predictability is the product.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/forecast-delivery-with-percentiles.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";

const PILLAR_HREF = getPostPathInLocale("diagnose-broken-engineering-delivery", "fr");

export function ArticleLede(): ReactNode {
  return (
    <>
      La plupart des équipes prévoient leurs livraisons à partir de la moyenne. C’est le chiffre qui a
      le plus de chances de donner une image fausse du système, et chaque fois que vous l’annoncez
      puis le ratez, vous dépensez une confiance que vous auriez pu garder. Voici quoi annoncer à la
      place.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <p>
      Dès qu’une équipe commence à mesurer ses livraisons, avec les{" "}
      <Link href={PILLAR_HREF}>métriques qui montrent où ça bloque vraiment</Link>, les fondateurs
      posent toujours la même question&nbsp;: avec toutes ces données, quand peut-on promettre
      quelque chose&nbsp;? Presque tout le monde répond par une moyenne. C’est le pire chiffre
      possible pour cet usage.
    </p>
  );
}

export function SectionAverageComfort(): ReactNode {
  return (
    <>
      <h2 id="average">1. La moyenne est un confort trompeur</h2>
      <p>
        Les managers se tournent vers la moyenne parce qu’elle réduit une réalité désordonnée à un
        seul chiffre qu’on peut lancer au point quotidien. Ce confort est précisément le problème.
      </p>
      <p>Prenons un mois de travail terminé&nbsp;:</p>
      <div className={styles.numericExample}>
        <p>9 tâches terminées en ~1 jour chacune</p>
        <p>1 tâche qui a traîné un mois</p>
        <p>→ lead time moyen ≈ 4 jours</p>
      </div>
      <p>
        Aucune tâche de ce système ne prend réellement quatre jours. La plupart en prennent un&nbsp;;
        une seule retardataire tire la moyenne vers le haut. On peut se noyer en traversant une
        rivière profonde d’un mètre <em>en moyenne</em>.
      </p>
      <p className={styles.pullquote}>Le lead time moyen décrit un système que vous n’avez pas.</p>
    </>
  );
}

export function SectionMedianTypical(): ReactNode {
  return (
    <>
      <h2 id="median">2. La médiane, c’est la tâche typique</h2>
      <p>
        La médiane est la tâche du milieu&nbsp;: la moitié finit plus vite, l’autre moitié plus
        lentement. Ici, elle vaut environ un jour, et ce seul chiffre vous dit que la plupart du
        travail s’écoule vite.
      </p>
      <p>
        Cela change la lecture de la plainte. Quand quelqu’un demande «&nbsp;notre moyenne est de
        quatre jours, pourquoi sommes-nous si lents&nbsp;?&nbsp;», la moyenne cache la vraie
        forme&nbsp;: quatre-vingt-dix pour cent du travail se passe bien, quelques tâches sont
        coincées. Chaque fois que j’ai ouvert un control chart avec une équipe, l’écart entre moyenne
        et médiane racontait presque toute l’histoire&nbsp;: la plupart des tickets bouclés en un ou
        deux jours, un ou deux enterrés pendant des semaines dans une file de revue que personne ne
        surveillait. Le système va bien. C’est une poignée de tâches qui est bloquée.
      </p>
    </>
  );
}

// Right-skewed lead-time distribution. One bar per day (day 0–25); heights
// fall off into a long tail. Mean sits visibly right of the median — the
// whole point of section 3.
const DIST_HEIGHTS = [
  12, 150, 120, 70, 42, 30, 22, 16, 12, 10, 8, 7, 6, 5, 5, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1, 1
];
const DIST_TICKS = [0, 5, 10, 15, 20, 25];

function DistributionChart(): ReactNode {
  return (
    <figure className={styles.distChart}>
      <svg
        viewBox="0 0 600 244"
        role="img"
        aria-label="Distribution du lead time asymétrique à droite&nbsp;: la plupart des tâches se terminent en un à trois jours, avec une longue traîne de tâches lentes. La médiane se situe vers deux jours, dans les barres hautes&nbsp;; la moyenne est tirée vers la droite, vers cinq jours, là où presque aucune tâche n’aboutit."
      >
        <line className={styles.dcAxis} x1="50" y1="40" x2="50" y2="200" />
        <line className={styles.dcAxis} x1="50" y1="200" x2="570" y2="200" />
        {DIST_HEIGHTS.map((h, d) => (
          <rect key={d} className={styles.dcBar} x={50 + d * 20} y={200 - h} width="18" height={h} />
        ))}
        <line className={styles.dcMedian} x1="90" y1="200" x2="90" y2="44" />
        <text className={styles.dcMedianLabel} x="86" y="36" textAnchor="end">
          Médiane ~2&nbsp;j
        </text>
        <line className={styles.dcMean} x1="150" y1="200" x2="150" y2="44" />
        <text className={styles.dcMeanLabel} x="154" y="36" textAnchor="start">
          Moyenne ~5&nbsp;j
        </text>
        {DIST_TICKS.map((t) => (
          <text key={t} className={styles.dcTick} x={50 + t * 20} y="216" textAnchor="middle">
            {t}
          </text>
        ))}
        <text className={styles.dcAxisLabel} x="310" y="236" textAnchor="middle">
          lead time (jours)
        </text>
      </svg>
      <FigureCaption>
        Distribution du lead time&nbsp;: l’essentiel du travail se boucle en un ou deux jours (les
        barres hautes), mais une longue traîne de tâches bloquées tire la moyenne là où presque rien
        n’aboutit réellement.
      </FigureCaption>
    </figure>
  );
}

export function SectionGapDiagnosis(): ReactNode {
  return (
    <>
      <h2 id="gap">3. L’écart entre moyenne et médiane pose le diagnostic</h2>
      <p>
        La lecture la plus utile de tout l’exercice ne coûte donc rien&nbsp;: mettez la moyenne et la
        médiane côte à côte.
      </p>
      <DistributionChart />
      <table className={styles.diagnosticTable}>
        <thead>
          <tr>
            <th>Ce que vous voyez</th>
            <th>Ce que cela signifie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Moyenne bien au-dessus de la médiane</th>
            <td>
              Forte dispersion. Le travail avance de façon inégale&nbsp;: certaines tâches filent,
              d’autres attendent dans des files, des revues, des validations. L’écart mesure la
              profondeur des files d’attente.
            </td>
          </tr>
          <tr>
            <th>Moyenne ≈ médiane</th>
            <td>Faible dispersion. Le travail avance à un rythme régulier. Le système est stable et prévisible.</td>
          </tr>
        </tbody>
      </table>
      <p>
        L’écart lui-même est le signal. Un gros écart signale une longue traîne&nbsp;: blocages,
        passages de relais, tâches qui attendent quelqu’un. Réglez-les, et la moyenne redescend vers
        la médiane. Cela se voit d’un coup d’œil, sans chronométrer qui que ce soit.
      </p>
    </>
  );
}

function PercentileTable(): ReactNode {
  return (
    <table className={styles.diagnosticTable}>
      <thead>
        <tr>
          <th>Percentile</th>
          <th>Lead time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>P50 (médiane)</th>
          <td>2 jours</td>
        </tr>
        <tr>
          <th>P85</th>
          <td>6 jours</td>
        </tr>
        <tr>
          <th>P95</th>
          <td>11 jours</td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionPickPercentile(): ReactNode {
  return (
    <>
      <h2 id="percentile">4. Choisissez la date à partir d’un percentile</h2>
      <p>
        Les parties prenantes posent une seule question&nbsp;: quand est-ce que ce sera fini&nbsp;? Et
        elles veulent une date, sans cours de statistiques. C’est légitime&nbsp;: donnez-leur une
        date. Arrêtez seulement de la tirer du mauvais chiffre.
      </p>
      <p>
        Une estimation ponctuelle tirée de la moyenne est une promesse que la dispersion vous
        empêchera de tenir. Annoncez «&nbsp;environ quatre jours&nbsp;», ratez la date, et vous avez
        entamé la confiance, puis vous recommencez au sprint suivant. Le percentile fixe le chiffre
        dont vous partez&nbsp;: c’est la durée dans laquelle se termine une part donnée des tâches.
        Prenez une vraie distribution, moins extrême que l’exemple ci-dessus mais de même forme, et
        vous obtenez quelque chose comme&nbsp;:
      </p>
      <PercentileTable />
      <p>
        Le choix devient concret. Du travail courant&nbsp;? Engagez-vous sur le{" "}
        <strong>P85&nbsp;: «&nbsp;d’ici le sixième jour&nbsp;».</strong> Un sujet qui bloque un client
        ou une autre équipe, où un retard coûte cher&nbsp;? Annoncez le{" "}
        <strong>P95&nbsp;: «&nbsp;d’ici le onzième jour&nbsp;».</strong> Les mêmes données, deux
        promesses différentes, et vous tiendrez les deux.
      </p>
      <p>
        C’est la version honnête d’une date, avec l’incertitude déjà intégrée. Vous vous engagez sur
        une date que vous tiendrez 95 fois sur 100 (ou 85, si c’est le seuil que vous avez choisi),
        à la place d’une estimation au jugé que la dispersion du système aurait fini par faire
        tomber. Si quelqu’un veut connaître le niveau de confiance, donnez-le&nbsp;; la plupart des
        gens veulent juste la date.
      </p>
      <p className={styles.pullquote}>
        Le percentile sert à choisir la date que vous annoncez.
      </p>
      <p>
        Pour une tâche déjà en cours, prévoyez le temps qu’il lui <em>reste</em>, compte tenu du temps
        qu’elle a déjà pris, sur la même distribution. Et la première fois que vous donnez une date et
        que vous la tenez, vous cessez d’être l’équipe «&nbsp;toujours en retard&nbsp;» pour devenir
        l’équipe «&nbsp;prévisible&nbsp;», une réputation qui vaut plus que quelques tickets bouclés
        en vitesse.
      </p>
    </>
  );
}

export function SectionPredictability(): ReactNode {
  return (
    <>
      <h2 id="predictability">5. Ce que vous livrez vraiment, c’est la prévisibilité</h2>
      <p>
        Car ce que l’entreprise achète avant tout, c’est la prévisibilité, bien plus que la vitesse
        brute. Les commerciaux s’engagent auprès des clients sur vos dates, le marketing cale ses
        lancements dessus, le support planifie ses effectifs en fonction. Une équipe qui
        finit à coup sûr le vendredi vaut mieux qu’une équipe qui finit parfois le mardi et parfois
        trois semaines plus tard, parce que tout le monde en aval peut s’organiser.
      </p>
      <p>
        Et une dispersion serrée ne doit rien à la chance. Elle vient d’un travail en cours maîtrisé&nbsp;:
        un WIP élevé crée de longues files d’attente, les longues files créent la longue traîne, et
        c’est la traîne qui pousse la moyenne au-dessus de la médiane. <Link href={PILLAR_HREF}>Maîtriser
        le WIP</Link> resserre donc la distribution à lui seul. Aucun nouvel outil n’est
        nécessaire&nbsp;: le Control Chart de Jira affiche moyenne, médiane et percentiles à partir
        des données que vous avez déjà.
      </p>
      <p>
        La plupart des équipes prévoient à partir de la moyenne, puis se demandent pourquoi les dates
        glissent sans cesse. La solution consiste à lire la
        distribution que vous avez déjà&nbsp;: la médiane pour le cas typique, l’écart pour la santé
        du système, et un percentile pour la date sur laquelle vous vous engagez.
      </p>
    </>
  );
}
