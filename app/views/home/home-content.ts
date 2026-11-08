import type { ReactNode } from "react";
import type { FaqItemData } from "../../components/FaqSection";
import type { PageKey } from "../../lib/i18n/pages";
import type { LandingMeta } from "../../lib/landing-metadata";

// Item ids tie translated copy to the view's fixed design (icons, order of
// visual treatment), so every locale renders the same page.
export type HeroMetricId = "speed" | "quality" | "predictability";
export type StageId = "early" | "growth" | "scale";
export type TrustPointId = "experience" | "leadership" | "mvp" | "scale" | "writing";
export type CaseMetricIconId = "predictable" | "nps" | "throughput" | "stable";
export type FitGroupId = "fit" | "notFit";
/** A specialized landing the home page links to; a key of the page registry. */
type SpecializationTarget = Extract<PageKey, "yii2" | "ai-vibecoding">;

type Metric = {
  /** Small qualifier before the figure, e.g. "Up to". */
  note?: string;
  figure?: string;
  label: string;
};

type CaseMetric = { figure: string; label: string } | { icon: CaseMetricIconId; label: string };

// Everything the home page says, in one locale.
export type HomeContent = {
  meta: LandingMeta;
  service: {
    name: string;
    serviceType: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    /** Label shown after the PHP Russia logo in the credibility row. */
    phpRussiaLabel: string;
    lead: ReactNode;
    text: ReactNode;
    primaryCta: { label: string; href: string };
    secondaryCtaLabel: string;
    credibility: string;
    statsAriaLabel: string;
    metrics: ReadonlyArray<Metric & { id: HeroMetricId }>;
  };
  problem: {
    title: string;
    stages: ReadonlyArray<{ id: StageId; title: string; points: ReadonlyArray<string>; closing: string }>;
    callout: ReadonlyArray<ReactNode>;
  };
  trust: {
    intro: ReactNode;
    points: ReadonlyArray<{ id: TrustPointId; text: ReactNode }>;
  };
  results: {
    title: string;
    intro: string;
    problemLabel: string;
    workLabel: string;
    cases: ReadonlyArray<{
      title: string;
      company: string;
      problem: ReadonlyArray<string>;
      work: ReadonlyArray<string>;
      metrics: ReadonlyArray<CaseMetric>;
    }>;
  };
  process: {
    title: string;
    outputLabel: string;
    steps: ReadonlyArray<{ title: string; points: ReadonlyArray<string>; output: string }>;
    note: string;
  };
  fit: {
    title: string;
    intro: string;
    groups: ReadonlyArray<{ id: FitGroupId; title: string; points: ReadonlyArray<string> }>;
  };
  specializations: {
    title: string;
    intro: string;
    links: ReadonlyArray<{ target: SpecializationTarget; title: string; description: string }>;
  };
  writing: {
    title: string;
    intro: string;
    allPostsLabel: string;
    channelsAriaLabel: string;
  };
  faq: ReadonlyArray<FaqItemData>;
  finalCta: {
    heading: ReactNode;
    text: ReactNode;
    label: string;
    href: string;
  };
};
