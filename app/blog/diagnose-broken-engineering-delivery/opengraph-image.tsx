import { ImageResponse } from "next/og";
import { OgCard } from "../../_og/Card";
import { loadOgFonts } from "../../_og/fonts";
import { loadLogoDataUrl } from "../../_og/logo";

export const dynamic = "force-static";
export const alt =
  "How to diagnose where engineering delivery is actually broken — a metrics playbook by Victor Demin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [logoSrc, fonts] = await Promise.all([loadLogoDataUrl(), loadOgFonts()]);

  return new ImageResponse(
    (
      <OgCard
        eyebrow="ENGINEERING DELIVERY"
        title="How to diagnose where engineering delivery is actually broken"
        subtitle="T2M, Lead Time, Cycle Time, WIP, Little's Law — the operator playbook."
        footer="Victor Demin · 18 min read"
        logoSrc={logoSrc}
      />
    ),
    { ...size, fonts }
  );
}
