// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: an agent is a teammate that shines on the
// periphery and fails at the core → for a founder that line is forgiving → in a
// company the real blocker is access, not capability → here is what the agent is
// actually good at, and what it isn't → the rule underneath it all is the cost
// of error, which quietly changes the engineer's job.

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/ai-coding-agent-periphery-core.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const STARTING_CHEAP_HREF = getPostPathInLocale("ai-made-starting-free-finishing-expensive", "es");
const RESCUE_HREF = pagePath("es", "ai-vibecoding");

export function ArticleLede(): ReactNode {
  return (
    <>
      Los agentes de IA para programar brillan en unas tareas y son peligrosos en otras. Dales la
      periferia y deja el núcleo a las personas: aquí va dónde se ganan su sitio y dónde no.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Un agente de IA puede encontrar la causa de un bug en un código que nadie ha tocado en un año
        y, esa misma tarde, colar con total aplomo otro que tumba el checkout, si le dejas acercarse
        al núcleo. La distancia entre esos dos momentos es la misma a cualquier escala. Un fundador
        en solitario puede permitirse esa distancia; dentro de una empresa, lo decide todo.
      </p>
      <p>
        Para un fundador, casi todo esto ya está resuelto. Durante el último año he visto a personas
        sin una formación seria en ingeniería construir y hacer crecer productos reales por su cuenta:
        un CRM para una escuela presencial, una herramienta para analistas de negocio, automatización
        de marketing para su propio uso.{" "}
        <Link href={STARTING_CHEAP_HREF}>El coste de entrada para construir se ha desplomado</Link>; puedes
        montar en una tarde la recogida de métricas desde Jira y GitLab.
      </p>
      <p>
        Los problemas siguen ahí: los agentes pierden el contexto, generan código extraño y algunos
        proyectos acaban en el caos. Tiene solución, y es buena parte de mi trabajo; sobre{" "}
        <Link href={RESCUE_HREF}>cómo rescatar un proyecto así</Link> escribí aparte. Esa es la
        versión del fundador. El problema más difícil y menos explorado está un nivel más arriba,
        dentro de una empresa, y de eso trata este artículo.
      </p>
    </>
  );
}

export function SectionBarrier(): ReactNode {
  return (
    <>
      <h2 id="barrier">Dentro de una empresa, el verdadero obstáculo está fuera del agente</h2>
      <p>
        A escala de empresa, el agente es igual de capaz; lo difícil es conseguir permiso para usarlo.
        En las startups la IA ya es una herramienta estándar; dentro de una empresa, su adopción se
        queda semanas atascada en aprobaciones: revisiones de seguridad, qué datos pueden llegar al
        modelo, quién es responsable de la plataforma, cómo se gobiernan los agentes.
      </p>
      <p>
        La idea que lo desbloquea: nada tiene que salir del edificio. Puedes tener una API compatible
        con OpenAI funcionando por completo dentro de tu propio perímetro: un modelo de código abierto
        como Qwen servido con LiteLLM y vLLM, accesible solo a través de la VPN corporativa, con un
        agente como Opencode o Hermes integrado en el IDE y servidores MCP que lo conectan con Jira,
        GitLab, Confluence y el resto de tus herramientas internas. Funciona con las credenciales del
        propio desarrollador, solo toca lo que ese desarrollador ya puede tocar y registra cada acción
        para auditoría. La seguridad deja de ser el obstáculo. Montar todo el stack es un tema aparte,
        pero ya no es la barrera que era hace un año.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-coding-agent-periphery-core/enterprise-ai-perimeter.webp"
          alt="IA corporativa dentro del perímetro de la empresa: el IDE del desarrollador alimenta a un agente de IA, que se conecta a una API compatible con OpenAI y a un modelo de código abierto autoalojado, todo ello enlazado con sistemas internos como GitLab, Jira, Confluence y Grafana, sin APIs externas, sin privilegios adicionales y con un registro de auditoría completo."
          width={1372}
          height={1374}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Dentro del perímetro: el agente funciona en infraestructura interna, con los accesos del
          propio desarrollador y un registro de auditoría completo. Nada sale de la empresa.
        </FigureCaption>
      </figure>
      <p>
        Una vez dentro, ya sea en manos de un fundador o en la VPN corporativa, la pregunta es la
        misma: ¿qué le das exactamente?
      </p>
    </>
  );
}

export function SectionWhatWorks(): ReactNode {
  return (
    <>
      <h2 id="what-works">En qué son buenos los agentes de IA para programar</h2>
      <p>
        Conectado a tu código, tu documentación, tus tareas, tus tests, tus logs y tus métricas, ya sea
        Cursor, Claude Code o un agente interno autoalojado, empieza a entender tu proyecto. Aquí es
        donde se gana su sitio.
      </p>
      <ul>
        <li>
          <strong>Ponerse al día con código desconocido</strong>{" "}
          — investigar código que nunca has tocado, encontrar la causa de un bug en una funcionalidad
          de la que no sabes nada, responder la pregunta de un analista sobre una función de la que
          nunca habías oído hablar.
        </li>
        <li>
          <strong>Apoyo al desarrollo</strong>{" "}
          — las herramientas y automatizaciones para las que nunca había tiempo: recogida de métricas,
          exportación de datos desde Jira y GitLab, skills para agentes que cubren trabajo repetitivo,
          como las integraciones estándar. Queda fuera el producto principal, donde la calidad del
          código es crítica.
        </li>
        <li>
          <strong>Artefactos alrededor del código</strong>{" "}
          — documentación, diagramas UML, tests automáticos, casos de TestRail, presentaciones.
        </li>
        <li>
          <strong>Revisiones</strong>{" "}
          — de código, de requisitos y de especificaciones. Por ahora, mitad y mitad: a veces puro
          ruido, a veces un hallazgo realmente útil.
        </li>
      </ul>
    </>
  );
}

export function SectionWhatNot(): ReactNode {
  return (
    <>
      <h2 id="what-not">Lo que no debe quedar en manos de un agente de IA</h2>
      <p>
        <strong>El desarrollo de principio a fin de cualquier cosa importante.</strong>{" "}
        Dinero, blockchain, sistemas de alta carga, la arquitectura central: cualquier sitio donde un
        error es fácil de cometer y caro de deshacer. En una startup, encargar una función entera al
        agente ya funciona en parte; en producción, con tráfico real y dinero real en juego, todavía
        no es buena idea. ¿Acelera el trabajo? Sí. ¿Sustituye a un desarrollador senior? No.
      </p>
    </>
  );
}

export function SectionRule(): ReactNode {
  return (
    <>
      <h2 id="rule">La regla de la periferia y el núcleo</h2>
      <p>
        El patrón es sencillo. El agente cubre la <strong>periferia</strong> del desarrollo: la rutina,
        las tareas de apoyo, moverse por código desconocido, los artefactos; todo lo que tiene mucho
        volumen y un coste de error relativamente bajo. El <strong>núcleo</strong>, donde un error se
        mide en dinero y en usuarios, se queda en manos de personas.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-coding-agent-periphery-core/periphery-vs-core.webp"
          alt="Diagrama radial: en el centro, un núcleo a cargo de personas con la etiqueta «engineering decisions» (decisiones de ingeniería), rodeado de la periferia que cubre un agente de IA: depuración, documentación, tests, revisiones, requisitos, integraciones estándar, automatización y presentaciones."
          width={1200}
          height={1200}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          El agente trabaja en la periferia; el núcleo humano es la decisión de ingeniería.
        </FigureCaption>
      </figure>
      <p>
        Los ingenieros pasaban horas buscando información y peleándose con la rutina. Ahora lo
        principal de su trabajo es tomar la decisión de ingeniería correcta.
      </p>
    </>
  );
}
