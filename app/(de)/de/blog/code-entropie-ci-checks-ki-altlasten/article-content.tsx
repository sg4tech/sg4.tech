// Article body sections, split out of page.tsx to satisfy ESLint
// max-lines-per-function and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: complexity grows on its own and AI speeds
// it up → seven levels of CI checks, cheapest first → one table of tools per
// language → checks beat written rules because an agent can't skip a red build
// → a ready-made Python template that bundles all of it.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/code-entropy-ci-checks-ai-legacy.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";

const VIBECODED_HREF = getPostPathInLocale("vibecoded-mvp-stopped-shipping", "de");
const TEMPLATE_HREF = "https://github.com/sg4tech/python-guardrails-template";
const LEHMAN_HREF = "https://en.wikipedia.org/wiki/Lehman%27s_laws_of_software_evolution";
const HOARE_HREF = "https://everythingsysadmin.com/2009/01/tony-hoare-apologizes-for-inve.html";
const HARNESS_HREF = "https://www.harness.io/blog/10-exception-types-in-production-java-applications";
// The agent playbook exists in English only.
const PLAYBOOK_URL = "https://sg4.tech/blog/code-entropy-ci-checks-ai-legacy/playbook.md";
const MILLER_HREF = "https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two";

export function ArticleLede(): ReactNode {
  return (
    <>
      Das Gesetz, nach dem die Komplexität von Code von selbst wächst, gilt weiterhin; KI hat es nur
      beschleunigt. Hier sind sieben Ebenen von CI-Checks, die verhindern, dass sich Altlasten
      anhäufen, in der Reihenfolge, in der ich sie einführe.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Entropie wächst von selbst. In der Physik ist das der zweite Hauptsatz der Thermodynamik. In
        der Softwareentwicklung sieht es ähnlich aus: Unordnung entsteht mühelos, Ordnung kostet
        Arbeit.
      </p>
      <p>
        So war es schon immer. Wenn ein Projekt wächst, wächst auch seine Komplexität: Altlasten
        häufen sich, das Projekt wird schwerer zu warten, jede Änderung wird mühsamer, und das Risiko,
        etwas kaputt zu machen, steigt stetig. 1974 hat Manny Lehman das als{" "}
        <a href={LEHMAN_HREF} target="_blank" rel="noreferrer">
          Gesetz der Softwareevolution
        </a>{" "}
        festgehalten: Die Komplexität eines Systems nimmt zu, solange niemand daran arbeitet, sie zu
        verringern. KI hat daran nichts geändert. Sie hat nur dafür gesorgt, dass sich Altlasten
        schneller anhäufen.
      </p>
      <p>
        Sie wollen Code so einfach wie möglich halten, und genau dabei helfen CI-Checks.
      </p>
    </>
  );
}

// The seven levels as a staircase: listed bottom-up in source order (cheapest
// first) and drawn with the cheapest step at the bottom. Level 7 is the only
// non-deterministic one, so it gets a dashed outline and a different tag.
const ladderSteps = [
  { level: 1, name: "Toter Code" },
  { level: 2, name: "Linter und Formatierer" },
  { level: 3, name: "Statische Analyse" },
  { level: 4, name: "Unit-Tests und Abdeckung" },
  { level: 5, name: "Komplexität und Duplikate" },
  { level: 6, name: "Architektur und Kopplung" },
  { level: 7, name: "Schriftliche Regeln (AGENTS.md)" }
] as const;

const SOFT_LEVEL = 7;

export function LevelLadder(): ReactNode {
  return (
    <figure className={styles.ladderFigure}>
      <ol className={styles.ladder}>
        {ladderSteps.map((step) => {
          const isSoft = step.level === SOFT_LEVEL;
          return (
            <li
              key={step.level}
              className={isSoft ? `${styles.ladderStep} ${styles.ladderStepSoft}` : styles.ladderStep}
              style={{ marginLeft: `calc(${step.level - 1} * var(--step-shift))` }}
            >
              <span className={styles.ladderNumber}>{step.level}</span>
              <span className={styles.ladderName}>{step.name}</span>
              <span className={styles.ladderTag}>{isSoft ? "von der CI nicht erzwungen" : "lässt den Build scheitern"}</span>
            </li>
          );
        })}
      </ol>
      <FigureCaption>
        Die billigsten Checks unten. Die Ebenen 1–6 lassen den Build jedes Mal scheitern; die
        schriftlichen Regeln ganz oben lenken den Agenten, aufhalten können sie ihn nicht.
      </FigureCaption>
    </figure>
  );
}

export function SectionCheapLevels(): ReactNode {
  return (
    <>
      <h2 id="dead-code">1. Toter Code</h2>
      <p>
        Der einfachste Schritt: löschen, was nicht mehr genutzt wird. Auch das lässt sich
        automatisieren. Nehmen Sie ein Tool, das toten Code findet, in die CI auf (vulture für Python,
        knip für JS/TS), und ungenutzter Code lässt den Build einfach scheitern.
      </p>
      <h2 id="linters">2. Linter und Formatierer</h2>
      <p>
        Als Nächstes kommt der Linter: phpcs für PHP, ruff für Python, ESLint und Prettier für JS/TS
        und so weiter. Jede Sprache hat ihren eigenen Codestil, und welchen Sie wählen, ist zweitrangig.
        Wichtig ist, keine Zeit und kein Geld mehr mit dem Lesen von Code und Review-Kommentaren wie
        „bitte doppelte Anführungszeichen durch einfache ersetzen“ zu verschwenden. Einigen Sie sich
        einmal auf den Stil, und ab dann prüft die CI ihn automatisch.
      </p>
      <h2 id="static-analysis">3. Statische Analyse</h2>
      <p>
        Die nächste Ebene sind statische Analysetools: PHPStan für PHP, mypy für Python, tsc für
        JS/TS. Eine strenge statische Typprüfung fängt einfache Fehler ab: einen String, wo eine Zahl
        erwartet wurde, oder einen Wert, von dem man vergessen hat, dass er leer sein kann. Ihre Logik
        prüft sie nicht, aber sie beseitigt eine ganze Klasse von Fehlern. Leere Werte sind der
        klassische Fall: Tony Hoare, der die Null-Referenz erfunden hat, nannte sie seinen{" "}
        <a href={HOARE_HREF} target="_blank" rel="noreferrer">
          „Milliarden-Dollar-Fehler“
        </a>
        , und laut den{" "}
        <a href={HARNESS_HREF} target="_blank" rel="noreferrer">
          Daten von Harness aus dem Jahr 2020
        </a>{" "}
        gehörte die NullPointerException in 70&nbsp;% der untersuchten Java-Produktionsumgebungen noch
        immer zu den zehn häufigsten Exceptions.
      </p>
      <h2 id="unit-tests">4. Unit-Tests und 80 Prozent Abdeckung</h2>
      <p>
        Warum? Weil sich schlechter Code nur sehr schwer mit Unit-Tests abdecken lässt. Damit Code
        testbar wird, müssen Sie ihn in einzelne Klassen und Funktionen aufteilen, über Kopplung und
        Schnittstellen nachdenken, entscheiden, was öffentlich und was privat bleibt, Dependency
        Injection nutzen und globalen Zustand vermeiden. Eine hundertprozentige Garantie ist das
        natürlich nicht, zumal KI die Abdeckung leicht mit Tests aufbläht, die fast nichts prüfen. So
        oder so setzt der Schwellenwert dem Design Grenzen und erhöht die Chancen auf guten Code.
      </p>
    </>
  );
}

export function SectionComplexity(): ReactNode {
  return (
    <>
      <h2 id="complexity">5. Komplexität und Duplikate</h2>
      <p>
        Das menschliche Arbeitsgedächtnis fasst nur wenige unabhängige Elemente gleichzeitig: George
        Miller{" "}
        <a href={MILLER_HREF} target="_blank" rel="noreferrer">
          kam 1956 auf 7 ± 2
        </a>
        , Nelson Cowan präzisierte das 2001 auf etwa vier. Alles darüber hinaus wird schwer und wandert
        in den Swap. Forschung dazu für KI habe ich nicht gesehen, aber wenn Code für einen
        Menschen verständlich ist, steigen die Chancen, dass die KI nicht halluziniert. Und wenn Code so
        verworren ist, dass ein Mensch ihm nicht folgen kann, wird die KI höchstwahrscheinlich neue
        Schichten von Altlasten obendrauf packen.
      </p>
      <p>
        Deshalb setze ich harte Grenzwerte für Duplikate und Komplexitätsmetriken. Grenzwert
        überschritten → CI schlägt fehl → Sie müssen refaktorieren und Code in eigene Methoden und
        Klassen auslagern. Für Python ist complexipy ein Beispiel.
      </p>
      <p>
        So sieht das in einem echten Projekt aus. Auf einer Plattform, an der ich gearbeitet habe,
        schrieben KI-Agenten den Großteil des Backends. Nach sechs Wochen, bevor es irgendeinen dieser
        Checks gab, fand die erste Messung 143 Funktionen mit einer Komplexität über 10 und 202
        kopierte Fragmente, rund 5&nbsp;% des Codes. Als später eine harte Obergrenze eingeführt wurde,
        war die schlimmste Funktion die, die Belege verarbeitete, also mit Geld umging: 490 Zeilen mit
        einer Komplexität von 73. Sobald diese Obergrenze den Build scheitern ließ, sank der Wert in
        vier Tagen Refactoring von 73 auf 30, eine Funktion pro Commit. In den zwei Monaten nach der
        ersten Messung sank der Anteil der Duplikate auf etwa 3&nbsp;%.
      </p>
      <p>
        Wenn sich bereits Altlasten angehäuft haben, können Sie vom aktuellen Stand aus starten: Setzen
        Sie den Grenzwert auf Ihre komplexeste Funktion, dann wird es zumindest nicht schlimmer. Die
        Schulden verschwinden dadurch allerdings nicht. Die tragen Sie gesondert ab: Planen Sie Zeit für
        Refactoring ein und senken Sie den Grenzwert nach jedem Schritt, um das Ergebnis festzuhalten.
        Checks halten das Chaos nur auf; aufräumen müssen Sie selbst.
      </p>
    </>
  );
}

export function SectionArchitectureAndRules(): ReactNode {
  return (
    <>
      <h2 id="architecture">6. Architektur und Kopplung</h2>
      <p>
        Harte Grenzen verringern die Komplexität ebenfalls, eine Ebene höher. Das funktioniert wie
        Kapselung in der OOP: Das System besteht aus großen Blöcken, deren Innenleben Sie nicht im Kopf
        behalten müssen; es reicht, ihren Vertrag zu kennen. Und die Implementierung eines Blocks lässt
        sich bei Bedarf austauschen, ohne den Rest des Systems neu zu schreiben. Statt über Dutzende
        Klassen und Verbindungen denken Sie über ein paar große Blöcke nach. Wieder verringern Sie die
        Zahl der Dinge, die Sie gleichzeitig im Kopf behalten müssen, diesmal auf jeder Ebene der
        Architektur.
      </p>
      <p>
        In der Praxis bedeutet das Clean Architecture und hexagonale Architektur: Der Code ist in
        Schichten aufgeteilt, und die Abhängigkeiten zwischen ihnen sind streng begrenzt. Die Domäne
        weiß nichts von der Datenbank, von HTTP oder externen APIs, und Code von außen erreicht sie nur
        über vorab definierte Schnittstellen. Auch das wird automatisch geprüft (zum Beispiel mit
        import-linter für Python): Taucht ein verbotener Import auf, schlägt die CI fehl.
      </p>
      <h2 id="written-rules">7. Schriftliche Regeln</h2>
      <p>
        Die letzte Ebene sind schriftliche Regeln. Früher waren das Richtlinien und Dokumentation für
        Entwickler; heute sind es eine AGENTS.md-Datei und Dokumentation für die KI. Anders als bei den
        Checks oben ist das Ergebnis hier nicht deterministisch: Die KI kann eine Regel lesen und sie
        trotzdem brechen. Schriftliche Regeln sind deshalb die letzte Meile. Sie enthalten nur, was sich
        nicht mit Checks abdecken ließ. Bei sonst gleichen Bedingungen gilt: lieber einen harten Check
        im Code schreiben als einen Absatz Text.
      </p>
      <p>
        Die KI versucht immer wieder, den Check abzuschalten, statt den Code zu reparieren: den
        Grenzwert anheben, eine Ausnahme hinzufügen, die Regel per Kommentar stummschalten. Deshalb steht
        in meiner Regeldatei in einer eigenen Zeile: Einen Check abzuschwächen, damit er durchläuft, ist
        ein Workaround und repariert nichts.
      </p>
    </>
  );
}

type ToolRow = {
  level: string;
  python: string;
  php: string;
  js: string;
};

const toolRows: ReadonlyArray<ToolRow> = [
  { level: "Toter Code", python: "vulture", php: "shipmonk/dead-code-detector (PHPStan)", js: "knip" },
  { level: "Linter und Formatierer", python: "ruff", php: "PHP_CodeSniffer (phpcs)", js: "ESLint + Prettier" },
  { level: "Statische Analyse", python: "mypy (strict)", php: "PHPStan", js: "tsc (strict)" },
  { level: "Unit-Tests und Abdeckung", python: "pytest + coverage", php: "PHPUnit", js: "Jest / Vitest" },
  {
    level: "Komplexität",
    python: "complexipy",
    php: "PHPMD, cognitive-complexity (PHPStan)",
    js: "ESLint complexity"
  },
  { level: "Duplikate", python: "pylint duplicate-code", php: "jscpd", js: "jscpd" },
  { level: "Architektur und Kopplung", python: "import-linter", php: "Deptrac", js: "dependency-cruiser" }
];

export function SectionToolTable(): ReactNode {
  return (
    <>
      <h2 id="tools">Die Tools nach Sprache</h2>
      <table className={styles.toolTable}>
        <caption className={styles.tableCaption}>
          Das nutze ich für jede Ebene. Die konkreten Tools sind weniger wichtig, als dass jede Ebene
          den Build scheitern lässt.
        </caption>
        <thead>
          <tr>
            <th scope="col">Ebene</th>
            <th scope="col">Python</th>
            <th scope="col">PHP</th>
            <th scope="col">JS/TS</th>
          </tr>
        </thead>
        <tbody>
          {toolRows.map((row) => (
            <tr key={row.level}>
              <th scope="row">{row.level}</th>
              <td data-label="Python">{row.python}</td>
              <td data-label="PHP">{row.php}</td>
              <td data-label="JS/TS">{row.js}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Es gibt auch eine Schritt-für-Schritt-Version dieses Beitrags für Coding-Agenten: das{" "}
        <a href={PLAYBOOK_URL}>Playbook für CI-Leitplanken</a> (auf Englisch). Um es auf ein Repository
        anzuwenden, sagen Sie Ihrem Agenten: <em>Wende {PLAYBOOK_URL} auf dieses Repository an.</em>
      </p>
    </>
  );
}

export function SectionBottomLine(): ReactNode {
  return (
    <>
      <h2 id="bottom-line">Fazit</h2>
      <p>
        Die Entropie wächst so oder so; offen ist nur, wer sie im Zaum hält. Je mehr Regeln von
        schriftlichen Richtlinien in automatische CI-Checks wandern, desto weniger hängt davon ab, ob
        ein Mensch im Review aufmerksam ist. Die KI führt die Checks selbst aus, sieht, was
        fehlgeschlagen ist, und behebt es: Eine Zeile in der AGENTS.md kann sie überspringen, einen
        fehlgeschlagenen CI-Lauf nicht. Und je mehr solcher Checks Sie haben, desto gelassener können
        Sie ihr Code überlassen.
      </p>
      <p>
        Wenn Sie Gründer sind und keinen Code lesen, taugt diese Liste trotzdem als Fragenkatalog für
        Ihr Team: Welche dieser Ebenen lassen den Build tatsächlich scheitern? Jede Antwort im Sinne
        von „das fangen wir im Review ab“ ist eine Regel, die von der Aufmerksamkeit eines Menschen an
        einem bestimmten Tag abhängt. Warum von Agenten geschriebener Code diese Leitplanken überhaupt
        braucht, ist eine eigene Geschichte:{" "}
        <Link href={VIBECODED_HREF}>KI führen wie einen Junior</Link>.
      </p>
    </>
  );
}

export function SectionTemplate(): ReactNode {
  return (
    <>
      <h2 id="python-template">Eine Vorlage für Python</h2>
      <p>
        Der Ansatz hängt nicht von der Sprache ab. Für Python habe ich alles in eine fertige Vorlage
        gepackt, die Sie gern nutzen können:{" "}
        <a href={TEMPLATE_HREF} target="_blank" rel="noreferrer">
          python-guardrails-template
        </a>
        .
      </p>
      <p>Darin enthalten:</p>
      <ul>
        <li>
          alle Checks aus diesem Beitrag hinter einem einzigen Befehl <code>make verify</code> in
          Docker und derselbe Befehl in GitHub Actions;
        </li>
        <li>Architekturschichten mit Prüfung der Importe;</li>
        <li>ein Scanner, der beim Commit nach Geheimnissen wie Schlüsseln und Passwörtern sucht;</li>
        <li>eine AGENTS.md, in der fast jede Regel auf den Check verweist, der sie durchsetzt;</li>
        <li>ein kleines Beispiel, damit die Checks direkt nach dem Anlegen des Projekts durchlaufen.</li>
      </ul>
      <p>Ein neues Projekt legen Sie mit einem Befehl an:</p>
      <pre>
        <code>copier copy gh:sg4tech/python-guardrails-template my-project</code>
      </pre>
      <p>
        Und wenn die Vorlage aktualisiert wird, bringt <code>copier update</code> die neuen Checks in
        bestehende Projekte und behält Ihre Änderungen bei. Nie wieder alles in jedem neuen Projekt von
        Grund auf einrichten.
      </p>
    </>
  );
}
