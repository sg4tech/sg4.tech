import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { VICTOR_NAME, VICTOR_PHOTO_PATH } from "../lib/brand";
import { getDictionary } from "../lib/i18n/dictionary";
import type { Locale } from "../lib/i18n/locales";
import landing from "../styles/landing.module.css";
import { Icon } from "./Icon";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

// One proof point in the "Why me" list. The component owns the <li> and the
// <Icon> so callers can't produce invalid `ul > div` markup — they supply the
// icon plus freeform `content` (a <span> for plain text, a <div> when the point
// carries metric chips or links). `id` is a stable React key, named `id` rather
// than `key` to avoid clashing with React's reserved prop.
export type WhyMePoint = {
  id: string;
  icon: LucideIcon;
  content: ReactNode;
};

// Proof points that are plain text: each item's icon comes from the view's
// id → icon map, the copy from the locale's content.
export function iconTextPoints<Id extends string>(
  items: ReadonlyArray<{ id: Id; text: ReactNode }>,
  iconOf: (id: Id) => LucideIcon
): WhyMePoint[] {
  return items.map((item) => ({ id: item.id, icon: iconOf(item.id), content: <span>{item.text}</span> }));
}

type WhyMeSectionProps = {
  locale: Locale;
  // Per-landing pitch. The heading ("Why me") and the identity card (photo,
  // name, role) are fixed here so every landing presents the founder
  // identically — only the intro and the proof points differ.
  intro: ReactNode;
  introClassName?: string;
  points: WhyMePoint[];
};

export function WhyMeSection({ locale, intro, introClassName, points }: WhyMeSectionProps) {
  const { whyMe } = getDictionary(locale);
  return (
    <Section id="why-me">
      <SectionHeader title={whyMe.heading} intro={intro} introClassName={introClassName} />
      <div className={`${landing.whyGrid} ${landing.whySurface}`}>
        <div className={landing.profileCard}>
          <Image
            src={VICTOR_PHOTO_PATH}
            alt={VICTOR_NAME}
            width={120}
            height={120}
            className={landing.profilePhoto}
            unoptimized
          />
          <p className={landing.profileName}>{VICTOR_NAME}</p>
          <p className={landing.profileRole}>{whyMe.roleLine}</p>
        </div>
        <div className={landing.profileBody}>
          <ul className={landing.iconList}>
            {points.map((point) => (
              <li key={point.id}>
                <Icon icon={point.icon} className={landing.cardIcon} />
                {point.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
