import Hero from '../../components/Hero';
import { BookDemoButton } from '../../components/CtaButtons';
import TrustBar from '../../components/TrustBar';
import ArtsCultureFeatures from '../../components/ArtsCultureFeatures';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import CtaBanner from '../../components/CtaBanner';
import Link from 'next/link';

export const metadata = {
    title: 'Arts & Culture | HelpOne Software',
    description: 'The all-in-one platform built for theaters, museums, galleries, and cultural organizations.',
};

const trustItems = [
    'Flat $1.75/tx ticket sales',
    'Unlimited volunteers & patrons',
    'Event & exhibition tools',
    'Built for creatives'
];

const artsModules = [
    { emoji: '👥', color: 'bg-[#00E6C3]', title: 'Volunteer Management', desc: 'Self-service portal, QR check-ins, skill matching, hours tracking for ushers, docents, and production crews.', href: 'https://helponesoftware.com/volunteer-management/' },
    { emoji: '🎟️', color: 'bg-violet-500', title: 'Event Management', desc: 'Unified hub, dynamic ticketing, multi-day schedules, volunteer sync for performances, exhibitions, and galas.', href: 'https://helponesoftware.com/event-management/' },
    { emoji: '💰', color: 'bg-amber-500', title: 'Fundraising', desc: 'Auctions, pledges, donations, contacts, sponsorships for productions, exhibitions, and capital campaigns.', href: 'https://helponesoftware.com/fundraising/' },
    { emoji: '📇', color: 'bg-emerald-500', title: 'Donors & Contacts', desc: 'Rich profiles, history, smart folders, custom blasts for patrons, sponsors, and members.', href: 'https://helponesoftware.com/donors-and-contacts/' },
    { emoji: '📊', color: 'bg-rose-500', title: 'Finances', desc: 'GAAP charts, auto 990 & CHAR500, restricted funds for grants and endowment management.', href: 'https://helponesoftware.com/finances/' },
    { emoji: '👔', color: 'bg-sky-500', title: 'HR Solutions', desc: 'Onboarding, reviews, time-off, nonprofit-specific for staff and artistic directors.', href: 'https://helponesoftware.com/hr-solutions/' },
    { emoji: '📜', color: 'bg-purple-500', title: 'Policies & Procedures', desc: 'Living books, approvals, instant PDF export for safety, accessibility, and board governance.', href: 'https://helponesoftware.com/policies-and-procedures/' },
    { emoji: '📚', color: 'bg-orange-500', title: 'Training Tracking', desc: 'Assignments, reminders, progress dashboards for volunteer, staff, and artist training.', href: 'https://helponesoftware.com/training-tracking/' },
    { emoji: '💻', color: 'bg-cyan-500', title: 'IT Asset Tracking', desc: 'Hardware, licenses, vendors, budget tracking for lighting, sound, and exhibition tech.', href: 'https://helponesoftware.com/it-asset-tracking-management/' },
];

export default function ArtsCulturePage() {
    return (
        <main className="min-h-screen bg-[#0A1428]">

            {/* HERO SECTION */}
            <Hero
                badge="Who It's For • Arts & Culture"
                title="Arts & Culture."
                titleAccent="Where Creativity Meets Community."
                subtitle="The all-in-one platform built for theaters, museums, galleries, and cultural organizations. Unlimited ticket sales, volunteer coordination, donor management, event ticketing, and grant tracking — so you can focus on creating unforgettable experiences."
             primaryCtaText="Schedule Free Demo" primaryCtaLink="/contact-us" secondaryCtaText="See Pricing" secondaryCtaLink="/pricing" />

            {/* TRUST BAR */}
            <TrustBar items={trustItems} />

            {/* ARTS & CULTURE FEATURES */}
            <ArtsCultureFeatures />

            {/* 9 MODULES */}
            <ModulesGrid modules={artsModules} />

            {/* FUTURE-PROOF */}
            <FutureProof />

            {/* FINAL CTA BANNER */}
            <CtaBanner
                title="Ready to amplify your art?"
                subtitle="HelpOne is built for creative organizations like yours. Let's bring your vision to life."
                buttonText="Schedule Your Free Demo"
                buttonClassName="!bg-[#0A1428] !text-white hover:!bg-[#1a2640]"
            />
        </main>
    );
}
