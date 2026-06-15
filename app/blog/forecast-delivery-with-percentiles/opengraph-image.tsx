import { ImageResponse } from "next/og";
import { OgCard } from "../../_og/Card";
import { loadOgFonts } from "../../_og/fonts";
import { loadLogoDataUrl } from "../../_og/logo";

export const dynamic = "force-static";
export const alt =
  "Average lead time is lying to you — how to forecast delivery with percentiles, by Victor Demin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [logoSrc, fonts] = await Promise.all([loadLogoDataUrl(), loadOgFonts()]);

  return new ImageResponse(
    (
      <OgCard
        eyebrow="Engineering delivery"
        title="Average lead time is lying to you"
        subtitle="Forecast delivery with median, spread, and p95 percentiles — not a point estimate."
        footer="Victor Demin · 7 min read"
        logoSrc={logoSrc}
      />
    ),
    { ...size, fonts }
  );
}
