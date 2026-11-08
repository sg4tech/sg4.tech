import type { SiteDictionary } from "./types";

export const en: SiteDictionary = {
  document: {
    skipLink: "Skip to main content",
    description:
      "Victor Demin — hands-on software engineer and engineering leader. Software systems that ship on time and hold up in production."
  },
  navigation: {
    ariaLabel: "Site navigation",
    items: [
      { key: "home", label: "Home" },
      { key: "blog", label: "Blog" },
      { key: "yii2", label: "Yii2" },
      { key: "ai-vibecoding", label: "AI vibecoding" }
    ]
  },
  footer: {
    ariaLabel: "Footer",
    legalAriaLabel: "Legal",
    privacyLabel: "Privacy",
    // Fine print at the foot of every page — light-touch legal cover for the
    // quantified case results, the informational blog content, and the
    // third-party logos/employer references shown across the site.
    disclaimers: [
      {
        label: "Results",
        body: "Results shown on this website are historical examples from specific roles and projects. They do not guarantee similar outcomes for future clients. Actual results depend on the organization, team, product, starting conditions, available data, and implementation."
      },
      {
        label: "Professional information",
        body: "Materials published on this website are provided for general informational purposes. They do not constitute technical, security, legal, financial, or other professional advice for any particular situation."
      },
      {
        label: "Trademarks",
        body: "Company names, logos, and trademarks belong to their respective owners. References to former employers and clients describe Victor Demin's professional experience and do not imply endorsement, partnership, or current affiliation."
      }
    ]
  },
  proof: {
    resultsCaption:
      "Historical results from specific roles and projects. Actual outcomes vary and are not guaranteed.",
    heroSignalsAriaLabel: "Selected credibility signals"
  },
  whyMe: {
    heading: "Why me",
    roleLine: "Hands-on software engineer & engineering leader"
  },
  faq: {
    heading: "FAQ"
  },
  blog: {
    backLink: "← Blog",
    readingTime: (minutes) => `${minutes} min read`,
    tagsAriaLabel: "Tags",
    byline: {
      beforeName: "",
      afterName: " has 15+ years helping engineering organizations improve delivery speed, predictability, and system health."
    },
    tocHeading: "Contents",
    relatedHeading: "Related",
    relatedIntro: "Where to go next, depending on what you're working with.",
    ctaButton: "Discuss your project on Telegram"
  },
  notFound: {
    title: "Page not found",
    text: "The page you're looking for doesn't exist or has moved.",
    backHome: "Back to home"
  }
};
