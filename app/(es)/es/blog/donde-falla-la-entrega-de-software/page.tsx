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
const SLUG: PostSlug = "donde-falla-la-entrega-de-software";

// Mirrors the section h2s (ids and text).
const tocItems = [
  { id: "symptoms", title: "1. Síntomas de una entrega lenta y el primer reflejo equivocado" },
  { id: "decompose-t2m", title: "2. Divide el T2M: Discovery y Lead Time son problemas distintos" },
  { id: "lead-time-cycle-time", title: "3. Lead Time = Espera + Cycle Time" },
  { id: "where-stuck", title: "4. Dónde se atasca de verdad el trabajo y por qué el tiempo por estado puede engañar" },
  { id: "count-tasks", title: "5. Cómo encontrar cuellos de botella sin medir tiempos" },
  { id: "wip", title: "6. Trabajo en curso (WIP): la variable que controla la velocidad de entrega" },
  { id: "littles-law", title: "7. La ley de Little: Lead Time = WIP / Throughput" },
  { id: "wip-limits", title: "8. Límites de WIP: la palanca que arregla a la mayoría de los equipos lentos" },
  { id: "introduce-wip-limits", title: "9. Cómo introducir límites de WIP sin que el equipo se rebele" },
  { id: "full-system-view", title: "10. La visión completa del sistema: velocidad, valor y sostenibilidad de la entrega" },
  { id: "closing", title: "Cuando las métricas se convierten en una herramienta de diagnóstico" }
];

// FAQ items must not duplicate body content. Paraphrased FAQ entries reduce
// the citation-trust signal for AI engines that index the FAQPage schema.
// Schema text mirrors the rendered answerNode word-for-word (with dl dt/dd
// flattened to "term: definition." prose).
const faqItems = [
  {
    question: "¿Qué diferencia hay entre Lead Time y Cycle Time?",
    answer:
      "Lead Time: El tiempo total que una tarea pasa dentro del desarrollo, desde «lista para desarrollo» hasta «en producción». Incluye la espera. Cycle Time: Solo la parte de trabajo activo, desde «alguien empieza de verdad a trabajar en ella» hasta «terminada». Excluye la espera. La diferencia entre los dos es la profundidad de la cola.",
    answerNode: (
      <>
        <dl>
          <dt>Lead Time</dt>
          <dd>
            El tiempo total que una tarea pasa dentro del desarrollo, desde «lista para desarrollo»
            hasta «en producción». Incluye la espera.
          </dd>
          <dt>Cycle Time</dt>
          <dd>
            Solo la parte de trabajo activo, desde «alguien empieza de verdad a trabajar en ella» hasta «terminada».
            Excluye la espera.
          </dd>
        </dl>
        <p>La diferencia entre los dos es la profundidad de la cola.</p>
      </>
    )
  },
  {
    question: "¿Qué límite de WIP es razonable para un equipo de N personas?",
    answer:
      "Las recomendaciones del sector van de 1 a 3 tareas por desarrollador; los equipos de desarrollo de software suelen quedarse en la parte baja: 1–2 por desarrollador. Equipo de 6 → unas 6–12 tareas activas en todo el sistema, no 80. El número exacto importa menos que la disciplina de tener uno y hacerlo cumplir: la mayoría de los equipos encuentran su nivel empezando con un límite estricto y relajándolo si el trabajo se atasca una y otra vez por motivos ajenos al WIP.",
    answerNode: (
      <>
        <p>
          Las recomendaciones del sector van de <strong>1 a 3 tareas por desarrollador</strong>; los
          equipos de desarrollo de software suelen quedarse en la parte baja:{" "}
          <strong>1–2 por desarrollador</strong>.
        </p>
        <p className={styles.faqHighlight}>
          Equipo de 6 → unas 6–12 tareas activas en todo el sistema, no 80.
        </p>
        <p>
          El número exacto importa menos que la disciplina de tener uno y hacerlo cumplir: la mayoría
          de los equipos encuentran su nivel empezando con un límite estricto y relajándolo si el
          trabajo se atasca una y otra vez por motivos ajenos al WIP.
        </p>
      </>
    )
  },
  {
    question: "¿En qué se diferencia esto de la capacidad del sprint en Scrum?",
    answer:
      "Capacidad del sprint: Cuánto trabajo se compromete a hacer el equipo en un periodo de dos semanas. Límite de WIP: Cuánto trabajo hay en marcha en un momento dado, sea cual sea el sprint. Un equipo puede tener un compromiso de sprint sensato y aun así llevar más de 60 tareas en paralelo: la capacidad del sprint no dice nada sobre si el trabajo se termina o solo se empieza. Los límites de WIP son independientes de la planificación del sprint y suelen resolver problemas a los que la planificación del sprint por sí sola no llega.",
    answerNode: (
      <>
        <dl>
          <dt>Capacidad del sprint</dt>
          <dd>Cuánto trabajo se compromete a hacer el equipo en un periodo de dos semanas.</dd>
          <dt>Límite de WIP</dt>
          <dd>Cuánto trabajo hay en marcha en un momento dado, sea cual sea el sprint.</dd>
        </dl>
        <p>
          Un equipo puede tener un compromiso de sprint sensato y aun así llevar más de 60 tareas en
          paralelo: la capacidad del sprint no dice nada sobre si el trabajo se <em>termina</em> o solo
          se <em>empieza</em>. Los límites de WIP son independientes de la planificación del sprint y
          suelen resolver problemas a los que la planificación del sprint por sí sola no llega.
        </p>
      </>
    )
  },
  {
    question: "¿Y si nuestro throughput es realmente demasiado bajo?",
    answer:
      "A veces el throughput sí es la restricción. Si el WIP ya está bajo control y el Lead Time sigue alto, puede que el equipo no tenga capacidad suficiente para la demanda. Antes de contratar, comprueba tres cosas: ¿Las tareas son demasiado grandes? ¿La ejecución en sí es lenta? ¿El equipo dedica mucho tiempo a trabajo ajeno a la entrega? Soporte, incidencias, reuniones, carga operativa. Si todo eso está en orden y el throughput sigue por debajo de la demanda, contratar puede ser la decisión correcta. Los límites de WIP no sustituyen a la contratación: ayudan a distinguir un problema de capacidad de un problema de flujo.",
    answerNode: (
      <>
        <p>
          A veces el throughput sí es la restricción. Si el WIP ya está bajo control y el Lead Time
          sigue alto, puede que el equipo no tenga capacidad suficiente para la demanda.
        </p>
        <p>Antes de contratar, comprueba tres cosas:</p>
        <ol>
          <li>
            <strong>¿Las tareas son demasiado grandes?</strong>
          </li>
          <li>
            <strong>¿La ejecución en sí es lenta?</strong>
          </li>
          <li>
            <strong>¿El equipo dedica mucho tiempo a trabajo ajeno a la entrega?</strong> Soporte,
            incidencias, reuniones, carga operativa.
          </li>
        </ol>
        <p>
          Si todo eso está en orden y el throughput sigue por debajo de la demanda, contratar puede ser
          la decisión correcta. Los límites de WIP no sustituyen a la contratación: ayudan a distinguir
          un problema de capacidad de un problema de flujo.
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
      <ArticleToc post="donde-falla-la-entrega-de-software" items={tocItems} />
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
      eyebrow="Entrega de software"
      lede={<ArticleLede />}
      faqItems={faqItems}
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
