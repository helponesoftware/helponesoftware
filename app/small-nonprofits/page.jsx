import Hero from '../../components/Hero';
import { BookDemoButton } from '../../components/CtaButtons';
import TrustBar from '../../components/TrustBar';
import SmallNonprofitFeatures from '../../components/SmallNonprofitFeatures';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import CtaBanner from '../../components/CtaBanner';
import Link from 'next/link';

export const metadata = {
    title: 'Small Nonprofits | HelpOne Software',
    description: 'Affordable, unlimited software built for small teams doing big work.',
};

const trustItems = [
    'Flat $1.75/tx payments',
    'No per-user fees',
    'Unlimited everything',
    'Built for small teams'
];

const smallNonprofitModules = [
    { emoji: '👥', color: 'bg-[#00E6C3]', title: 'Volunteer Management', desc: 'Self-service portal, QR check-ins, skill matching, hours tracking that auto-feeds your 990.', href: 'https://helponesoftware.com/volunteer-management/' },
    { emoji: '🎟️', color: 'bg-violet-500', title: 'Event Management', desc: 'Unified hub, dynamic ticketing, multi-day schedules, volunteer sync.', href: 'https://helponesoftware.com/event-management/' },
    { emoji: '💰', color: 'bg-amber-500', title: 'Fundraising', desc: 'Auctions, pledges, donations, contacts, sponsorships.', href: 'https://helponesoftware.com/fundraising/' },
    { emoji: '📇', color: 'bg-emerald-500', title: 'Donors & Contacts', desc: 'Rich profiles, history, smart folders, custom blasts.', href: 'https://helponesoftware.com/donors-and-contacts/' },
    { emoji: '📊', color: 'bg-rose-500', title: 'Finances', desc: 'GAAP charts, auto 990 & CHAR500, restricted funds.', href: 'https://helponesoftware.com/finances/' },
    { emoji: '👔', color: 'bg-sky-500', title: 'HR Solutions', desc: 'Onboarding, reviews, time-off, nonprofit-specific.', href: 'https://helponesoftware.com/hr-solutions/' },
    { emoji: '📜', color: 'bg-purple-500', title: 'Policies & Procedures', desc: 'Living books, approvals, instant PDF export.', href: 'https://helponesoftware.com/policies-and-procedures/' },
    { emoji: '📚', color: 'bg-orange-500', title: 'Training Tracking', desc: 'Assignments, reminders, progress dashboards.', href: 'https://helponesoftware.com/training-tracking/' },
    { emoji: '💻', color: 'bg-cyan-500', title: 'IT Asset Tracking', desc: 'Hardware, licenses, vendors, budget tracking.', href: 'https://helponesoftware.com/it-asset-tracking-management/' },
];

export default function SmallNonprofitsPage() {
    return (
        <main className="min-h-screen bg-[#0A1428]">

            {/* HERO SECTION */}
            <Hero
                badge="Who It's For • Small Nonprofits"
                title="Small Nonprofit."
                titleAccent="Big Heart. One Platform."
                subtitle="Affordable, unlimited software built for small teams doing big work. No per-user fees. No complicated contracts. Just everything you need to fundraise, organize volunteers, stay compliant, and focus on your mission."
             primaryCtaText="Schedule Free Demo" primaryCtaLink="/contact-us" secondaryCtaText="See Pricing" secondaryCtaLink="/pricing" />

            {/* TRUST BAR */}
            <TrustBar items={trustItems} />

            {/* SMALL NONPROFIT FEATURES */}
            <SmallNonprofitFeatures />

            {/* 9 MODULES */}
            <ModulesGrid modules={smallNonprofitModules} />

            {/* FUTURE-PROOF */}
            <FutureProof />

            {/* FINAL CTA BANNER */}
            <CtaBanner
                title="Ready to do more with less?"
                subtitle="Join the growing community of small nonprofits thriving with HelpOne."
                buttonText="Schedule Your Free Demo"
                buttonClassName="!bg-[#0A1428] !text-white hover:!bg-[#1a2640]"
            />
        </main>
    );
}
