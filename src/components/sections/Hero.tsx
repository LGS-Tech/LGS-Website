import {
  ArrowRight,
  Building2,
  MapPin,
  Radio,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { Reveal } from '../animations/Reveal';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { LiveBadge } from '../ui/LiveBadge';
import { dashboardStats, incidents } from '../../data/incidents';
import { SENTINEL_APP_URL } from '../../lib/appUrl';

const previewIncidents = [incidents[1], incidents[2]];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-brand-50),transparent_60%)]"
      />

      <Container className="relative grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-brand-600 uppercase">
            <Sparkles className="size-3.5" aria-hidden="true" />
            AI-Powered Campus Safety Platform
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">
            Be Prepared. <span className="text-brand-600">Stay Protected.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-500">
            Stay informed, find the safest route, and get the help you need
            during an emergency.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              href={SENTINEL_APP_URL}
              size="lg"
              icon={<ArrowRight className="size-4" aria-hidden="true" />}
            >
              Get Started
            </Button>
            <Button href="#pricing" size="lg" variant="outline">
              Explore Pricing
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href="#dashboard"
              className="group flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 shadow-card transition-colors hover:border-brand-200"
            >
              <span className="rounded-lg bg-brand-50 p-2 text-brand-600">
                <TrendingUp className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-ink-700">
                Cases raised will be managed effectively and responded promptly
              </span>
            </a>
            <a
              href="#pricing"
              className="group flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 shadow-card transition-colors hover:border-brand-200"
            >
              <span className="rounded-lg bg-brand-50 p-2 text-brand-600">
                <Building2 className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-ink-700">
                30 days free, then simple monthly pricing for your team
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal index={1} y={24}>
          <HeroDashboardPreview />
        </Reveal>
      </Container>
    </section>
  );
}

function HeroDashboardPreview() {
  return (
    <div className="relative rounded-3xl border border-border bg-surface p-5 shadow-card-lg sm:p-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
          <Radio className="size-4 text-success-500" aria-hidden="true" />
          System Online
        </span>
        <span className="text-xs text-ink-300">
          Demo preview — not live data
        </span>
      </div>

      <div className="relative my-5 h-40 overflow-hidden rounded-2xl bg-surface-subtle">
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <pattern
              id="grid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <MapPin
          className="absolute top-6 left-10 size-5 animate-float text-brand-600"
          style={{ animationDelay: '0s' }}
          aria-hidden="true"
        />
        <MapPin
          className="absolute top-16 right-14 size-5 animate-float text-sky-600"
          style={{ animationDelay: '0.8s' }}
          aria-hidden="true"
        />
        <MapPin
          className="absolute bottom-6 left-1/2 size-5 -translate-x-1/2 animate-float text-success-500"
          style={{ animationDelay: '1.6s' }}
          aria-hidden="true"
        />
      </div>

      <div className="space-y-3">
        {previewIncidents.map((incident) => (
          <div
            key={incident.id}
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface p-3 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-card"
          >
            <div className="flex items-center gap-3">
              <span className={`rounded-lg p-2 ${incident.colorClass}`}>
                <incident.icon className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-900">
                  {incident.category}
                </p>
                <p className="text-xs text-ink-500">{incident.title}</p>
              </div>
            </div>
            <LiveBadge />
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-surface-subtle p-3 text-center">
        {dashboardStats.map((stat) => (
          <div key={stat.label}>
            <p className="text-sm font-bold text-ink-900 sm:text-base">
              {stat.value}
            </p>
            <p className="text-[11px] text-ink-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
