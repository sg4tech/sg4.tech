import { TopNavigation } from "./TopNavigation";
import { siteNavigationItems } from "../lib/navigation";

type SiteNavProps = {
  // href of the page being shown; omit on pages that are not in the menu.
  current?: string;
};

// The one site menu, the same on every page.
export function SiteNav({ current }: SiteNavProps) {
  return <TopNavigation items={siteNavigationItems} ariaLabel="Site navigation" current={current} />;
}
