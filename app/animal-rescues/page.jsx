import Hero from '../../components/Hero';
import { BookDemoButton } from '../../components/CtaButtons';
import TrustBar from '../../components/TrustBar';
import AnimalRescueFeatures from '../../components/AnimalRescueFeatures';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import CtaBanner from '../../components/CtaBanner';
import Link from 'next/link';

export const metadata = {
    title: 'Animal Rescues | HelpOne Software',
    description: 'The all-in-one platform built for animal shelters and rescues.',
};

const trustItems = [
    'Flat $1.75/tx donations',
    'Unlimited volunteers & fosters',
    'Adoption event tools',
    'Built for rescues'
];

const rescueModules = [
    { emoji: '👥', color: 'bg-[#00E6C3]', title: 'Volunteer Management', desc: 'Self-service portal, QR check-ins, skill matching, hours tracking that auto-feeds your 990.', href: 'https://helponesoftware.com/volunteer-management/' },
    { emoji: '🎟️', color: 'bg-violet-500', title: 'Event Management', desc: 'Unified hub, dynamic ticketing, multi-day schedules, volunteer sync for adoption events.', href: 'https://helponesoftware.com/event-management/' },
    { emoji: '💰', color: 'bg-amber-500', title: 'Fundraising', desc: 'Auctions, pledges, donations, contacts, sponsorships for medical care and operations.', href: 'https://helponesoftware.com/fundraising/' },
    { emoji: '📇', color: 'bg-emerald-500', title: 'Donors & Contacts', desc: 'Rich profiles, history, smart folders, custom blasts for sponsors and adopters.', href: 'https://helponesoftware.com/donors-and-contacts/' },
    { emoji: '📊', color: 'bg-rose-500', title: 'Finances', desc: 'GAAP charts, auto 990 & CHAR500, restricted funds for grants and donations.', href: 'https://helponesoftware.com/finances/' },
    { emoji: '👔', color: 'bg-sky-500', title: 'HR Solutions', desc: 'Onboarding, reviews, time-off, nonprofit-specific for staff and volunteers.', href: 'https://helponesoftware.com/hr-solutions/' },
    { emoji: '📜', color: 'bg-purple-500', title: 'Policies & Procedures', desc: 'Living books, approvals, instant PDF export for shelter protocols.', href: 'https://helponesoftware.com/policies-and-procedures/' },
    { emoji: '📚', color: 'bg-orange-500', title: 'Training Tracking', desc: 'Assignments, reminders, progress dashboards for volunteer and staff training.', href: 'https://helponesoftware.com/training-tracking/' },
    { emoji: '💻', color: 'bg-cyan-500', title: 'IT Asset Tracking', desc: 'Hardware, licenses, vendors, budget tracking for shelter equipment.', href: 'https://helponesoftware.com/it-asset-tracking-management/' },
];

export default function AnimalRescuesPage() {
    return (
        <main className="min-h-screen bg-[#0A1428]">

            {/* HERO SECTION */}
            <Hero
                badge="Who It's For • Animal Rescues"
                title="Animal Rescues."
                titleAccent="Saving Lives, One Tail Wag at a Time."
                subtitle="The all-in-one platform built for animal shelters and rescues. Unlimited volunteer scheduling, adoption events, donor management, medical tracking, and fundraising — so you can spend more time saving lives and less time on paperwork."
             primaryCtaText="Schedule Free Demo" primaryCtaLink="/contact-us" secondaryCtaText="See Pricing" secondaryCtaLink="/pricing" />

            {/* TRUST BAR */}
            <TrustBar items={trustItems} />

            {/* ANIMAL RESCUE FEATURES */}
            <AnimalRescueFeatures />

            {/* 9 MODULES */}
            <ModulesGrid modules={rescueModules} />

            {/* FUTURE-PROOF */}
            <FutureProof />

            {/* FINAL CTA BANNER */}
            <CtaBanner
                title="Ready to save more lives?"
                subtitle="HelpOne is built for rescues like yours. Let's get you started today."
                buttonText="Schedule Your Free Demo"
                buttonClassName="!bg-[#0A1428] !text-white hover:!bg-[#1a2640]"
            />
        </main>
    );
}
