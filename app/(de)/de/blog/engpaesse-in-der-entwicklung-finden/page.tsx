import type { Metadata } from "next";
import { ArticleToc } from "../../../../components/ArticleToc";
import { BlogPostLayout } from "../../../../components/BlogPostLayout";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import {
  ArticleLede,
  IntroSection,
  SectionCountTasks,
  SectionDecomposeT2M,
  SectionLeadTimeCycleTime,
  SectionLittlesLaw,
  SectionSymptoms,
  SectionWhereStuck,
  SectionWip,
  SectionWipLimits
} from "./article-content";
import {
  ArticleCta,
  ArticleRelated,
  SectionClosing,
  SectionFullSystemView,
  SectionIntroduceWipLimits
} from "./article-tail";
import styles from "../../../../views/posts/diagnose-broken-engineering-delivery.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "engpaesse-in-der-entwicklung-finden";

// Mirrors the section h2s (ids and text).
const tocItems = [
  { id: "symptoms", title: "1. Symptome langsamer Delivery und der falsche erste Reflex" },
  { id: "decompose-t2m", title: "2. T2M zerlegen: Discovery und Lead Time sind zwei verschiedene Probleme" },
  { id: "lead-time-cycle-time", title: "3. Lead Time = Wartezeit + Cycle Time" },
  { id: "where-stuck", title: "4. Wo Arbeit wirklich hängen bleibt und warum die Zeit pro Status täuschen kann" },
  { id: "count-tasks", title: "5. Engpässe finden, ohne Zeit zu messen" },
  { id: "wip", title: "6. Work in Progress (WIP): die Größe, die das Liefertempo bestimmt" },
  { id: "littles-law", title: "7. Little's Law: Lead Time = WIP / Durchsatz" },
  { id: "wip-limits", title: "8. WIP-Limits: der Hebel, der die meisten langsamen Teams wieder schnell macht" },
  { id: "introduce-wip-limits", title: "9. WIP-Limits einführen, ohne dass das Team rebelliert" },
  { id: "full-system-view", title: "10. Das ganze System im Blick: Tempo, Wert und Nachhaltigkeit" },
  { id: "closing", title: "Wenn Metriken zum Diagnosewerkzeug werden" }
];

// FAQ items must not duplicate body content: each question targets a query
// intent the body doesn't answer head-on. The schema `answer` string mirrors
// the rendered `answerNode` word for word (dl dt/dd flattened to
// "term: definition." prose) so an AI snippet matches the page.
const faqItems = [
  {
    question: "Was ist der Unterschied zwischen Lead Time und Cycle Time?",
    answer:
      "Lead Time: Die gesamte Zeit, die eine Aufgabe in der Entwicklung verbringt, von „bereit für die Entwicklung“ bis „in Produktion“. Die Wartezeit zählt mit. Cycle Time: Nur der Teil mit aktiver Arbeit, von „tatsächlich begonnen“ bis „fertig“. Die Wartezeit zählt nicht mit. Die Differenz zwischen beiden ist die Länge der Warteschlange.",
    answerNode: (
      <>
        <dl>
          <dt>Lead Time</dt>
          <dd>
            Die gesamte Zeit, die eine Aufgabe in der Entwicklung verbringt, von „bereit für die
            Entwicklung“ bis „in Produktion“. Die Wartezeit zählt mit.
          </dd>
          <dt>Cycle Time</dt>
          <dd>
            Nur der Teil mit aktiver Arbeit, von „tatsächlich begonnen“ bis „fertig“. Die Wartezeit
            zählt nicht mit.
          </dd>
        </dl>
        <p>Die Differenz zwischen beiden ist die Länge der Warteschlange.</p>
      </>
    )
  },
  {
    question: "Welches WIP-Limit ist für ein Team mit N Personen sinnvoll?",
    answer:
      "Gängige Empfehlungen liegen bei 1–3 Aufgaben pro Entwickler; Softwareteams arbeiten meist am unteren Ende, mit 1–2 pro Entwickler. Team aus 6 Personen → etwa 6–12 aktive Aufgaben im ganzen System statt 80. Die genaue Zahl ist weniger wichtig als die Disziplin, überhaupt ein Limit zu haben und es durchzusetzen. Die meisten Teams finden ihr Maß, indem sie eng anfangen und lockern, wenn Arbeit dauerhaft aus Gründen stockt, die nichts mit WIP zu tun haben.",
    answerNode: (
      <>
        <p>
          Gängige Empfehlungen liegen bei <strong>1–3 Aufgaben pro Entwickler</strong>;
          Softwareteams arbeiten meist am unteren Ende, mit <strong>1–2 pro Entwickler</strong>.
        </p>
        <p className={styles.faqHighlight}>
          Team aus 6 Personen → etwa 6–12 aktive Aufgaben im ganzen System statt 80.
        </p>
        <p>
          Die genaue Zahl ist weniger wichtig als die Disziplin, überhaupt ein Limit zu haben und es
          durchzusetzen. Die meisten Teams finden ihr Maß, indem sie eng anfangen und lockern, wenn
          Arbeit dauerhaft aus Gründen stockt, die nichts mit WIP zu tun haben.
        </p>
      </>
    )
  },
  {
    question: "Worin unterscheidet sich das von der Sprint-Kapazität in Scrum?",
    answer:
      "Sprint-Kapazität: Wie viel Arbeit sich das Team für zwei Wochen vornimmt. WIP-Limit: Wie viel Arbeit in einem beliebigen Moment gleichzeitig in Bearbeitung ist, unabhängig vom Sprint. Ein Team kann eine vernünftige Sprint-Planung haben und trotzdem 60+ Aufgaben parallel offen halten. Die Sprint-Kapazität sagt nichts darüber, ob Arbeit abgeschlossen oder nur begonnen wird. WIP-Limits stehen quer zur Sprint-Planung und lösen oft Probleme, an die die Sprint-Planung allein nicht herankommt.",
    answerNode: (
      <>
        <dl>
          <dt>Sprint-Kapazität</dt>
          <dd>Wie viel Arbeit sich das Team für zwei Wochen vornimmt.</dd>
          <dt>WIP-Limit</dt>
          <dd>
            Wie viel Arbeit in einem beliebigen Moment gleichzeitig in Bearbeitung ist, unabhängig
            vom Sprint.
          </dd>
        </dl>
        <p>
          Ein Team kann eine vernünftige Sprint-Planung haben und trotzdem 60+ Aufgaben parallel
          offen halten. Die Sprint-Kapazität sagt nichts darüber, ob Arbeit <em>abgeschlossen</em>{" "}
          oder nur <em>begonnen</em> wird. WIP-Limits stehen quer zur Sprint-Planung und lösen oft
          Probleme, an die die Sprint-Planung allein nicht herankommt.
        </p>
      </>
    )
  },
  {
    question: "Was, wenn unser Durchsatz tatsächlich zu niedrig ist?",
    answer:
      "Manchmal ist der Durchsatz wirklich der Engpass. Wenn WIP bereits im Griff ist und die Lead Time trotzdem hoch bleibt, fehlt dem Team womöglich Kapazität für die Nachfrage. Prüfen Sie vor einer Neueinstellung drei Dinge: Sind die Aufgaben zu groß geschnitten? Ist die Umsetzung selbst langsam? Verbringt das Team viel Zeit mit Arbeit außerhalb der Entwicklung? Support, Incidents, Meetings, Betriebsaufwand. Wenn all das sauber ist und der Durchsatz trotzdem hinter der Nachfrage zurückbleibt, kann eine Neueinstellung richtig sein. WIP-Limits ergänzen Neueinstellungen: Sie helfen zu unterscheiden, ob Ihnen Kapazität fehlt oder der Fluss der Arbeit gestört ist.",
    answerNode: (
      <>
        <p>
          Manchmal ist der Durchsatz wirklich der Engpass. Wenn WIP bereits im Griff ist und die Lead
          Time trotzdem hoch bleibt, fehlt dem Team womöglich Kapazität für die Nachfrage.
        </p>
        <p>Prüfen Sie vor einer Neueinstellung drei Dinge:</p>
        <ol>
          <li>
            <strong>Sind die Aufgaben zu groß geschnitten?</strong>
          </li>
          <li>
            <strong>Ist die Umsetzung selbst langsam?</strong>
          </li>
          <li>
            <strong>Verbringt das Team viel Zeit mit Arbeit außerhalb der Entwicklung?</strong>{" "}
            Support, Incidents, Meetings, Betriebsaufwand.
          </li>
        </ol>
        <p>
          Wenn all das sauber ist und der Durchsatz trotzdem hinter der Nachfrage zurückbleibt, kann
          eine Neueinstellung richtig sein. WIP-Limits ergänzen Neueinstellungen: Sie helfen zu unterscheiden, ob Ihnen Kapazität fehlt oder der Fluss der Arbeit gestört ist.
        </p>
      </>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

function ArticleBody() {
  return (
    <div className={styles.body}>
      <IntroSection />
      <ArticleToc post={SLUG} items={tocItems} />
      <SectionSymptoms />
      <SectionDecomposeT2M />
      <SectionLeadTimeCycleTime />
      <SectionWhereStuck />
      <SectionCountTasks />
      <SectionWip />
      <SectionLittlesLaw />
      <SectionWipLimits />
      <SectionIntroduceWipLimits />
      <SectionFullSystemView />
      <SectionClosing />
      <ArticleCta />
      <ArticleRelated />
    </div>
  );
}

export default function ArticlePage() {
  return (
    <BlogPostLayout
      slug={SLUG}
      eyebrow="Software-Delivery"
      lede={<ArticleLede />}
      faqItems={faqItems}
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
