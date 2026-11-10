// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds the argument: the stall pattern → the junior reframe →
// the proof case → the practice mapping → why past fixes failed → the restart
// sequence.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/vibecoded-mvp-stopped-shipping.module.css";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const PILLAR_HREF = getPostPathInLocale("diagnose-broken-engineering-delivery", "fr");
const HUB_HREF = pagePath("fr", "ai-vibecoding");
const HANGOVER_HREF = "https://www.fastcompany.com/91398622/the-vibe-coding-hangover-is-upon-us";
const VIBE_STUDY_HREF = "https://arxiv.org/abs/2512.11922";
const CONVERGED_HREF =
  "https://www.cio.com/article/4162085/your-ai-coding-agent-isnt-a-tool-its-a-junior-developer-treat-it-like-one.html";
const VERACODE_HREF = "https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/";
const AGENTS_MD_HREF = "https://agents.md";

export function ArticleLede(): ReactNode {
  return (
    <>
      Un MVP en vibe coding s’enlise pour la même raison qu’une équipe de développeurs juniors sans
      senior&nbsp;: le code s’écrit vite, rien n’arrête les erreurs avant la production, et chaque
      nouvelle modification casse discrètement la précédente.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        La même histoire revient sans cesse dans les communautés de fondateurs, au point que la
        presse tech lui a déjà donné un nom,{" "}
        <a href={HANGOVER_HREF} target="_blank" rel="noreferrer">
          la gueule de bois du vibe coding
        </a>
        , et elle arrive toujours au même point. Le MVP existe. Il a de vrais utilisateurs, parfois
        un vrai chiffre d’affaires. Les premiers mois ont été la meilleure expérience de
        construction de la vie du fondateur&nbsp;: on décrit une fonctionnalité dans Cursor, Claude
        Code, Lovable ou Bolt, et on obtient une fonctionnalité. Puis, au bout de quelques mois, les
        livraisons ralentissent jusqu’à s’arrêter. Pas d’un coup. Les mises en production font de
        plus en plus peur, les corrections prennent plus de temps, et ce qui prenait un après-midi
        commence à prendre des semaines.
      </p>
      <p>
        À ce stade, on conclut d’habitude que le code écrit par l’IA était un piège, ou que le code
        est à jeter et qu’il faut tout réécrire. Je ne crois ni l’un ni l’autre. Ce que je vois dans
        ces bases de code, je le réparais depuis des années bien avant qu’un LLM écrive la moindre
        ligne de code en production&nbsp;: le résultat d’un travail rapide de juniors, sans
        supervision. L’industrie sait gérer cela depuis des décennies, et dans un MVP en vibe coding
        typique, presque rien de ce savoir n’a été appliqué. C’est la bonne nouvelle&nbsp;: votre
        situation est bien connue, et les solutions aussi.
      </p>
    </>
  );
}

export function SectionStall(): ReactNode {
  return (
    <>
      <h2 id="stall">À quoi ressemble l’enlisement</h2>
      <p>
        Le schéma se répète avec une telle régularité que je peux lister les symptômes sans avoir vu
        le code&nbsp;:
      </p>
      <ul>
        <li>
          Vous ajoutez une fonctionnalité, et trois autres cassent. Trouver <em>lesquelles</em> prend
          plus de temps que la fonctionnalité elle-même.
        </li>
        <li>
          Certaines parties du code généré par l’IA, personne ne les comprend, ni vous, ni l’IA qui
          les a écrites. Y toucher, c’est jouer à pile ou face.
        </li>
        <li>
          L’IA réécrit sans cesse le même code autrement. Chaque correction annule la précédente.
          Vous payez des tokens pour tourner en rond.
        </li>
        <li>
          Le parcours de démo fonctionne. Puis un vrai utilisateur fait quelque chose d’un peu
          inhabituel, la production tombe en pleine nuit, et vous l’apprenez par la plainte d’un
          utilisateur.
        </li>
      </ul>
      <p>
        Les quatre symptômes ont la même origine&nbsp;: rien, ni dans le code ni dans la façon de
        travailler, ne maintient les décisions déjà prises, si bien que chaque nouvelle modification
        relance les dés sur tout ce qui précède. La recherche commence à documenter ce même
        compromis&nbsp;:{" "}
        <a href={VIBE_STUDY_HREF} target="_blank" rel="noreferrer">
          une étude récente sur le vibe coding en pratique
        </a>{" "}
        décrit une génération sans effort, payée plus tard en incohérences d’architecture, en failles
        de sécurité et en coûts de maintenance.
      </p>
    </>
  );
}

export function SectionJunior(): ReactNode {
  return (
    <>
      <h2 id="junior">Le junior le plus rapide que vous ayez jamais embauché</h2>
      <p>
        Voici le changement de regard qui rend toute la situation gérable&nbsp;: traitez l’agent de
        code comme un coéquipier au profil très particulier. C’est le développeur junior le plus
        rapide avec qui vous ayez jamais travaillé&nbsp;: il produit une fonctionnalité en quelques
        minutes, ne discute jamais, ne se fatigue jamais. Et il n’a aucun souvenir des raisons des
        décisions du mois dernier, aucune crainte de toucher à quoi que ce soit, aucune
        responsabilité sur le résultat. Il vous rendra avec aplomb du code qui a l’air fini, parce
        qu’avoir l’air fini est exactement ce qu’il optimise.
      </p>
      <p>
        Les équipes logicielles emploient exactement ce profil depuis que l’industrie existe, et
        toutes les pratiques construites autour des développeurs juniors existent à cause de lui.
        Les ingénieurs expérimentés ont{" "}
        <a href={CONVERGED_HREF} target="_blank" rel="noreferrer">
          largement adopté cette grille de lecture
        </a>
        &nbsp;; ce qui n’est pas parvenu jusqu’aux fondateurs, c’est la moitié qui compte&nbsp;: le
        système de management qui va avec.
      </p>
      <p>
        Je parle en développeur qui travaille chaque jour avec des agents IA&nbsp;: mes propres
        produits sont en vibe coding, et je n’ai aucune intention d’arrêter. Chaque modification
        produite par mes agents passe les linters, le contrôle de types et les tests en CI avant
        d’être intégrée. Les outils changent selon la stack (mypy et pytest en Python, tsc et ESLint
        en Node, PHPStan et PHPUnit en PHP), l’idée reste la même. La vitesse est réelle. Le profil
        aussi.
      </p>
    </>
  );
}

export function SectionCase(): ReactNode {
  return (
    <>
      <p>
        J’ai réparé plusieurs fois la version humaine de ce scénario. Dans une startup EdTech où
        j’intervenais comme CTO à temps partagé, la production pouvait rester en panne des heures
        avant que quelqu’un s’en aperçoive&nbsp;: rien ne la surveillait. Pas d’alertes, pas de suivi
        des erreurs. Des bugs fonctionnels restaient dans le produit sans que personne y prête
        attention. Le code avait été écrit vite, par des gens qui avaient plus de vitesse que
        d’expérience, et les plus gros manques se trouvaient autour de lui&nbsp;: personne ne relisait
        les modifications, rien ne testait les parcours critiques, rien ne surveillait la
        production, et une mise en production consistait pour un développeur à se connecter au
        serveur de production pour modifier les choses à la main.
      </p>
      <p>
        Nous avons mis en place le monitoring, ajouté des tests, la revue de code et une étape de
        QA, remplacé les modifications manuelles sur le serveur par un pipeline de mise en
        production, et réécrit certaines parties du code en chemin. Les pannes ont cessé&nbsp;; la
        production est restée stable par la suite. Sur la durée de la mission, les temps d’arrêt ont
        été divisés par plus de dix, les livraisons (time-to-market et débit) ont plus que doublé,
        les coûts d’exploitation ont été divisés par 1,5, et l’eNPS de l’équipe est passé de −100&nbsp;%
        à +100&nbsp;%. En plus des outils, j’ai pris le temps de m’asseoir en tête-à-tête avec le
        développeur, pour parler de ses objectifs et de la façon de les atteindre, parce que
        manager un junior, c’est aussi le faire grandir. Rien de tout cela n’est exotique&nbsp;: c’est
        la panoplie standard, appliquée tard.
      </p>
      <p className={styles.pullquote}>
        Cette startup n’avait pas d’IA, et l’échec est exactement le même que dans un MVP construit
        par l’IA. L’IA y arrive simplement plus vite.
      </p>
    </>
  );
}

function MappingTable(): ReactNode {
  return (
    <table className={styles.mappingTable}>
      <thead>
        <tr>
          <th>Ce que les équipes font avec les juniors</th>
          <th>L’équivalent pour l’IA</th>
          <th>Ce que cela empêche</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Un document d’accueil&nbsp;: comment on structure le code ici, ce qu’on ne fait jamais</th>
          <td>
            Un fichier de conventions que l’agent lit à chaque tâche (
            <a href={AGENTS_MD_HREF} target="_blank" rel="noreferrer">
              AGENTS.md
            </a>{" "}
            / CLAUDE.md)
          </td>
          <td>L’agent qui réinvente l’architecture à chaque demande</td>
        </tr>
        <tr>
          <th>Une revue de code avant toute fusion</th>
          <td>
            Un humain ou un agent senior relit chaque modification de l’IA&nbsp;; linters et contrôle
            de types font office de barrière stricte
          </td>
          <td>Du code qui «&nbsp;a l’air fini&nbsp;» et casse en silence des fonctionnalités qui marchaient</td>
        </tr>
        <tr>
          <th>Une suite de tests qui doit rester au vert</th>
          <td>Des tests sur les parcours critiques, lancés automatiquement&nbsp;; une suite au rouge bloque la fusion</td>
          <td>La correction qui casse deux autres choses&nbsp;; la régression découverte en production</td>
        </tr>
        <tr>
          <th>Une CI qui ne laisse pas passer les mauvaises modifications</th>
          <td>Le même pipeline, appliqué au code de l’agent&nbsp;: lint, types, scan de sécurité, build</td>
          <td>Identifiants en dur, entrées non validées, dépendances que personne n’a choisies</td>
        </tr>
        <tr>
          <th>Un monitoring, pour voir les problèmes avant les clients</th>
          <td>Suivi des erreurs et alertes branchés sur le produit déployé</td>
          <td>La production en panne pendant des heures pendant que tout le monde la croit en bonne santé</td>
        </tr>
        <tr>
          <th>
            Des tâches petites et cadrées&nbsp;: un junior ne reçoit jamais «&nbsp;refaire la
            facturation&nbsp;» en un seul ticket
          </th>
          <td>Une modification par demande, assez petite pour qu’un humain puisse vraiment relire le diff</td>
          <td>Le diff de 4&nbsp;000 lignes que personne ne peut vérifier, là où se cachent les pires surprises</td>
        </tr>
        <tr>
          <th>
            Des points individuels réguliers et du feedback, pour que le junior progresse au lieu de
            répéter ses erreurs
          </th>
          <td>
            Ce que la revue détecte est reporté dans le fichier de conventions, et l’agent cesse de
            commettre cette erreur
          </td>
          <td>Payer chaque semaine la même correction, en tokens et en temps de revue</td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionMapping(): ReactNode {
  return (
    <>
      <h2 id="practices">Ce que font les équipes expérimentées avec les juniors, et l’équivalent pour l’IA</h2>
      <p>
        Les pratiques qui transforment le travail des juniors en activité qui tourne sont connues au
        point d’en être ennuyeuses. Chacune a un équivalent direct à l’ère de l’IA, et un MVP en vibe
        coding manque généralement de toutes à la fois.
      </p>
      <MappingTable />
      <p>
        La colonne de gauche et celle de droite sont la même liste. C’est tout l’argument de cet
        article&nbsp;: la discipline pour encadrer des agents IA existe déjà, rodée sur le terrain, et
        n’attend que d’être appliquée.
      </p>
      <p>
        La ligne sécurité s’accompagne d’un chiffre à connaître&nbsp;: dans le{" "}
        <a href={VERACODE_HREF} target="_blank" rel="noreferrer">
          rapport 2025 de Veracode sur la sécurité du code généré par l’IA
        </a>
        , 45&nbsp;% des échantillons de code générés par l’IA, sur plus de 100&nbsp;modèles, ont
        échoué aux contrôles de sécurité. La barrière existe parce que le junior livre des failles à
        grande échelle.
      </p>
      <p>
        Les meilleurs prompts sont absents de la liste, et c’est voulu. Un senior règle
        l’environnement autour d’un junior pour qu’un travail bâclé ne puisse matériellement pas
        atteindre la production, quelle que soit la formulation du ticket.
      </p>
    </>
  );
}

export function SectionFailedFixes(): ReactNode {
  return (
    <>
      <h2 id="failed-fixes">Les remèdes déjà essayés, et pourquoi ils n’ont pas tenu</h2>
      <p>
        Quand un fondateur commence à chercher de l’aide extérieure, il a généralement déjà tenté
        deux ou trois sauvetages. Ces tentatives échouent de façon prévisible, et la grille du junior
        explique chacune d’elles.
      </p>
      <p>
        <strong>Changer d’outil d’IA.</strong> Remplacer Cursor par Windsurf ou Copilot, c’est
        remplacer un junior par un autre junior. Le nouveau est peut-être plus doué&nbsp;; il n’a
        toujours ni mémoire, ni crainte, ni revue qui attend son travail. Les mêmes schémas
        reviennent en quelques semaines, parce que le modèle qui écrivait le code n’a jamais été la
        cause.
      </p>
      <p>
        <strong>De meilleurs prompts et fichiers de règles.</strong>{" "}
        On s’approche&nbsp;: c’est le document d’accueil, et c’est une vraie couche. Mais une consigne
        que le pipeline ne fait pas respecter reste une suggestion. Un junior approuve le guide de
        style d’un signe de tête, puis livre ce qu’il livre&nbsp;; ce qui rend le guide réel, ce sont
        la revue et les contrôles qui le suivent.
      </p>
      <p>
        <strong>Le sprint de refactoring.</strong>{" "}
        «&nbsp;Arrêtons les fonctionnalités deux semaines et faisons le ménage.&nbsp;» Refactorer sans
        tests, c’est la façon dont un junior transforme de vieux bugs en nouveaux bugs&nbsp;: le code
        finit cassé <em>autrement</em>, et vous avez payé deux semaines d’arrêt pour ça. Le nettoyage
        vient après le filet qui rattrape ce que le nettoyage casse.
      </p>
      <p>
        <strong>Recruter un développeur senior.</strong> Le bon réflexe, souvent au mauvais moment.
        Plongez un senior dans un code sans tests, sans historique de revue et sans monitoring, et
        ses premiers mois partent en archéologie&nbsp;: redécouvrir à la main des faits que l’outillage
        devrait afficher noir sur blanc. Certains partent. Construisez d’abord le filet de sécurité,
        et la même recrue devient efficace dès la première semaine, si vous en avez encore besoin.
      </p>
    </>
  );
}

export function SectionRestart(): ReactNode {
  return (
    <>
      <h2 id="restart">Relancer les livraisons</h2>
      <p>L’ordre des opérations compte plus que n’importe quelle pratique prise isolément.</p>
      <ol>
        <li>
          <strong>Diagnostiquer d’abord.</strong> Quelle couche manquante bloque réellement les
          livraisons <em>maintenant</em>&nbsp;? Si la production casse en silence, le monitoring passe
          en premier. Si chaque modification provoque des régressions, les tests sur les deux ou
          trois parcours utilisateurs critiques passent en premier. Un MVP en vibe coding ne peut pas
          absorber six nouvelles pratiques en une semaine&nbsp;: commencez par celle qui fait le plus
          mal, puis ajoutez la suivante.
        </li>
        <li>
          <strong>Construire le filet de sécurité.</strong>{" "}
          Monitoring et suivi des erreurs, un pipeline CI avec de vrais contrôles, des tests sur les
          parcours sans lesquels l’activité meurt, une revue sur chaque modification. Humain ou
          agent, la règle est la même&nbsp;: rien n’est fusionné sans avoir été vu. Cette phase se
          compte en semaines, deux mois tout au plus, et c’est là que les livraisons repartent sans
          bruit, parce que les modifications cessent de faire peur.
        </li>
        <li>
          <strong>Ensuite seulement, passer à l’échelle.</strong>{" "}
          Nettoyage de l’architecture, optimisation des performances, décisions de recrutement&nbsp;:
          le travail qui fait grandir un logiciel généré par l’IA. Tout cela coûte peu une fois le
          filet en place, et relève de l’imprudence tant qu’il n’existe pas.
        </li>
      </ol>
      <p>
        C’est la même séquence que j’applique depuis des années aux bases de code écrites par des juniors, et
        c’est exactement ce que je propose pour les produits en vibe coding. La version longue, avec
        ce que coûte et rapporte chaque phase, se trouve sur la page{" "}
        <Link href={HUB_HREF}>Remise en ordre de MVP en vibe coding</Link>. Et si vous voulez{" "}
        <em>mesurer</em> où vos livraisons bloquent vraiment plutôt que de le deviner, quelles tâches
        restent coincées et à quelle étape, j’ai écrit un guide à part pour{" "}
        <Link href={PILLAR_HREF}>diagnostiquer un système de livraison avec des métriques</Link>. Il
        s’applique à une équipe de deux personnes assistée par l’IA exactement comme à une
        organisation de quarante ingénieurs.
      </p>
    </>
  );
}
