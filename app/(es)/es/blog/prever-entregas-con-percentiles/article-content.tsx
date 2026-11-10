// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: average misleads → median → the gap is the
// diagnosis → pick the date from a percentile → predictability is the product.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/forecast-delivery-with-percentiles.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";

const PILLAR_HREF = getPostPathInLocale("diagnose-broken-engineering-delivery", "es");

export function ArticleLede(): ReactNode {
  return (
    <>
      La mayoría de los equipos prevén sus entregas a partir de la media. Es el número que con más
      seguridad deforma la imagen del sistema, y cada vez que lo das y fallas, gastas una confianza que
      podías haberte ahorrado. Esto es lo que conviene dar en su lugar.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <p>
      En cuanto un equipo empieza a medir su entrega, con las{" "}
      <Link href={PILLAR_HREF}>métricas que muestran dónde falla de verdad</Link>, los fundadores
      siempre hacen la misma pregunta: con todos estos datos, ¿cuándo podemos prometer algo? Casi todo
      el mundo responde con una media. Es el peor número disponible para esa tarea.
    </p>
  );
}

export function SectionAverageComfort(): ReactNode {
  return (
    <>
      <h2 id="average">1. La media tranquiliza y falla como previsión</h2>
      <p>
        Los managers recurren a la media porque reduce una realidad caótica a un solo número que puedes
        decir en voz alta en un standup. Esa comodidad es justo el problema.
      </p>
      <p>Toma un mes de trabajo terminado:</p>
      <div className={styles.numericExample}>
        <p>9 tareas terminadas en ~1 día cada una</p>
        <p>1 tarea que se alargó un mes</p>
        <p>→ lead time medio ≈ 4 días</p>
      </div>
      <p>
        En este sistema ninguna tarea tarda realmente cuatro días. La mayoría tarda uno; una sola
        rezagada arrastra la media hacia arriba. Puedes ahogarte cruzando un río que tiene un metro de
        profundidad <em>de media</em>.
      </p>
      <p className={styles.pullquote}>El lead time medio describe un sistema que no tienes.</p>
    </>
  );
}

export function SectionMedianTypical(): ReactNode {
  return (
    <>
      <h2 id="median">2. La mediana es la tarea típica</h2>
      <p>
        La mediana es la tarea del medio: la mitad termina antes y la otra mitad después. Aquí ronda un
        día, y ese único número te dice que la mayor parte del trabajo fluye rápido.
      </p>
      <p>
        Eso cambia el sentido de la queja. Cuando alguien pregunta «nuestra media es de cuatro días,
        ¿por qué somos tan lentos?», la media esconde la forma real: el noventa por ciento del trabajo
        va bien y unas pocas tareas están varadas. Cada vez que he abierto un control chart con un
        equipo, la distancia entre la media y la mediana solía contar toda la historia: la mayoría de
        los tickets se cerraban en uno o dos días, y uno o dos llevaban semanas enterrados en una cola
        de revisión que nadie vigilaba. El sistema funciona a buen ritmo. Lo que hay es un puñado de
        tareas atascadas.
      </p>
    </>
  );
}

// Right-skewed lead-time distribution. One bar per day (day 0–25); heights
// fall off into a long tail. Mean sits visibly right of the median — the
// whole point of section 3.
const DIST_HEIGHTS = [
  12, 150, 120, 70, 42, 30, 22, 16, 12, 10, 8, 7, 6, 5, 5, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1, 1
];
const DIST_TICKS = [0, 5, 10, 15, 20, 25];

function DistributionChart(): ReactNode {
  return (
    <figure className={styles.distChart}>
      <svg
        viewBox="0 0 600 244"
        role="img"
        aria-label="Distribución del lead time sesgada a la derecha: la mayoría de las tareas terminan en uno a tres días, con una larga cola de tareas lentas. La mediana está en unos dos días, dentro de las barras altas; la media se desplaza a la derecha hasta unos cinco días, donde caen pocas tareas."
      >
        <line className={styles.dcAxis} x1="50" y1="40" x2="50" y2="200" />
        <line className={styles.dcAxis} x1="50" y1="200" x2="570" y2="200" />
        {DIST_HEIGHTS.map((h, d) => (
          <rect key={d} className={styles.dcBar} x={50 + d * 20} y={200 - h} width="18" height={h} />
        ))}
        <line className={styles.dcMedian} x1="90" y1="200" x2="90" y2="44" />
        <text className={styles.dcMedianLabel} x="86" y="36" textAnchor="end">
          Mediana ~2 d
        </text>
        <line className={styles.dcMean} x1="150" y1="200" x2="150" y2="44" />
        <text className={styles.dcMeanLabel} x="154" y="36" textAnchor="start">
          Media ~5 d
        </text>
        {DIST_TICKS.map((t) => (
          <text key={t} className={styles.dcTick} x={50 + t * 20} y="216" textAnchor="middle">
            {t}
          </text>
        ))}
        <text className={styles.dcAxisLabel} x="310" y="236" textAnchor="middle">
          lead time (días)
        </text>
      </svg>
      <FigureCaption>
        Distribución del lead time: casi todo el trabajo se cierra en uno o dos días (las barras altas),
        pero una larga cola de tareas atascadas arrastra la media hasta un punto donde casi ninguna
        tarea termina de verdad.
      </FigureCaption>
    </figure>
  );
}

export function SectionGapDiagnosis(): ReactNode {
  return (
    <>
      <h2 id="gap">3. La distancia entre la media y la mediana es el diagnóstico</h2>
      <p>
        Así que la lectura más útil de todo el ejercicio no cuesta nada: pon la media y la mediana una
        al lado de la otra.
      </p>
      <DistributionChart />
      <table className={styles.diagnosticTable}>
        <thead>
          <tr>
            <th>Lo que ves</th>
            <th>Lo que significa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Media muy por encima de la mediana</th>
            <td>
              Mucha dispersión. El trabajo avanza a trompicones: unas tareas vuelan y otras se quedan
              en colas, revisiones, aprobaciones. La distancia es la profundidad de la cola.
            </td>
          </tr>
          <tr>
            <th>Media ≈ mediana</th>
            <td>Poca dispersión. El trabajo avanza a un ritmo constante. El sistema es estable y previsible.</td>
          </tr>
        </tbody>
      </table>
      <p>
        La propia distancia es la señal. Una distancia grande indica una cola larga: bloqueos, traspasos,
        cosas que esperan a una persona. Resuélvelos y la media vuelve a acercarse a la mediana. Se ve
        de un vistazo, sin cronometrar a nadie.
      </p>
    </>
  );
}

function PercentileTable(): ReactNode {
  return (
    <table className={styles.diagnosticTable}>
      <thead>
        <tr>
          <th>Percentil</th>
          <th>Lead time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>P50 (mediana)</th>
          <td>2 días</td>
        </tr>
        <tr>
          <th>P85</th>
          <td>6 días</td>
        </tr>
        <tr>
          <th>P95</th>
          <td>11 días</td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionPickPercentile(): ReactNode {
  return (
    <>
      <h2 id="percentile">4. Saca la fecha de un percentil y olvida la media a ojo</h2>
      <p>
        Los stakeholders hacen una sola pregunta: ¿cuándo estará listo? Y quieren una fecha, sin clases
        de estadística. Es justo: dales una fecha. Solo deja de sacarla del número equivocado.
      </p>
      <p>
        Una estimación puntual basada en la media es una promesa que la dispersión no te dejará cumplir.
        Dices «unos cuatro días», fallas y has gastado confianza; y al sprint siguiente vuelves a
        hacerlo. Un percentil fija de qué número sacas la fecha: es el valor dentro del cual termina una
        parte determinada de las tareas. Toma una distribución real, menos extrema que el ejemplo de
        arriba pero con la misma forma, y verás algo así:
      </p>
      <PercentileTable />
      <p>
        Ahora la elección es concreta. ¿Trabajo rutinario? Comprométete con el{" "}
        <strong>P85: «para el día seis».</strong> ¿Algo que bloquea a un cliente o a otro equipo, donde
        fallar sale caro? Da el <strong>P95: «para el día once».</strong>{" "}
        Los mismos datos, dos promesas distintas, y las dos las cumplirás.
      </p>
      <p>
        Esta es la versión honesta de una fecha: la incertidumbre ya va incluida en ella. Te comprometes
        con una que cumplirás 95 veces de cada 100 (u 85, si esa es la línea que elegiste), en lugar de con una
        estimación a ojo que la dispersión del sistema iba a romper tarde o temprano. Si alguien quiere
        saber el nivel de confianza, díselo; la mayoría solo quiere la fecha.
      </p>
      <p className={styles.pullquote}>
        El percentil se queda contigo: es la forma de elegir la fecha que le das al stakeholder.
      </p>
      <p>
        Para una tarea que ya está en marcha, prevé el tiempo que le <em>queda</em>, teniendo en cuenta
        cuánto lleva ya, con la misma distribución. Y la primera vez que das una fecha y la cumples,
        dejas de ser el equipo que «siempre llega tarde» y pasas a ser el equipo «previsible», una
        reputación que vale más que algún ticket rápido de vez en cuando.
      </p>
    </>
  );
}

export function SectionPredictability(): ReactNode {
  return (
    <>
      <h2 id="predictability">5. La previsibilidad es el producto</h2>
      <p>
        Porque lo que de verdad compra el negocio es la previsibilidad, más que la velocidad bruta.
        Ventas se compromete con los clientes según tus fechas, marketing programa los lanzamientos con
        ellas, soporte organiza sus turnos en función de ellas. Un equipo que termina siempre el viernes
        gana a uno que a veces termina el martes y a veces dentro de tres semanas, porque todos los que
        dependen de él pueden planificar.
      </p>
      <p>
        Y una dispersión pequeña sale de controlar el trabajo en curso: un WIP
        alto crea colas largas, las colas largas crean la cola de la distribución, y esa cola es lo que
        empuja la media por encima de la mediana. Por eso{" "}
        <Link href={PILLAR_HREF}>controlar el WIP</Link> estrecha la distribución por sí solo. Nada de
        esto exige una herramienta nueva: el Control Chart de Jira muestra la media, la mediana y los
        percentiles con datos que ya tienes.
      </p>
      <p>
        La mayoría de los equipos prevén a partir de la media y luego se preguntan por qué las fechas
        se siguen retrasando. Estimar con más empeño no cambia nada. La solución es leer la
        distribución que ya tienes: la mediana para el caso típico, la distancia para la salud del sistema y
        un percentil para la fecha con la que te comprometes.
      </p>
    </>
  );
}
