// Article body sections, split out of page.tsx to satisfy ESLint
// max-lines-per-function and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: complexity grows on its own and AI speeds
// it up → seven levels of CI checks, cheapest first → one table of tools per
// language → checks beat written rules because an agent can't skip a red build
// → a ready-made Python template that bundles all of it.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/code-entropy-ci-checks-ai-legacy.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";

const VIBECODED_HREF = getPostPathInLocale("vibecoded-mvp-stopped-shipping", "fr");
const TEMPLATE_HREF = "https://github.com/sg4tech/python-guardrails-template";
const LEHMAN_HREF = "https://en.wikipedia.org/wiki/Lehman%27s_laws_of_software_evolution";
const HOARE_HREF = "https://everythingsysadmin.com/2009/01/tony-hoare-apologizes-for-inve.html";
const HARNESS_HREF = "https://www.harness.io/blog/10-exception-types-in-production-java-applications";
const PLAYBOOK_URL = "https://sg4.tech/blog/code-entropy-ci-checks-ai-legacy/playbook.md";
const MILLER_HREF = "https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two";

export function ArticleLede(): ReactNode {
  return (
    <>
      La complexité du code croît d’elle-même, et l’IA a simplement accéléré cette vieille loi.
      Voici sept niveaux de contrôles CI qui empêchent le legacy de
      s’accumuler, dans l’ordre où je les mets en place.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        L’entropie croît d’elle-même. En physique, c’est le deuxième principe de la thermodynamique.
        Le développement logiciel s’en rapproche&nbsp;: le désordre s’accumule facilement, et l’ordre
        demande des efforts.
      </p>
      <p>
        Il en a toujours été ainsi. À mesure qu’un projet grandit, sa complexité grandit aussi&nbsp;:
        le legacy s’accumule, le projet devient plus difficile à maintenir, chaque modification
        pèse plus lourd, et le risque de casser quelque chose ne cesse d’augmenter. En 1974, Manny
        Lehman l’a formulé comme{" "}
        <a href={LEHMAN_HREF} target="_blank" rel="noreferrer">
          une loi de l’évolution du logiciel
        </a>
        &nbsp;: la complexité d’un système augmente, à moins qu’on ne travaille à la réduire. L’IA
        n’a rien changé à cela. Elle a seulement accéléré l’accumulation du legacy.
      </p>
      <p>
        L’objectif est de garder le code aussi simple que possible, et c’est là que les contrôles CI
        vous aident.
      </p>
    </>
  );
}

// The seven levels as a staircase: listed bottom-up in source order (cheapest
// first) and drawn with the cheapest step at the bottom. Level 7 is the only
// non-deterministic one, so it gets a dashed outline and a different tag.
const ladderSteps = [
  { level: 1, name: "Code mort" },
  { level: 2, name: "Linters et formateurs" },
  { level: 3, name: "Analyse statique" },
  { level: 4, name: "Tests unitaires et couverture" },
  { level: 5, name: "Complexité et duplication" },
  { level: 6, name: "Architecture et couplage" },
  { level: 7, name: "Règles écrites (AGENTS.md)" }
] as const;

const SOFT_LEVEL = 7;

export function LevelLadder(): ReactNode {
  return (
    <figure className={styles.ladderFigure}>
      <ol className={styles.ladder}>
        {ladderSteps.map((step) => {
          const isSoft = step.level === SOFT_LEVEL;
          return (
            <li
              key={step.level}
              className={isSoft ? `${styles.ladderStep} ${styles.ladderStepSoft}` : styles.ladderStep}
              style={{ marginLeft: `calc(${step.level - 1} * var(--step-shift))` }}
            >
              <span className={styles.ladderNumber}>{step.level}</span>
              <span className={styles.ladderName}>{step.name}</span>
              <span className={styles.ladderTag}>{isSoft ? "non imposé par la CI" : "fait échouer le build"}</span>
            </li>
          );
        })}
      </ol>
      <FigureCaption>
        Les contrôles les moins chers en bas. Les niveaux 1 à 6 font échouer le build à chaque
        fois&nbsp;; les règles écrites, tout en haut, guident l’agent sans pouvoir l’arrêter.
      </FigureCaption>
    </figure>
  );
}

export function SectionCheapLevels(): ReactNode {
  return (
    <>
      <h2 id="dead-code">1. Code mort</h2>
      <p>
        L’étape la plus simple consiste à supprimer ce qui ne sert plus. Elle s’automatise
        aussi&nbsp;: placez un détecteur de code mort dans la CI (vulture pour Python, knip pour
        JS/TS), et le code inutilisé fait tout simplement échouer le build.
      </p>
      <h2 id="linters">2. Linters et formateurs</h2>
      <p>
        Vient ensuite le linter&nbsp;: phpcs pour PHP, ruff pour Python, ESLint et Prettier pour
        JS/TS, et ainsi de suite. Chaque langage a son propre style de code, et le choix du style
        importe peu. L’essentiel est de ne pas dépenser de temps ni d’argent à lire du code et à
        écrire en revue des commentaires du genre «&nbsp;remplace les guillemets doubles par des
        simples&nbsp;». Mettez-vous d’accord une fois sur le style, et la CI le vérifie ensuite
        automatiquement.
      </p>
      <h2 id="static-analysis">3. Analyse statique</h2>
      <p>
        Le niveau suivant, ce sont les analyseurs statiques&nbsp;: PHPStan pour PHP, mypy pour
        Python, tsc pour JS/TS. Un contrôle de types statique et strict attrape les erreurs
        simples&nbsp;: une chaîne passée là où un nombre était attendu, ou l’oubli qu’une valeur peut
        être vide. Votre logique reste à votre charge, mais toute une classe d’erreurs disparaît.
        Les valeurs vides sont le cas d’école&nbsp;: Tony Hoare, l’inventeur de la référence nulle,
        l’a appelée son{" "}
        <a href={HOARE_HREF} target="_blank" rel="noreferrer">
          «&nbsp;erreur à un milliard de dollars&nbsp;»
        </a>
        , et selon{" "}
        <a href={HARNESS_HREF} target="_blank" rel="noreferrer">
          les données 2020 de Harness
        </a>
        , NullPointerException figurait encore dans le top 10 des exceptions dans 70&nbsp;% des
        environnements Java de production qu’ils avaient étudiés.
      </p>
      <h2 id="unit-tests">4. Tests unitaires et 80&nbsp;% de couverture</h2>
      <p>
        Pourquoi&nbsp;? Parce que du mauvais code est très difficile à tester unitairement. Pour
        rendre du code couvrable par des tests unitaires, il faut le découper en classes et en
        fonctions distinctes, réfléchir au couplage et aux interfaces, décider de ce qui reste
        public et de ce qui reste privé, utiliser l’injection de dépendances et éviter l’état
        global. Bien sûr, ce n’est pas une garantie à 100&nbsp;%, d’autant que l’IA gonfle
        facilement la couverture avec des tests qui ne vérifient presque rien. Mais d’une manière ou
        d’une autre, le seuil impose des contraintes à la conception et augmente les chances
        d’obtenir du bon code.
      </p>
    </>
  );
}

export function SectionComplexity(): ReactNode {
  return (
    <>
      <h2 id="complexity">5. Complexité et duplication</h2>
      <p>
        La mémoire de travail humaine ne retient que quelques éléments indépendants à la fois&nbsp;:
        George Miller en{" "}
        <a href={MILLER_HREF} target="_blank" rel="noreferrer">
          comptait 7 ± 2
        </a>{" "}
        en 1956, et Nelson Cowan a affiné ce chiffre à environ quatre en 2001. Au-delà, cela devient
        difficile et part dans le swap. Je n’ai pas vu de recherche sur ce point pour l’IA, mais si
        le code est compréhensible pour un humain, les chances augmentent que l’IA n’hallucine pas.
        Et si le code est si emmêlé qu’un humain ne peut pas le suivre, l’IA y empilera très
        probablement de nouvelles couches de legacy.
      </p>
      <p>
        Je fixe donc des limites strictes sur les métriques de duplication et de complexité. Limite
        dépassée → la CI échoue → il faut refactorer et extraire du code dans des méthodes et des
        classes séparées. Pour Python, complexipy en est un exemple.
      </p>
      <p>
        Voici ce que cela donne sur un vrai projet. Sur une plateforme où j’ai travaillé, des agents
        IA écrivaient l’essentiel du backend. Au bout de six semaines, avant que ces contrôles
        n’existent, la première mesure a trouvé 143&nbsp;fonctions d’une complexité supérieure à 10
        et 202&nbsp;fragments copiés-collés, soit environ 5&nbsp;% du code. Plus tard, quand un
        plafond strict a été introduit, la pire fonction traitait des reçus, donc de l’argent&nbsp;:
        490&nbsp;lignes pour une complexité de 73. Dès que ce plafond a commencé à faire échouer le
        build, elle est passée de 73 à 30 en quatre jours de refactoring, une fonction par commit.
        Dans les deux mois qui ont suivi la première mesure, la duplication est tombée à environ
        3&nbsp;%.
      </p>
      <p>
        Si le legacy s’est déjà accumulé, vous pouvez partir de là où vous en êtes&nbsp;: fixez la
        limite au niveau de votre fonction la plus complexe, et au moins rien ne se dégradera. La
        dette, elle, reste là. Vous la remboursez à part&nbsp;: réservez du temps pour le
        refactoring et abaissez la limite après chaque étape pour verrouiller le résultat. Les
        contrôles empêchent le désordre de grandir&nbsp;; le ménage, c’est à vous de le faire.
      </p>
    </>
  );
}

export function SectionArchitectureAndRules(): ReactNode {
  return (
    <>
      <h2 id="architecture">6. Architecture et couplage</h2>
      <p>
        Des frontières strictes réduisent aussi la complexité, un niveau plus haut. C’est comme
        l’encapsulation en POO&nbsp;: le système est construit à partir de gros blocs dont vous
        n’avez pas besoin de garder le fonctionnement interne en tête&nbsp;; connaître leur contrat
        suffit. Et l’implémentation d’un bloc peut être remplacée au besoin, sans réécrire le reste
        du système. Au lieu de dizaines de classes et de liens, vous raisonnez sur quelques gros
        blocs. Une fois encore, vous réduisez le nombre de choses à garder en tête en même temps,
        cette fois à chaque niveau de l’architecture.
      </p>
      <p>
        En pratique, cela veut dire Clean Architecture et architecture hexagonale&nbsp;: le code est
        découpé en couches, et les dépendances entre elles sont strictement limitées. Le domaine ne
        sait rien de la base de données, de HTTP ni des API externes, et le code extérieur y accède
        par des interfaces définies à l’avance. Cela aussi se vérifie automatiquement (avec
        import-linter pour Python, par exemple)&nbsp;: un import interdit apparaît, la CI échoue.
      </p>
      <h2 id="written-rules">7. Règles écrites</h2>
      <p>
        Le dernier niveau, ce sont les règles écrites. Autrefois, c’étaient des guides et de la
        documentation pour les développeurs&nbsp;; aujourd’hui, c’est un fichier AGENTS.md et de la
        documentation pour l’IA. Contrairement aux contrôles ci-dessus, le résultat n’est pas
        déterministe&nbsp;: l’IA peut lire une règle et l’enfreindre quand même. Les règles écrites
        sont donc le dernier kilomètre. Elles ne portent que ce qui n’a pas pu être couvert par des
        contrôles. À choix égal, laissez tomber la prose et écrivez un contrôle strict dans le code.
      </p>
      <p>
        L’IA essaie sans cesse de désactiver le contrôle au lieu de corriger le code&nbsp;: relever
        la limite, ajouter une exception, faire taire la règle avec un commentaire. Mon fichier de
        règles le dit donc sur une ligne à part&nbsp;: affaiblir un contrôle pour qu’il passe, c’est
        contourner le problème, et le problème reste entier.
      </p>
    </>
  );
}

type ToolRow = {
  level: string;
  python: string;
  php: string;
  js: string;
};

const toolRows: ReadonlyArray<ToolRow> = [
  { level: "Code mort", python: "vulture", php: "shipmonk/dead-code-detector (PHPStan)", js: "knip" },
  { level: "Linters et formateurs", python: "ruff", php: "PHP_CodeSniffer (phpcs)", js: "ESLint + Prettier" },
  { level: "Analyse statique", python: "mypy (strict)", php: "PHPStan", js: "tsc (strict)" },
  { level: "Tests unitaires et couverture", python: "pytest + coverage", php: "PHPUnit", js: "Jest / Vitest" },
  {
    level: "Complexité",
    python: "complexipy",
    php: "PHPMD, cognitive-complexity (PHPStan)",
    js: "ESLint complexity"
  },
  { level: "Duplication", python: "pylint duplicate-code", php: "jscpd", js: "jscpd" },
  { level: "Architecture et couplage", python: "import-linter", php: "Deptrac", js: "dependency-cruiser" }
];

export function SectionToolTable(): ReactNode {
  return (
    <>
      <h2 id="tools">Les outils, par langage</h2>
      <table className={styles.toolTable}>
        <caption className={styles.tableCaption}>
          Voici ce que j’utilise à chaque niveau&nbsp;; les outils précis comptent moins que le fait
          que chaque niveau fasse échouer le build.
        </caption>
        <thead>
          <tr>
            <th scope="col">Niveau</th>
            <th scope="col">Python</th>
            <th scope="col">PHP</th>
            <th scope="col">JS/TS</th>
          </tr>
        </thead>
        <tbody>
          {toolRows.map((row) => (
            <tr key={row.level}>
              <th scope="row">{row.level}</th>
              <td data-label="Python">{row.python}</td>
              <td data-label="PHP">{row.php}</td>
              <td data-label="JS/TS">{row.js}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Il existe aussi une version pas à pas de cet article, écrite pour les agents de code&nbsp;: le{" "}
        <a href={PLAYBOOK_URL}>playbook des garde-fous CI</a> (en anglais). Pour l’appliquer à un
        dépôt, dites à votre agent&nbsp;: <em>Applique {PLAYBOOK_URL} à ce dépôt.</em>
      </p>
    </>
  );
}

export function SectionBottomLine(): ReactNode {
  return (
    <>
      <h2 id="bottom-line">En résumé</h2>
      <p>
        L’entropie grandira quoi qu’il arrive&nbsp;; la seule question est de savoir qui la contient.
        Plus les règles passent des guides écrits aux contrôles CI automatiques, moins elles
        dépendent de l’attention d’un humain en revue. L’IA lance elle-même les contrôles, voit ce
        qui a échoué et le corrige&nbsp;: elle peut sauter une ligne d’AGENTS.md, mais elle ne peut
        pas ignorer un build CI en échec. Et plus vous avez de contrôles, plus vous pouvez lui
        confier du code sereinement.
      </p>
      <p>
        Si vous êtes fondateur et que vous ne lisez pas de code, cette liste vous sert quand même de
        questionnaire pour votre équipe&nbsp;: lesquels de ces niveaux font réellement échouer le
        build&nbsp;? Chaque réponse du type «&nbsp;on le repère en revue&nbsp;» est une règle qui
        dépend de l’attention de quelqu’un un jour donné. Pourquoi le code écrit par des agents a
        besoin de ces garde-fous, c’est une autre histoire&nbsp;:{" "}
        <Link href={VIBECODED_HREF}>gérer l’IA comme un junior</Link>.
      </p>
    </>
  );
}

export function SectionTemplate(): ReactNode {
  return (
    <>
      <h2 id="python-template">Un modèle de projet pour Python</h2>
      <p>
        L’approche ne dépend pas du langage. Pour Python, j’ai tout rassemblé dans un modèle de
        projet prêt à l’emploi&nbsp;; servez-vous-en librement&nbsp;:{" "}
        <a href={TEMPLATE_HREF} target="_blank" rel="noreferrer">
          python-guardrails-template
        </a>
        .
      </p>
      <p>Au programme&nbsp;:</p>
      <ul>
        <li>
          tous les contrôles de cet article derrière une seule commande <code>make verify</code> dans
          Docker, et la même commande dans GitHub Actions&nbsp;;
        </li>
        <li>des couches d’architecture avec contrôle des imports&nbsp;;</li>
        <li>un détecteur de secrets au moment du commit&nbsp;;</li>
        <li>un AGENTS.md où presque chaque règle renvoie au contrôle qui la fait respecter&nbsp;;</li>
        <li>un petit exemple, pour que les contrôles passent dès la création du projet.</li>
      </ul>
      <p>Un nouveau projet se crée en une commande&nbsp;:</p>
      <pre>
        <code>copier copy gh:sg4tech/python-guardrails-template my-project</code>
      </pre>
      <p>
        Et quand le modèle est mis à jour, <code>copier update</code> apporte les nouveaux contrôles
        aux projets existants en conservant vos modifications. Fini de tout reconfigurer de zéro à
        chaque nouveau projet.
      </p>
    </>
  );
}
