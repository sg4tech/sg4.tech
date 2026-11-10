import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Le lead time moyen vous trompe : prévoyez vos livraisons avec les percentiles, par Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("prevoir-livraisons-percentiles", {
    eyebrow: "Livraison logicielle",
    title: "Le lead time moyen vous trompe",
    subtitle: "Prévoyez vos livraisons avec la médiane, la dispersion et le p95, plutôt qu’avec une estimation ponctuelle."
  });
}
