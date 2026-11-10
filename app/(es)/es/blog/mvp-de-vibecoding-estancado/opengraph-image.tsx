import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Tu MVP de vibecoding ha dejado de salir a producción, como todo código escrito por juniors antes que él. Por Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("mvp-de-vibecoding-estancado", {
    eyebrow: "Vibecoding con IA",
    title: "Tu MVP de vibecoding ha dejado de salir a producción",
    subtitle: "Gestiona la IA como a un desarrollador junior: convenciones, revisión, tests, CI y monitoreo."
  });
}
