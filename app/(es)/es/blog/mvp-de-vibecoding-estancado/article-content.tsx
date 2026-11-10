// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds the argument: the stall pattern → the junior reframe →
// the proof case → the practice mapping → why past fixes failed → the restart
// sequence.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/vibecoded-mvp-stopped-shipping.module.css";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const PILLAR_HREF = getPostPathInLocale("diagnose-broken-engineering-delivery", "es");
const HUB_HREF = pagePath("es", "ai-vibecoding");
const HANGOVER_HREF = "https://www.fastcompany.com/91398622/the-vibe-coding-hangover-is-upon-us";
const VIBE_STUDY_HREF = "https://arxiv.org/abs/2512.11922";
const CONVERGED_HREF =
  "https://www.cio.com/article/4162085/your-ai-coding-agent-isnt-a-tool-its-a-junior-developer-treat-it-like-one.html";
const VERACODE_HREF = "https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/";
const AGENTS_MD_HREF = "https://agents.md";

export function ArticleLede(): ReactNode {
  return (
    <>
      Un MVP de vibecoding se atasca por la misma razón que un equipo de desarrolladores junior sin un
      senior: el código se escribe rápido, nada detecta los errores antes de que lleguen a producción y
      cada cambio nuevo rompe en silencio el anterior.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        La misma historia aparece una y otra vez en las comunidades de fundadores (la prensa tecnológica
        ya le ha puesto nombre:{" "}
        <a href={HANGOVER_HREF} target="_blank" rel="noreferrer">
          la resaca del vibe coding
        </a>
        ) y siempre llega al mismo punto. El MVP existe. Tiene usuarios reales, a veces ingresos reales.
        Los primeros meses fueron la mejor experiencia de construcción en la vida del fundador: describes
        una función en Cursor, Claude Code, Lovable o Bolt, y obtienes una función. Y luego, al cabo de
        unos meses, los lanzamientos se frenan hasta pararse. Poco a poco. Cada lanzamiento da más
        miedo, los arreglos tardan más y los cambios que antes llevaban una tarde empiezan a llevar
        semanas.
      </p>
      <p>
        La conclusión habitual en este punto es que programar con IA fue una trampa, o que el código es
        basura y hay que reescribirlo. Creo que ninguna de las dos es cierta. Lo que veo en este código
        es algo que llevaba años arreglando antes de que un LLM escribiera una sola línea de código en
        producción: el resultado del trabajo rápido y sin supervisión de juniors. La industria sabe
        gestionarlo desde hace décadas, y en un MVP de vibecoding típico casi nada de ese conocimiento se
        ha aplicado. Esa es la buena noticia: tu situación se conoce bien, y sus soluciones también.
      </p>
    </>
  );
}

export function SectionStall(): ReactNode {
  return (
    <>
      <h2 id="stall">Cómo se ve el atasco</h2>
      <p>El patrón se repite con tanta regularidad que puedo enumerar los síntomas sin ver el código:</p>
      <ul>
        <li>
          Añades una función y se rompen otras tres. Averiguar <em>cuáles</em> tres lleva más tiempo que
          la propia función.
        </li>
        <li>
          Hay partes del código generado por IA que nadie entiende: ni tú, ni la IA que las escribió.
          Tocarlas es jugársela.
        </li>
        <li>
          La IA reescribe una y otra vez el mismo código de forma distinta. Cada arreglo deshace uno
          anterior. Pagas tokens por dar vueltas en círculo.
        </li>
        <li>
          El flujo de la demo funciona. Luego un usuario real hace algo un poco inusual, producción se
          cae de madrugada y te enteras por la queja de un usuario.
        </li>
      </ul>
      <p>
        Los cuatro síntomas tienen el mismo origen: nada en el código ni en el proceso de trabajo fija
        las decisiones anteriores, así que cada cambio nuevo vuelve a tirar los dados sobre todo lo
        anterior. La investigación empieza a documentar el mismo intercambio:{" "}
        <a href={VIBE_STUDY_HREF} target="_blank" rel="noreferrer">
          un estudio reciente sobre el vibe coding en la práctica
        </a>{" "}
        describe una generación sin fricción que se paga más tarde con incoherencias de arquitectura,
        agujeros de seguridad y un mantenimiento costoso.
      </p>
    </>
  );
}

export function SectionJunior(): ReactNode {
  return (
    <>
      <h2 id="junior">El junior más rápido que has contratado nunca</h2>
      <p>
        Este es el cambio de enfoque que vuelve manejable toda la situación: trata al agente de
        programación como a un compañero con un perfil muy concreto. Es el desarrollador junior más
        rápido con el que has trabajado nunca: produce una función en minutos, nunca te lleva la
        contraria, nunca se cansa. Y no recuerda en absoluto por qué se tomaron las decisiones del mes
        pasado, no tiene ningún miedo a tocar nada y no responde del resultado. Te entregará con total
        aplomo código que parece terminado, porque parecer terminado es justo lo que optimiza.
      </p>
      <p>
        Los equipos de software han tenido a esta persona en plantilla desde que existe la industria:
        cada práctica construida alrededor de los desarrolladores junior existe por este perfil. Los
        ingenieros con experiencia{" "}
        <a href={CONVERGED_HREF} target="_blank" rel="noreferrer">
          ya coinciden en gran medida con esta forma de verlo
        </a>
        ; lo que no ha llegado a los fundadores es la mitad que importa: el sistema de gestión que viene
        con ella.
      </p>
      <p>
        Lo digo como alguien que construye con agentes de IA todos los días: mis propios productos están
        hechos con vibecoding y no tengo ninguna intención de dejarlo. Cada cambio que producen mis
        agentes pasa linters, comprobación de tipos y tests en CI antes de integrarse. Las herramientas
        cambian según el stack (mypy y pytest en Python, tsc y ESLint en Node, PHPStan y PHPUnit en PHP),
        pero la idea es la misma. La velocidad es real. El perfil también.
      </p>
    </>
  );
}

export function SectionCase(): ReactNode {
  return (
    <>
      <p>
        He limpiado varias veces lo que deja la versión humana de esto. En una startup de EdTech en la
        que trabajé como CTO a tiempo parcial, producción podía estar caída durante horas antes de que
        nadie se enterara: nada la vigilaba. Sin alertas, sin seguimiento de errores. Había bugs
        funcionales en el producto a los que nadie prestaba atención. El código se había escrito
        deprisa, por gente con más velocidad que experiencia, y los mayores huecos estaban a su
        alrededor: nadie revisaba los cambios, nada probaba los flujos críticos, nada vigilaba
        producción, y un lanzamiento consistía en que un desarrollador entraba en el servidor de
        producción y cambiaba cosas a mano.
      </p>
      <p>
        Pusimos monitoreo, añadimos tests, revisión de código y un paso de QA, sustituimos los cambios
        a mano en el servidor por un pipeline de lanzamiento y, de paso, reescribimos algunas partes del
        código. Las caídas se acabaron; producción se mantuvo estable a partir de entonces. A lo largo
        del proyecto, el tiempo de caída se redujo más de diez veces, la entrega (time to market y
        throughput) se multiplicó por más de dos, los costes de operación bajaron 1,5 veces y el eNPS
        del equipo pasó del −100&nbsp;% al +100&nbsp;%. Además de las herramientas, me senté a solas con
        el desarrollador para hablar de sus objetivos y de cómo alcanzarlos, porque gestionar a un
        junior incluye hacerle crecer. Nada de esto es exótico; es el kit estándar, aplicado tarde.
      </p>
      <p className={styles.pullquote}>
        Aquella startup no tenía IA, y el fallo es idéntico al de un MVP construido con IA. La IA
        simplemente llega antes a él.
      </p>
    </>
  );
}

function MappingTable(): ReactNode {
  return (
    <table className={styles.mappingTable}>
      <thead>
        <tr>
          <th>Cómo gestionan los equipos a los juniors</th>
          <th>El equivalente con IA</th>
          <th>Qué evita</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Un documento de incorporación: cómo estructuramos el código aquí, qué no hacemos nunca</th>
          <td>
            Un archivo de convenciones que el agente lee en cada tarea (
            <a href={AGENTS_MD_HREF} target="_blank" rel="noreferrer">
              AGENTS.md
            </a>{" "}
            / CLAUDE.md)
          </td>
          <td>Que el agente reinvente la arquitectura desde cero en cada petición</td>
        </tr>
        <tr>
          <th>Revisión de código antes de integrar nada</th>
          <td>Una persona o un agente senior revisa cada cambio de la IA; los linters y la comprobación de tipos funcionan como un filtro obligatorio</td>
          <td>Que un código que «parece terminado» rompa en silencio funciones que funcionaban</td>
        </tr>
        <tr>
          <th>Una batería de tests que tiene que seguir en verde</th>
          <td>Tests en los flujos críticos, ejecutados automáticamente; si están en rojo, no se integra</td>
          <td>El arreglo que rompe otras dos cosas; la regresión que descubres en producción</td>
        </tr>
        <tr>
          <th>Un CI que no deja pasar cambios defectuosos</th>
          <td>El mismo pipeline, aplicado a lo que produce el agente: lint, tipos, escaneo de seguridad, build</td>
          <td>Credenciales escritas en el código, entradas sin validar, dependencias que nadie eligió a propósito</td>
        </tr>
        <tr>
          <th>Monitoreo, para que los problemas salgan a la luz antes que los clientes</th>
          <td>Seguimiento de errores y alertas conectados al producto desplegado</td>
          <td>Producción caída durante horas mientras todos suponen que va bien</td>
        </tr>
        <tr>
          <th>Tareas pequeñas y acotadas: a un junior nunca se le da «rehacer la facturación» en un solo ticket</th>
          <td>Un cambio por petición, con un tamaño que una persona pueda revisar de verdad</td>
          <td>El diff de 4000 líneas que nadie puede revisar, que es donde viven las peores sorpresas</td>
        </tr>
        <tr>
          <th>Reuniones uno a uno y feedback regulares, para que el junior crezca en lugar de repetir errores</th>
          <td>Lo que detecta la revisión se incorpora al archivo de convenciones, para que el agente deje de cometer ese error</td>
          <td>Pagar cada semana, en tokens y en tiempo de revisión, la misma corrección</td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionMapping(): ReactNode {
  return (
    <>
      <h2 id="practices">Qué hacen los equipos con experiencia con los juniors, y el equivalente con IA</h2>
      <p>
        Las prácticas que convierten el trabajo de los juniors en un negocio que funciona son de lo más
        conocidas. Cada una tiene un equivalente directo en la era de la IA, y a un MVP de vibecoding
        suelen faltarle todas a la vez.
      </p>
      <MappingTable />
      <p>
        La columna de la izquierda y la de la derecha son la misma lista. Ese es todo el argumento de
        este artículo: la disciplina para gestionar agentes de IA ya existe, está probada a fondo y
        espera a que la apliques.
      </p>
      <p>
        La fila de seguridad lleva una cifra que conviene conocer: según el{" "}
        <a href={VERACODE_HREF} target="_blank" rel="noreferrer">
          2025 GenAI Code Security Report de Veracode
        </a>
        , el 45&nbsp;% de las muestras de código generado por IA, de más de 100 modelos, no pasó los
        controles de seguridad. El filtro existe porque el junior produce vulnerabilidades a escala.
      </p>
      <p>
        Escribir mejores prompts falta en la lista a propósito. Un senior arregla el entorno que rodea
        al junior para que un trabajo descuidado no pueda llegar físicamente a producción, esté como
        esté redactado el ticket.
      </p>
    </>
  );
}

export function SectionFailedFixes(): ReactNode {
  return (
    <>
      <h2 id="failed-fixes">Los arreglos que ya probaste y por qué no aguantaron</h2>
      <p>
        Cuando un fundador empieza a buscar ayuda externa, normalmente ya ha pasado por dos o tres
        intentos de rescate. Esos intentos fallan de formas previsibles, y la mirada del junior explica
        cada uno de ellos.
      </p>
      <p>
        <strong>Cambiar de herramienta de IA.</strong> Pasar de Cursor a Windsurf o a Copilot sustituye
        a un junior por otro junior. El nuevo puede ser más listo; sigue sin memoria, sin miedo y sin
        ninguna revisión esperando su trabajo. Los mismos patrones vuelven en unas semanas, porque nunca
        dependieron de qué modelo escribió el código.
      </p>
      <p>
        <strong>Mejores prompts y archivos de reglas.</strong>{" "}
        Más cerca: esto es el documento de incorporación, y es una capa real. Pero una instrucción que
        el pipeline no hace cumplir es una sugerencia. Un junior asiente ante la guía de estilo y luego
        entrega lo que entrega; lo que convierte la guía en algo real es la revisión y los controles que
        hay detrás.
      </p>
      <p>
        <strong>El sprint de refactorización.</strong>{" "}
        «Paramos las funciones nuevas dos semanas y limpiamos». Refactorizar sin tests es la forma en
        que un junior convierte bugs viejos en bugs nuevos: el código acaba roto <em>de otra manera</em>,
        y has pagado por ello dos semanas con todo parado. La limpieza va después de la red que atrapa lo que
        la limpieza rompe.
      </p>
      <p>
        <strong>Contratar a un desarrollador senior.</strong> El instinto correcto, a menudo en el
        momento equivocado. Mete a un senior en un código sin tests, sin historial de revisiones y sin
        monitoreo, y sus primeros meses se van en arqueología: redescubrir a mano hechos que las
        herramientas deberían mostrar directamente. Algunos se van. Construye primero la red de
        seguridad y esa misma contratación rinde desde la primera semana, si es que todavía la
        necesitas.
      </p>
    </>
  );
}

export function SectionRestart(): ReactNode {
  return (
    <>
      <h2 id="restart">Volver a lanzar</h2>
      <p>El orden de los pasos importa más que cualquier práctica concreta.</p>
      <ol>
        <li>
          <strong>Primero, el diagnóstico.</strong> ¿Qué capa ausente es la que frena los lanzamientos{" "}
          <em>ahora</em>? Si producción se rompe sin que nadie se entere, el monitoreo va primero. Si
          cada cambio provoca regresiones, primero van los tests de los dos o tres flujos críticos del
          usuario. Un MVP de vibecoding no puede absorber seis prácticas nuevas en una semana; empieza
          por la que más duele y luego añade la siguiente.
        </li>
        <li>
          <strong>Construir la red de seguridad.</strong>{" "}
          Monitoreo y seguimiento de errores, un pipeline de CI con controles reales, tests en los flujos
          sin los que el negocio muere, revisión de cada cambio. Sea de una persona o de un agente, la
          regla es la misma: nada se integra sin que alguien lo vea. Esta fase se mide en semanas, un par
          de meses como mucho, y es donde los lanzamientos vuelven a arrancar sin hacer ruido, porque los
          cambios dejan de dar miedo.
        </li>
        <li>
          <strong>Solo entonces, escalar.</strong>{" "}
          Limpieza de arquitectura, ajuste de rendimiento, decisiones de contratación: el trabajo de
          escalar un software generado por IA. Todo eso sale barato cuando la red existe y es temerario
          mientras no existe.
        </li>
      </ol>
      <p>
        Es la misma secuencia que llevo años aplicando a código escrito por juniors, y es justo lo que
        ofrezco para productos hechos con vibecoding. La versión larga, con lo que cuesta cada fase y lo
        que aporta, está en la página <Link href={HUB_HREF}>Poner orden en tu MVP de vibecoding</Link>. Y
        si quieres <em>medir</em> dónde se atasca de verdad tu entrega en lugar de adivinarlo (qué
        tareas se quedan paradas y en qué etapa), escribí una guía aparte sobre{" "}
        <Link href={PILLAR_HREF}>cómo diagnosticar un proceso de entrega con métricas</Link>; se aplica
        igual a un equipo de dos personas que trabaja con IA que a una organización de cuarenta
        ingenieros.
      </p>
    </>
  );
}
