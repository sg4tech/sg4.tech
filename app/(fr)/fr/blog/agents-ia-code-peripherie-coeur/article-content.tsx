// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: an agent is a teammate that shines on the
// periphery and fails at the core → for a founder that line is forgiving → in a
// company the real blocker is access, not capability → here is what the agent is
// actually good at, and what it isn't → the rule underneath it all is the cost
// of error, which quietly changes the engineer's job.

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/ai-coding-agent-periphery-core.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const STARTING_CHEAP_HREF = getPostPathInLocale("ai-made-starting-free-finishing-expensive", "fr");
const RESCUE_HREF = pagePath("fr", "ai-vibecoding");

export function ArticleLede(): ReactNode {
  return (
    <>
      Les agents IA de code excellent sur certaines tâches et sont dangereux sur d’autres. Confiez-leur
      la périphérie, gardez les humains sur le cœur&nbsp;: voici où ils ont leur place, et où ils ne
      l’ont pas.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Un agent IA de code peut trouver la cause d’un bug dans du code que personne n’a touché depuis
        un an, puis, le même après-midi, mettre en production sans sourciller un bug qui fait tomber
        le paiement, si vous le laissez approcher du cœur. L’écart entre ces deux moments est le même à toutes les
        échelles. Pour un fondateur seul, l’erreur se rattrape&nbsp;; dans une entreprise, tout se joue là.
      </p>
      <p>
        Côté fondateurs, l’essentiel est déjà tranché. Depuis un an, je vois des gens sans vrai
        bagage d’ingénieur construire et faire grandir eux-mêmes de vrais produits&nbsp;: un CRM pour
        une école en présentiel, un outil pour analystes métier, de l’automatisation marketing pour
        leurs propres besoins.{" "}
        <Link href={STARTING_CHEAP_HREF}>Le coût d’entrée pour construire s’est effondré</Link>&nbsp;:
        brancher la collecte de métriques depuis Jira et GitLab se fait en une soirée.
      </p>
      <p>
        Les pièges n’ont pas disparu&nbsp;: les agents perdent le contexte, génèrent du code étrange,
        et certains projets glissent vers le chaos. Cela se règle, et c’est une bonne part de mon
        travail&nbsp;; j’ai décrit à part <Link href={RESCUE_HREF}>comment remettre un tel projet
        d’aplomb</Link>. Voilà pour la version fondateur. Le problème plus difficile, et moins balisé,
        se situe un cran au-dessus, dans une entreprise&nbsp;: c’est le sujet de cet article.
      </p>
    </>
  );
}

export function SectionBarrier(): ReactNode {
  return (
    <>
      <h2 id="barrier">En entreprise, le vrai frein est le droit d’utiliser l’agent</h2>
      <p>
        À l’échelle d’une grande entreprise, l’agent est tout aussi capable&nbsp;; le plus dur est
        d’obtenir le droit de s’en servir. Dans les startups, l’IA est déjà un outil standard. En
        entreprise, son adoption reste bloquée des semaines en validations&nbsp;: revues de sécurité,
        données autorisées à atteindre le modèle, propriétaire de la plateforme, gouvernance des
        agents.
      </p>
      <p>
        Ce qui débloque tout&nbsp;: rien n’a besoin de sortir de l’entreprise. Vous pouvez faire
        tourner une API compatible OpenAI entièrement dans votre propre périmètre&nbsp;: un modèle open
        source comme Qwen servi via LiteLLM et vLLM, accessible uniquement par le VPN de
        l’entreprise, avec un agent comme Opencode ou Hermes branché dans l’IDE et des serveurs MCP
        qui le relient à Jira, GitLab, Confluence et au reste de vos outils internes. Il tourne avec
        les identifiants du développeur, ne touche que ce à quoi ce développeur a déjà accès et
        journalise chaque action pour l’audit. La sécurité cesse d’être un blocage. Monter toute la
        pile est un sujet à part entière, mais ce n’est plus l’obstacle d’il y a un an.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-coding-agent-periphery-core/enterprise-ai-perimeter.webp"
          alt="L’IA d’entreprise dans le périmètre de l’entreprise&nbsp;: l’IDE du développeur alimente un agent IA, qui s’appuie sur une API compatible OpenAI et un modèle open source auto-hébergé, le tout relié aux systèmes internes comme GitLab, Jira, Confluence et Grafana, sans API externe, sans privilèges supplémentaires et avec une piste d’audit complète."
          width={1372}
          height={1374}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Dans le périmètre&nbsp;: l’agent tourne sur l’infrastructure interne, avec les accès du
          développeur et une piste d’audit complète. Rien ne sort de l’entreprise.
        </FigureCaption>
      </figure>
      <p>
        Une fois l’agent en place, sur l’ordinateur du fondateur ou derrière le VPN de l’entreprise,
        la question reste la même&nbsp;: que lui confier, concrètement&nbsp;?
      </p>
    </>
  );
}

export function SectionWhatWorks(): ReactNode {
  return (
    <>
      <h2 id="what-works">Ce que les agents IA de code font bien</h2>
      <p>
        Connecté à votre code, votre documentation, vos tâches, vos tests, vos logs et vos métriques,
        qu’il s’agisse de Cursor, de Claude Code ou d’un agent interne auto-hébergé, l’agent commence
        à comprendre votre projet. Voici où il gagne sa place.
      </p>
      <ul>
        <li>
          <strong>Prendre en main du code inconnu</strong>{" "}
          — fouiller du code que vous n’avez jamais touché, trouver la cause d’un bug dans une
          fonctionnalité que vous ne connaissez pas, répondre à la question d’un analyste sur une
          fonction dont vous n’aviez jamais entendu parler.
        </li>
        <li>
          <strong>Le support au développement</strong>{" "}
          — les outils et automatisations pour lesquels personne n’avait jamais le temps&nbsp;:
          collecte de métriques, exports de données depuis Jira et GitLab, skills d’agent pour les
          tâches répétitives comme les intégrations standard. Le produit cœur, où la qualité du code
          est critique, reste en dehors.
        </li>
        <li>
          <strong>Les artefacts autour du code</strong>{" "}
          — documentation, diagrammes UML, tests automatisés, cas TestRail, présentations.
        </li>
        <li>
          <strong>Les revues</strong>{" "}
          — de code, d’exigences et de spécifications. Pour l’instant, c’est du 50/50&nbsp;: parfois
          du pur bruit, parfois une trouvaille vraiment utile.
        </li>
      </ul>
    </>
  );
}

export function SectionWhatNot(): ReactNode {
  return (
    <>
      <h2 id="what-not">Ce qu’il ne faut pas confier aux agents IA de code</h2>
      <p>
        <strong>Le développement de bout en bout de tout ce qui compte.</strong>{" "}
        L’argent, les blockchains, les systèmes à forte charge, l’architecture cœur&nbsp;: partout où
        une erreur est facile à commettre et coûteuse à rattraper. Dans une startup, confier une
        fonctionnalité entière à l’agent fonctionne déjà en partie&nbsp;; en production, avec du vrai
        trafic et du vrai argent en jeu, ce n’est pas encore une bonne idée. Est-ce que ça accélère le
        travail&nbsp;? Oui. Est-ce que ça remplace un développeur senior&nbsp;? Non.
      </p>
    </>
  );
}

export function SectionRule(): ReactNode {
  return (
    <>
      <h2 id="rule">La règle périphérie / cœur</h2>
      <p>
        Le principe est simple. L’agent couvre la <strong>périphérie</strong> du développement&nbsp;:
        la routine, les tâches de support, l’exploration de code inconnu, les artefacts, tout ce qui
        représente beaucoup de volume pour un coût d’erreur relativement faible. Le{" "}
        <strong>cœur</strong>, où le coût d’une erreur se mesure en argent et en utilisateurs, reste
        aux humains.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-coding-agent-periphery-core/periphery-vs-core.webp"
          alt="Schéma radial&nbsp;: au centre, un cœur tenu par les humains, intitulé «&nbsp;engineering decisions&nbsp;» (décisions d’ingénierie), entouré de la périphérie que couvre un agent IA&nbsp;: débogage, documentation, tests, revues, exigences, intégrations standard, automatisation et présentations."
          width={1200}
          height={1200}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          L’agent travaille la périphérie&nbsp;; au cœur, il y a la décision d’ingénierie, prise par un
          humain.
        </FigureCaption>
      </figure>
      <p>
        Les ingénieurs passaient des heures à chercher de l’information et à abattre de la routine.
        Désormais, leur travail principal est de prendre la bonne décision d’ingénierie.
      </p>
    </>
  );
}
