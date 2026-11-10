// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: an agent is a teammate that shines on the
// periphery and fails at the core → for a founder that line is forgiving → in a
// company the real blocker is access, not capability → here is what the agent is
// actually good at, and what it isn't → the rule underneath it all is the cost
// of error, which quietly changes the engineer's job.

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/ai-coding-agent-periphery-core.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const STARTING_CHEAP_HREF = getPostPathInLocale("ai-made-starting-free-finishing-expensive", "pt-br");
const RESCUE_HREF = pagePath("pt-br", "ai-vibecoding");

export function ArticleLede(): ReactNode {
  return (
    <>
      Agentes de IA são brilhantes em parte do trabalho e perigosos em outra. Deixe a periferia com
      eles e o núcleo com as pessoas: veja onde eles merecem o lugar e onde ainda não.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        Um agente de IA consegue achar a causa de um bug num código que ninguém mexe há um ano e, na
        mesma tarde, colocar no ar com toda a confiança um bug que derruba o checkout, se você o deixar
        chegar perto do núcleo. A distância entre esses dois momentos é a mesma em qualquer
        escala. Para um fundador sozinho, ela perdoa; dentro de uma empresa, ela decide o jogo.
      </p>
      <p>
        Para um fundador, quase tudo isso já está resolvido. No último ano, vi pessoas sem formação
        séria em engenharia construírem e fazerem crescer produtos reais por conta própria: um CRM
        para uma escola presencial, uma ferramenta para analistas de negócio, automação de marketing
        para uso próprio. <Link href={STARTING_CHEAP_HREF}>O custo de entrada para construir despencou</Link>;
        dá para montar a coleta de métricas do Jira e do GitLab numa noite.
      </p>
      <p>
        As armadilhas continuam lá: agentes perdem o contexto, geram código estranho, e alguns
        projetos descambam para o caos. Isso tem solução, e é boa parte do que eu faço; escrevi sobre{" "}
        <Link href={RESCUE_HREF}>o caminho de resgate</Link> em outro texto. Essa é a versão do
        fundador. O problema mais difícil e menos mapeado está um nível acima, dentro de uma empresa,
        e é para lá que este texto vai.
      </p>
    </>
  );
}

export function SectionBarrier(): ReactNode {
  return (
    <>
      <h2 id="barrier">Dentro de uma empresa, a barreira real é o acesso ao agente</h2>
      <p>
        Em escala corporativa, o agente é igualmente capaz; a parte difícil é obter permissão para
        usá-lo. Em startups, a IA já é ferramenta padrão; dentro de uma empresa, a adoção emperra por
        semanas em aprovações: revisões de segurança, quais dados podem chegar ao modelo, quem é dono
        da plataforma, como os agentes são governados.
      </p>
      <p>
        O que destrava tudo: nada precisa sair de casa. Dá para rodar uma API compatível com a da
        OpenAI inteiramente dentro do seu perímetro: um modelo open source como o Qwen servido via
        LiteLLM e vLLM, acessível só pela VPN corporativa, com um agente como Opencode ou Hermes
        ligado à IDE e servidores MCP conectando-o ao Jira, ao GitLab, ao Confluence e ao resto das
        suas ferramentas internas. Ele roda com as credenciais do próprio desenvolvedor, só acessa o
        que esse desenvolvedor já acessa e registra cada ação para auditoria. A segurança deixa de
        ser o bloqueio. Montar a stack completa é assunto para outro texto, mas ela já deixou de ser
        a barreira que era há um ano.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-coding-agent-periphery-core/enterprise-ai-perimeter.webp"
          alt="IA corporativa dentro do perímetro da empresa: a IDE do desenvolvedor alimenta um agente de IA, que acessa uma API compatível com a da OpenAI e um modelo open source auto-hospedado, tudo ligado a sistemas internos como GitLab, Jira, Confluence e Grafana, sem APIs externas, sem privilégios extras e com trilha de auditoria completa."
          width={1372}
          height={1374}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          Dentro do perímetro: o agente roda na infraestrutura interna, com o acesso do próprio
          desenvolvedor e trilha de auditoria completa. Nada sai da empresa.
        </FigureCaption>
      </figure>
      <p>
        Uma vez instalado, seja no notebook do fundador ou na VPN corporativa, a pergunta é a mesma:
        o que exatamente você entrega a ele?
      </p>
    </>
  );
}

export function SectionWhatWorks(): ReactNode {
  return (
    <>
      <h2 id="what-works">No que os agentes de IA são bons</h2>
      <p>
        Conectado ao seu código, à documentação, às tarefas, aos testes, aos logs e às métricas, seja
        o Cursor, o Claude Code ou um agente interno auto-hospedado, ele começa a entender o seu
        projeto. É aqui que ele merece o lugar.
      </p>
      <ul>
        <li>
          <strong>Entender rápido um código desconhecido</strong>: mergulhar num código em que você
          nunca mexeu, achar a causa de um bug numa funcionalidade de que você não sabe nada,
          responder à pergunta de um analista sobre uma funcionalidade de que você nunca tinha ouvido
          falar.
        </li>
        <li>
          <strong>Apoio ao desenvolvimento</strong>: as ferramentas e automações para as quais nunca
          sobrava tempo, como coleta de métricas, exportação de dados do Jira e do GitLab, skills de
          agente para trabalho repetitivo como integrações padrão. Fica de fora o produto principal,
          onde a qualidade do código é crítica.
        </li>
        <li>
          <strong>Artefatos em volta do código</strong>: documentação, diagramas UML, testes
          automatizados, casos no TestRail, apresentações.
        </li>
        <li>
          <strong>Revisões</strong> de código, de requisitos e de especificações. Por enquanto, meio a
          meio: às vezes é puro ruído, às vezes pega algo realmente útil.
        </li>
      </ul>
    </>
  );
}

export function SectionWhatNot(): ReactNode {
  return (
    <>
      <h2 id="what-not">O que não deve ficar nas mãos dos agentes de IA</h2>
      <p>
        <strong>O desenvolvimento de ponta a ponta de qualquer coisa que importe.</strong>{" "}
        Dinheiro, blockchains, sistemas de alta carga, a arquitetura central: qualquer lugar onde um
        erro é fácil de cometer e caro de desfazer. Numa startup, entregar uma funcionalidade inteira
        ao agente já funciona em parte; em produção, com tráfego real e dinheiro real em jogo, ainda
        é má ideia. Acelera o trabalho? Sim. Substitui um desenvolvedor sênior? Não.
      </p>
    </>
  );
}

export function SectionRule(): ReactNode {
  return (
    <>
      <h2 id="rule">A regra da periferia e do núcleo</h2>
      <p>
        O padrão é simples. O agente cobre a <strong>periferia</strong> do desenvolvimento: rotina,
        tarefas de apoio, navegação em código desconhecido, artefatos. Tudo o que tem muito volume e
        um custo de erro relativamente baixo. O <strong>núcleo</strong>, onde o custo de erro se mede
        em dinheiro e em usuários, fica com as pessoas.
      </p>
      <figure className={styles.figure}>
        <Image
          src="/blog/ai-coding-agent-periphery-core/periphery-vs-core.webp"
          alt="Diagrama radial: no centro, um núcleo a cargo de pessoas, rotulado “decisões de engenharia”, cercado pela periferia que um agente de IA cobre: depuração, documentação, testes, revisões, requisitos, integrações padrão, automação e apresentações."
          width={1200}
          height={1200}
          className={styles.figureImage}
          unoptimized
        />
        <FigureCaption>
          O agente trabalha na periferia; no núcleo, a pessoa toma a decisão de engenharia.
        </FigureCaption>
      </figure>
      <p>
        Engenheiros passavam horas procurando informação e dando conta da rotina. Agora o trabalho
        principal é tomar a decisão de engenharia certa.
      </p>
    </>
  );
}
