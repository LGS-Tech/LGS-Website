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
            Live coordination for staff and responders
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">
            Complex problems.{' '}
            <span className="text-brand-600">Made simple</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-500">
            Stay informed live — see every case clearly, the moment it matters.
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

      <div className="relative my-5 h-48 overflow-hidden rounded-2xl bg-surface-subtle sm:h-56">
        <img
          src="/demo-map.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-900/35 via-transparent to-ink-900/10"
        />

        <MapPin
          className="absolute top-[22%] left-[18%] size-5 animate-float text-brand-600 drop-shadow"
          style={{ animationDelay: '0s' }}
          aria-hidden="true"
        />
        <MapPin
          className="absolute top-[40%] right-[22%] size-5 animate-float text-sky-600 drop-shadow"
          style={{ animationDelay: '0.8s' }}
          aria-hidden="true"
        />

        <div className="absolute bottom-[18%] left-1/2 z-10 -translate-x-1/2">
          <div className="relative flex flex-col items-center">
            <div className="mb-1 max-w-[11rem] rounded-2xl border border-border bg-surface px-3 py-2 shadow-card animate-float">
              <p className="text-[11px] font-semibold text-ink-900">
                {previewIncidents[0]?.category ?? 'Injury'} · LIVE
              </p>
              <p className="text-[10px] text-ink-500">
                {previewIncidents[0]?.title ?? 'Major Injury'}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="h-0 w-0 border-x-[6px] border-t-[8px] border-x-transparent border-t-surface drop-shadow"
            />
            <MapPin
              className="mt-0.5 size-5 text-success-500 drop-shadow"
              aria-hidden="true"
            />
          </div>
        </div>
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
