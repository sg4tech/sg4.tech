import type { ReactNode } from "react";
import type { FaqItemData } from "../../components/FaqSection";
import type { PostSlug } from "../../lib/blog/posts";
import type { LandingMeta } from "../../lib/landing-metadata";

// Item ids tie translated copy to the view's fixed design (icons, visual
// treatment), so every locale renders the same page.
export type AiMetricId = "experience" | "rps" | "teams";
export type AiPainPointId = "breaks" | "unknown" | "loops" | "prod";
export type GuardrailLayerId = "architecture" | "pipeline" | "tests" | "code" | "aiWorkflow";
export type AiWhyMeId = "experience-stack" | "track-record" | "habr" | "hands-on";

// Every label in the "AI without / inside the system" diagram. The diagram's
// shape and icons are fixed in the view.
type TransformationLabels = {
  withoutSystem: {
    title: string;
    subtitle: string;
    generate: string;
    patch: string;
    breakFeature: string;
    patchAgain: string;
    regressions: string;
    incident: string;
    footer: string;
  };
  withSystem: {
    title: string;
    subtitle: string;
    generate: string;
    guardrails: string;
    tests: string;
    cicd: string;
    safeReleases: string;
    footer: string;
  };
  caption: string;
};

// Everything the /ai-vibecoding landing says, in one locale.
export type AiVibecodingContent = {
  meta: LandingMeta;
  service: {
    name: string;
    serviceType: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headlineLeadIn: string;
    headline: string;
    statement: ReactNode;
    promise: ReactNode;
    outcome: ReactNode;
    /** The "wrote about this on Habr" pill in the credibility row. */
    habrSignal: { label: string; href: string };
    statsAriaLabel: string;
    metrics: ReadonlyArray<{ id: AiMetricId; figure: string; label: string }>;
    primaryCta: { label: string; href: string };
    secondaryCtaLabel: string;
    transformation: TransformationLabels;
  };
  problem: {
    title: string;
    points: ReadonlyArray<{ id: AiPainPointId; text: ReactNode }>;
    callout: ReactNode;
  };
  guardrails: {
    title: string;
    intro: string;
    productionLabel: string;
    agentsLabel: string;
    layers: ReadonlyArray<{ id: GuardrailLayerId; label: string; text: string }>;
  };
  trust: {
    intro: ReactNode;
    points: ReadonlyArray<{
      id: AiWhyMeId;
      text: ReactNode;
      /** Outcome chips per company, shown under the point with the results caption. */
      outcomes?: ReadonlyArray<{ company: string; chips: ReadonlyArray<string> }>;
    }>;
  };
  process: {
    title: string;
    intro: string;
    outputLabel: string;
    steps: ReadonlyArray<{ title: string; duration: string; points: ReadonlyArray<string>; output: string }>;
    note: ReactNode;
    expectations: { title: string; points: ReadonlyArray<string> };
  };
  whoNotFor: {
    title: string;
    items: ReadonlyArray<string>;
  };
  featuredEssay: {
    label: string;
    /** The blog post this landing links to as its spoke. */
    slug: PostSlug;
  };
  faq: ReadonlyArray<FaqItemData>;
  finalCta: {
    heading: ReactNode;
    text: ReactNode;
    label: string;
    href: string;
  };
};
