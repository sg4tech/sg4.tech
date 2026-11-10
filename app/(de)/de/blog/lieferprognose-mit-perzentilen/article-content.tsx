// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: average misleads → median → the gap is the
// diagnosis → pick the date from a percentile → predictability is the product.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/forecast-delivery-with-percentiles.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";

const PILLAR_HREF = getPostPathInLocale("diagnose-broken-engineering-delivery", "de");

export function ArticleLede(): ReactNode {
  return (
    <>
      Die meisten Teams prognostizieren Liefertermine anhand des Durchschnitts. Ausgerechnet diese
      Zahl stellt das System fast garantiert falsch dar, und jedes Mal, wenn Sie sie nennen und den
      Termin reißen, verspielen Sie unnötig Vertrauen. Hier steht, was Sie stattdessen nennen sollten.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <p>
      Sobald ein Team anfängt, seine Delivery zu messen, mit den{" "}
      <Link href={PILLAR_HREF}>Kennzahlen, die zeigen, wo sie wirklich hakt</Link>, stellen Gründer
      immer dieselbe nächste Frage: Was können wir mit all diesen Daten wann zusagen? Fast alle
      antworten mit einem Durchschnitt. Für diese Aufgabe ist er die schlechteste Zahl, die es gibt.
    </p>
  );
}

export function SectionAverageComfort(): ReactNode {
  return (
    <>
      <h2 id="average">1. Der Durchschnitt ist eine Beruhigungspille</h2>
      <p>
        Manager greifen zum Durchschnitt, weil er eine unübersichtliche Wirklichkeit auf eine Zahl
        verdichtet, die man im Daily laut aussprechen kann. Genau diese Bequemlichkeit ist das Problem.
      </p>
      <p>Nehmen wir einen Monat abgeschlossener Arbeit:</p>
      <div className={styles.numericExample}>
        <p>9 Aufgaben jeweils in ~1 Tag erledigt</p>
        <p>1 Aufgabe hat sich einen Monat hingezogen</p>
        <p>→ durchschnittliche Lead Time ≈ 4 Tage</p>
      </div>
      <p>
        Keine einzige Aufgabe in diesem System dauert tatsächlich vier Tage. Die meisten brauchen einen;
        ein einziger Nachzügler zieht den Mittelwert hoch. Auch in einem Fluss, der{" "}
        <em>im Durchschnitt</em> nur einen Meter tief ist, kann man ertrinken.
      </p>
      <p className={styles.pullquote}>Die durchschnittliche Lead Time beschreibt ein System, das Sie nicht haben.</p>
    </>
  );
}

export function SectionMedianTypical(): ReactNode {
  return (
    <>
      <h2 id="median">2. Der Median ist die typische Aufgabe</h2>
      <p>
        Der Median ist die Aufgabe in der Mitte: Die Hälfte wird schneller fertig, die Hälfte langsamer.
        Hier liegt er bei etwa einem Tag, und schon diese eine Zahl zeigt, dass die meiste Arbeit zügig
        durchläuft.
      </p>
      <p>
        Damit sieht die Klage ganz anders aus. Wenn jemand fragt: „Unser Durchschnitt liegt bei vier
        Tagen, warum sind wir so langsam?“, verdeckt der Durchschnitt das eigentliche Bild: Neunzig
        Prozent der Arbeit laufen gut, ein paar Aufgaben sind gestrandet. Wann immer ich mit einem Team
        ein Control Chart geöffnet habe, erzählte die Lücke zwischen Mittelwert und Median meist schon
        die ganze Geschichte: Die meisten Tickets waren in ein, zwei Tagen durch, eins oder zwei lagen
        wochenlang in einer Review-Schlange, die niemand im Blick hatte. Das System arbeitet zügig. Eine
        Handvoll Aufgaben steckt fest.
      </p>
    </>
  );
}

// Right-skewed lead-time distribution. One bar per day (day 0–25); heights
// fall off into a long tail. Mean sits visibly right of the median — the
// whole point of section 3.
const DIST_HEIGHTS = [
  12, 150, 120, 70, 42, 30, 22, 16, 12, 10, 8, 7, 6, 5, 5, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1, 1
];
const DIST_TICKS = [0, 5, 10, 15, 20, 25];

function DistributionChart(): ReactNode {
  return (
    <figure className={styles.distChart}>
      <svg
        viewBox="0 0 600 244"
        role="img"
        aria-label="Eine rechtsschiefe Verteilung der Lead Time: Die meisten Aufgaben sind in ein bis drei Tagen fertig, dazu kommt ein langer Schwanz langsamer Aufgaben. Der Median liegt bei etwa zwei Tagen innerhalb der hohen Balken; der Mittelwert wird nach rechts auf etwa fünf Tage gezogen, wo kaum Aufgaben landen."
      >
        <line className={styles.dcAxis} x1="50" y1="40" x2="50" y2="200" />
        <line className={styles.dcAxis} x1="50" y1="200" x2="570" y2="200" />
        {DIST_HEIGHTS.map((h, d) => (
          <rect key={d} className={styles.dcBar} x={50 + d * 20} y={200 - h} width="18" height={h} />
        ))}
        <line className={styles.dcMedian} x1="90" y1="200" x2="90" y2="44" />
        <text className={styles.dcMedianLabel} x="86" y="36" textAnchor="end">
          Median ~2d
        </text>
        <line className={styles.dcMean} x1="150" y1="200" x2="150" y2="44" />
        <text className={styles.dcMeanLabel} x="154" y="36" textAnchor="start">
          Mittelwert ~5d
        </text>
        {DIST_TICKS.map((t) => (
          <text key={t} className={styles.dcTick} x={50 + t * 20} y="216" textAnchor="middle">
            {t}
          </text>
        ))}
        <text className={styles.dcAxisLabel} x="310" y="236" textAnchor="middle">
          Lead Time (Tage)
        </text>
      </svg>
      <FigureCaption>
        Verteilung der Lead Time: Die meiste Arbeit ist in ein, zwei Tagen erledigt (die hohen Balken),
        doch ein langer Schwanz festsitzender Aufgaben zieht den Durchschnitt dorthin, wo fast nichts
        tatsächlich landet.
      </FigureCaption>
    </figure>
  );
}

export function SectionGapDiagnosis(): ReactNode {
  return (
    <>
      <h2 id="gap">3. Die Lücke zwischen Mittelwert und Median ist die Diagnose</h2>
      <p>
        Die nützlichste Erkenntnis der ganzen Übung kostet also nichts: Legen Sie Mittelwert und Median
        nebeneinander.
      </p>
      <DistributionChart />
      <table className={styles.diagnosticTable}>
        <thead>
          <tr>
            <th>Was Sie sehen</th>
            <th>Was das bedeutet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Mittelwert weit über dem Median</th>
            <td>
              Große Streuung. Die Arbeit fließt ungleichmäßig: Manche Aufgaben fliegen durch, andere
              hängen in Warteschlangen, Reviews, Freigaben. Die Lücke ist die Länge der Warteschlange.
            </td>
          </tr>
          <tr>
            <th>Mittelwert ≈ Median</th>
            <td>Geringe Streuung. Die Arbeit fließt gleichmäßig. Das System ist stabil und planbar.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Die Lücke selbst ist das Signal. Eine breite Lücke bedeutet einen langen Schwanz: Blocker,
        Übergaben, Dinge, die auf eine Person warten. Beseitigen Sie diese, und der Mittelwert rückt
        wieder an den Median heran. Das sehen Sie auf einen Blick, ohne irgendjemandem die Stoppuhr
        hinzuhalten.
      </p>
    </>
  );
}

function PercentileTable(): ReactNode {
  return (
    <table className={styles.diagnosticTable}>
      <thead>
        <tr>
          <th>Perzentil</th>
          <th>Lead Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>P50 (Median)</th>
          <td>2 Tage</td>
        </tr>
        <tr>
          <th>P85</th>
          <td>6 Tage</td>
        </tr>
        <tr>
          <th>P95</th>
          <td>11 Tage</td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionPickPercentile(): ReactNode {
  return (
    <>
      <h2 id="percentile">4. Das Datum aus einem Perzentil ableiten</h2>
      <p>
        Stakeholder stellen eine einzige Frage: Wann ist es fertig? Und sie wollen ein einziges Datum
        hören. Das ist fair, also nennen Sie ihnen eins. Wählen Sie es nur nicht mehr anhand der
        falschen Zahl.
      </p>
      <p>
        Eine Punktschätzung auf Basis des Durchschnitts ist ein Versprechen, das die Streuung Sie nicht
        halten lässt. Sie sagen „etwa vier Tage“, reißen den Termin, verspielen Vertrauen, und im
        nächsten Sprint passiert dasselbe. Ein Perzentil gibt Ihnen die richtige Grundlage: den Wert, innerhalb dessen ein bestimmter Anteil der Aufgaben fertig wird. Nehmen Sie eine echte
        Verteilung, weniger extrem als das Spielzeugbeispiel oben, aber mit derselben Form, und sie sieht
        etwa so aus:
      </p>
      <PercentileTable />
      <p>
        Jetzt wird die Wahl konkret. Routinearbeit? Sagen Sie das{" "}
        <strong>P85 zu: „bis Tag sechs“.</strong> Etwas, worauf ein Kunde oder ein anderes Team wartet
        und wo ein verpasster Termin teuer wird? Nennen Sie das <strong>P95: „bis Tag elf“.</strong>{" "}
        Dieselben Daten, unterschiedliche Versprechen, und beide halten Sie.
      </p>
      <p>
        So nennen Sie die ehrliche Version eines Datums, mit der Unsicherheit bereits eingepreist. Sie
        sagen einen Termin zu, den Sie 95 von 100 Malen halten (oder 85, wenn Sie diese Linie gewählt
        haben), anstelle einer Schätzung aus dem Bauch, die an der Streuung des Systems ohnehin
        zerbrochen wäre. Wer das Konfidenzniveau wissen will, bekommt es; die meisten wollen nur das
        Datum.
      </p>
      <p className={styles.pullquote}>
        Das Perzentil behalten Sie für sich. Mit ihm wählen Sie das Datum, das Sie dem Stakeholder
        nennen.
      </p>
      <p>
        Für eine Aufgabe, die bereits läuft, prognostizieren Sie die <em>verbleibende</em> Zeit, abhängig
        davon, wie lange sie schon läuft, anhand derselben Verteilung. Und sobald Sie zum ersten Mal ein
        Datum nennen und es auch halten, werden Sie vom Team, das „immer zu spät“ ist, zum Team, das
        „planbar“ ist. Dieser Ruf ist mehr wert als das gelegentliche schnelle Ticket.
      </p>
    </>
  );
}

export function SectionPredictability(): ReactNode {
  return (
    <>
      <h2 id="predictability">5. Planbarkeit ist das eigentliche Produkt</h2>
      <p>
        Denn was das Unternehmen tatsächlich einkauft, ist Planbarkeit, noch vor reinem Tempo. Der
        Vertrieb sagt Kunden Ihre Termine zu, das Marketing plant Launches danach, der Support richtet
        seine Besetzung danach aus. Ein Team, das zuverlässig bis Freitag fertig ist, schlägt eines, das
        mal am Dienstag und mal in drei Wochen fertig wird, weil alle nachgelagerten Bereiche planen
        können.
      </p>
      <p>
        Eine geringe Streuung entsteht durch kontrollierten Work in Progress: Hoher WIP erzeugt lange
        Warteschlangen, lange Warteschlangen erzeugen den langen Schwanz, und dieser Schwanz drückt den
        Mittelwert über den Median. Wer <Link href={PILLAR_HREF}>den WIP kontrolliert</Link>, macht
        die Verteilung deshalb ganz von selbst enger. Ein neues Tool brauchen Sie dafür nicht; das
        Control Chart in Jira zeigt Mittelwert, Median und Perzentile aus Daten, die Sie bereits haben.
      </p>
      <p>
        Die meisten Teams prognostizieren anhand des Durchschnitts und wundern sich dann, warum die
        Termine immer wieder rutschen. Die Lösung liegt in der Verteilung, die Sie schon haben: der
        Median für den typischen Fall, die Lücke für die Gesundheit des Systems und ein Perzentil für
        das Datum, das Sie zusagen.
      </p>
    </>
  );
}
