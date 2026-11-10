import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Die durchschnittliche Lead Time täuscht: Liefertermine mit Perzentilen prognostizieren, von Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("lieferprognose-mit-perzentilen", {
    eyebrow: "Software-Delivery",
    title: "Die durchschnittliche Lead Time täuscht",
    subtitle: "Liefertermine mit Median, Streuung und p95 prognostizieren statt mit einer Punktschätzung."
  });
}
