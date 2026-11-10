// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds the argument: the stall pattern → the junior reframe →
// the proof case → the practice mapping → why past fixes failed → the restart
// sequence.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/vibecoded-mvp-stopped-shipping.module.css";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const PILLAR_HREF = getPostPathInLocale("diagnose-broken-engineering-delivery", "de");
const HUB_HREF = pagePath("de", "ai-vibecoding");
const HANGOVER_HREF = "https://www.fastcompany.com/91398622/the-vibe-coding-hangover-is-upon-us";
const VIBE_STUDY_HREF = "https://arxiv.org/abs/2512.11922";
const CONVERGED_HREF =
  "https://www.cio.com/article/4162085/your-ai-coding-agent-isnt-a-tool-its-a-junior-developer-treat-it-like-one.html";
const VERACODE_HREF = "https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/";
const AGENTS_MD_HREF = "https://agents.md";

export function ArticleLede(): ReactNode {
  return (
    <>
      Ein Vibecoding-MVP gerät aus demselben Grund ins Stocken wie ein Team aus Junior-Entwicklern
      ohne Senior: Code entsteht schnell, nichts fängt Fehler ab, bevor sie in Produktion landen, und
      jede neue Änderung macht unbemerkt die vorige kaputt.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        In Gründer-Communitys taucht immer wieder dieselbe Geschichte auf, die Fachpresse hat ihr
        schon einen Namen gegeben,{" "}
        <a href={HANGOVER_HREF} target="_blank" rel="noreferrer">
          den Vibecoding-Kater
        </a>
        , und sie erreicht immer denselben Punkt. Das MVP existiert. Es hat echte Nutzer, manchmal
        echten Umsatz. Die ersten Monate waren die beste Zeit, die der Gründer je mit dem Bauen eines
        Produkts hatte: ein Feature in Cursor, Claude Code, Lovable oder Bolt beschreiben, und schon
        ist es da. Und dann, nach ein paar Monaten, kommen die Releases zum Stillstand. Das passiert
        schleichend. Releases werden riskanter, Fixes dauern länger, und Änderungen, die früher einen
        Nachmittag brauchten, dauern plötzlich Wochen.
      </p>
      <p>
        An diesem Punkt lautet der übliche Schluss, dass Programmieren mit KI eine Falle war oder dass
        der Code Müll ist und neu geschrieben werden muss. Ich halte beides für falsch. In diesen
        Codebasen sehe ich etwas, das ich schon jahrelang repariert habe, bevor ein Sprachmodell je eine
        Zeile Produktionscode geschrieben hat: das Ergebnis schneller, unbeaufsichtigter Arbeit von
        Juniors. Die Branche weiß seit Jahrzehnten, wie man damit umgeht, und in einem typischen
        Vibecoding-MVP ist fast nichts von diesem Wissen angewendet worden. Das ist die gute
        Nachricht: Ihre Lage ist gut verstanden, und die Lösungen sind es auch.
      </p>
    </>
  );
}

export function SectionStall(): ReactNode {
  return (
    <>
      <h2 id="stall">So sieht der Stillstand aus</h2>
      <p>Das Muster wiederholt sich so zuverlässig, dass ich die Symptome aufzählen kann, ohne die Codebasis gesehen zu haben:</p>
      <ul>
        <li>
          Sie fügen ein Feature hinzu, und drei andere gehen kaputt. Herauszufinden, <em>welche</em>{" "}
          drei, dauert länger als das Feature selbst.
        </li>
        <li>
          In der KI-generierten Codebasis gibt es Teile, die niemand versteht, auch Sie nicht und auch
          die KI nicht, die sie geschrieben hat. Diese Teile anzufassen ist ein Glücksspiel.
        </li>
        <li>
          Die KI schreibt denselben Code immer wieder anders. Jeder Fix macht einen früheren Fix
          rückgängig. Sie bezahlen Tokens dafür, sich im Kreis zu drehen.
        </li>
        <li>
          Der Ablauf aus der Demo funktioniert. Dann macht ein echter Nutzer etwas leicht
          Ungewöhnliches, die Produktion fällt nachts aus, und Sie erfahren davon erst durch eine
          Beschwerde.
        </li>
      </ul>
      <p>
        Alle vier Symptome haben dieselbe Ursache: Nichts in der Codebasis oder im Arbeitsablauf hält
        frühere Entscheidungen fest, also würfelt jede neue Änderung alles Vorherige neu aus. Auch die
        Forschung beginnt, denselben Zielkonflikt zu beschreiben:{" "}
        <a href={VIBE_STUDY_HREF} target="_blank" rel="noreferrer">
          Eine aktuelle Studie zu Vibecoding in der Praxis
        </a>{" "}
        zeigt, dass die mühelose Codegenerierung später mit inkonsistenter Architektur,
        Sicherheitslücken und hohem Wartungsaufwand bezahlt wird.
      </p>
    </>
  );
}

export function SectionJunior(): ReactNode {
  return (
    <>
      <h2 id="junior">Der schnellste Junior, den Sie je eingestellt haben</h2>
      <p>
        Ein Perspektivwechsel macht die ganze Lage beherrschbar: Behandeln Sie den Coding-Agenten als
        Teammitglied mit einem ganz bestimmten Profil. Er ist der schnellste Junior-Entwickler, mit dem
        Sie je gearbeitet haben. Er liefert ein Feature in Minuten, widerspricht nie und wird nie müde.
        Gleichzeitig erinnert er sich an keine einzige Entscheidung des letzten Monats und ihre Gründe,
        hat keine Scheu, alles anzufassen, und fühlt sich für das Ergebnis nicht verantwortlich. Er
        übergibt Ihnen selbstbewusst Code, der fertig aussieht, denn genau darauf optimiert er: fertig
        auszusehen.
      </p>
      <p>
        Softwareteams beschäftigen genau diese Person, seit es die Branche gibt. Jede Praxis, die rund
        um Junior-Entwickler entstanden ist, gibt es wegen dieses Profils. Erfahrene Entwickler haben
        sich{" "}
        <a href={CONVERGED_HREF} target="_blank" rel="noreferrer">
          weitgehend auf diese Sichtweise geeinigt
        </a>
        ; bei Gründern fehlt allerdings noch die Hälfte, die wirklich zählt: das Führungssystem, das dazugehört.
      </p>
      <p>
        Das sage ich als jemand, der jeden Tag mit KI-Agenten entwickelt. Meine eigene Produktarbeit
        ist Vibecoding, und ich habe nicht vor, damit aufzuhören. Jede Änderung meiner Agenten
        durchläuft Linter, Typprüfungen und Tests in der CI, bevor sie übernommen wird. Die Tools
        unterscheiden sich je nach Stack: mypy und pytest für Python, tsc und ESLint für Node, PHPStan
        und PHPUnit für PHP. Die Idee bleibt dieselbe. Das Tempo ist echt. Das Profil auch.
      </p>
    </>
  );
}

export function SectionCase(): ReactNode {
  return (
    <>
      <p>
        Hinter der menschlichen Version davon habe ich schon mehrmals aufgeräumt. In einem
        EdTech-Startup, in dem ich als Teilzeit-CTO gearbeitet habe, konnte die Produktion stundenlang
        ausfallen, bevor es jemand merkte: Nichts überwachte sie. Keine Alerts, kein Error-Tracking.
        Funktionale Bugs blieben im Produkt, ohne dass sich jemand darum kümmerte. Der Code war schnell
        geschrieben worden, von Leuten mit mehr Tempo als Erfahrung, und die größten Lücken lagen
        rundherum: Niemand prüfte Änderungen, nichts testete die kritischen Abläufe, nichts überwachte
        die Produktion, und ein Release bedeutete, dass sich ein Entwickler auf dem Produktionsserver
        einloggte und Dinge von Hand änderte.
      </p>
      <p>
        Wir haben Monitoring eingerichtet, Tests, Code-Reviews und einen QA-Schritt eingeführt, die
        Handarbeit auf dem Server durch eine Release-Pipeline ersetzt und nebenbei Teile des Codes neu
        geschrieben. Die Ausfälle hörten auf; die Produktion lief von da an stabil. Über die Zeit der
        Zusammenarbeit sanken die Ausfallzeiten auf weniger als ein Zehntel, die Delivery, also Time to
        Market und Durchsatz, hat sich mehr als verdoppelt, die laufenden Kosten sanken auf rund
        zwei Drittel, und der eNPS des Teams stieg von −100&nbsp;% auf +100&nbsp;%. Neben den Tools habe ich mich mit
        dem Entwickler zu Einzelgesprächen zusammengesetzt, über seine Ziele und den Weg dorthin, denn
        einen Junior zu führen heißt auch, ihn wachsen zu lassen. Das alles ist Standardausrüstung, nur spät eingesetzt.
      </p>
      <p className={styles.pullquote}>
        Für dieses Startup gab es noch keine KI, und das Versagen ist genau dasselbe wie in einem
        KI-gebauten MVP. KI kommt nur schneller dort an.
      </p>
    </>
  );
}

function MappingTable(): ReactNode {
  return (
    <table className={styles.mappingTable}>
      <thead>
        <tr>
          <th>Wie Teams mit Juniors umgehen</th>
          <th>Die Entsprechung für KI</th>
          <th>Was das verhindert</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Ein Onboarding-Dokument: wie wir hier Code strukturieren und was wir nie tun</th>
          <td>
            Eine Datei mit Konventionen, die der Agent bei jeder Aufgabe liest (
            <a href={AGENTS_MD_HREF} target="_blank" rel="noreferrer">
              AGENTS.md
            </a>{" "}
            / CLAUDE.md)
          </td>
          <td>Dass der Agent bei jeder Anfrage die Architektur neu erfindet</td>
        </tr>
        <tr>
          <th>Code-Review, bevor irgendetwas gemergt wird</th>
          <td>Ein Mensch oder ein erfahrener Agent prüft jede KI-Änderung; Linter und Typprüfung laufen als harte Schranke</td>
          <td>Code, der „fertig aussieht“ und unbemerkt funktionierende Features kaputt macht</td>
        </tr>
        <tr>
          <th>Eine Testsuite, die grün bleiben muss</th>
          <td>Automatisch laufende Tests für die kritischen Abläufe; eine rote Suite blockiert den Merge</td>
          <td>Den Fix, der zwei andere Dinge kaputt macht; die Regression, die Sie erst in Produktion finden</td>
        </tr>
        <tr>
          <th>Eine CI, die schlechte Änderungen nicht durchlässt</th>
          <td>Dieselbe Pipeline für die Ergebnisse des Agenten: Linting, Typen, Sicherheitsscan, Build</td>
          <td>Fest eingetragene Zugangsdaten, ungeprüfte Eingaben, Abhängigkeiten, die niemand bewusst gewählt hat</td>
        </tr>
        <tr>
          <th>Monitoring, damit Probleme vor den Kunden auffallen</th>
          <td>Error-Tracking und Alerts für das ausgelieferte Produkt</td>
          <td>Stundenlange Ausfälle, während alle annehmen, dass alles läuft</td>
        </tr>
        <tr>
          <th>Kleine, klar umrissene Aufgaben: Ein Junior bekommt „Abrechnung neu bauen“ nie als ein Ticket</th>
          <td>Eine Änderung pro Anfrage, so zugeschnitten, dass ein Mensch den Diff wirklich prüfen kann</td>
          <td>Den Diff mit 4.000 Zeilen, den niemand prüfen kann und in dem die schlimmsten Überraschungen stecken</td>
        </tr>
        <tr>
          <th>Regelmäßige Einzelgespräche und Feedback, damit der Junior wächst und Fehler nicht wiederholt</th>
          <td>Was im Review auffällt, fließt zurück in die Datei mit Konventionen, damit der Agent diesen Fehler nicht mehr macht</td>
          <td>Jede Woche für dieselbe Korrektur zu bezahlen, in Tokens und in Zeit für Reviews</td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionMapping(): ReactNode {
  return (
    <>
      <h2 id="practices">Was erfahrene Teams mit Juniors tun, und die Entsprechung für KI</h2>
      <p>
        Die Praktiken, die aus der Arbeit von Juniors ein funktionierendes Geschäft machen, sind
        langweilig bekannt. Jede von ihnen hat eine direkte Entsprechung im KI-Zeitalter, und einem
        Vibecoding-MVP fehlen meist alle auf einmal.
      </p>
      <MappingTable />
      <p>
        Die linke und die rechte Spalte sind dieselbe Liste. Darin liegt das ganze Argument dieses
        Essays: Die Disziplin, mit der man KI-Agenten führt, gibt es bereits, voll erprobt, und sie
        wartet nur darauf, angewendet zu werden.
      </p>
      <p>
        Zur Zeile über Sicherheit gibt es eine Zahl, die man kennen sollte: Im{" "}
        <a href={VERACODE_HREF} target="_blank" rel="noreferrer">
          GenAI Code Security Report 2025 von Veracode
        </a>{" "}
        sind 45&nbsp;% der KI-generierten Codebeispiele aus mehr als 100 Modellen bei Sicherheitsprüfungen
        durchgefallen. Die Schranke gibt es, weil der Junior Sicherheitslücken in großem Stil
        ausliefert.
      </p>
      <p>
        Bessere Prompts fehlen bewusst in der Liste. Ein Senior gestaltet die Umgebung um einen Junior
        so, dass nachlässige Arbeit gar nicht erst in Produktion gelangen kann, egal wie das Ticket
        formuliert ist.
      </p>
    </>
  );
}

export function SectionFailedFixes(): ReactNode {
  return (
    <>
      <h2 id="failed-fixes">Die Lösungen, die Sie schon versucht haben, und warum sie nicht gehalten haben</h2>
      <p>
        Wenn ein Gründer anfängt, Hilfe von außen zu suchen, hat er meist schon zwei oder drei
        Rettungsversuche hinter sich. Diese Versuche scheitern auf vorhersehbare Weise, und der Blick auf
        den Junior erklärt jeden einzelnen.
      </p>
      <p>
        <strong>Das KI-Tool wechseln.</strong> Wer Cursor gegen Windsurf oder Copilot tauscht, ersetzt
        einen Junior durch einen anderen Junior. Der neue ist vielleicht klüger; er hat trotzdem kein
        Gedächtnis, keine Scheu und kein Review, das auf seine Ergebnisse wartet. Dieselben Muster
        kehren innerhalb von Wochen zurück, denn mit dem Modell, das den Code schreibt, hatten sie nie
        etwas zu tun.
      </p>
      <p>
        <strong>Bessere Prompts und Regeldateien.</strong>{" "}
        Schon näher dran: Das ist das Onboarding-Dokument, und es ist eine echte Ebene. Eine Anweisung,
        die die Pipeline nicht durchsetzt, bleibt allerdings ein Vorschlag. Ein Junior nickt den
        Styleguide ab und liefert dann aus, was er eben ausliefert; wirksam wird der Leitfaden erst
        durch das Review und die Schranken dahinter.
      </p>
      <p>
        <strong>Der Refactoring-Sprint.</strong>{" "}
        „Wir stoppen zwei Wochen lang die Features und räumen auf.“ Refactoring ohne Tests ist der Weg,
        auf dem ein Junior alte Bugs in neue verwandelt: Die Codebasis ist danach <em>anders</em>{" "}
        kaputt, und Sie haben dafür zwei Wochen Stillstand bezahlt. Aufräumen kommt erst nach dem Netz,
        das auffängt, was beim Aufräumen kaputtgeht.
      </p>
      <p>
        <strong>Einen Senior-Entwickler einstellen.</strong> Der richtige Instinkt, oft zum falschen
        Zeitpunkt. Setzen Sie einen Senior in eine Codebasis ohne Tests, ohne Review-Historie und ohne
        Monitoring, und seine ersten Monate verschwinden in Archäologie: Er rekonstruiert von Hand
        Fakten, die die Werkzeuge klar benennen sollten. Manche gehen wieder. Bauen Sie zuerst das
        Sicherheitsnetz, und dieselbe Person ist ab der ersten Woche wirksam, falls Sie sie dann
        überhaupt noch brauchen.
      </p>
    </>
  );
}

export function SectionRestart(): ReactNode {
  return (
    <>
      <h2 id="restart">Releases wieder in Gang bringen</h2>
      <p>Die Reihenfolge der Schritte ist wichtiger als jede einzelne Praxis.</p>
      <ol>
        <li>
          <strong>Zuerst diagnostizieren.</strong> Welche fehlende Ebene blockiert die Releases{" "}
          <em>jetzt</em>? Fällt die Produktion unbemerkt aus, kommt zuerst das Monitoring. Löst jede
          Änderung Regressionen aus, kommen zuerst Tests für die zwei oder drei kritischen Nutzerabläufe.
          Ein Vibecoding-MVP verkraftet keine sechs neuen Praktiken in einer Woche; fangen Sie mit der
          an, die am meisten schmerzt, und ergänzen Sie dann die nächste.
        </li>
        <li>
          <strong>Das Sicherheitsnetz aufbauen.</strong>{" "}
          Monitoring und Error-Tracking, eine CI-Pipeline mit echten Schranken, Tests für die Abläufe,
          ohne die das Geschäft stirbt, ein Review für jede Änderung. Ob Mensch oder Agent, die Regel ist
          dieselbe: Nichts wird ungesehen gemergt. Diese Phase dauert Wochen, höchstens ein paar Monate,
          und in ihr kommen die Releases still und leise wieder in Gang, weil Änderungen keine Angst mehr
          machen.
        </li>
        <li>
          <strong>Erst dann skalieren.</strong>{" "}
          Architektur aufräumen, Performance optimieren, über Einstellungen entscheiden: die Arbeit, mit
          der KI-generierte Software skaliert. All das ist günstig, sobald das Netz steht, und
          leichtsinnig, solange es fehlt.
        </li>
      </ol>
      <p>
        Dieselbe Reihenfolge wende ich seit Jahren bei von Juniors gebauten Codebasen an, und genau das
        biete ich für Vibecoding-Produkte an. Die ausführliche Version, mit den Kosten und dem Ertrag
        jeder Phase, finden Sie auf der Seite{" "}
        <Link href={HUB_HREF}>Vibecoding-MVP in Ordnung bringen</Link>. Und wenn Sie <em>messen</em>{" "}
        möchten, wo Ihre Delivery tatsächlich stockt, statt zu raten, also welche Aufgaben hängen
        bleiben und in welcher Phase, dann finden Sie dazu einen eigenen Leitfaden zur{" "}
        <Link href={PILLAR_HREF}>Diagnose des Entwicklungsprozesses mit Metriken</Link>. Er gilt für ein
        KI-gestütztes Team aus zwei Leuten genauso wie für eine Organisation mit vierzig Entwicklern.
      </p>
    </>
  );
}
