import type { SVGProps } from 'react';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';

const footerLinks = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Features', href: '#features' },
  { label: 'AI Insights', href: '#ai-insights' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Request a Demo', href: '#cta' },
];

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.84-2.04 3.78-2.04 4.04 0 4.78 2.66 4.78 6.12V21h-4v-5.56c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95V21h-4V9Z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 3h4.4l4.2 5.8L16.6 3H21l-6.7 8.6L21 21h-4.4l-4.6-6.3L6.6 21H3l7.1-9.1L3 3Z" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.8 4.6 12 4.6 12 4.6s-5.8 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.35C16.23 4.31 15.3 4.23 14.22 4.23c-2.25 0-3.79 1.37-3.79 3.89v2.4H8v3h2.43V21h3.07Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialLinks = [
  { label: 'LinkedIn', icon: LinkedinIcon },
  { label: 'X', icon: XIcon },
  { label: 'YouTube', icon: YoutubeIcon },
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Instagram', icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-subtle pt-16 pb-10">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-ink-500">
              Real-time emergency response and safety coordination for your
              organization.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-500 hover:text-ink-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-ink-900">Get in touch</p>
            <a
              href="mailto:info@lgstech.co"
              className="text-sm text-ink-500 hover:text-ink-900"
            >
              info@lgstech.co
            </a>
          </div>

          <ul className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <span
                  aria-label={`${social.label} (link not yet available)`}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-ink-300"
                >
                  <social.icon className="size-4" />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-xs text-ink-300">
          Copyright © 2026 LGS Tech. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
