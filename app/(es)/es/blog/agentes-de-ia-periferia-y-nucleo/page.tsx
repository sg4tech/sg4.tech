import type { Metadata } from "next";
import { PostArticle } from "../../../../components/PostArticle";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import * as content from "./article-content";
import * as tail from "./article-tail";
import styles from "../../../../views/posts/ai-coding-agent-periphery-core.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "agentes-de-ia-periferia-y-nucleo";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word so
// an AI snippet matches the page.
const faqItems = [
  {
    question: "¿Hay que entrenar o ajustar los agentes de IA con nuestro código?",
    answer:
      "No. Funcionan leyendo en el momento tu código, tu documentación, tus tareas y tus logs; nadie los reentrena. Por eso configurar bien los accesos importa mucho más que ajustar cualquier modelo.",
    answerNode: (
      <p>
        No. Funcionan leyendo en el momento tu código, tu documentación, tus tareas y tus logs; nadie
        los reentrena. Por eso configurar bien los accesos importa mucho más que ajustar cualquier
        modelo.
      </p>
    )
  },
  {
    question: "¿Nos conviene un servicio de IA en la nube o un modelo autoalojado?",
    answer:
      "Las startups suelen empezar con un servicio en la nube; las empresas reguladas o con requisitos de seguridad estrictos alojan cada vez más un modelo de código abierto en su propia infraestructura, para que los datos no salgan nunca de su perímetro. Ganas control y privacidad a cambio del esfuerzo de mantener todo el stack tú mismo.",
    answerNode: (
      <p>
        Las startups suelen empezar con un servicio en la nube; las empresas reguladas o con requisitos
        de seguridad estrictos alojan cada vez más un modelo de código abierto en su propia
        infraestructura, para que los datos no salgan nunca de su perímetro. Ganas control y privacidad
        a cambio del esfuerzo de mantener todo el stack tú mismo.
      </p>
    )
  },
  {
    question: "¿Qué diferencia a un agente de IA para programar de un chatbot?",
    answer:
      "El acceso. Un chatbot responde con conocimiento general; un agente conectado a tu código, tu documentación, tus tareas y tus logs actúa dentro de tu proyecto real. Justo por eso importa tanto la frontera entre lo que debe tocar y lo que no.",
    answerNode: (
      <p>
        El acceso. Un chatbot responde con conocimiento general; un agente conectado a tu código, tu
        documentación, tus tareas y tus logs actúa dentro de tu proyecto real. Justo por eso importa
        tanto la frontera entre lo que debe tocar y lo que no.
      </p>
    )
  },
  {
    question: "¿Un fundador sin perfil técnico puede lanzar un producto con agentes de IA?",
    answer:
      "Sí. El límite ya está en saber qué construir y en mantener el código manejable a medida que crece; construir ha dejado de serlo. Hay fundadores que lanzan productos reales así; cuando fracasan, es por una estructura descuidada: código suele haber de sobra.",
    answerNode: (
      <p>
        Sí. El límite ya está en saber qué construir y en mantener el código manejable a medida que
        crece; construir ha dejado de serlo. Hay fundadores que lanzan productos reales así; cuando
        fracasan, es por una estructura descuidada: código suele haber de sobra.
      </p>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

export default function ArticlePage() {
  return (
    <PostArticle
      original="ai-coding-agent-periphery-core"
      slug={SLUG}
      eyebrow="Agentes de IA"
      faqItems={faqItems}
      partOf="donde-falla-la-entrega-de-software"
      sections={{ ...content, ...tail }}
      bodyClassName={styles.body}
    />
  );
}
