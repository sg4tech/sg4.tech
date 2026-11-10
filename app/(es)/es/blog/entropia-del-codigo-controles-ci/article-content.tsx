// Article body sections, split out of page.tsx to satisfy ESLint
// max-lines-per-function and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: complexity grows on its own and AI speeds
// it up → seven levels of CI checks, cheapest first → one table of tools per
// language → checks beat written rules because an agent can't skip a red build
// → a ready-made Python template that bundles all of it.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/code-entropy-ci-checks-ai-legacy.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";

const VIBECODED_HREF = getPostPathInLocale("vibecoded-mvp-stopped-shipping", "es");
const TEMPLATE_HREF = "https://github.com/sg4tech/python-guardrails-template";
const LEHMAN_HREF = "https://en.wikipedia.org/wiki/Lehman%27s_laws_of_software_evolution";
const HOARE_HREF = "https://everythingsysadmin.com/2009/01/tony-hoare-apologizes-for-inve.html";
const HARNESS_HREF = "https://www.harness.io/blog/10-exception-types-in-production-java-applications";
const PLAYBOOK_URL = "https://sg4.tech/blog/code-entropy-ci-checks-ai-legacy/playbook.md";
const MILLER_HREF = "https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two";

export function ArticleLede(): ReactNode {
  return (
    <>
      La ley según la cual la complejidad del código crece sola sigue vigente con la IA, que solo
      acelera ese crecimiento. Estos son siete niveles de controles de CI que impiden que se acumule legacy, en el
      orden en que los añado.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        La entropía crece sola. En física, es el segundo principio de la termodinámica. En el desarrollo
        de software pasa algo parecido: el desorden se acumula sin esfuerzo, y el orden exige trabajo.
      </p>
      <p>
        Siempre ha sido así. A medida que un proyecto crece, crece su complejidad: se acumula legacy, el
        proyecto cuesta más de mantener, cada cambio pesa más y el riesgo de romper algo no deja de
        aumentar. En 1974 Manny Lehman lo dejó por escrito como{" "}
        <a href={LEHMAN_HREF} target="_blank" rel="noreferrer">
          una ley de la evolución del software
        </a>
        : la complejidad de un sistema aumenta salvo que se trabaje para reducirla. La IA no lo ha
        cambiado. Solo ha hecho que el legacy se acumule más rápido.
      </p>
      <p>
        Lo que quieres es mantener el código lo más simple posible, y aquí es donde ayudan los controles
        de CI.
      </p>
    </>
  );
}

// The seven levels as a staircase: listed bottom-up in source order (cheapest
// first) and drawn with the cheapest step at the bottom. Level 7 is the only
// non-deterministic one, so it gets a dashed outline and a different tag.
const ladderSteps = [
  { level: 1, name: "Código muerto" },
  { level: 2, name: "Linters y formateadores" },
  { level: 3, name: "Análisis estático" },
  { level: 4, name: "Tests unitarios y cobertura" },
  { level: 5, name: "Complejidad y duplicación" },
  { level: 6, name: "Arquitectura y acoplamiento" },
  { level: 7, name: "Reglas escritas (AGENTS.md)" }
] as const;

const SOFT_LEVEL = 7;

export function LevelLadder(): ReactNode {
  return (
    <figure className={styles.ladderFigure}>
      <ol className={styles.ladder}>
        {ladderSteps.map((step) => {
          const isSoft = step.level === SOFT_LEVEL;
          return (
            <li
              key={step.level}
              className={isSoft ? `${styles.ladderStep} ${styles.ladderStepSoft}` : styles.ladderStep}
              style={{ marginLeft: `calc(${step.level - 1} * var(--step-shift))` }}
            >
              <span className={styles.ladderNumber}>{step.level}</span>
              <span className={styles.ladderName}>{step.name}</span>
              <span className={styles.ladderTag}>{isSoft ? "el CI no lo hace cumplir" : "hace fallar el build"}</span>
            </li>
          );
        })}
      </ol>
      <FigureCaption>
        Los controles más baratos, abajo. Los niveles 1–6 hacen fallar el build siempre; las reglas
        escritas de arriba orientan al agente, pero no pueden detenerlo.
      </FigureCaption>
    </figure>
  );
}

export function SectionCheapLevels(): ReactNode {
  return (
    <>
      <h2 id="dead-code">1. Código muerto</h2>
      <p>
        El paso más sencillo es borrar lo que ya no se usa. También se puede automatizar: pon en el CI
        un detector de código muerto (vulture para Python, knip para JS/TS) y el código sin usar
        simplemente hace fallar el build.
      </p>
      <h2 id="linters">2. Linters y formateadores</h2>
      <p>
        Después viene el linter: phpcs para PHP, ruff para Python, ESLint y Prettier para JS/TS, y así
        sucesivamente. Cada lenguaje tiene su estilo de código, y da igual cuál elijas. Lo que importa
        es no gastar tiempo y dinero leyendo código y escribiendo comentarios de revisión como «cambia
        las comillas dobles por simples». Acuerda el estilo con tu equipo una vez y, a partir de ahí, el CI lo
        comprueba automáticamente.
      </p>
      <h2 id="static-analysis">3. Análisis estático</h2>
      <p>
        El siguiente nivel son los analizadores estáticos: PHPStan para PHP, mypy para Python, tsc para
        JS/TS. Una comprobación estática de tipos estricta detecta errores simples: pasar una cadena
        donde se esperaba un número, u olvidar que un valor puede estar vacío. No revisa tu lógica, pero
        elimina toda una clase de errores. Los valores vacíos son el caso clásico: Tony Hoare, que
        inventó la referencia nula, la llamó su{" "}
        <a href={HOARE_HREF} target="_blank" rel="noreferrer">
          «error de mil millones de dólares»
        </a>
        , y según{" "}
        <a href={HARNESS_HREF} target="_blank" rel="noreferrer">
          los datos de Harness de 2020
        </a>
        , NullPointerException seguía entre las 10 excepciones más frecuentes en el 70&nbsp;% de los
        entornos de producción Java que analizaron.
      </p>
      <h2 id="unit-tests">4. Tests unitarios y un 80&nbsp;% de cobertura</h2>
      <p>
        ¿Por qué? Porque el código malo es muy difícil de cubrir con tests unitarios. Para que el código
        se pueda cubrir con tests unitarios, tienes que dividirlo en clases y funciones separadas, pensar
        en el acoplamiento y en las interfaces, decidir qué es público y qué es privado, usar inyección de
        dependencias y evitar el estado global. Claro que no es una garantía al 100&nbsp;%, sobre todo
        porque la IA infla fácilmente la cobertura con tests que no comprueban casi nada. Pero, de un
        modo u otro, el umbral pone restricciones al diseño y aumenta las probabilidades de tener buen
        código.
      </p>
    </>
  );
}

export function SectionComplexity(): ReactNode {
  return (
    <>
      <h2 id="complexity">5. Complejidad y duplicación</h2>
      <p>
        La memoria de trabajo humana solo retiene unos pocos elementos independientes a la vez: George
        Miller{" "}
        <a href={MILLER_HREF} target="_blank" rel="noreferrer">
          contó 7 ± 2
        </a>{" "}
        en 1956, y Nelson Cowan lo afinó a unos cuatro en 2001. Todo lo que pasa de ahí se vuelve
        difícil y se va a la memoria de intercambio. No he visto estudios sobre esto para la IA, pero si
        el código es comprensible para una persona, aumentan las probabilidades de que la IA no alucine.
        Y si el código está tan enredado que una persona no puede seguirlo, lo más probable es que la IA
        apile encima nuevas capas de legacy.
      </p>
      <p>
        Por eso fijo límites estrictos a las métricas de duplicación y de complejidad. Se supera el
        límite → falla el CI → toca refactorizar y extraer código a métodos y clases separados. Para
        Python, complexipy es un ejemplo.
      </p>
      <p>
        Así se ve en un proyecto real. En una plataforma en la que trabajé, los agentes de IA escribieron
        la mayor parte del backend. A las seis semanas, antes de que existiera ninguno de estos
        controles, la primera medición encontró 143 funciones con una complejidad superior a 10 y 202
        fragmentos copiados y pegados, cerca del 5&nbsp;% del código. Más adelante, cuando se introdujo
        un techo estricto, la peor función procesaba recibos, es decir, manejaba dinero: 490 líneas con
        una complejidad de 73. En cuanto ese techo empezó a hacer fallar el build, pasó de 73 a 30 en
        cuatro días de refactorización, una función por commit. En los dos meses siguientes a la primera
        medición, la duplicación bajó a cerca del 3&nbsp;%.
      </p>
      <p>
        Si el legacy ya se ha acumulado, puedes empezar desde donde estás: fija el límite en tu función
        más compleja y, como mínimo, las cosas no empeorarán. Pero eso no hace desaparecer la deuda. La
        pagas aparte: reserva tiempo para refactorizar y baja el límite después de cada paso para
        consolidar el resultado. Los controles solo impiden que el desorden crezca; la limpieza sigue
        siendo cosa tuya.
      </p>
    </>
  );
}

export function SectionArchitectureAndRules(): ReactNode {
  return (
    <>
      <h2 id="architecture">6. Arquitectura y acoplamiento</h2>
      <p>
        Los límites estrictos también reducen la complejidad, un nivel más arriba. Es como el
        encapsulamiento en la POO: el sistema se construye con bloques grandes cuyo interior no hace
        falta tener en la cabeza; basta con conocer su contrato. Y la implementación de un bloque se
        puede sustituir cuando haga falta sin reescribir el resto del sistema. En lugar de decenas de
        clases y conexiones, razonas sobre unos pocos bloques grandes. De nuevo reduces el número de
        cosas que tienes que tener en la cabeza a la vez, esta vez en cada nivel de la arquitectura.
      </p>
      <p>
        En la práctica, esto significa Clean Architecture y arquitectura hexagonal: el código se divide
        en capas y las dependencias entre ellas están estrictamente limitadas. El dominio no sabe nada
        de la base de datos, de HTTP ni de las APIs externas, y el código exterior llega a él a través
        de interfaces predefinidas. Esto también se comprueba automáticamente (con import-linter para
        Python, por ejemplo): aparece un import prohibido y falla el CI.
      </p>
      <h2 id="written-rules">7. Reglas escritas</h2>
      <p>
        El último nivel son las reglas escritas. Antes eran guías y documentación para desarrolladores;
        ahora son un archivo AGENTS.md y documentación para la IA. A diferencia de los controles
        anteriores, aquí el resultado no es determinista: la IA puede leer una regla y aun así
        saltársela. Por eso las reglas escritas son la última milla. Solo contienen lo que no se ha
        podido cubrir con controles. En igualdad de condiciones, olvídate de la prosa y escribe un
        control estricto en código.
      </p>
      <p>
        La IA intenta una y otra vez desactivar el control en lugar de arreglar el código: subir el
        límite, añadir una excepción, silenciar la regla con un comentario. Por eso mi archivo de
        reglas lo dice en una línea aparte: debilitar un control para que pase es un parche que deja el
        problema donde estaba.
      </p>
    </>
  );
}

type ToolRow = {
  level: string;
  python: string;
  php: string;
  js: string;
};

const toolRows: ReadonlyArray<ToolRow> = [
  { level: "Código muerto", python: "vulture", php: "shipmonk/dead-code-detector (PHPStan)", js: "knip" },
  { level: "Linters y formateadores", python: "ruff", php: "PHP_CodeSniffer (phpcs)", js: "ESLint + Prettier" },
  { level: "Análisis estático", python: "mypy (strict)", php: "PHPStan", js: "tsc (strict)" },
  { level: "Tests unitarios y cobertura", python: "pytest + coverage", php: "PHPUnit", js: "Jest / Vitest" },
  {
    level: "Complejidad",
    python: "complexipy",
    php: "PHPMD, cognitive-complexity (PHPStan)",
    js: "ESLint complexity"
  },
  { level: "Duplicación", python: "pylint duplicate-code", php: "jscpd", js: "jscpd" },
  { level: "Arquitectura y acoplamiento", python: "import-linter", php: "Deptrac", js: "dependency-cruiser" }
];

export function SectionToolTable(): ReactNode {
  return (
    <>
      <h2 id="tools">Las herramientas, por lenguaje</h2>
      <table className={styles.toolTable}>
        <caption className={styles.tableCaption}>
          Esto es lo que uso en cada nivel; las herramientas concretas importan menos que el hecho de
          que cada nivel haga fallar el build.
        </caption>
        <thead>
          <tr>
            <th scope="col">Nivel</th>
            <th scope="col">Python</th>
            <th scope="col">PHP</th>
            <th scope="col">JS/TS</th>
          </tr>
        </thead>
        <tbody>
          {toolRows.map((row) => (
            <tr key={row.level}>
              <th scope="row">{row.level}</th>
              <td data-label="Python">{row.python}</td>
              <td data-label="PHP">{row.php}</td>
              <td data-label="JS/TS">{row.js}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        También hay una versión paso a paso de este artículo escrita para agentes de programación, en
        inglés: el <a href={PLAYBOOK_URL}>CI guardrails playbook</a>. Para aplicarlo a un repositorio,
        dile a tu agente: <em>Apply {PLAYBOOK_URL} to this repository.</em>
      </p>
    </>
  );
}

export function SectionBottomLine(): ReactNode {
  return (
    <>
      <h2 id="bottom-line">En resumen</h2>
      <p>
        La entropía crecerá de todos modos; la única cuestión es quién la frena. Cuantas más reglas
        pasan de las guías escritas a los controles automáticos de CI, menos depende todo de que una
        persona preste atención en la revisión. La IA ejecuta ella misma los controles, ve qué ha
        fallado y lo arregla: puede saltarse una línea de AGENTS.md, pero no puede saltarse un CI en
        rojo. Y cuantos más controles de este tipo tienes, con más tranquilidad puedes dejarle el
        código.
      </p>
      <p>
        Si eres fundador y no lees código, esta lista te sirve igualmente como batería de preguntas para
        tu equipo: ¿cuáles de estos niveles hacen fallar el build de verdad? Cada respuesta del tipo «eso
        lo detectamos en la revisión» es una regla que depende de la atención de alguien un día concreto.
        Por qué el código escrito por agentes necesita estos controles es otra historia:{" "}
        <Link href={VIBECODED_HREF}>gestionar la IA como a un junior</Link>.
      </p>
    </>
  );
}

export function SectionTemplate(): ReactNode {
  return (
    <>
      <h2 id="python-template">Una plantilla para Python</h2>
      <p>
        El enfoque no depende del lenguaje. Para Python lo he empaquetado todo en una plantilla lista
        para usar; úsala con total libertad:{" "}
        <a href={TEMPLATE_HREF} target="_blank" rel="noreferrer">
          python-guardrails-template
        </a>
        .
      </p>
      <p>Incluye:</p>
      <ul>
        <li>
          todos los controles de este artículo detrás de un único comando <code>make verify</code> en
          Docker, y el mismo comando en GitHub Actions;
        </li>
        <li>capas de arquitectura con comprobación de imports;</li>
        <li>un escáner de secretos en cada commit;</li>
        <li>un AGENTS.md en el que casi cada regla apunta al control que la hace cumplir;</li>
        <li>un pequeño ejemplo, para que los controles pasen nada más crear el proyecto.</li>
      </ul>
      <p>Un proyecto nuevo se crea con un solo comando:</p>
      <pre>
        <code>copier copy gh:sg4tech/python-guardrails-template my-project</code>
      </pre>
      <p>
        Y cuando la plantilla se actualiza, <code>copier update</code> lleva los controles nuevos a los
        proyectos existentes y conserva tus cambios. Se acabó configurarlo todo desde cero en cada
        proyecto nuevo.
      </p>
    </>
  );
}
