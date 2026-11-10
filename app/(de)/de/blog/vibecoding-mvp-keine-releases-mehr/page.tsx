import type { Metadata } from "next";
import { BlogPostLayout } from "../../../../components/BlogPostLayout";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import {
  ArticleLede,
  IntroSection,
  SectionCase,
  SectionFailedFixes,
  SectionJunior,
  SectionMapping,
  SectionRestart,
  SectionStall
} from "./article-content";
import { ArticleCta, ArticleRelated } from "./article-tail";
import styles from "../../../../views/posts/vibecoded-mvp-stopped-shipping.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "vibecoding-mvp-keine-releases-mehr";

// On-page H1 differs from the registry title on purpose: that title is the
// query-matched SERP/index-card title; the H1 carries the essay's voice.
// Article.headline mirrors the H1 so the schema matches the rendered page.
const H1_TITLE = "Ihr Vibecoding-MVP schafft keine Releases mehr – wie jede von Juniors gebaute Codebasis vor ihm";

// FAQ items must not duplicate body content. The schema `answer` string
// mirrors the rendered `answerNode` word for word so an AI snippet matches
// the page.
const faqItems = [
  {
    question: "Muss ich das MVP von Grund auf neu schreiben?",
    answer:
      "Mit ziemlicher Sicherheit nicht. Von Juniors gebaute Codebasen werden seit Jahrzehnten gerettet, ohne bei null anzufangen, und die Methode lässt sich direkt übertragen: stabilisieren, das Sicherheitsnetz aufbauen und dann die schlimmsten Teile Stück für Stück neu schreiben, mit dem Netz darunter, das auffängt, was dabei kaputtgeht. Ein Neuschreiben wirft das einzige Kapital weg, das Sie wirklich haben, nämlich funktionierenden Code, den Nutzer jeden Tag verwenden, und startet denselben Prozess mit denselben fehlenden Praktiken neu.",
    answerNode: (
      <p>
        Mit ziemlicher Sicherheit nicht. Von Juniors gebaute Codebasen werden seit Jahrzehnten
        gerettet, ohne bei null anzufangen, und die Methode lässt sich direkt übertragen:
        stabilisieren, das Sicherheitsnetz aufbauen und dann die schlimmsten Teile Stück für Stück neu
        schreiben, mit dem Netz darunter, das auffängt, was dabei kaputtgeht. Ein Neuschreiben wirft
        das einzige Kapital weg, das Sie wirklich haben, nämlich funktionierenden Code, den Nutzer
        jeden Tag verwenden, und startet denselben Prozess mit denselben fehlenden Praktiken neu.
      </p>
    )
  },
  {
    question: "Sind das einfach technische Schulden?",
    answer:
      "Es ist etwas Spezifischeres. Technische Schulden setzen voraus, dass jemand den Zielkonflikt verstanden und sich bewusst für Tempo entschieden hat. Eine KI-generierte Codebasis enthält Entscheidungen, die niemand bewusst getroffen hat und niemand erklären kann. Die Schuld liegt im Verständnis. Deshalb beginnt die Lösung damit, die Codebasis beobachtbar und testbar zu machen; das Aufräumen kommt danach.",
    answerNode: (
      <p>
        Es ist etwas Spezifischeres. Technische Schulden setzen voraus, dass jemand den Zielkonflikt
        verstanden und sich bewusst für Tempo entschieden hat. Eine KI-generierte Codebasis enthält
        Entscheidungen, die niemand bewusst getroffen hat und niemand erklären kann. Die Schuld liegt
        im <em>Verständnis</em>. Deshalb beginnt die Lösung damit, die Codebasis beobachtbar und
        testbar zu machen; das Aufräumen kommt danach.
      </p>
    )
  },
  {
    question: "Kann ich weiter mit KI entwickeln, während das in Ordnung gebracht wird?",
    answer:
      "Ja, genau darum geht es. Das Ziel ist, Review, Tests und Prüfschranken um den Junior herum aufzubauen, während die Tastatur bleibt, wo sie ist. Sie liefern die ganze Zeit weiter mit KI aus; die Ergebnisse des Agenten laufen einfach durch dieselben Prüfungen wie die eines Menschen. Ich entwickle selbst täglich mit KI in genau so einem Aufbau.",
    answerNode: (
      <p>
        Ja, genau darum geht es. Das Ziel ist, Review, Tests und Prüfschranken um den Junior herum
        aufzubauen, während die Tastatur bleibt, wo sie ist. Sie liefern die ganze Zeit weiter mit KI
        aus; die Ergebnisse des Agenten laufen einfach durch dieselben Prüfungen wie die eines
        Menschen. Ich entwickle selbst täglich mit KI in genau so einem Aufbau.
      </p>
    )
  },
  {
    question: "Kann KI die Codebasis reparieren, die sie kaputt gemacht hat?",
    answer:
      "Teilweise, und nur innerhalb von Leitplanken. Agenten sind wirklich gut in der Wartungsarbeit, die eine KI-generierte Codebasis braucht: Tests schreiben, Fehlerbehandlung ergänzen, mechanische Refactorings. Voraussetzung ist eine Pipeline, die ihre Ergebnisse prüft. Einen Agenten ohne Tests und ohne Prüfschranken zu bitten, „die Codebasis aufzuräumen“, heißt, denselben Junior seine eigenen Hausaufgaben korrigieren zu lassen.",
    answerNode: (
      <p>
        Teilweise, und nur innerhalb von Leitplanken. Agenten sind wirklich gut in der Wartungsarbeit,
        die eine KI-generierte Codebasis braucht: Tests schreiben, Fehlerbehandlung ergänzen,
        mechanische Refactorings. Voraussetzung ist eine Pipeline, die ihre Ergebnisse prüft. Einen
        Agenten ohne Tests und ohne Prüfschranken zu bitten, „die Codebasis aufzuräumen“, heißt,
        denselben Junior seine eigenen Hausaufgaben korrigieren zu lassen.
      </p>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

function ArticleBody() {
  return (
    <div className={styles.body}>
      <IntroSection />
      <SectionStall />
      <SectionJunior />
      <SectionCase />
      <SectionMapping />
      <SectionFailedFixes />
      <SectionRestart />
      <ArticleCta />
      <ArticleRelated />
    </div>
  );
}

export default function ArticlePage() {
  return (
    <BlogPostLayout
      slug={SLUG}
      eyebrow="KI-Vibecoding"
      lede={<ArticleLede />}
      faqItems={faqItems}
      headline={H1_TITLE}
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
