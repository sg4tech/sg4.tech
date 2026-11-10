import type { OgCardContent } from "../../_og/render";
import type { HomeContent } from "../../views/home/home-content";

const description =
  "Construyo software que sale a tiempo y funciona de forma estable en producción: escribo el código, arreglo lo que falla y dirijo el desarrollo.";

export const homeContent: HomeContent = {
  meta: {
    title: "Desarrollo de software y liderazgo técnico",
    description
  },
  service: {
    name: "Victor Demin — desarrollo de software",
    serviceType: "Desarrollo de software y liderazgo técnico",
    description
  },
  hero: {
    eyebrow: "Desarrollo de software y liderazgo técnico",
    headline: "Construyo sistemas que funcionan.",
    phpRussiaLabel: "Ponente en PHP Russia",
    lead: "Tu producto sale a tiempo, funciona de forma estable en producción y no se desmorona al crecer.",
    text: "Con pensamiento sistémico, métricas de desarrollo e IA, lo consigo más rápido y con menos caos.",
    primaryCta: { label: "Hablemos de tu proyecto", href: "https://t.me/sg4tech?start=site_es_hero" },
    secondaryCtaLabel: "Cómo trabajo",
    credibility: "Experiencia en startups y empresas de producto en crecimiento.",
    statsAriaLabel: "Resultados clave",
    metrics: [
      { id: "speed", figure: "2–3×", label: "desarrollo más rápido" },
      { id: "quality", note: "Hasta", figure: "10×", label: "menos errores y caídas" },
      { id: "predictability", label: "Más previsibilidad" }
    ]
  },
  problem: {
    title: "El producto se vende. El desarrollo no da abasto.",
    stages: [
      {
        id: "early",
        title: "Primeros clientes",
        points: [
          "El código del MVP es difícil de cambiar",
          "Las funciones nuevas tardan más de lo previsto",
          "Solo una o dos personas saben cómo funciona todo"
        ],
        closing: "Hay demanda. El código no está preparado para ella."
      },
      {
        id: "growth",
        title: "Crecimiento",
        points: [
          "Las funciones tardan demasiado en salir",
          "Los plazos se incumplen incluso con planificación",
          "Cada versión trae más errores"
        ],
        closing: "Tienes un equipo y está ocupado. Aun así, el resultado se queda corto."
      },
      {
        id: "scale",
        title: "Escala",
        points: [
          "Cada cambio afecta a demasiadas partes del sistema",
          "La coordinación frena todo el trabajo",
          "Cuanto más crece el sistema, más arriesgado es cada lanzamiento"
        ],
        closing: "La complejidad crece más rápido que el producto."
      }
    ],
    callout: [
      "Contratar a más gente rara vez lo resuelve.",
      "La solución está en cómo se desarrolla y se lanza el producto. A eso me dedico."
    ]
  },
  trust: {
    intro: "Escribo el código, dirijo el desarrollo y me quedo hasta que todo funciona en producción.",
    points: [
      { id: "experience", text: "Más de 15 años en desarrollo" },
      { id: "leadership", text: "Más de 8 años dirigiendo equipos" },
      { id: "mvp", text: "He escrito MVP yo mismo, de la primera línea al lanzamiento" },
      { id: "scale", text: "He hecho crecer equipos y he acelerado los lanzamientos" },
      { id: "writing", text: "Escribo sobre métricas de desarrollo, cuellos de botella y trabajo con IA" }
    ]
  },
  results: {
    title: "Resultados",
    intro: "Qué cambió en las empresas donde dirigí el desarrollo.",
    problemLabel: "Antes",
    workLabel: "Qué hice",
    cases: [
      {
        title: "Desarrollo más rápido",
        company: "Empresa B2B (mercados internacionales, 3 equipos multidisciplinares)",
        problem: ["Desarrollo lento e impredecible", "Muchos errores"],
        work: [
          "Introduje métricas de desarrollo",
          "Rediseñé el camino de cada tarea, de la idea al lanzamiento",
          "Alineé el desarrollo con los objetivos del producto"
        ],
        metrics: [
          { figure: "2–3×", label: "desarrollo más rápido" },
          { figure: "10×", label: "menos errores" },
          { icon: "predictable", label: "Lanzamientos previsibles" }
        ]
      },
      {
        title: "Del caos al sistema",
        company: "Empresa EdTech (en fase de crecimiento)",
        problem: ["Desarrollo caótico", "Las funciones nuevas tardaban mucho en salir", "NPS bajo"],
        work: [
          "Separé la definición de ideas del desarrollo",
          "Establecí un proceso de desarrollo",
          "Organicé el feedback de los usuarios"
        ],
        metrics: [
          { figure: "2×", label: "más rápido al mercado" },
          { figure: "2×", label: "más tareas terminadas" },
          { icon: "nps", label: "El NPS subió notablemente" }
        ]
      },
      {
        title: "Ahorro y eficiencia",
        company: "Empresa de producto (en fase de expansión)",
        problem: ["Desarrollo caro", "Poco rendimiento del equipo"],
        work: [
          "Encontré los cuellos de botella con la teoría de restricciones",
          "Eliminé el trabajo innecesario",
          "Ordené las prioridades"
        ],
        metrics: [
          { figure: "~1,5×", label: "desarrollo más barato" },
          { icon: "throughput", label: "Más rendimiento del equipo" },
          { icon: "stable", label: "Un sistema más estable" }
        ]
      }
    ]
  },
  process: {
    title: "Cómo trabajo",
    outputLabel: "Resultado:",
    steps: [
      {
        title: "Diagnóstico y plan (1–2 semanas)",
        points: [
          "Conozco tu producto, a tus usuarios y los objetivos del negocio",
          "Reviso el código, la arquitectura y cómo se lanza hoy",
          "Acordamos el alcance, las prioridades y el primer lanzamiento"
        ],
        output: "un plan de trabajo y un primer lanzamiento definido"
      },
      {
        title: "Desarrollo",
        points: [
          "Escribo el código: funciones nuevas, integraciones, correcciones",
          "Desde el primer día configuro CI, tests y comprobaciones automáticas",
          "Trabajo en iteraciones cortas, y puedes ver el resultado de cada una"
        ],
        output: "software que funciona y sale por partes"
      },
      {
        title: "Lanzamiento y estabilización",
        points: [
          "Llevo el producto a producción",
          "Corrijo lo que encuentran los usuarios reales",
          "Mantengo los lanzamientos previsibles a medida que el producto crece"
        ],
        output: "un producto que funciona de forma estable en producción"
      },
      {
        title: "Crecer con el producto",
        points: [
          "Dirijo el desarrollo cuando aumenta el trabajo",
          "Si hace falta, contrato ingenieros y los dirijo",
          "Mantengo el ritmo con IA y métricas de desarrollo"
        ],
        output: "un código y un equipo que siguen lanzando"
      }
    ],
    note: "Sin magia. Solo un sistema que funciona."
  },
  fit: {
    title: "Con quién trabajo",
    intro: "Yo lanzo el producto. Tú traes a los clientes.",
    groups: [
      {
        id: "fit",
        title: "Para quién es",
        points: [
          "Fundadores y empresas de producto (B2B, SaaS, plataformas) que necesitan construir o arreglar su producto",
          "Conoces a tus clientes y tu producto ya está validado en el mercado (al menos un MVP)",
          "Ya tienes ingresos y un canal de ventas que funciona"
        ]
      },
      {
        id: "notFit",
        title: "Para quién no es",
        points: [
          "Fase de idea: todavía no hay un público claro, un MVP validado ni ingresos",
          "Trabajo gratuito o pago solo con participación en la empresa",
          "Servicios de marketing, crecimiento o captación de clientes",
          "Solo sumar desarrolladores a tu equipo, sin responsabilidad sobre el resultado"
        ]
      }
    ]
  },
  specializations: {
    title: "Servicios específicos",
    intro: "Si ya tienes claro tu problema, empieza por la página pensada para él.",
    links: [
      {
        target: "yii2",
        title: "Proyecto en Yii2",
        description:
          "Una página dedicada al desarrollo en Yii2: calidad, lanzamientos previsibles, velocidad y modernización sin reescribir desde cero."
      },
      {
        target: "ai-vibecoding",
        title: "Tu MVP de vibecoding frena el desarrollo",
        description:
          "Una página dedicada a poner orden en un MVP creado con IA sin reescribirlo desde cero. Construyo el proceso de desarrollo que ese código nunca tuvo."
      }
    ]
  },
  writing: {
    title: "Artículos",
    intro:
      "Escribo sobre cómo se organiza el lanzamiento de un producto, los cuellos de botella, las métricas y cómo la IA cambia el trabajo de los desarrolladores.",
    allPostsLabel: "Todos los artículos",
    channelsAriaLabel: "Dónde escribo"
  },
  faq: [
    {
      question: "¿A qué te dedicas?",
      answer:
        "Desarrollo y arreglo software para empresas de producto: escribo el código, dirijo el desarrollo y, con métricas e IA, hago que los lanzamientos sean más rápidos y previsibles."
    },
    {
      question: "¿Cuándo llega el primer lanzamiento?",
      answer:
        "El diagnóstico y el plan llevan 1–2 semanas; al final tendrás un plan de trabajo y un primer lanzamiento definido. Las primeras partes que funcionan suelen llegar a producción en pocas semanas. El ritmo exacto depende del alcance y del estado del código."
    }
  ],
  finalCta: {
    heading: (
      <>
        Cuéntame tu producto: <em>yo lo llevo hasta el lanzamiento.</em>
      </>
    ),
    text: "Cuéntame en qué fase está el producto, quién lo usa y qué hay que lanzar a continuación. Te responderé cómo dividiría el trabajo y cómo sería el primer lanzamiento.",
    label: "Hablemos de tu proyecto",
    href: "https://t.me/sg4tech?start=site_es_final"
  }
};

export const homeOgCard: OgCardContent = {
  alt: "Victor Demin — desarrollo de software y liderazgo técnico",
  eyebrow: "Desarrollo de software y liderazgo técnico",
  title: "Construyo sistemas que funcionan.",
  subtitle: "Tu producto sale a tiempo y funciona de forma estable en producción"
};
