import type { ReactNode } from "react";
import { FaqItem } from "./FaqItem";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import styles from "./FaqSection.module.css";

type FaqItemData = {
  question: string;
  // Plain-text answer used for FAQPage JSON-LD by callers — kept full and
  // dense so AI engines and Google Rich Results get a clean citable string.
  answer: string;
  // Optional rich rendering for human readers. When present, FaqItem
  // renders this instead of the plain `answer`; the schema text is
  // unchanged either way.
  answerNode?: ReactNode;
};

type FaqSectionProps = {
  items: ReadonlyArray<FaqItemData>;
  /**
   * Optional class applied to the wrapper div around the FAQ header + list.
   * Pages that render FAQ inside a narrower reading column (e.g., long-form
   * blog articles) pass a class here to constrain both the "FAQ" heading
   * and the list together — keeping them on the same axis. Without it the
   * wrapper still renders, just with no class, so the DOM shape is stable
   * across callers (the previous shape conditionally rendered the wrapper,
   * which made the prop quietly control DOM structure).
   */
  contentWrapperClassName?: string;
};

export function FaqSection({ items, contentWrapperClassName }: FaqSectionProps) {
  return (
    <Section id="faq" aria-labelledby="faq-title">
      <div className={contentWrapperClassName}>
        <SectionHeader title="FAQ" id="faq-title" />
        <div className={styles.faqList}>
          {items.map((item) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answerNode ?? item.answer}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
