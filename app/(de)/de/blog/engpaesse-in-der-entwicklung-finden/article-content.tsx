// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and max-lines (700) constraints. Each section
// is its own component so editorial passes touch one focused unit at a time.
//
// Sections 1–8 + header/intro live here. The trailing sections (9, 10, closing)
// plus CTA/Related live in article-tail.tsx to keep this file under the cap.
//
// Section order is meaningful — the article builds an argument incrementally.

import Image from "next/image";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/diagnose-broken-engineering-delivery.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";

export function ArticleLede(): ReactNode {
  return (
    <>
      Die meisten langsamen Entwicklungsteams leiden an einem Flussproblem, auch wenn alle
      produktiv arbeiten. Und fast jede erste Reaktion darauf macht das System noch langsamer.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Ein Muster, das ich über die Jahre oft gesehen habe: ein Team aus sechs Leuten mit 60–80
        aktiven Aufgaben auf dem Board, Releases, die sich von Tagen auf Wochen und dann auf „machen
        wir nächsten Monat“ gedehnt haben, und der sehr naheliegende Schluss, dass mehr Leute das
        Problem lösen. Meist liegt der eigentliche Engpass woanders.
      </p>
      <p>
        Die Diagnose zerlegt den Weg einer einzelnen Aufgabe von der Idee bis zum Nutzer, bis Sie auf
        die konkrete Stelle zeigen können, an der das System versagt. Sobald diese Stelle sichtbar
        ist, liegt die Lösung meist auf der Hand, und in den meisten Fällen braucht sie keine einzige
        Neueinstellung. Die Reihenfolge unten folgt einem echten Projekt: Symptome → Zerlegung →
        Engpass finden → über den Hebel sprechen.
      </p>
    </>
  );
}

export function SectionSymptoms(): ReactNode {
  return (
    <>
      <h2 id="symptoms">1. Symptome langsamer Delivery und der falsche erste Reflex</h2>
      <p>
        Das erste Gespräch beginnt fast immer gleich. T2M liegt bei Monaten. Der Durchsatz ist nahe
        null. Auf dem Board stehen mehr Bugs als offene Aufgaben. Der NPS des Teams, intern wie
        extern, bewegt sich irgendwo zwischen schlecht und schlechter.
      </p>
      <p>
        Die Entwickler arbeiten, der Engineering Manager (EM) bemüht sich, der Product Manager (PM)
        kämpft sich durch das Backlog. Und trotzdem lautet der erste Reflex jedes Mal: „Wir brauchen
        mehr Entwickler.“ Genau dieser Reflex führt in die Irre.
      </p>
      <p>
        Der Grund ist einfach. Wenn ein Programm nicht funktioniert, reparieren wir es nicht, indem
        wir mehr Entwickler auf den Quellcode ansetzen. Wir öffnen einen Debugger. Wir schauen, in
        welchem Zustand das Programm ist, wo es hängt und was es tatsächlich tut, verglichen mit dem,
        was wir erwartet haben. Für ein Entwicklungssystem gilt dasselbe. Die Kennzahlen oben zeigen,
        dass das Ergebnis schlecht ist. Wo das System versagt, zeigen sie nicht. Wer das Team ohne
        diese Information vergrößert, macht das System nur komplexer: mehr Übergaben, mehr
        angefangene Arbeit, längere Warteschlangen. Und fast immer wird es dadurch langsamer.
      </p>
      <p>
        Bevor also über Einstellungen gesprochen wird, gilt es, den Prozess in seine Teile zu zerlegen
        und die Stelle zu finden, an der er nachlässt. In diesem Moment hören die Kennzahlen auf, ein
        Zeugnis zu sein, und werden zum Diagnosewerkzeug.
      </p>
    </>
  );
}

export function SectionDecomposeT2M(): ReactNode {
  return (
    <>
      <h2 id="decompose-t2m">2. T2M zerlegen: Discovery und Lead Time sind zwei verschiedene Probleme</h2>
      <p>
        Wenn eine Aufgabe zum ersten Mal auftaucht, ist sie eigentlich noch keine Aufgabe. Sie ist
        eine rohe Idee: ein Kundenwunsch, ein Fehlerbericht, eine Hypothese des Gründers, etwas, das
        jemandem im Meeting aufgefallen ist. Bevor das Team sie umsetzen kann, muss jemand sie formen:
        klären, was sie bedeutet, eine Lösung skizzieren, entscheiden, ob sie sich lohnt, die nötigen
        Freigaben einholen. Nicht jede Idee übersteht diese Phase, und die, die es schaffen, schaffen
        es nicht immer schnell.
      </p>
      <p>
        Diese Lücke ist wichtig, weil viele Teams genau hier Wochen verlieren, ohne es zu merken.
        <strong> T2M, Time to Market, ist die gesamte Zeit von der Idee bis zur Produktion.</strong>{" "}
        Der erste sinnvolle Schnitt verläuft an der Grenze zwischen Discovery und Delivery.
      </p>
      <p>
        <strong>Discovery</strong>{" "}
        ist alles, was passiert, bevor ein Ticket wirklich bereit ist, von einem Entwickler
        übernommen zu werden: Anforderungen klären, Design, Umfang festlegen, Stakeholder abstimmen,
        priorisieren. Das Ergebnis ist ein Ticket, mit dessen Umsetzung jemand tatsächlich beginnen
        könnte.
      </p>
      <p>
        <strong>Delivery</strong>{" "}
        ist alles danach, von „bereit für die Entwicklung“ bis „in Produktion“. Das messen die
        meisten Entwicklungsmetriken stillschweigend, und auf diesen Abschnitt hat das Team direkten
        Einfluss.
      </p>
      <p>
        Für die zweite Hälfte nutze ich die <strong>Lead Time</strong>: die Zeit, die ein Ticket im
        Verantwortungsbereich des Entwicklungsteams verbringt. Also:
      </p>
      <p className={styles.formula}>T2M = Discovery + Lead Time (Delivery)</p>
      <p>Zwei Zahlen und zwei sehr unterschiedliche Probleme, die sich hinter einer schlechten T2M verstecken.</p>
      <p>
        <strong>Ist T2M hoch, die Lead Time aber niedrig</strong>, liegt der Engpass vor der
        Entwicklung. Das Team kann liefern, aber die Arbeit hängt in der Analyse, wartet auf einen
        Stakeholder oder steht hinter einer Priorisierungsentscheidung, die niemand getroffen hat.
        Mehr Entwickler helfen hier nicht, sie säßen nur auf andere Weise untätig herum. Reparieren
        müssen Sie den Discovery-Prozess: wer entscheidet, was bereit ist, in welchem Rhythmus und auf
        welcher Grundlage.
      </p>
      <p>
        <strong>Ist die Lead Time hoch</strong>, steckt das Problem in der Delivery selbst. Aufgaben
        bleiben hängen, nachdem das Team sie übernommen hat: beim Programmieren, im Review, in der QA,
        beim Deployment. Dann muss man in die Lead Time hineinschauen und herausfinden, wo genau die
        Zeit verloren geht.
      </p>
      <p>
        In der Praxis haben die meisten Teams, mit denen ich arbeite, auf beiden Seiten Probleme, aber
        selten im gleichen Verhältnis. Der Schnitt zwischen T2M und Lead Time zeigt Ihnen als Erstes, welches Gespräch Sie zuerst führen sollten. Über Discovery sprechen Sie meist mit dem Gründer, dem PM
        und demjenigen, der die Priorisierung verantwortet. Über Delivery sprechen Sie mit dem EM und
        dem Team. Wer beides vermischt, landet ziemlich zuverlässig bei der falschen Lösung.
      </p>
      <p>
        Innerhalb der Lead Time zeigt sich dann, dass „an einer Aufgabe arbeiten“ und „die Aufgabe wird
        bearbeitet“ zwei verschiedene Dinge sind. Hier wird es interessant.
      </p>
    </>
  );
}

function TimelineDiagram(): ReactNode {
  return (
    <figure className={styles.timelineDiagram}>
      <svg viewBox="0 0 800 220" role="img" aria-labelledby="timeline-title">
        <title id="timeline-title">
          Zeitachse einer Aufgabe: Discovery, Wartezeit und Cycle Time, dazu die drei Arten, sie zu
          messen.
        </title>
        {/* Top row: 3 segments of the actual task timeline */}
        <rect x="20" y="20" width="180" height="56" rx="3" className={styles.tlSegmentDiscoveryBg} />
        <rect x="200" y="20" width="240" height="56" className={styles.tlSegmentWaitingBg} />
        <rect x="440" y="20" width="340" height="56" rx="3" className={styles.tlSegmentCycleBg} />
        <text x="110" y="55" textAnchor="middle" className={styles.tlSegmentLabel}>Discovery</text>
        <text x="320" y="55" textAnchor="middle" className={styles.tlSegmentLabel}>Wartezeit</text>
        <text x="610" y="55" textAnchor="middle" className={styles.tlSegmentLabelOnDark}>Aktive Arbeit</text>
        {/* Alignment guides */}
        <line x1="200" y1="76" x2="200" y2="210" className={styles.tlGuide} />
        <line x1="440" y1="76" x2="440" y2="210" className={styles.tlGuide} />
        {/* Measurement bar: T2M (spans all 3) */}
        <rect x="20" y="92" width="760" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="400" y="113" textAnchor="middle" className={styles.tlMeasureLabel}>T2M: von der Idee bis zur Produktion</text>
        {/* Measurement bar: Lead Time (Waiting + Cycle) */}
        <rect x="200" y="134" width="580" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="490" y="155" textAnchor="middle" className={styles.tlMeasureLabel}>Lead Time: im Entwicklungsteam</text>
        {/* Measurement bar: Cycle Time (Cycle only) */}
        <rect x="440" y="176" width="340" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="610" y="197" textAnchor="middle" className={styles.tlMeasureLabel}>Cycle Time: nur aktive Arbeit</text>
      </svg>
      <FigureCaption>
        Dieselbe Zeitachse, drei verschiedene Messungen. Jede Kennzahl zeigt auf einen anderen Engpass.
      </FigureCaption>
    </figure>
  );
}

function DiagnosticTable(): ReactNode {
  return (
    <table className={styles.diagnosticTable}>
      <thead>
        <tr>
          <th scope="col">Was die Kennzahl zeigt</th>
          <th scope="col">Was das bedeutet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Hohe Cycle Time</th>
          <td>Problem in der Umsetzung: in die Entwicklung hineinschauen.</td>
        </tr>
        <tr>
          <th scope="row">Hohe Lead Time, normale Cycle Time</th>
          <td>Die Nachfrage übersteigt die Kapazität.</td>
        </tr>
        <tr>
          <th scope="row">Niedrige Cycle Time, niedrige Lead Time, hohe T2M</th>
          <td>Der Engpass liegt in der Discovery.</td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionLeadTimeCycleTime(): ReactNode {
  return (
    <>
      <h2 id="lead-time-cycle-time">3. Lead Time = Wartezeit + Cycle Time</h2>
      <p>
        Die meisten Teams glauben, dass die eigentliche Arbeit beginnt, sobald eine Aufgabe „bereit für
        die Entwicklung“ ist. Das stimmt nicht. Die Aufgabe landet auf dem Board. Ein Entwickler steckt
        noch in der vorherigen. Jemand ist im Urlaub. Ein dringenderer Bug drängelt sich vor. Das Ticket
        liegt einfach da. Für das Board ist die Aufgabe „in Bearbeitung“. Für das System wartet sie nur.
      </p>
      <p>
        Deshalb ist die Lead Time allein nicht scharf genug. Wir müssen die Zeit, in der an einer
        Aufgabe tatsächlich gearbeitet wird, von der Zeit trennen, in der sie nur in der Warteschlange
        liegt. Dafür nutze ich die <strong>Cycle Time</strong>: die Zeit von dem Moment, in dem eine
        Aufgabe wirklich übernommen wird, bis zu dem, in dem sie fertig ist. Nur echte Arbeit.
      </p>
      <p>Zusammengesetzt:</p>
      <div className={styles.formula}>
        T2M = Discovery + Lead Time
        <br />
        Lead Time = Wartezeit + Cycle Time
        <br />
        Cycle Time = nur Arbeit
      </div>
      <TimelineDiagram />
      <p>Daraus ergeben sich zwei weitere Diagnosefragen.</p>
      <p>
        <strong>Ist die Cycle Time hoch</strong>, liegt das Problem in der Entwicklung selbst. Sobald
        jemand an einer Aufgabe arbeitet, dauert es lange, bis sie fertig ist. Der Engpass steckt in
        der Umsetzung: komplexer Code, langsame Reviews, instabile Tests, manuelle QA-Runden, mühsame
        Deployments. Dort fangen Sie gemeinsam mit dem Team an zu suchen.
      </p>
      <p>
        <strong>Ist die Cycle Time niedrig, die Lead Time aber hoch</strong>, ist mit dem Team alles in
        Ordnung. Auch die Umsetzung stimmt. Im System kommt mehr Arbeit an, als es bewältigen kann.
        Aufgaben stauen sich in der Warteschlange und warten darauf, dass das Team den vorherigen
        Schwung abschließt, bevor sie überhaupt beginnen können.
      </p>
      <p>
        Dieser zweite Fall erwischt Gründer oft kalt. Das Team ist bei jeder einzelnen Aufgabe schnell.
        Trotzdem wirkt das Board wie eingefroren. Der Instinkt ist, beim Einzelnen mehr Tempo
        einzufordern, obwohl das eigentliche Problem darin liegt, dass die Nachfrage die Kapazität des
        Teams übersteigt. Das richtige Gespräch dreht sich hier darum, gezielt Kapazität aufzubauen oder
        zu begrenzen, wie viel Arbeit das Team gleichzeitig annimmt. Dazu kommen wir noch.
      </p>
      <p>
        <strong>Eine kurze Diagnosetabelle</strong> für das erste Gespräch mit der Geschäftsführung:
      </p>
      <DiagnosticTable />
      <p>
        Das sind drei Zahlen. Sie bekommen alle an einem Nachmittag aus Jira oder Linear, und schon sie
        erzählen eine andere Geschichte als „wir müssen einstellen“.
      </p>
    </>
  );
}

export function SectionWhereStuck(): ReactNode {
  return (
    <>
      <h2 id="where-stuck">4. Wo Arbeit wirklich hängen bleibt und warum die Zeit pro Status täuschen kann</h2>
      <p>
        Die Cycle Time ist also hoch. Der naheliegende nächste Schritt ist, in sie hineinzuschauen und
        die Zeit pro Status zu messen: In Progress, Code Review, QA, Deploy. Zusammenrechnen, wo die
        Stunden hingehen. Die langsamste Spalte finden. Sie reparieren.
      </p>
      <p>
        So gehen die meisten Teams vor, und bis zu einem gewissen Punkt funktioniert es. Wenn Ihre
        Aufgaben im Code Review hängen bleiben, können Sie die Zeit in der Spalte ablesen und ein echtes
        Gespräch über die Last der Reviewer, die Größe der Pull Requests und die Fristen für Reviews
        beginnen. Dasselbe gilt für Engpässe in der QA und Warteschlangen beim Deployment. Die Daten
        sind echt, und der Eingriff ist gezielt.
      </p>
      <p>Allerdings gibt es eine Falle, und die möchte ich genau beschreiben.</p>
      <p>
        Aufgaben laufen nicht linear durch die Phasen. Sie springen zurück: aus der QA in die
        Entwicklung, wenn ein Bug gefunden wird, aus dem Review zurück in die Arbeit, wenn ein Kommentar
        kommt, aus dem Deployment zurück in die Entwicklung, wenn auf Staging etwas schiefgeht. Dieselbe
        Aufgabe durchläuft dieselbe Phase zwei-, drei-, manchmal fünfmal. Sobald Sie die „durchschnittliche
        Zeit in der QA“ messen, mischt dieser Durchschnitt stillschweigend Tickets im ersten Durchlauf mit
        solchen, die schon zum dritten Mal in der QA landen.
      </p>
      <p>
        An diesem Punkt messen die meisten Teams noch mehr. Feinere Dashboards. Jeden Übergang
        erfassen. Kennzahlen für „Fehlerquote in der QA beim ersten Durchlauf“ und „Review-Rückläufer
        pro Ticket“ einführen. Eigene Jira-Berichte bauen. Am Ende steht ein schönes Instrument, aus dem
        niemand etwas ableiten kann, weil die Daten schneller kompliziert geworden sind, als das System
        darunter klarer wurde.
      </p>
      <p>
        Der Fehler: Sie messen das System auf der falschen Ebene. Lokale Optimierung, also jede Spalte
        schneller zu machen, setzt voraus, dass Arbeit linear fließt. Tatsächlich gleicht das System einem Fluss mit
        Strudeln, Schleifen und Staus.
      </p>
      <p>
        Was wirklich hilft: aufhören, jede Phase noch genauer zu messen, und stattdessen fragen, wie
        Arbeit durch das System als Ganzes fließt. Die Frage lautet dann: „Wie viele Tickets sind
        gleichzeitig im System, und welcher Anteil davon kommt tatsächlich voran, statt nur dort zu
        liegen?“ Sobald Sie so fragen, wird der Rest der Diagnose deutlich einfacher.
      </p>
    </>
  );
}

function QueueChart(): ReactNode {
  return (
    <figure className={styles.queueChart}>
      <svg viewBox="0 0 800 220" role="img" aria-labelledby="queue-chart-title">
        <title id="queue-chart-title">
          Anzahl der Aufgaben pro Status: In Progress 5, Code Review 3, QA 25, Deploy 2. Die QA ist der
          Engpass.
        </title>
        {/* Status names stay as Jira shows them. In Progress: 5 → bar 110px (scale 22 px/unit) */}
        <text x="140" y="40" textAnchor="end" className={styles.qcLabel}>In Progress</text>
        <rect x="160" y="20" width="110" height="30" rx="3" className={styles.qcBar} />
        <text x="280" y="40" className={styles.qcValue}>5</text>
        {/* Code Review: 3 → bar 66px */}
        <text x="140" y="90" textAnchor="end" className={styles.qcLabel}>Code Review</text>
        <rect x="160" y="70" width="66" height="30" rx="3" className={styles.qcBar} />
        <text x="236" y="90" className={styles.qcValue}>3</text>
        {/* QA: 25 → bar 550px — the bottleneck */}
        <text x="140" y="140" textAnchor="end" className={styles.qcLabelBottleneck}>QA</text>
        <rect x="160" y="120" width="550" height="30" rx="3" className={styles.qcBarBottleneck} />
        <text x="720" y="140" className={styles.qcValueBottleneck}>25</text>
        {/* Deploy: 2 → bar 44px */}
        <text x="140" y="190" textAnchor="end" className={styles.qcLabel}>Deploy</text>
        <rect x="160" y="170" width="44" height="30" rx="3" className={styles.qcBar} />
        <text x="214" y="190" className={styles.qcValue}>2</text>
      </svg>
      <FigureCaption>
        Wo sich Aufgaben stauen, stößt das System an die Grenze seiner Kapazität.
      </FigureCaption>
    </figure>
  );
}

export function SectionCountTasks(): ReactNode {
  return (
    <>
      <h2 id="count-tasks">5. Engpässe finden, ohne Zeit zu messen</h2>
      <p>Das ist der am meisten unterschätzte Diagnoseschritt, den ich kenne.</p>
      <p>
        Um den Engpass zu finden, müssen Sie die Zeit pro Status gar nicht messen. Es reicht,{" "}
        <strong>die Aufgaben in jedem Status zu zählen</strong>.
      </p>
      <p>
        Die Zahlen holen Sie in fünf Minuten aus Jira. Das Bild sieht fast immer ungefähr so aus:
      </p>
      <QueueChart />
      <p>Dann suchen Sie nach Ungleichgewichten.</p>
      <p>
        Wenn fünf Aufgaben in der Entwicklung sind, drei im Review und fünfundzwanzig in der QA,
        brauchen Sie keine Stoppuhr. Sie brauchen kein Looker-Dashboard. Der Engpass ist die QA, denn
        dort stauen sich die Aufgaben. Das System hat eine Stelle, an der sich Arbeit schneller
        ansammelt, als sie abfließt.
      </p>
      <p>
        Diese eine Zählung verrät Ihnen fast alles, was die Zeit pro Status verraten würde, bei etwa
        einem Prozent des Aufwands. Sie funktioniert, weil Warteschlangen die sichtbare Seite eines
        Flussproblems sind: Wo sich eine Schlange bildet, stößt das System an die Grenze seiner
        Kapazität.
      </p>
      <p>
        Außerdem verändert sie das Gespräch. Die Zeit pro Status lädt zu einer Debatte darüber ein, „wie
        lange in der QA zu lange ist“. Die Zählung macht das Problem offensichtlich: Fünfundzwanzig
        Aufgaben, die auf zwei QA-Ingenieure warten, sind ein Problem des Systems, und schnellere
        QA-Arbeit löst es nicht.
      </p>
      <p>
        Das ist die günstigste und schnellste Diagnose im ganzen Leitfaden, und die meisten Teams
        überspringen sie auf dem Weg zu Dashboards, die sie nie benutzen werden.
      </p>
      <p>
        Sie wirft aber eine tiefere Frage auf. <strong>Warum</strong>{" "}
        liegen fünfundzwanzig Aufgaben in der QA? Woher kommen sie? Warum nimmt das Team immer neue
        Arbeit an, obwohl schon eine Wand aus unfertigen Tickets im System steht?
      </p>
    </>
  );
}

function WipCostList(): ReactNode {
  return (
    <ul>
      <li>
        Aufgaben verlieren während des Wartens an geschäftlicher Bedeutung. Bis das Team zu ihnen
        zurückkommt, haben sich die Anforderungen verschoben oder die Dringlichkeit ist verflogen.
      </li>
      <li>
        Merge-Konflikte häufen sich. Ein Feature-Branch, der drei Wochen liegt, während der Hauptzweig
        weiterläuft, wird zu einem kleinen archäologischen Projekt, sobald er integriert werden soll.
      </li>
      <li>
        Kontextwechsel werden teuer. Jeder Entwickler hält im Kopf drei oder vier Aufgaben „in
        Bearbeitung“. Keine davon kommt wirklich voran.
      </li>
      <li>
        Bugs rutschen leichter durch. Je mehr Arbeit gleichzeitig läuft, desto weniger Augen schauen auf
        jedes einzelne Stück. Die Qualität sinkt.
      </li>
    </ul>
  );
}

export function SectionWip(): ReactNode {
  return (
    <>
      <h2 id="wip">6. Work in Progress (WIP): die Größe, die das Liefertempo bestimmt</h2>
      <p className={styles.pullquote}>Sechs Entwickler. Achtzig Aufgaben in Bearbeitung. Nichts wird fertig.</p>
      <p>
        Das ist nicht übertrieben. Genau dieses Bild habe ich mehrfach gesehen. Ein Team aus drei
        Entwicklern, zwei QA-Ingenieuren und einem Tech Lead, und auf dem Board über achtzig aktive
        Tickets. Bei sechs Leuten.
      </p>
      <p>
        Die Geschichte dahinter ist immer dieselbe. Ein Entwickler erledigt den aktiven Teil einer
        Aufgabe und schickt sie ins Review. Sein aktuelles Ticket wartet jetzt auf jemand anderen. Statt
        zu warten, holt er sich ein neues aus dem Backlog. Auch das bleibt hängen, diesmal in der QA. Er
        holt sich das nächste. Das Board füllt sich mit Aufgaben, die formal „in Bearbeitung“ sind, in
        Wahrheit aber auf jemand anderen warten, an anderer Stelle, aus anderem Grund.
      </p>
      <p>
        Das ist <strong>Work in Progress (WIP)</strong>: die Zahl der Aufgaben, die das System zu einem
        Zeitpunkt gleichzeitig hält.
      </p>
      <p>
        Das Team kann physisch nicht an achtzig Dingen gleichzeitig arbeiten. Sechs Leute, achtzig
        Aufgaben. Der Großteil der Arbeit liegt einfach herum. Er wartet auf ein Review, hängt in der QA,
        ist geparkt, weil ein Stakeholder nicht antwortet, oder ist halb fertig und gemergt, aber noch
        nicht ausgerollt. Jedes dieser Tickets belegt einen Platz im System: einen Platz im Kopf von
        jemandem, einen Platz auf dem Board, einen Zustand, den jemand im Blick behalten muss.
      </p>
      <p>Die Kosten summieren sich:</p>
      <WipCostList />
      <p>
        Die Kennzahlen bestätigen das. Hoher WIP geht einher mit hoher T2M (Aufgaben brauchen länger bis
        zur Auslieferung), niedrigem Durchsatz (pro Woche wird weniger fertig), mehr Bugs (weniger
        Aufmerksamkeit pro Aufgabe) und niedrigerem NPS, bei Kunden wie im Team.
      </p>
      <p>
        Diese Größe steuert das System: wie viel das Team gleichzeitig in der Luft halten will. Sie
        wiegt schwerer als das Tempo des Teams und die Seniorität der Entwickler.
      </p>
    </>
  );
}

export function SectionLittlesLaw(): ReactNode {
  return (
    <>
      <h2 id="littles-law">7. Little&apos;s Law: Lead Time = WIP / Durchsatz</h2>
      <p>
        Wenn Sie den Eindruck haben, dass die bisherigen Abschnitte immer wieder beim selben Schluss
        landen, täuschen Sie sich nicht. Das hat einen Grund.
      </p>
      <p>
        Die Warteschlangentheorie hat das schon vor Jahrzehnten herausgefunden. Den Zusammenhang zwischen
        der Menge an Arbeit in einem System und der Zeit, die diese Arbeit braucht, beschreibt{" "}
        <strong>Little&apos;s Law</strong>:
      </p>
      <p className={styles.formula}>Lead Time = WIP / Durchsatz</p>
      <p>In der Sprache der Softwareentwicklung:</p>
      <ul>
        <li>
          <strong>WIP</strong>: wie viele Aufgaben gleichzeitig im System sind
        </li>
        <li>
          <strong>Durchsatz</strong> (Throughput): wie viele Aufgaben das Team pro Zeitraum abschließt
        </li>
        <li>
          <strong>Lead Time</strong>: wie lange eine Aufgabe im Schnitt im System bleibt
        </li>
      </ul>
      <p>Die Formel ist fast schon peinlich einfach, und die Folgerung daraus ist brutal.</p>
      <p>
        Bleibt der Durchsatz gleich und steigt der WIP, wächst die Lead Time linear mit. Ein Beispiel:
        ein Team, das zehn Aufgaben pro Woche abschließt.
      </p>
      <div className={styles.numericExample}>
        <p>10 Aufgaben im System → Lead Time im Schnitt ≈ 1 Woche</p>
        <p>30 Aufgaben → ≈ 3 Wochen</p>
        <p>80 Aufgaben → ≈ 8 Wochen</p>
      </div>
      <p>
        In allen drei Fällen arbeitet das Team gleich schnell. Die Entwickler sind nicht langsamer
        geworden. Die Tickets sind nicht komplexer. Geändert hat sich nur, wie viele Aufgaben das System
        gleichzeitig halten will. Und die durchschnittliche Lead Time hat sich verachtfacht.
      </p>
      <p>
        Deshalb liefern Teams, die härter arbeiten, nicht unbedingt schneller. Mit Anstrengung holen Sie
        beim Durchsatz vielleicht 10–20 Prozent heraus. Mit Disziplin senken Sie den WIP um die Hälfte
        oder mehr. Die Rechnung zeigt: Der zweite Hebel bewegt mehr.
      </p>
      <p>
        Und deshalb macht „wir brauchen mehr Entwickler“ die Lage so oft schlimmer. Neue Entwickler
        bringen ihre eigene angefangene Arbeit mit. Der WIP steigt schneller als der Durchsatz, und die
        Lead Time wird erst einmal schlechter, bevor sie besser wird. Das Onboarding macht das fast
        unvermeidlich: Neue Leute brauchen sechs bis acht Wochen, bis sie spürbar beitragen, und in
        dieser Zeit steigt der WIP des bestehenden Teams (Einarbeitung, Wissensübergabe, Reviews der
        Pull Requests der Neuen).
      </p>
      <p className={styles.pullquote}>
        Wenn Sie sich nur eine Formel merken, dann diese: Lead Time = WIP / Durchsatz.
      </p>
      <p>
        Das ist die Systemmathematik hinter fast jedem Gespräch über „wir sind zu langsam“, das ich je
        in der Entwicklung geführt habe.
      </p>
    </>
  );
}

function WipBenefitsList(): ReactNode {
  return (
    <ul>
      <li>Weniger Kontextwechsel, weil jeder weniger gleichzeitig offene Dinge im Kopf hat</li>
      <li>Kürzere Warteschlangen in jeder Phase, weil insgesamt weniger im System ist</li>
      <li>Kürzere Lead Time, nach Little&apos;s Law ganz mechanisch</li>
      <li>Weniger Bugs, weil sich die Aufmerksamkeit aufs Abschließen richtet statt aufs Anfangen</li>
      <li>Mehr Planbarkeit, weil das System nicht mehr zwischen Leerlauf und Stillstand pendelt</li>
    </ul>
  );
}

export function SectionWipLimits(): ReactNode {
  return (
    <>
      <h2 id="wip-limits">8. WIP-Limits: der Hebel, der die meisten langsamen Teams wieder schnell macht</h2>
      <p>
        Wenn also der WIP die Größe ist, die das Tempo des Systems bestimmt, und sich der Durchsatz
        kurzfristig meist nicht drastisch ändern lässt, liegt der Hebel auf der Hand: den WIP begrenzen.
      </p>
      <p>
        Die meisten Entwicklungsteams haben ein Produktivitätsproblem, weil sie ein WIP-Problem haben.
        Bringen Sie den WIP in Ordnung, und die meisten anderen Symptome verbessern sich gleichzeitig:
        lange Lead Times, häufige Bugs, geringe Planbarkeit, ständige Kontextwechsel.
      </p>
      <p>
        <strong>WIP-Limits</strong> sind die Disziplin zu sagen: Dieses System hält höchstens N Aufgaben
        gleichzeitig. Ist das Limit erreicht, beginnt keine neue Arbeit, bis eine bestehende fertig ist.
        Punkt.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/diagnose-broken-engineering-delivery/too-much-wip-vs-wip-limits.webp"
          alt="Zwei Entwicklungsprozesse im Vergleich unter Lead Time = WIP / Durchsatz: Ohne Limits stauen sich Aufgaben in der QA und die Lead Time wird unvorhersehbar; mit WIP-Limits hält jede Phase nur wenige Aufgaben und die Arbeit fließt planbar durch"
          width={1200}
          height={800}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Gleicher Durchsatz, anderer WIP: Die Warteschlangen schrumpfen, und die Lead Time wird planbar.
        </FigureCaption>
      </figure>
      <p>Was WIP-Limits tatsächlich verbessern:</p>
      <WipBenefitsList />
      <p>
        Was die Geschäftsführung dabei oft verwirrt: WIP-Limits beschleunigen das System als Ganzes,
        während jeder Einzelne im gewohnten Tempo arbeitet. Pro Arbeitsstunde entsteht gleich viel
        Code, aber weniger halbfertige Teile parallel, und dadurch geht mehr von dem, was das Team
        produziert, tatsächlich live.
      </p>
      <p>
        Es ist außerdem einer der ganz wenigen Hebel, der die Delivery ohne Neueinstellungen, ohne neue
        Tools und ohne Umbau der Prozesse verbessert. Er kostet nichts. Er lässt sich diese Woche
        einsetzen. Und fast niemand nutzt ihn, weil er verlangt, zu neuer Arbeit „Nein“ zu sagen. Einem
        Stakeholder, der noch eine Sache gleichzeitig angestoßen haben will, „Nein“ zu sagen, ist
        schwerer als „Ja“.
      </p>
      <p>
        Bei WIP-Limits geht es letztlich um Disziplin: ob das Team und seine Stakeholder erst fertig
        machen und dann anfangen. Die Einstellungen in Jira sind Nebensache.
      </p>
    </>
  );
}
