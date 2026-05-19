export interface ServiceProvider {
  id: string;
  name: string;
  trade: string;
  trades: string[];
  skills: string[];
  location: string;
  radius: number;
  hourlyRate: number;
  availability: 'immediate' | 'this-week' | 'next-week' | 'flexible';
  rating: number;
  reviewCount: number;
  bio: string;
  phone: string;
  email: string;
  verified: boolean;
  imageUri?: string;
  completedJobs: number;
}

export interface JobRequirements {
  trade?: string;
  subCategory?: string;
  location?: string;
  urgency?: string;
  jobSize?: string;
  budget?: string;
  description?: string;
  complete: boolean;
}

export interface TradeInfo {
  name: string;
  slug: string;
  icon: string;
  color: string;
  emoji: string;
  description: string;
}

export const TRADES: TradeInfo[] = [
  { name: 'Plumber', slug: 'plumber', icon: 'water', color: '#0EA5E9', emoji: '🔧', description: 'From burst pipes to bathroom installs, find verified plumbers available when you need them across NI.' },
  { name: 'Electrician', slug: 'electrician', icon: 'flash', color: '#F59E0B', emoji: '⚡', description: 'NIC EIC approved electricians for rewires, fuse box upgrades, EV chargers and more.' },
  { name: 'Carpenter', slug: 'carpenter', icon: 'hammer', color: '#8B5CF6', emoji: '🪚', description: 'Master carpenters for bespoke joinery, kitchen fitting, flooring and custom furniture.' },
  { name: 'Painter & Decorator', slug: 'painter-and-decorator', icon: 'format-paint', color: '#10B981', emoji: '🎨', description: 'Award-winning painters for interior, exterior and commercial work. Free colour consultation.' },
  { name: 'Gas Engineer', slug: 'gas-engineer', icon: 'fire', color: '#EF4444', emoji: '🔥', description: 'Gas Safe registered engineers for boiler installs, servicing and emergency repairs.' },
  { name: 'HVAC Technician', slug: 'hvac-technician', icon: 'fan', color: '#6366F1', emoji: '❄️', description: 'Qualified HVAC technicians for heat pumps, air conditioning and climate control.' },
  { name: 'Locksmith', slug: 'locksmith', icon: 'key-variant', color: '#F97316', emoji: '🔑', description: '24/7 emergency locksmiths. No callout fee. UPVC, smart locks and access control.' },
  { name: 'Roofer', slug: 'roofer', icon: 'home', color: '#78716C', emoji: '🏠', description: 'Experienced roofers for repairs, new roofs, flat roofing and storm damage.' },
  { name: 'Tiler', slug: 'tiler', icon: 'grid', color: '#14B8A6', emoji: '🔲', description: 'Professional tilers for bathrooms, kitchens, floors and walls. Free tile selection advice.' },
  { name: 'Plasterer', slug: 'plasterer', icon: 'wall', color: '#A78BFA', emoji: '🧱', description: 'Skilled plasterers for smooth finishes, rendering and decorative work.' },
  { name: 'Bricklayer', slug: 'bricklayer', icon: 'domain', color: '#D97706', emoji: '🏗️', description: 'Expert bricklayers for new builds, extensions, walls and structural work.' },
  { name: 'Landscaper', slug: 'landscaper', icon: 'tree', color: '#22C55E', emoji: '🌿', description: 'Full garden transformation — design to completion. Patios, fencing, artificial grass.' },
  { name: 'Cleaner', slug: 'cleaner', icon: 'broom', color: '#06B6D4', emoji: '✨', description: 'Professional domestic and commercial cleaning. Fully insured. Eco-friendly available.' },
  { name: 'Handyman', slug: 'handyman', icon: 'wrench', color: '#8B5CF6', emoji: '🛠️', description: 'Multi-skilled handymen for all those jobs you never get around to.' },
  { name: 'Appliance Repair', slug: 'appliance-repair', icon: 'washing-machine', color: '#EC4899', emoji: '🔌', description: 'Fast appliance repair for washing machines, dishwashers, ovens and more.' },
];

export const AVAILABILITY_OPTIONS = [
  'Immediate / Emergency',
  'This Week',
  'Next Week',
  'Flexible',
] as const;

export const JOB_SIZES = [
  'Small (under 2 hours)',
  'Medium (2-4 hours)',
  'Large (full day+)',
  'Not sure yet',
] as const;

export const BUDGET_OPTIONS = [
  'Under £100',
  '£100-£300',
  '£300-£500',
  '£500+',
  'Not sure',
] as const;

export const AVAILABILITY_MAP: Record<string, string[]> = {
  'Immediate / Emergency': ['immediate'],
  'This Week': ['immediate', 'this-week'],
  'Next Week': ['immediate', 'this-week', 'next-week'],
  'Flexible': ['immediate', 'this-week', 'next-week', 'flexible'],
};

export const AVAILABILITY_LABELS: Record<string, { text: string; color: string }> = {
  'immediate': { text: '⚡ Available Now', color: '#10B981' },
  'this-week': { text: '📅 This Week', color: '#F59E0B' },
  'next-week': { text: '📋 Next Week', color: '#0EA5E9' },
  'flexible': { text: '🔄 Flexible', color: '#64748B' },
};

export function getTradeInfo(tradeName: string): TradeInfo | undefined {
  return TRADES.find(t => t.name === tradeName);
}

export function getTradeBySlug(slug: string): TradeInfo | undefined {
  return TRADES.find(t => t.slug === slug);
}