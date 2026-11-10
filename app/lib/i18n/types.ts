// Fine-print legal disclaimer at the foot of every page. `label` is the bold
// lead-in; `body` is the running text after it.
export type FooterDisclaimer = {
  label: string;
  body: string;
};

// Every UI string that shared components and layouts render, per locale.
// Page copy (landing sections, article prose) is page content and lives with
// the page; this dictionary holds only what is shared across pages.
export type SiteDictionary = {
  document: {
    skipLink: string;
    /** Default meta description for pages that set none. */
    description: string;
  };
  navigation: {
    ariaLabel: string;
    /** Accessible name of the language menu button. */
    languageMenuLabel: string;
    items: ReadonlyArray<{ key: "home" | "blog" | "yii2" | "ai-vibecoding"; label: string }>;
  };
  footer: {
    ariaLabel: string;
    legalAriaLabel: string;
    privacyLabel: string;
    disclaimers: ReadonlyArray<FooterDisclaimer>;
  };
  proof: {
    /** Short disclaimer placed directly under quantified stat blocks. It
     * complements the fuller "Results" fine print in the footer: proximity to
     * the claim is what makes the disclosure effective. */
    resultsCaption: string;
    heroSignalsAriaLabel: string;
  };
  /** How this language names itself in the language menu, so a reader finds
   * their language whatever page they are on. */
  language: {
    /** Short code on the menu button, e.g. "EN". */
    code: string;
    /** The language's own name, e.g. "Deutsch". */
    name: string;
  };
  /** Marks a link to a page that has no version in this language yet, so
   * the reader knows the next page is in the default language. */
  untranslated: {
    /** A note on a card that leads to such a page. */
    pageNote: string;
    /** A short note after a link's label. */
    linkNote: string;
  };
  author: {
    /** The author's name as readers of this language spell it. Structured
     * data keeps the canonical entity name from lib/brand. */
    name: string;
  };
  whyMe: {
    heading: string;
    /** Human-facing tagline under the name in the identity card — distinct
     * from the schema's terse jobTitle in lib/brand. */
    roleLine: string;
  };
  faq: {
    heading: string;
  };
  blog: {
    backLink: string;
    readingTime: (minutes: number) => string;
    tagsAriaLabel: string;
    /** The author byline around the (styled) name, so each language sets its own word order. */
    byline: { beforeName: string; afterName: string };
    tocHeading: string;
    relatedHeading: string;
    relatedIntro: string;
    ctaButton: string;
  };
  notFound: {
    title: string;
    text: string;
    backHome: string;
  };
};
