import type { OgCardContent } from "../../_og/render";
import type { HomeContent } from "../../views/home/home-content";

const description =
  "Construo sistemas que entregam no prazo e funcionam com estabilidade em produção: escrevo o código, corrijo o que quebrou e lidero o desenvolvimento.";

export const homeContent: HomeContent = {
  meta: {
    title: "Engenharia de software e liderança técnica",
    description
  },
  service: {
    name: "Victor Demin — engenharia de software",
    serviceType: "Desenvolvimento de software e liderança técnica",
    description
  },
  hero: {
    eyebrow: "Engenharia de software e liderança técnica",
    headline: "Construo sistemas que funcionam.",
    phpRussiaLabel: "Palestrante na PHP Russia",
    lead: "O produto sai no prazo, roda com estabilidade em produção e não desmorona conforme cresce.",
    text: "Pensamento sistêmico, métricas de entrega e IA ajudam a fazer isso mais rápido e com menos caos.",
    primaryCta: { label: "Conversar sobre o projeto", href: "https://t.me/sg4tech?start=site_ptbr_hero" },
    secondaryCtaLabel: "Como eu trabalho",
    credibility: "Experiência em startups e empresas de produto em crescimento.",
    statsAriaLabel: "Principais resultados",
    metrics: [
      { id: "speed", figure: "2–3×", label: "entregas mais rápidas" },
      { id: "quality", note: "Até", figure: "10×", label: "menos bugs e quedas" },
      { id: "predictability", label: "Mais previsibilidade" }
    ]
  },
  problem: {
    title: "O produto vende. O desenvolvimento não acompanha.",
    stages: [
      {
        id: "early",
        title: "Primeiros clientes",
        points: [
          "O código do MVP é difícil de mudar",
          "Novas funcionalidades levam mais tempo do que o previsto",
          "Só uma ou duas pessoas entendem como tudo funciona"
        ],
        closing: "A demanda existe. O código ainda não está pronto para ela."
      },
      {
        id: "growth",
        title: "Crescimento",
        points: [
          "As funcionalidades demoram demais para sair",
          "Os prazos escorregam, mesmo com planejamento",
          "Cada release traz mais bugs"
        ],
        closing: "A equipe existe e está ocupada. Mesmo assim, entrega pouco."
      },
      {
        id: "scale",
        title: "Escala",
        points: [
          "Qualquer mudança mexe em partes demais do sistema",
          "A coordenação entre equipes trava o trabalho",
          "Quanto maior o sistema, mais arriscado cada release"
        ],
        closing: "A complexidade cresce mais rápido que o produto."
      }
    ],
    callout: [
      "Contratar mais gente raramente resolve.",
      "A solução está em como o software é construído e entregue. É exatamente isso que eu faço."
    ]
  },
  trust: {
    intro: "Escrevo o código, lidero o trabalho e fico no projeto até tudo rodar em produção.",
    points: [
      { id: "experience", text: "Mais de 15 anos em engenharia de software" },
      { id: "leadership", text: "Mais de 8 anos liderando equipes" },
      { id: "mvp", text: "Escrevi MVPs eu mesmo, da primeira linha ao lançamento" },
      { id: "scale", text: "Fiz equipes crescerem e acelerei as entregas" },
      { id: "writing", text: "Escrevo sobre métricas de engenharia, gargalos e trabalho com IA" }
    ]
  },
  results: {
    title: "Resultados",
    intro: "O que mudou nas empresas onde eu liderei o desenvolvimento.",
    problemLabel: "Antes",
    workLabel: "O que eu fiz",
    cases: [
      {
        title: "Entregas mais rápidas",
        company: "Empresa B2B (mercados internacionais, 3 equipes multifuncionais)",
        problem: ["Entregas lentas e imprevisíveis", "Muitos bugs"],
        work: [
          "Implantei métricas de entrega",
          "Redesenhei o caminho da tarefa, da ideia ao release",
          "Alinhei o desenvolvimento aos objetivos do produto"
        ],
        metrics: [
          { figure: "2–3×", label: "entregas mais rápidas" },
          { figure: "10×", label: "menos bugs" },
          { icon: "predictable", label: "Releases previsíveis" }
        ]
      },
      {
        title: "Do caos ao sistema",
        company: "Empresa de EdTech (fase de crescimento)",
        problem: ["Desenvolvimento caótico", "Novas funcionalidades demoravam a sair", "NPS baixo"],
        work: [
          "Separei a descoberta de soluções do desenvolvimento",
          "Estruturei o processo de desenvolvimento",
          "Criei canais de feedback dos usuários"
        ],
        metrics: [
          { figure: "2×", label: "mais rápido para chegar ao mercado" },
          { figure: "2×", label: "mais tarefas concluídas" },
          { icon: "nps", label: "NPS bem mais alto" }
        ]
      },
      {
        title: "Custo e eficiência",
        company: "Empresa de produto (fase de escala)",
        problem: ["Desenvolvimento caro", "Pouco retorno da equipe"],
        work: [
          "Encontrei os gargalos com a teoria das restrições",
          "Eliminei trabalho desnecessário",
          "Organizei as prioridades"
        ],
        metrics: [
          { figure: "~1,5×", label: "desenvolvimento mais barato" },
          { icon: "throughput", label: "Mais retorno da equipe" },
          { icon: "stable", label: "Sistema mais estável" }
        ]
      }
    ]
  },
  process: {
    title: "Como eu trabalho",
    outputLabel: "Resultado:",
    steps: [
      {
        title: "Diagnóstico e plano (1–2 semanas)",
        points: [
          "Entendo seu produto, seus usuários e os objetivos do negócio",
          "Analiso o código, a arquitetura e como as entregas funcionam hoje",
          "Combinamos escopo, prioridades e o primeiro release"
        ],
        output: "um plano de trabalho e um primeiro release bem definido"
      },
      {
        title: "Desenvolvimento",
        points: [
          "Escrevo o código: funcionalidades, integrações, correções",
          "Configuro CI, testes e verificações automáticas desde o primeiro dia",
          "Trabalho em ciclos curtos, e você vê o resultado de cada um"
        ],
        output: "software funcionando, entregue em partes"
      },
      {
        title: "Lançamento e estabilização",
        points: [
          "Coloco em produção",
          "Corrijo o que os usuários reais encontram pelo caminho",
          "Mantenho os releases previsíveis conforme o produto cresce"
        ],
        output: "um produto que roda com estabilidade em produção"
      },
      {
        title: "Crescer junto com o produto",
        points: [
          "Lidero o desenvolvimento quando o volume de trabalho aumenta",
          "Quando necessário, contrato e lidero mais engenheiros",
          "Mantenho o ritmo com IA e métricas de entrega"
        ],
        output: "um código e uma equipe que continuam entregando"
      }
    ],
    note: "Sem mágica. Só um sistema que funciona."
  },
  fit: {
    title: "Com quem eu trabalho",
    intro: "Eu entrego o produto. Você traz os clientes.",
    groups: [
      {
        id: "fit",
        title: "Para quem é",
        points: [
          "Fundadores e empresas de produto (B2B, SaaS, plataformas) que precisam construir ou consertar o produto",
          "Você conhece seus clientes e tem um produto validado (pelo menos um MVP)",
          "Você já tem receita e um canal de vendas que funciona"
        ]
      },
      {
        id: "notFit",
        title: "Para quem não é",
        points: [
          "Fase de ideia: ainda sem público claro, MVP validado ou receita",
          "Trabalho sem pagamento ou pago só com participação na empresa",
          "Serviços de marketing, growth ou geração de leads",
          "Só alocação de profissionais, sem responsabilidade pelo resultado"
        ]
      }
    ]
  },
  specializations: {
    title: "Ofertas específicas",
    intro: "Se o seu caso já está claro, comece pela página feita para ele.",
    links: [
      {
        target: "yii2",
        title: "Projeto em Yii2",
        description:
          "Página dedicada ao desenvolvimento em Yii2: qualidade, releases previsíveis, velocidade e modernização sem reescrever do zero."
      },
      {
        target: "ai-vibecoding",
        title: "MVP feito com vibecoding que trava o desenvolvimento",
        description:
          "Página dedicada a colocar em ordem um MVP construído com IA, sem reescrever do zero. Monto o processo de desenvolvimento que esse código nunca teve."
      }
    ]
  },
  writing: {
    title: "Artigos",
    intro: "Escrevo sobre sistemas de entrega, gargalos, métricas e como a IA muda o trabalho de engenharia.",
    allPostsLabel: "Todos os artigos",
    channelsAriaLabel: "Onde eu escrevo"
  },
  faq: [
    {
      question: "O que você faz, exatamente?",
      answer:
        "Construo e conserto software para empresas de produto: escrevo o código, lidero o desenvolvimento e, com métricas e IA, deixo as entregas mais rápidas e previsíveis."
    },
    {
      question: "Em quanto tempo sai o primeiro release?",
      answer:
        "O diagnóstico leva de 1 a 2 semanas e termina com um plano de trabalho e um primeiro release bem definido. As primeiras partes funcionando costumam chegar à produção em poucas semanas. O ritmo exato depende do escopo e do estado do código."
    }
  ],
  finalCta: {
    heading: (
      <>
        Conte o que você está construindo — <em>eu levo até a produção.</em>
      </>
    ),
    text: "Conte em que fase está o produto, quem o usa e o que precisa sair em seguida. Respondo com como eu dividiria o trabalho e como seria o primeiro release.",
    label: "Conversar sobre o projeto",
    href: "https://t.me/sg4tech?start=site_ptbr_final"
  }
};

export const homeOgCard: OgCardContent = {
  alt: "Victor Demin — engenharia de software e liderança técnica",
  eyebrow: "Engenharia de software e liderança técnica",
  title: "Construo sistemas que funcionam.",
  subtitle: "Software que sai no prazo e roda com estabilidade em produção"
};
