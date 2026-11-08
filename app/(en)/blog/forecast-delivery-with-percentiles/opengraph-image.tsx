import { ogImageContentType, ogImageSize } from "../../../_og/render";
import { renderPostOgCard } from "../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Average lead time is lying to you — how to forecast delivery with percentiles, by Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("forecast-delivery-with-percentiles", {
    eyebrow: "Engineering delivery",
    title: "Average lead time is lying to you",
    subtitle: "Forecast delivery with median, spread, and p95 percentiles — not a point estimate."
  });
}
