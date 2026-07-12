import { TopNavigation } from "./TopNavigation";
import { siteNavigationItems } from "../lib/navigation";

// Cross-page site navigation (Home / Blog / Yii2 / AI vibecoding) used by the
// content pages that share one nav set — privacy + the blog posts. Landing pages
// pass their own in-page section anchors to TopNavigation directly, and the blog
// index drops its own self-link, so those keep using TopNavigation with explicit
// items instead of this wrapper.
export function SiteNav() {
  return <TopNavigation items={siteNavigationItems} ariaLabel="Site navigation" />;
}
