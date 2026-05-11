type BrandIconProps = {
  label: string;
  path: string;
  className?: string;
};

export function BrandIcon({ label, path, className }: BrandIconProps) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <title>{label}</title>
        <path d={path} fill="currentColor" />
      </svg>
    </span>
  );
}
