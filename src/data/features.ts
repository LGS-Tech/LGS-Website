import { Sparkles, ShieldCheck, Route, Users2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Sparkles,
    title: 'AI-Powered Safety',
    description: 'Smart alerts & predictions to keep your campus safe',
  },
  {
    icon: Route,
    title: 'Real-time Awareness',
    description: 'Live maps, incident updates & instant notifications',
  },
  {
    icon: ShieldCheck,
    title: 'Smarter Evacuations',
    description: 'Find the safest routes & nearest exits in seconds',
  },
  {
    icon: Users2,
    title: 'Stronger Together',
    description: 'Empowering students, staff & responders alike',
  },
];
