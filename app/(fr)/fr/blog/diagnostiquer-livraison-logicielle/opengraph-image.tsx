import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Diagnostiquer où vos livraisons bloquent vraiment : le guide des métriques de Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("diagnostiquer-livraison-logicielle", {
    eyebrow: "Livraison logicielle",
    title: "Diagnostiquer où vos livraisons bloquent vraiment",
    subtitle: "T2M, Lead Time, Cycle Time, WIP, loi de Little : le guide de terrain."
  });
}
