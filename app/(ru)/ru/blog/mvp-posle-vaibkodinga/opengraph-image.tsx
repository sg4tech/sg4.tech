import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Ваш MVP после вайбкодинга перестал выходить в релиз. Так рано или поздно бывает с любым кодом джунов. Виктор Демин";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("mvp-posle-vaibkodinga", {
    eyebrow: "AI-вайбкодинг",
    title: "MVP после вайбкодинга перестал выходить в релиз",
    subtitle: "Управляйте ИИ как джуном: правила, ревью, тесты, CI и мониторинг."
  });
}
