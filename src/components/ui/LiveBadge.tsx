import { cn } from '../../lib/utils';

/** Small pulsing "LIVE" indicator reused across dashboard-style cards. */
export function LiveBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-xs font-semibold text-success-500',
        className,
      )}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-success-500 opacity-75" />
        <span className="relative inline-flex size-1.5 rounded-full bg-success-500" />
      </span>
      LIVE
    </span>
  );
}
