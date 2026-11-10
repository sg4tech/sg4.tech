import type { OgCardContent } from "../../_og/render";
import type { HomeContent } from "../../views/home/home-content";

const description =
  "Des logiciels livrés dans les délais et fiables en production : j’écris le code, je répare ce qui casse et je dirige le développement.";

export const homeContent: HomeContent = {
  meta: {
    title: "Ingénierie logicielle et leadership technique",
    description
  },
  service: {
    name: "Victor Demin, développement logiciel",
    serviceType: "Développement logiciel et leadership technique",
    description
  },
  hero: {
    eyebrow: "Développement logiciel et leadership technique",
    headline: "Je construis des systèmes qui fonctionnent.",
    phpRussiaLabel: "Intervenant à PHP Russia",
    lead: "Un produit livré dans les délais, fiable en production, qui tient le choc de la croissance.",
    text: "Pensée systémique, métriques de livraison et IA permettent d’aller plus vite, avec moins de chaos.",
    primaryCta: { label: "Parler de votre projet", href: "https://t.me/sg4tech?start=site_fr_hero" },
    secondaryCtaLabel: "Ma méthode",
    credibility: "Expérience en startup et dans des entreprises produit en forte croissance.",
    statsAriaLabel: "Résultats clés",
    metrics: [
      { id: "speed", figure: "2–3×", label: "livraison plus rapide" },
      { id: "quality", note: "Jusqu’à", figure: "10×", label: "moins de bugs et d’interruptions" },
      { id: "predictability", label: "Plus de prévisibilité" }
    ]
  },
  problem: {
    title: "Le produit se vend. Le développement ne suit plus.",
    stages: [
      {
        id: "early",
        title: "Premiers clients",
        points: [
          "Le code du MVP est difficile à faire évoluer",
          "Chaque nouvelle fonctionnalité prend plus de temps que prévu",
          "Une ou deux personnes seulement comprennent comment tout fonctionne"
        ],
        closing: "La demande est là. Le code, pas encore."
      },
      {
        id: "growth",
        title: "Croissance",
        points: [
          "Les fonctionnalités mettent trop longtemps à sortir",
          "Les délais glissent, même avec une planification",
          "Chaque mise en production apporte son lot de bugs"
        ],
        closing: "L’équipe existe, elle est débordée, et pourtant peu de choses sortent."
      },
      {
        id: "scale",
        title: "Passage à l’échelle",
        points: [
          "Chaque modification touche trop de parties du système",
          "La coordination ralentit tout le travail",
          "Plus le système grossit, plus chaque mise en production est risquée"
        ],
        closing: "La complexité grandit plus vite que le produit."
      }
    ],
    callout: [
      "Recruter davantage règle rarement le problème.",
      "La solution se trouve dans la façon de construire et de livrer le produit. C’est précisément mon métier."
    ]
  },
  trust: {
    intro: "J’écris le code, je dirige le développement et je reste jusqu’à ce que tout tourne en production.",
    points: [
      { id: "experience", text: "Plus de 15 ans dans le développement" },
      { id: "leadership", text: "Plus de 8 ans à diriger des équipes" },
      { id: "mvp", text: "J’ai codé moi-même des MVP, de la première ligne à la mise en production" },
      { id: "scale", text: "J’ai fait grandir des équipes et accéléré leurs livraisons" },
      { id: "writing", text: "J’écris sur les métriques de développement, les goulots d’étranglement et le travail avec l’IA" }
    ]
  },
  results: {
    title: "Résultats",
    intro: "Ce qui a changé dans les entreprises où j’ai dirigé le développement.",
    problemLabel: "Avant",
    workLabel: "Ce que j’ai fait",
    cases: [
      {
        title: "Accélérer la livraison",
        company: "Entreprise B2B (marchés internationaux, 3 équipes pluridisciplinaires)",
        problem: ["Livraison lente et imprévisible", "Beaucoup de bugs"],
        work: [
          "Mise en place de métriques de livraison",
          "Refonte du parcours d’une tâche, de l’idée à la mise en production",
          "Alignement du développement sur les objectifs produit"
        ],
        metrics: [
          { figure: "2–3×", label: "livraison plus rapide" },
          { figure: "10×", label: "moins de bugs" },
          { icon: "predictable", label: "Mises en production prévisibles" }
        ]
      },
      {
        title: "Du chaos au système",
        company: "Entreprise EdTech (phase de croissance)",
        problem: ["Développement chaotique", "Nouvelles fonctionnalités lentes à sortir", "NPS faible"],
        work: [
          "Séparation de l’exploration des idées et du développement",
          "Mise en place d’un processus de développement clair",
          "Boucle de retours utilisateurs mise en place"
        ],
        metrics: [
          { figure: "2×", label: "mise sur le marché plus rapide" },
          { figure: "2×", label: "plus de tâches livrées" },
          { icon: "nps", label: "NPS en nette hausse" }
        ]
      },
      {
        title: "Coûts et efficacité",
        company: "Entreprise produit (phase de passage à l’échelle)",
        problem: ["Développement coûteux", "Équipe peu productive"],
        work: [
          "Goulots d’étranglement identifiés grâce à la théorie des contraintes",
          "Suppression du travail inutile",
          "Priorisation clarifiée"
        ],
        metrics: [
          { figure: "~1,5×", label: "développement moins cher" },
          { icon: "throughput", label: "Équipe plus productive" },
          { icon: "stable", label: "Système plus stable" }
        ]
      }
    ]
  },
  process: {
    title: "Ma méthode",
    outputLabel: "Résultat :",
    steps: [
      {
        title: "Découverte et plan (1–2 semaines)",
        points: [
          "Je découvre votre produit, vos utilisateurs et vos objectifs business",
          "J’examine le code, l’architecture et la façon dont vous livrez aujourd’hui",
          "Nous fixons ensemble le périmètre, les priorités et la première mise en production"
        ],
        output: "un plan de travail et une première version clairement définie"
      },
      {
        title: "Développement",
        points: [
          "J’écris le code : fonctionnalités, intégrations, corrections",
          "CI, tests et contrôles automatiques dès le premier jour",
          "Des itérations courtes, avec un résultat visible à chaque étape"
        ],
        output: "un produit qui fonctionne, livré par étapes"
      },
      {
        title: "Mise en production et stabilisation",
        points: [
          "Je mets le produit en production",
          "Je corrige et je renforce ce que rencontrent les vrais utilisateurs",
          "Je garde des mises en production prévisibles à mesure que le produit grandit"
        ],
        output: "un produit fiable en production"
      },
      {
        title: "Grandir avec le produit",
        points: [
          "Je dirige le développement quand le périmètre s’élargit",
          "Je recrute et j’encadre d’autres ingénieurs si nécessaire",
          "Je tiens le rythme grâce à l’IA et aux métriques de livraison"
        ],
        output: "un code et une équipe qui continuent de livrer"
      }
    ],
    note: "Pas de magie. Un système qui fonctionne."
  },
  fit: {
    title: "Avec qui je travaille",
    intro: "Je livre le produit. Vous apportez les clients.",
    groups: [
      {
        id: "fit",
        title: "À qui je conviens",
        points: [
          "Fondateurs et entreprises produit (B2B, SaaS, plateformes) qui doivent construire ou réparer leur produit",
          "Vous connaissez vos clients et votre produit a fait ses preuves sur le marché (au moins un MVP)",
          "Vous avez déjà du chiffre d’affaires et un canal de vente qui fonctionne"
        ]
      },
      {
        id: "notFit",
        title: "À qui je ne conviens pas",
        points: [
          "Stade de l’idée : pas encore d’audience claire, de MVP validé ni de chiffre d’affaires",
          "Travail non rémunéré ou payé uniquement en parts",
          "Services de marketing, d’acquisition ou de génération de prospects",
          "Simple renfort de personnel, sans responsabilité sur le résultat"
        ]
      }
    ]
  },
  specializations: {
    title: "Offres spécialisées",
    intro: "Si votre besoin est déjà précis, commencez par la page qui lui est consacrée.",
    links: [
      {
        target: "yii2",
        title: "Projet Yii2",
        description:
          "Une page dédiée au développement Yii2 : qualité, mises en production prévisibles, vitesse et modernisation sans réécriture complète."
      },
      {
        target: "ai-vibecoding",
        title: "MVP en vibe coding qui freine le développement",
        description:
          "Une page dédiée à la remise en ordre des MVP construits avec l’IA, sans tout réécrire. Je mets en place le cadre de développement qui manquait à ce code."
      }
    ]
  },
  writing: {
    title: "Articles",
    intro: "J’écris sur la façon de livrer un produit, les goulots d’étranglement, les métriques et la manière dont l’IA change le travail des développeurs.",
    allPostsLabel: "Tous les articles",
    channelsAriaLabel: "Où j’écris"
  },
  faq: [
    {
      question: "Que faites-vous exactement ?",
      answer:
        "Je construis et je répare des logiciels pour des entreprises produit : j’écris le code, je dirige le développement et je rends les livraisons plus rapides et plus prévisibles grâce aux métriques et à l’IA."
    },
    {
      question: "Quand verrai-je une première version ?",
      answer:
        "La phase de découverte dure 1 à 2 semaines et se conclut par un plan de travail et une première version clairement définie. Les premières briques fonctionnelles arrivent généralement en production en quelques semaines. Le rythme exact dépend du périmètre et de l’état du code."
    }
  ],
  finalCta: {
    heading: (
      <>
        Parlez-moi de votre produit —{" "}<em>je l’amène jusqu’à la mise en production.</em>
      </>
    ),
    text: "Dites-moi où en est le produit, qui l’utilise et ce qui doit sortir ensuite. Je vous répondrai en expliquant comment je découperais le travail et ce que contiendrait la première version.",
    label: "Parler de votre projet",
    href: "https://t.me/sg4tech?start=site_fr_final"
  }
};

export const homeOgCard: OgCardContent = {
  alt: "Victor Demin, développement logiciel et leadership technique",
  eyebrow: "Développement logiciel et leadership technique",
  title: "Je construis des systèmes qui fonctionnent.",
  subtitle: "Des logiciels livrés dans les délais et fiables en production"
};
