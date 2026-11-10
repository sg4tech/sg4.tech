import type { Metadata } from "next";
import { BlogPostLayout } from "../../../../components/BlogPostLayout";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import {
  ArticleLede,
  IntroSection,
  SectionAverageComfort,
  SectionGapDiagnosis,
  SectionMedianTypical,
  SectionPickPercentile,
  SectionPredictability
} from "./article-content";
import { ArticleCta, ArticleRelated } from "./article-tail";
import styles from "../../../../views/posts/forecast-delivery-with-percentiles.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "lieferprognose-mit-perzentilen";

// FAQ items must not duplicate body content. The schema `answer` string
// mirrors the rendered `answerNode` word for word (dl flattened to
// "term: definition." prose) so an AI snippet matches the page.
const faqItems = [
  {
    question: "Warum ist die durchschnittliche Lead Time eine irreführende Kennzahl?",
    answer:
      "Ein paar langsame Ausreißer ziehen das arithmetische Mittel nach oben, sodass der Durchschnitt deutlich über dem liegt, was die meisten Aufgaben tatsächlich brauchen. Er beschreibt ein System, das es nicht gibt: Die meiste Arbeit geht schneller, eine Handvoll Aufgaben dauert viel länger. Eine Prognose auf dieser Basis liegt deshalb in beide Richtungen daneben.",
    answerNode: (
      <p>
        Ein paar langsame Ausreißer ziehen das arithmetische Mittel nach oben, sodass der
        Durchschnitt deutlich über dem liegt, was die meisten Aufgaben tatsächlich brauchen. Er
        beschreibt ein System, das es nicht gibt: Die meiste Arbeit geht schneller, eine Handvoll
        Aufgaben dauert viel länger. Eine Prognose auf dieser Basis liegt deshalb in beide Richtungen
        daneben.
      </p>
    )
  },
  {
    question: "Was ist der Unterschied zwischen Median und durchschnittlicher Lead Time?",
    answer:
      "Median: Die typische Aufgabe in der Mitte; die Hälfte ist schneller fertig, die Hälfte langsamer. Durchschnitt: Das arithmetische Mittel, das ein langer Schwanz von Nachzüglern stark verzerren kann. Liegt der Mittelwert weit über dem Median, haben Sie eine große Streuung und ein Problem mit Warteschlangen; liegen beide nah beieinander, ist das System stabil.",
    answerNode: (
      <>
        <dl>
          <dt>Median</dt>
          <dd>Die typische Aufgabe in der Mitte; die Hälfte ist schneller fertig, die Hälfte langsamer.</dd>
          <dt>Durchschnitt</dt>
          <dd>Das arithmetische Mittel, das ein langer Schwanz von Nachzüglern stark verzerren kann.</dd>
        </dl>
        <p>
          Liegt der Mittelwert weit über dem Median, haben Sie eine große Streuung und ein Problem mit
          Warteschlangen; liegen beide nah beieinander, ist das System stabil.
        </p>
      </>
    )
  },
  {
    question: "Wie nenne ich einen Liefertermin, den ich auch wirklich halte?",
    answer:
      "Leiten Sie ihn aus einem Perzentil (p85/p95) der Verteilung Ihrer Cycle Time ab, statt aus einem Durchschnitt nach Bauchgefühl. Nach außen nennen Sie weiterhin ein einziges, klares Datum, und zwar das, das Sie laut System auch halten. Zugesagt wird das Datum; die Wahrscheinlichkeit bleibt Ihr Werkzeug.",
    answerNode: (
      <>
        <p>
          Leiten Sie ihn aus einem Perzentil (p85/p95) der Verteilung Ihrer Cycle Time ab, statt aus
          einem Durchschnitt nach Bauchgefühl. Nach außen nennen Sie weiterhin ein einziges, klares
          Datum, und zwar das, das Sie laut System auch halten.
        </p>
        <p className={styles.faqHighlight}>Zugesagt wird das Datum; die Wahrscheinlichkeit bleibt Ihr Werkzeug.</p>
      </>
    )
  },
  {
    question: "Wo sehe ich Median und Perzentile?",
    answer:
      "Das Control Chart in Jira und Streudiagramme der Cycle Time zeigen Mittelwert, Median und Perzentilbänder aus Daten, die Sie bereits haben, ganz ohne manuelle Zeiterfassung. Die meisten Tracker mit einem Modul für Flow-Metriken oder Analysen bieten dasselbe.",
    answerNode: (
      <p>
        Das Control Chart in Jira und Streudiagramme der Cycle Time zeigen Mittelwert, Median und
        Perzentilbänder aus Daten, die Sie bereits haben, ganz ohne manuelle Zeiterfassung. Die
        meisten Tracker mit einem Modul für Flow-Metriken oder Analysen bieten dasselbe.
      </p>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

function ArticleBody() {
  return (
    <div className={styles.body}>
      <IntroSection />
      <SectionAverageComfort />
      <SectionMedianTypical />
      <SectionGapDiagnosis />
      <SectionPickPercentile />
      <SectionPredictability />
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
      partOf="engpaesse-in-der-entwicklung-finden"
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
