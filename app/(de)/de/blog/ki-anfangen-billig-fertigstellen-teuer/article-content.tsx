// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: starting got cheap while finishing didn't →
// the cost of work is now visible → the old metrics still apply → the losses
// come from waiting and context (Little's Law covers agents too) → the fix is
// finishing discipline → the constraint has moved off code production.

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/ai-made-starting-free-finishing-expensive.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const PILLAR_HREF = getPostPathInLocale("diagnose-broken-engineering-delivery", "de");
const RESCUE_HREF = pagePath("de", "ai-vibecoding");
const INTERRUPTED_WORK_HREF = "https://ics.uci.edu/~gmark/chi08-mark.pdf";
const LONG_CONTEXT_STUDY_HREF = "https://arxiv.org/html/2512.04307v1";

export function ArticleLede(): ReactNode {
  return (
    <>
      Teams mit KI-Agenten beginnen mehr Arbeit als je zuvor und liefern etwa gleich viel aus. Der
      Einstieg ist billig geworden; Prüfung, Integration und Auslieferung sind so teuer wie eh und je.
      Der Ausweg ist eine alte Disziplin: die laufende Arbeit begrenzen und nur zählen, was fertig
      geworden ist.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Neue Arbeit anzufangen war noch nie so billig. Noch ein Agenten-Thread. Noch eine Idee. Noch
        ein Experiment, das im Hintergrund läuft. Die Kosten dafür, etwas zu <em>beginnen</em>, sind
        eingebrochen: Ein KI-Agent übernimmt jede Aufgabe, die Sie ihm geben, sofort und zu jeder
        Uhrzeit.
      </p>
      <p>
        Was nicht eingebrochen ist: die Kosten des <em>Fertigstellens</em>. Prüfung, Integration,
        Review, Deployment, also alles, was Arbeit in einen Zustand bringt, in dem sie in Produktion
        läuft und sich bezahlt macht, kostet fast genau so viel wie früher.
      </p>
      <p>
        Also beginnen Teams mehr als je zuvor und liefern etwa gleich viel aus. Die Boards füllen sich
        mit halbfertiger Arbeit. Agenten laufen den ganzen Tag, die Token-Rechnung wächst, und trotzdem
        sind die Release Notes irgendwie nicht länger als im letzten Quartal.
      </p>
      <p>
        Dahinter steckt ein altes Flussproblem, verstärkt durch neue Tools, und weder ein anderes Tool
        noch bessere Prompts lösen es. Auch die Lösung ist alt:{" "}
        <strong>
          Begrenzen Sie die laufende Arbeit und optimieren Sie aufs Fertigstellen. Es gewinnt, wer am
          meisten fertigstellt.
        </strong>{" "}
        Der Rest dieses Artikels begründet diese These: zuerst in Geld, dann in der Mechanik.
      </p>
    </>
  );
}

export function SectionCostVisible(): ReactNode {
  return (
    <>
      <h2 id="cost">Was Arbeit mit KI wirklich kostet und wie man es zählt</h2>
      <p>
        Jahrzehntelang waren die Kosten einer einzelnen Aufgabe unsichtbar, versteckt in festen
        Gehältern. Ein Entwicklermonat kostet gleich viel, ob ein Feature drei Anläufe gebraucht hat
        oder dreißig, also hat niemand die Anläufe gezählt. Bei KI-Agenten hat jede Aktion ein
        Preisschild, und die Rechnung wird sehr schnell sehr sichtbar.
      </p>
      <p>
        So sieht das in der Praxis aus. Ein Agent hat 40 Anläufe gebraucht, 15 Dollar für Tokens
        ausgegeben und trotzdem kein funktionierendes Feature geliefert. Multiplizieren Sie das jetzt
        mit jeder Aufgabe, die Ihr Team in einem Monat bearbeitet. Die Schleife hinter dieser Rechnung
        kennt jeder, der Agenten an echter Arbeit einsetzt: ein Anlauf. Funktioniert fast. Noch ein
        Anlauf. Etwas besser. Dann geht etwas kaputt, der Kontext verrutscht, Sie fangen an zu
        reparieren, und es wird schlimmer. Irgendwo an dieser Stelle sehen Sie es klar: Eine
        „Aufgabe“ ist selten eine einzige Aktion. Es sind Dutzende Iterationen, Anläufe, Korrekturen,
        Sackgassen, und Sie bezahlen jede davon, auch die, die Sie wegwerfen.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-made-starting-free-finishing-expensive/ai-agent-pnl.webp"
          alt="Handgezeichnete Gewinn-und-Verlust-Rechnung eines KI-Agenten: Ergebnis null funktionierende Features; Kosten 15 Dollar für Tokens und Infrastruktur; Saldo minus 15 Dollar, kein funktionierendes Feature geliefert"
          width={1200}
          height={1200}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Die Gewinn-und-Verlust-Rechnung einer gescheiterten Aufgabe: jeder Anlauf berechnet, nichts
          ausgeliefert.
        </FigureCaption>
      </figure>
      <p>Um zu wissen, was Ihre Delivery tatsächlich kostet, müssen Sie nur drei Dinge zählen:</p>
      <ul>
        <li>wie viele Aufgaben ein funktionierendes Ergebnis erreicht haben,</li>
        <li>wie viele Iterationen das gebraucht hat,</li>
        <li>und was diese Iterationen gekostet haben.</li>
      </ul>
      <p>
        Teilen Sie die Gesamtausgaben durch die abgeschlossenen Aufgaben, und Sie haben die Zahl, auf
        die es ankommt: die <strong>Kosten pro erfolgreicher Aufgabe</strong>, also was Sie ein{" "}
        <em>fertiges</em> Stück Arbeit wirklich kostet.
      </p>
      <p>
        Der Gewinn: Optimierung ist kein Rätselraten mehr. Hilft der neue Prompt wirklich? Bezahlen
        sich Tests rund um den Agenten selbst? Hat die Änderung am Arbeitsablauf etwas gebracht?
        Subjektiv „fühlt sich“ immer alles besser an. Der Zahl ist das Gefühl egal: Nach jeder Änderung
        sind die Kosten pro erfolgreicher Aufgabe entweder gesunken oder eben nicht.
      </p>
      <p>
        Eine Warnung, bevor Sie loslegen. Beobachten Sie Teams bei der Arbeit an dieser Kennzahl, und Sie
        sehen, wie sie direkt auf Token-Preise und Modellstufen losgehen und das eigentliche Leck
        übersehen.{" "}
        <strong>
          Das Ziel sind möglichst viele erfolgreiche Ergebnisse pro ausgegebenem Dollar, und der
          Token-Verbrauch ist dabei Nebensache.
        </strong>{" "}
        Der größte Treiber der Kosten pro <em>fertiger</em> Aufgabe ist all die Arbeit, die Sie
        begonnen und nie abgeschlossen haben. Der Preis einer Iteration fällt dagegen kaum ins Gewicht.
      </p>
    </>
  );
}

function MetricsTable(): ReactNode {
  return (
    <table className={styles.mappingTable}>
      <thead>
        <tr>
          <th>Kennzahl</th>
          <th>Was sich mit KI-Agenten ändert</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Durchsatz: ausgelieferte Aufgaben pro Zeitraum</th>
          <td>Nichts. Es zählt, was in Produktion ankommt.</td>
        </tr>
        <tr>
          <th>Time to Market: von der Idee bis zum funktionierenden Ergebnis</th>
          <td>Nichts. Die Uhr läuft weiterhin bis zur Produktion.</td>
        </tr>
        <tr>
          <th>Qualität: Arbeit, die ohne Nacharbeit nutzbar ist</th>
          <td>Nichts. Nacharbeit frisst Sie weiterhin auf.</td>
        </tr>
        <tr>
          <th>NPS: ob das Ergebnis Wert schafft</th>
          <td>Nichts. Um den Wert geht es nach wie vor.</td>
        </tr>
        <tr>
          <th>Kosten pro erfolgreicher Aufgabe: Gesamtausgaben ÷ abgeschlossene Aufgaben</th>
          <td>
            <strong>
              Alles. Früher war sie unsichtbar, versteckt in den Gehältern. Heute hat jede Aufgabe eine
              Rechnung.
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionMetricsSurvive(): ReactNode {
  return (
    <>
      <h2 id="metrics">Ihre Delivery-Metriken gelten auch für Arbeit mit KI</h2>
      <p>
        Wenn Sie gelesen haben, <Link href={PILLAR_HREF}>wie ich Entwicklungsprozesse diagnostiziere</Link>,
        kennen Sie den Rahmen schon. Jede Kennzahl, die ein menschliches Team beschrieben hat, gilt
        weiterhin. Nur eine Sache hat sich tatsächlich geändert:
      </p>
      <MetricsTable />
      <p>
        Sie können schnell und teuer liefern, billig und mit Bergen von Nacharbeit oder in großer Menge am Bedarf der Nutzer vorbei, und die Wirtschaftlichkeit läuft still und leise aus dem Ruder.
      </p>
      <p>Das Messsystem hat überlebt. Geändert hat sich, wo sich die Arbeit staut.</p>
    </>
  );
}

export function SectionParallelTasks(): ReactNode {
  return (
    <>
      <h2 id="parallel-tasks">Warum Ihr KI-Agent mit jeder parallelen Aufgabe schlechter wird</h2>
      <p>Zwei Mechanismen fressen die Gewinne auf. Beide sind alt, beide wurden verstärkt.</p>
      <p>
        <strong>Der erste ist das Warten.</strong>{" "}
        In den meisten Systemen wird an den meisten Aufgaben gerade gar nicht gearbeitet, sie warten.
        Schauen Sie sich nun einen Arbeitsablauf mit KI an: Sie warten auf den Agenten (Generierung,
        Tests, Deployment), dann wartet der Agent auf Sie (eine Antwort, eine Entscheidung, die nächste
        Anweisung). Während eine Aufgabe wartet, wechseln Sie zu einer anderen, denn sie anzufangen
        kostet ja fast nichts. Jede zusätzliche Aufgabe verlängert die Warteschlange für alle.
        Little&apos;s Law, nach dem die Lead Time gleich der laufenden Arbeit geteilt durch den
        Durchsatz ist, gilt unabhängig davon, ob Menschen oder Agenten arbeiten. Wer mehr beginnt, ohne
        mehr abzuschließen, verlängert einfach das Leben jeder einzelnen Aufgabe.
      </p>
      <p>
        <strong>Der zweite ist der Kontext.</strong>{" "}
        Jedes System kann nur eine begrenzte Menge aktiver Arbeit halten. Beim Menschen sind es
        Aufmerksamkeit und Gedächtnis. Forschung zu unterbrochener Arbeit hat gezeigt, dass Menschen
        Wechsel tatsächlich ausgleichen, indem sie schneller arbeiten, dafür aber messbar mehr
        Belastung, Stress und Frust in Kauf nehmen (
        <a href={INTERRUPTED_WORK_HREF} target="_blank" rel="noreferrer">
          Mark, Gudith &amp; Klocke, 2008
        </a>
        ). Die Kosten sind real, sie tragen nur die Menschen, und auf einer Rechnung erscheinen sie nie.
      </p>
      <p>
        Beim Agenten ist die Grenze das Kontextfenster, und dort lässt sich der Abbau direkt am
        Ergebnis messen. Eine{" "}
        <a href={LONG_CONTEXT_STUDY_HREF} target="_blank" rel="noreferrer">
          Studie zu Web-Agenten bei Aufgaben mit langem Kontext
        </a>{" "}
        (Chung et al.) hat gezeigt, dass die Leistung einbricht, sobald sich irrelevante Historie im
        Kontext ansammelt, genau das, was ein Thread mit mehreren Aufgaben erzeugt. Bei Störinhalten
        von bis zu 150.000 Tokens fiel die Erfolgsquote bei einigen getesteten Modellen von
        40–50&nbsp;% auf einstellige Werte; GPT-4.1 sank von rund 45&nbsp;% auf 2,7&nbsp;%.
      </p>
      <p className={styles.pullquote}>
        Menschen verlieren den Fokus, Agenten den Kontext, und es ist dasselbe Versagen. Zu viel
        laufende Arbeit verschlechtert die Arbeitskraft, ob sie aus Neuronen besteht oder aus Tokens.
      </p>
    </>
  );
}

function OneThreadRules(): ReactNode {
  return (
    <ul>
      <li>
        <strong>Für Agenten: ein Thread, eine Aufgabe.</strong>{" "}
        Halten Sie einen Thread auf ein einziges Ergebnis fokussiert. Wenn Nebenthemen auftauchen, ein
        Bug, der Ihnen aufgefallen ist, ein lohnendes Refactoring, dann landen sie auf einer Liste oder
        bei einem anderen Agenten. Ein fokussierter Thread wird fertig; ein überladener dreht sich im
        Kreis.
      </li>
      <li>
        <strong>Für Sie: erst abschließen, dann anfangen.</strong>{" "}
        Bevor Sie eine neue Aufgabe öffnen, fragen Sie sich, was Sie abschließen können. Ein Agent, der
        auf Ihr Review wartet, ist laufende Arbeit. Drei Agenten, die auf Ihr Review warten, sind eine
        Warteschlange, und der Engpass darin sind Sie.
      </li>
      <li>
        <strong>Für das Team: dieselben WIP-Limits für beide Arten von Arbeitskräften.</strong>{" "}
        Entscheidend ist, wie viel unfertige Arbeit im System liegt. Begonnene Aufgaben und die
        Aktivität der Agenten sagen darüber wenig. Eine lange Liste aktiver Threads ist Lagerbestand.
      </li>
    </ul>
  );
}

export function SectionOneThread(): ReactNode {
  return (
    <>
      <h2 id="one-thread">Ein Thread, eine Aufgabe: WIP-Limits für die Arbeit mit KI</h2>
      <p>
        Die Disziplin, die das behebt, gibt es seit Jahrzehnten. KI hat sie zur Pflicht gemacht, denn noch nie war es so billig, der Versuchung nachzugeben und mehr anzufangen.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-made-starting-free-finishing-expensive/busy-not-delivering.webp"
          alt="Zwei Kanban-Boards im Vergleich: Wer mehr anfängt, überfüllt die Spalte In Progress, während Done dünn bleibt; wer mehr fertigstellt, hält die laufende Arbeit klein und füllt Done mit abgeschlossenen Aufgaben"
          width={1200}
          height={800}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Mehr anfangen füllt das Board. Mehr fertigstellen füllt die Produktion.
        </FigureCaption>
      </figure>
      <OneThreadRules />
      <p>
        Unbequem ist die Verschiebung dessen, was als Zeichen von Fortschritt gilt. Begonnene Arbeit war
        früher knapp, also bedeutete das Anfangen etwas. Jetzt, wo das Anfangen fast kostenlos ist,{" "}
        <strong>gewinnt, wer am meisten fertigstellt.</strong> Weniger gleichzeitig in Arbeit, mehr
        erledigt.
      </p>
    </>
  );
}

export function SectionConstraintMoved(): ReactNode {
  return (
    <>
      <h2 id="constraint">Der Engpass ist gewandert, und Sie sollten ihm folgen</h2>
      <p>
        Wenn Sie die These teilen, also Fertigstellen vor Anfangen, folgt daraus noch eine Konsequenz,
        und für Startups, die stark auf KI setzen, ist sie die wichtigste.
      </p>
      <p>
        Für einen Gründer allein oder ein kleines Team, das KI diszipliniert einsetzt, ist das Schreiben
        von Code fast kein Engpass mehr. Iterationen sind billig im Vergleich zu den Kosten unfertiger
        Arbeit; die Generierung selbst geht schnell. Knapp ist jetzt die Fähigkeit zu entscheiden,{" "}
        <em>was</em> gebaut wird, <em>warum</em> und <em>für wen</em>, und die Fähigkeit, Arbeit bis
        zum Abschluss zu bringen. Für ein Produktteam mit 5–50 Entwicklern ist Programmieren noch nicht
        kostenlos, aber die Richtung ist dieselbe: Der Engpass wandert aus der Codeproduktion in die
        Entscheidungen und ins Fertigstellen.
      </p>
      <p>
        Das ist Engpasstheorie für Einsteiger: Wenn der Engpass wandert, ist es verschwendete Mühe, den
        alten weiter zu optimieren. Noch einmal 10&nbsp;% aus der Codegenerierung herauszuholen ändert
        nichts, wenn Arbeit stirbt, während sie auf Prüfung, Review und eine Entscheidung wartet.
      </p>
      <p>
        KI macht Systemdenken umso wichtiger, denn Fehler im System werden teurer: Die Rechnung dafür
        kommt jetzt sofort, Posten für Posten, in Dollar. Wenn Ihr Entwicklungsprozess Arbeit zwischen
        „begonnen“ und „ausgeliefert“ verliert, skalieren Agenten diesen Verlust bereitwillig für Sie.
        (Wenn Sie mit einem KI-gebauten Produkt genau dort stehen: Über{" "}
        <Link href={RESCUE_HREF}>den Weg aus dieser Lage</Link> habe ich separat geschrieben.)
      </p>
    </>
  );
}
