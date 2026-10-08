import { ImageResponse } from "next/og";
import { OgCard } from "../../_og/Card";
import { loadOgFonts } from "../../_og/fonts";
import { loadLogoDataUrl } from "../../_og/logo";

export const dynamic = "force-static";
export const alt =
  "Code entropy: how CI checks keep AI from piling up legacy. By Victor Demin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [logoSrc, fonts] = await Promise.all([loadLogoDataUrl(), loadOgFonts()]);

  return new ImageResponse(
    (
      <OgCard
        eyebrow="AI coding agents"
        title="Code entropy"
        subtitle="Seven levels of CI checks that stop AI from piling up legacy."
        footer="Victor Demin · 6 min read"
        logoSrc={logoSrc}
      />
    ),
    { ...size, fonts }
  );
}
