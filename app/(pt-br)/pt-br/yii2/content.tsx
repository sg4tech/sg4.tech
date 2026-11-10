import type { OgCardContent } from "../../../_og/render";
import type { Yii2Content } from "../../../views/yii2/yii2-content";

export const yii2Content: Yii2Content = {
  meta: {
    title: "Desenvolvimento Yii2: entregas mais rápidas",
    description:
      "Seu projeto em Yii2 está travando o negócio. Encontro o que está quebrado no código e no processo, corrijo e deixo um sistema que entrega com previsibilidade.",
    socialTitle: "Desenvolvimento em Yii2: entregas mais rápidas e mais qualidade",
    socialDescription:
      "Ajudo empresas com projetos em Yii2 a ganhar qualidade, estabilidade e velocidade de entrega sem caos e sem apagar incêndio o tempo todo."
  },
  service: {
    name: "Desenvolvimento em Yii2",
    serviceType: "Desenvolvimento em Yii2",
    description:
      "Desenvolvimento para empresas com projetos em Yii2: entregas mais rápidas, mais estabilidade, menos bugs e desenvolvimento previsível com verificações automáticas, CI/CD, monitoramento e IA."
  },
  hero: {
    headlineLeadIn: "Seu projeto em Yii2 ",
    headline: "está travando o negócio.",
    action: "Encontro o que está realmente quebrado e conserto.",
    statement: "Quase sempre o que trava é o processo de desenvolvimento em volta do código.",
    promise: "Encontro a causa, resolvo e deixo um sistema que funciona sem mim.",
    primaryCta: { label: "Descreva sua situação no Telegram", href: "https://t.me/sg4tech?start=site_ptbr_yii2_hero" },
    secondaryCtaLabel: "Como eu trabalho",
    phpRussiaLabel: "Palestrante na PHP Russia",
    statsAriaLabel: "Principais resultados",
    metrics: [
      { id: "bugs", figure: "10×", label: "menos bugs e incidentes em produção" },
      { id: "downtime", figure: "5×", label: "menos tempo fora do ar, releases mais previsíveis" },
      { id: "delivery", figure: "2–3×", label: "entregas mais rápidas sem contratar mais gente" }
    ]
  },
  transformation: {
    title: "De releases no improviso a um desenvolvimento sob controle",
    intro: "Dá para conviver com código legado. O que trava o negócio são releases pouco confiáveis.",
    fireFighting: {
      title: "Modo apagar incêndio",
      manualChecks: "verificações manuais",
      hiddenQueue: "fila escondida",
      hotfixes: "correções urgentes"
    },
    deliverySystem: {
      title: "Modo desenvolvimento sob controle",
      guardrails: "verificações automáticas",
      cicd: "CI/CD",
      monitoring: "monitoramento",
      outcome: "releases previsíveis"
    },
    states: [
      { id: "before", value: "Antes", label: "releases arriscados e incêndios constantes" },
      { id: "after", value: "Depois", label: "releases protegidos por verificações, gargalos à vista" },
      { id: "goal", value: "Meta", label: "entregas rápidas sem caos" }
    ]
  },
  problem: {
    title: "Quando um projeto em Yii2 já tem anos, o problema raramente está só no código.",
    points: [
      { id: "slowdown", text: "Novas funcionalidades saem cada vez mais devagar." },
      { id: "risk", text: "A cada release, cresce o risco de bugs, regressões e incêndios apagados à mão." },
      {
        id: "legacy",
        text: "Código legado, verificações manuais e processos caóticos travam o negócio mais do que parece."
      },
      { id: "busy", text: "A equipe está ocupada, e mesmo assim a velocidade de entrega não satisfaz ninguém." }
    ],
    callout:
      "Se o desenvolvimento virou o gargalo, o código não é a única coisa quebrada. Todo o processo de entrega do produto está quebrando."
  },
  levers: {
    quality: {
      title: "Primeiro a qualidade: estabilidade, bugs e releases previsíveis.",
      intro:
        "Verificações automáticas, CI/CD, IA e monitoramento reduzem o risco de cada release antes que clientes ou o negócio percebam o problema.",
      points: [
        {
          id: "guardrails",
          text: "verificações automáticas no código e no processo, para que erros comuns não cheguem à produção"
        },
        { id: "cicd", text: "CI/CD que testa os cenários críticos antes de cada release" },
        { id: "monitoring", text: "monitoramento e alertas que avisam sobre falhas antes dos clientes" },
        {
          id: "automation",
          text: "IA e automação pontual para verificações de rotina, regressões e manutenção do legado"
        }
      ]
    },
    speed: {
      title: "Depois a velocidade. Só código não resolve.",
      intro:
        "Velocidade vem de pessoas, processos, métricas e agentes de IA. Sem eles, a equipe continua presa em urgências e incêndios.",
      points: [
        {
          id: "bottleneck",
          text: "Encontro onde o tempo realmente se perde: filas, aprovações manuais, dependências escondidas"
        },
        {
          id: "metrics",
          text: "Configuro métricas de entrega para que o gargalo apareça nos números e ninguém precise discutir"
        },
        { id: "alignment", text: "Alinho pessoas, processos e prioridades em torno de um único fluxo de trabalho" },
        { id: "agents", text: "Coloco agentes de IA onde eles eliminam trabalho manual e encurtam o ciclo" }
      ]
    }
  },
  trust: {
    intro:
      "Sou líder de engenharia e já consertei processos de desenvolvimento por dentro, em empresas reais, muitas vezes e com as próprias mãos.",
    points: [
      { id: "experience", text: "Mais de 15 anos em desenvolvimento de software." },
      {
        id: "fixes",
        text: "Muitas vezes organizei o desenvolvimento onde velocidade e qualidade estavam brigando entre si."
      },
      {
        id: "hands-on",
        text: "Trabalho tanto no código quanto no nível do sistema: arquitetura, processos, métricas, gestão."
      },
      {
        id: "track-record",
        text: "Experiência na Wowworks (plataforma B2B de facility management, expansão para a UE, US$ 3,6 milhões captados) e na Skyeng (plataforma de EdTech para estudantes, mais de 2 milhões de MAU, avaliada em mais de US$ 100 milhões)."
      }
    ]
  },
  process: {
    title: "Como eu trabalho",
    intro:
      "Sem mágica e sem soluções prontas de antemão. Primeiro deixamos o sistema transparente e seguro, depois aceleramos o desenvolvimento.",
    outputLabel: "Resultado:",
    steps: [
      {
        title: "Auditoria (1–2 semanas)",
        summary: "Descobrir o que realmente trava o desenvolvimento.",
        points: [
          "Analiso o código e como o deploy funciona",
          "Encontro os gargalos reais",
          "Avalio o risco dos releases, a qualidade e a cobertura de testes"
        ],
        output: "um plano claro e uma lista de ações por prioridade"
      },
      {
        title: "Base de qualidade",
        summary: "Reduzir o risco antes do próximo release.",
        points: [
          "Configuro CI/CD e verificações automáticas",
          "Implanto monitoramento e alertas",
          "Reduzo a chance de incidentes em produção"
        ],
        output: "releases estáveis e com menos risco"
      },
      {
        title: "Aceleração do desenvolvimento",
        summary: "Encurtar o caminho da tarefa até a produção.",
        points: [
          "Organizo o fluxo de trabalho da equipe",
          "Implanto métricas de entrega",
          "Uso IA onde ela traz ganho real"
        ],
        output: "entregas mais rápidas e previsíveis"
      }
    ],
    note: "O objetivo é um desenvolvimento que trabalha a favor do negócio, sem esforço heroico.",
    expectations: {
      title: "O que esperar",
      points: [
        "As primeiras melhorias em CI/CD e monitoramento aparecem em 2–4 semanas",
        "Uma aceleração clara do desenvolvimento costuma levar alguns meses",
        "O ritmo depende do tamanho da equipe e do volume de dívida técnica acumulada"
      ]
    }
  },
  proof: {
    title: "Materiais públicos",
    intro:
      "Com eles dá para entender rápido como eu penso e como trabalho com qualidade, velocidade, sistemas e IA no desenvolvimento.",
    talks: [
      {
        id: "event",
        label: "Palestra na PHP Russia",
        href: "https://phprussia.ru/2019/meetups#1457427",
        description:
          "Página oficial da palestra “Como usar Yii2 no Enterprise? Trazendo as melhores práticas do Symfony” no site da conferência"
      },
      {
        id: "recording",
        label: "Gravação no YouTube",
        href: "https://www.youtube.com/watch?v=lCMn52lMQks",
        description: "Gravação completa da palestra (em russo)"
      }
    ],
    channelsAriaLabel: "Onde eu escrevo"
  },
  faq: [
    {
      question: "Vamos precisar reescrever o projeto inteiro?",
      answer:
        "Não. A ideia é melhorar o projeto em Yii2 que já existe, sem uma reescrita cara e arriscada. Primeiro deixamos o sistema confiável e sob controle."
    },
    {
      question: "E se o projeto quase não tiver testes?",
      answer:
        "Para um projeto legado, esse é um ponto de partida comum e não impede o começo. Adicionamos testes onde o risco e o valor são maiores, sem parar as entregas por meses."
    },
    {
      question: "Em quanto tempo aparecem os resultados?",
      answer:
        "As melhorias em CI/CD e monitoramento costumam aparecer em 2–4 semanas. A aceleração do desenvolvimento depende da equipe e do volume de dívida técnica, mas as primeiras mudanças aparecem rápido."
    },
    {
      question: "Você mesmo faz o trabalho?",
      answer:
        "Sim. Eu mesmo mexo no código, configuro pipelines e verificações automáticas e trabalho com a sua equipe até as mudanças funcionarem de ponta a ponta."
    }
  ],
  finalCta: {
    heading: (
      <>
        Vamos direto ao ponto: <em>entender o que está quebrado e consertar.</em>
      </>
    ),
    text: "Conte o que mais incomoda hoje e qual resultado você quer. Respondo com uma análise curta e o que eu corrigiria primeiro.",
    label: "Contar o que está travando",
    href: "https://t.me/sg4tech?start=site_ptbr_yii2_final"
  }
};

export const yii2OgCard: OgCardContent = {
  alt: "Desenvolvimento em Yii2 — entregas mais rápidas, mais qualidade",
  eyebrow: "Desenvolvimento em Yii2",
  title: "Qualidade, previsibilidade, velocidade — sem reescrever",
  subtitle: "CI/CD, monitoramento, métricas de entrega, IA"
};
