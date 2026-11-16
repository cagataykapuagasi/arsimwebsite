interface Props {
  className?: string;
}

export function GrilleIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="6" y="6" width="36" height="36" rx="3" />
      <path d="M12 14h24M12 20h24M12 26h24M12 32h24" />
    </svg>
  );
}
