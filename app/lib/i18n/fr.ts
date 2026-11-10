import { VICTOR_NAME } from "../brand";
import type { SiteDictionary } from "./types";

export const fr: SiteDictionary = {
  document: {
    skipLink: "Aller au contenu principal",
    description:
      "Victor Demin, ingénieur logiciel et leader technique. Je construis des logiciels livrés vite et fiables en production."
  },
  navigation: {
    ariaLabel: "Navigation du site",
    languageMenuLabel: "Langue",
    items: [
      { key: "home", label: "Accueil" },
      { key: "blog", label: "Blog" },
      { key: "yii2", label: "Yii2" },
      { key: "ai-vibecoding", label: "Vibe coding IA" }
    ]
  },
  footer: {
    ariaLabel: "Pied de page",
    legalAriaLabel: "Mentions légales",
    privacyLabel: "Confidentialité",
    disclaimers: [
      {
        label: "Résultats",
        body: "Les résultats présentés sur ce site sont des exemples tirés de postes et de projets passés. Ils ne garantissent pas des résultats similaires à l’avenir. Les résultats réels dépendent de l’organisation, de l’équipe, du produit, de la situation de départ, des données disponibles et de la mise en œuvre."
      },
      {
        label: "Informations professionnelles",
        body: "Les contenus publiés sur ce site sont fournis à titre d’information générale. Ils ne constituent pas un conseil technique, juridique, financier, de sécurité ou autre conseil professionnel adapté à une situation particulière."
      },
      {
        label: "Marques",
        body: "Les noms de sociétés, logos et marques appartiennent à leurs propriétaires respectifs. Les mentions d’anciens employeurs et clients décrivent l’expérience professionnelle de Victor Demin et n’impliquent ni recommandation, ni partenariat, ni collaboration en cours."
      }
    ]
  },
  proof: {
    resultsCaption:
      "Résultats tirés de postes et de projets passés. Les résultats réels varient et ne sont pas garantis.",
    heroSignalsAriaLabel: "Faits sur mon parcours"
  },
  language: {
    code: "FR",
    name: "Français"
  },
  untranslated: {
    pageNote: "Page en anglais",
    linkNote: "en anglais"
  },
  author: {
    name: VICTOR_NAME
  },
  whyMe: {
    heading: "Pourquoi moi",
    roleLine: "Ingénieur logiciel et leader technique"
  },
  faq: {
    heading: "Questions fréquentes"
  },
  blog: {
    backLink: "← Blog",
    readingTime: (minutes) => `${minutes}\u00a0min de lecture`,
    tagsAriaLabel: "Tags",
    byline: {
      beforeName: "",
      afterName:
        " écrit du code et dirige des équipes de développement depuis plus de 15 ans. Il aide les équipes à livrer plus vite et de façon plus prévisible, et les produits à rester stables."
    },
    tocHeading: "Sommaire",
    relatedHeading: "À lire aussi",
    relatedIntro: "Par où continuer, selon votre situation.",
    ctaButton: "Parler de votre projet sur Telegram"
  },
  notFound: {
    title: "Page introuvable",
    text: "La page que vous cherchez n’existe pas ou a été déplacée.",
    backHome: "Retour à l’accueil"
  }
};
