import type { LucideIcon } from 'lucide-react';
import { Cpu, HeartPulse, Wrench, Wind } from 'lucide-react';

export type IncidentPriority = 'Low' | 'Medium' | 'High';
export type IncidentStatus = 'In Progress' | 'On route' | 'Resolved';

export interface Incident {
  id: string;
  category: string;
  icon: LucideIcon;
  colorClass: string;
  dotClass: string;
  activeCases: number;
  title: string;
  priority: IncidentPriority;
  status: IncidentStatus;
}

/**
 * Representative, static mock data for the dashboard visual. This is a
 * design demonstration only — it is not connected to any live incident feed.
 */
export const incidents: Incident[] = [
  {
    id: 'it-support',
    category: 'IT Support',
    icon: Cpu,
    colorClass: 'text-warning-500 bg-warning-500/10',
    dotClass: 'bg-warning-500',
    activeCases: 2,
    title: 'Network Outage',
    priority: 'Medium',
    status: 'In Progress',
  },
  {
    id: 'injury',
    category: 'Injury',
    icon: HeartPulse,
    colorClass: 'text-success-500 bg-success-500/10',
    dotClass: 'bg-success-500',
    activeCases: 1,
    title: 'Major Injury',
    priority: 'High',
    status: 'On route',
  },
  {
    id: 'engineering',
    category: 'Engineering',
    icon: Wrench,
    colorClass: 'text-brand-600 bg-brand-50',
    dotClass: 'bg-brand-600',
    activeCases: 2,
    title: 'Electrical issues',
    priority: 'Medium',
    status: 'In Progress',
  },
  {
    id: 'facilities',
    category: 'Facilities',
    icon: Wind,
    colorClass: 'text-sky-600 bg-sky-50',
    dotClass: 'bg-sky-600',
    activeCases: 1,
    title: 'Pest Control',
    priority: 'Low',
    status: 'In Progress',
  },
];

export const dashboardStats = [
  { label: 'Total Buildings', value: '1' },
  { label: 'Active Responders', value: '12' },
  { label: 'Avg Response Time', value: '5 mins' },
];

export const priorityStyles: Record<IncidentPriority, string> = {
  Low: 'bg-success-500/10 text-success-500',
  Medium: 'bg-warning-500/10 text-warning-500',
  High: 'bg-brand-50 text-brand-600',
};
