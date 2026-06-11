import type { ReactNode } from "react";
import Image from "next/image";
import { VICTOR_NAME, VICTOR_PHOTO_PATH, VICTOR_ROLE_LINE } from "../lib/brand";
import landing from "../styles/landing.module.css";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

type WhyMeSectionProps = {
  // Per-landing pitch. The heading ("Why me") and the identity card (photo,
  // name, role) are fixed here so every landing presents the founder
  // identically — only the intro and the proof points differ.
  intro: ReactNode;
  introClassName?: string;
  // The proof points: <li> elements rendered inside the shared icon list.
  // Kept as children (not a data array) because the bodies diverge in
  // structure — some carry metric chips and links, not just text — and a
  // data model would have to leak that markup back out.
  children: ReactNode;
};

export function WhyMeSection({ intro, introClassName, children }: WhyMeSectionProps) {
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
          <ul className={landing.iconList}>{children}</ul>
        </div>
      </div>
    </Section>
  );
}
