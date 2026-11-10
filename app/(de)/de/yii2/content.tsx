import type { OgCardContent } from "../../../_og/render";
import type { Yii2Content } from "../../../views/yii2/yii2-content";

export const yii2Content: Yii2Content = {
  meta: {
    title: "Yii2-Entwicklung: schnellere Releases",
    description:
      "Ihr Yii2-Projekt bremst Ihr Geschäft. Ich finde, was in Code und Abläufen hakt, behebe es und hinterlasse ein System, das ohne mich planbar liefert.",
    socialTitle: "Yii2-Entwicklung: schnellere Releases, höhere Qualität",
    socialDescription:
      "Ich helfe Unternehmen mit Yii2-Projekten, Qualität, Stabilität und Entwicklungstempo zu steigern – ohne Chaos und ständiges Feuerlöschen."
  },
  service: {
    name: "Yii2-Entwicklung",
    serviceType: "Yii2-Entwicklung",
    description:
      "Entwicklung für Unternehmen mit Yii2-Projekten: schnellere Releases, höhere Stabilität, weniger Bugs und planbare Entwicklung durch automatische Prüfungen, CI/CD, Monitoring und KI."
  },
  hero: {
    headlineLeadIn: "Ihr Yii2-Projekt ",
    headline: "bremst Ihr Geschäft.",
    action: "Ich finde, was wirklich kaputt ist, und behebe es.",
    statement: "Meist bremst der Entwicklungsprozess rund um den Code stärker als der Code selbst.",
    promise: "Ich finde die Ursache, beseitige sie und hinterlasse ein System, das ohne mich funktioniert.",
    primaryCta: { label: "Schildern Sie Ihre Lage auf Telegram", href: "https://t.me/sg4tech?start=site_de_yii2_hero" },
    secondaryCtaLabel: "So arbeite ich",
    phpRussiaLabel: "Speaker auf der PHP Russia",
    statsAriaLabel: "Wichtigste Ergebnisse",
    metrics: [
      { id: "bugs", figure: "10×", label: "weniger Bugs und Störungen in Produktion" },
      { id: "downtime", figure: "5×", label: "weniger Ausfälle, planbarere Releases" },
      { id: "delivery", figure: "2–3×", label: "schnellere Entwicklung ohne Neueinstellungen" }
    ]
  },
  transformation: {
    title: "Von Releases auf gut Glück zu planbarer Entwicklung",
    intro: "Mit Legacy-Code lässt sich leben. Das Geschäft bremsen unzuverlässige Releases.",
    fireFighting: {
      title: "Feuerwehrmodus",
      manualChecks: "manuelle Prüfungen",
      hiddenQueue: "versteckte Warteschlange",
      hotfixes: "Hotfixes"
    },
    deliverySystem: {
      title: "Planbare Entwicklung",
      guardrails: "Auto-Checks",
      cicd: "CI/CD",
      monitoring: "Monitoring",
      outcome: "planbare Releases"
    },
    states: [
      { id: "before", value: "Vorher", label: "riskante Releases und ständige Brände" },
      { id: "after", value: "Nachher", label: "abgesicherte Releases, Engpässe sichtbar" },
      { id: "goal", value: "Ziel", label: "schnelle Releases ohne Chaos" }
    ]
  },
  problem: {
    title: "Wenn ein Yii2-Projekt schon viele Jahre läuft, liegt es selten nur am Code.",
    points: [
      { id: "slowdown", text: "Neue Funktionen erscheinen immer langsamer." },
      { id: "risk", text: "Mit jedem Release steigt das Risiko für Bugs, Regressionen und manuelles Feuerlöschen." },
      {
        id: "legacy",
        text: "Legacy-Code, manuelle Prüfungen und chaotische Abläufe bremsen das Geschäft stärker, als es scheint."
      },
      { id: "busy", text: "Das Team ist ausgelastet, und trotzdem ist niemand mit dem Tempo zufrieden." }
    ],
    callout:
      "Wenn die Entwicklung zum Engpass geworden ist, hakt es nicht nur im Code. Der ganze Weg bis zum Release gerät ins Stocken."
  },
  levers: {
    quality: {
      title: "Zuerst die Qualität: Stabilität, Bugs und planbare Releases.",
      intro:
        "Automatische Prüfungen, CI/CD, KI und Monitoring senken das Release-Risiko, bevor Kunden oder das Geschäft ein Problem bemerken.",
      points: [
        {
          id: "guardrails",
          text: "automatische Prüfungen in Code und Prozess, damit typische Fehler nicht in Produktion landen"
        },
        { id: "cicd", text: "CI/CD, das kritische Abläufe schon vor dem Release prüft" },
        { id: "monitoring", text: "Monitoring und Alerts, die Störungen melden, bevor Kunden sie bemerken" },
        {
          id: "automation",
          text: "KI und gezielte Automatisierung für Routineprüfungen, Regressionen und die Pflege von Legacy-Code"
        }
      ]
    },
    speed: {
      title: "Dann das Tempo. Mit Code allein ist es nicht zu holen.",
      intro:
        "Tempo entsteht durch Menschen, Prozesse, Metriken und KI-Agenten. Ohne sie bleibt das Team in dringenden Aufgaben und Feuerwehreinsätzen stecken.",
      points: [
        {
          id: "bottleneck",
          text: "Ich finde, wo wirklich Zeit verloren geht: Warteschlangen, manuelle Freigaben, versteckte Abhängigkeiten"
        },
        {
          id: "metrics",
          text: "Ich richte Entwicklungsmetriken ein, damit der Engpass in Zahlen sichtbar ist und niemand darüber streiten muss"
        },
        { id: "alignment", text: "Ich bringe Menschen, Prozesse und Prioritäten in einen gemeinsamen Arbeitsfluss" },
        { id: "agents", text: "Ich setze KI-Agenten dort ein, wo sie Handarbeit abnehmen und den Zyklus verkürzen" }
      ]
    }
  },
  trust: {
    intro:
      "Ich leite Entwicklung und habe Prozesse in echten Unternehmen viele Male selbst in Ordnung gebracht, von innen heraus und mit eigenen Händen.",
    points: [
      { id: "experience", text: "Über 15 Jahre in der Softwareentwicklung." },
      {
        id: "fixes",
        text: "Ich habe die Entwicklung oft dort in Gang gebracht, wo sich Tempo und Qualität gegenseitig im Weg standen."
      },
      {
        id: "hands-on",
        text: "Ich arbeite selbst am Code und auf Systemebene: Architektur, Prozesse, Metriken, Führung."
      },
      {
        id: "track-record",
        text: "Erfahrung bei Wowworks (B2B-Plattform für Facility Management, Expansion in die EU, 3,6 Mio. $ Finanzierung) und Skyeng (EdTech-Plattform für Schüler, über 2 Mio. MAU, Bewertung über 100 Mio. $)."
      }
    ]
  },
  process: {
    title: "So arbeite ich",
    intro:
      "Ohne Magie und ohne fertige Lösungen von vornherein. Zuerst machen wir das System transparent und sicher, dann beschleunigen wir die Entwicklung.",
    outputLabel: "Ergebnis:",
    steps: [
      {
        title: "Audit (1–2 Wochen)",
        summary: "Herausfinden, was die Entwicklung wirklich bremst.",
        points: [
          "Ich prüfe den Code und das Deployment",
          "Ich finde die echten Engpässe",
          "Ich bewerte Release-Risiken, Qualität und Testabdeckung"
        ],
        output: "ein klarer Plan und eine priorisierte Maßnahmenliste"
      },
      {
        title: "Qualitätsfundament",
        summary: "Risiken vor dem nächsten Release senken.",
        points: [
          "Ich richte CI/CD und automatische Prüfungen ein",
          "Ich setze Monitoring und Alerts auf",
          "Ich senke die Wahrscheinlichkeit von Störungen in Produktion"
        ],
        output: "stabile Releases mit weniger Risiko"
      },
      {
        title: "Schnellere Entwicklung",
        summary: "Den Weg von der Aufgabe bis in Produktion verkürzen.",
        points: [
          "Ich bringe die Zusammenarbeit im Team in Gang",
          "Ich führe Entwicklungsmetriken ein",
          "Ich setze KI dort ein, wo sie echten Nutzen bringt"
        ],
        output: "schnellere, planbarere Releases"
      }
    ],
    note: "Das Ziel: eine Entwicklung, die ohne Heldentaten für das Geschäft arbeitet.",
    expectations: {
      title: "Was Sie erwarten können",
      points: [
        "Erste sichtbare Verbesserungen bei CI/CD und Monitoring nach 2–4 Wochen",
        "Spürbar schnellere Entwicklung meist innerhalb weniger Monate",
        "Das Tempo hängt von der Teamgröße und den angesammelten technischen Schulden ab"
      ]
    }
  },
  proof: {
    title: "Öffentliche Beiträge",
    intro:
      "Hier sehen Sie schnell, wie ich denke und wie ich mit Qualität, Tempo, Systemen und KI in der Entwicklung arbeite.",
    talks: [
      {
        id: "event",
        label: "Vortrag auf der PHP Russia",
        href: "https://phprussia.ru/2019/meetups#1457427",
        description:
          "Konferenzseite zum Vortrag „Wie man Yii2 im Enterprise einsetzt: Best Practices aus Symfony übernehmen“ (auf Russisch)"
      },
      {
        id: "recording",
        label: "Aufzeichnung auf YouTube",
        href: "https://www.youtube.com/watch?v=lCMn52lMQks",
        description: "Vollständige Aufzeichnung des Vortrags (auf Russisch)"
      }
    ],
    channelsAriaLabel: "Wo ich schreibe"
  },
  faq: [
    {
      question: "Müssen wir das ganze Projekt neu schreiben?",
      answer:
        "Nein. Ziel ist, das bestehende Yii2-Projekt ohne teures und riskantes Neuschreiben zu verbessern. Zuerst machen wir das System zuverlässig und beherrschbar."
    },
    {
      question: "Was, wenn es im Projekt kaum Tests gibt?",
      answer:
        "Bei Legacy-Projekten ist das ein üblicher Ausgangspunkt, und es hält uns nicht vom Start ab. Tests ergänzen wir dort, wo Risiko und Nutzen am höchsten sind, ohne die Entwicklung monatelang anzuhalten."
    },
    {
      question: "Wann sehen wir Ergebnisse?",
      answer:
        "Verbesserungen bei CI/CD und Monitoring sind meist nach 2–4 Wochen sichtbar. Wie stark die Entwicklung zulegt, hängt vom Team und den technischen Schulden ab, erste Veränderungen zeigen sich aber recht bald."
    },
    {
      question: "Machen Sie die Arbeit selbst?",
      answer:
        "Ja. Ich ändere den Code selbst, richte Pipelines und automatische Prüfungen ein und arbeite mit Ihrem Team, bis die Änderungen vollständig laufen."
    }
  ],
  finalCta: {
    heading: (
      <>
        Statt monatelanger Strategiedebatten: <em>verstehen, was kaputt ist, und es beheben.</em>
      </>
    ),
    text: "Schreiben Sie, was am meisten wehtut und welches Ergebnis Sie sich wünschen. Ich antworte mit einer kurzen Analyse und sage, was ich zuerst beheben würde.",
    label: "Erzählen Sie, wo es hakt",
    href: "https://t.me/sg4tech?start=site_de_yii2_final"
  }
};

export const yii2OgCard: OgCardContent = {
  alt: "Yii2-Entwicklung – schnellere Releases, höhere Qualität",
  eyebrow: "Yii2-Entwicklung",
  title: "Qualität, Planbarkeit, Tempo – ohne Neuschreiben",
  subtitle: "CI/CD, Monitoring, Entwicklungsmetriken, KI"
};
