import type { OgCardContent } from "../../../_og/render";
import type { Yii2Content } from "../../../views/yii2/yii2-content";

export const yii2Content: Yii2Content = {
  meta: {
    title: "Desarrollo en Yii2: lanzamientos más rápidos",
    description:
      "Tu proyecto en Yii2 frena el negocio. Encuentro qué falla en el código y en los procesos, lo arreglo y dejo un sistema que lanza de forma previsible sin mí.",
    socialTitle: "Desarrollo en Yii2: más velocidad y más calidad",
    socialDescription:
      "Ayudo a empresas con proyectos en Yii2 a mejorar la calidad, la estabilidad y la velocidad de desarrollo sin caos ni incendios constantes."
  },
  service: {
    name: "Desarrollo en Yii2",
    serviceType: "Desarrollo en Yii2",
    description:
      "Desarrollo para empresas con proyectos en Yii2: lanzamientos más rápidos, más estabilidad, menos errores y un desarrollo previsible gracias a controles automáticos, CI/CD, monitoreo e IA."
  },
  hero: {
    headlineLeadIn: "Tu proyecto en Yii2 ",
    headline: "frena tu negocio.",
    action: "Encuentro qué falla de verdad y lo arreglo.",
    statement: "Lo que más frena suele ser el proceso de desarrollo que rodea al código.",
    promise: "Encuentro la causa, la elimino y dejo un sistema que funciona sin mí.",
    primaryCta: { label: "Cuéntame tu situación en Telegram", href: "https://t.me/sg4tech?start=site_es_yii2_hero" },
    secondaryCtaLabel: "Cómo trabajo",
    phpRussiaLabel: "Ponente en PHP Russia",
    statsAriaLabel: "Resultados clave",
    metrics: [
      { id: "bugs", figure: "10×", label: "menos errores e incidencias en producción" },
      { id: "downtime", figure: "5×", label: "menos caídas, lanzamientos más previsibles" },
      { id: "delivery", figure: "2–3×", label: "desarrollo más rápido sin contratar a más gente" }
    ]
  },
  transformation: {
    title: "De lanzar a la suerte a un desarrollo bajo control",
    intro: "Con el código legado se puede vivir. Lo que frena el negocio son los lanzamientos poco fiables.",
    fireFighting: {
      title: "Modo apagafuegos",
      manualChecks: "comprobaciones manuales",
      hiddenQueue: "cola oculta",
      hotfixes: "parches urgentes"
    },
    deliverySystem: {
      title: "Modo desarrollo bajo control",
      guardrails: "controles automáticos",
      cicd: "CI/CD",
      monitoring: "monitoreo",
      outcome: "lanzamientos previsibles"
    },
    states: [
      { id: "before", value: "Antes", label: "lanzamientos arriesgados e incendios constantes" },
      { id: "after", value: "Después", label: "lanzamientos protegidos por controles, cuellos de botella a la vista" },
      { id: "goal", value: "Objetivo", label: "lanzamientos rápidos sin caos" }
    ]
  },
  problem: {
    title: "Si tu proyecto en Yii2 tiene muchos años, el problema rara vez es solo el código.",
    points: [
      { id: "slowdown", text: "Las funciones nuevas salen cada vez más despacio." },
      {
        id: "risk",
        text: "Con cada lanzamiento crece el riesgo de errores, regresiones y de apagar incendios a mano."
      },
      {
        id: "legacy",
        text: "El código legado, las comprobaciones manuales y el caos en los procesos frenan el negocio más de lo que parece."
      },
      { id: "busy", text: "El equipo está ocupado, pero la velocidad de lanzamiento no convence a nadie." }
    ],
    callout:
      "Si el desarrollo se ha convertido en un cuello de botella, el problema va más allá del código: falla todo el proceso de lanzamiento."
  },
  levers: {
    quality: {
      title: "Primero, la calidad: estabilidad, errores y lanzamientos previsibles.",
      intro:
        "Los controles automáticos, el CI/CD, la IA y el monitoreo reducen el riesgo de cada lanzamiento antes de que los clientes o el negocio noten el problema.",
      points: [
        {
          id: "guardrails",
          text: "controles automáticos en el código y en el proceso, para que los errores típicos no lleguen a producción"
        },
        { id: "cicd", text: "CI/CD que comprueba los escenarios críticos antes de cada lanzamiento" },
        { id: "monitoring", text: "monitoreo y alertas que avisan de los fallos antes que los clientes" },
        {
          id: "automation",
          text: "IA y automatización puntual para comprobaciones rutinarias, regresiones y mantenimiento del código legado"
        }
      ]
    },
    speed: {
      title: "Después, la velocidad. El código por sí solo no la resuelve.",
      intro:
        "La velocidad sale de las personas, los procesos, las métricas y los agentes de IA. Sin ellos, el equipo sigue atrapado en lo urgente y apagando incendios.",
      points: [
        {
          id: "bottleneck",
          text: "Encuentro dónde se pierde de verdad el tiempo: colas, aprobaciones manuales, dependencias ocultas"
        },
        {
          id: "metrics",
          text: "Configuro métricas de desarrollo para que el cuello de botella se vea en los números y no haya que discutirlo"
        },
        { id: "alignment", text: "Alineo personas, procesos y prioridades en torno a un único flujo de trabajo" },
        { id: "agents", text: "Incorporo agentes de IA donde eliminan trabajo manual y acortan el ciclo" }
      ]
    }
  },
  trust: {
    intro:
      "Soy un líder de desarrollo que ha arreglado procesos desde dentro de empresas reales, muchas veces y con mis propias manos.",
    points: [
      { id: "experience", text: "Más de 15 años en desarrollo." },
      {
        id: "fixes",
        text: "He ordenado el desarrollo muchas veces en equipos donde la velocidad y la calidad chocaban entre sí."
      },
      {
        id: "hands-on",
        text: "Trabajo con las manos en el código y a nivel de sistema: arquitectura, procesos, métricas y gestión."
      },
      {
        id: "track-record",
        text: "Experiencia en Wowworks (plataforma B2B de facility management, expansión a la UE, 3,6 millones de dólares captados) y Skyeng (plataforma EdTech escolar, más de 2 millones de usuarios activos al mes, valoración superior a 100 millones de dólares)."
      }
    ]
  },
  process: {
    title: "Cómo trabajo",
    intro:
      "Sin magia y sin soluciones decididas de antemano. Primero hacemos el sistema visible y seguro; después aceleramos el desarrollo.",
    outputLabel: "Resultado:",
    steps: [
      {
        title: "Diagnóstico (1–2 semanas)",
        summary: "Encontrar qué frena de verdad el desarrollo.",
        points: [
          "Reviso el código y cómo funciona el despliegue",
          "Encuentro los cuellos de botella reales",
          "Evalúo el riesgo de los lanzamientos, la calidad y la cobertura de tests"
        ],
        output: "un plan claro y una lista de acciones por prioridad"
      },
      {
        title: "Base de calidad",
        summary: "Reducir el riesgo antes del próximo lanzamiento.",
        points: [
          "Configuro CI/CD y controles automáticos",
          "Pongo en marcha monitoreo y alertas",
          "Reduzco la probabilidad de incidentes en producción"
        ],
        output: "lanzamientos estables y con menos riesgo"
      },
      {
        title: "Aceleración del desarrollo",
        summary: "Acortar el camino de la tarea a producción.",
        points: ["Ordeno el trabajo del equipo", "Introduzco métricas de desarrollo", "Uso la IA donde aporta una ventaja real"],
        output: "lanzamientos más rápidos y previsibles"
      }
    ],
    note: "El objetivo es un desarrollo que trabaje para el negocio sin esfuerzos heroicos.",
    expectations: {
      title: "Qué esperar",
      points: [
        "Primeras mejoras visibles en CI/CD y monitoreo en 2–4 semanas",
        "Una aceleración notable del desarrollo, normalmente en pocos meses",
        "El ritmo depende del tamaño del equipo y de la deuda técnica acumulada"
      ]
    }
  },
  proof: {
    title: "Materiales públicos",
    intro:
      "Con ellos puedes ver rápido cómo pienso y cómo trabajo la calidad, la velocidad, los sistemas y la IA en el desarrollo.",
    talks: [
      {
        id: "event",
        label: "Charla en PHP Russia",
        href: "https://phprussia.ru/2019/meetups#1457427",
        description:
          "Página de la charla «¿Cómo usar Yii2 en Enterprise? Tomar las mejores prácticas de Symfony» en el sitio de la conferencia"
      },
      {
        id: "recording",
        label: "Grabación en YouTube",
        href: "https://www.youtube.com/watch?v=lCMn52lMQks",
        description: "La grabación completa de la charla"
      }
    ],
    channelsAriaLabel: "Dónde escribo"
  },
  faq: [
    {
      question: "¿Hay que reescribir todo el proyecto?",
      answer:
        "No. El objetivo es mejorar el proyecto en Yii2 que ya tienes, sin una reescritura cara y arriesgada. Primero hacemos que el sistema sea fiable y manejable."
    },
    {
      question: "¿Y si el proyecto casi no tiene tests?",
      answer:
        "Es un punto de partida habitual en un proyecto legado, y no impide empezar. Añadimos tests donde el riesgo y el valor son mayores, sin detener el desarrollo durante meses."
    },
    {
      question: "¿Cuándo se verán resultados?",
      answer:
        "Las mejoras en CI/CD y monitoreo suelen verse en 2–4 semanas. La aceleración del desarrollo depende del equipo y de la deuda técnica, pero los primeros cambios se notan bastante pronto."
    },
    {
      question: "¿Haces el trabajo tú mismo?",
      answer:
        "Sí. Corrijo el código, configuro los pipelines y los controles automáticos, y trabajo con tu equipo hasta que los cambios funcionan de principio a fin."
    }
  ],
  finalCta: {
    heading: (
      <>
        Ahórrate seis meses de debates sobre estrategia: <em>veamos qué falla y arreglémoslo.</em>
      </>
    ),
    text: "Cuéntame qué te duele más y qué resultado buscas. Te responderé con un diagnóstico breve y con lo primero que arreglaría.",
    label: "Cuéntame qué falla",
    href: "https://t.me/sg4tech?start=site_es_yii2_final"
  }
};

export const yii2OgCard: OgCardContent = {
  alt: "Desarrollo en Yii2: lanzamientos más rápidos y más calidad",
  eyebrow: "Desarrollo en Yii2",
  title: "Calidad, previsibilidad y velocidad sin reescribir",
  subtitle: "CI/CD, monitoreo, métricas de desarrollo, IA"
};
