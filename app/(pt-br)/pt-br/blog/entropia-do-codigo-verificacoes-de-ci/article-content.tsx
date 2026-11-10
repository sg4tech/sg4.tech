// Article body sections, split out of page.tsx to satisfy ESLint
// max-lines-per-function and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: complexity grows on its own and AI speeds
// it up → seven levels of CI checks, cheapest first → one table of tools per
// language → checks beat written rules because an agent can't skip a red build
// → a ready-made Python template that bundles all of it.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/code-entropy-ci-checks-ai-legacy.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";

const VIBECODED_HREF = getPostPathInLocale("vibecoded-mvp-stopped-shipping", "pt-br");
const TEMPLATE_HREF = "https://github.com/sg4tech/python-guardrails-template";
const LEHMAN_HREF = "https://en.wikipedia.org/wiki/Lehman%27s_laws_of_software_evolution";
const HOARE_HREF = "https://everythingsysadmin.com/2009/01/tony-hoare-apologizes-for-inve.html";
const HARNESS_HREF = "https://www.harness.io/blog/10-exception-types-in-production-java-applications";
const PLAYBOOK_URL = "https://sg4.tech/blog/code-entropy-ci-checks-ai-legacy/playbook.md";
const MILLER_HREF = "https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two";

export function ArticleLede(): ReactNode {
  return (
    <>
      A lei de que a complexidade do código cresce sozinha continua valendo com a IA; ela só ficou
      mais rápida. Aqui estão sete níveis de verificações de CI que impedem o legado de se acumular,
      na ordem em que eu os adiciono.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <>
      <p>
        A entropia cresce sozinha. Na física, essa é a segunda lei da termodinâmica. No
        desenvolvimento de software é parecido: a bagunça se acumula com facilidade, e a ordem exige
        esforço.
      </p>
      <p>
        Sempre foi assim. Conforme o projeto cresce, cresce também a complexidade: o legado se
        acumula, o projeto fica mais difícil de manter, cada mudança pesa mais, e o risco de quebrar
        algo só aumenta. Em 1974, Manny Lehman registrou isso como{" "}
        <a href={LEHMAN_HREF} target="_blank" rel="noreferrer">
          uma lei da evolução de software
        </a>
        : a complexidade de um sistema aumenta, a menos que se trabalhe para reduzi-la. A IA não
        mudou isso. Só fez o legado se acumular mais rápido.
      </p>
      <p>
        O ideal é manter o código o mais simples possível, e é aqui que as verificações de CI ajudam.
      </p>
    </>
  );
}

// The seven levels as a staircase: listed bottom-up in source order (cheapest
// first) and drawn with the cheapest step at the bottom. Level 7 is the only
// non-deterministic one, so it gets a dashed outline and a different tag.
const ladderSteps = [
  { level: 1, name: "Código morto" },
  { level: 2, name: "Linters e formatadores" },
  { level: 3, name: "Análise estática" },
  { level: 4, name: "Testes unitários e cobertura" },
  { level: 5, name: "Complexidade e duplicação" },
  { level: 6, name: "Arquitetura e acoplamento" },
  { level: 7, name: "Regras escritas (AGENTS.md)" }
] as const;

const SOFT_LEVEL = 7;

export function LevelLadder(): ReactNode {
  return (
    <figure className={styles.ladderFigure}>
      <ol className={styles.ladder}>
        {ladderSteps.map((step) => {
          const isSoft = step.level === SOFT_LEVEL;
          return (
            <li
              key={step.level}
              className={isSoft ? `${styles.ladderStep} ${styles.ladderStepSoft}` : styles.ladderStep}
              style={{ marginLeft: `calc(${step.level - 1} * var(--step-shift))` }}
            >
              <span className={styles.ladderNumber}>{step.level}</span>
              <span className={styles.ladderName}>{step.name}</span>
              <span className={styles.ladderTag}>{isSoft ? "o CI não garante" : "quebra o build"}</span>
            </li>
          );
        })}
      </ol>
      <FigureCaption>
        As verificações mais baratas ficam embaixo. Os níveis 1–6 quebram o build toda vez; as regras
        escritas, no topo, orientam o agente, mas não conseguem detê-lo.
      </FigureCaption>
    </figure>
  );
}

export function SectionCheapLevels(): ReactNode {
  return (
    <>
      <h2 id="dead-code">1. Código morto</h2>
      <p>
        O passo mais simples é apagar o que não é mais usado. Isso também dá para automatizar: coloque
        um detector de código morto no CI (vulture para Python, knip para JS/TS), e o código sem uso
        simplesmente quebra o build.
      </p>
      <h2 id="linters">2. Linters e formatadores</h2>
      <p>
        Depois vem o linter: phpcs para PHP, ruff para Python, ESLint e Prettier para JS/TS, e assim
        por diante. Cada linguagem tem seu estilo de código, e qual você escolhe pouco importa. O que
        importa é parar de gastar tempo e dinheiro lendo código e escrevendo comentários de revisão
        como &ldquo;troque aspas duplas por simples&rdquo;. Combine o estilo uma vez, e a partir daí o
        CI verifica sozinho.
      </p>
      <h2 id="static-analysis">3. Análise estática</h2>
      <p>
        O nível seguinte são os analisadores estáticos: PHPStan para PHP, mypy para Python, tsc para
        JS/TS. A checagem estrita de tipos pega erros simples: uma string passada onde se esperava um
        número, ou esquecer que um valor pode vir vazio. Ela deixa a lógica por sua conta e elimina
        uma classe inteira de erros. Valores vazios são o caso clássico: Tony Hoare, que inventou a
        referência nula, chamou-a de seu{" "}
        <a href={HOARE_HREF} target="_blank" rel="noreferrer">
          &ldquo;erro de um bilhão de dólares&rdquo;
        </a>
        , e, segundo{" "}
        <a href={HARNESS_HREF} target="_blank" rel="noreferrer">
          dados de 2020 da Harness
        </a>
        , o NullPointerException ainda estava entre as 10 exceções mais comuns em 70% dos ambientes
        Java de produção analisados.
      </p>
      <h2 id="unit-tests">4. Testes unitários e 80% de cobertura</h2>
      <p>
        Por quê? Porque código ruim é muito difícil de testar com testes unitários. Para que o código
        possa ser coberto por eles, é preciso dividi-lo em classes e funções separadas, pensar em
        acoplamento e interfaces, decidir o que fica público e o que fica privado, usar injeção de
        dependência e evitar estado global. Claro que isso não é garantia de 100%, até porque a IA
        infla a cobertura com facilidade, com testes que não verificam quase nada. Mas, de um jeito ou
        de outro, a meta impõe restrições ao design e aumenta as chances de um bom código.
      </p>
    </>
  );
}

export function SectionComplexity(): ReactNode {
  return (
    <>
      <h2 id="complexity">5. Complexidade e duplicação</h2>
      <p>
        A memória de trabalho humana guarda só alguns itens independentes por vez: George Miller{" "}
        <a href={MILLER_HREF} target="_blank" rel="noreferrer">
          contou 7 ± 2
        </a>{" "}
        em 1956, e Nelson Cowan refinou para cerca de quatro em 2001. O que passa disso fica difícil e
        vai para o swap. Não vi pesquisas sobre isso para a IA, mas, se o código é compreensível para
        uma pessoa, aumentam as chances de a IA não alucinar. E, se o código é tão emaranhado que uma
        pessoa não consegue acompanhá-lo, o mais provável é que a IA empilhe novas camadas de legado
        por cima.
      </p>
      <p>
        Por isso eu defino limites rígidos para as métricas de duplicação e de complexidade. Limite
        ultrapassado → o CI falha → é preciso refatorar e extrair código para métodos e classes
        separados. Para Python, um exemplo é o complexipy.
      </p>
      <p>
        Veja como isso fica num projeto real. Numa plataforma em que trabalhei, agentes de IA
        escreveram a maior parte do backend. Seis semanas depois, antes de qualquer uma dessas
        verificações existir, a primeira medição encontrou 143 funções com complexidade acima de 10 e
        202 trechos copiados e colados, cerca de 5% do código. Mais tarde, quando entrou um teto
        rígido, a pior função processava recibos, ou seja, mexia com dinheiro: 490 linhas com
        complexidade 73. Assim que esse teto passou a quebrar o build, ela caiu de 73 para 30 em
        quatro dias de refatoração, uma função por commit. Nos dois meses seguintes à primeira
        medição, a duplicação caiu para cerca de 3%.
      </p>
      <p>
        Se o legado já se acumulou, dá para começar de onde você está: defina o limite na sua função
        mais complexa, e pelo menos nada vai piorar. A dívida, porém, continua lá e é paga
        à parte: reserve tempo para refatorar e baixe o limite depois de cada passo, para consolidar o
        resultado. As verificações só impedem que a bagunça cresça; a limpeza fica por sua conta.
      </p>
    </>
  );
}

export function SectionArchitectureAndRules(): ReactNode {
  return (
    <>
      <h2 id="architecture">6. Arquitetura e acoplamento</h2>
      <p>
        Limites rígidos também reduzem a complexidade, um nível acima. É como o encapsulamento em
        OOP: o sistema é feito de blocos grandes cujo interior você não precisa guardar na cabeça;
        basta conhecer o contrato deles. E a implementação de um bloco pode ser trocada quando
        necessário, sem reescrever o resto do sistema. Em vez de dezenas de classes e conexões, você
        raciocina sobre alguns blocos grandes. De novo, você reduz o número de coisas que precisa
        manter na cabeça ao mesmo tempo, agora em todos os níveis da arquitetura.
      </p>
      <p>
        Na prática, isso significa Clean Architecture e Arquitetura Hexagonal: o código é dividido em
        camadas, e as dependências entre elas são estritamente limitadas. O domínio não sabe nada
        sobre o banco de dados, o HTTP ou as APIs externas, e o código de fora chega até ele por
        interfaces predefinidas. Isso também é verificado automaticamente (com o import-linter para
        Python, por exemplo): apareceu um import proibido, o CI falha.
      </p>
      <h2 id="written-rules">7. Regras escritas</h2>
      <p>
        O último nível são as regras escritas. Antes eram guias e documentação para desenvolvedores;
        hoje são um arquivo AGENTS.md e a documentação para a IA. Diferente das verificações acima,
        aqui o resultado não é determinístico: a IA pode ler uma regra e mesmo assim quebrá-la. Por
        isso, as regras escritas são a última milha. Elas guardam só o que não deu para cobrir com
        verificações. Em igualdade de condições, troque o texto por uma verificação rígida no código.
      </p>
      <p>
        A IA vive tentando desligar a verificação em vez de corrigir o código: subir o limite,
        adicionar uma exceção, silenciar a regra com um comentário. Por isso o meu arquivo de regras
        diz isso numa linha separada: enfraquecer uma verificação para ela passar é gambiarra.
      </p>
    </>
  );
}

type ToolRow = {
  level: string;
  python: string;
  php: string;
  js: string;
};

const toolRows: ReadonlyArray<ToolRow> = [
  { level: "Código morto", python: "vulture", php: "shipmonk/dead-code-detector (PHPStan)", js: "knip" },
  { level: "Linters e formatadores", python: "ruff", php: "PHP_CodeSniffer (phpcs)", js: "ESLint + Prettier" },
  { level: "Análise estática", python: "mypy (strict)", php: "PHPStan", js: "tsc (strict)" },
  { level: "Testes unitários e cobertura", python: "pytest + coverage", php: "PHPUnit", js: "Jest / Vitest" },
  {
    level: "Complexidade",
    python: "complexipy",
    php: "PHPMD, cognitive-complexity (PHPStan)",
    js: "ESLint complexity"
  },
  { level: "Duplicação", python: "pylint duplicate-code", php: "jscpd", js: "jscpd" },
  { level: "Arquitetura e acoplamento", python: "import-linter", php: "Deptrac", js: "dependency-cruiser" }
];

export function SectionToolTable(): ReactNode {
  return (
    <>
      <h2 id="tools">As ferramentas, por linguagem</h2>
      <table className={styles.toolTable}>
        <caption className={styles.tableCaption}>
          Veja o que eu uso em cada nível; as ferramentas específicas importam menos do que cada nível
          quebrar o build.
        </caption>
        <thead>
          <tr>
            <th scope="col">Nível</th>
            <th scope="col">Python</th>
            <th scope="col">PHP</th>
            <th scope="col">JS/TS</th>
          </tr>
        </thead>
        <tbody>
          {toolRows.map((row) => (
            <tr key={row.level}>
              <th scope="row">{row.level}</th>
              <td data-label="Python">{row.python}</td>
              <td data-label="PHP">{row.php}</td>
              <td data-label="JS/TS">{row.js}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Existe também uma versão passo a passo deste texto, escrita para agentes de código: o{" "}
        <a href={PLAYBOOK_URL}>playbook de verificações de CI</a> (em inglês). Para aplicá-lo a um
        repositório, diga ao seu agente: <em>Aplique {PLAYBOOK_URL} a este repositório.</em>
      </p>
    </>
  );
}

export function SectionBottomLine(): ReactNode {
  return (
    <>
      <h2 id="bottom-line">Resumindo</h2>
      <p>
        A entropia vai crescer de qualquer jeito; a única questão é quem a segura. Quanto mais regras
        saem dos guias escritos e viram verificações automáticas de CI, menos tudo depende da atenção
        de uma pessoa na revisão. A IA roda as verificações sozinha, vê o que falhou e corrige: ela
        pode pular uma linha do AGENTS.md, mas não consegue pular um CI que falhou. E quanto mais
        dessas verificações você tem, com mais tranquilidade pode entregar o código a ela.
      </p>
      <p>
        Se você é fundador e não lê código, esta lista ainda serve como um roteiro de perguntas para a
        sua equipe: quais desses níveis de fato quebram o build? Cada resposta do tipo &ldquo;isso a
        gente pega na revisão&rdquo; é uma regra que depende da atenção de alguém num dia qualquer. Por
        que o código escrito por agentes precisa dessas proteções é outra história:{" "}
        <Link href={VIBECODED_HREF}>gerenciar a IA como um júnior</Link>.
      </p>
    </>
  );
}

export function SectionTemplate(): ReactNode {
  return (
    <>
      <h2 id="python-template">Um template para Python</h2>
      <p>
        A abordagem vale para qualquer linguagem. Para Python, juntei tudo isso num template pronto;
        fique à vontade para usar:{" "}
        <a href={TEMPLATE_HREF} target="_blank" rel="noreferrer">
          python-guardrails-template
        </a>
        .
      </p>
      <p>Dentro dele:</p>
      <ul>
        <li>
          todas as verificações deste texto atrás de um único comando <code>make verify</code> no
          Docker, e o mesmo comando no GitHub Actions;
        </li>
        <li>camadas de arquitetura com verificação de imports;</li>
        <li>um scanner de segredos que roda a cada commit;</li>
        <li>um AGENTS.md em que quase toda regra aponta para a verificação que a garante;</li>
        <li>um pequeno exemplo, para que as verificações passem logo depois de criar o projeto.</li>
      </ul>
      <p>Um projeto novo é criado com um comando:</p>
      <pre>
        <code>copier copy gh:sg4tech/python-guardrails-template my-project</code>
      </pre>
      <p>
        E, quando o template é atualizado, <code>copier update</code> leva as novas verificações para
        os projetos existentes e preserva as suas mudanças. Chega de configurar tudo do zero a cada
        projeto novo.
      </p>
    </>
  );
}
