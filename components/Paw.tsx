export function Paw({ size = 22, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <circle cx="7" cy="8" r="2.3" />
      <circle cx="12" cy="5.8" r="2.3" />
      <circle cx="17" cy="8" r="2.3" />
      <path d="M12 11c3.4 0 6 3.6 6 6.2 0 1.8-1.5 2.8-3.2 2.8-1.2 0-1.8-.6-2.8-.6s-1.6.6-2.8.6C7.5 20 6 19 6 17.2 6 14.6 8.6 11 12 11z" />
    </svg>
  );
}
