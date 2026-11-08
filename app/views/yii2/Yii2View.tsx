import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Building2,
  Bug,
  Calendar,
  Clock,
  Cog,
  Compass,
  Flame,
  GitBranch,
  Inbox,
  Infinity as InfinityIcon,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon
} from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siPhp, siYoutube } from "simple-icons";
import { BrandIcon } from "../../components/BrandIcon";
import { ChannelLinks } from "../../components/ChannelLinks";
import { FaqSection } from "../../components/FaqSection";
import { SiteFooter } from "../../components/SiteFooter";
import { HeroSignals } from "../../components/HeroSignals";
import { Icon } from "../../components/Icon";
import { MarkList } from "../../components/MarkList";
import { Page } from "../../components/Page";
import { Section } from "../../components/Section";
import { ResultsCaption } from "../../components/ResultsCaption";
import { SectionHeader } from "../../components/SectionHeader";
import { Stat } from "../../components/Stat";
import { StatementCta } from "../../components/StatementCta";
import { Steps } from "../../components/Steps";
import { SiteNav } from "../../components/SiteNav";
import { Button } from "../../components/Button";
import { WhyMeSection } from "../../components/WhyMeSection";
import { personSchema, SITE_URL, writingChannelLinks } from "../../lib/brand";
import type { Locale } from "../../lib/i18n/locales";
import { pagePath } from "../../lib/i18n/pages";
import { buildLandingMetadata } from "../../lib/landing-metadata";
import { createLookup } from "../../lib/lookup";
import { clientLogoSignals, PHP_RUSSIA_LOGO } from "../../lib/proof";
import { buildFaqPageSchema } from "../../lib/structured-data";
import landing from "../../styles/landing.module.css";
import type {
  QualityLeverId,
  SpeedLeverId,
  TalkLinkId,
  VisualStateId,
  Yii2Content,
  Yii2MetricId,
  Yii2PainPointId,
  Yii2WhyMeId
} from "./yii2-content";
import styles from "./Yii2View.module.css";


// The design side of each item: which icon it carries. Copy comes from the
// locale's content; these stay the same in every locale.
const metricIcon = createLookup<Yii2MetricId, LucideIcon>({ bugs: Bug, downtime: Activity, delivery: Zap });
const painPointIcon = createLookup<Yii2PainPointId, LucideIcon>({
  slowdown: Clock,
  risk: AlertTriangle,
  legacy: Cog,
  busy: Activity
});
const qualityLeverIcon = createLookup<QualityLeverId, LucideIcon>({
  guardrails: ShieldCheck,
  cicd: GitBranch,
  monitoring: Activity,
  automation: Sparkles
});
const speedLeverIcon = createLookup<SpeedLeverId, LucideIcon>({
  bottleneck: Search,
  metrics: BarChart3,
  alignment: Workflow,
  agents: Zap
});
const whyMeIcon = createLookup<Yii2WhyMeId, LucideIcon>({
  experience: Calendar,
  fixes: Wrench,
  "hands-on": Compass,
  "track-record": Building2
});
const talkIconPath = createLookup<TalkLinkId, string>({ event: siPhp.path, recording: siYoutube.path });
const visualStateIcon = createLookup<VisualStateId, LucideIcon>({
  before: AlertTriangle,
  after: ShieldCheck,
  goal: Target
});

export function buildYii2Metadata(locale: Locale, content: Yii2Content): Metadata {
  return buildLandingMetadata(locale, "yii2", content.meta);
}

function buildStructuredData(locale: Locale, content: Yii2Content) {
  const path = pagePath(locale, "yii2");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}${path}#service`,
        name: content.service.name,
        url: `${SITE_URL}${path}`,
        serviceType: content.service.serviceType,
        description: content.service.description,
        founder: { "@id": `${SITE_URL}/#person` }
      },
      personSchema,
      buildFaqPageSchema(path, content.faq)
    ]
  };
}

type SectionProps = {
  locale: Locale;
  content: Yii2Content;
};

type IconTextListProps<Id extends string> = {
  items: ReadonlyArray<{ id: Id; text: ReactNode }>;
  iconOf: (id: Id) => LucideIcon;
  tone: "warm" | "cool";
};

function IconTextList<Id extends string>({ items, iconOf, tone }: IconTextListProps<Id>) {
  return (
    <ul className={landing.iconList} data-tone={tone}>
      {items.map((item) => (
        <li key={item.id}>
          <Icon icon={iconOf(item.id)} className={landing.cardIcon} />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

type VisualNodeProps = {
  pos: string;
  icon: LucideIcon;
  label: string;
  outcome?: boolean;
};

function VisualNode({ pos, icon, label, outcome = false }: VisualNodeProps) {
  return (
    <div className={outcome ? `${styles.node} ${styles.nodeOutcome}` : styles.node} data-pos={pos}>
      <span className={styles.nodeIcon}>
        <Icon icon={icon} />
      </span>
      <span>{label}</span>
    </div>
  );
}

function FireFightingPanel({ content }: SectionProps) {
  const panel = content.transformation.fireFighting;
  return (
    <div className={styles.visualPanel} data-mode="warm">
      <p className={styles.panelTitle}>{panel.title}</p>
      <div className={styles.panelBody}>
        <svg className={styles.panelConnectors} viewBox="0 0 100 80" focusable="false" aria-hidden="true">
          <defs>
            <marker id="arrow-warm" viewBox="0 0 6 6" markerWidth="5.5" markerHeight="5.5" refX="4" refY="3" orient="auto">
              <path d="M0 0 L6 3 L0 6 Z" fill="var(--viz-warm-strong)" />
            </marker>
          </defs>
          <path d="M 30 9 Q 55 4 67 31" markerEnd="url(#arrow-warm)" />
          <path d="M 70 42 Q 50 58 32 70" markerEnd="url(#arrow-warm)" />
          <path d="M 10 72 Q 2 42 16 13.5" markerEnd="url(#arrow-warm)" />
        </svg>
        <VisualNode pos="top-left" icon={Search} label={panel.manualChecks} />
        <VisualNode pos="mid-right" icon={Inbox} label={panel.hiddenQueue} />
        <VisualNode pos="bottom-left" icon={Flame} label={panel.hotfixes} />
      </div>
    </div>
  );
}

function DeliverySystemPanel({ content }: SectionProps) {
  const panel = content.transformation.deliverySystem;
  return (
    <div className={styles.visualPanel} data-mode="cool">
      <p className={styles.panelTitle}>{panel.title}</p>
      <div className={styles.panelBody}>
        <svg className={styles.panelConnectors} viewBox="0 0 100 80" focusable="false" aria-hidden="true">
          <defs>
            <marker id="arrow-cool" viewBox="0 0 6 6" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
              <path d="M0 0 L6 3 L0 6 Z" fill="var(--viz-cool-strong)" />
            </marker>
          </defs>
          <path d="M 22 11 Q 32 19.5 42 29" markerEnd="url(#arrow-cool)" />
          <path d="M 82 11 Q 68 19.5 58 29" markerEnd="url(#arrow-cool)" />
          <path d="M 50 40 Q 50.5 51 50 62" markerEnd="url(#arrow-cool)" />
        </svg>
        <VisualNode pos="top-left" icon={ShieldCheck} label={panel.guardrails} />
        <VisualNode pos="top-right" icon={InfinityIcon} label={panel.cicd} />
        <VisualNode pos="mid-center" icon={Activity} label={panel.monitoring} />
        <VisualNode pos="bottom-center" icon={Rocket} label={panel.outcome} outcome />
      </div>
    </div>
  );
}

function VisualStateFooter({ content }: SectionProps) {
  return (
    <div className={styles.visualFooter}>
      {content.transformation.states.map((state) => (
        <div key={state.id} className={styles.visualStat} data-state={state.id}>
          <span className={styles.visualStatHeader}>
            <Icon icon={visualStateIcon(state.id)} className={styles.visualStatIcon} />
            <span className={styles.visualStatValue}>{state.value}</span>
          </span>
          <span className={styles.visualStatLabel}>{state.label}</span>
        </div>
      ))}
    </div>
  );
}

function TransformationSection(props: SectionProps) {
  const { transformation } = props.content;
  return (
    <Section id="transformation">
      <SectionHeader title={transformation.title} intro={transformation.intro} />
      <div className={styles.visualFrame} aria-hidden="true">
        <div className={styles.visualPanels}>
          <FireFightingPanel {...props} />
          <DeliverySystemPanel {...props} />
        </div>
        <VisualStateFooter {...props} />
      </div>
    </Section>
  );
}

function HeroSection({ locale, content: { hero } }: SectionProps) {
  const signals = [...clientLogoSignals, { label: hero.phpRussiaLabel, ...PHP_RUSSIA_LOGO }];
  return (
    <section className={landing.hero}>
      <div className={landing.heroPanel}>
        <div className={landing.heroLayout}>
          <div className={landing.heroMain}>
            <h1>
              <span className={landing.heroLeadIn}>{hero.headlineLeadIn}</span>
              {hero.headline}
            </h1>
            <p className={landing.heroAction}>{hero.action}</p>
            <p className={landing.heroStatement}>{hero.statement}</p>
            <p className={landing.heroPromise}>{hero.promise}</p>
            <div className={landing.actions}>
              <Button
                href={hero.primaryCta.href}
                target="_blank"
                rel="noreferrer"
                eventName="cta_click"
                payload={{ location: "yii2_hero" }}
              >
                {hero.primaryCta.label}
              </Button>
              <Button variant="secondary" href="#quality">
                {hero.secondaryCtaLabel}
              </Button>
            </div>
          </div>
          <div className={landing.heroAside}>
            <HeroSignals locale={locale} signals={signals} />
            <ul className={landing.metricList} aria-label={hero.statsAriaLabel}>
              {hero.metrics.map((item) => (
                <li key={item.id}>
                  <Stat figure={item.figure} icon={metricIcon(item.id)} label={item.label} />
                </li>
              ))}
            </ul>
            <ResultsCaption locale={locale} />
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
      <IconTextList items={problem.points} iconOf={painPointIcon} tone="warm" />
      <p className={landing.callout}>{problem.callout}</p>
    </Section>
  );
}

// Quality and Speed are two stages of one plan, so they sit side by side as
// two columns of one section. Both anchors (#quality, #speed) are kept.
function LeversSection({ content: { levers } }: SectionProps) {
  return (
    <Section id="quality">
      <div className={landing.stageColumns}>
        <div className={landing.stageColumn}>
          <SectionHeader
            title={levers.quality.title}
            intro={levers.quality.intro}
            headingClassName={landing.stageHeading}
          />
          <IconTextList items={levers.quality.points} iconOf={qualityLeverIcon} tone="cool" />
        </div>
        <div id="speed" className={`${landing.stageColumn} ${landing.stageAnchor}`}>
          <SectionHeader title={levers.speed.title} intro={levers.speed.intro} headingClassName={landing.stageHeading} />
          <IconTextList items={levers.speed.points} iconOf={speedLeverIcon} tone="warm" />
        </div>
      </div>
    </Section>
  );
}

function TrustSection({ locale, content: { trust } }: SectionProps) {
  return (
    <WhyMeSection
      locale={locale}
      intro={trust.intro}
      points={trust.points.map((point) => ({
        id: point.id,
        icon: whyMeIcon(point.id),
        content: <span>{point.text}</span>
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
              <p className={landing.stepSummary}>{step.summary}</p>
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

function ProofSection({ content: { proof } }: SectionProps) {
  return (
    <Section id="proof">
      <SectionHeader title={proof.title} intro={proof.intro} />
      <div className={landing.proofGrid}>
        {proof.talks.map((link) => (
          <a key={link.id} href={link.href} className={landing.linkCard} target="_blank" rel="noreferrer">
            <span className={landing.linkHeader}>
              <BrandIcon label={link.label} path={talkIconPath(link.id)} className={landing.brandIcon} />
              <span className={landing.linkLabel}>{link.label}</span>
            </span>
            <span className={landing.linkDescription}>{link.description}</span>
            <Icon icon={ArrowRight} className={landing.linkArrow} />
          </a>
        ))}
      </div>
      <ChannelLinks items={writingChannelLinks} ariaLabel={proof.channelsAriaLabel} />
    </Section>
  );
}

function FinalCtaSection({ content: { finalCta } }: SectionProps) {
  return (
    <StatementCta
      id="final-cta"
      heading={finalCta.heading}
      text={finalCta.text}
      primary={{
        href: finalCta.href,
        label: finalCta.label,
        target: "_blank",
        rel: "noreferrer",
        eventName: "cta_click",
        payload: { location: "yii2_final" }
      }}
    />
  );
}

// The /yii2 landing, the same in every locale; only `content` differs.
export function Yii2View({ locale, content }: SectionProps) {
  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData(locale, content)) }}
      />
      <SiteNav locale={locale} current={pagePath(locale, "yii2")} />
      <HeroSection locale={locale} content={content} />
      <TransformationSection locale={locale} content={content} />
      <ProblemSection locale={locale} content={content} />
      <LeversSection locale={locale} content={content} />
      <TrustSection locale={locale} content={content} />
      <ProcessSection locale={locale} content={content} />
      <ProofSection locale={locale} content={content} />
      <FaqSection locale={locale} items={content.faq} />
      <FinalCtaSection locale={locale} content={content} />
      <SiteFooter locale={locale} />
    </Page>
  );
}
