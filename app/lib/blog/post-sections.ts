import { createLookup } from "../lookup";
import type { EnPostSlug } from "./registry/en";

// The sections of each post, in reading order — the structure every language
// version of the post renders. A translation provides a component for each
// key (plus ArticleLede), so it cannot drop or reorder a section.
const POST_SECTIONS = {
  "ai-coding-agent-periphery-core": [
    "IntroSection",
    "SectionBarrier",
    "SectionWhatWorks",
    "SectionWhatNot",
    "SectionRule",
    "ArticleCta",
    "ArticleRelated"
  ],
  "ai-made-starting-free-finishing-expensive": [
    "IntroSection",
    "SectionCostVisible",
    "SectionMetricsSurvive",
    "SectionParallelTasks",
    "SectionOneThread",
    "SectionConstraintMoved",
    "ArticleCta",
    "ArticleRelated"
  ],
  "code-entropy-ci-checks-ai-legacy": [
    "IntroSection",
    "LevelLadder",
    "SectionCheapLevels",
    "SectionComplexity",
    "SectionArchitectureAndRules",
    "SectionToolTable",
    "SectionBottomLine",
    "SectionTemplate",
    "ArticleCta",
    "ArticleRelated"
  ],
  "diagnose-broken-engineering-delivery": [
    "IntroSection",
    "TableOfContents",
    "SectionSymptoms",
    "SectionDecomposeT2M",
    "SectionLeadTimeCycleTime",
    "SectionWhereStuck",
    "SectionCountTasks",
    "SectionWip",
    "SectionLittlesLaw",
    "SectionWipLimits",
    "SectionIntroduceWipLimits",
    "SectionFullSystemView",
    "SectionClosing",
    "ArticleCta",
    "ArticleRelated"
  ],
  "forecast-delivery-with-percentiles": [
    "IntroSection",
    "SectionAverageComfort",
    "SectionMedianTypical",
    "SectionGapDiagnosis",
    "SectionPickPercentile",
    "SectionPredictability",
    "ArticleCta",
    "ArticleRelated"
  ],
  "vibecoded-mvp-stopped-shipping": [
    "IntroSection",
    "SectionStall",
    "SectionJunior",
    "SectionCase",
    "SectionMapping",
    "SectionFailedFixes",
    "SectionRestart",
    "ArticleCta",
    "ArticleRelated"
  ]
} as const satisfies Record<EnPostSlug, ReadonlyArray<string>>;

export type PostSectionKey<S extends EnPostSlug> = (typeof POST_SECTIONS)[S][number];

const sectionsOf = createLookup<EnPostSlug, ReadonlyArray<string>>(POST_SECTIONS);

/** The original's sections, in reading order. */
export function getPostSections<S extends EnPostSlug>(original: S): ReadonlyArray<PostSectionKey<S>> {
  // The table is typed per slug; the lookup returns its row for `original`.
  return sectionsOf(original) as ReadonlyArray<PostSectionKey<S>>;
}
