import { CheckCircle2, Send } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { Reveal } from '../animations/Reveal';
import { Container } from '../ui/Container';

interface FormState {
  name: string;
  email: string;
  organisation: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialState: FormState = { name: '', email: '', organisation: '' };

/**
 * Demo-request form. This is a marketing prototype with no backend, so
 * submissions are validated client-side only and never leave the browser.
 */
export function CTA() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState) {
    const nextErrors: Partial<FormState> = {};
    if (!values.name.trim()) nextErrors.name = 'Enter your name.';
    if (!values.email.trim()) {
      nextErrors.email = 'Enter your work email.';
    } else if (!EMAIL_PATTERN.test(values.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!values.organisation.trim())
      nextErrors.organisation = 'Enter your organisation.';
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <section id="cta" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-ink-900 px-6 py-14 sm:px-12 sm:py-16">
            <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.12em] text-brand-400 uppercase">
                  Request a Demo
                </p>
                <h2 className="mt-3 text-3xl text-white sm:text-4xl">
                  See LGS protecting your campus, live.
                </h2>
                <p className="mt-4 text-base text-white/70">
                  Tell us a little about your organisation and our team will
                  walk you through the platform.
                </p>
              </div>

              <div className="rounded-2xl bg-surface p-6 shadow-card-lg sm:p-8">
                {submitted ? (
                  <div
                    role="status"
                    className="flex flex-col items-center py-6 text-center"
                  >
                    <CheckCircle2
                      className="size-10 text-success-500"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-lg font-semibold text-ink-900">
                      Demo form preview complete
                    </p>
                    <p className="mt-2 text-sm text-ink-500">
                      This is a design prototype with no backend, so nothing was
                      actually sent. In production this form would route to our
                      sales team.
                    </p>
                  </div>
                ) : (
                  <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label
                        htmlFor="cta-name"
                        className="text-sm font-medium text-ink-700"
                      >
                        Name
                      </label>
                      <input
                        id="cta-name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={(event) =>
                          setForm({ ...form, name: event.target.value })
                        }
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name ? 'cta-name-error' : undefined
                        }
                        className="mt-1.5 w-full rounded-lg border border-border px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-600"
                      />
                      {errors.name && (
                        <p
                          id="cta-name-error"
                          className="mt-1.5 text-xs text-brand-600"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="cta-email"
                        className="text-sm font-medium text-ink-700"
                      >
                        Work email
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(event) =>
                          setForm({ ...form, email: event.target.value })
                        }
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? 'cta-email-error' : undefined
                        }
                        className="mt-1.5 w-full rounded-lg border border-border px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-600"
                      />
                      {errors.email && (
                        <p
                          id="cta-email-error"
                          className="mt-1.5 text-xs text-brand-600"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="cta-org"
                        className="text-sm font-medium text-ink-700"
                      >
                        Organisation
                      </label>
                      <input
                        id="cta-org"
                        type="text"
                        autoComplete="organization"
                        value={form.organisation}
                        onChange={(event) =>
                          setForm({ ...form, organisation: event.target.value })
                        }
                        aria-invalid={Boolean(errors.organisation)}
                        aria-describedby={
                          errors.organisation ? 'cta-org-error' : undefined
                        }
                        className="mt-1.5 w-full rounded-lg border border-border px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-600"
                      />
                      {errors.organisation && (
                        <p
                          id="cta-org-error"
                          className="mt-1.5 text-xs text-brand-600"
                        >
                          {errors.organisation}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                    >
                      Request a Demo
                      <Send className="size-4" aria-hidden="true" />
                    </button>
                    <p className="text-center text-xs text-ink-300">
                      Prototype form — submissions are not sent anywhere.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
