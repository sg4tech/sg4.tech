// Article body sections, extracted from page.tsx to satisfy ESLint
// max-lines-per-function (80) and keep each section a focused editorial unit.
// CTA + Related asides live in article-tail.tsx.
//
// Section order builds an argument: average misleads → median → the gap is the
// diagnosis → pick the date from a percentile → predictability is the product.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../../../../views/posts/forecast-delivery-with-percentiles.module.css";
import { FigureCaption } from "../../../../components/FigureCaption";
import { getPostPathInLocale } from "../../../../lib/blog/posts";

const PILLAR_HREF = getPostPathInLocale("diagnose-broken-engineering-delivery", "pt-br");

export function ArticleLede(): ReactNode {
  return (
    <>
      A maioria das equipes prevê as entregas pela média. É justamente o número com mais chance de
      distorcer o sistema, e cada vez que você o promete e erra, gasta uma confiança que não
      precisava gastar. Veja o que prometer no lugar dele.
    </>
  );
}

export function IntroSection(): ReactNode {
  return (
    <p>
      Assim que uma equipe começa a medir as entregas, com as{" "}
      <Link href={PILLAR_HREF}>métricas que mostram onde elas realmente travam</Link>, a pergunta
      seguinte dos fundadores é sempre a mesma: com todos esses dados, quando podemos prometer alguma
      coisa? Quase todo mundo responde com uma média. É o pior número disponível para isso.
    </p>
  );
}

export function SectionAverageComfort(): ReactNode {
  return (
    <>
      <h2 id="average">1. A média tranquiliza, e é só isso que ela faz</h2>
      <p>
        Gestores recorrem à média porque ela resume uma realidade bagunçada num único número, que dá
        para dizer em voz alta na daily. Esse conforto é exatamente o problema.
      </p>
      <p>Pegue um mês de trabalho concluído:</p>
      <div className={styles.numericExample}>
        <p>9 tarefas concluídas em ~1 dia cada</p>
        <p>1 tarefa se arrastou por um mês</p>
        <p>→ lead time médio ≈ 4 dias</p>
      </div>
      <p>
        Nenhuma tarefa desse sistema leva de fato quatro dias. A maioria leva um; uma única
        retardatária puxa a média para cima. Dá para se afogar atravessando um rio que tem um metro de
        profundidade <em>em média</em>.
      </p>
      <p className={styles.pullquote}>O lead time médio descreve um sistema que você não tem.</p>
    </>
  );
}

export function SectionMedianTypical(): ReactNode {
  return (
    <>
      <h2 id="median">2. A mediana é a tarefa típica</h2>
      <p>
        A mediana é a tarefa do meio: metade termina mais rápido, metade mais devagar. Aqui ela fica
        em torno de um dia, e esse único número já mostra que a maior parte do trabalho flui rápido.
      </p>
      <p>
        Isso muda a reclamação de figura. Quando alguém pergunta &ldquo;nossa média é de quatro dias,
        por que somos tão lentos?&rdquo;, a média está escondendo o formato real: noventa por cento do
        trabalho vai bem, e algumas tarefas ficaram encalhadas. Nas vezes em que abri um control chart
        com uma equipe, a distância entre média e mediana costumava contar a história inteira: a
        maioria dos tickets saindo em um ou dois dias, um ou dois enterrados por semanas numa fila de
        revisão que ninguém acompanhava. O sistema anda bem; o que existe é meia dúzia de tarefas presas.
      </p>
    </>
  );
}

// Right-skewed lead-time distribution. One bar per day (day 0–25); heights
// fall off into a long tail. Mean sits visibly right of the median — the
// whole point of section 3.
const DIST_HEIGHTS = [
  12, 150, 120, 70, 42, 30, 22, 16, 12, 10, 8, 7, 6, 5, 5, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1, 1
];
const DIST_TICKS = [0, 5, 10, 15, 20, 25];

function DistributionChart(): ReactNode {
  return (
    <figure className={styles.distChart}>
      <svg
        viewBox="0 0 600 244"
        role="img"
        aria-label="Uma distribuição de lead time assimétrica à direita: a maioria das tarefas termina em um a três dias, com uma cauda longa de tarefas lentas. A mediana fica em cerca de dois dias, dentro das barras altas; a média é puxada para a direita, até cerca de cinco dias, onde poucas tarefas caem."
      >
        <line className={styles.dcAxis} x1="50" y1="40" x2="50" y2="200" />
        <line className={styles.dcAxis} x1="50" y1="200" x2="570" y2="200" />
        {DIST_HEIGHTS.map((h, d) => (
          <rect key={d} className={styles.dcBar} x={50 + d * 20} y={200 - h} width="18" height={h} />
        ))}
        <line className={styles.dcMedian} x1="90" y1="200" x2="90" y2="44" />
        <text className={styles.dcMedianLabel} x="86" y="36" textAnchor="end">
          Mediana ~2d
        </text>
        <line className={styles.dcMean} x1="150" y1="200" x2="150" y2="44" />
        <text className={styles.dcMeanLabel} x="154" y="36" textAnchor="start">
          Média ~5d
        </text>
        {DIST_TICKS.map((t) => (
          <text key={t} className={styles.dcTick} x={50 + t * 20} y="216" textAnchor="middle">
            {t}
          </text>
        ))}
        <text className={styles.dcAxisLabel} x="310" y="236" textAnchor="middle">
          lead time (dias)
        </text>
      </svg>
      <FigureCaption>
        Distribuição do lead time: a maior parte do trabalho sai em um ou dois dias (as barras altas),
        mas uma cauda longa de tarefas presas arrasta a média para onde quase nada de fato cai.
      </FigureCaption>
    </figure>
  );
}

export function SectionGapDiagnosis(): ReactNode {
  return (
    <>
      <h2 id="gap">3. A distância entre média e mediana é o diagnóstico</h2>
      <p>
        Então a leitura mais útil de todo o exercício não custa nada: coloque a média e a mediana lado
        a lado.
      </p>
      <DistributionChart />
      <table className={styles.diagnosticTable}>
        <thead>
          <tr>
            <th>O que você vê</th>
            <th>O que significa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Média bem acima da mediana</th>
            <td>
              Dispersão larga. O trabalho anda de forma desigual: algumas tarefas voam, outras ficam
              paradas em filas, revisões, aprovações. A distância é o tamanho da fila.
            </td>
          </tr>
          <tr>
            <th>Média ≈ mediana</th>
            <td>Dispersão estreita. O trabalho anda num ritmo constante. O sistema é estável e previsível.</td>
          </tr>
        </tbody>
      </table>
      <p>
        A própria distância é o sinal. Uma distância grande significa uma cauda longa: bloqueios,
        passagens de bastão, coisas esperando por uma pessoa. Resolva isso, e a média volta para perto
        da mediana. Dá para ver de relance, sem cronometrar ninguém.
      </p>
    </>
  );
}

function PercentileTable(): ReactNode {
  return (
    <table className={styles.diagnosticTable}>
      <thead>
        <tr>
          <th>Percentil</th>
          <th>Lead time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>P50 (mediana)</th>
          <td>2 dias</td>
        </tr>
        <tr>
          <th>P85</th>
          <td>6 dias</td>
        </tr>
        <tr>
          <th>P95</th>
          <td>11 dias</td>
        </tr>
      </tbody>
    </table>
  );
}

export function SectionPickPercentile(): ReactNode {
  return (
    <>
      <h2 id="percentile">4. Escolha a data por um percentil</h2>
      <p>
        Os stakeholders fazem uma pergunta só: quando fica pronto? E querem uma data, sem aula de
        estatística. Justo. Então dê uma data a eles. Só pare de escolhê-la pelo número errado.
      </p>
      <p>
        Uma estimativa pontual tirada da média é uma promessa que a dispersão não vai deixar você
        cumprir. Diga &ldquo;uns quatro dias&rdquo;, erre, e você gastou confiança; depois repete tudo
        no sprint seguinte. O percentil define de qual número você tira a data: é o valor dentro do
        qual uma parcela das tarefas termina. Pegue uma distribuição real, menos extrema que o exemplo
        acima, mas com o mesmo formato, e ela fica mais ou menos assim:
      </p>
      <PercentileTable />
      <p>
        Agora a escolha é concreta. Trabalho de rotina? Comprometa-se com o{" "}
        <strong>P85: &ldquo;até o sexto dia&rdquo;.</strong> Algo que trava um cliente ou outra equipe,
        em que errar sai caro? Prometa o <strong>P95: &ldquo;até o décimo primeiro dia&rdquo;.</strong>{" "}
        Os mesmos dados, promessas diferentes, e você cumpre as duas.
      </p>
      <p>
        Essa é a versão honesta de uma data, com a incerteza já embutida. Você se compromete com uma
        data que vai cumprir 95 vezes em 100 (ou 85, se foi essa a linha escolhida), em vez de um
        chute que a dispersão do sistema ia derrubar de qualquer jeito. Se alguém quiser o nível de
        confiança, informe; a maioria só quer a data.
      </p>
      <p className={styles.pullquote}>
        O percentil fica com você: ele serve para escolher a data que você diz ao stakeholder.
      </p>
      <p>
        Para uma tarefa já em andamento, preveja o tempo que <em>falta</em>, considerando há quanto
        tempo ela já está rodando, contra a mesma distribuição. E na primeira vez que você dá uma data
        a alguém e cumpre, sua equipe deixa de ser a que &ldquo;sempre atrasa&rdquo; e passa a ser a
        &ldquo;previsível&rdquo;, uma reputação que vale mais do que um ou outro ticket rápido.
      </p>
    </>
  );
}

export function SectionPredictability(): ReactNode {
  return (
    <>
      <h2 id="predictability">5. A previsibilidade é o produto</h2>
      <p>
        Porque o que o negócio de fato compra é previsibilidade, mais do que velocidade bruta. Vendas
        assume compromissos com clientes com base nas suas datas, o marketing agenda lançamentos com
        base nelas, o suporte se organiza em função delas. Uma equipe que termina com segurança até
        sexta ganha de uma que às vezes termina na terça e às vezes em três semanas, porque todo mundo
        depois dela consegue planejar.
      </p>
      <p>
        E uma dispersão estreita vem de controlar o trabalho em andamento: WIP
        alto gera filas longas, filas longas criam a cauda longa, e é a cauda que empurra a média para
        cima da mediana. Por isso, <Link href={PILLAR_HREF}>controlar o WIP</Link> estreita a
        distribuição por si só. Nada disso exige uma ferramenta nova; o Control Chart do Jira mostra
        média, mediana e percentis a partir dos dados que você já tem.
      </p>
      <p>
        A maioria das equipes prevê pela média e depois se pergunta por que as datas sempre
        escorregam. A solução é ler a distribuição que você já tem: a mediana para o caso típico, a
        distância para a saúde do sistema e um percentil para a data com que você se compromete.
      </p>
    </>
  );
}
