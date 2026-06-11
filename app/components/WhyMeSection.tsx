import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { VICTOR_NAME, VICTOR_PHOTO_PATH, VICTOR_ROLE_LINE } from "../lib/brand";
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

type WhyMeSectionProps = {
  // Per-landing pitch. The heading ("Why me") and the identity card (photo,
  // name, role) are fixed here so every landing presents the founder
  // identically — only the intro and the proof points differ.
  intro: ReactNode;
  introClassName?: string;
  points: WhyMePoint[];
};

export function WhyMeSection({ intro, introClassName, points }: WhyMeSectionProps) {
  return (
    <Section id="why-me">
      <SectionHeader title="Why me" intro={intro} introClassName={introClassName} />
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
          <p className={landing.profileRole}>{VICTOR_ROLE_LINE}</p>
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
