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
  tagline: string;
}

export const TRADES: TradeInfo[] = [
  { name: 'Plumber', slug: 'plumber', icon: 'plumbing', color: '#0EA5E9', emoji: '🔧', description: 'From burst pipes to bathroom installs, find verified plumbers available when you need them across NI.', tagline: 'Leaks, taps, bathrooms' },
  { name: 'Electrician', slug: 'electrician', icon: 'bolt', color: '#F59E0B', emoji: '⚡', description: 'NIC EIC approved electricians for rewires, fuse box upgrades, EV chargers and more.', tagline: 'Wiring, sockets, lighting' },
  { name: 'Carpenter', slug: 'carpenter', icon: 'carpenter', color: '#8B5CF6', emoji: '🪚', description: 'Master carpenters for bespoke joinery, kitchen fitting, flooring and custom furniture.', tagline: 'Woodwork, fitting, repairs' },
  { name: 'Painter & Decorator', slug: 'painter-and-decorator', icon: 'format_paint', color: '#10B981', emoji: '🎨', description: 'Award-winning painters for interior, exterior and commercial work. Free colour consultation.', tagline: 'Interior, exterior, finishes' },
  { name: 'Gas Engineer', slug: 'gas-engineer', icon: 'local_fire_department', color: '#EF4444', emoji: '🔥', description: 'Gas Safe registered engineers for boiler installs, servicing and emergency repairs.', tagline: 'Boilers, heating, safety checks' },
  { name: 'HVAC Technician', slug: 'hvac-technician', icon: 'ac_unit', color: '#6366F1', emoji: '❄️', description: 'Qualified HVAC technicians for heat pumps, air conditioning and climate control.', tagline: 'Heating, ventilation, cooling' },
  { name: 'Locksmith', slug: 'locksmith', icon: 'lock', color: '#F97316', emoji: '🔑', description: '24/7 emergency locksmiths. No callout fee. UPVC, smart locks and access control.', tagline: 'Locks, security, access' },
  { name: 'Roofer', slug: 'roofer', icon: 'roof', color: '#78716C', emoji: '🏠', description: 'Experienced roofers for repairs, new roofs, flat roofing and storm damage.', tagline: 'Roof repairs, gutters, flashing' },
  { name: 'Tiler', slug: 'tiler', icon: 'grid_view', color: '#14B8A6', emoji: '🔲', description: 'Professional tilers for bathrooms, kitchens, floors and walls. Free tile selection advice.', tagline: 'Floors, walls, grouting' },
  { name: 'Plasterer', slug: 'plasterer', icon: 'texture', color: '#A78BFA', emoji: '🧱', description: 'Skilled plasterers for smooth finishes, rendering and decorative work.', tagline: 'Plastering, rendering, skim' },
  { name: 'Bricklayer', slug: 'bricklayer', icon: 'foundation', color: '#D97706', emoji: '🏗️', description: 'Expert bricklayers for new builds, extensions, walls and structural work.', tagline: 'Brickwork, walls, repointing' },
  { name: 'Landscaper', slug: 'landscaper', icon: 'yard', color: '#22C55E', emoji: '🌿', description: 'Full garden transformation — design to completion. Patios, fencing, artificial grass.', tagline: 'Gardens, paving, fencing' },
  { name: 'Cleaner', slug: 'cleaner', icon: 'cleaning_services', color: '#06B6D4', emoji: '✨', description: 'Professional domestic and commercial cleaning. Fully insured. Eco-friendly available.', tagline: 'Homes, offices, deep cleans' },
  { name: 'Handyman', slug: 'handyman', icon: 'handyman', color: '#8B5CF6', emoji: '🛠️', description: 'Multi-skilled handymen for all those jobs you never get around to.', tagline: 'Odd jobs, assembly, repairs' },
  { name: 'Appliance Repair', slug: 'appliance-repair', icon: 'home_repair_service', color: '#EC4899', emoji: '🔌', description: 'Fast appliance repair for washing machines, dishwashers, ovens and more.', tagline: 'Fixes, installations, maintenance' },
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