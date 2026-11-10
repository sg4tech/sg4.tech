// Tail half of the article — sections 9–10 + closing, plus the CTA and Related
// asides. Split out of article-content.tsx so each file stays under the
// 700-line ESLint cap.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_de_blog_metrics";

// Pillar -> spoke links come from the post registry so titles/descriptions
// never drift from the articles' own metadata.
const percentilesPost = getPostBySlug("lieferprognose-mit-perzentilen");
const vibecodingPost = getPostBySlug("vibecoding-mvp-keine-releases-mehr");
const finishingPost = getPostBySlug("ki-anfangen-billig-fertigstellen-teuer");

// Spokes first (continue reading), then the landings. Excludes any card that
// points to the same destination as `ArticleCta`.
const relatedLinks = [
  {
    href: getPostPath(percentilesPost.slug),
    title: percentilesPost.title,
    description: percentilesPost.description
  },
  {
    href: getPostPath(vibecodingPost.slug),
    title: vibecodingPost.title,
    description: vibecodingPost.description
  },
  {
    href: getPostPath(finishingPost.slug),
    title: finishingPost.title,
    description: finishingPost.description
  },
  {
    href: pagePath("de", "yii2"),
    title: "Für Teams mit einer Yii2-Codebasis",
    description:
      "Die Seite für Legacy-Projekte: planbare Releases, Leitplanken für die Qualität und Modernisierung, ohne gleich alles neu zu schreiben."
  },
  {
    href: pagePath("de", "ai-vibecoding"),
    title: "Vibecoding-MVP in Ordnung bringen",
    description:
      "Wie die Ebenen des Entwicklungsprozesses entstehen, die KI nicht mitliefert: Architekturregeln, Prüfungen in der Pipeline, Testabdeckung."
  }
] as const;

function FailureModesList(): ReactNode {
  return (
    <ul>
      <li>
        Entwickler sehen Kollegen, die auf Review oder QA warten, wollen nicht „untätig herumsitzen“,
        solange im Backlog noch Arbeit liegt, und fangen still und leise doch neue Tickets an
      </li>
      <li>
        Ein Stakeholder braucht dringend etwas, der EM bekommt Druck von oben, und das Limit wird „nur
        dieses eine Mal“ ausgesetzt
      </li>
      <li>
        Die Geschäftsführung geht durch die Entwicklungsabteilung, sieht Leute, die gerade nicht
        sichtbar tippen, und fragt, warum das Team nicht voll ausgelastet ist
      </li>
    </ul>
  );
}

function WipSequenceList(): ReactNode {
  return (
    <ul>
      <li>
        <strong>Das Ziel ausdrücklich machen.</strong>{" "}
        Das Ziel ist, bereits begonnene Arbeit abzuschließen. Neue anzufangen ist zweitrangig.
        Wiederholen Sie das regelmäßig. Drucken Sie es auf einen Aufkleber. Was immer nötig ist, damit
        diese Sichtweise ankommt.
      </li>
      <li>
        <strong>Erklären, warum.</strong>{" "}
        Zeigen Sie dem Team Little&apos;s Law. Zeigen Sie die Diagnose mit den Aufgaben pro Status.
        Argumentieren Sie mit der Mathematik des Systems statt mit Ihrer Autorität. Menschen folgen
        Praktiken, die sie verstehen, viel bereitwilliger als Regeln, die sie nicht verstehen.
      </li>
      <li>
        <strong>Echte Beispiele zeigen.</strong>{" "}
        Verweisen Sie auf Fälle, in denen WIP-Limits das System sichtbar verändert haben: Ihre eigenen
        früheren Teams, Beiträge wie diesen, Erfahrungen anderer. Ein Muster, das Menschen wiedererkennen, bewirkt mehr als jeder Appell.
      </li>
      <li>
        <strong>Den Fokus immer wieder zurückholen.</strong>{" "}
        Wann immer jemand eine neue Aufgabe ziehen will, fragen Sie: „Was können Sie jetzt tun, um
        bestehende Arbeit zum Abschluss zu bringen?“ Einem Kollegen helfen, der feststeckt. Ein Review
        machen. Eine Frage aus der QA beantworten. Zu zweit einen lange offenen Merge-Konflikt lösen.
        Der Instinkt des Teams ist, sich frische Arbeit zu holen. Die Disziplin besteht darin, diesen
        Instinkt umzulenken.
      </li>
    </ul>
  );
}

export function SectionIntroduceWipLimits(): ReactNode {
  return (
    <>
      <h2 id="introduce-wip-limits">9. WIP-Limits einführen, ohne dass das Team rebelliert</h2>
      <p>
        Die Mathematik ist das eine. Das System dazu zu bringen, sie anzunehmen, etwas ganz anderes.
        Viele Teams haben über WIP-Limits gelesen, versucht, sie einzuführen, und den Versuch still
        wieder aufgegeben. Ich vermute, die meisten.
      </p>
      <p>
        So läuft das Scheitern ab. Jemand, meist der EM oder ein Senior-Entwickler, der das
        Kanban-Buch gelesen hat, verkündet: „Ab Montag gilt ein WIP-Limit von 5 pro Entwickler, ohne
        Ausnahmen.“ Zwei Wochen später ist es verschwunden. Die Gründe sind vorhersehbar:
      </p>
      <FailureModesList />
      <p>
        Der Fehler liegt darin, WIP-Limits als Regel einzuführen. Gebraucht wird eine Verschiebung des
        Fokus. Fast niemand, weder Entwickler noch Geschäftsführung, findet die Regel an sich
        einleuchtend. Von außen wirkt es irrational, einem Entwickler zu sagen, er solle keine neue
        Arbeit aufnehmen. Es widerspricht dem Instinkt, knappe Kapazität voll auszunutzen, und das in einer Kultur, die das Anfangen belohnt.
      </p>
      <p>
        Deshalb beginne ich selten mit dem Limit selbst. Ich beginne damit, den Fokus des Teams vom
        Anfangen aufs Abschließen zu lenken. Das Limit wird erst verinnerlicht, wenn sich der Fokus
        verschoben hat.
      </p>
      <p>Meine Reihenfolge sieht ungefähr so aus:</p>
      <WipSequenceList />
      <p>
        In den Kommentaren zu einem meiner Beiträge stand eine Geschichte, die das gut zeigt. Ein Team
        setzte WIP = 5. Die Stakeholder hielten das zunächst für einen Fehlschlag: zu wenig sichtbar
        gleichzeitig in Arbeit. Innerhalb eines Quartals hatten sich Liefertempo, Qualität,
        Zusammenarbeit und Planbarkeit verbessert. Die Sicht der Stakeholder drehte sich. Bald fragten
        sie: „Warum nutzen wir WIP-Limits nicht auch in anderen Teilen des Unternehmens?“
      </p>
      <p>
        Am schwierigsten ist meist die Managementebene, die Auslastung mit Produktivität gleichsetzt.
        Das Entwicklungsteam selbst ist selten das Problem. Wenn alle im Team „zu 100 Prozent
        ausgelastet“ sind, fühlt sich das Management wohl; sobald jemand sichtbar zwischen zwei Tickets
        steht, schrillen die Alarmglocken. Die unbequeme Wahrheit: Ein Team mit 100 Prozent Auslastung
        liefert fast immer weniger aus als ein Team mit 80 Prozent. Erst der Spielraum im System lässt
        die Arbeit hindurchfließen.
      </p>
      <p>
        WIP-Limits müssen nicht nach Kanban-Lehrbuch aussehen. Sie müssen keine Zahlen aufs Board
        drucken. Es reicht, wenn sich das Team und seine Stakeholder in der Praxis einig sind: Wir
        machen fertig, bevor wir anfangen.
      </p>
    </>
  );
}

function SystemDimensions(): ReactNode {
  return (
    <>
      <p>
        <strong>Tempo des Systems</strong>: wie schnell wir Änderungen ausliefern.
      </p>
      <ul>
        <li>T2M (Time to Market): die gesamte Zeit von der Idee bis zur Produktion</li>
        <li>Durchsatz: abgeschlossene Aufgaben pro Zeitraum</li>
        <li>Lead Time, Cycle Time, WIP: die Zerlegung, die wir schon durchgegangen sind</li>
      </ul>
      <p>
        <strong>Wert für das Produkt</strong>: ob das, was wir ausliefern, wirklich nützt.
      </p>
      <ul>
        <li>Qualität: offene Bugs, Regressionsrate, Häufigkeit von Incidents</li>
        <li>NPS / Kundenzufriedenheit: ob die Nutzer spüren, dass das Produkt besser wird</li>
      </ul>
      <p>
        <strong>Nachhaltigkeit im Team</strong>: ob das Team auf diese Weise weiterarbeiten kann.
      </p>
      <ul>
        <li>eNPS (Employee NPS): ob das Team die Arbeit hier weiterempfehlen würde</li>
        <li>Anzeichen von Burnout, Fluktuation, Last durch Bereitschaftsdienste</li>
      </ul>
    </>
  );
}

export function SectionFullSystemView(): ReactNode {
  return (
    <>
      <h2 id="full-system-view">10. Das ganze System im Blick: Tempo, Wert und Nachhaltigkeit</h2>
      <p>
        Tempo allein ergibt kein vollständiges Bild. Jedes Metrik-Framework für die Entwicklung, das nur
        auf Tempo optimiert, macht früher oder später etwas Wichtigeres kaputt.
      </p>
      <p>Das vollständige Diagnosemodell hat drei Dimensionen:</p>
      <SystemDimensions />
      <p>
        Alle drei zählen gemeinsam, weil sich zwei davon jederzeit vorübergehend auf Kosten der dritten
        schönen lassen. Sie können schneller ausliefern, indem Sie die QA überspringen und das Team
        verheizen: Das Tempo steigt, Wert und Nachhaltigkeit brechen ein. Sie können die Qualität bis zur
        Perfektion polieren und nichts ausliefern: Der Wert pro Feature steigt, aber Team und
        Unternehmen stagnieren. Sie können das Team zufrieden und untätig halten: Die Nachhaltigkeit ist
        großartig, das Tempo liegt bei null.
      </p>
      <p>
        Ein funktionierendes Liefersystem hält alle drei Dimensionen im Gleichgewicht. Es ist schnell
        genug, damit das Unternehmen im Wettbewerb besteht, wertvoll genug, damit die Kunden bleiben, und
        nachhaltig genug, damit das Team auch nächstes Jahr noch da ist. Wenn Gründer mich fragen, wie
        „gut“ aussieht, ist das meine Antwort: drei Zahlen, die sich ungefähr gemeinsam bewegen.
      </p>
      <p>
        Gerade der eNPS wird oft übersehen, weil er weicher wirkt als die anderen. Dabei ist er das
        Frühwarnsystem für alles andere. Ein Team mit sinkendem eNPS verliert in drei bis sechs Monaten
        die ersten erfahrenen Leute. Nachrücken werden Juniors, die Einarbeitung brauchen. Der WIP
        steigt, das Wissen wird dünn, die Qualität sinkt, die Bugs vermehren sich. Die Kennzahl, die sich
        zuerst bewegt hat, war genau die, die Sie ignoriert haben.
      </p>
      <p>
        Fast alle diese Kennzahlen lassen sich aus Jira und einer kurzen Mitarbeiterumfrage berechnen.
        Ein spezielles Tool braucht keine davon. Was sie brauchen, ist die Bereitschaft, ehrlich auf das
        System zu schauen, auf alle drei Dimensionen zugleich.
      </p>
    </>
  );
}

export function SectionClosing(): ReactNode {
  return (
    <>
      <h2 id="closing">Wenn Metriken zum Diagnosewerkzeug werden</h2>
      <p>
        Die Kennzahlen sind nicht neu. Die Ideen auch nicht: die{" "}
        <a
          href="https://en.wikipedia.org/wiki/Theory_of_constraints"
          target="_blank"
          rel="noreferrer"
        >
          Engpasstheorie (Theory of Constraints)
        </a>{" "}
        (1980er), das{" "}
        <a
          href="https://en.wikipedia.org/wiki/Toyota_Production_System"
          target="_blank"
          rel="noreferrer"
        >
          Toyota-Produktionssystem
        </a>{" "}
        (1950er), die{" "}
        <a
          href="https://en.wikipedia.org/wiki/Kanban_(development)"
          target="_blank"
          rel="noreferrer"
        >
          Kanban-Methode für Software
        </a>{" "}
        (David Anderson, 2000er) und{" "}
        <a
          href="https://en.wikipedia.org/wiki/Little%27s_law"
          target="_blank"
          rel="noreferrer"
        >
          Little&apos;s Law
        </a>{" "}
        (1961) beschreiben verschiedene Seiten desselben Grundproblems: Arbeit bewegt sich durch
        Systeme, und Systeme werden langsamer, wenn der Fluss reißt. Neu ist allein die Frage, ob Ihr
        Team sie als Bericht oder als Diagnose nutzt. Ein Bericht sagt Ihnen, dass etwas kaputt ist.
        Eine Diagnose sagt Ihnen, wo.
      </p>
      <p>
        Wenn die Delivery langsam ist, liegt es nahe, auf den Bericht zu reagieren: Entwickler
        einstellen, Prozesse hinzufügen, ein neues Tool einführen. Das sieht nach Bewegung aus.
        Fortschritt ist es meistens nicht. Fortschritt beginnt, wenn die Kennzahlen konkret genug
        werden, um auf den tatsächlichen Engpass zu zeigen.
      </p>
      <p>
        Wenn Sie auf ein Board mit 60–80 aktiven Aufgaben und einem Team aus sechs Leuten blicken,
        zählen Sie die Aufgaben pro Status. Messen Sie Lead Time und Cycle Time. Schauen Sie sich das
        Verhältnis von WIP und Durchsatz an. Den Großteil der Arbeit erledigt dann die Mathematik des
        Systems.
      </p>
    </>
  );
}

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="engpaesse-in-der-entwicklung-finden" heading="Ein zweiter Blick auf Ihren Entwicklungsprozess" href={CTA_HREF}>
      Das erste Diagnosegespräch dauert 30 Minuten per Telegram. Beschreiben Sie die Symptome, und ich
      helfe Ihnen, den tatsächlichen Engpass zu finden.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="engpaesse-in-der-entwicklung-finden" links={relatedLinks} intro="Wenn Sie diese Symptome wiedererkennen, finden Sie hier den nächsten Schritt, je nachdem, wie Ihre Codebasis aussieht." />;
}
