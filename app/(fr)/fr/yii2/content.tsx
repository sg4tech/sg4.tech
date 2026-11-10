import type { OgCardContent } from "../../../_og/render";
import type { Yii2Content } from "../../../views/yii2/yii2-content";

export const yii2Content: Yii2Content = {
  meta: {
    title: "Yii2 : livrer plus vite, avec moins de bugs",
    description:
      "Votre projet Yii2 freine votre activité. Je trouve ce qui casse dans le code et les processus, je le répare et je laisse un système qui livre sans moi.",
    socialTitle: "Développement Yii2 : livrer plus vite, avec plus de qualité",
    socialDescription:
      "J’aide les entreprises qui exploitent un projet Yii2 à gagner en qualité, en stabilité et en vitesse de livraison, sans chaos ni urgences permanentes."
  },
  service: {
    name: "Développement Yii2",
    serviceType: "Développement Yii2",
    description:
      "Développement pour les entreprises qui exploitent un projet Yii2 : livraisons plus rapides, meilleure disponibilité, moins de bugs et un développement prévisible grâce aux contrôles automatiques, au CI/CD, au monitoring et à l’IA."
  },
  hero: {
    headlineLeadIn: "Votre projet Yii2 ",
    headline: "freine votre activité.",
    action: "Je trouve ce qui casse vraiment, et je le répare.",
    statement: "Le plus souvent, c’est le processus de développement autour du code qui ralentit tout.",
    promise: "Je trouve la cause, je la corrige et je laisse un système qui fonctionne sans moi.",
    primaryCta: { label: "Décrivez votre situation sur Telegram", href: "https://t.me/sg4tech?start=site_fr_yii2_hero" },
    secondaryCtaLabel: "Ma méthode",
    phpRussiaLabel: "Intervenant à PHP Russia",
    statsAriaLabel: "Résultats clés",
    metrics: [
      { id: "bugs", figure: "10×", label: "moins de bugs et d’incidents en production" },
      { id: "downtime", figure: "5×", label: "moins d’interruptions, des mises en production plus prévisibles" },
      { id: "delivery", figure: "2–3×", label: "livraison plus rapide, sans recruter" }
    ]
  },
  transformation: {
    title: "Des mises en production hasardeuses à un développement maîtrisé",
    intro: "On peut vivre avec du code legacy. Ce qui freine l’activité, ce sont les mises en production peu fiables.",
    fireFighting: {
      title: "Mode pompier",
      manualChecks: "contrôles manuels",
      hiddenQueue: "file d’attente cachée",
      hotfixes: "correctifs urgents"
    },
    deliverySystem: {
      title: "Mode développement maîtrisé",
      guardrails: "contrôles automatiques",
      cicd: "CI/CD",
      monitoring: "monitoring",
      outcome: "mises en production prévisibles"
    },
    states: [
      { id: "before", value: "Avant", label: "mises en production risquées et urgences permanentes" },
      { id: "after", value: "Après", label: "mises en production sous contrôle, goulots visibles" },
      { id: "goal", value: "Objectif", label: "livrer vite, sans chaos" }
    ]
  },
  problem: {
    title: "Quand un projet Yii2 a plusieurs années, le code n’est presque jamais le seul problème.",
    points: [
      { id: "slowdown", text: "Les nouvelles fonctionnalités sortent de plus en plus lentement." },
      {
        id: "risk",
        text: "Chaque mise en production augmente le risque de bugs, de régressions et d’urgences à gérer à la main."
      },
      {
        id: "legacy",
        text: "Le code legacy, les contrôles manuels et le désordre dans les processus freinent l’activité plus qu’il n’y paraît."
      },
      { id: "busy", text: "L’équipe est débordée, et pourtant personne n’est satisfait du rythme de livraison." }
    ],
    callout:
      "Quand le développement devient le goulot d’étranglement, c’est tout le processus de livraison qui se dégrade, bien au-delà du code."
  },
  levers: {
    quality: {
      title: "D’abord la qualité : stabilité, bugs et mises en production prévisibles.",
      intro:
        "Contrôles automatiques, CI/CD, IA et monitoring réduisent le risque d’une mise en production avant que vos clients ou l’entreprise ne voient le problème.",
      points: [
        {
          id: "guardrails",
          text: "des contrôles automatiques dans le code et le processus, pour que les erreurs courantes n’atteignent jamais la production"
        },
        { id: "cicd", text: "un CI/CD qui vérifie les scénarios critiques avant chaque mise en production" },
        { id: "monitoring", text: "du monitoring et des alertes qui signalent les pannes avant vos clients" },
        {
          id: "automation",
          text: "l’IA et une automatisation ciblée pour les vérifications répétitives, les régressions et la maintenance du legacy"
        }
      ]
    },
    speed: {
      title: "Ensuite la vitesse. Elle dépend de bien plus que du code.",
      intro:
        "La vitesse vient des personnes, des processus, des métriques et des agents IA. Sans eux, l’équipe reste prisonnière des urgences.",
      points: [
        {
          id: "bottleneck",
          text: "Je trouve où le temps se perd vraiment : files d’attente, validations manuelles, dépendances cachées"
        },
        {
          id: "metrics",
          text: "Je mets en place des métriques de développement pour que le goulot se lise dans les chiffres, sans débat"
        },
        { id: "alignment", text: "J’aligne les personnes, les processus et les priorités sur un seul flux de travail" },
        { id: "agents", text: "J’introduis des agents IA là où ils suppriment du travail manuel et raccourcissent le cycle" }
      ]
    }
  },
  trust: {
    intro:
      "Responsable technique de terrain, j’ai remis d’aplomb le développement de l’intérieur, dans de vraies entreprises, à plusieurs reprises.",
    points: [
      { id: "experience", text: "Plus de 15 ans dans le développement." },
      {
        id: "fixes",
        text: "J’ai souvent réconcilié vitesse et qualité là où elles se faisaient obstacle."
      },
      {
        id: "hands-on",
        text: "Je travaille à la fois dans le code et au niveau du système : architecture, processus, métriques, management."
      },
      {
        id: "track-record",
        text: "Expérience chez Wowworks (plateforme B2B de facility management, ouverture à l’UE, 3,6 M$ levés) et Skyeng (plateforme EdTech pour élèves, plus de 2 M d’utilisateurs actifs par mois, valorisée plus de 100 M$)."
      }
    ]
  },
  process: {
    title: "Ma méthode",
    intro:
      "Pas de magie, pas de solution décidée d’avance. D’abord, nous rendons le système transparent et sûr. Ensuite, nous accélérons le développement.",
    outputLabel: "Résultat :",
    steps: [
      {
        title: "Audit (1–2 semaines)",
        summary: "Trouver ce qui ralentit vraiment le développement.",
        points: [
          "J’examine le code et l’état du déploiement",
          "Je repère les vrais goulots d’étranglement",
          "J’évalue les risques des mises en production, la qualité et la couverture de tests"
        ],
        output: "un plan clair et une liste d’actions par priorité"
      },
      {
        title: "Socle qualité",
        summary: "Réduire les risques avant la prochaine mise en production.",
        points: [
          "Je mets en place le CI/CD et les contrôles automatiques",
          "J’installe le monitoring et les alertes",
          "Je réduis la probabilité d’incidents en production"
        ],
        output: "des mises en production stables et moins risquées"
      },
      {
        title: "Accélération du développement",
        summary: "Raccourcir le chemin entre la demande et la production.",
        points: [
          "J’organise le travail de l’équipe",
          "J’introduis des métriques de développement",
          "J’applique l’IA là où elle apporte un vrai gain"
        ],
        output: "des livraisons plus rapides et plus prévisibles"
      }
    ],
    note: "L’objectif : un développement qui sert l’activité, sans efforts héroïques.",
    expectations: {
      title: "À quoi vous attendre",
      points: [
        "Premières améliorations visibles du CI/CD et du monitoring en 2 à 4 semaines",
        "Accélération nette du développement, en général en quelques mois",
        "Le rythme dépend de la taille de l’équipe et de la dette technique accumulée"
      ]
    }
  },
  proof: {
    title: "Contenus publics",
    intro: "Pour voir rapidement comment je pense et comment je travaille sur la qualité, la vitesse, les systèmes et l’IA.",
    talks: [
      {
        id: "event",
        label: "Conférence à PHP Russia",
        href: "https://phprussia.ru/2019/meetups#1457427",
        description:
          "Page officielle de la conférence « Comment utiliser Yii2 en entreprise ? Reprendre les bonnes pratiques de Symfony ! »"
      },
      {
        id: "recording",
        label: "Enregistrement sur YouTube",
        href: "https://www.youtube.com/watch?v=lCMn52lMQks",
        description: "L’intégralité de la conférence en vidéo."
      }
    ],
    channelsAriaLabel: "Où j’écris"
  },
  faq: [
    {
      question: "Faut-il réécrire tout le projet ?",
      answer:
        "Non. L’objectif est d’améliorer votre projet Yii2 existant sans réécriture coûteuse et risquée. Nous commençons par rendre le système fiable et maîtrisable."
    },
    {
      question: "Et si le projet n’a presque pas de tests ?",
      answer:
        "C’est le point de départ habituel d’un projet legacy, et cela n’empêche pas de commencer. Nous ajoutons des tests là où le risque et la valeur sont les plus élevés, sans geler le développement pendant des mois."
    },
    {
      question: "Quand verrons-nous des résultats ?",
      answer:
        "Les améliorations du CI/CD et du monitoring se voient en général en 2 à 4 semaines. L’accélération du développement dépend de l’équipe et de la dette technique, mais les premiers changements arrivent vite."
    },
    {
      question: "Faites-vous le travail vous-même ?",
      answer:
        "Oui. Je corrige le code moi-même, je configure les pipelines et les contrôles automatiques, et je travaille avec votre équipe jusqu’à ce que tout fonctionne de bout en bout."
    }
  ],
  finalCta: {
    heading: (
      <>
        Pas besoin de six mois de débats stratégiques. Il faut <em>trouver ce qui casse et le réparer.</em>
      </>
    ),
    text: "Dites-moi ce qui pose le plus problème et le résultat que vous visez. Je vous répondrai par un court diagnostic et ce que je corrigerais en premier.",
    label: "Me dire ce qui coince",
    href: "https://t.me/sg4tech?start=site_fr_yii2_final"
  }
};

export const yii2OgCard: OgCardContent = {
  alt: "Développement Yii2, livraisons plus rapides et meilleure qualité",
  eyebrow: "Développement Yii2",
  title: "Qualité, prévisibilité, vitesse, sans réécriture",
  subtitle: "CI/CD, monitoring, métriques de développement, IA"
};
