// RSS 2.0 serialization. Knows the format, not the content: callers map their
// own data to RssChannel / RssItem.

export type RssChannel = {
  title: string;
  link: string;
  description: string;
  language: string;
  /** The feed's own published URL, emitted as atom:link rel="self". */
  selfUrl: string;
  lastBuildDate?: Date;
};

export type RssItem = {
  title: string;
  /** Also used as the permalink guid. */
  link: string;
  pubDate: Date;
  description: string;
};

// "&" goes first so the entities added by the later steps are not escaped again.
export function escapeXml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

// RSS dates are RFC 822; toUTCString() produces exactly that form.
function renderItem(item: RssItem): string {
  return [
    "    <item>",
    `      <title>${escapeXml(item.title)}</title>`,
    `      <link>${escapeXml(item.link)}</link>`,
    `      <guid isPermaLink="true">${escapeXml(item.link)}</guid>`,
    `      <pubDate>${item.pubDate.toUTCString()}</pubDate>`,
    `      <description>${escapeXml(item.description)}</description>`,
    "    </item>"
  ].join("\n");
}

export function renderRss(channel: RssChannel, items: ReadonlyArray<RssItem>): string {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${escapeXml(channel.title)}</title>`,
    `    <link>${escapeXml(channel.link)}</link>`,
    `    <description>${escapeXml(channel.description)}</description>`,
    `    <language>${escapeXml(channel.language)}</language>`,
    ...(channel.lastBuildDate ? [`    <lastBuildDate>${channel.lastBuildDate.toUTCString()}</lastBuildDate>`] : []),
    `    <atom:link href="${escapeXml(channel.selfUrl)}" rel="self" type="application/rss+xml"/>`,
    ...items.map(renderItem),
    "  </channel>",
    "</rss>",
    ""
  ].join("\n");
}
