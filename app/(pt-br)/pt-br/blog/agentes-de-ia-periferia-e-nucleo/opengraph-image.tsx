import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Agentes de IA no código: a periferia para eles, o núcleo para as pessoas. Por Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("agentes-de-ia-periferia-e-nucleo", {
    eyebrow: "Agentes de IA",
    title: "A periferia fica com eles",
    subtitle: "O núcleo fica com as pessoas: brilhantes na rotina, perigosos onde um erro custa dinheiro e usuários."
  });
}
