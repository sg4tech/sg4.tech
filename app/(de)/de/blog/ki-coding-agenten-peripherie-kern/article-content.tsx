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

const STARTING_CHEAP_HREF = getPostPathInLocale("ai-made-starting-free-finishing-expensive", "de");
const RESCUE_HREF = pagePath("de", "ai-vibecoding");

export function ArticleLede(): ReactNode {
  return (
    <>
      KI-Coding-Agenten glänzen bei mancher Arbeit und sind bei anderer gefährlich. Überlassen Sie
      ihnen die Peripherie und halten Sie Menschen am Kern. Hier steht, wo sie ihren Platz verdienen
      und wo nicht.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Ein KI-Coding-Agent findet die Ursache eines Bugs in Code, den seit einem Jahr niemand
        angefasst hat, und liefert am selben Nachmittag selbstbewusst einen aus, der den Checkout
        lahmlegt, wenn Sie ihn an den Kern lassen. Der Abstand zwischen diesen beiden Momenten ist auf
        jeder Ebene derselbe. Ein Gründer allein kann sich diesen Abstand leisten; in einem Unternehmen entscheidet er alles.
      </p>
      <p>
        Für Gründer ist das meiste davon schon geklärt. Im letzten Jahr habe ich Leute ohne
        ernsthaften Entwicklungshintergrund echte Produkte selbst bauen und wachsen sehen: ein CRM für
        eine Präsenzschule, ein Tool für Business-Analysten, Marketing-Automatisierung für den eigenen
        Bedarf.{" "}
        <Link href={STARTING_CHEAP_HREF}>Die Einstiegskosten für das Bauen sind eingebrochen</Link>;
        das Sammeln von Kennzahlen aus Jira und GitLab richten Sie an einem Abend ein.
      </p>
      <p>
        Die Fallstricke sind nicht verschwunden: Agenten verlieren den Kontext, erzeugen seltsamen
        Code, und manche Projekte rutschen ins Chaos. Das lässt sich lösen, und genau damit verbringe
        ich viel Zeit; über <Link href={RESCUE_HREF}>den Weg aus dieser Lage</Link> habe ich separat
        geschrieben. Das ist die Version für Gründer. Das schwierigere, weniger erforschte Problem liegt
        eine Ebene höher, in einem Unternehmen, und darum geht es in diesem Text.
      </p>
    </>
  );
}

export function SectionBarrier(): ReactNode {
  return (
    <>
      <h2 id="barrier">Im Unternehmen liegt die eigentliche Hürde bei den Freigaben</h2>
      <p>
        Im Konzernmaßstab kann der Agent genauso viel; schwierig ist, ihn überhaupt einsetzen zu
        dürfen. In Startups ist KI längst ein Standardwerkzeug; in Unternehmen hängt die Einführung
        wochenlang an Freigaben: Sicherheitsprüfungen, welche Daten das Modell erreichen dürfen, wem
        die Plattform gehört, wie Agenten gesteuert werden.
      </p>
      <p>
        Die Erkenntnis, die das löst: Nichts muss das Haus verlassen. Sie können eine OpenAI-kompatible
        API vollständig innerhalb Ihres eigenen Sicherheitsbereichs betreiben: ein Open-Source-Modell
        wie Qwen, bereitgestellt über LiteLLM und vLLM, nur über das Firmen-VPN erreichbar, dazu ein
        Agent wie Opencode oder Hermes in der IDE und MCP-Server, die ihn mit Jira, GitLab, Confluence
        und Ihren übrigen internen Tools verbinden. Er läuft mit den eigenen Zugangsdaten eines
        Entwicklers, fasst nur an, was dieser Entwickler ohnehin darf, und protokolliert jede Aktion für
        die Revision. Damit ist die Sicherheit kein Hindernis mehr. Den kompletten Stack aufzubauen ist
        ein Thema für sich, aber die Hürde von vor einem Jahr ist es nicht mehr.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-coding-agent-periphery-core/enterprise-ai-perimeter.webp"
          alt="KI im Unternehmen innerhalb des Sicherheitsbereichs: Die IDE eines Entwicklers speist einen KI-Agenten, der eine OpenAI-kompatible API und ein selbst gehostetes Open-Source-Modell erreicht, alles verbunden mit internen Systemen wie GitLab, Jira, Confluence und Grafana, ohne externe APIs, ohne zusätzliche Rechte und mit vollständigem Audit-Trail."
          width={1372}
          height={1374}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Innerhalb des Sicherheitsbereichs: Der Agent läuft auf interner Infrastruktur, mit den eigenen
          Zugängen eines Entwicklers und vollständigem Audit-Trail. Nichts verlässt das Unternehmen.
        </FigureCaption>
      </figure>
      <p>
        Sobald er läuft, ob auf dem Laptop des Gründers oder im Firmen-VPN, stellt sich dieselbe Frage:
        Was geben Sie ihm eigentlich?
      </p>
    </>
  );
}

export function SectionWhatWorks(): ReactNode {
  return (
    <>
      <h2 id="what-works">Worin KI-Coding-Agenten gut sind</h2>
      <p>
        Verbunden mit Ihrem Code, Ihrer Dokumentation, Ihren Aufgaben, Tests, Logs und Kennzahlen
        beginnt der Agent, Ihr Projekt zu verstehen, ob es nun Cursor ist, Claude Code oder ein selbst
        gehosteter interner Agent. Hier verdient er seinen Platz.
      </p>
      <ul>
        <li>
          <strong>Sich in fremden Code einarbeiten</strong>: in Code eintauchen, den Sie nie angefasst
          haben, die Ursache eines Bugs in einer Funktion finden, von der Sie nichts wissen, die Frage
          eines Analysten zu einem Feature beantworten, von dem Sie noch nie gehört haben.
        </li>
        <li>
          <strong>Unterstützung der Entwicklung</strong>: die Tools und Automatisierungen, für die nie
          jemand Zeit hatte. Kennzahlen sammeln, Daten aus Jira und GitLab exportieren, Agent-Skills für
          wiederkehrende Arbeit wie Standardintegrationen. Das Kernprodukt, bei dem Codequalität
          entscheidend ist, gehört nicht dazu.
        </li>
        <li>
          <strong>Artefakte rund um den Code</strong>: Dokumentation, UML-Diagramme, automatisierte
          Tests, Testfälle in TestRail, Präsentationen.
        </li>
        <li>
          <strong>Reviews</strong> von Code, Anforderungen und Spezifikationen. Bisher halb und halb:
          manchmal reines Rauschen, manchmal ein wirklich nützlicher Fund.
        </li>
      </ul>
    </>
  );
}

export function SectionWhatNot(): ReactNode {
  return (
    <>
      <h2 id="what-not">Was KI-Coding-Agenten nicht verantworten sollten</h2>
      <p>
        <strong>Die komplette Entwicklung von allem, was wirklich zählt.</strong>{" "}
        Geld, Blockchains, Hochlastsysteme, Kernarchitektur: überall dort, wo ein Fehler leicht passiert
        und teuer rückgängig zu machen ist. In einem Startup funktioniert es teilweise schon, dem Agenten
        ein ganzes Feature zu übergeben; in Produktion, mit echtem Traffic und echtem Geld im Spiel, ist
        das noch keine gute Idee. Beschleunigt er die Arbeit? Ja. Ersetzt er einen Senior-Entwickler?
        Nein.
      </p>
    </>
  );
}

export function SectionRule(): ReactNode {
  return (
    <>
      <h2 id="rule">Die Regel: Peripherie für den Agenten, Kern für den Menschen</h2>
      <p>
        Das Muster ist einfach. Der Agent übernimmt die <strong>Peripherie</strong> rund um die
        Entwicklung: Routinearbeit, unterstützende Aufgaben, die Orientierung in fremdem Code,
        Artefakte, also alles mit großem Volumen und vergleichsweise geringen Fehlerkosten. Der{" "}
        <strong>Kern</strong>, wo Fehler in Geld und Nutzern gemessen werden, bleibt bei Menschen.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-coding-agent-periphery-core/periphery-vs-core.webp"
          alt="Kreisdiagramm: In der Mitte ein Kern in menschlicher Verantwortung mit der Beschriftung „engineering decisions“ (technische Entscheidungen), ringsum die Peripherie, die ein KI-Agent abdeckt: Debugging, Dokumentation, Tests, Reviews, Anforderungen, Standardintegrationen, Automatisierung und Präsentationen."
          width={1200}
          height={1200}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Der Agent bearbeitet die Peripherie; der menschliche Kern ist die technische Entscheidung.
        </FigureCaption>
      </figure>
      <p>
        Früher haben Entwickler Stunden damit verbracht, Informationen zu suchen und sich durch Routine
        zu kämpfen. Heute besteht ihre Hauptaufgabe darin, die richtige technische Entscheidung zu
        treffen.
      </p>
    </>
  );
}
