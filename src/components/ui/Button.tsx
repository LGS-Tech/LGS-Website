import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import { cn } from '../../lib/utils';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[color,background-color,transform] duration-150 active:scale-[0.98] hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100';

const sizeStyles = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
} as const;

const variantStyles = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-card',
  outline: 'border border-brand-600 text-brand-600 hover:bg-brand-50',
  ghost: 'text-ink-700 hover:bg-surface-muted',
} as const;

type Variant = keyof typeof variantStyles;
type Size = keyof typeof sizeStyles;

interface SharedProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * Shared CTA button. Renders an anchor when `href` is provided, otherwise a button.
 * Hover/tap feedback is plain CSS (transform/color only) so it stays cheap and
 * automatically respects prefers-reduced-motion via the motion-reduce: variants.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className,
  );

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
        {icon}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
      {icon}
    </button>
  );
}
