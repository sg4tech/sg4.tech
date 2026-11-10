import type { OgCardContent } from "../../../_og/render";
import type { AiVibecodingContent } from "../../../views/ai-vibecoding/ai-vibecoding-content";

const description =
  "Seu MVP feito com vibecoding precisa de um sistema em volta do código. Monto verificações, testes, CI/CD e a arquitetura que a IA não constrói.";

export const aiVibecodingContent: AiVibecodingContent = {
  meta: {
    title: "MVP de vibecoding de volta aos trilhos",
    description,
    socialTitle: "Do MVP feito com vibecoding a um negócio que funciona",
    socialDescription: description
  },
  service: {
    name: "MVP de vibecoding de volta aos trilhos",
    serviceType: "Desenvolvimento para MVPs construídos com IA",
    description:
      "Desenvolvimento para fundadores cujo MVP feito com vibecoding parou de sair em produção. Monto o processo de desenvolvimento que esse código nunca teve."
  },
  hero: {
    eyebrow: "MVP feito com vibecoding → negócio que funciona",
    headlineLeadIn: "Seu MVP feito com vibecoding ",
    headline: "precisa de um sistema em volta do código.",
    statement:
      "Trocar de ferramenta de IA e fazer sprints de refatoração não resolve. É preciso o sistema de desenvolvimento que a IA não constrói.",
    promise: "Encontro o que falta, construo e deixo um sistema que funciona sem mim.",
    outcome: "Para você lançar coisas novas sem medo de quebrar o que já funciona.",
    habrSignal: { label: "Escrevi sobre isso no Habr em 2023", href: "https://habr.com/ru/articles/719352/" },
    statsAriaLabel: "Principais resultados",
    metrics: [
      { id: "experience", figure: "15+", label: "anos de engenharia" },
      { id: "rps", figure: "4K+", label: "RPS em sistemas de produção" },
      { id: "teams", figure: "14+", label: "equipes com entregas aceleradas" }
    ],
    primaryCta: {
      label: "Descreva sua situação no Telegram",
      href: "https://t.me/sg4tech?start=site_ptbr_ai_vibecoding_hero"
    },
    secondaryCtaLabel: "Como funciona",
    transformation: {
      withoutSystem: {
        title: "IA sem sistema",
        subtitle: "O código fica pronto. Aí começa o caos.",
        generate: "A IA gera o código",
        patch: "Corrigimos um bug",
        breakFeature: "Uma funcionalidade quebra",
        patchAgain: "Corrigimos de novo",
        regressions: "Mais regressões",
        incident: "Pane em produção às 3 da manhã",
        footer: "Imprevisível. Caro. Estressante."
      },
      withSystem: {
        title: "IA dentro do sistema",
        subtitle: "A IA é rápida. O sistema dá segurança.",
        generate: "A IA gera o código",
        guardrails: "Verificações automáticas",
        tests: "Testes",
        cicd: "CI/CD",
        safeReleases: "Releases seguros",
        footer: "Previsível. Escalável. Sustentável."
      },
      caption: "A mesma IA. Outro sistema em volta dela."
    }
  },
  problem: {
    title: "As rachaduras de um MVP feito com vibecoding aparecem sempre do mesmo jeito.",
    points: [
      {
        id: "breaks",
        text: "Você adiciona uma funcionalidade e outras três quebram sem ninguém perceber. Os dois dias seguintes vão embora tentando descobrir quais."
      },
      {
        id: "unknown",
        text: "Há partes do código que ninguém entende por completo, nem você. Mexer nelas é roleta-russa."
      },
      {
        id: "loops",
        text: "A IA reescreve o mesmo código de jeitos diferentes, uma vez após a outra. Cada correção desfaz a anterior, e você paga tokens para andar em círculos."
      },
      {
        id: "prod",
        text: "Na demo tudo funciona. Um usuário real digita algo estranho, e a produção cai às 3 da manhã. Você olha o código sem fazer ideia de como ele funciona."
      }
    ],
    callout: "Todos esses problemas têm a mesma causa: a IA escreve o código, mas não constrói o sistema em volta dele."
  },
  guardrails: {
    title: "As cinco camadas de sistema que a IA não entrega",
    intro:
      "Cinco camadas separadas, e cada uma garante algo que a IA não garante. Juntas, elas formam o sistema que mantém o produto saindo em produção.",
    productionLabel: "Produção",
    agentsLabel: "Agentes de IA",
    layers: [
      {
        id: "architecture",
        label: "Regras de arquitetura",
        text: "Uma arquitetura que se sustenta sozinha. Limites entre módulos, dependências e contratos ficam registrados de um jeito que os agentes de IA não conseguem contornar."
      },
      {
        id: "pipeline",
        label: "Verificações no pipeline",
        text: "Etapas de CI/CD que barram releases ruins. Monitoramento que detecta problemas antes dos clientes e antes das 3 da manhã."
      },
      {
        id: "tests",
        label: "Testes",
        text: "Testes automatizados que não confiam na próxima geração de código. Unitários, de integração e de regressão, para que uma funcionalidade nova não quebre outras três em silêncio."
      },
      {
        id: "code",
        label: "Verificações de código",
        text: "Linters, checagem de tipos, análise estática e varreduras de segurança. A base que a maioria dos MVPs feitos com vibecoding pula. Sem ela, cada correção quebra dez outras coisas."
      },
      {
        id: "aiWorkflow",
        label: "Regras para a IA",
        text: "Os trilhos que faltavam à IA: regras para os agentes, disciplina de contexto e autoverificações, para que a IA não desfaça a correção da semana passada enquanto cria a funcionalidade de hoje."
      }
    ]
  },
  trust: {
    intro:
      "Sua IA fica; eu construo o sistema em volta dela. Faz anos que organizo códigos de startups escritos às pressas, e os problemas lá eram os mesmos. A origem muda, a solução é a mesma.",
    points: [
      {
        id: "experience-stack",
        text: "Mais de 15 anos com PHP, Python, Java, TypeScript, Node, C++, C#, iOS, Android (e sim, uma vez com Flash). Os problemas de código que travam as entregas não dependem da stack. A IA só fez com que eles aparecessem mais rápido."
      },
      {
        id: "track-record",
        text: "Resolvi esse problema na Wowworks, onde levei um código de startup até uma produção pronta para a expansão na UE, e numa empresa de EdTech em crescimento. Essa abordagem é mais antiga que a IA.",
        outcomes: [
          { company: "Wowworks", chips: ["bugs ↓10×", "entregas ↑3×", "eficiência ↑4×"] },
          { company: "EdTech", chips: ["entregas ↑2×", "tempo fora do ar ↓10×", "eNPS −100→100"] }
        ]
      },
      {
        id: "habr",
        text: (
          <>
            Escrevi exatamente sobre isso no{" "}
            <a href="https://habr.com/ru/articles/719352/" target="_blank" rel="noreferrer">
              Habr
            </a>{" "}
            em 2023, antes de a IA acelerar tudo.
          </>
        )
      },
      {
        id: "hands-on",
        text: "Eu mesmo faço o trabalho: arquitetura, verificações automáticas, ajuste do fluxo com IA, refatoração."
      }
    ]
  },
  process: {
    title: "Como eu trabalho",
    intro:
      "Sem soluções decididas de antemão. Primeiro vemos o que está realmente quebrado. Depois deixamos as mudanças seguras para ir à produção. Depois construímos um sistema que aguenta o crescimento.",
    outputLabel: "Resultado:",
    steps: [
      {
        title: "Auditoria",
        duration: "1–2 semanas",
        points: [
          "Analiso o código, o fluxo de desenvolvimento e como a equipe usa a IA",
          "Encontro o que atrapalha, o que funciona e o que falta",
          "Decido o que corrigir primeiro pelo impacto no negócio"
        ],
        output: "Uma visão clara e um plano de correções por prioridade"
      },
      {
        title: "Proteção contra falhas",
        duration: "2–8 semanas",
        points: [
          "Configuro a base do desenvolvimento: git, CI/CD, monitoramento, logs",
          "Adiciono as cinco camadas de proteção, incluindo as regras para a IA",
          "Corrijo os bugs críticos que elas revelam"
        ],
        output: "Código seguro para ir à produção, bugs críticos corrigidos, IA trabalhando dentro das verificações"
      },
      {
        title: "Escala",
        duration: "Nos meses seguintes",
        points: [
          "Defino a arquitetura-alvo e levo o código até ela com segurança",
          "Ajusto o sistema ao seu perfil real de carga",
          "Contrato especialistas pontuais só se o crescimento exigir"
        ],
        output: "Um código que dá para evoluir, e uma equipe que cresce sem quebrá-lo de novo"
      }
    ],
    note: "O objetivo: menos caos, releases previsíveis e confiança para seguir em frente.",
    expectations: {
      title: "O que esperar",
      points: [
        "As primeiras melhorias em CI/CD e monitoramento aparecem em 2–4 semanas",
        "Os bugs críticos costumam ser corrigidos no primeiro mês",
        "Colocar a arquitetura em ordem leva alguns meses; quanto exatamente, depende do código de partida e da equipe"
      ]
    }
  },
  whoNotFor: {
    title: "Quando eu não sou a escolha certa",
    items: [
      "Seu principal gargalo é marketing e vendas. Para isso, você precisa de um especialista em levar o produto ao mercado.",
      "Você ainda não tem um MVP funcionando. Primeiro é preciso construí-lo, depois consertar.",
      "Você procura ajuda gratuita ou dicas para fazer tudo por conta própria."
    ]
  },
  featuredEssay: {
    label: "Artigo relacionado",
    slug: "vibecoded-mvp-stopped-shipping"
  },
  faq: [
    {
      question: "Vou ter que parar de usar minhas ferramentas de IA?",
      answer:
        "Não. Eu também faço vibecoding: trabalho com Claude Code, Codex e a IDE da JetBrains. Não estou preso a nenhuma stack, então serve o que a sua equipe já usa. Eu construo o sistema em volta do seu trabalho com IA."
    },
    {
      question: "Quanto custa?",
      answer:
        "Pagamento mensal, normalmente de 2 a 4 meses de trabalho. O preço exato depende do escopo; combinamos na conversa."
    },
    {
      question: "Vou ter que contratar um monte de desenvolvedores caros?",
      answer:
        "Não necessariamente. Primeiro tiramos mais proveito da IA que você já usa: ajustamos as regras, as verificações automáticas e a arquitetura em volta dela. Se depois o crescimento pedir uma expertise específica, trazemos especialistas pontuais. Contratar fica para o fim da fila."
    },
    {
      question: "Você trabalha junto com nosso desenvolvedor ou CTO?",
      answer:
        "Sim. O sistema que eu construo ajuda a equipe que você já tem a entregar mais rápido. Seu CTO ou desenvolvedor continua no projeto, e decidimos juntos o que implementar."
    },
    {
      question: "Já trocamos de ferramenta de IA, fizemos refatoração e contratamos um sênior. O que muda com você?",
      answer:
        "Uma ferramenta nova não acrescenta o que falta, então os mesmos problemas voltam. Refatorar sem testes gera bugs novos. Um sênior também precisa de um sistema em volta do código para mudá-lo com segurança. Eu construo esse sistema primeiro, e as regras dele são verificadas automaticamente."
    },
    {
      question: "O que exatamente você implementa?",
      answer:
        "Ferramentas padrão: Agents.md, linters (ESLint, PHPStan, mypy), checagem de tipos, scanners de segurança, frameworks de teste (Jest, Pytest, PHPUnit), GitHub Actions, Sentry ou DataDog. Nada exótico. O trabalho principal é conectar tudo isso para que os agentes de IA não consigam contornar as verificações no próximo pedido."
    },
    {
      question: "Os dados dos meus usuários estão em risco agora?",
      answer:
        "Pode ser. MVPs feitos com vibecoding costumam ter senhas e chaves direto no código, nenhuma validação de entrada e dependências que ninguém acompanha. A IA, sozinha, não deixa o código seguro. Segurança da computação foi a minha especialização na universidade, e para mim é um requisito básico. Na etapa “Proteção contra falhas”, encontro e corrijo esses problemas um a um."
    }
  ],
  finalCta: {
    heading: (
      <>
        Vamos consertar <em>de um jeito que se sustente.</em>
      </>
    ),
    text: "Conte o que está acontecendo com o projeto. Vemos rápido se eu sou a pessoa certa e por onde começar.",
    label: "Contar sobre o projeto",
    href: "https://t.me/sg4tech?start=site_ptbr_ai_vibecoding_final"
  }
};

export const aiVibecodingOgCard: OgCardContent = {
  alt: "Vibecoding com IA: do MVP feito com vibecoding a um negócio que funciona",
  eyebrow: "Vibecoding com IA",
  title: "Do MVP feito com vibecoding a um negócio que funciona",
  subtitle: "Verificações automáticas, testes, CI/CD e a arquitetura que a IA não constrói"
};
