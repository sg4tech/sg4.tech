import styles from "./Icon.module.css";

type IconProps = {
  path: string;
  className?: string;
};

export function Icon({ path, className }: IconProps) {
  const classes = [styles.icon, className].filter(Boolean).join(" ");
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={classes}
    >
      <path d={path} />
    </svg>
  );
}
