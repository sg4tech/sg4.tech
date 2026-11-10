// Tail half of the article — sections 9–10 + closing, plus the CTA and
// Related asides. Split out of article-content.tsx so each file stays under
// the 700-line ESLint cap.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_ptbr_blog_metrics";

// Pillar -> spoke links come from the post registry so titles/descriptions
// never drift from the articles' own metadata.
const percentilesPost = getPostBySlug("previsao-de-entrega-com-percentis");
const vibecodingPost = getPostBySlug("mvp-de-vibecoding-parou-de-entregar");
const finishingPost = getPostBySlug("ia-comecar-e-barato-terminar-e-caro");

// Spokes first (continue reading), then the landings. Excludes any card that
// points to the same destination as `ArticleCta` above — listing the same
// conversion path twice in the same scroll dilutes it. If `ArticleCta` is
// ever rerouted, re-check this list for overlap.
const relatedLinks = [
  {
    href: getPostPath(percentilesPost.slug),
    title: percentilesPost.title,
    description: percentilesPost.description
  },
  {
    href: getPostPath(vibecodingPost.slug),
    title: vibecodingPost.title,
    description: vibecodingPost.description
  },
  {
    href: getPostPath(finishingPost.slug),
    title: finishingPost.title,
    description: finishingPost.description
  },
  {
    href: pagePath("pt-br", "yii2"),
    title: "Para quem mantém um projeto em Yii2",
    description:
      "Página específica para código legado: releases previsíveis, verificações de qualidade e modernização sem partir direto para a reescrita."
  },
  {
    href: pagePath("pt-br", "ai-vibecoding"),
    title: "O serviço de resgate: MVP de vibecoding de volta aos trilhos",
    description:
      "Como adicionar as camadas do sistema de entrega que a IA não gerou: regras de arquitetura, verificações no pipeline, cobertura de testes."
  }
] as const;

function FailureModesList(): ReactNode {
  return (
    <ul>
      <li>
        Os desenvolvedores veem colegas bloqueados na revisão ou no QA, se recusam a &quot;ficar
        parados&quot; enquanto há trabalho no backlog e, discretamente, começam tickets novos mesmo
        assim
      </li>
      <li>
        Um stakeholder precisa de algo urgente, o EM recebe pressão de cima, e o limite é suspenso
        &quot;só desta vez&quot;
      </li>
      <li>
        A liderança passa pela área de engenharia, vê pessoas que não estão digitando e pergunta por
        que a equipe não está sendo totalmente aproveitada
      </li>
    </ul>
  );
}

function WipSequenceList(): ReactNode {
  return (
    <ul>
      <li>
        <strong>Deixe o objetivo explícito.</strong>{" "}
        O objetivo é terminar o trabalho que já começou. Repita isso com frequência. Imprima num
        adesivo. O que for preciso para essa ideia pegar.
      </li>
      <li>
        <strong>Explique o porquê.</strong>{" "}
        Mostre à equipe a Lei de Little. Mostre o diagnóstico de contar tarefas por status. Argumente
        com a matemática do sistema, sem apelar para a autoridade. As pessoas seguem muito melhor as
        práticas que entendem do que regras que não entendem.
      </li>
      <li>
        <strong>Mostre exemplos reais.</strong>{" "}
        Cite casos em que a introdução de limites de WIP mudou o sistema de forma visível: suas equipes
        anteriores, textos como este, histórias de outras pessoas. Reconhecer o padrão faz a maior
        parte do trabalho que a exortação não consegue fazer.
      </li>
      <li>
        <strong>Traga o foco de volta, sempre.</strong>{" "}
        Sempre que alguém estiver prestes a puxar uma tarefa nova, pergunte: &quot;o que você pode
        fazer agora para levar o trabalho que já existe até o fim?&quot; Ajudar a desbloquear um colega.
        Fazer uma revisão. Responder a uma dúvida do QA. Parear para resolver um conflito de merge
        antigo. O instinto da equipe é pegar trabalho novo; a disciplina é redirecionar esse instinto.
      </li>
    </ul>
  );
}

export function SectionIntroduceWipLimits(): ReactNode {
  return (
    <>
      <h2 id="introduce-wip-limits">9. Como introduzir limites de WIP sem revolta na equipe</h2>
      <p>
        A matemática é uma coisa. Convencer o sistema a adotá-la é outra. É grande o número de equipes
        que leram sobre limites de WIP, tentaram implementá-los e abandonaram a tentativa sem alarde.
        Eu diria que é a maioria.
      </p>
      <p>
        O modo de falha é este. Alguém, normalmente o EM ou um engenheiro sênior que leu o livro de
        Kanban, declara: &quot;a partir de segunda, o limite de WIP é 5 por desenvolvedor, sem
        exceções&quot;. Duas semanas depois, acabou. Os motivos da morte são previsíveis:
      </p>
      <FailureModesList />
      <p>
        Os limites de WIP pegam quando entram como uma mudança de foco.
        Quase ninguém, nem os desenvolvedores nem a liderança, acha a regra em si intuitiva. Visto de
        fora, dizer a um desenvolvedor que não pegue trabalho novo parece irracional. É uma postura
        contra a escassez, numa cultura que recompensa começar coisas.
      </p>
      <p>
        Por isso eu raramente começo pelo limite em si. Começo deslocando o foco da equipe de começar
        trabalho para terminar trabalho. O limite é absorvido depois dessa mudança de foco.
      </p>
      <p>A sequência que uso, mais ou menos:</p>
      <WipSequenceList />
      <p>
        Há uma história, num comentário em um dos meus próprios posts, que captou isso bem. Uma equipe
        definiu WIP = 5. No começo, os stakeholders viram isso como um fracasso: poucas coisas
        acontecendo ao mesmo tempo de forma visível. Em um trimestre, a velocidade de entrega melhorou,
        a qualidade melhorou, a colaboração melhorou, a previsibilidade melhorou. A visão dos
        stakeholders virou. Eles pararam de perguntar &quot;por que há tão poucas coisas ativas&quot; e
        começaram a perguntar &quot;por que não usamos limites de WIP em outras partes da
        empresa&quot;.
      </p>
      <p>
        A parte mais difícil costuma ser a camada de gestão que confunde ocupação com produtividade. Se
        todo mundo na equipe está &quot;100% ocupado&quot;, a gestão fica tranquila; se alguém está
        visivelmente entre um ticket e outro, o alarme dispara. A verdade, desconfortável, é que uma
        equipe operando com 100% de ocupação quase sempre entrega menos do que uma equipe operando com
        80%. É a folga no sistema que deixa o trabalho fluir por ele.
      </p>
      <p>
        Limites de WIP não precisam ser um Kanban formal. Você não precisa imprimir números no quadro.
        Basta que a equipe e os stakeholders combinem, na prática: terminamos antes de começar.
      </p>
    </>
  );
}

export function SectionFullSystemView(): ReactNode {
  return (
    <>
      <h2 id="full-system-view">10. A visão completa do sistema: velocidade, valor e sustentabilidade nas entregas</h2>
      <p>
        A velocidade sozinha é um retrato incompleto. Qualquer conjunto de métricas de engenharia que
        otimize só a velocidade vai acabar quebrando algo mais importante.
      </p>
      <p>O modelo completo de diagnóstico tem três dimensões:</p>
      <p>
        <strong>Velocidade do sistema</strong>: com que rapidez entregamos mudanças.
      </p>
      <ul>
        <li>T2M (Time to Market): o tempo total da ideia até a produção</li>
        <li>Throughput: tarefas concluídas por período</li>
        <li>Lead Time, Cycle Time, WIP: a decomposição que já percorremos</li>
      </ul>
      <p>
        <strong>Valor do produto</strong>: se o que entregamos é de fato útil.
      </p>
      <ul>
        <li>Qualidade: bugs abertos, taxa de regressão, taxa de incidentes</li>
        <li>NPS / satisfação do cliente: se o usuário sente que o produto está melhorando</li>
      </ul>
      <p>
        <strong>Sustentabilidade da equipe</strong>: se a equipe consegue continuar trabalhando assim.
      </p>
      <ul>
        <li>eNPS (Employee NPS): se a equipe recomendaria trabalhar aqui</li>
        <li>Sinais de burnout, taxa de rotatividade, carga de plantão</li>
      </ul>
      <p>
        As três importam juntas porque quaisquer duas podem ser maquiadas por um tempo às custas da
        terceira. Dá para entregar mais rápido pulando o QA e esgotando a equipe: a velocidade sobe, o
        valor e a sustentabilidade desabam. Dá para polir a qualidade até a perfeição e não entregar
        nada: o valor por funcionalidade sobe, mas a equipe e a empresa estagnam. Dá para manter a
        equipe feliz e ociosa: a sustentabilidade vai ótima, a velocidade é zero.
      </p>
      <p>
        Um sistema de entrega que funciona mantém as três dimensões em equilíbrio. É rápido o bastante
        para o negócio competir, valioso o bastante para os clientes ficarem e sustentável o bastante
        para a equipe ainda estar aqui no ano que vem. Quando fundadores me perguntam como é um sistema
        &quot;bom&quot;, a resposta é esta: três números andando mais ou menos juntos.
      </p>
      <p>
        O eNPS em particular costuma ser ignorado, porque parece mais subjetivo que os demais. Na
        verdade, ele é o sistema de alerta precoce para todo o resto. Uma equipe cujo eNPS está caindo
        vai, em três a seis meses, começar a perder as pessoas mais experientes. Quem entra no lugar
        são juniores que precisam de tempo para engrenar. O WIP sobe, o conhecimento fica raso, a
        qualidade cai, os bugs se multiplicam. A métrica que você viu se mexer primeiro foi a que você
        ignorou.
      </p>
      <p>
        Dá para calcular quase todas essas métricas com o Jira e uma pesquisa de clima do RH. Nenhuma
        exige uma ferramenta especial. O que elas exigem é disposição para olhar o sistema com
        honestidade, nas três dimensões ao mesmo tempo.
      </p>
    </>
  );
}

export function SectionClosing(): ReactNode {
  return (
    <>
      <h2 id="closing">Quando as métricas viram ferramenta de diagnóstico</h2>
      <p>
        As métricas não são novas. As ideias também não:{" "}
        <a
          href="https://en.wikipedia.org/wiki/Theory_of_constraints"
          target="_blank"
          rel="noreferrer"
        >
          Teoria das Restrições
        </a>{" "}
        (anos 1980),{" "}
        <a
          href="https://en.wikipedia.org/wiki/Toyota_Production_System"
          target="_blank"
          rel="noreferrer"
        >
          Sistema Toyota de Produção
        </a>{" "}
        (anos 1950), o{" "}
        <a
          href="https://en.wikipedia.org/wiki/Kanban_(development)"
          target="_blank"
          rel="noreferrer"
        >
          Método Kanban para software
        </a>{" "}
        (David Anderson, anos 2000) e a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Little%27s_law"
          target="_blank"
          rel="noreferrer"
        >
          Lei de Little
        </a>{" "}
        (1961) descrevem aspectos diferentes do mesmo problema de fundo: o trabalho se move por
        sistemas, e os sistemas ficam lentos quando o fluxo quebra. A novidade está em como a sua
        equipe as usa: como relatório ou como diagnóstico. Um relatório diz que algo está quebrado. Um
        diagnóstico diz onde.
      </p>
      <p>
        Quando as entregas estão lentas, a tentação é reagir ao relatório: contratar engenheiros,
        adicionar processo, instalar uma ferramenta nova. A reação parece movimento. O progresso de
        verdade começa quando as métricas ficam específicas o bastante para apontar a restrição real.
      </p>
      <p>
        Se você está olhando para um quadro com 60–80 tarefas ativas e uma equipe de seis pessoas,
        conte as tarefas por status. Meça o Lead Time e o Cycle Time. Olhe a relação entre WIP e
        throughput. A matemática do sistema vai fazer a maior parte do trabalho.
      </p>
    </>
  );
}

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="diagnosticar-gargalos-na-entrega" heading="Um segundo olhar sobre o seu sistema de entrega" href={CTA_HREF}>
      A primeira conversa de diagnóstico leva 30 minutos no Telegram. Descreva os sintomas, e eu ajudo
      você a localizar o gargalo real.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="diagnosticar-gargalos-na-entrega" links={relatedLinks} intro="Se esses sintomas batem com os seus, veja para onde seguir conforme o tipo de código que você tem." />;
}
