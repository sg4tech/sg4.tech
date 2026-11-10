import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Agents IA de code : la périphérie pour eux, le cœur pour les humains. Par Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("agents-ia-code-peripherie-coeur", {
    eyebrow: "Agents IA de code",
    title: "La périphérie pour l’agent",
    subtitle: "Le cœur pour les humains : brillants sur la routine, dangereux là où une erreur coûte de l’argent et des utilisateurs."
  });
}
