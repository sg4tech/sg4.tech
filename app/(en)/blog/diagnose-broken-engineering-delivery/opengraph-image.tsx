import { ogImageContentType, ogImageSize } from "../../../_og/render";
import { renderPostOgCard } from "../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "How to diagnose where engineering delivery is actually broken — a metrics playbook by Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("diagnose-broken-engineering-delivery", {
    eyebrow: "Engineering delivery",
    title: "How to diagnose where engineering delivery is actually broken",
    subtitle: "T2M, Lead Time, Cycle Time, WIP, Little's Law — the operator playbook."
  });
}
