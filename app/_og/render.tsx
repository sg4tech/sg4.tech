import { ImageResponse } from "next/og";
import { VICTOR_NAME } from "../lib/brand";
import { OgCard, type OgCardProps } from "./Card";
import { loadOgFonts } from "./fonts";
import { loadLogoDataUrl } from "./logo";

// Every route's opengraph-image assigns these to its `size` / `contentType`
// exports, so all cards share one size and format.
export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

// The footer defaults to the author's name; posts add their reading time.
type OgCardText = Omit<OgCardProps, "logoSrc" | "footer"> & { footer?: string };

// The text on a route's link-preview card, plus its alt text.
export type OgCardContent = OgCardText & {
  alt: string;
};

export async function renderOgCard(card: OgCardText): Promise<ImageResponse> {
  const [logoSrc, fonts] = await Promise.all([loadLogoDataUrl(), loadOgFonts()]);
  return new ImageResponse(
    <OgCard
      eyebrow={card.eyebrow}
      title={card.title}
      subtitle={card.subtitle}
      footer={card.footer ?? VICTOR_NAME}
      logoSrc={logoSrc}
    />,
    { ...ogImageSize, fonts }
  );
}
