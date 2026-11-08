import { readdirSync, readFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { describe, expect, it } from "vitest";

// The production CSS merge orders stylesheets by import order, which no file
// controls on its own. Cascade layers make the order explicit instead: when a
// file passes its class to another component to override that component's
// styles, its stylesheet must sit in a later layer, whatever order the bundler
// picks. See docs/engineering-checks.md.
const root = process.cwd();
const appDir = join(root, "app");
const read = (path: string) => readFileSync(path, "utf8");

const LAYER_ORDER = ["base", "primitives", "components", "landing", "views"] as const;
type Layer = (typeof LAYER_ORDER)[number];
const ORDER_STATEMENT = `@layer ${LAYER_ORDER.join(", ")};`;

function files(dir: string, ext: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return files(path, ext);
    return entry.name.endsWith(ext) ? [path] : [];
  });
}

const rel = (path: string) => relative(root, path).split(sep).join("/");

function layerOf(cssPath: string): Layer {
  const css = read(cssPath);
  const blocks = [...css.matchAll(/^@layer ([a-z]+) \{/gm)].map((m) => m[1]);
  expect(blocks, `${rel(cssPath)} must wrap its rules in exactly one layer block`).toHaveLength(1);
  const layer = blocks[0] as Layer;
  expect(LAYER_ORDER).toContain(layer);
  return layer;
}

// Where each kind of stylesheet belongs.
function expectedLayer(path: string): Layer | ReadonlyArray<Layer> {
  const p = rel(path);
  if (p === "app/globals.css") return "base";
  if (p.startsWith("app/components/")) return ["primitives", "components"];
  if (p.startsWith("app/styles/")) return "landing";
  return "views";
}

const stylesheets = files(appDir, ".css");

// Opening JSX tags of capitalized components with their attribute text,
// scanned by hand so braces (arrow functions, nested objects) cannot end a tag early.
function jsxOpeningTags(source: string): Array<{ tag: string; attrs: string }> {
  const tags: Array<{ tag: string; attrs: string }> = [];
  for (const start of source.matchAll(/<([A-Z][A-Za-z]+)/g)) {
    const tag = start[1] ?? "";
    let depth = 0;
    let i = (start.index ?? 0) + start[0].length;
    for (; i < source.length; i++) {
      const ch = source.charAt(i);
      if (ch === "{") depth++;
      else if (ch === "}") depth--;
      else if (ch === ">" && depth === 0) break;
    }
    tags.push({ tag, attrs: source.slice((start.index ?? 0) + start[0].length, i) });
  }
  return tags;
}

describe("cascade layers", () => {
  it.each(stylesheets.map(rel))("%s declares the layer order first and sits in its layer", (path) => {
    const abs = join(root, path);
    const css = read(abs);
    const firstRule = css.replace(/\/\*[\s\S]*?\*\//g, "").trim().split("\n")[0];
    expect(firstRule).toBe(ORDER_STATEMENT);
    const expected = expectedLayer(abs);
    expect(Array.isArray(expected) ? expected : [expected]).toContain(layerOf(abs));
  });

  // A component that hands its own class to another component (className,
  // headingClassName, …) overrides that component's styles, so its layer must
  // come later — otherwise equal-specificity rules resolve by bundle order.
  it("puts every component that overrides another in a later layer", () => {
    const components = new Map(
      files(join(appDir, "components"), ".tsx").map((path) => [path.split(sep).at(-1)!.replace(".tsx", ""), path])
    );
    const cssOf = (name: string) => join(appDir, "components", `${name}.module.css`);
    const rank = (name: string) => LAYER_ORDER.indexOf(layerOf(cssOf(name)));
    const hasCss = (name: string) => stylesheets.includes(cssOf(name));

    const overrides: Array<[string, string]> = [];
    for (const [name, path] of components) {
      const source = read(path);
      for (const { tag, attrs } of jsxOpeningTags(source)) {
        if (components.has(tag) && /[cC]lassName=\{styles\./.test(attrs)) {
          overrides.push([name, tag]);
        }
      }
    }
    expect(overrides.length).toBeGreaterThan(0);

    for (const [source, target] of overrides) {
      if (!hasCss(source) || !hasCss(target)) continue;
      expect(rank(source), `${source} overrides ${target}`).toBeGreaterThan(rank(target));
    }
  });
});
