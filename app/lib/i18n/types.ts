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
    items: ReadonlyArray<{ key: "home" | "blog" | "yii2" | "ai-vibecoding"; label: string }>;
  };
  footer: {
    ariaLabel: string;
    legalAriaLabel: string;
    copyright: string;
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
    bylineBio: string;
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
