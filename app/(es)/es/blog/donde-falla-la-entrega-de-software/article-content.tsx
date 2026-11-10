// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and max-lines (700) constraints. Each section
// is its own component so editorial passes touch one focused unit at a time.
//
// Sections 1–8 + header/intro live here. The trailing sections (9, 10, closing)
// plus CTA/Related are in article-tail.tsx to keep this file under the
// 700-line cap.
//
// Section order is meaningful — the article builds an argument incrementally.
// If a section is reordered, check that the preceding text doesn't reference
// the now-displaced one.

import Image from "next/image";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/diagnose-broken-engineering-delivery.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";

export function ArticleLede(): ReactNode {
  return (
    <>
      Lo que frena a la mayoría de los equipos de desarrollo lentos es el flujo del trabajo; la
      productividad de las personas suele estar bien. Y la primera reacción de casi todo el mundo ante
      ese problema hace que el sistema vaya todavía más lento.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Este es un patrón que he visto muchas veces a lo largo de los años: un equipo de seis personas
        con 60–80 tareas activas en el tablero, lanzamientos que han pasado de días a semanas y luego a
        «ya lo haremos el mes que viene», y una conclusión muy razonable: más manos lo arreglarán.
        Normalmente el verdadero cuello de botella está en otra parte.
      </p>
      <p>
        El diagnóstico descompone la línea temporal de una sola tarea, de la idea al usuario, hasta que
        puedes señalar la etapa concreta en la que el sistema deja de funcionar. Una vez que puedes
        señalarla, la solución suele ser evidente, y la mayoría de las veces no implica contratar a
        nadie. El orden de abajo reproduce un proyecto real: síntomas → descomposición → encontrar el
        cuello de botella → hablar de la palanca.
      </p>
    </>
  );
}

export function SectionSymptoms(): ReactNode {
  return (
    <>
      <h2 id="symptoms">1. Síntomas de una entrega lenta y el primer reflejo equivocado</h2>
      <p>
        La primera conversación casi siempre empieza igual. El T2M se mide en meses. El throughput está
        cerca de cero. Hay más bugs en el tablero que tareas abiertas. El NPS del equipo, interno o
        externo, está entre malo y peor.
      </p>
      <p>
        Los ingenieros trabajan, el engineering manager lo intenta, el product manager se deja la piel
        con el backlog. Y aun así, el primer reflejo, siempre, es «necesitamos más ingenieros». Y es el
        reflejo equivocado.
      </p>
      <p>
        Te explico por qué. Cuando un programa falla, abrimos un depurador; a nadie se le ocurre
        añadir más desarrolladores al código fuente. Miramos en qué estado está el programa,
        dónde se queda atascado, qué hace realmente frente a lo que esperábamos. Con un sistema de
        ingeniería pasa lo mismo. Las métricas de arriba te dicen que el resultado es malo. No te dicen
        dónde se está rompiendo el sistema. Ampliar el equipo sin esa información solo hace el sistema
        más complejo (más traspasos, más trabajo en marcha, colas más largas) y casi siempre más lento.
      </p>
      <p>
        Así que, antes de cualquier conversación sobre contratar, el trabajo consiste en descomponer el
        proceso en sus partes y encontrar dónde empieza a degradarse. Ese es el momento en que las
        métricas dejan de ser un boletín de notas y se convierten en una herramienta de diagnóstico.
      </p>
    </>
  );
}

export function SectionDecomposeT2M(): ReactNode {
  return (
    <>
      <h2 id="decompose-t2m">2. Divide el T2M: Discovery y Lead Time son problemas distintos</h2>
      <p>
        Cuando una tarea aparece por primera vez, todavía es una idea en
        bruto: la petición de un cliente, un informe de bug, una hipótesis del fundador, algo que
        alguien notó en una reunión. Antes de que el equipo pueda construirla, alguien tiene que darle
        forma: aclarar qué significa de verdad, esbozar la solución, decidir si merece la pena,
        conseguir las aprobaciones necesarias. No todas las ideas superan esa etapa, y las que la
        superan no siempre lo hacen rápido.
      </p>
      <p>
        Esa distancia es importante, porque ahí es donde muchos equipos pierden semanas sin darse
        cuenta.
        <strong> El T2M (Time to Market) es el tiempo total que va de la idea a producción.</strong> El
        primer corte útil es la frontera entre Discovery y Delivery.
      </p>
      <p>
        <strong>Discovery</strong>{" "}
        es todo lo que ocurre antes de que un ticket esté realmente listo para que lo tome un
        desarrollador. Aclarar requisitos, diseño, acotar el alcance, alinear a los stakeholders,
        priorizar. El resultado: un ticket con el que alguien podría empezar a construir.
      </p>
      <p>
        <strong>Delivery</strong>{" "}
        es todo lo que viene después, desde «listo para desarrollo» hasta «en producción». Es lo que
        miden implícitamente la mayoría de las métricas de ingeniería, y es la parte que el equipo
        controla directamente.
      </p>
      <p>
        La métrica que uso para la segunda mitad es el <strong>Lead Time</strong>: el tiempo que un
        ticket pasa concretamente bajo la responsabilidad del equipo de desarrollo. Así que:
      </p>
      <p className={styles.formula}>T2M = Discovery + Lead Time (Delivery)</p>
      <p>Dos números, dos problemas muy distintos escondidos detrás de un mismo T2M roto.</p>
      <p>
        <strong>Si el T2M es alto pero el Lead Time es bajo</strong>, el cuello de botella está antes
        de ingeniería. El equipo sabe ejecutar, pero el trabajo está parado en análisis, esperando a un
        stakeholder, en cola detrás de una decisión de prioridad que nadie ha tomado. Contratar más
        ingenieros no ayudará: simplemente estarán parados de otra manera. El trabajo consiste en
        arreglar el proceso de Discovery: quién decide qué está listo, con qué frecuencia y con qué
        información.
      </p>
      <p>
        <strong>Si el Lead Time es alto</strong>, el problema está dentro del propio Delivery. Las
        tareas se atascan después de que el equipo las toma: en el desarrollo, en la revisión, en QA, en
        el despliegue. Hay que mirar dentro del Lead Time y averiguar en qué se va exactamente el tiempo.
      </p>
      <p>
        En la práctica, la mayoría de los equipos con los que trabajo tienen problemas en los dos lados,
        pero rara vez en la misma proporción. Lo primero que hace la división entre T2M y Lead Time es
        decirte qué conversación tener primero. La de Discovery suele ser con el fundador, el product
        manager y quien sea responsable de las prioridades. La de Delivery es con el engineering manager
        y el equipo. Mezclar las dos es una de las formas más fiables de aplicar la solución
        equivocada.
      </p>
      <p>
        Dentro del Lead Time, «trabajar en una tarea» y «que alguien esté trabajando en la tarea»
        resultan ser cosas distintas, y ahí es donde la cosa se pone interesante.
      </p>
    </>
  );
}

function TimelineDiagram(): ReactNode {
  return (
    <figure className={styles.timelineDiagram}>
      <svg viewBox="0 0 800 220" role="img" aria-labelledby="timeline-title">
        <title id="timeline-title">
          Línea temporal de una tarea: Discovery, espera y Cycle Time, y las tres formas de medirlos.
        </title>
        {/* Top row: 3 segments of the actual task timeline */}
        <rect x="20" y="20" width="180" height="56" rx="3" className={styles.tlSegmentDiscoveryBg} />
        <rect x="200" y="20" width="240" height="56" className={styles.tlSegmentWaitingBg} />
        <rect x="440" y="20" width="340" height="56" rx="3" className={styles.tlSegmentCycleBg} />
        <text x="110" y="55" textAnchor="middle" className={styles.tlSegmentLabel}>Discovery</text>
        <text x="320" y="55" textAnchor="middle" className={styles.tlSegmentLabel}>Espera</text>
        <text x="610" y="55" textAnchor="middle" className={styles.tlSegmentLabelOnDark}>Trabajo activo</text>
        {/* Alignment guides */}
        <line x1="200" y1="76" x2="200" y2="210" className={styles.tlGuide} />
        <line x1="440" y1="76" x2="440" y2="210" className={styles.tlGuide} />
        {/* Measurement bar: T2M (spans all 3) */}
        <rect x="20" y="92" width="760" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="400" y="113" textAnchor="middle" className={styles.tlMeasureLabel}>T2M: de la idea a producción</text>
        {/* Measurement bar: Lead Time (Waiting + Cycle) */}
        <rect x="200" y="134" width="580" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="490" y="155" textAnchor="middle" className={styles.tlMeasureLabel}>Lead Time: dentro del equipo de desarrollo</text>
        {/* Measurement bar: Cycle Time (Cycle only) */}
        <rect x="440" y="176" width="340" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="610" y="197" textAnchor="middle" className={styles.tlMeasureLabel}>Cycle Time: solo trabajo activo</text>
      </svg>
      <FigureCaption>
        La misma línea temporal, tres mediciones distintas. Cada métrica apunta a un cuello de botella
        diferente.
      </FigureCaption>
    </figure>
  );
}

export function SectionLeadTimeCycleTime(): ReactNode {
  return (
    <>
      <h2 id="lead-time-cycle-time">3. Lead Time = Espera + Cycle Time</h2>
      <p>
        La mayoría de los equipos creen que, en cuanto una tarea está «lista para desarrollo», el
        trabajo real ha empezado. No es así. La tarea se pone en el tablero. Un desarrollador está
        ocupado con la anterior. Alguien está de vacaciones. Un bug más prioritario se cuela. El ticket
        se queda ahí. Para el tablero, la tarea está «en curso». Para el sistema, solo está esperando.
      </p>
      <p>
        Por eso el Lead Time por sí solo no es lo bastante preciso. Hay que separar el tiempo en que
        alguien trabaja de verdad en una tarea del tiempo en que solo espera en una cola. La métrica que
        uso para eso es el <strong>Cycle Time</strong>: el tiempo desde que alguien empieza de verdad
        con una tarea hasta que está terminada. Solo trabajo real.
      </p>
      <p>Todo junto:</p>
      <div className={styles.formula}>
        T2M = Discovery + Lead Time
        <br />
        Lead Time = Espera + Cycle Time
        <br />
        Cycle Time = solo trabajo
      </div>
      <TimelineDiagram />
      <p>De aquí salen dos preguntas de diagnóstico más.</p>
      <p>
        <strong>Si el Cycle Time es alto</strong>, el problema está dentro del propio desarrollo. Una vez
        que la gente trabaja en una tarea, la tarea tarda en terminarse. El cuello de botella está en la
        ejecución: complejidad del código, retrasos en la revisión, tests inestables, ciclos de QA
        manual, despliegues dolorosos. Ahí es donde empiezas a mirar con el equipo.
      </p>
      <p>
        <strong>Si el Cycle Time es bajo pero el Lead Time es alto</strong>, el equipo está bien. La
        ejecución está bien. Al sistema le llega más trabajo del que puede asumir. Las tareas se
        amontonan en la cola, esperando a que el equipo termine el lote anterior para poder siquiera
        empezar.
      </p>
      <p>
        Este segundo caso es el que sorprende a los fundadores. El equipo avanza rápido en cada
        tarea individual. Y el tablero sigue pareciendo congelado. El instinto es apretar más el
        rendimiento individual, cuando el problema real es la demanda que llega frente a la capacidad
        del equipo. Aquí la conversación correcta trata de añadir capacidad de forma selectiva o de
        limitar cuánto trabajo acepta el equipo a la vez; acelerar al equipo queda fuera. Llegaremos a
        eso.
      </p>
      <p>
        <strong>Tabla rápida de diagnóstico</strong> para la primera conversación con la dirección:
      </p>
      <table className={styles.diagnosticTable}>
        <thead>
          <tr>
            <th scope="col">Lo que muestra la métrica</th>
            <th scope="col">Lo que significa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Cycle Time alto</th>
            <td>Problema de ejecución: hay que mirar dentro del desarrollo.</td>
          </tr>
          <tr>
            <th scope="row">Lead Time alto, Cycle Time normal</th>
            <td>La demanda supera la capacidad.</td>
          </tr>
          <tr>
            <th scope="row">Cycle Time bajo, Lead Time bajo, T2M alto</th>
            <td>El cuello de botella está en Discovery; Delivery funciona.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Son tres números. Puedes sacarlos todos de Jira o de Linear en una tarde, y ya te contarán una
        historia distinta de «tenemos que contratar».
      </p>
    </>
  );
}

export function SectionWhereStuck(): ReactNode {
  return (
    <>
      <h2 id="where-stuck">4. Dónde se atasca de verdad el trabajo y por qué el tiempo por estado puede engañar</h2>
      <p>
        Así que el Cycle Time es alto. El siguiente paso natural es mirar dentro: medir el tiempo en
        cada estado. En curso, Code review, QA, Despliegue. Sumar en qué se van las horas. Encontrar la
        columna más lenta. Arreglarla.
      </p>
      <p>
        Es lo que hacen la mayoría de los equipos, y funciona hasta cierto punto. Si tus tareas se
        atascan en la revisión de código, puedes leer el tiempo de esa columna y empezar una
        conversación real sobre la carga de los revisores, el tamaño de los PR, el plazo de revisión.
        Lo mismo con los cuellos de botella en QA, lo mismo con las colas de despliegue. Los datos son
        reales y la intervención es precisa.
      </p>
      <p>Pero hay una trampa, y quiero ser concreto.</p>
      <p>
        Las tareas no recorren las etapas en línea recta. Rebotan: de QA vuelven a desarrollo cuando
        aparece un bug, de la revisión vuelven al trabajo cuando llega un comentario, del despliegue
        vuelven a desarrollo cuando algo falla en staging. La misma tarea pasa por la misma etapa dos,
        tres, a veces cinco veces. En cuanto empiezas a medir el «tiempo medio en QA», esa media mezcla
        en silencio los tickets que pasan a la primera con su tercer rebote en QA.
      </p>
      <p>
        Lo que hacen la mayoría de los equipos en este punto es redoblar la medición. Dashboards más
        detallados. Registrar cada transición. Añadir métricas como «tasa de fallos de QA a la primera»
        y «rebotes de revisión por ticket». Montar informes personalizados en Jira. Al final tienes un
        instrumento precioso con el que nadie puede actuar, porque los datos se han complicado más
        deprisa de lo que se ha aclarado el sistema que hay debajo.
      </p>
      <p>
        El error es que intentas medir el sistema al nivel equivocado. La optimización local (hacer
        más rápida cada columna) supone que el trabajo fluye en línea recta. Y no es así. El sistema
        funciona como un flujo con remolinos, bucles y colas, muy lejos de un pipeline lineal.
      </p>
      <p>
        El cambio que de verdad ayuda es dejar de intentar medir cada etapa con más precisión y empezar
        a preguntarse cómo se mueve el trabajo por el sistema en su conjunto. La pregunta pasa de «dónde
        se quedan más tiempo los tickets» a «cuántos tickets hay en el sistema a la vez, y qué
        proporción avanza de verdad frente a la que solo está ahí retenida». En cuanto te haces esa
        pregunta, el resto del diagnóstico se simplifica mucho.
      </p>
    </>
  );
}

function QueueChart(): ReactNode {
  return (
    <figure className={styles.queueChart}>
      <svg viewBox="0 0 800 220" role="img" aria-labelledby="queue-chart-title">
        <title id="queue-chart-title">
          Número de tareas por estado: En curso 5, Code review 3, QA 25, Despliegue 2. QA es el cuello
          de botella.
        </title>
        {/* In Progress: 5 → bar 110px (scale 22 px/unit) */}
        <text x="140" y="40" textAnchor="end" className={styles.qcLabel}>En curso</text>
        <rect x="160" y="20" width="110" height="30" rx="3" className={styles.qcBar} />
        <text x="280" y="40" className={styles.qcValue}>5</text>
        {/* Code Review: 3 → bar 66px */}
        <text x="140" y="90" textAnchor="end" className={styles.qcLabel}>Code review</text>
        <rect x="160" y="70" width="66" height="30" rx="3" className={styles.qcBar} />
        <text x="236" y="90" className={styles.qcValue}>3</text>
        {/* QA: 25 → bar 550px — the bottleneck */}
        <text x="140" y="140" textAnchor="end" className={styles.qcLabelBottleneck}>QA</text>
        <rect x="160" y="120" width="550" height="30" rx="3" className={styles.qcBarBottleneck} />
        <text x="720" y="140" className={styles.qcValueBottleneck}>25</text>
        {/* Deploy: 2 → bar 44px */}
        <text x="140" y="190" textAnchor="end" className={styles.qcLabel}>Despliegue</text>
        <rect x="160" y="170" width="44" height="30" rx="3" className={styles.qcBar} />
        <text x="214" y="190" className={styles.qcValue}>2</text>
      </svg>
      <FigureCaption>
        Donde se acumulan las tareas, la capacidad del sistema está tocando techo.
      </FigureCaption>
    </figure>
  );
}

export function SectionCountTasks(): ReactNode {
  return (
    <>
      <h2 id="count-tasks">5. Cómo encontrar cuellos de botella sin medir tiempos</h2>
      <p>Esta es la jugada de diagnóstico más infravalorada que conozco.</p>
      <p>
        Para encontrar el cuello de botella basta con{" "}
        <strong>contar las tareas que hay en cada estado</strong>; medir el tiempo en cada estado sobra.
      </p>
      <p>
        Saca los números de Jira en cinco minutos. La forma casi siempre se parece a esto:
      </p>
      <QueueChart />
      <p>Luego busca los desequilibrios.</p>
      <p>
        Si tienes cinco tareas en desarrollo, tres en revisión y veinticinco en QA, no necesitas un
        cronómetro. No necesitas un dashboard en Looker. El cuello de botella es QA. Las tareas
        individuales pueden ir allí a buen ritmo; lo que pasa es que se acumulan en la cola. El sistema
        tiene un punto donde el trabajo se acumula más deprisa de lo que sale.
      </p>
      <p>
        Este simple recuento te dice casi todo lo que te diría el tiempo por estado, con alrededor de un
        uno por ciento del esfuerzo. Funciona porque las colas son la parte visible de un problema de
        flujo: allí donde se forman colas, la capacidad del sistema está tocando techo.
      </p>
      <p>
        Además cambia la conversación. El tiempo por estado invita a debatir «cuánto es demasiado tiempo
        en QA». El recuento de tareas deja el problema a la vista: veinticinco cosas esperando a dos
        ingenieros de QA es un problema del sistema, y pedir a QA que «trabaje más rápido» no lo
        resuelve.
      </p>
      <p>
        Es el diagnóstico más barato y rápido de toda esta guía, y la mayoría de los equipos se lo saltan
        de camino a construir dashboards que nunca usarán.
      </p>
      <p>
        Pero plantea una pregunta más profunda. ¿<strong>Por qué</strong>{" "}
        hay veinticinco tareas en QA? ¿De dónde salieron? ¿Por qué el equipo sigue aceptando trabajo
        nuevo cuando ya hay un muro de tickets sin terminar en el sistema?
      </p>
    </>
  );
}

export function SectionWip(): ReactNode {
  return (
    <>
      <h2 id="wip">6. Trabajo en curso (WIP): la variable que controla la velocidad de entrega</h2>
      <p className={styles.pullquote}>Seis ingenieros. Ochenta tareas en curso. No se termina nada.</p>
      <p>
        No exagero. He visto exactamente esta forma varias veces. Un equipo de tres desarrolladores, dos
        ingenieros de QA y un tech lead, con más de ochenta tickets activos en el tablero. Para un
        equipo de seis.
      </p>
      <p>
        La historia detrás siempre es la misma. Un desarrollador termina la parte activa de una tarea y
        la manda a revisión. Ahora su ticket está bloqueado por otra persona. En lugar de esperar, toma
        otro del backlog. Ese también se bloquea, esperando a QA. Toma otro. El tablero se llena de
        tareas que técnicamente están «en curso» pero que en realidad esperan a otra persona, en otro
        sitio, por algún otro motivo.
      </p>
      <p>
        Esto es el <strong>trabajo en curso (WIP, Work in Progress)</strong>: el número de tareas que el
        sistema sostiene en un momento dado.
      </p>
      <p>
        El equipo no puede trabajar físicamente en ochenta cosas a la vez. Seis personas, ochenta
        tareas. La mayor parte del trabajo está simplemente parada. Esperando revisión, bloqueada en QA,
        aparcada porque un stakeholder no ha respondido, hecha a medias e integrada pero sin desplegar.
        Cada uno de esos tickets ocupa un hueco en el sistema: un hueco en el contexto mental de alguien,
        un sitio en el tablero, un trozo de estado que alguien tiene que mantener vivo.
      </p>
      <p>El coste se multiplica:</p>
      <ul>
        <li>
          Las tareas pierden relevancia para el negocio mientras esperan. Cuando el equipo vuelve a
          ellas, los requisitos han cambiado o la urgencia se ha esfumado.
        </li>
        <li>
          Se acumulan los conflictos de merge. Una rama que pasa tres semanas parada mientras la rama
          principal sigue avanzando se convierte en un pequeño proyecto de arqueología a la hora de
          integrarla.
        </li>
        <li>
          Cambiar de contexto sale caro. Cada desarrollador lleva en la cabeza tres o cuatro tareas «en
          curso» a la vez. Ninguna avanza de verdad.
        </li>
        <li>
          Es más fácil que se cuelen bugs. Con más trabajo en marcha, cada pieza recibe menos miradas.
          La calidad baja.
        </li>
      </ul>
      <p>
        Y las métricas lo confirman. Un WIP alto va de la mano de un T2M alto (las tareas tardan más en
        salir), un throughput bajo (se terminan menos tareas por semana), más bugs (menos atención por
        tarea) y un NPS más bajo, tanto de clientes como del equipo.
      </p>
      <p>
        Esta es la variable que controla el sistema. Por encima de la velocidad del equipo y de la
        experiencia de los ingenieros: cuánto intentan sostener en marcha a la vez.
      </p>
    </>
  );
}

export function SectionLittlesLaw(): ReactNode {
  return (
    <>
      <h2 id="littles-law">7. La ley de Little: Lead Time = WIP / Throughput</h2>
      <p>
        Si te parece que las secciones anteriores llegan una y otra vez a la misma conclusión, no te
        equivocas. Hay un motivo.
      </p>
      <p>
        La investigación operativa lo resolvió hace décadas. La relación entre la cantidad de trabajo
        que hay en un sistema y lo que tarda ese trabajo la describe la <strong>ley de Little</strong>:
      </p>
      <p className={styles.formula}>Lead Time = WIP / Throughput</p>
      <p>En el lenguaje de la entrega de software:</p>
      <ul>
        <li>
          <strong>WIP</strong>: cuántas tareas hay en el sistema al mismo tiempo
        </li>
        <li>
          <strong>Throughput</strong>: cuántas tareas termina el equipo por periodo
        </li>
        <li>
          <strong>Lead Time</strong>: cuánto tiempo vive una tarea en el sistema, de media
        </li>
      </ul>
      <p>La fórmula es casi vergonzosamente simple, y su consecuencia es brutal.</p>
      <p>
        Mantén el throughput constante y aumenta el WIP: el lead time crece de forma lineal. Un ejemplo:
        un equipo que termina diez tareas por semana.
      </p>
      <div className={styles.numericExample}>
        <p>10 tareas en el sistema → lead time medio ≈ 1 semana</p>
        <p>30 tareas → ≈ 3 semanas</p>
        <p>80 tareas → ≈ 8 semanas</p>
      </div>
      <p>
        El equipo trabaja a la misma velocidad en los tres escenarios. Los ingenieros no son más lentos.
        Los tickets no son más complejos. Lo único que ha cambiado es cuántas tareas intenta sostener el
        sistema a la vez. Y el lead time medio se ha multiplicado por 8.
      </p>
      <p>
        Por eso los equipos que trabajan más duro no necesariamente entregan más rápido. Con esfuerzo,
        puedes subir el throughput un 10–20&nbsp;%. Con disciplina, puedes bajar el WIP un 50&nbsp;% o
        más. Las matemáticas dicen que la segunda palanca mueve más los resultados.
      </p>
      <p>
        También es la razón por la que «necesitamos más ingenieros» empeora las cosas tan a menudo. Los
        ingenieros nuevos traen su propio trabajo en marcha. El WIP sube más deprisa que el throughput,
        y el lead time empeora antes de mejorar. La incorporación lo hace casi inevitable: los recién
        llegados tardan de seis a ocho semanas en empezar a aportar de verdad, y durante ese tiempo el
        WIP del equipo actual aumenta (mentoría, traspaso de contexto, revisión de los PR del recién
        llegado).
      </p>
      <p className={styles.pullquote}>
        Si te quedas con un solo número, que sea este. Lead Time = WIP / Throughput.
      </p>
      <p>
        Son las matemáticas del sistema detrás de casi todas las conversaciones del tipo «vamos lentos»
        que he tenido en ingeniería.
      </p>
    </>
  );
}

export function SectionWipLimits(): ReactNode {
  return (
    <>
      <h2 id="wip-limits">8. Límites de WIP: la palanca que arregla a la mayoría de los equipos lentos</h2>
      <p>
        Así que, si el WIP es la variable que controla la velocidad del sistema y normalmente no podemos
        cambiar mucho el throughput a corto plazo, la palanca es evidente: limitar el WIP.
      </p>
      <p>
        La mayoría de los equipos de ingeniería tienen un problema de productividad porque tienen un
        problema de WIP. Arregla el WIP, y la mayoría de los demás síntomas (lead times largos, bugs
        frecuentes, poca previsibilidad, cambios de contexto constantes) mejoran a la vez.
      </p>
      <p>
        Los <strong>límites de WIP</strong> son la disciplina de decir: este sistema no sostendrá más de
        N tareas a la vez. Si el WIP está en el límite, no se empieza ningún trabajo nuevo hasta que
        termine algo de lo que ya existe. Punto.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/diagnose-broken-engineering-delivery/too-much-wip-vs-wip-limits.webp"
          alt="Dos pipelines de entrega comparados según Lead Time = WIP / Throughput: sin límites, las tareas se amontonan en QA y el lead time se vuelve impredecible; con límites de WIP, cada etapa tiene pocas tareas y el trabajo fluye de forma previsible"
          width={1200}
          height={800}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Mismo throughput, distinto WIP: las colas se reducen y el lead time se vuelve previsible.
        </FigureCaption>
      </figure>
      <p>Lo que mejoran de verdad los límites de WIP:</p>
      <ul>
        <li>Menos cambios de contexto, porque cada persona lleva menos cosas en marcha</li>
        <li>Colas más cortas en cada etapa, porque hay menos trabajo en el sistema en total</li>
        <li>Un Lead Time más corto, por la ley de Little, de forma mecánica</li>
        <li>Menos bugs, porque la atención se concentra en terminar en lugar de empezar</li>
        <li>Más previsibilidad, porque el sistema deja de oscilar entre la infrautilización y el atasco</li>
      </ul>
      <p>
        Los límites de WIP aceleran el sistema, y esta es la parte que confunde a la dirección: cada
        desarrollador sigue yendo a la misma velocidad. El equipo produce el mismo
        código por hora de trabajo; simplemente deja menos piezas de código a medias en paralelo, así
        que una parte mayor de lo que produce llega de verdad a producción.
      </p>
      <p>
        Además, es una de las pocas palancas que mejoran la entrega sin contratar, sin herramientas
        nuevas y sin rediseñar procesos. No cuesta nada. Se puede aplicar esta misma semana. Y casi
        nadie lo hace, porque exige decir «no» a empezar trabajo nuevo, y decirle «no» a un stakeholder
        que pide una cosa más en marcha es más difícil que decirle «sí».
      </p>
      <p>
        Los límites de WIP tienen poco que ver con la configuración de Jira. Lo que cuenta es si el
        equipo y sus stakeholders tienen la disciplina de terminar antes de empezar.
      </p>
    </>
  );
}
