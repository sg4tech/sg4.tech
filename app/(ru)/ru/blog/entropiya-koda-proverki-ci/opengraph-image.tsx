import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt = "Энтропия кода: как проверки в CI не дают ИИ плодить легаси. Виктор Демин";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("entropiya-koda-proverki-ci", {
    eyebrow: "ИИ-агенты",
    title: "Энтропия кода",
    subtitle: "Семь уровней проверок в CI, которые не дают ИИ плодить легаси."
  });
}
