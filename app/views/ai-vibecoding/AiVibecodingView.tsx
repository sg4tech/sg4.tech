import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Bot,
  Bug,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  Flame,
  GitBranch,
  HelpCircle,
  Layers,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wrench,
  type LucideIcon
} from "lucide-react";
import Link from "next/link";
import { siHabr } from "simple-icons";
import { Eyebrow } from "../../components/Eyebrow";
import { FaqSection } from "../../components/FaqSection";
import { SiteFooter } from "../../components/SiteFooter";
import { HeroSignals } from "../../components/HeroSignals";
import { Icon } from "../../components/Icon";
import { MarkList } from "../../components/MarkList";
import { Page } from "../../components/Page";
import { ResultsCaption } from "../../components/ResultsCaption";
import { Section } from "../../components/Section";
import { SectionHeader } from "../../components/SectionHeader";
import { Stat } from "../../components/Stat";
import { ContactCta } from "../../components/ContactCta";
import { Steps } from "../../components/Steps";
import { SiteNav } from "../../components/SiteNav";
import { Button } from "../../components/Button";
import { WhyMeSection } from "../../components/WhyMeSection";
import { getPostBySlug, getPostPath } from "../../lib/blog/posts";
import type { Locale } from "../../lib/i18n/locales";
import { createLookup } from "../../lib/lookup";
import { clientLogoSignals } from "../../lib/proof";
import landing from "../../styles/landing.module.css";
import type {
  AiMetricId,
  AiPainPointId,
  AiVibecodingContent,
  AiWhyMeId,
  GuardrailLayerId
} from "./ai-vibecoding-content";
import { buildAiVibecodingStructuredData } from "./ai-vibecoding-seo";
import styles from "./AiVibecodingView.module.css";


// The design side of each item: which icon it carries. Copy comes from the
// locale's content; these stay the same in every locale.
const metricIcon = createLookup<AiMetricId, LucideIcon>({ experience: Calendar, rps: Activity, teams: TrendingUp });
const painPointIcon = createLookup<AiPainPointId, LucideIcon>({
  breaks: Bug,
  unknown: HelpCircle,
  loops: RefreshCw,
  prod: Clock
});
const layerIcon = createLookup<GuardrailLayerId, LucideIcon>({
  architecture: Layers,
  pipeline: GitBranch,
  tests: ShieldCheck,
  code: Code2,
  aiWorkflow: Sparkles
});
const whyMeIcon = createLookup<AiWhyMeId, LucideIcon>({
  "experience-stack": Calendar,
  "track-record": Building2,
  habr: BookOpen,
  "hands-on": Wrench
});



type SectionProps = {
  locale: Locale;
  content: AiVibecodingContent;
};

type FlowStepProps = {
  icon: LucideIcon;
  title: string;
  variant?: "outcome" | "warn";
};

function FlowStep({ icon, title, variant }: FlowStepProps) {
  const base = styles.flowStep;
  const cls =
    variant === "outcome"
      ? `${base} ${styles.flowStepOutcome}`
      : variant === "warn"
        ? `${base} ${styles.flowStepWarnOutcome}`
        : base;
  return (
    <div className={cls}>
      <span className={styles.flowStepIcon}>
        <Icon icon={icon} />
      </span>
      <div className={styles.flowStepContent}>
        <p className={styles.flowStepTitle}>{title}</p>
      </div>
    </div>
  );
}

function FlowArrow() {
  return <div className={styles.flowArrow}>↓</div>;
}

function AiWithoutSystemPanel({ content }: SectionProps) {
  const panel = content.hero.transformation.withoutSystem;
  return (
    <div className={styles.transformPanel} data-mode="warm">
      <p className={styles.transformPanelTitle}>{panel.title}</p>
      <p className={styles.transformPanelSubtitle}>{panel.subtitle}</p>
      <div className={styles.flowList}>
        <FlowStep icon={Sparkles} title={panel.generate} />
        <FlowArrow />
        <div className={styles.loopBlock}>
          <FlowStep icon={Wrench} title={panel.patch} />
          <FlowArrow />
          <FlowStep icon={AlertTriangle} title={panel.breakFeature} />
          <FlowArrow />
          <FlowStep icon={RefreshCw} title={panel.patchAgain} />
          <FlowArrow />
          <FlowStep icon={Bug} title={panel.regressions} />
        </div>
        <FlowArrow />
        <FlowStep icon={Flame} title={panel.incident} variant="warn" />
      </div>
      <p className={styles.flowFooter}>✕ {panel.footer}</p>
    </div>
  );
}

function AiWithSystemPanel({ content }: SectionProps) {
  const panel = content.hero.transformation.withSystem;
  return (
    <div className={styles.transformPanel} data-mode="cool">
      <p className={styles.transformPanelTitle}>{panel.title}</p>
      <p className={styles.transformPanelSubtitle}>{panel.subtitle}</p>
      <div className={styles.flowList}>
        <FlowStep icon={Sparkles} title={panel.generate} />
        <FlowArrow />
        <FlowStep icon={ShieldCheck} title={panel.guardrails} />
        <FlowArrow />
        <FlowStep icon={Code2} title={panel.tests} />
        <FlowArrow />
        <FlowStep icon={GitBranch} title={panel.cicd} />
        <FlowArrow />
        <FlowStep icon={CheckCircle2} title={panel.safeReleases} variant="outcome" />
      </div>
      <p className={styles.flowFooter}>✓ {panel.footer}</p>
    </div>
  );
}

function AiSystemTransformationVisual(props: SectionProps) {
  return (
    <div className={styles.transformFrame} aria-hidden="true">
      <div className={styles.transformPanels}>
        <AiWithoutSystemPanel {...props} />
        <AiWithSystemPanel {...props} />
      </div>
      <p className={styles.transformCaption}>{props.content.hero.transformation.caption}</p>
    </div>
  );
}

function SystemLayersVisual({ content: { guardrails } }: SectionProps) {
  return (
    <div className={styles.layersStack} aria-hidden="true">
      <div className={styles.layersProduction}>
        <Icon icon={Rocket} className={styles.layersProductionIcon} />
        {guardrails.productionLabel}
      </div>
      {guardrails.layers.map((layer) => (
        <div key={layer.id}>
          <div className={styles.layersConnector}>↑</div>
          <div className={styles.layerRow}>
            <span className={styles.layerRowIcon}>
              <Icon icon={layerIcon(layer.id)} />
            </span>
            <div>
              <p className={styles.layerRowTitle}>{layer.label}</p>
              <p className={styles.layerRowTag}>{layer.text}</p>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.layersConnector}>↑</div>
      <div className={styles.layersAgents}>
        <Icon icon={Bot} className={styles.layersAgentsIcon} />
        {guardrails.agentsLabel}
      </div>
    </div>
  );
}

function HeroSection(props: SectionProps) {
  const { locale, content } = props;
  const { hero } = content;
  const signals = [...clientLogoSignals, { ...hero.habrSignal, iconPath: siHabr.path }];
  return (
    <section className={landing.hero}>
      <div className={landing.heroPanel}>
        <div className={landing.heroLayout}>
          <div className={landing.heroMain}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1>
              <span className={landing.heroLeadIn}>{hero.headlineLeadIn}</span>
              {hero.headline}
            </h1>
            <p className={landing.heroStatement}>{hero.statement}</p>
            <p className={landing.heroPromise}>{hero.promise}</p>
            <p className={landing.heroOutcome}>{hero.outcome}</p>
            <HeroSignals locale={locale} signals={signals} />
            <ul className={landing.metricList} aria-label={hero.statsAriaLabel}>
              {hero.metrics.map((item) => (
                <li key={item.id}>
                  <Stat figure={item.figure} icon={metricIcon(item.id)} label={item.label} />
                </li>
              ))}
            </ul>
            <div className={landing.actions}>
              <Button
                href={hero.primaryCta.href}
                target="_blank"
                rel="noreferrer"
                eventName="cta_click"
                payload={{ location: "ai_vibecoding_hero" }}
              >
                {hero.primaryCta.label}
              </Button>
              <Button variant="secondary" href="#guardrails">
                {hero.secondaryCtaLabel}
              </Button>
            </div>
          </div>
          <div className={landing.heroAside}>
            <AiSystemTransformationVisual {...props} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection({ content: { problem } }: SectionProps) {
  return (
    <Section id="problem">
      <SectionHeader title={problem.title} />
      <ul className={landing.iconList} data-tone="warm">
        {problem.points.map((item) => (
          <li key={item.id}>
            <Icon icon={painPointIcon(item.id)} className={landing.cardIcon} />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <p className={landing.callout}>{problem.callout}</p>
    </Section>
  );
}

function GuardrailsSection(props: SectionProps) {
  const { guardrails } = props.content;
  return (
    <Section id="guardrails">
      <SectionHeader title={guardrails.title} intro={guardrails.intro} />
      <SystemLayersVisual {...props} />
    </Section>
  );
}

function TrustSection({ locale, content: { trust } }: SectionProps) {
  return (
    <WhyMeSection
      locale={locale}
      intro={trust.intro}
      introClassName={styles.introWide}
      points={trust.points.map((point) => ({
        id: point.id,
        icon: whyMeIcon(point.id),
        content: point.outcomes ? (
          <div>
            <span>{point.text}</span>
            <div className={styles.outcomeChipGroups}>
              {point.outcomes.map((group) => (
                <div key={group.company} className={styles.outcomeChipGroup}>
                  <span className={styles.outcomeChipCompany}>{group.company}</span>
                  {group.chips.map((chip) => (
                    <span key={chip} className={styles.outcomeChip}>
                      {chip}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <ResultsCaption locale={locale} tone="onDark" />
          </div>
        ) : (
          <span>{point.text}</span>
        )
      }))}
    />
  );
}

function ProcessSection({ content: { process } }: SectionProps) {
  return (
    <Section id="process">
      <SectionHeader title={process.title} intro={process.intro} />
      <Steps
        variant="card"
        items={process.steps.map((step) => ({
          title: step.title,
          body: (
            <>
              <p className={landing.stepSummary}>{step.duration}</p>
              <MarkList items={step.points} />
              <p className={landing.output}>
                {process.outputLabel} {step.output}
              </p>
            </>
          )
        }))}
      />
      <p className={landing.processNote}>{process.note}</p>
      <div className={landing.expectationBox}>
        <h3>{process.expectations.title}</h3>
        <MarkList items={process.expectations.points} kind="check" />
      </div>
    </Section>
  );
}

function WhoNotForSection({ content: { whoNotFor } }: SectionProps) {
  return (
    <Section>
      <SectionHeader title={whoNotFor.title} />
      <MarkList items={whoNotFor.items} kind="x" />
    </Section>
  );
}

function FinalCtaSection({ content: { finalCta } }: SectionProps) {
  return <ContactCta cta={finalCta} location="ai_vibecoding_final" />;
}

// Hub ⇄ spoke backlink: this landing is the hub for the vibecoding blog spoke.
// Title/description come from the post registry so the card never drifts from
// the article's own metadata.
function FeaturedEssaySection({ content: { featuredEssay } }: SectionProps) {
  const post = getPostBySlug(featuredEssay.slug);
  return (
    <Section aria-label={featuredEssay.label}>
      <div className={styles.featuredEssayGrid}>
        <Link href={getPostPath(post.slug)} className={styles.featuredEssayCard}>
          <span className={styles.featuredEssayLabel}>{featuredEssay.label}</span>
          <span className={styles.featuredEssayTitle}>{post.title}</span>
          <span className={styles.featuredEssayDescription}>{post.description}</span>
          <Icon icon={ArrowRight} className={styles.featuredEssayArrow} />
        </Link>
      </div>
    </Section>
  );
}

// The /ai-vibecoding landing, the same in every locale; only `content` differs.
export function AiVibecodingView({ locale, content }: SectionProps) {
  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildAiVibecodingStructuredData(locale, content)) }}
      />
      <SiteNav locale={locale} page="ai-vibecoding" />
      <HeroSection locale={locale} content={content} />
      <ProblemSection locale={locale} content={content} />
      <GuardrailsSection locale={locale} content={content} />
      <TrustSection locale={locale} content={content} />
      <ProcessSection locale={locale} content={content} />
      <WhoNotForSection locale={locale} content={content} />
      <FeaturedEssaySection locale={locale} content={content} />
      <FaqSection locale={locale} items={content.faq} />
      <FinalCtaSection locale={locale} content={content} />
      <SiteFooter locale={locale} />
    </Page>
  );
}
