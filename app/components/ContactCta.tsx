import type { ReactNode } from "react";
import { StatementCta } from "./StatementCta";

// The closing "write me" block of a landing, in its locale's words.
export type ContactCtaContent = {
  heading: ReactNode;
  text: ReactNode;
  label: string;
  /** Telegram deep link; its start parameter attributes the conversation. */
  href: string;
};

type ContactCtaProps = {
  cta: ContactCtaContent;
  /** Analytics location of the click, e.g. "final" or "yii2_final". */
  location: string;
};

// Every landing ends with the same contact action: the ember statement block,
// opening Telegram in a new tab and reporting cta_click with its location.
export function ContactCta({ cta, location }: ContactCtaProps) {
  return (
    <StatementCta
      id="final-cta"
      heading={cta.heading}
      text={cta.text}
      primary={{
        href: cta.href,
        label: cta.label,
        target: "_blank",
        rel: "noreferrer",
        eventName: "cta_click",
        payload: { location }
      }}
    />
  );
}
