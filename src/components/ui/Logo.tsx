import { cn } from '../../lib/utils';
import lgsLogo from '../../assets/lgs-logo.png';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn('inline-flex items-center gap-2 text-ink-900', className)}
    >
      <img src={lgsLogo} alt="" width="28" height="28" className="size-7" />
      <span className="text-xl leading-none font-bold">
        LGS <span className="font-normal">tech</span>
      </span>
    </span>
  );
}
