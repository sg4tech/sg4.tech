// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: starting got cheap while finishing didn't →
// the cost of work is now visible → the old metrics still apply → the losses
// come from waiting and context (Little's Law covers agents too) → the fix is
// finishing discipline → the constraint has moved off code production.

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/ai-made-starting-free-finishing-expensive.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const PILLAR_HREF = getPostPathInLocale("diagnose-broken-engineering-delivery", "pt-br");
const RESCUE_HREF = pagePath("pt-br", "ai-vibecoding");
const INTERRUPTED_WORK_HREF = "https://ics.uci.edu/~gmark/chi08-mark.pdf";
const LONG_CONTEXT_STUDY_HREF = "https://arxiv.org/html/2512.04307v1";

export function ArticleLede(): ReactNode {
  return (
    <>
      Equipes com agentes de IA começam mais trabalho do que nunca e entregam mais ou menos o mesmo.
      Começar ficou barato; verificar, integrar e colocar em produção continua custando o mesmo. A
      saída é uma disciplina antiga: limitar o trabalho em andamento e contar o que foi terminado.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Começar um trabalho novo nunca foi tão barato. Mais uma thread com o agente. Mais uma ideia.
        Mais um experimento rodando em segundo plano. O custo de <em>começar</em> algo despencou: um
        agente de IA aceita qualquer tarefa que você passar, na hora, a qualquer hora.
      </p>
      <p>
        O que continuou no mesmo lugar foi o custo de <em>terminar</em>. Verificação, integração,
        revisão, deploy: levar o trabalho até o ponto em que ele roda em produção e se paga custa quase
        exatamente o que custava antes.
      </p>
      <p>
        Então as equipes começam mais do que nunca e entregam mais ou menos o mesmo. Os quadros se
        enchem de trabalho pela metade. Os agentes rodam o dia inteiro, a conta de tokens cresce, e, por
        algum motivo, as notas de release não ficam maiores que as do trimestre passado.
      </p>
      <p>
        O que está por trás é um velho problema de fluxo, ampliado pelas ferramentas novas, e a
        solução também é antiga:{" "}
        <strong>
          limite o trabalho em andamento e otimize para terminar. Vence quem mais termina, por mais
          que outros comecem mais.
        </strong>{" "}
        O resto do artigo defende essa tese: primeiro em dinheiro, depois na mecânica.
      </p>
    </>
  );
}

export function SectionCostVisible(): ReactNode {
  return (
    <>
      <h2 id="cost">Quanto custa de fato o trabalho com IA, e como contar</h2>
      <p>
        Por décadas, o custo de uma tarefa foi invisível, enterrado em salários fixos. Um mês de um
        desenvolvedor custa o mesmo, tenha a funcionalidade levado três tentativas ou trinta, então
        ninguém contava tentativas. Com agentes de IA, cada ação tem um preço, e a contabilidade fica
        muito visível, muito rápido.
      </p>
      <p>
        Na prática, fica assim. Um agente fez 40 tentativas, gastou US$ 15 em tokens e mesmo assim não
        entregou uma funcionalidade funcionando. Agora multiplique isso por todas as tarefas que a sua
        equipe roda num mês. O ciclo por trás dessa conta é familiar para quem usa agentes em trabalho
        real: uma tentativa. Quase funciona. Mais uma tentativa. Um pouco melhor. Aí algo quebra, o
        contexto escapa, você começa a corrigir, e piora. Em algum ponto aí você enxerga com clareza:
        uma &ldquo;tarefa&rdquo; raramente é uma ação só. São dezenas de iterações (tentativas,
        correções, becos sem saída), e você paga por cada uma, inclusive pelas que joga fora.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-made-starting-free-finishing-expensive/ai-agent-pnl.webp"
          alt="Demonstrativo de resultados de um agente de IA, desenhado à mão: produção, zero funcionalidades funcionando; custo, US$ 15 em tokens e infraestrutura; resultado, menos US$ 15 e nenhuma funcionalidade entregue"
          width={1200}
          height={1200}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          O resultado de uma tarefa que falhou: cada tentativa cobrada, nada entregue.
        </FigureCaption>
      </figure>
      <p>Para saber quanto as suas entregas realmente custam, basta contar três coisas:</p>
      <ul>
        <li>quantas tarefas chegaram a um resultado que funciona,</li>
        <li>quantas iterações isso exigiu,</li>
        <li>e quanto essas iterações custaram.</li>
      </ul>
      <p>
        Divida o gasto total pelas tarefas concluídas e você tem o número que importa:{" "}
        <strong>o custo por tarefa bem-sucedida</strong>, ou seja, quanto uma peça de trabalho{" "}
        <em>concluída</em> realmente custa para você.
      </p>
      <p>
        A recompensa é que otimizar deixa de ser chute. O prompt novo ajuda mesmo? Os testes em volta
        do agente se pagam? Aquela mudança no fluxo fez alguma diferença? Subjetivamente, tudo sempre
        &ldquo;parece melhor&rdquo;. O número ignora impressões: depois de qualquer mudança, o custo
        por tarefa bem-sucedida caiu ou não caiu.
      </p>
      <p>
        Um aviso antes de você sair otimizando. Observe equipes trabalhando nessa métrica e você vai
        vê-las correr direto para o preço dos tokens e o nível do modelo, deixando passar o vazamento
        de verdade.{" "}
        <strong>
          O objetivo é maximizar os resultados bem-sucedidos por dólar gasto; economizar tokens vem
          bem depois.
        </strong>{" "}
        E o que mais pesa no custo por tarefa <em>concluída</em>{" "}
        é todo o trabalho que você começou e nunca terminou, bem mais do que o preço de uma iteração.
      </p>
    </>
  );
}

function MetricsTable(): ReactNode {
  return (
    <table className={styles.mappingTable}>
      <thead>
        <tr>
          <th>Métrica</th>
          <th>O que muda com agentes de IA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Throughput: tarefas entregues por período</th>
          <td>Nada. Conta o que chega à produção.</td>
        </tr>
        <tr>
          <th>Time to Market: da ideia ao resultado funcionando</th>
          <td>Nada. O relógio continua correndo até a produção.</td>
        </tr>
        <tr>
          <th>Qualidade: trabalho que dá para usar sem retrabalho</th>
          <td>Nada. O retrabalho continua sendo o que consome você.</td>
        </tr>
        <tr>
          <th>NPS: se o resultado gera valor</th>
          <td>Nada. O valor continua sendo o objetivo.</td>
        </tr>
        <tr>
          <th>Custo por tarefa bem-sucedida: gasto total ÷ tarefas concluídas</th>
          <td>
            <strong>
              Tudo. Antes era invisível, enterrado nos salários. Agora cada tarefa tem uma conta.
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionMetricsSurvive(): ReactNode {
  return (
    <>
      <h2 id="metrics">Suas métricas de entrega continuam valendo para o trabalho com IA</h2>
      <p>
        Se você leu <Link href={PILLAR_HREF}>como eu diagnostico sistemas de entrega</Link>, o modelo
        aqui é o mesmo. Toda métrica que descrevia uma equipe humana continua valendo. Só uma coisa
        mudou de fato:
      </p>
      <MetricsTable />
      <p>
        Dá para entregar rápido e caro, barato e afogado em retrabalho, ou muito e nada do que os
        usuários precisam, e a conta discretamente para de fechar.
      </p>
      <p>O sistema de medição sobreviveu. O que mudou é onde o trabalho se acumula.</p>
    </>
  );
}

export function SectionParallelTasks(): ReactNode {
  return (
    <>
      <h2 id="parallel-tasks">Por que seu agente de IA piora a cada tarefa paralela</h2>
      <p>Dois mecanismos comem os ganhos. Os dois são antigos; os dois foram amplificados.</p>
      <p>
        <strong>O primeiro é a espera.</strong>{" "}
        Na maioria dos sistemas, a maior parte das tarefas está esperando, e ninguém está trabalhando
        nelas. Agora olhe para um fluxo com IA: você espera o agente (geração, testes, deploy), depois
        o agente espera você (uma resposta, uma decisão, a próxima instrução). Enquanto uma tarefa
        espera, você passa para outra; afinal, começar é quase de graça. Cada tarefa que você adiciona
        alonga a fila para todas. A Lei de Little (lead time é igual ao trabalho em andamento dividido
        pelo throughput) vale do mesmo jeito para pessoas e para agentes. Comece mais sem terminar
        mais, e cada tarefa simplesmente vive mais tempo.
      </p>
      <p>
        <strong>O segundo é o contexto.</strong>{" "}
        Todo sistema tem um limite de quanto trabalho ativo consegue segurar. Para uma pessoa, o limite
        é atenção e memória. Uma pesquisa sobre trabalho interrompido mostrou que as pessoas de fato
        compensam as trocas, trabalhando mais rápido, mas pagam com carga de trabalho, estresse e
        frustração mensuravelmente maiores (
        <a href={INTERRUPTED_WORK_HREF} target="_blank" rel="noreferrer">
          Mark, Gudith &amp; Klocke, 2008
        </a>
        ). O custo é real; só que ele fica escondido nas pessoas em vez de aparecer na fatura.
      </p>
      <p>
        Para um agente, o limite é a janela de contexto, e aí a degradação se mede no resultado. Um{" "}
        <a href={LONG_CONTEXT_STUDY_HREF} target="_blank" rel="noreferrer">
          estudo com agentes web em tarefas de contexto longo
        </a>{" "}
        (Chung et al.) mostrou que o desempenho desaba conforme o histórico irrelevante se acumula no
        contexto, exatamente o que uma thread com várias tarefas produz. Com o ruído chegando perto de
        150 mil tokens, as taxas de sucesso caíram de 40–50% para um dígito em alguns dos modelos
        testados: o GPT-4.1 caiu de cerca de 45% para 2,7%.
      </p>
      <p className={styles.pullquote}>
        Pessoas perdem o foco, agentes perdem o contexto, e a falha é a mesma. Trabalho demais em
        andamento degrada quem trabalha, seja feito de neurônios ou de tokens.
      </p>
    </>
  );
}

export function SectionOneThread(): ReactNode {
  return (
    <>
      <h2 id="one-thread">Uma thread, uma tarefa: limites de WIP para o trabalho com IA</h2>
      <p>
        A disciplina que resolve isso existe há décadas. A IA a tornou obrigatória, porque a tentação
        de começar mais nunca foi tão barata.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-made-starting-free-finishing-expensive/busy-not-delivering.webp"
          alt="Dois quadros kanban comparados: começar mais lota a coluna Em andamento enquanto Concluído fica magra; terminar mais mantém pouco trabalho em andamento e enche Concluído de tarefas terminadas"
          width={1200}
          height={800}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Começar mais enche o quadro. Terminar mais enche a produção.
        </FigureCaption>
      </figure>
      <ul>
        <li>
          <strong>Para os agentes: uma thread, uma tarefa.</strong>{" "}
          Mantenha cada thread focada num único resultado. Quando surgirem questões paralelas (um bug
          que você notou, uma refatoração que vale a pena), elas vão para uma lista ou para outro
          agente, e ficam fora da conversa atual. Uma thread focada termina; uma sobrecarregada anda em
          círculos.
        </li>
        <li>
          <strong>Para você: termine antes de começar.</strong>{" "}
          Antes de abrir uma tarefa nova, pergunte o que você consegue fechar. Um agente esperando a
          sua revisão é trabalho em andamento. Três agentes esperando a sua revisão são uma fila, e
          o gargalo dela é você.
        </li>
        <li>
          <strong>Para a equipe: os mesmos limites de WIP, para os dois tipos de trabalhador.</strong>{" "}
          O número que importa é quanto trabalho inacabado está parado no sistema; tarefas iniciadas e
          atividade dos agentes dizem pouco. Uma lista longa de threads ativas é estoque.
        </li>
      </ul>
      <p>
        A mudança desconfortável está no que conta como sinal de progresso. Trabalho iniciado era
        escasso, então começar significava alguma coisa. Agora que começar é quase de graça,{" "}
        <strong>vence quem mais termina, por mais que outros comecem mais.</strong>{" "}
        Menos coisas em andamento, mais coisas prontas.
      </p>
    </>
  );
}

export function SectionConstraintMoved(): ReactNode {
  return (
    <>
      <h2 id="constraint">A restrição mudou de lugar, e você precisa ir atrás dela</h2>
      <p>
        Se você aceita a tese de que terminar vale mais que começar, segue mais uma consequência, e,
        para startups que usam muita IA, é a mais importante.
      </p>
      <p>
        Para um fundador sozinho ou uma equipe pequena que usa IA com disciplina, escrever código
        quase deixou de ser a restrição. As iterações são baratas perto do custo do trabalho
        inacabado; a geração em si é rápida. O que ficou escasso é a capacidade de decidir{" "}
        <em>o que</em> construir, <em>por que</em> e <em>para quem</em>, e a capacidade de levar o
        trabalho até o fim. Para uma equipe de produto com 5 a 50 engenheiros, programar ainda tem
        custo, mas a direção é a mesma: o gargalo está saindo da produção de código e indo para as
        decisões e para a conclusão.
      </p>
      <p>
        É o básico da Teoria das Restrições: quando a restrição muda de lugar, otimizar a antiga é
        esforço jogado fora. Espremer mais 10% da geração de código não muda nada se o trabalho morre
        esperando verificação, revisão e uma decisão.
      </p>
      <p>
        Com a IA, o pensamento sistêmico continua valendo, e os erros de sistema ficam mais caros,
        porque agora a conta chega na hora, discriminada, em dólares. Se o seu sistema de entrega perde
        trabalho entre &ldquo;começado&rdquo; e &ldquo;entregue&rdquo;, os agentes vão escalar essa
        perda para você com todo o prazer. (Se é aí que você está com um produto construído com IA,
        escrevi sobre <Link href={RESCUE_HREF}>o caminho de resgate</Link> em outro texto.)
      </p>
    </>
  );
}
