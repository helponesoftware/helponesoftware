import Hero from '../../components/Hero';
import { BookDemoButton } from '../../components/CtaButtons';
import TrustBar from '../../components/TrustBar';
import SchoolFeatures from '../../components/SchoolFeatures';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import CtaBanner from '../../components/CtaBanner';
import Link from 'next/link';

export const metadata = {
    title: 'Schools & Youth | HelpOne Software',
    description: 'The all-in-one platform built for K-12 schools, after-school programs, and youth ministries.',
};

const trustItems = [
    'Flat $1.75/tx payments',
    'Unlimited volunteers & parents',
    'Event & field trip tools',
    'Built for educators'
];

const schoolModules = [
    { emoji: '👥', color: 'bg-[#00E6C3]', title: 'Volunteer Management', desc: 'Self-service portal, QR check-ins, skill matching, hours tracking that auto-feeds your 990.', href: 'https://helponesoftware.com/volunteer-management/' },
    { emoji: '🎟️', color: 'bg-violet-500', title: 'Event Management', desc: 'Unified hub, dynamic ticketing, multi-day schedules, volunteer sync for field trips, concerts, and fundraisers.', href: 'https://helponesoftware.com/event-management/' },
    { emoji: '💰', color: 'bg-amber-500', title: 'Fundraising', desc: 'Auctions, pledges, donations, contacts, sponsorships for sports, arts, and enrichment programs.', href: 'https://helponesoftware.com/fundraising/' },
    { emoji: '📇', color: 'bg-emerald-500', title: 'Donors & Contacts', desc: 'Rich profiles, history, smart folders, custom blasts for parents, alumni, and sponsors.', href: 'https://helponesoftware.com/donors-and-contacts/' },
    { emoji: '📊', color: 'bg-rose-500', title: 'Finances', desc: 'GAAP charts, auto 990 & CHAR500, restricted funds for grants and program budgets.', href: 'https://helponesoftware.com/finances/' },
    { emoji: '👔', color: 'bg-sky-500', title: 'HR Solutions', desc: 'Onboarding, reviews, time-off, nonprofit-specific for teachers and staff.', href: 'https://helponesoftware.com/hr-solutions/' },
    { emoji: '📜', color: 'bg-purple-500', title: 'Policies & Procedures', desc: 'Living books, approvals, instant PDF export for safety and compliance policies.', href: 'https://helponesoftware.com/policies-and-procedures/' },
    { emoji: '📚', color: 'bg-orange-500', title: 'Training Tracking', desc: 'Assignments, reminders, progress dashboards for staff and volunteer training.', href: 'https://helponesoftware.com/training-tracking/' },
    { emoji: '💻', color: 'bg-cyan-500', title: 'IT Asset Tracking', desc: 'Hardware, licenses, vendors, budget tracking for classroom technology.', href: 'https://helponesoftware.com/it-asset-tracking-management/' },
];

export default function SchoolsYouthPage() {
    return (
        <main className="min-h-screen bg-[#0A1428]">

            {/* HERO SECTION */}
            <Hero
                badge="Who It's For • Schools & Youth"
                title="Schools & Youth."
                titleAccent="Shaping the Next Generation."
                subtitle="The all-in-one platform built for K-12 schools, after-school programs, and youth ministries. Unlimited volunteer coordination, parent communication, event management, fundraising, and student tracking — so you can focus on education and life-changing impact."
             primaryCtaText="Schedule Free Demo" primaryCtaLink="/contact-us" secondaryCtaText="See Pricing" secondaryCtaLink="/pricing" />

            {/* TRUST BAR */}
            <TrustBar items={trustItems} />

            {/* SCHOOL FEATURES */}
            <SchoolFeatures />

            {/* 9 MODULES */}
            <ModulesGrid modules={schoolModules} />

            {/* FUTURE-PROOF */}
            <FutureProof />

            {/* FINAL CTA BANNER */}
            <CtaBanner
                title="Ready to empower the next generation?"
                subtitle="HelpOne is built for schools and youth programs like yours. Let's get started today."
                buttonText="Schedule Your Free Demo"
                buttonClassName="!bg-[#0A1428] !text-white hover:!bg-[#1a2640]"
            />
        </main>
    );
}
