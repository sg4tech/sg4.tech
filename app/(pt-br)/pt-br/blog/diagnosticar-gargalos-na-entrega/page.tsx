import type { Metadata } from "next";
import { ArticleToc } from "../../../../components/ArticleToc";
import { BlogPostLayout } from "../../../../components/BlogPostLayout";
import { buildPostMetadata } from "../../../../lib/blog/post-metadata";
import type { PostSlug } from "../../../../lib/blog/posts";
import {
  ArticleLede,
  IntroSection,
  SectionCountTasks,
  SectionDecomposeT2M,
  SectionLeadTimeCycleTime,
  SectionLittlesLaw,
  SectionSymptoms,
  SectionWhereStuck,
  SectionWip,
  SectionWipLimits
} from "./article-content";
import {
  ArticleCta,
  ArticleRelated,
  SectionClosing,
  SectionFullSystemView,
  SectionIntroduceWipLimits
} from "./article-tail";
import styles from "../../../../views/posts/diagnose-broken-engineering-delivery.module.css";

// PostSlug-typed: a slug typo here fails the build, not the page at runtime.
const SLUG: PostSlug = "diagnosticar-gargalos-na-entrega";

// Mirrors the section h2s (ids and text).
const tocItems = [
  { id: "symptoms", title: "1. Sintomas de entregas lentas, e o primeiro reflexo errado" },
  { id: "decompose-t2m", title: "2. Decomponha o T2M: Discovery e Lead Time são problemas diferentes" },
  { id: "lead-time-cycle-time", title: "3. Lead Time = Espera + Cycle Time" },
  { id: "where-stuck", title: "4. Onde o trabalho realmente trava: por que o tempo por status pode enganar" },
  { id: "count-tasks", title: "5. Como achar gargalos sem medir tempo" },
  { id: "wip", title: "6. Trabalho em andamento (WIP): a variável que controla a velocidade de entrega" },
  { id: "littles-law", title: "7. Lei de Little: Lead Time = WIP / Throughput" },
  { id: "wip-limits", title: "8. Limites de WIP: a alavanca que conserta a maioria das equipes lentas" },
  { id: "introduce-wip-limits", title: "9. Como introduzir limites de WIP sem revolta na equipe" },
  { id: "full-system-view", title: "10. A visão completa do sistema: velocidade, valor e sustentabilidade nas entregas" },
  { id: "closing", title: "Quando as métricas viram ferramenta de diagnóstico" }
];

// FAQ items must not duplicate body content. Each question targets a query
// intent that the body doesn't directly answer. Schema text mirrors the
// rendered answerNode word-for-word (with dl dt/dd flattened to
// "term: definition." prose).
const faqItems = [
  {
    question: "Qual é a diferença entre Lead Time e Cycle Time?",
    answer:
      "Lead Time: O tempo total que uma tarefa passa dentro do desenvolvimento, de “pronta para desenvolvimento” até “em produção”. Inclui a espera. Cycle Time: Só a parte de trabalho ativo, de “de fato pega” até “pronta”. Exclui a espera. A diferença entre os dois é o tamanho da fila.",
    answerNode: (
      <>
        <dl>
          <dt>Lead Time</dt>
          <dd>
            O tempo total que uma tarefa passa dentro do desenvolvimento, de “pronta para
            desenvolvimento” até “em produção”. Inclui a espera.
          </dd>
          <dt>Cycle Time</dt>
          <dd>
            Só a parte de trabalho ativo, de “de fato pega” até “pronta”. Exclui a espera.
          </dd>
        </dl>
        <p>A diferença entre os dois é o tamanho da fila.</p>
      </>
    )
  },
  {
    question: "Qual é um limite de WIP razoável para uma equipe de N pessoas?",
    answer:
      "As referências do mercado variam de 1–3 tarefas por desenvolvedor; equipes de desenvolvimento de software costumam ficar na ponta mais apertada, 1–2 por dev. Equipe de 6 → ~6–12 tarefas ativas no sistema todo, em vez de 80. O número exato importa menos do que a disciplina de ter um limite e fazê-lo valer: a maioria das equipes acha o nível certo começando apertado e afrouxando se o trabalho travar com frequência por motivos que não têm a ver com WIP.",
    answerNode: (
      <>
        <p>
          As referências do mercado variam de <strong>1–3 tarefas por desenvolvedor</strong>; equipes
          de desenvolvimento de software costumam ficar na ponta mais apertada, <strong>1–2 por dev</strong>.
        </p>
        <p className={styles.faqHighlight}>
          Equipe de 6 → ~6–12 tarefas ativas no sistema todo, em vez de 80.
        </p>
        <p>
          O número exato importa menos do que a disciplina de ter um limite e fazê-lo valer: a maioria
          das equipes acha o nível certo começando apertado e afrouxando se o trabalho travar com
          frequência por motivos que não têm a ver com WIP.
        </p>
      </>
    )
  },
  {
    question: "Qual é a diferença disso para a capacidade do sprint no Scrum?",
    answer:
      "Capacidade do sprint: Quanto trabalho a equipe se compromete a fazer num período de duas semanas. Limite de WIP: Quanto trabalho está em andamento num dado momento, independentemente do sprint. Uma equipe pode ter um compromisso de sprint sensato e mesmo assim tocar mais de 60 tarefas em paralelo: a capacidade do sprint não diz nada sobre se o trabalho está sendo terminado ou só começado. Os limites de WIP são independentes do planejamento do sprint e costumam resolver problemas que o planejamento sozinho não alcança.",
    answerNode: (
      <>
        <dl>
          <dt>Capacidade do sprint</dt>
          <dd>Quanto trabalho a equipe se compromete a fazer num período de duas semanas.</dd>
          <dt>Limite de WIP</dt>
          <dd>Quanto trabalho está em andamento num dado momento, independentemente do sprint.</dd>
        </dl>
        <p>
          Uma equipe pode ter um compromisso de sprint sensato e mesmo assim tocar mais de 60 tarefas
          em paralelo: a capacidade do sprint não diz nada sobre se o trabalho está sendo{" "}
          <em>terminado</em> ou só <em>começado</em>. Os limites de WIP são independentes do
          planejamento do sprint e costumam resolver problemas que o planejamento sozinho não alcança.
        </p>
      </>
    )
  },
  {
    question: "E se o nosso throughput for mesmo baixo demais?",
    answer:
      "Às vezes o throughput é de fato a restrição. Se o WIP já está sob controle e o Lead Time continua alto, talvez a equipe não tenha capacidade suficiente para a demanda. Antes de contratar, verifique três coisas: As tarefas são grandes demais? A execução em si é lenta? A equipe gasta muito tempo com trabalho que não é entrega? Suporte, incidentes, reuniões, carga operacional. Se tudo isso estiver limpo e o throughput continuar abaixo da demanda, contratar pode ser a decisão certa. Os limites de WIP ajudam a distinguir um problema de capacidade de um problema de fluxo, e a contratação continua sendo uma opção.",
    answerNode: (
      <>
        <p>
          Às vezes o throughput é de fato a restrição. Se o WIP já está sob controle e o Lead Time
          continua alto, talvez a equipe não tenha capacidade suficiente para a demanda.
        </p>
        <p>Antes de contratar, verifique três coisas:</p>
        <ol>
          <li>
            <strong>As tarefas são grandes demais?</strong>
          </li>
          <li>
            <strong>A execução em si é lenta?</strong>
          </li>
          <li>
            <strong>A equipe gasta muito tempo com trabalho que não é entrega?</strong> Suporte,
            incidentes, reuniões, carga operacional.
          </li>
        </ol>
        <p>
          Se tudo isso estiver limpo e o throughput continuar abaixo da demanda, contratar pode ser a
          decisão certa. Os limites de WIP ajudam a distinguir um problema de capacidade de um problema
          de fluxo, e a contratação continua sendo uma opção.
        </p>
      </>
    )
  }
];

export const metadata: Metadata = buildPostMetadata(SLUG);

function ArticleBody() {
  return (
    <div className={styles.body}>
      <IntroSection />
      <ArticleToc post="diagnosticar-gargalos-na-entrega" items={tocItems} />
      <SectionSymptoms />
      <SectionDecomposeT2M />
      <SectionLeadTimeCycleTime />
      <SectionWhereStuck />
      <SectionCountTasks />
      <SectionWip />
      <SectionLittlesLaw />
      <SectionWipLimits />
      <SectionIntroduceWipLimits />
      <SectionFullSystemView />
      <SectionClosing />
      <ArticleCta />
      <ArticleRelated />
    </div>
  );
}

export default function ArticlePage() {
  return (
    <BlogPostLayout
      slug={SLUG}
      eyebrow="Entrega de software"
      lede={<ArticleLede />}
      faqItems={faqItems}
    >
      <ArticleBody />
    </BlogPostLayout>
  );
}
