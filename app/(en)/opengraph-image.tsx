import { ImageResponse } from "next/og";
import { OgCard } from "../_og/Card";
import { loadOgFonts } from "../_og/fonts";
import { loadLogoDataUrl } from "../_og/logo";

export const dynamic = "force-static";
export const alt = "Victor Demin — Software engineering & technical leadership";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [logoSrc, fonts] = await Promise.all([loadLogoDataUrl(), loadOgFonts()]);

  return new ImageResponse(
    (
      <OgCard
        eyebrow="Software engineering & technical leadership"
        title="I build systems that work."
        subtitle="Software that ships on time and holds up in production"
        footer="Victor Demin"
        logoSrc={logoSrc}
      />
    ),
    { ...size, fonts }
  );
}
