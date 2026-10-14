import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  Brain,
  CalendarClock,
  Crosshair,
  Radio,
  Search,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Counter } from '../animations/Counter';
import { Reveal } from '../animations/Reveal';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { LiveBadge } from '../ui/LiveBadge';

const insightCards = [
  {
    icon: Search,
    title: 'Detect hidden patterns',
    description:
      'AI spots recurring faults across your tickets before they become bigger problems',
  },
  {
    icon: Brain,
    title: 'Predict what happens next',
    description:
      'Every ticket makes LGS smarter, helping identify potential failures before they happen',
  },
  {
    icon: Banknote,
    title: 'See the real cost',
    description:
      "Automated cost attribution reveals what recurring 'minor' issues are actually costing",
  },
];

export function AIInsights() {
  return (
    <section id="ai-insights" className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-brand-600 uppercase">
              AI-Powered Campus Safety Platform
            </p>
            <h2 className="text-3xl sm:text-4xl">
              Safety, powered by intelligence
            </h2>
            <p className="mt-5 text-lg text-ink-500">
              LGS continuously learns from your safety and maintenance data to
              detect recurring problems, predict failures, and uncover the true
              cost behind every issue.
            </p>
            <div className="mt-8">
              <Button
                href="#cta"
                size="lg"
                icon={<ArrowRight className="size-4" aria-hidden="true" />}
              >
                Click here for a demo
              </Button>
            </div>
          </Reveal>

          <Reveal index={1} y={24}>
            <AIInsightsPanel />
          </Reveal>
        </div>

        <Reveal className="mt-20 text-center">
          <p className="inline-flex items-center justify-center gap-2 text-sm font-bold tracking-[0.08em] text-brand-600 uppercase">
            <Crosshair className="size-4" aria-hidden="true" />
            See the problem, understand the pattern, prevent the next one.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {insightCards.map((card, index) => (
            <Reveal key={card.title} index={index}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7 text-center shadow-card transition-transform duration-200 hover:-translate-y-1">
                <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <card.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AIInsightsPanel() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="rounded-3xl border border-border bg-surface p-6 shadow-card-lg">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 uppercase">
          <Radio className="size-4" aria-hidden="true" />
          AI-Intelligence
        </span>
        <LiveBadge />
      </div>

      <div className="mt-5 border-t border-border pt-5">
        <p className="text-sm text-ink-700">
          Analyzing{' '}
          <Counter value={2481} className="font-semibold text-ink-900" /> campus
          tickets
        </p>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface-muted">
          <motion.div
            className="h-full rounded-full bg-brand-600"
            initial={{ width: shouldReduceMotion ? '72%' : '0%' }}
            whileInView={{ width: '72%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-brand-200 bg-brand-50 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-brand-600 uppercase">
              <AlertTriangle className="size-3.5" aria-hidden="true" />
              Pattern Detected
            </p>
            <p className="mt-2 text-sm font-bold text-ink-900">
              Main Lecture Theatre — Block A
            </p>
            <p className="text-sm text-ink-500">7 recurring incidents</p>
            <p className="mt-1 text-sm font-semibold text-brand-600">
              ↑ 42% increase this month
            </p>
          </div>
          <div className="relative grid size-16 shrink-0 place-items-center rounded-full bg-[conic-gradient(var(--color-brand-600)_94%,var(--color-brand-100)_0)]">
            <div className="grid size-12 place-items-center rounded-full bg-surface text-sm font-bold text-ink-900">
              <Counter value={94} suffix="%" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-border p-4">
          <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-ink-500 uppercase">
            <CalendarClock className="size-3.5" aria-hidden="true" />
            Predicted Failure
          </p>
          <p className="mt-2 text-xl font-bold text-ink-900">12 days</p>
        </div>
        <div className="rounded-2xl border border-border p-4">
          <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-ink-500 uppercase">
            <Banknote className="size-3.5" aria-hidden="true" />
            Est. Avoided Cost
          </p>
          <p className="mt-2 text-xl font-bold text-ink-900">£700</p>
        </div>
      </div>

      <Button href="#dashboard" variant="outline" className="mt-4 w-full">
        View AI insights
      </Button>
    </div>
  );
}
