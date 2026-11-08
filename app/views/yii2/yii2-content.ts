import type { ReactNode } from "react";
import type { FaqItemData } from "../../components/FaqSection";
import type { LandingMeta } from "../../lib/landing-metadata";

// Item ids tie translated copy to the view's fixed design (icons, visual
// treatment), so every locale renders the same page.
export type Yii2MetricId = "bugs" | "downtime" | "delivery";
export type Yii2PainPointId = "slowdown" | "risk" | "legacy" | "busy";
export type QualityLeverId = "guardrails" | "cicd" | "monitoring" | "automation";
export type SpeedLeverId = "bottleneck" | "metrics" | "alignment" | "agents";
export type Yii2WhyMeId = "experience" | "fixes" | "hands-on" | "track-record";
export type TalkLinkId = "event" | "recording";
export type VisualStateId = "before" | "after" | "goal";

type IconText<Id extends string> = { id: Id; text: ReactNode };

// Everything the /yii2 landing says, in one locale.
export type Yii2Content = {
  meta: LandingMeta;
  service: {
    name: string;
    serviceType: string;
    description: string;
  };
  hero: {
    headlineLeadIn: string;
    headline: string;
    action: ReactNode;
    statement: ReactNode;
    promise: ReactNode;
    primaryCta: { label: string; href: string };
    secondaryCtaLabel: string;
    /** Label shown after the PHP Russia logo in the credibility row. */
    phpRussiaLabel: string;
    statsAriaLabel: string;
    metrics: ReadonlyArray<{ id: Yii2MetricId; figure: string; label: string }>;
  };
  transformation: {
    title: string;
    intro: string;
    fireFighting: { title: string; manualChecks: string; hiddenQueue: string; hotfixes: string };
    deliverySystem: { title: string; guardrails: string; cicd: string; monitoring: string; outcome: string };
    states: ReadonlyArray<{ id: VisualStateId; value: string; label: string }>;
  };
  problem: {
    title: string;
    points: ReadonlyArray<IconText<Yii2PainPointId>>;
    callout: ReactNode;
  };
  levers: {
    quality: { title: string; intro: string; points: ReadonlyArray<IconText<QualityLeverId>> };
    speed: { title: string; intro: string; points: ReadonlyArray<IconText<SpeedLeverId>> };
  };
  trust: {
    intro: ReactNode;
    points: ReadonlyArray<IconText<Yii2WhyMeId>>;
  };
  process: {
    title: string;
    intro: string;
    outputLabel: string;
    steps: ReadonlyArray<{ title: string; summary: string; points: ReadonlyArray<string>; output: string }>;
    note: string;
    expectations: { title: string; points: ReadonlyArray<string> };
  };
  proof: {
    title: string;
    intro: string;
    talks: ReadonlyArray<{ id: TalkLinkId; label: string; href: string; description: string }>;
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
