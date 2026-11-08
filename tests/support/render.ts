import { createElement, type ComponentType } from "react";
import { renderToStaticMarkup } from "react-dom/server";

// Renders a server view to the HTML a visitor receives, so tests assert on
// rendered output instead of on where a string sits in the source tree.
export function renderView<P extends object>(view: ComponentType<P>, props: P): string {
  return renderToStaticMarkup(createElement(view, props));
}
