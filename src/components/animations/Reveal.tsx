import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger index, multiplied by a small delay so grids/lists animate in sequence. */
  index?: number;
  /** Vertical offset in pixels the content travels in from. */
  y?: number;
  delay?: number;
}

/**
 * Scroll-triggered fade/slide reveal. Animates once per element and is a
 * no-op (renders children immediately, no motion) when reduced motion is requested.
 */
export function Reveal({
  children,
  className,
  index = 0,
  y = 16,
  delay = 0,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : delay + index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
