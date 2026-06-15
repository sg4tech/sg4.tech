import { ImageResponse } from "next/og";
import { OgCard } from "../_og/Card";
import { loadOgFonts } from "../_og/fonts";
import { loadLogoDataUrl } from "../_og/logo";

export const dynamic = "force-static";
export const alt = "Blog — Essays on engineering delivery by Victor Demin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [logoSrc, fonts] = await Promise.all([loadLogoDataUrl(), loadOgFonts()]);

  return new ImageResponse(
    (
      <OgCard
        eyebrow="Blog"
        title="Essays on engineering delivery"
        subtitle="Long-form pieces on the systems behind predictable shipping."
        footer="Victor Demin"
        logoSrc={logoSrc}
      />
    ),
    { ...size, fonts }
  );
}
