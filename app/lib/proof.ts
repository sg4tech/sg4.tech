// One pill in a landing hero's credibility row: a client/event logo, a
// brand-icon link, or a plain label.
export type HeroSignal = {
  label: string;
  // A client/event logo (SVG in /public/logos). When present, the label is
  // hidden (the logo speaks for itself) unless `labelAfterLogo` is set.
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  // A brand-icon path (simple-icons) rendered via BrandIcon, shown with its
  // label — used for "wrote about this on <platform>" style signals.
  iconPath?: string;
  // Optional external link wrapping the whole pill.
  href?: string;
  labelAfterLogo?: boolean;
};

// Former employers shown as logos at the start of every landing's credibility
// row. Company names, so the same in every locale.
export const clientLogoSignals: ReadonlyArray<HeroSignal> = [
  { label: "Wowworks", logo: "/logos/wowworks.svg", logoWidth: 104, logoHeight: 30 },
  { label: "Skyeng", logo: "/logos/skyeng.svg", logoWidth: 185, logoHeight: 56 }
];

// The PHP Russia conference logo; the caller supplies the label in its locale.
export const PHP_RUSSIA_LOGO = { logo: "/logos/php-russia.svg", logoWidth: 24, logoHeight: 24, labelAfterLogo: true };
