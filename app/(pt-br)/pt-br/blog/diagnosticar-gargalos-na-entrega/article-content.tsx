// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and max-lines (700) constraints. Each section
// is its own component so editorial passes touch one focused unit at a time.
//
// Sections 1–8 + header/intro live here. The trailing sections (9, 10, closing)
// plus CTA/Related are in article-tail.tsx to keep this file under the
// 700-line cap.
//
// Section order is meaningful — the article builds an argument incrementally.
// If a section is reordered, check that the preceding text doesn't reference
// the now-displaced one.

import Image from "next/image";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/diagnose-broken-engineering-delivery.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";

export function ArticleLede(): ReactNode {
  return (
    <>
      A maioria das equipes de engenharia lentas tem um problema de fluxo, e a produtividade das
      pessoas pouco tem a ver com isso. E quase todo mundo reage a ele de um jeito que deixa o
      sistema ainda mais lento.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Um padrão que vi muitas vezes ao longo dos anos: uma equipe de seis pessoas com 60–80 tarefas
        ativas no quadro, releases que passaram de dias para semanas e depois para &quot;a gente vê
        isso mês que vem&quot;, e a conclusão muito razoável de que mais gente vai resolver. Quase
        nunca o gargalo real está aí.
      </p>
      <p>
        O diagnóstico decompõe a linha do tempo de uma única tarefa, da ideia até o usuário, até que
        você consiga apontar a etapa exata em que o sistema para de funcionar. Quando você consegue
        apontá-la, a solução costuma ser óbvia, e na maioria das vezes não envolve contratar ninguém.
        A ordem abaixo segue um trabalho real: sintomas → decomposição → encontrar o gargalo →
        discutir a alavanca.
      </p>
    </>
  );
}

export function SectionSymptoms(): ReactNode {
  return (
    <>
      <h2 id="symptoms">1. Sintomas de entregas lentas, e o primeiro reflexo errado</h2>
      <p>
        A primeira conversa quase sempre começa do mesmo jeito. O T2M se mede em meses. O throughput
        está perto de zero. Há mais bugs no quadro do que tarefas abertas. O NPS da equipe, interno ou
        externo, está em algum ponto entre ruim e péssimo.
      </p>
      <p>
        Os engenheiros estão trabalhando, o EM está se esforçando, o PM está ralando para dar conta do backlog.
        E mesmo assim o primeiro reflexo, toda santa vez, é &quot;precisamos de mais engenheiros&quot;,
        e esse é o reflexo errado.
      </p>
      <p>
        O motivo é este. Quando um programa não funciona, a gente não conserta colocando mais
        desenvolvedores no código. A gente abre um depurador. Olha em que estado o programa está, onde
        ele está travando, o que ele está fazendo de fato em comparação com o que esperávamos. Com um
        sistema de engenharia é igual. As métricas acima dizem que o resultado é ruim. Elas não dizem
        onde o sistema está quebrando. Aumentar a equipe sem essa informação só deixa o sistema mais
        complexo (mais passagens de bastão, mais trabalho em andamento, filas maiores) e quase sempre
        mais lento.
      </p>
      <p>
        Então, antes de qualquer conversa sobre contratação, o trabalho é decompor o processo em partes
        e encontrar onde ele começa a degradar. É nesse momento que as métricas deixam de ser um
        boletim e passam a ser uma ferramenta de diagnóstico.
      </p>
    </>
  );
}

export function SectionDecomposeT2M(): ReactNode {
  return (
    <>
      <h2 id="decompose-t2m">2. Decomponha o T2M: Discovery e Lead Time são problemas diferentes</h2>
      <p>
        Quando uma tarefa aparece, ela ainda é só uma ideia crua: um pedido de
        cliente, um relato de bug, uma hipótese do fundador, algo que alguém notou numa reunião. Antes
        que a equipe possa construí-la, alguém precisa dar forma a ela: esclarecer o que ela quer dizer,
        esboçar a solução, decidir se vale a pena, conseguir as aprovações certas. Nem toda ideia passa
        por essa etapa, e as que passam nem sempre passam rápido.
      </p>
      <p>
        Esse intervalo importa, porque é nele que muitas equipes queimam semanas sem perceber.
        <strong> T2M, o Time to Market, é o tempo total da ideia até a produção.</strong> O primeiro
        corte útil nele é a fronteira entre Discovery e Delivery.
      </p>
      <p>
        <strong>Discovery</strong>{" "}
        é tudo o que acontece antes de um ticket estar realmente pronto para um desenvolvedor pegar.
        Esclarecimento de requisitos, design, definição de escopo, alinhamento com stakeholders,
        priorização. O resultado: um ticket que alguém de fato consegue começar a construir.
      </p>
      <p>
        <strong>Delivery</strong>{" "}
        é tudo o que vem depois desse ponto, de &quot;pronto para desenvolvimento&quot; a &quot;em
        produção&quot;. É o que a maioria das métricas de engenharia mede implicitamente, e é a fatia
        que a equipe controla diretamente.
      </p>
      <p>
        A métrica que uso para a segunda metade é o <strong>Lead Time</strong>: o tempo que um ticket
        passa especificamente sob a responsabilidade da equipe de desenvolvimento. Portanto:
      </p>
      <p className={styles.formula}>T2M = Discovery + Lead Time (Delivery)</p>
      <p>Dois números, dois problemas bem diferentes escondidos atrás de um único T2M ruim.</p>
      <p>
        <strong>Se o T2M é alto, mas o Lead Time é baixo</strong>, o gargalo está antes da engenharia.
        A equipe consegue executar, mas o trabalho está parado na análise, esperando um stakeholder, na
        fila de uma decisão de prioridade que ninguém tomou. Contratar mais engenheiros não vai ajudar:
        eles só vão ficar ociosos de outro jeito. O trabalho é consertar o pipeline de Discovery: quem
        decide o que está pronto, com que cadência, com que informações.
      </p>
      <p>
        <strong>Se o Lead Time é alto</strong>, o problema está dentro do próprio Delivery. As tarefas
        travam depois que a equipe as pega: no código, na revisão, no QA, no deploy. Precisamos olhar
        dentro do Lead Time e descobrir onde, exatamente, o tempo está sendo gasto.
      </p>
      <p>
        Na prática, a maioria das equipes com que trabalho tem problemas dos dois lados, mas raramente
        na mesma proporção. A primeira coisa que a separação entre T2M e Lead Time faz é dizer qual
        conversa ter primeiro. O lado do Discovery costuma ser uma conversa com o fundador, o PM e quem
        for dono da priorização. O lado do Delivery é uma conversa com o EM e a equipe. Misturar os dois
        é um dos jeitos mais garantidos de aplicar a correção errada.
      </p>
      <p>
        Dentro do Lead Time, &quot;estar trabalhando numa tarefa&quot; e &quot;a tarefa estar sendo
        trabalhada&quot; acabam sendo coisas diferentes, e é aí que a coisa fica interessante.
      </p>
    </>
  );
}

function TimelineDiagram(): ReactNode {
  return (
    <figure className={styles.timelineDiagram}>
      <svg viewBox="0 0 800 220" role="img" aria-labelledby="timeline-title">
        <title id="timeline-title">
          Linha do tempo de uma tarefa: Discovery, espera e Cycle Time, e as três formas de medi-los.
        </title>
        {/* Top row: 3 segments of the actual task timeline */}
        <rect x="20" y="20" width="180" height="56" rx="3" className={styles.tlSegmentDiscoveryBg} />
        <rect x="200" y="20" width="240" height="56" className={styles.tlSegmentWaitingBg} />
        <rect x="440" y="20" width="340" height="56" rx="3" className={styles.tlSegmentCycleBg} />
        <text x="110" y="55" textAnchor="middle" className={styles.tlSegmentLabel}>Discovery</text>
        <text x="320" y="55" textAnchor="middle" className={styles.tlSegmentLabel}>Espera</text>
        <text x="610" y="55" textAnchor="middle" className={styles.tlSegmentLabelOnDark}>Trabalho ativo</text>
        {/* Alignment guides */}
        <line x1="200" y1="76" x2="200" y2="210" className={styles.tlGuide} />
        <line x1="440" y1="76" x2="440" y2="210" className={styles.tlGuide} />
        {/* Measurement bar: T2M (spans all 3) */}
        <rect x="20" y="92" width="760" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="400" y="113" textAnchor="middle" className={styles.tlMeasureLabel}>T2M — da ideia à produção</text>
        {/* Measurement bar: Lead Time (Waiting + Cycle) */}
        <rect x="200" y="134" width="580" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="490" y="155" textAnchor="middle" className={styles.tlMeasureLabel}>Lead Time — dentro da equipe de dev</text>
        {/* Measurement bar: Cycle Time (Cycle only) */}
        <rect x="440" y="176" width="340" height="32" rx="3" className={styles.tlMeasureBar} />
        <text x="610" y="197" textAnchor="middle" className={styles.tlMeasureLabel}>Cycle Time — só trabalho ativo</text>
      </svg>
      <FigureCaption>
        A mesma linha do tempo, três medições diferentes. Cada métrica aponta para um gargalo diferente.
      </FigureCaption>
    </figure>
  );
}

function CycleTimeDiagnosticTable(): ReactNode {
  return (
    <table className={styles.diagnosticTable}>
      <thead>
        <tr>
          <th scope="col">O que a métrica mostra</th>
          <th scope="col">O que significa</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Cycle Time alto</th>
          <td>Problema de execução: olhe dentro do desenvolvimento.</td>
        </tr>
        <tr>
          <th scope="row">Lead Time alto, Cycle Time normal</th>
          <td>A demanda é maior que a capacidade.</td>
        </tr>
        <tr>
          <th scope="row">Cycle Time baixo, Lead Time baixo, T2M alto</th>
          <td>O gargalo está no Discovery; o Delivery vai bem.</td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionLeadTimeCycleTime(): ReactNode {
  return (
    <>
      <h2 id="lead-time-cycle-time">3. Lead Time = Espera + Cycle Time</h2>
      <p>
        A maioria das equipes acha que, quando uma tarefa está &quot;pronta para desenvolvimento&quot;,
        o trabalho de verdade começou. Não começou. A tarefa vai para o quadro. Um desenvolvedor está
        ocupado com a anterior. Alguém está de férias. Um bug mais prioritário fura a fila. O ticket
        fica lá parado. Do ponto de vista do quadro, a tarefa está &quot;em andamento&quot;. Do ponto
        de vista do sistema, ela só está esperando.
      </p>
      <p>
        Por isso o Lead Time sozinho não é preciso o bastante. Precisamos separar o tempo em que uma
        tarefa está de fato sendo trabalhada do tempo em que ela só está parada numa fila. A métrica que
        uso para isso é o <strong>Cycle Time</strong>: o tempo desde o momento em que a tarefa é
        realmente pega até ela ficar pronta. Só trabalho de verdade.
      </p>
      <p>Empilhando tudo:</p>
      <div className={styles.formula}>
        T2M = Discovery + Lead Time
        <br />
        Lead Time = Espera + Cycle Time
        <br />
        Cycle Time = só trabalho
      </div>
      <TimelineDiagram />
      <p>Daí saem mais duas perguntas de diagnóstico.</p>
      <p>
        <strong>Se o Cycle Time é alto</strong>, o problema está dentro do próprio desenvolvimento.
        Quando as pessoas começam a trabalhar numa tarefa, ela demora a terminar. O gargalo está na
        execução: complexidade do código, demora na revisão, testes instáveis, ciclos de QA manual,
        deploys sofridos. É por aí que você começa a olhar junto com a equipe.
      </p>
      <p>
        <strong>Se o Cycle Time é baixo, mas o Lead Time é alto</strong>, a equipe vai bem. A execução
        vai bem. O sistema recebe mais trabalho do que dá conta. As tarefas se acumulam na fila,
        esperando a equipe terminar o lote anterior antes de poderem sequer começar.
      </p>
      <p>
        É esse segundo caso que pega os fundadores de surpresa. A equipe anda rápido em cada tarefa
        individual. O quadro continua parecendo congelado. O instinto é pressionar o throughput
        individual, quando o problema real é a demanda que chega em comparação com a capacidade da
        equipe. A conversa certa aqui é sobre adicionar capacidade de forma pontual ou limitar quanto
        trabalho a equipe aceita de uma vez. Chegaremos lá.
      </p>
      <p>
        <strong>Tabela rápida de diagnóstico</strong> para a primeira conversa com a liderança:
      </p>
      <CycleTimeDiagnosticTable />
      <p>
        São três números. Dá para tirar todos do Jira ou do Linear numa tarde, e eles já vão contar uma
        história diferente de &quot;precisamos contratar&quot;.
      </p>
    </>
  );
}

export function SectionWhereStuck(): ReactNode {
  return (
    <>
      <h2 id="where-stuck">4. Onde o trabalho realmente trava: por que o tempo por status pode enganar</h2>
      <p>
        Então o Cycle Time está alto. O próximo passo natural é olhar dentro dele: medir o tempo em cada
        status. Em andamento, Code Review, QA, Deploy. Somar para onde vão as horas. Achar a coluna mais
        lenta. Consertá-la.
      </p>
      <p>
        É o que a maioria das equipes faz, e funciona até certo ponto. Se as suas tarefas estão travando
        na revisão de código, dá para ler o tempo da coluna e começar uma conversa real sobre a carga
        dos revisores, o tamanho dos PRs, o SLA de revisão. O mesmo vale para gargalos de QA e filas de
        deploy. Os dados são reais e a intervenção é direcionada.
      </p>
      <p>Mas há uma armadilha, e quero ser específico sobre ela.</p>
      <p>
        As tarefas vão e voltam entre as etapas: do QA para o desenvolvimento
        quando aparece um bug, da revisão de volta para o trabalho quando chega um comentário, do deploy
        de volta para o dev quando algo falha em staging. A mesma tarefa passa pela mesma etapa duas,
        três, às vezes cinco vezes. No momento em que você começa a medir o &quot;tempo médio em
        QA&quot;, essa média mistura em silêncio tickets na primeira passagem com tickets na terceira
        volta ao QA.
      </p>
      <p>
        O que a maioria das equipes faz nesse ponto é dobrar a aposta na medição. Dashboards mais
        detalhados. Rastrear cada transição. Adicionar métricas como &quot;taxa de reprovação no QA na
        primeira passagem&quot; e &quot;retornos da revisão por ticket&quot;. Montar relatórios
        personalizados no Jira. No fim, você tem um instrumento lindo com o qual ninguém consegue agir,
        porque os dados ficaram complicados mais rápido do que o sistema por baixo ficou claro.
      </p>
      <p>
        O erro é tentar medir o sistema no nível errado. A otimização local, deixar cada coluna mais
        rápida, pressupõe que o trabalho flui em linha reta. Na realidade, o sistema é um fluxo cheio
        de redemoinhos, voltas e filas, bem diferente de uma esteira.
      </p>
      <p>
        A virada que realmente ajuda é parar de tentar medir cada etapa com mais precisão e começar a
        perguntar como o trabalho se move pelo sistema como um todo. A pergunta passa a ser
        &quot;quantos tickets estão no sistema ao mesmo tempo, e que proporção deles está de fato
        avançando, em vez de só ficar parada ali&quot;. Quando você faz essa pergunta, o resto do
        diagnóstico fica bem mais simples.
      </p>
    </>
  );
}

function QueueChart(): ReactNode {
  return (
    <figure className={styles.queueChart}>
      <svg viewBox="0 0 800 220" role="img" aria-labelledby="queue-chart-title">
        <title id="queue-chart-title">
          Número de tarefas por status: Em andamento 5, Revisão 3, QA 25, Deploy 2. O QA é o gargalo.
        </title>
        {/* In Progress: 5 → bar 110px (scale 22 px/unit) */}
        <text x="140" y="40" textAnchor="end" className={styles.qcLabel}>Em andamento</text>
        <rect x="160" y="20" width="110" height="30" rx="3" className={styles.qcBar} />
        <text x="280" y="40" className={styles.qcValue}>5</text>
        {/* Code Review: 3 → bar 66px */}
        <text x="140" y="90" textAnchor="end" className={styles.qcLabel}>Revisão</text>
        <rect x="160" y="70" width="66" height="30" rx="3" className={styles.qcBar} />
        <text x="236" y="90" className={styles.qcValue}>3</text>
        {/* QA: 25 → bar 550px — the bottleneck */}
        <text x="140" y="140" textAnchor="end" className={styles.qcLabelBottleneck}>QA</text>
        <rect x="160" y="120" width="550" height="30" rx="3" className={styles.qcBarBottleneck} />
        <text x="720" y="140" className={styles.qcValueBottleneck}>25</text>
        {/* Deploy: 2 → bar 44px */}
        <text x="140" y="190" textAnchor="end" className={styles.qcLabel}>Deploy</text>
        <rect x="160" y="170" width="44" height="30" rx="3" className={styles.qcBar} />
        <text x="214" y="190" className={styles.qcValue}>2</text>
      </svg>
      <FigureCaption>
        Onde as tarefas se acumulam, a capacidade do sistema está batendo no teto.
      </FigureCaption>
    </figure>
  );
}

export function SectionCountTasks(): ReactNode {
  return (
    <>
      <h2 id="count-tasks">5. Como achar gargalos sem medir tempo</h2>
      <p>Esta é a jogada de diagnóstico mais subestimada que eu conheço.</p>
      <p>
        Você não precisa medir o tempo em cada status para achar o gargalo. Basta{" "}
        <strong>contar as tarefas em cada status</strong>.
      </p>
      <p>Tire os números do Jira em cinco minutos. O formato quase sempre fica parecido com isto:</p>
      <QueueChart />
      <p>Depois, procure os desequilíbrios.</p>
      <p>
        Se você tem cinco tarefas em desenvolvimento, três em revisão e vinte e cinco em QA, não
        precisa de cronômetro. Não precisa de um dashboard no Looker. O gargalo é o QA. As tarefas se
        acumulam ali, mesmo que cada uma, isoladamente, ande no ritmo normal. O sistema tem um ponto
        onde o trabalho se acumula mais rápido do que escoa.
      </p>
      <p>
        Essa contagem simples diz quase tudo o que o tempo por status diria, com cerca de um por cento
        do esforço. Funciona porque as filas são o lado visível de um problema de fluxo: onde as filas
        se formam, é ali que a capacidade do sistema está batendo no teto.
      </p>
      <p>
        Ela também muda o rumo da conversa. O tempo por status convida a um debate sobre &quot;quanto
        tempo em QA é demais&quot;. A contagem de tarefas deixa o problema evidente: vinte e cinco
        coisas esperando por dois engenheiros de QA é um problema do sistema, e pedir que o QA trabalhe
        mais rápido passa longe dele.
      </p>
      <p>
        É o diagnóstico mais barato e mais rápido do guia, e a maioria das equipes passa direto por ele
        a caminho de montar dashboards que nunca vai usar.
      </p>
      <p>
        Mas ele levanta uma pergunta mais profunda. <strong>Por que</strong>{" "}
        há vinte e cinco tarefas em QA? De onde elas vieram? Por que a equipe continua aceitando
        trabalho novo quando já existe uma muralha de tickets inacabados no sistema?
      </p>
    </>
  );
}

function WipCostList(): ReactNode {
  return (
    <ul>
      <li>
        As tarefas perdem relevância para o negócio enquanto esperam. Quando a equipe volta a elas, os
        requisitos mudaram ou a urgência evaporou.
      </li>
      <li>
        Os conflitos de merge se acumulam. Uma branch de funcionalidade que fica parada três semanas
        enquanto a branch principal segue em frente vira um pequeno projeto de arqueologia para integrar.
      </li>
      <li>
        A troca de contexto fica cara. Cada desenvolvedor carrega na cabeça três ou quatro tarefas
        &quot;em andamento&quot; ao mesmo tempo. Nenhuma delas está avançando de fato.
      </li>
      <li>
        Fica mais fácil colocar bugs em produção. Com mais trabalho em andamento, menos olhos ficam em
        cada peça. A qualidade cai.
      </li>
    </ul>
  );
}

export function SectionWip(): ReactNode {
  return (
    <>
      <h2 id="wip">6. Trabalho em andamento (WIP): a variável que controla a velocidade de entrega</h2>
      <p className={styles.pullquote}>Seis engenheiros. Oitenta tarefas em andamento. Nada fica pronto.</p>
      <p>
        Não estou exagerando. Vi exatamente esse formato várias vezes. Uma equipe de três
        desenvolvedores, dois engenheiros de QA e um tech lead, com mais de oitenta tickets ativos no
        quadro. Para uma equipe de seis.
      </p>
      <p>
        A história por trás é sempre a mesma. Um desenvolvedor termina a parte ativa de uma tarefa e a
        manda para revisão. Agora o ticket atual dele está bloqueado por outra pessoa. Em vez de
        esperar, ele pega outro do backlog. Esse também fica bloqueado, esperando o QA. Ele pega mais
        um. O quadro se enche de tarefas que tecnicamente estão &quot;em andamento&quot;, mas na
        verdade estão esperando alguém, em outro lugar, por algum outro motivo.
      </p>
      <p>
        Isso é o <strong>Work in Progress (WIP)</strong>, o trabalho em andamento: o número de tarefas
        que o sistema segura ao mesmo tempo.
      </p>
      <p>
        A equipe não consegue fisicamente trabalhar em oitenta coisas ao mesmo tempo. Seis pessoas,
        oitenta tarefas. A maior parte do trabalho está só parada. Esperando revisão, bloqueada no QA,
        estacionada porque um stakeholder não respondeu, parcialmente pronta e mergeada, mas ainda sem
        deploy. Cada um desses tickets ocupa um espaço no sistema: um espaço no contexto mental de
        alguém, um lugar no quadro, um pedaço de estado que alguém precisa manter aquecido.
      </p>
      <p>O custo se acumula:</p>
      <WipCostList />
      <p>
        E as métricas confirmam. WIP alto anda junto com T2M alto (as tarefas demoram mais para sair),
        throughput baixo (menos tarefas terminam por semana), mais bugs (menos atenção por tarefa) e
        NPS mais baixo, tanto dos clientes quanto da equipe.
      </p>
      <p>
        A variável que controla o sistema é quanto a equipe tenta manter em andamento ao mesmo tempo.
        Ela pesa mais do que a velocidade da equipe e mais do que a senioridade dos engenheiros.
      </p>
    </>
  );
}

export function SectionLittlesLaw(): ReactNode {
  return (
    <>
      <h2 id="littles-law">7. Lei de Little: Lead Time = WIP / Throughput</h2>
      <p>
        Se as seções anteriores parecem chegar sempre à mesma conclusão, você tem razão. E há um motivo.
      </p>
      <p>
        A pesquisa operacional descobriu isso há décadas. A relação entre a quantidade de trabalho num
        sistema e o tempo que esse trabalho leva é descrita pela <strong>Lei de Little</strong>:
      </p>
      <p className={styles.formula}>Lead Time = WIP / Throughput</p>
      <p>Na linguagem da entrega de software:</p>
      <ul>
        <li>
          <strong>WIP</strong>: quantas tarefas estão no sistema ao mesmo tempo
        </li>
        <li>
          <strong>Throughput</strong>: quantas tarefas a equipe conclui por período
        </li>
        <li>
          <strong>Lead Time</strong>: quanto tempo uma tarefa vive no sistema, em média
        </li>
      </ul>
      <p>A fórmula é quase constrangedora de tão simples, e a consequência é brutal.</p>
      <p>
        Mantenha o throughput constante e aumente o WIP, e o lead time cresce na mesma proporção.
        Exemplo prático: uma equipe que conclui dez tarefas por semana.
      </p>
      <div className={styles.numericExample}>
        <p>10 tarefas no sistema → lead time médio ≈ 1 semana</p>
        <p>30 tarefas → ≈ 3 semanas</p>
        <p>80 tarefas → ≈ 8 semanas</p>
      </div>
      <p>
        A equipe trabalha na mesma velocidade nos três cenários. Os engenheiros não ficaram mais lentos.
        Os tickets não ficaram mais complexos. A única coisa que mudou foi quantas tarefas o sistema
        tenta segurar ao mesmo tempo. E o lead time médio ficou 8 vezes maior.
      </p>
      <p>
        É por isso que equipes que trabalham mais não necessariamente entregam mais rápido. Com
        esforço, dá para subir o throughput em 10–20%. Com disciplina, dá para baixar o WIP em 50% ou
        mais. A matemática diz que a segunda alavanca mexe mais nos resultados.
      </p>
      <p>
        É também por isso que &quot;precisamos de mais engenheiros&quot; tantas vezes piora as coisas.
        Engenheiros novos trazem o próprio trabalho em andamento. O WIP sobe mais rápido que o
        throughput, e o lead time piora antes de melhorar. O onboarding torna isso quase garantido: os
        recém-contratados levam de seis a oito semanas para começar a contribuir de forma significativa,
        e nesse período o WIP da equipe atual aumenta (mentoria, passagem de contexto, revisão dos PRs
        dos novatos).
      </p>
      <p className={styles.pullquote}>
        Se for guardar um único número, guarde este. Lead Time = WIP / Throughput.
      </p>
      <p>
        É a matemática do sistema por trás de quase toda conversa do tipo &quot;estamos andando
        devagar&quot; que já tive em engenharia.
      </p>
    </>
  );
}

export function SectionWipLimits(): ReactNode {
  return (
    <>
      <h2 id="wip-limits">8. Limites de WIP: a alavanca que conserta a maioria das equipes lentas</h2>
      <p>
        Então, se o WIP é a variável que controla a velocidade do sistema, e normalmente não dá para
        mudar o throughput de forma drástica no curto prazo, a alavanca é óbvia: limitar o WIP.
      </p>
      <p>
        A maioria das equipes de engenharia tem um problema de produtividade porque tem um problema de
        WIP. Conserte o WIP, e a maior parte dos outros sintomas (lead times longos, bugs frequentes,
        pouca previsibilidade, troca de contexto sem fim) melhora junto.
      </p>
      <p>
        <strong>Limites de WIP</strong> são a disciplina de dizer: este sistema não vai segurar mais do
        que N tarefas ao mesmo tempo. Se o WIP está no limite, nenhum trabalho novo começa até que algo
        em andamento termine. Ponto.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/diagnose-broken-engineering-delivery/too-much-wip-vs-wip-limits.webp"
          alt="Dois pipelines de entrega comparados sob Lead Time = WIP / Throughput: sem limites, as tarefas se acumulam no QA e o lead time fica imprevisível; com limites de WIP, cada etapa segura poucas tarefas e o trabalho flui de forma previsível"
          width={1200}
          height={800}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Mesmo throughput, WIP diferente: as filas encolhem e o lead time fica previsível.
        </FigureCaption>
      </figure>
      <p>O que os limites de WIP de fato melhoram:</p>
      <ul>
        <li>Menos troca de contexto, porque cada pessoa carrega menos coisas em andamento</li>
        <li>Filas mais curtas em cada etapa, porque há menos coisa no sistema como um todo</li>
        <li>Lead Time mais curto, pela Lei de Little, mecanicamente</li>
        <li>Menos bugs, porque a atenção se concentra em terminar em vez de começar</li>
        <li>Mais previsibilidade, porque o sistema para de oscilar entre ocioso e engarrafado</li>
      </ul>
      <p>
        Os limites de WIP fazem o sistema andar mais rápido, e cada desenvolvedor continua no mesmo
        ritmo. É essa parte que confunde a liderança. A equipe produz a mesma quantidade de código por
        hora de trabalho, só que com menos peças pela metade em paralelo, e assim mais do que ela produz
        chega de fato à produção.
      </p>
      <p>
        É também uma das pouquíssimas alavancas que melhoram as entregas sem contratar, sem ferramentas
        novas e sem redesenhar processos. Não custa nada. Dá para aplicar nesta semana. E quase ninguém
        aplica, porque exige dizer &quot;não&quot; a começar trabalho novo, e dizer &quot;não&quot; a um
        stakeholder que pede mais uma coisa em andamento é mais difícil do que dizer &quot;sim&quot;.
      </p>
      <p>
        Limites de WIP dependem bem menos das configurações do Jira do que da disciplina da equipe e dos
        stakeholders de terminar antes de começar.
      </p>
    </>
  );
}
