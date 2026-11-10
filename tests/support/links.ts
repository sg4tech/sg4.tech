// next/link drops the trailing slash outside a Next build (no next.config), so
// both spellings of a path count.
/** The first link to `path` in the page body (the menu has its own links). */
export function bodyLinkTo(html: string, path: string): string {
  const bare = path.replace(/\/$/, "");
  const body = html.split("</nav>").slice(1).join("</nav>");
  const links = body.split("<a ").slice(1).map((chunk) => chunk.split("</a>")[0] ?? "");
  return links.find((link) => link.includes(`href="${bare}"`) || link.includes(`href="${bare}/"`)) ?? "";
}
