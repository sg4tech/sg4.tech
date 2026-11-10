import { VICTOR_NAME } from "../brand";
import type { SiteDictionary } from "./types";

export const es: SiteDictionary = {
  document: {
    skipLink: "Ir al contenido principal",
    description:
      "Victor Demin: ingeniero de software y líder técnico. Construyo sistemas que llegan a producción rápido y funcionan de forma estable."
  },
  navigation: {
    ariaLabel: "Navegación del sitio",
    languageMenuLabel: "Idioma",
    items: [
      { key: "home", label: "Inicio" },
      { key: "blog", label: "Blog" },
      { key: "yii2", label: "Yii2" },
      { key: "ai-vibecoding", label: "Vibecoding con IA" }
    ]
  },
  footer: {
    ariaLabel: "Pie de página",
    legalAriaLabel: "Información legal",
    privacyLabel: "Privacidad",
    disclaimers: [
      {
        label: "Resultados",
        body: "Los resultados de este sitio son ejemplos de puestos y proyectos anteriores. No garantizan resultados similares para futuros clientes. El resultado real depende de la organización, el equipo, el producto, el punto de partida, los datos disponibles y la forma de implementar los cambios."
      },
      {
        label: "Información profesional",
        body: "Los contenidos de este sitio tienen un fin informativo general. No constituyen asesoramiento técnico, de seguridad, legal, financiero ni de ningún otro tipo profesional para una situación concreta."
      },
      {
        label: "Marcas",
        body: "Los nombres de empresas, logotipos y marcas pertenecen a sus respectivos titulares. Las menciones a antiguos empleadores y clientes describen la experiencia profesional de Victor Demin y no implican respaldo, asociación ni colaboración actual."
      }
    ]
  },
  proof: {
    resultsCaption:
      "Resultados de puestos y proyectos anteriores. En tu caso el resultado puede variar y no está garantizado.",
    heroSignalsAriaLabel: "Datos sobre mi experiencia"
  },
  language: {
    code: "ES",
    name: "Español"
  },
  untranslated: {
    pageNote: "Página en inglés",
    linkNote: "en inglés"
  },
  author: {
    name: VICTOR_NAME
  },
  whyMe: {
    heading: "Por qué yo",
    roleLine: "Ingeniero de software y líder técnico"
  },
  faq: {
    heading: "Preguntas frecuentes"
  },
  blog: {
    backLink: "← Blog",
    readingTime: (minutes) => `${minutes} min de lectura`,
    tagsAriaLabel: "Etiquetas",
    byline: {
      beforeName: "",
      afterName:
        " lleva más de 15 años escribiendo código y dirigiendo equipos de desarrollo. Ayuda a los equipos a lanzar versiones más rápido y con más previsibilidad, y a que los productos funcionen de forma estable."
    },
    tocHeading: "Contenido",
    relatedHeading: "Para seguir leyendo",
    relatedIntro: "Qué leer a continuación depende de con qué estés trabajando.",
    ctaButton: "Hablemos de tu proyecto en Telegram"
  },
  notFound: {
    title: "Página no encontrada",
    text: "La página que buscas no existe o se ha movido.",
    backHome: "Volver al inicio"
  }
};
