import { Sparkles, ShieldCheck, Users2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  comingSoon?: boolean;
}

export const features: Feature[] = [
  {
    icon: Sparkles,
    title: 'AI-Powered Trends',
    description:
      'Smart alerts and predictions for operational patterns across your organisation',
    comingSoon: true,
  },
  {
    icon: ShieldCheck,
    title: 'Real-time Awareness',
    description: 'Live maps, incident updates and instant notifications',
  },
  {
    icon: Users2,
    title: 'Stronger Together',
    description: 'Empowering staff and responders',
  },
];
