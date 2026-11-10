import type { OgCardContent } from "../../../_og/render";
import type { AiVibecodingContent } from "../../../views/ai-vibecoding/ai-vibecoding-content";

const description =
  "A tu MVP de vibecoding le falta un sistema alrededor del código. Construyo los controles, los tests, el CI/CD y la arquitectura que la IA no construye.";

export const aiVibecodingContent: AiVibecodingContent = {
  meta: {
    title: "Poner orden en tu MVP de vibecoding",
    description,
    socialTitle: "De un MVP de vibecoding a un negocio que funciona",
    socialDescription: description
  },
  service: {
    name: "Poner orden en tu MVP de vibecoding",
    serviceType: "Desarrollo para MVP creados con IA",
    description:
      "Desarrollo para fundadores cuyo MVP de vibecoding ha dejado de salir a producción. Construyo el proceso de desarrollo que ese código nunca tuvo."
  },
  hero: {
    eyebrow: "MVP de vibecoding → negocio que funciona",
    headlineLeadIn: "A tu MVP de vibecoding ",
    headline: "le falta un sistema alrededor del código.",
    statement:
      "Cambiar de herramienta de IA o hacer sprints de refactorización no lo resuelve. Hace falta el sistema de desarrollo que la IA no construye.",
    promise: "Encuentro lo que falta, lo construyo y dejo un sistema que funciona sin mí.",
    outcome: "Para lanzar cosas nuevas sin miedo a romper lo que ya funciona.",
    habrSignal: { label: "Escribí sobre esto en Habr en 2023", href: "https://habr.com/ru/articles/719352/" },
    statsAriaLabel: "Resultados clave",
    metrics: [
      { id: "experience", figure: "15+", label: "años en desarrollo" },
      { id: "rps", figure: "4K+", label: "RPS en sistemas en producción" },
      { id: "teams", figure: "14+", label: "equipos a los que aceleré el desarrollo" }
    ],
    primaryCta: {
      label: "Cuéntame tu situación en Telegram",
      href: "https://t.me/sg4tech?start=site_es_ai_vibecoding_hero"
    },
    secondaryCtaLabel: "Cómo funciona",
    transformation: {
      withoutSystem: {
        title: "IA sin sistema",
        subtitle: "El código está listo. Luego empieza el caos.",
        generate: "La IA escribe código",
        patch: "Arreglamos un error",
        breakFeature: "Se rompe una función",
        patchAgain: "Volvemos a arreglar",
        regressions: "Nuevas regresiones",
        incident: "Caída en producción a las 3 de la mañana",
        footer: "Impredecible. Caro. Estresante."
      },
      withSystem: {
        title: "IA dentro de un sistema",
        subtitle: "La IA va rápido. El sistema la protege.",
        generate: "La IA escribe código",
        guardrails: "Controles automáticos",
        tests: "Tests",
        cicd: "CI/CD",
        safeReleases: "Lanzamientos seguros",
        footer: "Previsible. Escalable. Duradero."
      },
      caption: "La misma IA. Otro sistema a su alrededor."
    }
  },
  problem: {
    title: "Los problemas de un MVP de vibecoding aparecen siempre de la misma forma.",
    points: [
      {
        id: "breaks",
        text: "Añades una función y se rompen otras tres sin que te des cuenta. Los dos días siguientes se van en averiguar cuáles."
      },
      {
        id: "unknown",
        text: "Hay partes del código que nadie entiende del todo, ni siquiera tú. Tocarlas es como jugar a la ruleta rusa."
      },
      {
        id: "loops",
        text: "La IA reescribe una y otra vez el mismo código de forma distinta. Cada arreglo deshace el anterior, y pagas tokens por dar vueltas en círculo."
      },
      {
        id: "prod",
        text: "En la demo todo funciona. Un usuario real introduce algo raro y producción se cae a las 3 de la mañana. Miras el código y no entiendes cómo funciona."
      }
    ],
    callout: "Todos estos problemas tienen la misma causa: la IA escribe código, pero no construye un sistema a su alrededor."
  },
  guardrails: {
    title: "Las cinco capas de sistema que el código de la IA no trae",
    intro:
      "Cinco capas independientes, y cada una vigila algo que la IA no vigila. Juntas forman el sistema que permite seguir lanzando el producto.",
    productionLabel: "Producción",
    agentsLabel: "Agentes de IA",
    layers: [
      {
        id: "architecture",
        label: "Reglas de arquitectura",
        text: "Una arquitectura que se sostiene sola. Los límites entre módulos, las dependencias y los contratos están escritos de forma que los agentes de IA no pueden saltárselos."
      },
      {
        id: "pipeline",
        label: "Controles en el pipeline",
        text: "Comprobaciones de CI/CD que bloquean los lanzamientos defectuosos. Monitoreo que detecta los problemas antes que los clientes y antes de las 3 de la mañana."
      },
      {
        id: "tests",
        label: "Tests",
        text: "Tests automáticos que no se fían de la siguiente generación de código. Unitarios, de integración y de regresión, para que una función nueva no rompa otras tres sin que nadie lo note."
      },
      {
        id: "code",
        label: "Controles de código",
        text: "Linters, comprobación de tipos, análisis estático, escáneres de seguridad. La base que se salta la mayoría de los MVP de vibecoding. Sin ella, cada arreglo rompe diez cosas más."
      },
      {
        id: "aiWorkflow",
        label: "Reglas para la IA",
        text: "Los límites que le faltaban a la IA: reglas para los agentes, orden en el contexto y autocomprobaciones, para que la IA no deshaga el arreglo de la semana pasada mientras construye la función de hoy."
      }
    ]
  },
  trust: {
    intro:
      "Tu IA se queda; yo construyo el sistema a su alrededor. Durante años ordené código de startups escrito con prisa, y los problemas eran los mismos. Cambia el origen, la solución es la misma.",
    points: [
      {
        id: "experience-stack",
        text: "Más de 15 años con PHP, Python, Java, TypeScript, Node, C++, C#, iOS y Android (y sí, una vez con Flash). Los problemas de código que frenan el desarrollo no dependen del stack. La IA solo hizo que aparecieran antes."
      },
      {
        id: "track-record",
        text: "Resolví este problema en Wowworks, donde llevé el código de una startup a una producción preparada para expandirse a la UE, y en una empresa EdTech en crecimiento. Este enfoque es anterior a la IA.",
        outcomes: [
          { company: "Wowworks", chips: ["errores ↓10×", "velocidad ↑3×", "eficiencia ↑4×"] },
          { company: "EdTech", chips: ["velocidad ↑2×", "caídas ↓10×", "eNPS −100→100"] }
        ]
      },
      {
        id: "habr",
        text: (
          <>
            Escribí justo sobre esto en{" "}
            <a href="https://habr.com/ru/articles/719352/" target="_blank" rel="noreferrer">
              Habr
            </a>{" "}
            en 2023, antes de que la IA lo acelerara todo.
          </>
        )
      },
      {
        id: "hands-on",
        text: "Hago el trabajo yo mismo: arquitectura, controles automáticos, ajuste del trabajo con IA, refactorización."
      }
    ]
  },
  process: {
    title: "Cómo trabajo",
    intro:
      "Sin soluciones decididas de antemano. Primero vemos qué falla de verdad. Después hacemos que los cambios sean seguros de lanzar. Luego construimos un sistema que aguante el crecimiento.",
    outputLabel: "Resultado:",
    steps: [
      {
        title: "Diagnóstico",
        duration: "1–2 semanas",
        points: [
          "Reviso el código, el proceso de desarrollo y cómo usa el equipo la IA",
          "Encuentro qué estorba, qué funciona y qué falta",
          "Decido qué arreglar primero según su valor para el negocio"
        ],
        output: "Una imagen clara y un plan de arreglos por prioridad"
      },
      {
        title: "Protección contra fallos",
        duration: "2–8 semanas",
        points: [
          "Configuro la base del desarrollo: git, CI/CD, monitoreo, logs",
          "Añado las cinco capas de protección, incluidas las reglas para la IA",
          "Corrijo los errores críticos que salen a la luz"
        ],
        output:
          "Código que se puede llevar a producción con seguridad, errores críticos corregidos y la IA trabajando dentro de los controles"
      },
      {
        title: "Escalado",
        duration: "Después, durante meses",
        points: [
          "Defino la arquitectura objetivo y llevo el código hacia ella con seguridad",
          "Ajusto el sistema a tu carga real",
          "Contrato especialistas concretos solo si el crecimiento lo exige"
        ],
        output: "Código que se puede seguir desarrollando sin que las personas nuevas del equipo lo rompan"
      }
    ],
    note: "El objetivo: menos caos, lanzamientos previsibles y la confianza para seguir avanzando.",
    expectations: {
      title: "Qué esperar",
      points: [
        "Primeras mejoras en CI/CD y monitoreo en 2–4 semanas",
        "Los errores críticos suelen quedar corregidos el primer mes",
        "Poner en orden la arquitectura lleva unos meses: cuántos, depende del código de partida y del equipo"
      ]
    }
  },
  whoNotFor: {
    title: "Con quién no encajo",
    items: [
      "Tu principal cuello de botella es el marketing y las ventas. Ahí hace falta un especialista en salida al mercado.",
      "Todavía no tienes un MVP que funcione. Primero hay que construirlo; después, arreglarlo.",
      "Buscas ayuda gratuita o indicaciones para hacerlo todo por tu cuenta."
    ]
  },
  featuredEssay: {
    label: "Artículo relacionado",
    slug: "vibecoded-mvp-stopped-shipping"
  },
  faq: [
    {
      question: "¿Tendré que dejar de usar mis herramientas de IA?",
      answer:
        "No. Yo también hago vibecoding: trabajo con Claude Code, Codex y JetBrains IDE. No dependo de un stack concreto, así que vale cualquier herramienta que use tu equipo. Construyo el sistema alrededor de tu forma de trabajar con IA."
    },
    {
      question: "¿Cuánto cuesta?",
      answer:
        "El pago es mensual y normalmente trabajamos de 2 a 4 meses. El precio exacto depende del alcance; lo hablamos por mensaje."
    },
    {
      question: "¿Tendré que contratar a un montón de desarrolladores caros?",
      answer:
        "No necesariamente. Primero sacamos más partido a la IA que ya usas: ajustamos las reglas, los controles automáticos y la arquitectura a su alrededor. Si el crecimiento exige conocimientos concretos, sumamos especialistas puntuales. La contratación queda para el final."
    },
    {
      question: "¿Trabajarás con nuestro desarrollador o CTO?",
      answer:
        "Sí. El sistema que construyo ayuda a tu equipo actual a lanzar más rápido. Tu CTO o desarrollador sigue en el proyecto, y decidimos juntos qué se implementa."
    },
    {
      question: "Ya cambiamos de herramientas de IA, hicimos refactorización y contratamos a un senior. ¿Qué cambia contigo?",
      answer:
        "Una herramienta nueva no añade lo que falta, por eso los problemas vuelven. Refactorizar sin tests trae errores nuevos. Un senior también necesita un sistema alrededor del código para cambiarlo con seguridad. Yo construyo primero ese sistema, y sus reglas se comprueban automáticamente."
    },
    {
      question: "¿Qué implantas exactamente?",
      answer:
        "Herramientas estándar: Agents.md, linters (ESLint, PHPStan, mypy), comprobación de tipos, escáneres de seguridad, tests (Jest, Pytest, PHPUnit), GitHub Actions, Sentry o DataDog. Nada exótico. El trabajo principal es conectarlo todo para que los agentes de IA no puedan saltarse los controles en la siguiente petición."
    },
    {
      question: "¿Están en riesgo ahora los datos de mis usuarios?",
      answer:
        "Es posible. En los MVP de vibecoding es habitual encontrar contraseñas y claves dentro del código, entradas sin validar y dependencias que nadie vigila. La IA por sí sola no hace que el código sea seguro. Estudié seguridad informática en la universidad, y para mí es un requisito básico. En la fase «Protección contra fallos» encuentro y corrijo estos problemas uno a uno."
    }
  ],
  finalCta: {
    heading: (
      <>
        Lo arreglamos <em>para que aguante.</em>
      </>
    ),
    text: "Cuéntame qué pasa con tu proyecto. Veremos rápido si encajamos y por dónde empezar.",
    label: "Cuéntame tu proyecto",
    href: "https://t.me/sg4tech?start=site_es_ai_vibecoding_final"
  }
};

export const aiVibecodingOgCard: OgCardContent = {
  alt: "Vibecoding con IA: de un MVP de vibecoding a un negocio que funciona",
  eyebrow: "Vibecoding con IA",
  title: "De un MVP de vibecoding a un negocio que funciona",
  subtitle: "Controles automáticos, tests, CI/CD y la arquitectura que la IA no construye"
};
