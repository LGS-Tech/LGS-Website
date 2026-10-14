import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import lgsLogo from '../../assets/lgs-logo.png';

const SPLASH_DURATION = 1900;

/**
 * Brief branded intro shown once on initial load. Purely decorative, so it's
 * skipped entirely when the user prefers reduced motion.
 */
export function Splash() {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(!shouldReduceMotion);

  useEffect(() => {
    if (shouldReduceMotion) return;

    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => setVisible(false), SPLASH_DURATION);

    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!visible) document.body.style.overflow = '';
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-surface"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          role="presentation"
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 45%, rgba(239,40,28,0.16), transparent 60%)',
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          />

          <svg className="absolute inset-0 h-full w-full opacity-60">
            <defs>
              <pattern
                id="splash-grid"
                width="36"
                height="36"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 36 0 L 0 0 0 36"
                  fill="none"
                  stroke="var(--color-border)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#splash-grid)" />
          </svg>

          <div className="relative flex flex-col items-center">
            <div className="relative flex size-24 items-center justify-center sm:size-28">
              {[0, 1, 2].map((ring) => (
                <motion.span
                  key={ring}
                  className="absolute inset-0 rounded-full border-2 border-brand-500/60"
                  initial={{ scale: 0.6, opacity: 0.8 }}
                  animate={{ scale: 2.3, opacity: 0 }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: ring * 0.6,
                    ease: 'easeOut',
                  }}
                />
              ))}
              <motion.img
                src={lgsLogo}
                alt=""
                className="relative size-14 sm:size-16"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'backOut' }}
              />
            </div>

            <motion.p
              className="mt-5 text-sm font-semibold tracking-[0.2em] text-ink-500 uppercase"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              LGS Tech
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
