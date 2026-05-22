import type { ReactNode } from "react";
import styles from "./SectionHeader.module.css";

// `level` defaults to "h2" because SectionHeader is primarily used to title
// sub-sections inside a page (problem, solution, results, etc.). Pass "h1"
// only when the SectionHeader is rendering the page's top-level heading —
// e.g., the /blog index where there's no Hero h1 above it. Every page should
// have exactly one h1 for SEO; sections under it use h2.
type SectionHeaderProps = {
  title: ReactNode;
  id?: string;
  intro?: ReactNode;
  level?: "h1" | "h2";
  headingClassName?: string;
  introClassName?: string;
};

export function SectionHeader({
  title,
  id,
  intro,
  level = "h2",
  headingClassName,
  introClassName
}: SectionHeaderProps) {
  const headingClasses = [styles.heading, headingClassName].filter(Boolean).join(" ");
  const introClasses = [styles.intro, introClassName].filter(Boolean).join(" ");
  const Heading = level;

  return (
    <>
      <Heading id={id} className={headingClasses}>
        {title}
      </Heading>
      {intro ? <p className={introClasses}>{intro}</p> : null}
    </>
  );
}
