import { Reveal } from '../animations/Reveal';
import { Container } from '../ui/Container';
import { features } from '../../data/features';

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 rounded-3xl border border-border bg-surface p-8 shadow-card sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              index={index}
              className="flex items-start gap-4"
            >
              <span className="shrink-0 text-ink-900">
                <feature.icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
