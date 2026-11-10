import type { OgCardContent } from "../../_og/render";
import type { HomeContent } from "../../views/home/home-content";

const description =
  "Ich baue Software, die pünktlich live geht und stabil läuft: Ich schreibe den Code, behebe, was kaputt ist, und leite die Entwicklung mit Produktteams.";

export const homeContent: HomeContent = {
  meta: {
    title: "Softwareentwicklung und technische Leitung",
    description
  },
  service: {
    name: "Victor Demin – Softwareentwicklung",
    serviceType: "Softwareentwicklung und technische Leitung",
    description
  },
  hero: {
    eyebrow: "Softwareentwicklung & technische Leitung",
    headline: "Ich baue Systeme, die funktionieren.",
    phpRussiaLabel: "Speaker auf der PHP Russia",
    lead: "Software, die termingerecht live geht, im Betrieb stabil läuft und beim Wachstum nicht auseinanderfällt.",
    text: "Mit Systemdenken, Entwicklungsmetriken und KI gelingt das schneller und mit weniger Chaos.",
    primaryCta: { label: "Projekt besprechen", href: "https://t.me/sg4tech?start=site_de_hero" },
    secondaryCtaLabel: "So arbeite ich",
    credibility: "Erfahrung in Start-ups und wachsenden Produktunternehmen.",
    statsAriaLabel: "Wichtigste Ergebnisse",
    metrics: [
      { id: "speed", figure: "2–3×", label: "schnellere Entwicklung" },
      { id: "quality", note: "Bis zu", figure: "10×", label: "weniger Bugs und Ausfälle" },
      { id: "predictability", label: "Mehr Planbarkeit" }
    ]
  },
  problem: {
    title: "Das Produkt verkauft sich. Die Entwicklung kommt nicht hinterher.",
    stages: [
      {
        id: "early",
        title: "Erste Kunden",
        points: [
          "Der MVP-Code lässt sich nur schwer ändern",
          "Neue Features dauern länger als erwartet",
          "Nur ein, zwei Leute wissen, wie alles funktioniert"
        ],
        closing: "Die Nachfrage ist da. Der Code ist nicht bereit dafür."
      },
      {
        id: "growth",
        title: "Wachstum",
        points: [
          "Features brauchen zu lange bis zum Release",
          "Termine platzen – trotz Planung",
          "Mit jedem Release kommen mehr Bugs"
        ],
        closing: "Das Team ist da und ausgelastet. Trotzdem kommt zu wenig dabei heraus."
      },
      {
        id: "scale",
        title: "Skalierung",
        points: [
          "Jede Änderung betrifft zu viele Teile des Systems",
          "Abstimmungen bremsen die ganze Arbeit",
          "Je größer das System, desto riskanter die Releases"
        ],
        closing: "Die Komplexität wächst schneller als das Produkt."
      }
    ],
    callout: [
      "Mehr Leute einzustellen löst das selten.",
      "Die Lösung liegt darin, wie Software gebaut und ausgeliefert wird. Genau daran arbeite ich."
    ]
  },
  trust: {
    intro: "Ich schreibe den Code, leite die Arbeit und bleibe, bis alles im Betrieb läuft.",
    points: [
      { id: "experience", text: "Über 15 Jahre in der Softwareentwicklung" },
      { id: "leadership", text: "Über 8 Jahre in Führungsrollen" },
      { id: "mvp", text: "MVPs selbst gebaut, von der ersten Zeile bis zum Release" },
      { id: "scale", text: "Teams aufgebaut und Releases beschleunigt" },
      { id: "writing", text: "Ich schreibe über Entwicklungsmetriken, Engpässe und die Arbeit mit KI" }
    ]
  },
  results: {
    title: "Ergebnisse",
    intro: "Was sich in Unternehmen verändert hat, in denen ich die Entwicklung geleitet habe.",
    problemLabel: "Vorher",
    workLabel: "Was ich getan habe",
    cases: [
      {
        title: "Schnellere Entwicklung",
        company: "B2B-Unternehmen (internationale Märkte, 3 cross-funktionale Teams)",
        problem: ["Langsame, unvorhersehbare Entwicklung", "Viele Bugs"],
        work: [
          "Entwicklungsmetriken eingeführt",
          "Den Weg von der Idee zum Release neu aufgebaut",
          "Entwicklung an den Produktzielen ausgerichtet"
        ],
        metrics: [
          { figure: "2–3×", label: "schnellere Entwicklung" },
          { figure: "10×", label: "weniger Bugs" },
          { icon: "predictable", label: "Planbare Releases" }
        ]
      },
      {
        title: "Vom Chaos zum System",
        company: "EdTech-Unternehmen (Wachstumsphase)",
        problem: ["Chaotische Entwicklung", "Neue Features kamen spät auf den Markt", "Niedriger NPS"],
        work: [
          "Konzeption und Umsetzung getrennt",
          "Einen klaren Entwicklungsprozess aufgebaut",
          "Regelmäßiges Feedback von Nutzern eingeführt"
        ],
        metrics: [
          { figure: "2×", label: "schneller am Markt" },
          { figure: "2×", label: "mehr erledigte Aufgaben" },
          { icon: "nps", label: "NPS deutlich gestiegen" }
        ]
      },
      {
        title: "Kosten und Effizienz",
        company: "Produktunternehmen (Skalierungsphase)",
        problem: ["Teure Entwicklung", "Geringer Output des Teams"],
        work: [
          "Engpässe mit der Engpasstheorie (TOC) aufgedeckt",
          "Unnötige Arbeit gestrichen",
          "Priorisierung verbessert"
        ],
        metrics: [
          { figure: "~1,5×", label: "günstigere Entwicklung" },
          { icon: "throughput", label: "Mehr Output des Teams" },
          { icon: "stable", label: "Das System läuft stabiler" }
        ]
      }
    ]
  },
  process: {
    title: "So arbeite ich",
    outputLabel: "Ergebnis:",
    steps: [
      {
        title: "Kennenlernen und Plan (1–2 Wochen)",
        points: [
          "Ich lerne Ihr Produkt, Ihre Nutzer und Ihre Geschäftsziele kennen",
          "Ich prüfe Code, Architektur und den heutigen Weg zum Release",
          "Wir legen Umfang, Prioritäten und das erste Release fest"
        ],
        output: "ein Arbeitsplan und ein klar umrissenes erstes Release"
      },
      {
        title: "Entwicklung",
        points: [
          "Ich schreibe den Code: Features, Integrationen, Fixes",
          "Ab dem ersten Tag richte ich CI, Tests und automatische Prüfungen ein",
          "Kurze Iterationen, deren Ergebnis Sie jedes Mal sehen können"
        ],
        output: "funktionierende Software, die Schritt für Schritt live geht"
      },
      {
        title: "Release und Stabilisierung",
        points: [
          "Ich bringe das Produkt in Produktion",
          "Ich behebe, worauf echte Nutzer stoßen",
          "Ich sorge dafür, dass Releases auch beim Wachstum planbar bleiben"
        ],
        output: "ein Produkt, das im Betrieb stabil läuft"
      },
      {
        title: "Mit dem Produkt wachsen",
        points: [
          "Ich leite die Entwicklung, wenn der Umfang wächst",
          "Bei Bedarf hole ich weitere Entwickler dazu und führe sie",
          "Mit KI und Entwicklungsmetriken halte ich das Tempo hoch"
        ],
        output: "Code und Team, die weiter regelmäßig liefern"
      }
    ],
    note: "Keine Magie. Einfach ein System, das funktioniert."
  },
  fit: {
    title: "Mit wem ich arbeite",
    intro: "Ich liefere das Produkt. Sie bringen die Kunden.",
    groups: [
      {
        id: "fit",
        title: "Passt gut",
        points: [
          "Gründer und Produktunternehmen (B2B, SaaS, Plattformen), die ihr Produkt bauen oder reparieren lassen wollen",
          "Sie kennen Ihre Kunden und haben ein validiertes Produkt (mindestens ein MVP)",
          "Sie haben bereits Umsatz und einen funktionierenden Vertriebskanal"
        ]
      },
      {
        id: "notFit",
        title: "Passt nicht",
        points: [
          "Ideenphase: noch keine klare Zielgruppe, kein validiertes MVP, kein Umsatz",
          "Unbezahlte Arbeit oder Bezahlung nur in Firmenanteilen",
          "Dienstleistungen in Marketing, Growth oder Leadgenerierung",
          "Reine Personalverstärkung ohne Verantwortung für das Ergebnis"
        ]
      }
    ]
  },
  specializations: {
    title: "Spezielle Angebote",
    intro: "Wenn Ihre Aufgabe schon klar ist, starten Sie mit der passenden Seite.",
    links: [
      {
        target: "yii2",
        title: "Projekt auf Yii2",
        description:
          "Eigene Seite zur Entwicklung mit Yii2: Qualität, planbare Releases, Tempo und Modernisierung, ohne alles neu zu schreiben."
      },
      {
        target: "ai-vibecoding",
        title: "Vibecoding-MVP bremst die Entwicklung",
        description:
          "Eigene Seite dazu, wie ein mit KI gebautes MVP ohne Neuanfang in Ordnung kommt. Ich baue den Entwicklungsprozess auf, der solchem Code fehlt."
      }
    ]
  },
  writing: {
    title: "Artikel",
    intro: "Ich schreibe darüber, wie Software ausgeliefert wird, über Engpässe, Metriken und darüber, wie KI die Arbeit von Entwicklern verändert.",
    allPostsLabel: "Alle Artikel",
    channelsAriaLabel: "Wo ich schreibe"
  },
  faq: [
    {
      question: "Was genau machen Sie?",
      answer:
        "Ich entwickle und repariere Software für Produktunternehmen: Ich schreibe Code, leite die Entwicklung und mache Releases mit Metriken und KI schneller und planbarer."
    },
    {
      question: "Wann ist das erste Release live?",
      answer:
        "Kennenlernen und Plan dauern 1–2 Wochen, danach haben Sie einen Arbeitsplan und ein klar umrissenes erstes Release. Erste funktionierende Teile gehen meist innerhalb weniger Wochen in Produktion. Das genaue Tempo hängt vom Umfang und vom Zustand des Codes ab."
    }
  ],
  finalCta: {
    heading: (
      <>
        Erzählen Sie mir von Ihrem Produkt – <em>ich bringe es zum Release.</em>
      </>
    ),
    text: "Schreiben Sie, wo das Produkt steht, wer es nutzt und was als Nächstes live gehen muss. Ich antworte, wie ich die Arbeit aufteilen und das erste Release zuschneiden würde.",
    label: "Projekt besprechen",
    href: "https://t.me/sg4tech?start=site_de_final"
  }
};

export const homeOgCard: OgCardContent = {
  alt: "Victor Demin – Softwareentwicklung und technische Leitung",
  eyebrow: "Softwareentwicklung & technische Leitung",
  title: "Ich baue Systeme, die funktionieren.",
  subtitle: "Software, die pünktlich live geht und stabil läuft"
};
