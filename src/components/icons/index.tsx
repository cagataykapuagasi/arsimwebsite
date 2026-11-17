import type { ReactNode } from "react";

interface Props {
  className?: string;
}

function BaseIcon({ className, children }: Props & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function HouseIcon({ className }: Props) {
  return (
    <BaseIcon className={className}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9v11h14V9" />
      <path d="M10 20v-6h4v6" />
    </BaseIcon>
  );
}

export function DrywallIcon({ className }: Props) {
  return (
    <BaseIcon className={className}>
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M9 3v18M15 3v18" />
      <path d="M5.5 7h1M5.5 12h1M5.5 17h1M17.5 7h1M17.5 12h1M17.5 17h1" />
    </BaseIcon>
  );
}

export function FloorIcon({ className }: Props) {
  return (
    <BaseIcon className={className}>
      <path d="M3 7h18M3 12h18M3 17h18" />
      <path d="M9 3v4M16 7v5M7 12v5M14 17v4" />
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
    </BaseIcon>
  );
}

export function WallpaperIcon({ className }: Props) {
  return (
    <BaseIcon className={className}>
      <rect x="3" y="3" width="13" height="6" rx="1.5" />
      <path d="M16 6h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-7v3" />
      <rect x="10" y="15" width="4" height="6" rx="1" />
    </BaseIcon>
  );
}
