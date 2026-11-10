import { VICTOR_NAME } from "../brand";
import type { SiteDictionary } from "./types";

export const de: SiteDictionary = {
  document: {
    skipLink: "Zum Hauptinhalt springen",
    description:
      "Victor Demin – Softwareentwickler und technischer Leiter. Ich baue Systeme, die schnell Releases liefern und stabil laufen."
  },
  navigation: {
    ariaLabel: "Seitennavigation",
    languageMenuLabel: "Sprache",
    items: [
      { key: "home", label: "Startseite" },
      { key: "blog", label: "Blog" },
      { key: "yii2", label: "Yii2" },
      { key: "ai-vibecoding", label: "KI-Vibecoding" }
    ]
  },
  footer: {
    ariaLabel: "Fußzeile",
    legalAriaLabel: "Rechtliches",
    privacyLabel: "Datenschutz",
    disclaimers: [
      {
        label: "Ergebnisse",
        body: "Die Ergebnisse auf dieser Website sind Beispiele aus früheren Positionen und Projekten. Sie garantieren keine vergleichbaren Ergebnisse für künftige Kunden. Das tatsächliche Ergebnis hängt von Unternehmen, Team, Produkt, Ausgangslage, verfügbaren Daten und der Umsetzung ab."
      },
      {
        label: "Fachliche Informationen",
        body: "Die Inhalte dieser Website dienen der allgemeinen Information. Sie sind keine technische, sicherheitsbezogene, rechtliche, finanzielle oder sonstige fachliche Beratung für einen konkreten Einzelfall."
      },
      {
        label: "Marken",
        body: "Firmennamen, Logos und Marken gehören ihren jeweiligen Inhabern. Die Nennung früherer Arbeitgeber und Kunden beschreibt die berufliche Erfahrung von Victor Demin und bedeutet weder Empfehlung noch Partnerschaft oder aktuelle Zusammenarbeit."
      }
    ]
  },
  proof: {
    resultsCaption: "Ergebnisse aus früheren Positionen und Projekten. Ihr Ergebnis kann abweichen und ist nicht garantiert.",
    heroSignalsAriaLabel: "Belege zur Erfahrung"
  },
  language: {
    code: "DE",
    name: "Deutsch"
  },
  untranslated: {
    pageNote: "Seite auf Englisch",
    linkNote: "auf Englisch"
  },
  author: {
    name: VICTOR_NAME
  },
  whyMe: {
    heading: "Warum ich",
    roleLine: "Softwareentwickler und technischer Leiter"
  },
  faq: {
    heading: "Häufige Fragen"
  },
  blog: {
    backLink: "← Blog",
    readingTime: (minutes) => `${minutes} Min. Lesezeit`,
    tagsAriaLabel: "Schlagwörter",
    byline: {
      beforeName: "",
      afterName:
        " entwickelt seit über 15 Jahren Software und leitet Entwicklungsteams. Er hilft Teams, schneller und planbarer zu releasen, und sorgt dafür, dass Produkte stabil laufen."
    },
    tocHeading: "Inhalt",
    relatedHeading: "Weiterlesen",
    relatedIntro: "Was als Nächstes passt, hängt davon ab, woran Sie gerade arbeiten.",
    ctaButton: "Projekt auf Telegram besprechen"
  },
  notFound: {
    title: "Seite nicht gefunden",
    text: "Diese Seite gibt es nicht, oder sie wurde verschoben.",
    backHome: "Zur Startseite"
  }
};
