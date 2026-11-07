import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// Text inside the dark "Why me" panel on /ai-vibecoding must meet WCAG AA for
// small text. Colors are resolved from the real tokens in app/globals.css, so a
// token or rule change that drops contrast fails here instead of in review.

const root = process.cwd();
const read = (...parts: string[]) => readFileSync(join(root, ...parts), "utf8");

const WCAG_AA_SMALL_TEXT = 4.5;

type Rgba = { r: number; g: number; b: number; a: number };

const tokens = new Map<string, string>();
for (const match of read("app", "globals.css").matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
  const [, name, value] = match;
  if (name && value && !tokens.has(name)) tokens.set(name, value.trim());
}

function resolve(value: string): string {
  const ref = /^var\((--[\w-]+)\)$/.exec(value.trim());
  if (!ref?.[1]) return value.trim();
  const next = tokens.get(ref[1]);
  if (next === undefined) throw new Error(`Unknown token ${ref[1]}`);
  return resolve(next);
}

const toRgba = ([r = 0, g = 0, b = 0, a = 1]: number[]): Rgba => ({ r, g, b, a });

function parseHex(hex: string): Rgba {
  const full = hex.length === 3 ? [...hex].map((c) => c + c).join("") : hex;
  return toRgba([0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16)));
}

function parseColor(value: string): Rgba {
  const color = resolve(value);
  const hex = /^#([\da-f]{3}|[\da-f]{6})$/i.exec(color)?.[1];
  if (hex) return parseHex(hex);
  const rgba = /^rgba?\(([^)]+)\)$/.exec(color)?.[1];
  if (rgba) return toRgba(rgba.split(",").map((part) => Number(part.trim())));
  throw new Error(`Unsupported color ${color}`);
}

const over = (fg: Rgba, bg: Rgba): Rgba => ({
  r: fg.r * fg.a + bg.r * (1 - fg.a),
  g: fg.g * fg.a + bg.g * (1 - fg.a),
  b: fg.b * fg.a + bg.b * (1 - fg.a),
  a: 1
});

const channel = (c: number) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const luminance = ({ r, g, b }: Rgba) => 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);

function contrast(a: Rgba, b: Rgba): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return ((hi ?? 0) + 0.05) / ((lo ?? 0) + 0.05);
}

function ruleBody(css: string, selector: string): string {
  const body = css.split(`${selector} {`)[1]?.split("}")[0];
  if (body === undefined) throw new Error(`Missing rule ${selector}`);
  return body;
}

// Value of `property` in the rule, or undefined when the rule doesn't set it.
function declaration(css: string, selector: string, property: string): string | undefined {
  const declarations = ruleBody(css, selector).split(";").map((part) => part.split(":"));
  const match = declarations.find(([name]) => name?.trim() === property);
  return match?.slice(1).join(":").trim();
}

function requiredDeclaration(css: string, selector: string, property: string): string {
  const value = declaration(css, selector, property);
  if (value === undefined) throw new Error(`${selector} has no ${property}`);
  return value;
}

// The panel the chips sit on: `.whySurface` in the shared landing stylesheet.
const panel = parseColor(
  requiredDeclaration(read("app", "styles", "landing.module.css"), ".whySurface", "background")
);
const pageCss = read("app", "ai-vibecoding", "page.module.css");
const captionCss = read("app", "components", "ResultsCaption.module.css");

function textContrast(css: string, selector: string): number {
  const text = parseColor(requiredDeclaration(css, selector, "color"));
  const fill = declaration(css, selector, "background");
  const backdrop = fill ? over(parseColor(fill), panel) : panel;
  return contrast(over(text, backdrop), backdrop);
}

describe("/ai-vibecoding 'Why me' panel contrast", () => {
  it("sits on a dark panel", () => {
    expect(luminance(panel)).toBeLessThan(0.05);
  });

  it.each([
    ["page", ".outcomeChip", pageCss],
    ["page", ".outcomeChipCompany", pageCss],
    ["ResultsCaption", ".onDark", captionCss]
  ])("%s %s text passes WCAG AA on the dark panel", (_sheet, selector, css) => {
    expect(textContrast(css, selector)).toBeGreaterThanOrEqual(WCAG_AA_SMALL_TEXT);
  });

  it("renders the results caption in its dark-panel tone", () => {
    expect(read("app", "ai-vibecoding", "page.tsx")).toContain('<ResultsCaption tone="onDark" />');
  });
});
