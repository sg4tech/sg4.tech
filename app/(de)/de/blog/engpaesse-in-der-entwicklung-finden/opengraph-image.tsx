import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "So finden Sie heraus, wo Ihre Software-Delivery wirklich hakt: ein Metrik-Leitfaden von Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("engpaesse-in-der-entwicklung-finden", {
    eyebrow: "Software-Delivery",
    title: "So finden Sie heraus, wo Ihre Software-Delivery wirklich hakt",
    subtitle: "T2M, Lead Time, Cycle Time, WIP, Little's Law: der Leitfaden aus der Praxis."
  });
}
