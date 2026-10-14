import { ArrowRight, MapPin, UserPlus, Users } from 'lucide-react';
import { Reveal } from '../animations/Reveal';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { pricing } from '../../data/pricing';

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="One simple plan. Room to grow."
            description={`Try your map free for ${pricing.trialDays} days, then pay monthly for the seats you need.`}
          />
        </Reveal>

        <Reveal index={1} className="mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-brand-600 bg-surface shadow-card-lg">
            <div className="border-b border-border bg-brand-50 p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-600">
                <MapPin className="size-5" aria-hidden="true" />
                {pricing.trialDays}-day free trial
              </span>
              <h3 className="mt-3 text-2xl font-bold text-ink-900">
                Start with your own map
              </h3>
              <p className="mt-2 text-sm text-ink-500">
                Get {pricing.trialDays} days free to try your map before the
                monthly subscription begins.
              </p>
            </div>

            <div className="grid gap-8 p-6 sm:grid-cols-2 sm:p-8">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700">
                  <Users className="size-5 text-brand-600" aria-hidden="true" />
                  After your free trial
                </p>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-ink-900">
                    £{pricing.monthlyPrice}
                  </span>
                  <span className="text-sm text-ink-500"> / month</span>
                </p>
                <p className="mt-2 text-sm text-ink-500">
                  Includes {pricing.includedSeats} seats.
                </p>
              </div>

              <div className="border-t border-border pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700">
                  <UserPlus className="size-5 text-brand-600" aria-hidden="true" />
                  Need more seats?
                </p>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-ink-900">
                    +£{pricing.additionalSeatMonthlyPrice}
                  </span>
                  <span className="text-sm text-ink-500"> / seat / month</span>
                </p>
                <p className="mt-2 text-sm text-ink-500">
                  For each additional seat beyond the first {pricing.includedSeats}.
                </p>
              </div>
            </div>

            <div className="border-t border-border p-6 text-center sm:p-8">
              <Button
                href="#cta"
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="size-4" aria-hidden="true" />}
              >
                Request a Demo
              </Button>
              <p className="mt-3 text-sm text-ink-500">
                See how LGS works for your organisation.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
