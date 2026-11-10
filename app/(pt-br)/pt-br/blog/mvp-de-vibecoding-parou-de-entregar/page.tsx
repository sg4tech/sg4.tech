import type { Metadata } from "next";
import { BlogPostLayout } from "../../../../components/BlogPostLayout";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import {
  ArticleLede,
  IntroSection,
  SectionCase,
  SectionFailedFixes,
  SectionJunior,
  SectionMapping,
  SectionRestart,
  SectionStall
} from "./article-content";
import { ArticleCta, ArticleRelated } from "./article-tail";
import styles from "../../../../views/posts/vibecoded-mvp-stopped-shipping.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "mvp-de-vibecoding-parou-de-entregar";

// On-page H1 differs from the registry title on purpose: that title is the
// query-matched SERP/index-card title; the H1 carries the essay's voice.
// Article.headline mirrors the H1 so the schema matches the rendered page.
const H1_TITLE = "Seu MVP feito com vibecoding parou de sair em produção, como todo código escrito por juniores antes dele";

// FAQ items must not duplicate body content — paraphrased duplication across
// body + FAQ reads as keyword stuffing to engines indexing the FAQPage schema.
// The schema `answer` string mirrors the rendered `answerNode` word-for-word so
// an AI snippet matches the page.
const faqItems = [
  {
    question: "Preciso reescrever o MVP do zero?",
    answer:
      "Quase certamente não. Códigos escritos por juniores são resgatados sem recomeçar do zero há décadas, e o método se aplica diretamente: estabilize, monte a rede de segurança e depois reescreva as piores partes aos poucos, com a rede ali para pegar o que a reescrita quebrar. Reescrever tudo joga fora o único ativo que você de fato tem, um código que funciona e que os usuários já usam todo dia, e recomeça o mesmo processo com as mesmas práticas faltando.",
    answerNode: (
      <p>
        Quase certamente não. Códigos escritos por juniores são resgatados sem recomeçar do zero há
        décadas, e o método se aplica diretamente: estabilize, monte a rede de segurança e depois
        reescreva as piores partes aos poucos, com a rede ali para pegar o que a reescrita quebrar.
        Reescrever tudo joga fora o único ativo que você de fato tem, um código que funciona e que os
        usuários já usam todo dia, e recomeça o mesmo processo com as mesmas práticas faltando.
      </p>
    )
  },
  {
    question: "Isso é só dívida técnica?",
    answer:
      "É algo mais específico. Dívida técnica pressupõe que alguém entendeu a troca e escolheu a velocidade. Um código gerado por IA contém decisões que ninguém tomou conscientemente e ninguém sabe explicar: a dívida está na compreensão. Por isso a solução começa por tornar o código observável e testável; a limpeza vem depois.",
    answerNode: (
      <p>
        É algo mais específico. Dívida técnica pressupõe que alguém entendeu a troca e escolheu a
        velocidade. Um código gerado por IA contém decisões que ninguém tomou conscientemente e
        ninguém sabe explicar: a dívida está na <em>compreensão</em>. Por isso a solução começa por
        tornar o código observável e testável; a limpeza vem depois.
      </p>
    )
  },
  {
    question: "Posso continuar construindo com IA enquanto isso é corrigido?",
    answer:
      "Sim, e a ideia é justamente essa. O objetivo é colocar revisão, testes e barreiras em volta do júnior, com o teclado continuando onde está. Você segue entregando com IA o tempo todo; o que o agente produz simplesmente passa a atravessar as mesmas verificações que o trabalho de uma pessoa atravessaria. Eu construo com IA todos os dias dentro exatamente desse tipo de estrutura.",
    answerNode: (
      <p>
        Sim, e a ideia é justamente essa. O objetivo é colocar revisão, testes e barreiras em volta do
        júnior, com o teclado continuando onde está. Você segue entregando com IA o tempo todo; o que
        o agente produz simplesmente passa a atravessar as mesmas verificações que o trabalho de uma
        pessoa atravessaria. Eu construo com IA todos os dias dentro exatamente desse tipo de
        estrutura.
      </p>
    )
  },
  {
    question: "A IA consegue consertar o código que ela mesma quebrou?",
    answer:
      "Em parte, e só dentro de barreiras. Os agentes são realmente bons no trabalho de manutenção de que um código gerado por IA precisa (escrever testes, adicionar tratamento de erros, refatorações mecânicas) quando um pipeline verifica o que eles produzem. Pedir a um agente para \"arrumar o código\" sem testes e sem barreiras é pedir ao mesmo júnior que corrija a própria prova.",
    answerNode: (
      <p>
        Em parte, e só dentro de barreiras. Os agentes são realmente bons no trabalho de manutenção de
        que um código gerado por IA precisa (escrever testes, adicionar tratamento de erros,
        refatorações mecânicas) quando um pipeline verifica o que eles produzem. Pedir a um agente
        para &ldquo;arrumar o código&rdquo; sem testes e sem barreiras é pedir ao mesmo júnior que
        corrija a própria prova.
      </p>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

function ArticleBody() {
  return (
    <div className={styles.body}>
      <IntroSection />
      <SectionStall />
      <SectionJunior />
      <SectionCase />
      <SectionMapping />
      <SectionFailedFixes />
      <SectionRestart />
      <ArticleCta />
      <ArticleRelated />
    </div>
  );
}

export default function ArticlePage() {
  return (
    <BlogPostLayout
      slug={SLUG}
      eyebrow="Vibecoding com IA"
      lede={<ArticleLede />}
      faqItems={faqItems}
      headline={H1_TITLE}
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
