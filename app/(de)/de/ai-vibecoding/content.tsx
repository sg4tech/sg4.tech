import type { OgCardContent } from "../../../_og/render";
import type { AiVibecodingContent } from "../../../views/ai-vibecoding/ai-vibecoding-content";

const description =
  "Ihrem Vibecoding-MVP fehlt das System rund um den Code. Ich baue automatische Prüfungen, Tests, CI/CD und Architektur, die KI nicht mitliefert.";

export const aiVibecodingContent: AiVibecodingContent = {
  meta: {
    title: "Vibecoding-MVP wieder releasefähig machen",
    description,
    socialTitle: "Vom Vibecoding-MVP zum funktionierenden Geschäft",
    socialDescription: description
  },
  service: {
    name: "Vibecoding-MVP in Ordnung bringen",
    serviceType: "Entwicklung für mit KI gebaute MVPs",
    description:
      "Entwicklung für Gründer, deren Vibecoding-MVP keine Releases mehr schafft. Ich baue den Entwicklungsprozess auf, der solchem Code fehlt."
  },
  hero: {
    eyebrow: "Vibecoding-MVP → funktionierendes Geschäft",
    headlineLeadIn: "Ihrem Vibecoding-MVP ",
    headline: "fehlt das System rund um den Code.",
    statement:
      "Andere KI-Tools und Refactoring-Sprints helfen nicht weiter. Es braucht ein Entwicklungssystem, das KI nicht selbst baut.",
    promise: "Ich finde, was fehlt, baue es auf und hinterlasse ein System, das ohne mich funktioniert.",
    outcome: "Damit Sie Neues ausliefern, ohne Angst, Funktionierendes zu zerstören.",
    habrSignal: { label: "2023 auf Habr darüber geschrieben (auf Russisch)", href: "https://habr.com/ru/articles/719352/" },
    statsAriaLabel: "Wichtigste Ergebnisse",
    metrics: [
      { id: "experience", figure: "15+", label: "Jahre Softwareentwicklung" },
      { id: "rps", figure: "4K+", label: "RPS in Produktionssystemen" },
      { id: "teams", figure: "14+", label: "Teams, deren Entwicklung ich beschleunigt habe" }
    ],
    primaryCta: {
      label: "Schildern Sie Ihre Lage per Telegram",
      href: "https://t.me/sg4tech?start=site_de_ai_vibecoding_hero"
    },
    secondaryCtaLabel: "So funktioniert es",
    transformation: {
      withoutSystem: {
        title: "KI ohne System",
        subtitle: "Der Code ist da. Dann beginnt das Chaos.",
        generate: "KI schreibt Code",
        patch: "Bug flicken",
        breakFeature: "Feature geht kaputt",
        patchAgain: "Wieder flicken",
        regressions: "Neue Regressionen",
        incident: "Ausfall in Produktion um 3 Uhr nachts",
        footer: "Unvorhersehbar. Teuer. Nervenaufreibend."
      },
      withSystem: {
        title: "KI im System",
        subtitle: "KI arbeitet schnell. Das System sichert ab.",
        generate: "KI schreibt Code",
        guardrails: "Auto-Checks",
        tests: "Tests",
        cicd: "CI/CD",
        safeReleases: "Sichere Releases",
        footer: "Planbar. Skalierbar. Nachhaltig."
      },
      caption: "Dieselbe KI. Ein anderes System drumherum."
    }
  },
  problem: {
    title: "Die Schwachstellen eines Vibecoding-MVP zeigen sich jedes Mal gleich.",
    points: [
      {
        id: "breaks",
        text: "Sie fügen ein Feature hinzu, und drei andere gehen unbemerkt kaputt. Die nächsten zwei Tage suchen Sie, welche."
      },
      {
        id: "unknown",
        text: "Im Code gibt es Stellen, die niemand ganz versteht, auch Sie nicht. Sie anzufassen fühlt sich an wie russisches Roulette."
      },
      {
        id: "loops",
        text: "Die KI schreibt denselben Code immer wieder anders. Jeder Fix macht den vorherigen rückgängig, und Sie zahlen für Tokens, um sich im Kreis zu drehen."
      },
      {
        id: "prod",
        text: "In der Demo läuft alles. Ein echter Nutzer gibt etwas Ungewöhnliches ein, und um 3 Uhr nachts fällt die Produktion aus. Sie schauen in den Code und verstehen nicht, wie er funktioniert."
      }
    ],
    callout: "Alle diese Probleme haben eine Ursache: KI schreibt Code, baut aber kein System drumherum."
  },
  guardrails: {
    title: "Fünf Schutzebenen, die KI nicht mitliefert",
    intro:
      "Fünf getrennte Ebenen, jede achtet auf etwas, worauf KI nicht achtet. Zusammen ergeben sie das System, mit dem Ihr Produkt zuverlässig weiter ausgeliefert wird.",
    productionLabel: "Produktion",
    agentsLabel: "KI-Agenten",
    layers: [
      {
        id: "architecture",
        label: "Architekturregeln",
        text: "Eine Architektur, die sich selbst zusammenhält. Modulgrenzen, Abhängigkeiten und Schnittstellen sind so festgeschrieben, dass KI-Agenten sie nicht umgehen können."
      },
      {
        id: "pipeline",
        label: "Prüfungen in der Pipeline",
        text: "CI/CD-Prüfungen, die fehlerhafte Releases stoppen. Monitoring, das Probleme vor den Kunden bemerkt – und vor 3 Uhr nachts."
      },
      {
        id: "tests",
        label: "Tests",
        text: "Automatisierte Tests, die der nächsten Codegenerierung nicht trauen. Unit-, Integrations- und Regressionstests, damit ein neues Feature nicht unbemerkt drei andere kaputt macht."
      },
      {
        id: "code",
        label: "Code-Prüfungen",
        text: "Linter, Typprüfung, statische Analyse, Sicherheitsscans. Die Grundlagen, die die meisten Vibecoding-MVPs auslassen. Ohne sie zieht ein Fix zehn neue Fehler nach sich."
      },
      {
        id: "aiWorkflow",
        label: "Regeln für die KI",
        text: "Die Leitplanken, die der KI gefehlt haben: Regeln für Agenten, Ordnung im Kontext und Selbstprüfungen, damit die KI beim heutigen Feature nicht den Fix der letzten Woche zurückdreht."
      }
    ]
  },
  trust: {
    intro:
      "Ihre KI bleibt, ich baue das System um sie herum. Jahrelang habe ich hastig geschriebenen Startup-Code aufgeräumt, und dort gab es dieselben Probleme. Andere Quelle, gleiche Lösung.",
    points: [
      {
        id: "experience-stack",
        text: "15+ Jahre mit PHP, Python, Java, TypeScript, Node, C++, C#, iOS, Android (und ja, einmal Flash). Die Code-Probleme, die Entwicklung bremsen, hängen nicht vom Stack ab. KI lässt sie nur schneller entstehen."
      },
      {
        id: "track-record",
        text: "Ich habe dieses Problem bei Wowworks gelöst, wo ich Startup-Code bis zur EU-tauglichen Produktion gebracht habe, und in einem wachsenden EdTech-Unternehmen. Der Ansatz ist älter als KI.",
        outcomes: [
          { company: "Wowworks", chips: ["Bugs ↓10×", "Tempo ↑3×", "Effizienz ↑4×"] },
          { company: "EdTech", chips: ["Tempo ↑2×", "Ausfälle ↓10×", "eNPS −100→100"] }
        ]
      },
      {
        id: "habr",
        text: (
          <>
            Genau darüber habe ich 2023 auf{" "}
            <a href="https://habr.com/ru/articles/719352/" target="_blank" rel="noreferrer">
              Habr
            </a>{" "}
            geschrieben (auf Russisch), noch bevor KI alles beschleunigt hat.
          </>
        )
      },
      {
        id: "hands-on",
        text: "Ich mache die Arbeit selbst: Architektur, automatische Prüfungen, KI-Workflows, Refactoring."
      }
    ]
  },
  process: {
    title: "So arbeite ich",
    intro:
      "Keine vorgefertigten Lösungen. Zuerst sehen wir, was wirklich kaputt ist. Dann machen wir Änderungen sicher releasefähig. Dann bauen wir ein System, das Wachstum aushält.",
    outputLabel: "Ergebnis:",
    steps: [
      {
        title: "Audit",
        duration: "1–2 Wochen",
        points: [
          "Ich prüfe Code, Entwicklungsprozess und wie das Team KI einsetzt",
          "Ich finde, was stört, was funktioniert und was fehlt",
          "Ich entscheide nach geschäftlichem Nutzen, was zuerst repariert wird"
        ],
        output: "Ein klares Bild und ein priorisierter Plan für die Fixes"
      },
      {
        title: "Absicherung",
        duration: "2–8 Wochen",
        points: [
          "Ich richte die Grundlagen ein: Git, CI/CD, Monitoring, Logs",
          "Ich füge alle fünf Schutzebenen hinzu, auch die Regeln für die KI",
          "Ich behebe die kritischen Bugs, die dabei auftauchen"
        ],
        output: "Der Code kann sicher in Produktion, kritische Bugs sind behoben, die KI arbeitet innerhalb der Prüfungen"
      },
      {
        title: "Skalierung",
        duration: "Danach – über Monate",
        points: [
          "Ich lege die Zielarchitektur fest und führe den Code sicher dorthin",
          "Ich stimme das System auf Ihre reale Last ab",
          "Spezialisten hole ich gezielt dazu, nur wenn das Wachstum es verlangt"
        ],
        output: "Der Code lässt sich weiterentwickeln, und neue Leute im Team machen ihn nicht kaputt"
      }
    ],
    note: "Das Ziel: weniger Chaos, planbare Releases und die Sicherheit, weitermachen zu können.",
    expectations: {
      title: "Was Sie erwarten können",
      points: [
        "Erste Verbesserungen bei CI/CD und Monitoring nach 2–4 Wochen",
        "Kritische Bugs sind meist im ersten Monat behoben",
        "Die Architektur bringen wir über einige Monate in Ordnung; wie lange genau, hängt vom Ausgangscode und vom Team ab"
      ]
    }
  },
  whoNotFor: {
    title: "Für wen ich nicht passe",
    items: [
      "Ihr eigentlicher Engpass sind Marketing und Vertrieb. Dafür brauchen Sie jemanden für die Markteinführung.",
      "Sie haben noch kein funktionierendes MVP. Erst muss es gebaut werden, dann lässt es sich reparieren.",
      "Sie suchen kostenlose Hilfe oder Tipps, um alles selbst zu machen."
    ]
  },
  featuredEssay: {
    label: "Artikel zum Thema",
    slug: "vibecoded-mvp-stopped-shipping"
  },
  faq: [
    {
      question: "Muss ich auf meine KI-Tools verzichten?",
      answer:
        "Nein. Ich bin selbst Vibecoder: Ich arbeite mit Claude Code, Codex und JetBrains-IDEs. An einen Stack bin ich nicht gebunden, alles, was Ihr Team nutzt, passt. Ich baue das System rund um Ihre Arbeit mit KI."
    },
    {
      question: "Was kostet das?",
      answer:
        "Abgerechnet wird monatlich, meist arbeiten wir 2–4 Monate zusammen. Der genaue Preis hängt vom Umfang ab, wir besprechen ihn per Nachricht."
    },
    {
      question: "Muss ich viele teure Entwickler einstellen?",
      answer:
        "Nicht unbedingt. Zuerst holen wir mehr aus der KI heraus, die bei Ihnen schon arbeitet: bessere Regeln, automatische Prüfungen und eine Architektur drumherum. Braucht das Wachstum danach besondere Expertise, holen wir gezielt Spezialisten dazu. Einstellungen kommen zuletzt."
    },
    {
      question: "Arbeiten Sie mit unserem Entwickler oder CTO zusammen?",
      answer:
        "Ja. Das System, das ich aufbaue, hilft Ihrem bestehenden Team, schneller zu releasen. Ihr CTO oder Entwickler bleibt dabei, und was umgesetzt wird, entscheiden wir gemeinsam."
    },
    {
      question: "Wir haben schon KI-Tools gewechselt, refaktoriert und einen Senior eingestellt. Was ändert sich mit Ihnen?",
      answer:
        "Ein neues Tool ergänzt nicht, was fehlt, deshalb kommen die Probleme zurück. Refactoring ohne Tests bringt neue Bugs. Auch ein Senior braucht ein System rund um den Code, um ihn sicher zu ändern. Ich baue dieses System zuerst, und seine Regeln werden automatisch geprüft."
    },
    {
      question: "Was genau führen Sie ein?",
      answer:
        "Standardwerkzeuge: Agents.md, Linter (ESLint, PHPStan, mypy), Typprüfung, Sicherheitsscanner, Tests (Jest, Pytest, PHPUnit), GitHub Actions, Sentry oder DataDog. Nichts Exotisches. Die eigentliche Arbeit ist, alles so zu verbinden, dass KI-Agenten die Prüfungen bei der nächsten Anfrage nicht umgehen können."
    },
    {
      question: "Sind die Daten meiner Nutzer gerade in Gefahr?",
      answer:
        "Möglicherweise. In Vibecoding-MVPs stecken oft Passwörter und Schlüssel direkt im Code, Eingaben werden nicht geprüft, und Abhängigkeiten verfolgt niemand. KI macht Code nicht von selbst sicher. Ich habe Computersicherheit studiert, für mich ist sie eine Grundanforderung. In der Phase „Absicherung“ finde und behebe ich diese Probleme Schritt für Schritt."
    }
  ],
  finalCta: {
    heading: (
      <>
        Wir reparieren es so, <em>dass es hält.</em>
      </>
    ),
    text: "Schreiben Sie, was mit Ihrem Projekt los ist. Wir klären schnell, ob ich passe und womit wir anfangen.",
    label: "Projekt schildern",
    href: "https://t.me/sg4tech?start=site_de_ai_vibecoding_final"
  }
};

export const aiVibecodingOgCard: OgCardContent = {
  alt: "KI-Vibecoding: vom Vibecoding-MVP zum funktionierenden Geschäft",
  eyebrow: "KI-Vibecoding",
  title: "Vom Vibecoding-MVP zum funktionierenden Geschäft",
  subtitle: "Auto-Checks, Tests, CI/CD und Architektur, die KI nicht mitliefert"
};
