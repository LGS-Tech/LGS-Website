import { ChevronsRight } from 'lucide-react';
import { Reveal } from '../animations/Reveal';
import { Container } from '../ui/Container';
import { LiveBadge } from '../ui/LiveBadge';
import { SectionHeading } from '../ui/SectionHeading';
import {
  dashboardStats,
  incidents,
  priorityStyles,
} from '../../data/incidents';

export function LiveDashboard() {
  return (
    <section id="dashboard" className="bg-surface-subtle py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Live Incident Dashboard"
            title="See every case, the moment it happens"
            description="A real-time view of active incidents across campus — status, priority, and response, all in one place."
          />
        </Reveal>

        <Reveal index={1}>
          <p className="mx-auto mt-4 w-fit rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-ink-500">
            Demo preview with representative sample data — not connected to a
            live incident feed.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {dashboardStats.map((stat, index) => (
            <Reveal key={stat.label} index={index}>
              <div className="rounded-2xl border border-border bg-surface p-5 text-center shadow-card transition-transform duration-200 hover:-translate-y-1">
                <p className="text-2xl font-bold text-ink-900">{stat.value}</p>
                <p className="mt-1 text-sm text-ink-500">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {incidents.map((incident, index) => (
            <Reveal key={incident.id} index={index}>
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-5 shadow-card transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <span className={`rounded-xl p-2.5 ${incident.colorClass}`}>
                    <incident.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-ink-900">
                        {incident.category}
                      </p>
                      <LiveBadge />
                    </div>
                    <p className="text-sm text-ink-500">
                      {incident.activeCases} active cases · {incident.title}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 flex-col items-end gap-1.5">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${priorityStyles[incident.priority]}`}
                  >
                    {incident.priority} Priority
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-500">
                    <ChevronsRight className="size-3.5" aria-hidden="true" />
                    {incident.status}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
