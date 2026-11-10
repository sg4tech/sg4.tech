// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: starting got cheap while finishing didn't →
// the cost of work is now visible → the old metrics still apply → the losses
// come from waiting and context (Little's Law covers agents too) → the fix is
// finishing discipline → the constraint has moved off code production.

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/ai-made-starting-free-finishing-expensive.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const PILLAR_HREF = getPostPathInLocale("diagnose-broken-engineering-delivery", "es");
const RESCUE_HREF = pagePath("es", "ai-vibecoding");
const INTERRUPTED_WORK_HREF = "https://ics.uci.edu/~gmark/chi08-mark.pdf";
const LONG_CONTEXT_STUDY_HREF = "https://arxiv.org/html/2512.04307v1";

export function ArticleLede(): ReactNode {
  return (
    <>
      Los equipos con agentes de IA empiezan más trabajo que nunca y entregan más o menos lo mismo.
      Empezar se ha abaratado; verificar, integrar y lanzar cuesta lo mismo que antes. La salida es una
      disciplina antigua: limitar el trabajo en curso y contar solo el trabajo terminado.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Empezar un trabajo nuevo nunca había sido tan barato. Un hilo más con el agente. Una idea más.
        Un experimento más corriendo en segundo plano. El coste de <em>empezar</em> algo se ha
        desplomado: un agente de IA acepta cualquier tarea que le des, al instante, a cualquier hora.
      </p>
      <p>
        Lo que no se ha desplomado es el coste de <em>terminar</em>. Verificar, integrar, revisar,
        desplegar: llevar el trabajo al punto en que funciona en producción y aporta valor cuesta casi
        exactamente lo mismo que antes.
      </p>
      <p>
        Así que los equipos empiezan más que nunca y entregan más o menos lo mismo. Los tableros se
        llenan de trabajo a medias. Los agentes trabajan todo el día, la factura de tokens crece y, por
        algún motivo, las notas de la versión no son más largas que las del trimestre pasado.
      </p>
      <p>
        Es un viejo problema de flujo que las herramientas nuevas amplifican, así que unos prompts mejores
        no lo arreglarán. La solución también es vieja:{" "}
        <strong>
          limitar el trabajo en curso y optimizar para terminar. Gana quien más
          termina, y quien más empieza se queda con el tablero lleno.
        </strong>{" "}
        El resto del artículo defiende esta idea: primero con dinero y después con mecánica.
      </p>
    </>
  );
}

export function SectionCostVisible(): ReactNode {
  return (
    <>
      <h2 id="cost">Cuánto cuesta de verdad el trabajo con IA y cómo contarlo</h2>
      <p>
        Durante décadas, el coste de una tarea era invisible: quedaba enterrado en los salarios fijos.
        Un mes de un desarrollador cuesta lo mismo tanto si una función llevó tres intentos como treinta,
        así que nadie contaba los intentos. Con los agentes de IA, cada acción tiene un precio, y las
        cuentas se vuelven muy visibles muy rápido.
      </p>
      <p>
        Así se ve en la práctica. Un agente hizo 40 intentos, gastó 15 dólares en tokens y aun así no
        entregó una función que funcionara. Ahora multiplícalo por todas las tareas que tu equipo lleva
        en un mes. El ciclo que hay detrás de esa factura lo conoce cualquiera que use agentes en
        trabajo real: un intento. Casi funciona. Otro intento. Algo mejor. Luego algo se rompe, el
        contexto se pierde, empiezas a arreglar y va a peor. En algún momento lo ves con claridad: una
        «tarea» rara vez es una sola acción. Son decenas de iteraciones (intentos, correcciones,
        callejones sin salida), y las pagas todas, también las que tiras.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-made-starting-free-finishing-expensive/ai-agent-pnl.webp"
          alt="Cuenta de resultados de un agente de IA dibujada a mano: producción, cero funciones que funcionen; coste, 15 dólares en tokens e infraestructura; resultado, menos 15 dólares y ninguna función entregada"
          width={1200}
          height={1200}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          La cuenta de resultados de una tarea fallida: cada intento facturado, nada en producción.
        </FigureCaption>
      </figure>
      <p>Para saber cuánto te cuesta de verdad la entrega, solo tienes que contar tres cosas:</p>
      <ul>
        <li>cuántas tareas llegaron a un resultado que funciona,</li>
        <li>cuántas iteraciones hicieron falta,</li>
        <li>y cuánto costaron esas iteraciones.</li>
      </ul>
      <p>
        Divide el gasto total entre las tareas terminadas y obtienes el número que importa: el{" "}
        <strong>coste por tarea con éxito</strong>, lo que te cuesta de verdad una pieza de trabajo{" "}
        <em>terminada</em>.
      </p>
      <p>
        La recompensa es que optimizar deja de ser adivinar. ¿El prompt nuevo ayuda de verdad? ¿Los
        tests alrededor del agente compensan lo que cuestan? ¿Sirvió de algo ese cambio en el proceso?
        Subjetivamente, todo «parece ir mejor» siempre. Al número le da igual cómo parezca: después de
        cualquier cambio, el coste por tarea con éxito o bajó o no bajó.
      </p>
      <p>
        Una advertencia antes de ponerte a optimizarlo. Si observas a equipos trabajando con esta
        métrica, verás que van directos al precio de los tokens y el nivel del modelo, y se les
        escapa la verdadera fuga.{" "}
        <strong>
          El objetivo es conseguir el máximo de resultados con éxito por cada dólar gastado; ahorrar
          tokens es secundario.
        </strong>{" "}
        Y lo que más pesa en el coste por tarea <em>terminada</em>{" "}
        es todo el trabajo que empezaste y nunca terminaste, mucho más que el precio de una iteración.
      </p>
    </>
  );
}

function MetricsTable(): ReactNode {
  return (
    <table className={styles.mappingTable}>
      <thead>
        <tr>
          <th>Métrica</th>
          <th>Qué cambia con los agentes de IA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Throughput: tareas entregadas por periodo</th>
          <td>Nada. Lo que cuenta es lo que llega a producción.</td>
        </tr>
        <tr>
          <th>Time to Market: de la idea al resultado que funciona</th>
          <td>Nada. El reloj sigue corriendo hasta producción.</td>
        </tr>
        <tr>
          <th>Calidad: trabajo que se puede usar sin rehacerlo</th>
          <td>Nada. Lo que te sigue comiendo es rehacer el trabajo.</td>
        </tr>
        <tr>
          <th>NPS: si el resultado aporta valor</th>
          <td>Nada. El valor sigue siendo lo que importa.</td>
        </tr>
        <tr>
          <th>Coste por tarea con éxito: gasto total ÷ tareas terminadas</th>
          <td>
            <strong>
              Todo. Antes era invisible, enterrado en los salarios. Ahora cada tarea trae su factura.
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionMetricsSurvive(): ReactNode {
  return (
    <>
      <h2 id="metrics">Tus métricas de entrega siguen valiendo para el trabajo con IA</h2>
      <p>
        Si has leído <Link href={PILLAR_HREF}>cómo diagnostico los procesos de entrega</Link>, el marco
        aquí es el mismo. Todas las métricas que describían a un equipo humano siguen valiendo. Solo ha
        cambiado una cosa de verdad:
      </p>
      <MetricsTable />
      <p>
        Puedes entregar rápido pero caro, barato pero ahogado en retrabajo, o mucho pero nada que los
        usuarios necesiten, y las cuentas dejan de cuadrar sin hacer ruido.
      </p>
      <p>El sistema de medición ha sobrevivido. Lo que ha cambiado es dónde se acumula el trabajo.</p>
    </>
  );
}

export function SectionParallelTasks(): ReactNode {
  return (
    <>
      <h2 id="parallel-tasks">Por qué tu agente de IA rinde peor con cada tarea en paralelo</h2>
      <p>Dos mecanismos se comen las ganancias. Los dos son antiguos; los dos se han amplificado.</p>
      <p>
        <strong>El primero es la espera.</strong>{" "}
        En la mayoría de los sistemas, casi ninguna tarea está en manos de nadie: están esperando. Mira
        ahora un proceso de trabajo con IA: tú esperas al agente (generación, tests, despliegue) y luego
        el agente te espera a ti (una respuesta, una decisión, la siguiente instrucción). Mientras una
        tarea espera, cambias a otra; al fin y al cabo, empezarla es casi gratis. Cada tarea que añades
        alarga la cola para todas. A la ley de Little (el lead time es igual al trabajo en curso
        dividido entre el throughput) le da igual que trabajen personas o agentes. Empieza más sin
        terminar más y cada tarea simplemente vive más tiempo.
      </p>
      <p>
        <strong>El segundo es el contexto.</strong>{" "}
        Todo sistema tiene un límite de trabajo activo que puede sostener. Para una persona, el límite
        es la atención y la memoria. Un estudio sobre el trabajo interrumpido comprobó que la gente sí
        compensa los cambios de tarea (trabaja más rápido), pero lo paga con más carga de trabajo, más
        estrés y más frustración, medibles (
        <a href={INTERRUPTED_WORK_HREF} target="_blank" rel="noreferrer">
          Mark, Gudith y Klocke, 2008
        </a>
        ). El coste es real; solo que lo cargan las personas y no aparece en la factura.
      </p>
      <p>
        Para un agente, el límite es la ventana de contexto, y ahí el deterioro se ve directamente en el
        resultado. Un{" "}
        <a href={LONG_CONTEXT_STUDY_HREF} target="_blank" rel="noreferrer">
          estudio de agentes web en tareas de contexto largo
        </a>{" "}
        (Chung et al.) comprobó que el rendimiento se desploma a medida que se acumula historial
        irrelevante en el contexto, justo lo que produce un hilo con varias tareas. Con el ruido
        acumulado hasta unos 150&nbsp;000 tokens, la tasa de éxito cayó del 40–50&nbsp;% a un solo
        dígito en algunos de los modelos probados: GPT-4.1 bajó de aproximadamente el 45&nbsp;% al
        2,7&nbsp;%.
      </p>
      <p className={styles.pullquote}>
        Las personas pierden la concentración y los agentes pierden el contexto, pero es el mismo fallo.
        Demasiado trabajo en curso degrada a quien trabaja, esté hecho de neuronas o de tokens.
      </p>
    </>
  );
}

export function SectionOneThread(): ReactNode {
  return (
    <>
      <h2 id="one-thread">Un hilo, una tarea: límites de WIP para el trabajo con IA</h2>
      <p>
        La disciplina que lo arregla existe desde hace décadas. Con la IA se ha vuelto
        obligatoria, porque la tentación de empezar más nunca había salido tan barata.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-made-starting-free-finishing-expensive/busy-not-delivering.webp"
          alt="Dos tableros kanban comparados: empezar más satura la columna In Progress (en curso) mientras Done (hecho) sigue casi vacía; terminar más mantiene pequeño el trabajo en curso y llena Done de tareas completadas"
          width={1200}
          height={800}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Empezar más llena el tablero. Terminar más llena producción.
        </FigureCaption>
      </figure>
      <ul>
        <li>
          <strong>Para los agentes: un hilo, una tarea.</strong>{" "}
          Mantén cada hilo centrado en un solo resultado. Cuando surgen temas secundarios (un bug que
          has visto, una refactorización que merece la pena), van a una lista o a otro agente, fuera de
          esa conversación. Un hilo centrado termina; uno sobrecargado da vueltas.
        </li>
        <li>
          <strong>Para ti: termina antes de empezar.</strong>{" "}
          Antes de abrir una tarea nueva, pregúntate qué puedes cerrar. Un agente que espera tu revisión
          es trabajo en curso. Tres agentes esperando tu revisión son una cola, y el cuello de botella
          eres tú.
        </li>
        <li>
          <strong>Para el equipo: los mismos límites de WIP, aplicados a los dos tipos de trabajadores.</strong>{" "}
          La cifra que importa es cuánto trabajo sin terminar hay en el sistema; las tareas empezadas y
          la actividad de los agentes no dicen nada. Una larga lista de hilos activos es inventario.
        </li>
      </ul>
      <p>
        El cambio incómodo está en lo que cuenta como señal de progreso. Antes el trabajo empezado
        escaseaba, así que empezar significaba algo. Ahora que empezar es casi gratis,{" "}
        <strong>
          gana quien más termina, y quien más empieza se queda con el tablero lleno.
        </strong>{" "}
        Menos cosas en marcha, más cosas hechas.
      </p>
    </>
  );
}

export function SectionConstraintMoved(): ReactNode {
  return (
    <>
      <h2 id="constraint">La restricción se ha movido, y conviene seguirla</h2>
      <p>
        Si aceptas la tesis (terminar antes que empezar), de ella se sigue una consecuencia más, y para
        las startups que usan mucho la IA es la más importante.
      </p>
      <p>
        Para un fundador en solitario o un equipo pequeño que usa la IA con disciplina, escribir código
        casi ha dejado de ser la restricción. Las iteraciones son baratas comparadas con el coste del
        trabajo sin terminar; la generación en sí es rápida. Lo que escasea ahora es la capacidad de
        decidir <em>qué</em> construir, <em>por qué</em> y <em>para quién</em>, y la capacidad de llevar
        el trabajo hasta el final. Para un equipo de producto de 5 a 50 ingenieros, programar todavía
        cuesta, pero la dirección es la misma: el cuello de botella se desplaza de la producción de
        código a las decisiones y al cierre del trabajo.
      </p>
      <p>
        Es lo básico de la teoría de restricciones: cuando la restricción se mueve, optimizar la antigua
        es esfuerzo perdido. Sacarle otro 10&nbsp;% a la generación de código no cambia nada si el
        trabajo muere esperando la verificación, la revisión y una decisión.
      </p>
      <p>
        La IA mantiene vigente el pensamiento sistémico y encarece los errores del sistema, porque ahora
        su factura llega al instante, desglosada y en dólares. Si tu proceso de entrega pierde trabajo
        entre «empezado» y «en producción», los agentes escalarán esa pérdida encantados. (Si estás en
        ese punto con un producto construido con IA, escribí aparte sobre{" "}
        <Link href={RESCUE_HREF}>cómo rescatarlo</Link>).
      </p>
    </>
  );
}
