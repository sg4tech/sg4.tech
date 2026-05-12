import type { LucideIcon } from "lucide-react";
import styles from "./Icon.module.css";

type IconProps = {
  icon: LucideIcon;
  className?: string;
};

export function Icon({ icon: IconComponent, className }: IconProps) {
  const classes = [styles.icon, className].filter(Boolean).join(" ");
  return (
    <IconComponent
      strokeWidth={1.6}
      aria-hidden="true"
      focusable={false}
      className={classes}
    />
  );
}
