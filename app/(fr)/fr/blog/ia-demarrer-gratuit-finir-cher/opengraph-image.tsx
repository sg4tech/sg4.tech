import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "L’IA a rendu le démarrage presque gratuit. Finir coûte toujours cher. Par Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("ia-demarrer-gratuit-finir-cher", {
    eyebrow: "Livraison assistée par l’IA",
    title: "L’IA a rendu le démarrage presque gratuit",
    subtitle: "Finir coûte toujours cher : files d’attente, limites de contexte et discipline du WIP pour les agents."
  });
}
