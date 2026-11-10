// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds the argument: the stall pattern → the junior reframe →
// the proof case → the practice mapping → why past fixes failed → the restart
// sequence.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/vibecoded-mvp-stopped-shipping.module.css";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const PILLAR_HREF = getPostPathInLocale("diagnose-broken-engineering-delivery", "pt-br");
const HUB_HREF = pagePath("pt-br", "ai-vibecoding");
const HANGOVER_HREF = "https://www.fastcompany.com/91398622/the-vibe-coding-hangover-is-upon-us";
const VIBE_STUDY_HREF = "https://arxiv.org/abs/2512.11922";
const CONVERGED_HREF =
  "https://www.cio.com/article/4162085/your-ai-coding-agent-isnt-a-tool-its-a-junior-developer-treat-it-like-one.html";
const VERACODE_HREF = "https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/";
const AGENTS_MD_HREF = "https://agents.md";

export function ArticleLede(): ReactNode {
  return (
    <>
      Um MVP feito com vibecoding trava pelo mesmo motivo que trava uma equipe de juniores sem um
      sênior: o código é escrito rápido, nada pega os erros antes que cheguem à produção, e cada
      mudança nova quebra a anterior sem ninguém perceber.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        A mesma história aparece sem parar nas comunidades de fundadores (a imprensa de tecnologia já
        lhe deu nome:{" "}
        <a href={HANGOVER_HREF} target="_blank" rel="noreferrer">
          a ressaca do vibe coding
        </a>
        ), e ela sempre chega ao mesmo ponto. O MVP existe. Tem usuários reais, às vezes receita real.
        Os primeiros meses foram a melhor experiência de criar produto da vida do fundador: você descreve
        uma funcionalidade no Cursor, no Claude Code, no Lovable ou no Bolt, e ganha a funcionalidade.
        E então, meses depois, as entregas vão parando. Aos poucos. Os releases ficam mais assustadores,
        as correções demoram mais, e mudanças que levavam uma tarde passam a levar semanas.
      </p>
      <p>
        A conclusão de sempre, nesse ponto, é que programar com IA foi uma armadilha, ou que o código
        é um lixo e precisa ser reescrito. Não acho que nenhuma das duas seja verdade. O que vejo
        nesses códigos é algo que eu já corrigia havia anos antes de um LLM escrever a primeira linha
        de código de produção: o resultado de trabalho júnior, rápido e sem supervisão. A indústria
        sabe lidar com isso há décadas, e num MVP típico feito com vibecoding quase nada desse
        conhecimento foi aplicado. Essa é a boa notícia: a sua situação é bem conhecida, e as soluções
        também.
      </p>
    </>
  );
}

export function SectionStall(): ReactNode {
  return (
    <>
      <h2 id="stall">O formato do travamento</h2>
      <p>O padrão se repete com tanta constância que consigo listar os sintomas sem ver o código:</p>
      <ul>
        <li>
          Você adiciona uma funcionalidade e outras três quebram. Descobrir <em>quais</em> três leva
          mais tempo do que a própria funcionalidade.
        </li>
        <li>
          Há partes do código gerado por IA que ninguém entende, nem você, nem a IA que as escreveu.
          Mexer nelas é uma aposta.
        </li>
        <li>
          A IA reescreve o mesmo código de jeitos diferentes, uma vez após a outra. Cada correção
          desfaz uma correção anterior. Você paga tokens para andar em círculos.
        </li>
        <li>
          O fluxo da demo funciona. Aí um usuário real faz algo um pouco fora do comum, a produção cai
          de madrugada, e você só fica sabendo pela reclamação de um usuário.
        </li>
      </ul>
      <p>
        Os quatro sintomas vêm do mesmo lugar: nada no código ou no fluxo de trabalho segura as
        decisões anteriores no lugar, então cada mudança nova volta a jogar os dados para tudo o que
        veio antes. As pesquisas começam a documentar a mesma troca:{" "}
        <a href={VIBE_STUDY_HREF} target="_blank" rel="noreferrer">
          um estudo recente sobre vibe coding na prática
        </a>{" "}
        descreve uma geração sem atrito que se paga mais tarde com inconsistência de arquitetura,
        falhas de segurança e custo de manutenção.
      </p>
    </>
  );
}

export function SectionJunior(): ReactNode {
  return (
    <>
      <h2 id="junior">O júnior mais rápido que você já contratou</h2>
      <p>
        Esta é a mudança de olhar que torna a situação toda administrável: trate o agente de código
        como um colega com um perfil bem específico. É o desenvolvedor júnior mais rápido com quem
        você já trabalhou: entrega uma funcionalidade em minutos, nunca discorda, nunca se cansa. E
        tem zero memória do porquê das decisões do mês passado, nenhum medo de mexer em nada e
        nenhuma responsabilidade pelo resultado. Ele vai entregar com toda a confiança um código que
        parece pronto, porque parecer pronto é exatamente o que ele otimiza.
      </p>
      <p>
        Equipes de software empregam exatamente essa pessoa desde que a indústria existe; cada prática
        construída em torno de desenvolvedores juniores existe por causa desse perfil. Engenheiros
        experientes{" "}
        <a href={CONVERGED_HREF} target="_blank" rel="noreferrer">
          em grande parte já chegaram a essa visão
        </a>
        ; o que ainda não chegou aos fundadores é a metade que importa: o sistema de gestão que vem
        junto.
      </p>
      <p>
        Digo isso como alguém que constrói com agentes de IA todos os dias: o meu próprio trabalho de
        produto é feito com vibecoding, e não pretendo parar. Cada mudança que os meus agentes produzem
        passa por linters, checagem de tipos e testes no CI antes de entrar. As ferramentas variam por
        stack (mypy e pytest em Python, tsc e ESLint em Node, PHPStan e PHPUnit em PHP), e a ideia é a
        mesma. A velocidade é real. O perfil também.
      </p>
    </>
  );
}

export function SectionCase(): ReactNode {
  return (
    <>
      <p>
        Já arrumei a versão humana disso várias vezes. Numa startup de EdTech em que trabalhei como
        CTO em tempo parcial, a produção podia ficar fora do ar por horas antes que alguém percebesse:
        nada estava vigiando. Nenhum alerta, nenhum rastreamento de erros. Bugs funcionais ficavam no
        produto sem que ninguém prestasse atenção neles. O código tinha sido escrito às pressas, por
        pessoas com mais velocidade do que experiência, e as maiores lacunas estavam em volta dele:
        ninguém revisava as mudanças, nada testava os caminhos críticos, nada vigiava a produção, e um
        release significava um desenvolvedor entrando no servidor de produção e mudando coisas à mão.
      </p>
      <p>
        Colocamos monitoramento, adicionamos testes, revisão de código e uma etapa de QA, trocamos as
        edições à mão no servidor por um pipeline de release e reescrevemos algumas partes do código
        no caminho. As quedas pararam; a produção ficou estável dali em diante. Ao longo do trabalho, o
        tempo fora do ar caiu mais de dez vezes, a velocidade de entrega (time-to-market e throughput)
        mais que dobrou, os custos de operação caíram 1,5×, e o eNPS da equipe foi de −100% para
        +100%. Além das ferramentas, sentei com o desenvolvedor em conversas individuais, sobre os
        objetivos dele e como alcançá-los, porque gerenciar um júnior inclui fazê-lo crescer. Nada
        disso é exótico; é o kit padrão, aplicado tarde.
      </p>
      <p className={styles.pullquote}>
        A IA não existia para aquela startup, e a falha é idêntica à de um MVP construído com IA. A
        IA só chega lá mais rápido.
      </p>
    </>
  );
}

function MappingTable(): ReactNode {
  return (
    <table className={styles.mappingTable}>
      <thead>
        <tr>
          <th>Como as equipes lidam com juniores</th>
          <th>O equivalente para a IA</th>
          <th>O que isso impede</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Um documento de onboarding: como estruturamos o código aqui, o que nunca fazemos</th>
          <td>
            Um arquivo de convenções que o agente lê em toda tarefa (
            <a href={AGENTS_MD_HREF} target="_blank" rel="noreferrer">
              AGENTS.md
            </a>{" "}
            / CLAUDE.md)
          </td>
          <td>O agente reinventando a arquitetura do zero a cada pedido</td>
        </tr>
        <tr>
          <th>Revisão de código antes de qualquer merge</th>
          <td>Uma pessoa ou um agente sênior revisa cada mudança da IA; linters e checagem de tipos funcionam como barreira obrigatória</td>
          <td>Código que &ldquo;parece pronto&rdquo; quebrando em silêncio funcionalidades que funcionavam</td>
        </tr>
        <tr>
          <th>Uma suíte de testes que precisa ficar verde</th>
          <td>Testes nos caminhos críticos, rodando automaticamente; uma suíte vermelha bloqueia o merge</td>
          <td>A correção que quebra outras duas coisas; a regressão que você descobre em produção</td>
        </tr>
        <tr>
          <th>Um CI que não deixa mudanças ruins passarem</th>
          <td>O mesmo pipeline, aplicado ao que o agente produz: lint, tipos, varredura de segurança, build</td>
          <td>Credenciais fixas no código, entrada sem validação, dependências que ninguém escolheu de propósito</td>
        </tr>
        <tr>
          <th>Monitoramento, para que os problemas apareçam antes dos clientes</th>
          <td>Rastreamento de erros e alertas ligados ao produto em produção</td>
          <td>A produção fora do ar por horas enquanto todo mundo acha que está tudo bem</td>
        </tr>
        <tr>
          <th>Tarefas pequenas e bem delimitadas: um júnior nunca recebe &ldquo;refazer o faturamento&rdquo; num ticket só</th>
          <td>Uma mudança por pedido, num tamanho que uma pessoa consiga de fato revisar o diff</td>
          <td>O diff de 4.000 linhas que ninguém consegue checar, onde moram as piores surpresas</td>
        </tr>
        <tr>
          <th>Conversas individuais e feedback regulares, para o júnior crescer em vez de repetir erros</th>
          <td>O que a revisão pega volta para o arquivo de convenções, e o agente para de cometer aquele erro</td>
          <td>Pagar pela mesma correção, em tokens e em tempo de revisão, toda santa semana</td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionMapping(): ReactNode {
  return (
    <>
      <h2 id="practices">O que equipes experientes fazem com juniores, e o equivalente para a IA</h2>
      <p>
        As práticas que transformam o trabalho de juniores num negócio que funciona são conhecidas até
        demais. Cada uma tem um equivalente direto na era da IA, e um MVP feito com vibecoding
        costuma não ter nenhuma delas.
      </p>
      <MappingTable />
      <p>
        A coluna da esquerda e a da direita são a mesma lista. Esse é o argumento inteiro deste
        ensaio: a disciplina para gerenciar agentes de IA já existe, testada na prática, e está
        esperando para ser aplicada.
      </p>
      <p>
        A linha de segurança traz um número que vale conhecer: no{" "}
        <a href={VERACODE_HREF} target="_blank" rel="noreferrer">
          relatório de 2025 da Veracode sobre a segurança do código gerado por IA
        </a>
        , 45% das amostras de código gerado por IA, de mais de 100 modelos, falharam nas verificações
        de segurança. A barreira existe porque o júnior entrega vulnerabilidades em escala.
      </p>
      <p>
        Prompts melhores ficaram fora da lista de propósito. Um sênior ajusta o ambiente em volta do
        júnior para que um trabalho descuidado fisicamente não consiga chegar à produção, seja qual for
        a redação do ticket.
      </p>
    </>
  );
}

export function SectionFailedFixes(): ReactNode {
  return (
    <>
      <h2 id="failed-fixes">As soluções que você já tentou, e por que não se sustentaram</h2>
      <p>
        Quando um fundador começa a procurar ajuda de fora, normalmente já passou por duas ou três
        tentativas de resgate. Elas falham de jeitos previsíveis, e a lente do júnior explica cada uma.
      </p>
      <p>
        <strong>Trocar de ferramenta de IA.</strong> Trocar o Cursor pelo Windsurf ou pelo Copilot
        substitui um júnior por outro júnior. O novo pode ser mais esperto; ainda assim não tem
        memória, não tem medo, e não há revisão nenhuma esperando o que ele produz. Os mesmos padrões
        voltam em semanas, porque eles nunca dependeram de qual modelo escreveu o código.
      </p>
      <p>
        <strong>Prompts e arquivos de regras melhores.</strong>{" "}
        Mais perto: esse é o documento de onboarding, e é uma camada de verdade. Só que uma instrução
        que o pipeline não faz cumprir é uma sugestão. Um júnior concorda com o guia de estilo e depois
        entrega o que entrega; o que torna o guia real é a revisão e as barreiras por trás dele.
      </p>
      <p>
        <strong>O sprint de refatoração.</strong>{" "}
        &ldquo;Vamos parar as funcionalidades por duas semanas e arrumar a casa.&rdquo; Refatorar sem
        testes é como um júnior transforma bugs velhos em bugs novos: o código acaba quebrado{" "}
        <em>de outro jeito</em>, e você pagou duas semanas de paralisação por isso. A limpeza vem
        depois da rede que pega o que a limpeza quebra.
      </p>
      <p>
        <strong>Contratar um desenvolvedor sênior.</strong> O instinto certo, muitas vezes na hora
        errada. Coloque um sênior num código sem testes, sem histórico de revisão e sem monitoramento,
        e os primeiros meses dele somem em arqueologia: redescobrindo à mão fatos que as ferramentas
        deveriam mostrar de cara. Alguns vão embora. Construa a rede de segurança primeiro, e a mesma
        contratação rende já na primeira semana, se é que você ainda vai precisar dela.
      </p>
    </>
  );
}

export function SectionRestart(): ReactNode {
  return (
    <>
      <h2 id="restart">Como retomar as entregas</h2>
      <p>A ordem das etapas importa mais do que qualquer prática isolada.</p>
      <ol>
        <li>
          <strong>Primeiro, o diagnóstico.</strong> Qual camada ausente está de fato travando as
          entregas <em>agora</em>? Se a produção quebra em silêncio, o monitoramento vem primeiro. Se
          cada mudança causa regressões, vêm primeiro os testes nos dois ou três caminhos críticos do
          usuário. Um MVP feito com vibecoding não absorve seis práticas novas numa semana; comece
          pela que mais dói e depois adicione a próxima.
        </li>
        <li>
          <strong>Monte a rede de segurança.</strong>{" "}
          Monitoramento e rastreamento de erros, um pipeline de CI com barreiras de verdade, testes nos
          caminhos sem os quais o negócio morre, revisão em toda mudança. Seja de uma pessoa ou de um
          agente, a regra é a mesma: nada entra sem ser visto. Essa fase se mede em semanas, alguns
          meses no máximo, e é nela que as entregas recomeçam sem alarde, porque as mudanças deixam de
          dar medo.
        </li>
        <li>
          <strong>Só então, escale.</strong>{" "}
          Arrumar a arquitetura, ajustar a performance, decidir contratações: o trabalho de escalar um
          software gerado por IA. Tudo isso sai barato quando a rede existe e é imprudente enquanto ela
          não existe.
        </li>
      </ol>
      <p>
        É a mesma sequência que aplico há anos em códigos escritos por juniores, e é exatamente o que
        ofereço para produtos feitos com vibecoding. A versão mais longa, com quanto custa e o que
        rende cada fase, está na página{" "}
        <Link href={HUB_HREF}>MVP de vibecoding de volta aos trilhos</Link>. E, se você quiser{" "}
        <em>medir</em> onde as suas entregas realmente travam em vez de adivinhar (quais tarefas
        empacam, e em que etapa), escrevi um guia à parte sobre{" "}
        <Link href={PILLAR_HREF}>como diagnosticar um sistema de entrega com métricas</Link>; ele vale
        para uma equipe de duas pessoas com IA do mesmo jeito que para uma organização de quarenta
        engenheiros.
      </p>
    </>
  );
}
