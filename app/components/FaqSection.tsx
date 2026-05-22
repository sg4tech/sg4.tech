import { FaqItem } from "./FaqItem";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import styles from "./FaqSection.module.css";

type FaqItemData = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: ReadonlyArray<FaqItemData>;
  /**
   * Optional class applied to a wrapper div around the FAQ header + list.
   * Pages that render FAQ inside a narrower reading column (e.g.,
   * long-form blog articles) pass a class here to constrain both the
   * "FAQ" heading and the list together — keeping them on the same axis.
   * Without this, the heading would stay full Section width while only
   * the list narrowed, breaking visual alignment. Other pages where FAQ
   * runs full-width by design (homepage, landings) simply omit this prop.
   */
  innerClassName?: string;
};

export function FaqSection({ items, innerClassName }: FaqSectionProps) {
  const content = (
    <>
      <SectionHeader title="FAQ" id="faq-title" />
      <div className={styles.faqList}>
        {items.map((item) => (
          <FaqItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>
    </>
  );
  return (
    <Section id="faq" aria-labelledby="faq-title">
      {innerClassName ? <div className={innerClassName}>{content}</div> : content}
    </Section>
  );
}
