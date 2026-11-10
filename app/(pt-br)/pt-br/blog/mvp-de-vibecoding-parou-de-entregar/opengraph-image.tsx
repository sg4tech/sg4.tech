import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Seu MVP feito com vibecoding parou de sair em produção, como todo código escrito por juniores antes dele, por Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("mvp-de-vibecoding-parou-de-entregar", {
    eyebrow: "Vibecoding com IA",
    title: "Seu MVP de vibecoding travou",
    subtitle: "Gerencie a IA como um desenvolvedor júnior: convenções, revisão obrigatória, testes, CI, monitoramento."
  });
}
