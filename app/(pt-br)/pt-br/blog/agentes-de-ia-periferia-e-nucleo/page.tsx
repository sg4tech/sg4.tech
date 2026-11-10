import type { Metadata } from "next";
import { BlogPostLayout } from "../../../../components/BlogPostLayout";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import {
  ArticleLede,
  IntroSection,
  SectionBarrier,
  SectionRule,
  SectionWhatNot,
  SectionWhatWorks
} from "./article-content";
import { ArticleCta, ArticleRelated } from "./article-tail";
import styles from "../../../../views/posts/ai-coding-agent-periphery-core.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "agentes-de-ia-periferia-e-nucleo";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word so
// an AI snippet matches the page.
const faqItems = [
  {
    question: "Os agentes de IA precisam ser treinados ou ajustados com o nosso código?",
    answer:
      "Não. Eles trabalham lendo o código, a documentação, as tarefas e os logs que você já tem, na hora da execução, sem nenhum retreinamento. Por isso, configurar o acesso importa muito mais do que qualquer ajuste do modelo.",
    answerNode: (
      <p>
        Não. Eles trabalham lendo o código, a documentação, as tarefas e os logs que você já tem, na
        hora da execução, sem nenhum retreinamento. Por isso, configurar o acesso importa muito mais
        do que qualquer ajuste do modelo.
      </p>
    )
  },
  {
    question: "É melhor usar um serviço de IA na nuvem ou um modelo auto-hospedado?",
    answer:
      "Startups costumam começar com um serviço na nuvem; empresas reguladas ou sensíveis à segurança cada vez mais hospedam um modelo open source por conta própria, para que os dados nunca saiam do perímetro. A troca é entre controle e privacidade, de um lado, e o esforço de manter a stack você mesmo, do outro.",
    answerNode: (
      <p>
        Startups costumam começar com um serviço na nuvem; empresas reguladas ou sensíveis à
        segurança cada vez mais hospedam um modelo open source por conta própria, para que os dados
        nunca saiam do perímetro. A troca é entre controle e privacidade, de um lado, e o esforço de
        manter a stack você mesmo, do outro.
      </p>
    )
  },
  {
    question: "O que diferencia um agente de IA de um chatbot?",
    answer:
      "O acesso. Um chatbot responde com conhecimento geral; um agente conectado ao seu código, à documentação, às tarefas e aos logs age dentro do seu projeto real. É exatamente por isso que a linha entre o que ele deve e o que não deve tocar importa.",
    answerNode: (
      <p>
        O acesso. Um chatbot responde com conhecimento geral; um agente conectado ao seu código, à
        documentação, às tarefas e aos logs age dentro do seu projeto real. É exatamente por isso que
        a linha entre o que ele deve e o que não deve tocar importa.
      </p>
    )
  },
  {
    question: "Fundadores sem formação técnica conseguem mesmo lançar produtos com agentes de IA?",
    answer:
      "Sim. O limite agora está em saber o que construir e em manter o código sustentável conforme ele cresce. Fundadores lançam produtos reais assim com frequência; quando dá errado, o motivo costuma ser a estrutura abandonada.",
    answerNode: (
      <p>
        Sim. O limite agora está em saber o que construir e em manter o código sustentável conforme
        ele cresce. Fundadores lançam produtos reais assim com frequência; quando dá errado, o motivo
        costuma ser a estrutura abandonada.
      </p>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

function ArticleBody() {
  return (
    <div className={styles.body}>
      <IntroSection />
      <SectionBarrier />
      <SectionWhatWorks />
      <SectionWhatNot />
      <SectionRule />
      <ArticleCta />
      <ArticleRelated />
    </div>
  );
}

export default function ArticlePage() {
  return (
    <BlogPostLayout
      slug={SLUG}
      eyebrow="Agentes de IA"
      lede={<ArticleLede />}
      faqItems={faqItems}
      partOf="diagnosticar-gargalos-na-entrega"
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
