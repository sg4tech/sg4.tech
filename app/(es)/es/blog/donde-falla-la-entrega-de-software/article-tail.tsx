// Tail half of the article — sections 9–10 + closing, plus the CTA and
// Related asides. Split out of article-content.tsx so each file stays under
// the 700-line ESLint cap.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_es_blog_metrics";

// Pillar -> spoke links come from the post registry so titles/descriptions
// never drift from the articles' own metadata.
const percentilesPost = getPostBySlug("prever-entregas-con-percentiles");
const vibecodingPost = getPostBySlug("mvp-de-vibecoding-estancado");
const finishingPost = getPostBySlug("ia-empezar-gratis-terminar-caro");

// Spokes first (continue reading), then the landings. Excludes any card that
// points to the same destination as `ArticleCta` below.
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
    href: pagePath("es", "yii2"),
    title: "Para equipos con código en Yii2",
    description:
      "La página dedicada al legacy: lanzamientos previsibles, controles de calidad y modernización sin pasar por defecto a reescribirlo todo."
  },
  {
    href: pagePath("es", "ai-vibecoding"),
    title: "El servicio: poner orden en un MVP de vibecoding",
    description:
      "Cómo añadir las capas del proceso de entrega que la IA no generó: reglas de arquitectura, controles en el pipeline, cobertura de tests."
  }
] as const;

function FailureModesList(): ReactNode {
  return (
    <ul>
      <li>
        Los desarrolladores ven a compañeros bloqueados en revisión o en QA, se niegan a «quedarse de
        brazos cruzados» mientras haya trabajo en el backlog y, sin decir nada, empiezan tickets nuevos
        de todas formas
      </li>
      <li>
        Un stakeholder necesita algo urgente, el engineering manager recibe presión desde arriba y el
        límite se suspende «solo por esta vez»
      </li>
      <li>
        La dirección pasa por la zona de ingeniería, ve a gente que no está tecleando a la vista y
        pregunta por qué el equipo no está aprovechado al máximo
      </li>
    </ul>
  );
}

function WipSequenceList(): ReactNode {
  return (
    <ul>
      <li>
        <strong>Haz explícito el objetivo.</strong>{" "}
        El objetivo es terminar el trabajo que ya se ha empezado; empezar más no suma nada. Repítelo con
        regularidad. Escríbelo donde todos lo vean. Lo que haga falta para que el mensaje cale.
      </li>
      <li>
        <strong>Explica por qué.</strong>{" "}
        Enséñale al equipo la ley de Little. Enséñale el diagnóstico de contar tareas por estado.
        Argumenta con las matemáticas del sistema en lugar de con la autoridad. La gente sigue mucho
        mejor las prácticas que entiende que las reglas que no entiende.
      </li>
      <li>
        <strong>Muestra ejemplos reales.</strong>{" "}
        Cita casos en los que introducir límites de WIP cambió el sistema de forma visible: tus propios
        equipos anteriores, artículos como este, historias de otros. Reconocer el patrón consigue casi
        todo lo que las exhortaciones no logran.
      </li>
      <li>
        <strong>Vuelve a centrar el foco, a menudo.</strong>{" "}
        Cada vez que alguien esté a punto de tomar una tarea nueva, pregúntale: «¿qué puedes hacer ahora
        mismo para que el trabajo que ya está en marcha llegue al final?». Ayudar a desbloquear a un
        compañero. Hacer una revisión. Responder una pregunta de QA. Resolver en pareja un conflicto de
        merge que lleva tiempo abierto. El instinto del equipo es tomar trabajo nuevo; la disciplina
        consiste en redirigir ese instinto.
      </li>
    </ul>
  );
}

export function SectionIntroduceWipLimits(): ReactNode {
  return (
    <>
      <h2 id="introduce-wip-limits">9. Cómo introducir límites de WIP sin que el equipo se rebele</h2>
      <p>
        Las matemáticas son una cosa. Convencer al sistema de adoptarlas es otra. Son muchísimos los
        equipos que han leído sobre límites de WIP, han intentado implantarlos y han abandonado el
        intento sin hacer ruido. Diría que la mayoría.
      </p>
      <p>
        Así es como suele fallar. Alguien, normalmente el engineering manager o un ingeniero senior que
        ha leído el libro de Kanban, anuncia: «a partir del lunes, el límite de WIP es de 5 por
        desarrollador, sin excepciones». Dos semanas después ha desaparecido. Los motivos de su muerte
        son previsibles:
      </p>
      <FailureModesList />
      <p>
        El error es introducir los límites de WIP como una regla, cuando lo que hace falta es un cambio
        de foco. A casi nadie, ni a los desarrolladores ni a la dirección, la regla en sí le resulta
        intuitiva. Visto desde fuera, decirle a un desarrollador que no tome trabajo nuevo parece
        irracional. Va contra la mentalidad de la escasez, en una cultura que premia empezar cosas.
      </p>
      <p>
        Por eso rara vez empiezo por el límite en sí. Empiezo por desplazar el foco del equipo de empezar
        trabajo a terminarlo. El límite se interioriza después del cambio de foco, y nunca antes.
      </p>
      <p>La secuencia que uso, más o menos:</p>
      <WipSequenceList />
      <p>
        Hay una historia, de un comentario en uno de mis propios artículos, que lo resume bien. Un equipo
        fijó un WIP = 5. Al principio los stakeholders lo vieron como un fracaso: demasiado pocas cosas
        visiblemente en marcha a la vez. En un trimestre había mejorado la velocidad de entrega, había
        mejorado la calidad, había mejorado la colaboración, había mejorado la previsibilidad. La visión
        de los stakeholders dio la vuelta. Dejaron de preguntar «¿por qué hay tan pocas cosas activas?»
        y empezaron a preguntar «¿por qué no usamos límites de WIP en otras partes de la empresa?».
      </p>
      <p>
        La mayor resistencia suele venir de la capa de gestión que confunde utilización con
        productividad. Si todo el equipo está «ocupado al 100&nbsp;%», la dirección se
        siente tranquila; si alguien está visiblemente entre dos tickets, saltan las alarmas. La verdad,
        incómoda, es que un equipo que funciona al 100&nbsp;% de utilización casi siempre entrega menos
        que uno que funciona al 80&nbsp;%. El margen libre en el sistema es lo que permite que el trabajo
        fluya.
      </p>
      <p>
        Los límites de WIP no tienen por qué seguir el Kanban al pie de la letra. No hace falta imprimir
        números en el tablero. Basta con que el equipo y sus stakeholders acuerden, en la práctica:
        terminamos antes de empezar.
      </p>
    </>
  );
}

export function SectionFullSystemView(): ReactNode {
  return (
    <>
      <h2 id="full-system-view">10. La visión completa del sistema: velocidad, valor y sostenibilidad de la entrega</h2>
      <p>
        La velocidad por sí sola no da la imagen completa. Cualquier marco de métricas de ingeniería que
        solo optimice la velocidad acabará rompiendo algo más importante.
      </p>
      <p>El modelo de diagnóstico completo tiene tres dimensiones:</p>
      <p>
        <strong>Velocidad del sistema</strong>: lo rápido que lanzamos los cambios.
      </p>
      <ul>
        <li>T2M (Time to Market): el tiempo total de la idea a producción</li>
        <li>Throughput: tareas terminadas por periodo</li>
        <li>Lead Time, Cycle Time, WIP: la descomposición que ya hemos recorrido</li>
      </ul>
      <p>
        <strong>Valor del producto</strong>: si lo que lanzamos es útil de verdad.
      </p>
      <ul>
        <li>Calidad: bugs abiertos, tasa de regresiones, tasa de incidencias</li>
        <li>NPS / satisfacción del cliente: si el usuario siente que el producto mejora</li>
      </ul>
      <p>
        <strong>Sostenibilidad del equipo</strong>: si el equipo puede seguir funcionando así.
      </p>
      <ul>
        <li>eNPS (Employee NPS): si el equipo recomendaría trabajar aquí</li>
        <li>Señales de burnout, tasa de rotación, carga de guardias</li>
      </ul>
      <p>
        Las tres importan, y a la vez, porque dos cualesquiera se pueden maquillar temporalmente a costa
        de la tercera. Puedes lanzar más rápido saltándote QA y quemando al equipo: la velocidad sube, y
        el valor y la sostenibilidad se hunden. Puedes pulir la calidad hasta la perfección y no lanzar
        nada: el valor por función sube, pero el equipo y la empresa se estancan. Puedes tener al equipo
        contento y sin hacer nada: la sostenibilidad es excelente y la velocidad es cero.
      </p>
      <p>
        Un proceso de entrega que funciona mantiene las tres dimensiones en tensión. Es lo bastante
        rápido para que el negocio pueda competir, lo bastante valioso para que los clientes se queden
        y lo bastante sostenible para que el equipo siga aquí el año que viene. Cuando los fundadores me
        preguntan cómo es «lo bueno», esta es la respuesta: tres números que se mueven más o menos a la
        par, en lugar de uno solo.
      </p>
      <p>
        El eNPS en particular se pasa por alto porque parece más blando que el resto. En realidad es
        el sistema de alerta temprana de todo lo demás. Un equipo cuyo eNPS baja empezará
        a perder a sus seniors en tres a seis meses. Los sustituirán juniors que necesitan tiempo para
        arrancar. El WIP subirá, el conocimiento se diluirá, la calidad bajará, los bugs se
        multiplicarán. La métrica que viste moverse primero era la que ignoraste.
      </p>
      <p>
        Casi todas se pueden calcular con Jira y una encuesta de clima de RR.&nbsp;HH. Ninguna exige una
        herramienta especial. Lo que exigen es la voluntad de mirar el sistema con honestidad, en sus
        tres dimensiones a la vez.
      </p>
    </>
  );
}

export function SectionClosing(): ReactNode {
  return (
    <>
      <h2 id="closing">Cuando las métricas se convierten en una herramienta de diagnóstico</h2>
      <p>
        Las métricas no son nuevas. Las ideas tampoco: la{" "}
        <a
          href="https://en.wikipedia.org/wiki/Theory_of_constraints"
          target="_blank"
          rel="noreferrer"
        >
          teoría de restricciones
        </a>{" "}
        (años ochenta), el{" "}
        <a
          href="https://en.wikipedia.org/wiki/Toyota_Production_System"
          target="_blank"
          rel="noreferrer"
        >
          Sistema de Producción de Toyota
        </a>{" "}
        (años cincuenta), el{" "}
        <a
          href="https://en.wikipedia.org/wiki/Kanban_(development)"
          target="_blank"
          rel="noreferrer"
        >
          método Kanban para software
        </a>{" "}
        (David Anderson, años dos mil) y la{" "}
        <a
          href="https://en.wikipedia.org/wiki/Little%27s_law"
          target="_blank"
          rel="noreferrer"
        >
          ley de Little
        </a>{" "}
        (1961) describen aspectos distintos del mismo problema de fondo: el trabajo se mueve a través de
        sistemas, y los sistemas se ralentizan cuando el flujo se rompe. Lo nuevo es si tu equipo las usa
        como informe o como diagnóstico. Un informe te dice que algo está roto. Un diagnóstico te dice
        dónde.
      </p>
      <p>
        Cuando la entrega es lenta, la tentación es reaccionar al informe: contratar ingenieros, añadir
        procesos, instalar una herramienta nueva. La reacción parece movimiento. Normalmente se queda en
        eso. El progreso empieza cuando las métricas se vuelven lo bastante concretas para señalar la
        restricción real.
      </p>
      <p>
        Si tienes delante un tablero con 60–80 tareas activas y un equipo de seis personas, cuenta las
        tareas por estado. Mide el Lead Time y el Cycle Time. Mira la relación entre el WIP y el
        throughput. Las matemáticas del sistema harán la mayor parte del trabajo.
      </p>
    </>
  );
}

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="donde-falla-la-entrega-de-software" heading="Una segunda mirada a tu proceso de entrega" href={CTA_HREF}>
      La primera llamada de diagnóstico dura 30 minutos, por Telegram. Cuéntame los síntomas y te ayudo
      a localizar el verdadero cuello de botella.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return (
    <BlogRelated
      post="donde-falla-la-entrega-de-software"
      links={relatedLinks}
      intro="Si estos síntomas se parecen a los tuyos, aquí tienes por dónde seguir según cómo sea tu código."
    />
  );
}
