import { VICTOR_NAME } from "../brand";
import type { SiteDictionary } from "./types";

export const ptBr: SiteDictionary = {
  document: {
    skipLink: "Pular para o conteúdo principal",
    description:
      "Victor Demin — engenheiro de software e líder técnico. Construo sistemas que entregam no prazo e funcionam com estabilidade em produção."
  },
  navigation: {
    ariaLabel: "Navegação do site",
    languageMenuLabel: "Idioma",
    items: [
      { key: "home", label: "Início" },
      { key: "blog", label: "Blog" },
      { key: "yii2", label: "Yii2" },
      { key: "ai-vibecoding", label: "Vibecoding com IA" }
    ]
  },
  footer: {
    ariaLabel: "Rodapé",
    legalAriaLabel: "Informações legais",
    privacyLabel: "Privacidade",
    disclaimers: [
      {
        label: "Resultados",
        body: "Os resultados mostrados neste site são exemplos de cargos e projetos anteriores. Eles não garantem resultados semelhantes no futuro. O resultado real depende da empresa, da equipe, do produto, do ponto de partida, dos dados disponíveis e de como as mudanças são implementadas."
      },
      {
        label: "Informação profissional",
        body: "Os materiais deste site têm caráter informativo geral. Eles não constituem consultoria técnica, jurídica, financeira, de segurança ou de outra natureza profissional para uma situação específica."
      },
      {
        label: "Marcas registradas",
        body: "Nomes de empresas, logotipos e marcas registradas pertencem aos seus respectivos donos. As menções a ex-empregadores e clientes descrevem a experiência profissional de Victor Demin e não indicam endosso, parceria ou vínculo atual."
      }
    ]
  },
  proof: {
    resultsCaption:
      "Resultados de cargos e projetos anteriores. No seu caso, o resultado pode ser diferente e não é garantido.",
    heroSignalsAriaLabel: "Fatos sobre a experiência"
  },
  language: {
    code: "PT",
    name: "Português"
  },
  untranslated: {
    pageNote: "Página em inglês",
    linkNote: "em inglês"
  },
  author: {
    name: VICTOR_NAME
  },
  whyMe: {
    heading: "Por que eu",
    roleLine: "Engenheiro de software e líder técnico"
  },
  faq: {
    heading: "Perguntas frequentes"
  },
  blog: {
    backLink: "← Blog",
    readingTime: (minutes) => `${minutes} min de leitura`,
    tagsAriaLabel: "Tags",
    byline: {
      beforeName: "",
      afterName:
        " escreve código e lidera equipes de desenvolvimento há mais de 15 anos. Ajuda equipes a entregar mais rápido e com mais previsibilidade, e produtos a funcionar com estabilidade."
    },
    tocHeading: "Conteúdo",
    relatedHeading: "Leia também",
    relatedIntro: "O que escolher depende do que você está enfrentando.",
    ctaButton: "Falar sobre o projeto no Telegram"
  },
  notFound: {
    title: "Página não encontrada",
    text: "Esta página não existe ou foi movida.",
    backHome: "Voltar ao início"
  }
};
