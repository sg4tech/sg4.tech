import type { ReactNode } from "react";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  title: ReactNode;
  id?: string;
  intro?: ReactNode;
  headingClassName?: string;
  introClassName?: string;
};

export function SectionHeader({
  title,
  id,
  intro,
  headingClassName,
  introClassName
}: SectionHeaderProps) {
  const headingClasses = [styles.heading, headingClassName].filter(Boolean).join(" ");
  const introClasses = [styles.intro, introClassName].filter(Boolean).join(" ");

  return (
    <>
      <h2 id={id} className={headingClasses}>
        {title}
      </h2>
      {intro ? <p className={introClasses}>{intro}</p> : null}
    </>
  );
}
