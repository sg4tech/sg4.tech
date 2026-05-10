import type { ReactNode } from "react";

export type OgCardProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  footer: string;
  logoSrc?: string;
};

const LOGO_SIZE = 96;

export function OgCard({ eyebrow, title, subtitle, footer, logoSrc }: OgCardProps): ReactNode {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 96px",
        background: "#0a0a0a",
        color: "#ffffff",
        fontFamily: "sans-serif"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.18em",
            color: "#9a9a9a"
          }}
        >
          {eyebrow}
        </span>
        {logoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logoSrc} alt="" width={LOGO_SIZE} height={LOGO_SIZE} />
        ) : null}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.1,
            fontWeight: 700,
            letterSpacing: "-0.02em"
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            lineHeight: 1.3,
            color: "#cfcfcf"
          }}
        >
          {subtitle}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "#9a9a9a",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span style={{ display: "flex" }}>{footer}</span>
        <span style={{ display: "flex", color: "#ffffff" }}>sg4.tech</span>
      </div>
    </div>
  );
}
