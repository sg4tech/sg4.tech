import {
  ArrowRight,
  Ban,
  BookOpen,
  Bug,
  Calendar,
  Gauge,
  Rocket,
  Layers,
  ShieldCheck,
  Smile,
  Target,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon
} from "lucide-react";
import Link from "next/link";
import { ChannelLinks } from "../../components/ChannelLinks";
import { Eyebrow } from "../../components/Eyebrow";
import { FaqSection } from "../../components/FaqSection";
import { SiteFooter } from "../../components/SiteFooter";
import { HeroSignals } from "../../components/HeroSignals";
import { Icon } from "../../components/Icon";
import { MarkList } from "../../components/MarkList";
import { Page } from "../../components/Page";
import { Section } from "../../components/Section";
import { SectionHeader } from "../../components/SectionHeader";
import { ResultsCaption } from "../../components/ResultsCaption";
import { Stat } from "../../components/Stat";
import { ContactCta } from "../../components/ContactCta";
import { Steps } from "../../components/Steps";
import { SiteNav } from "../../components/SiteNav";
import { Button } from "../../components/Button";
import { iconTextPoints, WhyMeSection } from "../../components/WhyMeSection";
import { formatPostDate, getLatestPostsOrDefault, getPostPath } from "../../lib/blog/posts";
import { writingChannelLinks } from "../../lib/brand";
import { getDictionary } from "../../lib/i18n/dictionary";
import { getLocaleConfig, type Locale } from "../../lib/i18n/locales";
import { isPagePublished, pagePathOrDefault } from "../../lib/i18n/pages";
import { createLookup } from "../../lib/lookup";
import { clientLogoSignals, PHP_RUSSIA_LOGO } from "../../lib/proof";
import type {
  CaseMetricIconId,
  FitGroupId,
  HeroMetricId,
  HomeContent,
  StageId,
  TrustPointId
} from "./home-content";
import { buildHomeStructuredData } from "./home-seo";
import styles from "./HomeView.module.css";


// The design side of each item: which icon it carries. Copy comes from the
// locale's content; these stay the same in every locale.
const heroMetricIcon = createLookup<HeroMetricId, LucideIcon>({
  speed: Zap,
  quality: Bug,
  predictability: TrendingUp
});
const stageIcon = createLookup<StageId, LucideIcon>({ early: Rocket, growth: TrendingUp, scale: Layers });
const trustPointIcon = createLookup<TrustPointId, LucideIcon>({
  experience: Calendar,
  leadership: Users,
  mvp: Rocket,
  scale: TrendingUp,
  writing: BookOpen
});
const caseMetricIcon = createLookup<CaseMetricIconId, LucideIcon>({
  predictable: TrendingUp,
  nps: Smile,
  throughput: Gauge,
  stable: ShieldCheck
});
const fitGroupStyle = createLookup<FitGroupId, { icon: LucideIcon; kind: "check" | "x" }>({
  fit: { icon: Target, kind: "check" },
  notFit: { icon: Ban, kind: "x" }
});



type SectionProps = {
  locale: Locale;
  content: HomeContent;
};

function HeroSection({ locale, content: { hero } }: SectionProps) {
  const signals = [...clientLogoSignals, { label: hero.phpRussiaLabel, ...PHP_RUSSIA_LOGO }];
  return (
    <section className={styles.hero}>
      <Eyebrow>{hero.eyebrow}</Eyebrow>
      <div className={styles.heroLayout}>
        <div>
          <h1>{hero.headline}</h1>
          <HeroSignals locale={locale} signals={signals} className={styles.heroSignals} />
        </div>
        <div className={styles.heroSecondary}>
          <p className={styles.heroLead}>{hero.lead}</p>
          <p className={styles.heroText}>{hero.text}</p>
          <div className={styles.heroActions}>
            <Button
              href={hero.primaryCta.href}
              target="_blank"
              rel="noreferrer"
              eventName="cta_click"
              payload={{ location: "hero" }}
            >
              {hero.primaryCta.label}
            </Button>
            <Button variant="secondary" href="#process">
              {hero.secondaryCtaLabel}
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.heroProof}>
        <p className={styles.heroCredibility}>{hero.credibility}</p>
        <ul className={styles.heroStats} aria-label={hero.statsAriaLabel}>
          {hero.metrics.map((metric) => (
            <li key={metric.id}>
              <Stat figure={metric.figure} icon={heroMetricIcon(metric.id)} note={metric.note} label={metric.label} />
            </li>
          ))}
        </ul>
        <ResultsCaption locale={locale} />
      </div>
    </section>
  );
}

function ProblemSection({ content: { problem } }: SectionProps) {
  return (
    <Section id="problem">
      <SectionHeader title={problem.title} />
      <div className={styles.stageGrid}>
        {problem.stages.map((stage) => (
          <article key={stage.id} className={styles.stageItem}>
            <h3 className={styles.stageKicker}>
              <Icon icon={stageIcon(stage.id)} className={styles.stageKickerIcon} />
              {stage.title}
            </h3>
            <p className={styles.stageStatement}>{stage.closing}</p>
            <MarkList items={stage.points} className={styles.stageSymptoms} />
          </article>
        ))}
      </div>
      <div className={styles.pullQuote}>
        {problem.callout.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </Section>
  );
}

function ResultsSection({ content: { results } }: SectionProps) {
  return (
    <Section id="results">
      <SectionHeader title={results.title} intro={results.intro} />
      <div className={styles.stack}>
        {results.cases.map((study) => (
          <article key={study.title} className={styles.caseStudy}>
            <header className={styles.caseHeader}>
              <h3>{study.title}</h3>
              <p>{study.company}</p>
            </header>
            <div className={styles.caseMetrics}>
              {study.metrics.map((metric) =>
                "figure" in metric ? (
                  <Stat figure={metric.figure} label={metric.label} key={metric.label} />
                ) : (
                  <Stat icon={caseMetricIcon(metric.icon)} label={metric.label} key={metric.label} />
                )
              )}
            </div>
            <dl className={styles.caseDetails}>
              <div>
                <dt>{results.problemLabel}</dt>
                <dd>{study.problem.join(" · ")}</dd>
              </div>
              <div>
                <dt>{results.workLabel}</dt>
                <dd>{study.work.join(" · ")}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}

function TrustSection({ locale, content: { trust } }: SectionProps) {
  return (
    <WhyMeSection
      locale={locale}
      intro={trust.intro}
      points={iconTextPoints(trust.points, trustPointIcon)}
    />
  );
}

function ProcessSection({ content: { process } }: SectionProps) {
  return (
    <Section id="process">
      <SectionHeader title={process.title} />
      <Steps
        items={process.steps.map((step) => ({
          title: step.title,
          body: (
            <>
              <p className={styles.stepResult}>
                <span className={styles.stepResultLabel}>{process.outputLabel}</span> {step.output}
              </p>
              <MarkList items={step.points} className={styles.stepPoints} />
            </>
          )
        }))}
      />
      <div className={styles.pullQuote}>
        <p>{process.note}</p>
      </div>
    </Section>
  );
}

function FitSection({ content: { fit } }: SectionProps) {
  return (
    <Section id="fit">
      <SectionHeader title={fit.title} intro={fit.intro} />
      <div className={styles.fitGrid}>
        {fit.groups.map((group) => {
          const { icon, kind } = fitGroupStyle(group.id);
          return (
            <article key={group.id} className={styles.fitCard}>
              <h3 className={styles.cardHeading}>
                <Icon icon={icon} className={styles.cardHeadingIcon} />
                {group.title}
              </h3>
              <MarkList items={group.points} kind={kind} />
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function SpecializationSection({ locale, content: { specializations } }: SectionProps) {
  const { untranslated } = getDictionary(locale);
  return (
    <Section>
      <SectionHeader title={specializations.title} intro={specializations.intro} />
      <div className={styles.specializationGrid}>
        {specializations.links.map((link) => (
          <Link
            key={link.target}
            href={pagePathOrDefault(locale, link.target)}
            className={styles.specializationCard}
          >
            <span className={styles.specializationTitle}>{link.title}</span>
            {/* The note stays inside the description, so the card keeps its two
                rows and the arrow stays centred across them. */}
            <span className={styles.specializationDescription}>
              {link.description}
              {isPagePublished(locale, link.target) ? null : (
                <span className={styles.untranslatedNote}>{untranslated.pageNote}</span>
              )}
            </span>
            <Icon icon={ArrowRight} className={styles.specializationArrow} />
          </Link>
        ))}
      </div>
    </Section>
  );
}

// Split a title before its last word, so the trailing arrow can be glued to
// that word and never wrap onto a line of its own.
function titleHead(title: string): string {
  return title.slice(0, title.lastIndexOf(" ") + 1);
}

function titleTail(title: string): string {
  return title.slice(title.lastIndexOf(" ") + 1);
}

function InsightsSection({ locale, content: { writing } }: SectionProps) {
  const { blog, untranslated } = getDictionary(locale);
  return (
    <Section id="insights">
      <div className={styles.writingHeader}>
        <SectionHeader title={writing.title} intro={writing.intro} introClassName={styles.writingIntro} />
        <Link href={pagePathOrDefault(locale, "blog")} className={styles.allPostsLink}>
          {writing.allPostsLabel}
          {isPagePublished(locale, "blog") ? null : ` (${untranslated.linkNote})`}
          <Icon icon={ArrowRight} className={styles.allPostsArrow} />
        </Link>
      </div>
      <ul className={styles.latestPosts}>
        {getLatestPostsOrDefault(locale, 3).map((post) => (
          <li key={post.slug} className={styles.latestPostItem}>
            <Link href={getPostPath(post.slug)} className={styles.latestPost}>
              <span className={styles.latestPostMeta}>
                <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt, locale)}</time> ·{" "}
                {blog.readingTime(post.readingMinutes)}
              </span>
              <span
                className={styles.latestPostTitle}
                lang={post.locale === locale ? undefined : getLocaleConfig(post.locale).htmlLang}
              >
                {titleHead(post.title)}
                <span className={styles.titleTail}>
                  {titleTail(post.title)}
                  <Icon icon={ArrowRight} className={styles.latestPostArrow} />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <ChannelLinks items={writingChannelLinks} ariaLabel={writing.channelsAriaLabel} />
    </Section>
  );
}

function FinalCtaSection({ content: { finalCta } }: SectionProps) {
  return <ContactCta cta={finalCta} location="final" />;
}

// The home page, the same in every locale; only `content` differs.
export function HomeView({ locale, content }: SectionProps) {
  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildHomeStructuredData(locale, content)) }}
      />
      <SiteNav locale={locale} page="home" />
      <HeroSection locale={locale} content={content} />
      <ProblemSection locale={locale} content={content} />
      <TrustSection locale={locale} content={content} />
      <ResultsSection locale={locale} content={content} />
      <ProcessSection locale={locale} content={content} />
      <FitSection locale={locale} content={content} />
      <SpecializationSection locale={locale} content={content} />
      <InsightsSection locale={locale} content={content} />
      <FaqSection locale={locale} items={content.faq} />
      <FinalCtaSection locale={locale} content={content} />
      <SiteFooter locale={locale} />
    </Page>
  );
}
