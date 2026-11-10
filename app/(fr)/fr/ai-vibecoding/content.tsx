import type { OgCardContent } from "../../../_og/render";
import type { AiVibecodingContent } from "../../../views/ai-vibecoding/ai-vibecoding-content";

const description =
  "Il manque à votre MVP en vibe coding un cadre autour du code. Je mets en place contrôles automatiques, tests, CI/CD et architecture, que l’IA ne construit pas.";

export const aiVibecodingContent: AiVibecodingContent = {
  meta: {
    title: "Votre MVP en vibe coding, enfin livrable",
    description,
    socialTitle: "D’un MVP en vibe coding à une activité qui tourne",
    socialDescription: description
  },
  service: {
    name: "Remise en ordre de MVP en vibe coding",
    serviceType: "Développement pour MVP construits avec l’IA",
    description:
      "Développement pour les fondateurs dont le MVP en vibe coding ne sort plus de nouvelles versions. Je mets en place le cadre de développement qui manquait à ce code."
  },
  hero: {
    eyebrow: "MVP en vibe coding → activité qui tourne",
    headlineLeadIn: "Il manque à votre MVP en vibe coding ",
    headline: "un cadre autour du code.",
    statement:
      "Ni un nouvel outil IA ni un sprint de refactoring ne règlent le problème. Il faut le cadre de développement que l’IA ne construit pas.",
    promise: "Je trouve ce qui manque, je le construis et je laisse un système qui fonctionne sans moi.",
    outcome: "Pour livrer du nouveau sans craindre de casser ce qui marche.",
    habrSignal: { label: "J’en parlais sur Habr dès 2023", href: "https://habr.com/ru/articles/719352/" },
    statsAriaLabel: "Résultats clés",
    metrics: [
      { id: "experience", figure: "15+", label: "ans de développement" },
      { id: "rps", figure: "4K+", label: "RPS sur des systèmes en production" },
      { id: "teams", figure: "14+", label: "équipes dont j’ai accéléré les livraisons" }
    ],
    primaryCta: {
      label: "Décrivez votre situation sur Telegram",
      href: "https://t.me/sg4tech?start=site_fr_ai_vibecoding_hero"
    },
    secondaryCtaLabel: "Comment ça marche",
    transformation: {
      withoutSystem: {
        title: "L’IA sans cadre",
        subtitle: "Le code est là. Puis le chaos commence.",
        generate: "L’IA écrit le code",
        patch: "On corrige un bug",
        breakFeature: "Une fonctionnalité casse",
        patchAgain: "On corrige encore",
        regressions: "Nouvelles régressions",
        incident: "Panne en production à 3 h du matin",
        footer: "Imprévisible. Coûteux. Stressant."
      },
      withSystem: {
        title: "L’IA dans un cadre",
        subtitle: "L’IA va vite. Le cadre protège.",
        generate: "L’IA écrit le code",
        guardrails: "Contrôles automatiques",
        tests: "Tests",
        cicd: "CI/CD",
        safeReleases: "Mises en production sûres",
        footer: "Prévisible. Évolutif. Durable."
      },
      caption: "La même IA. Un autre cadre autour."
    }
  },
  problem: {
    title: "Les failles d’un MVP en vibe coding apparaissent toujours de la même façon.",
    points: [
      {
        id: "breaks",
        text: "Vous ajoutez une fonctionnalité, et trois autres cassent sans bruit. Les deux jours suivants servent à trouver lesquelles."
      },
      {
        id: "unknown",
        text: "Certaines parties du code, personne ne les comprend vraiment, vous compris. Y toucher, c’est jouer à la roulette russe."
      },
      {
        id: "loops",
        text: "L’IA réécrit sans cesse le même code autrement. Chaque correction annule la précédente, et vous payez des tokens pour tourner en rond."
      },
      {
        id: "prod",
        text: "En démo, tout marche. Un vrai utilisateur saisit quelque chose d’inattendu, et la production tombe à 3 h du matin. Vous regardez le code sans savoir comment il fonctionne."
      }
    ],
    callout: "Tous ces problèmes ont la même cause : l’IA écrit du code sans construire de cadre autour."
  },
  guardrails: {
    title: "Cinq couches de protection que l’IA ne fournit pas",
    intro:
      "Cinq couches distinctes, chacune veille sur ce que l’IA ignore. Ensemble, elles forment le cadre qui permet à votre produit de continuer à sortir.",
    productionLabel: "Production",
    agentsLabel: "Agents IA",
    layers: [
      {
        id: "architecture",
        label: "Règles d’architecture",
        text: "Une architecture qui tient d’elle-même. Les frontières des modules, les dépendances et les contrats sont écrits de sorte que les agents IA ne puissent pas les contourner."
      },
      {
        id: "pipeline",
        label: "Contrôles dans le pipeline",
        text: "Des contrôles CI/CD qui bloquent les mauvaises mises en production. Un monitoring qui repère les problèmes avant vos clients, et avant 3 h du matin."
      },
      {
        id: "tests",
        label: "Tests",
        text: "Des tests automatisés qui ne font pas confiance à la prochaine génération de code. Unitaires, d’intégration et de non-régression, pour qu’une nouvelle fonctionnalité n’en casse pas trois autres en silence."
      },
      {
        id: "code",
        label: "Contrôles du code",
        text: "Linters, vérification des types, analyse statique, scanners de sécurité. La base que la plupart des MVP en vibe coding sautent. Sans elle, une correction en casse dix ailleurs."
      },
      {
        id: "aiWorkflow",
        label: "Règles pour l’IA",
        text: "Le cadre qui manquait à l’IA : règles pour les agents, discipline du contexte et autocontrôles, pour que l’IA n’annule pas la correction de la semaine dernière en construisant la fonctionnalité du jour."
      }
    ]
  },
  trust: {
    intro:
      "Votre IA reste en place, je construis le cadre autour. Pendant des années, j’ai remis en ordre du code de startup écrit dans l’urgence, avec exactement les mêmes problèmes. La source change, la solution reste la même.",
    points: [
      {
        id: "experience-stack",
        text: "Plus de 15 ans sur PHP, Python, Java, TypeScript, Node, C++, C#, iOS, Android (et oui, Flash une fois). Les problèmes de code qui freinent le développement ne dépendent pas du langage. L’IA les fait simplement apparaître plus vite."
      },
      {
        id: "track-record",
        text: "J’ai résolu ce problème chez Wowworks, où j’ai amené un code de startup jusqu’à une production prête pour l’Europe, et dans une EdTech en pleine croissance. Cette approche est plus ancienne que l’IA.",
        outcomes: [
          { company: "Wowworks", chips: ["bugs ↓10×", "vitesse ↑3×", "efficacité ↑4×"] },
          { company: "EdTech", chips: ["vitesse ↑2×", "interruptions ↓10×", "eNPS −100→100"] }
        ]
      },
      {
        id: "habr",
        text: (
          <>
            J’ai écrit précisément sur ce sujet sur{" "}
            <a href="https://habr.com/ru/articles/719352/" target="_blank" rel="noreferrer">
              Habr
            </a>{" "}
            en 2023, avant que l’IA n’accélère tout.
          </>
        )
      },
      {
        id: "hands-on",
        text: "Je fais le travail moi-même : architecture, contrôles automatiques, réglage du travail avec l’IA, refactoring."
      }
    ]
  },
  process: {
    title: "Ma méthode",
    intro:
      "Aucune solution décidée d’avance. D’abord, nous regardons ce qui est vraiment cassé. Ensuite, nous sécurisons les mises en production. Enfin, nous construisons un système qui supporte la croissance.",
    outputLabel: "Résultat :",
    steps: [
      {
        title: "Audit",
        duration: "1–2 semaines",
        points: [
          "J’examine le code, le processus de développement et l’usage que l’équipe fait de l’IA",
          "Je repère ce qui bloque, ce qui fonctionne et ce qui manque",
          "Je décide quoi corriger en premier selon l’impact sur l’activité"
        ],
        output: "Une vision claire et un plan de corrections par priorité"
      },
      {
        title: "Protection contre la casse",
        duration: "2–8 semaines",
        points: [
          "Je pose les bases du développement : git, CI/CD, monitoring, logs",
          "J’ajoute les cinq couches de contrôles, règles pour l’IA comprises",
          "Je corrige les bugs critiques qu’elles révèlent"
        ],
        output: "Un code que l’on peut mettre en production sans risque, des bugs critiques corrigés, une IA qui travaille dans un cadre"
      },
      {
        title: "Changement d’échelle",
        duration: "Ensuite, sur plusieurs mois",
        points: [
          "Je définis l’architecture cible et j’y amène le code sans risque",
          "J’adapte le système à votre charge réelle",
          "Je recrute des spécialistes ciblés, seulement si la croissance l’exige"
        ],
        output: "Un code qui peut évoluer, et que les nouveaux arrivants ne cassent pas"
      }
    ],
    note: "L’objectif : moins de chaos, des mises en production prévisibles et la confiance pour avancer.",
    expectations: {
      title: "À quoi vous attendre",
      points: [
        "Premières améliorations du CI/CD et du monitoring en 2 à 4 semaines",
        "Bugs critiques en général corrigés dès le premier mois",
        "Remettre l’architecture en ordre prend quelques mois ; la durée exacte dépend du code de départ et de l’équipe"
      ]
    }
  },
  whoNotFor: {
    title: "À qui je ne conviens pas",
    items: [
      "Votre principal goulot d’étranglement, c’est le marketing et la vente. Il vous faut un spécialiste de la mise sur le marché.",
      "Vous n’avez pas encore de MVP qui fonctionne. Il faut d’abord le construire, puis le réparer.",
      "Vous cherchez une aide gratuite ou des conseils pour tout faire vous-même."
    ]
  },
  featuredEssay: {
    label: "Article sur le sujet",
    slug: "vibecoded-mvp-stopped-shipping"
  },
  faq: [
    {
      question: "Devrai-je abandonner mes outils IA ?",
      answer:
        "Non. Je fais moi-même du vibe coding : je travaille avec Claude Code, Codex et un IDE JetBrains. Je ne suis lié à aucune stack, donc les outils de votre équipe conviennent. Je construis le cadre autour de votre travail avec l’IA."
    },
    {
      question: "Combien ça coûte ?",
      answer:
        "Un forfait mensuel, en général sur 2 à 4 mois. Le prix exact dépend du périmètre ; nous en discutons par écrit."
    },
    {
      question: "Faudra-t-il recruter beaucoup de développeurs coûteux ?",
      answer:
        "Pas forcément. D’abord, nous tirons davantage de l’IA que vous utilisez déjà : règles, contrôles automatiques et architecture autour d’elle. Si la croissance demande ensuite une expertise précise, nous faisons appel à des spécialistes ciblés. Le recrutement vient en dernier."
    },
    {
      question: "Travaillerez-vous avec notre développeur ou notre CTO ?",
      answer:
        "Oui. Le cadre que je construis aide l’équipe que vous avez déjà à livrer plus vite. Votre CTO ou votre développeur reste impliqué, et nous décidons ensemble de ce qui est mis en place."
    },
    {
      question: "Nous avons déjà changé d’outils IA, lancé un refactoring et recruté un senior. Qu’est-ce qui change avec vous ?",
      answer:
        "Un nouvel outil n’apporte pas ce qui manque, alors les mêmes problèmes reviennent. Un refactoring sans tests crée de nouveaux bugs. Un développeur senior a lui aussi besoin d’un cadre autour du code pour le modifier sans risque. Je construis d’abord ce cadre, et ses règles sont vérifiées automatiquement."
    },
    {
      question: "Que mettez-vous en place concrètement ?",
      answer:
        "Des outils standard : Agents.md, des linters (ESLint, PHPStan, mypy), la vérification des types, des scanners de sécurité, des tests (Jest, Pytest, PHPUnit), GitHub Actions, Sentry ou DataDog. Rien d’exotique. Le vrai travail consiste à les relier pour que les agents IA ne puissent pas contourner les contrôles à la requête suivante."
    },
    {
      question: "Les données de mes utilisateurs sont-elles en danger en ce moment ?",
      answer:
        "C’est possible. Les MVP en vibe coding contiennent souvent des mots de passe et des clés en dur, aucune validation des entrées et des dépendances que personne ne suit. L’IA ne produit pas du code sûr par défaut. La sécurité informatique était ma spécialité à l’université, et c’est pour moi une exigence de base. Pendant la phase « Protection contre la casse », je repère et je corrige ces problèmes un par un."
    }
  ],
  finalCta: {
    heading: (
      <>
        Réparons-le <em>pour que ça tienne.</em>
      </>
    ),
    text: "Écrivez-moi où en est votre projet. Nous verrons vite si je suis la bonne personne et par où commencer.",
    label: "Parler de votre projet",
    href: "https://t.me/sg4tech?start=site_fr_ai_vibecoding_final"
  }
};

export const aiVibecodingOgCard: OgCardContent = {
  alt: "Vibe coding IA : d’un MVP en vibe coding à une activité qui tourne",
  eyebrow: "Vibe coding IA",
  title: "D’un MVP en vibe coding à une activité qui tourne",
  subtitle: "Contrôles automatiques, tests, CI/CD et architecture, que l’IA ne construit pas"
};
