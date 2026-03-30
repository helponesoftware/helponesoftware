import Hero from '../../components/Hero';
import { BookDemoButton } from '../../components/CtaButtons';
import TrustBar from '../../components/TrustBar';
import EnvironmentalCausesFeatures from '../../components/EnvironmentalCausesFeatures';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import CtaBanner from '../../components/CtaBanner';
import Link from 'next/link';

export const metadata = {
    title: 'Environmental Causes | HelpOne Software',
    description: 'The all-in-one platform built for conservation groups, climate action organizations, and wildlife protection nonprofits.',
};

const environmentalModules = [
    { emoji: '👥', color: 'bg-[#00E6C3]', title: 'Volunteer Management', desc: 'Self-service portal, QR check-ins, skill matching, hours tracking for cleanups and field work.', href: 'https://helponesoftware.com/volunteer-management/' },
    { emoji: '🎟️', color: 'bg-violet-500', title: 'Event Management', desc: 'Unified hub, dynamic ticketing, multi-day schedules, volunteer sync for cleanups, rallies, and conferences.', href: 'https://helponesoftware.com/event-management/' },
    { emoji: '💰', color: 'bg-amber-500', title: 'Fundraising', desc: 'Auctions, pledges, donations, contacts, sponsorships for habitat restoration and campaigns.', href: 'https://helponesoftware.com/fundraising/' },
    { emoji: '📇', color: 'bg-emerald-500', title: 'Donors & Contacts', desc: 'Rich profiles, history, smart folders, custom blasts for supporters and grant makers.', href: 'https://helponesoftware.com/donors-and-contacts/' },
    { emoji: '📊', color: 'bg-rose-500', title: 'Finances', desc: 'GAAP charts, auto 990 & CHAR500, restricted funds for grants and project budgets.', href: 'https://helponesoftware.com/finances/' },
    { emoji: '👔', color: 'bg-sky-500', title: 'HR Solutions', desc: 'Onboarding, reviews, time-off, nonprofit-specific for staff and field teams.', href: 'https://helponesoftware.com/hr-solutions/' },
    { emoji: '📜', color: 'bg-purple-500', title: 'Policies & Procedures', desc: 'Living books, approvals, instant PDF export for safety and environmental protocols.', href: 'https://helponesoftware.com/policies-and-procedures/' },
    { emoji: '📚', color: 'bg-orange-500', title: 'Training Tracking', desc: 'Assignments, reminders, progress dashboards for volunteer and staff environmental training.', href: 'https://helponesoftware.com/training-tracking/' },
    { emoji: '💻', color: 'bg-cyan-500', title: 'IT Asset Tracking', desc: 'Hardware, licenses, vendors, budget tracking for field gear, drones, and monitoring equipment.', href: 'https://helponesoftware.com/it-asset-tracking-management/' },
];

const trustItems = [
    'Flat $1.75/tx donations',
    'Unlimited volunteers',
    'Grant tracking tools',
    'Built for conservation'
];

export default function EnvironmentalCausesPage() {
    return (
        <main className="min-h-screen bg-[#0A1428]">

            {/* HERO SECTION */}
            <Hero
                badge="Who It's For • Environmental Causes"
                title="Environmental Causes."
                titleAccent="Protecting Tomorrow, Today."
                subtitle="The all-in-one platform built for conservation groups, climate action organizations, and wildlife protection nonprofits. Unlimited volunteer coordination for cleanups and field work, event management, donor management, grant tracking, and equipment inventory — so you can focus on saving the planet."
             primaryCtaText="Schedule Free Demo" primaryCtaLink="/contact-us" secondaryCtaText="See Pricing" secondaryCtaLink="/pricing" />

            {/* TRUST BAR */}
            <TrustBar items={trustItems} />

            {/* ENVIRONMENTAL CAUSES FEATURES */}
            <EnvironmentalCausesFeatures />

            {/* 9 MODULES */}
            <ModulesGrid modules={environmentalModules} />

            {/* FUTURE-PROOF */}
            <FutureProof />

            {/* FINAL CTA BANNER */}
            <CtaBanner
                title="Ready to protect more of the planet?"
                subtitle="HelpOne is built for environmental organizations like yours. Let's get started today."
                buttonText="Schedule Your Free Demo"
                buttonClassName="!bg-[#0A1428] !text-white hover:!bg-[#1a2640]"
            />
        </main>
    );
}
