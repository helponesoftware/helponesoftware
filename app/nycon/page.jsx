import Hero from '../../components/Hero';
import { BookDemoButton } from '../../components/CtaButtons';
import TrustBar from '../../components/TrustBar';
import NyconFeatures from '../../components/NyconFeatures';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import CtaBanner from '../../components/CtaBanner';
import Link from 'next/link';

export const metadata = {
    title: 'NYCON Members Exclusive | HelpOne – Nonprofit Operations Platform',
    description: 'Exclusive NYCON member pricing: $399/month for the first year, then $449/month. First 5 organizations also receive 2 months free. One platform for volunteers, events, fundraising, finance, HR, board management & more — unlimited records, free migration, no long-term contract.',
    alternates: {
        canonical: 'https://helponesoftware.com/nycon/',
    },
    openGraph: {
        title: 'NYCON Members Exclusive | HelpOne',
        description: 'Exclusive NYCON member pricing: $399/month for the first year. All modules included — unlimited records, free migration, no long-term contract.',
        url: 'https://helponesoftware.com/nycon/',
        images: [{ url: '/assets/Logo-06.png', alt: 'HelpOne – NYCON Members Exclusive' }],
    },
};

const nyconModules = [
    { emoji: '👥', color: 'bg-[#00E6C3]', title: 'Volunteer Management', desc: 'Scheduling, check-in, hours tracking, self-service portal for staff and volunteers.', href: 'https://helponesoftware.com/volunteer-management/' },
    { emoji: '🎟️', color: 'bg-violet-500', title: 'Event Management', desc: 'Unified event hub, registration, shifts, attendance, ticketing, and live reporting.', href: 'https://helponesoftware.com/event-management/' },
    { emoji: '💰', color: 'bg-amber-500', title: 'Fundraising & Donors', desc: 'Auctions, donor records, recurring campaigns, pledges, and giving history.', href: 'https://helponesoftware.com/fundraising/' },
    { emoji: '📇', color: 'bg-emerald-500', title: 'Donors & Contacts', desc: 'Rich supporter profiles, giving history, smart lists, and custom segmentation.', href: 'https://helponesoftware.com/donors-and-contacts/' },
    { emoji: '📊', color: 'bg-rose-500', title: 'Finances', desc: 'Restricted funds tracking, transaction accounting, and 990/CHAR500-ready financial reporting.', href: 'https://helponesoftware.com/finances/' },
    { emoji: '👔', color: 'bg-sky-500', title: 'HR Solutions', desc: 'Nonprofit staff + volunteer HR, reviews, time-off, and compliance tracking.', href: 'https://helponesoftware.com/hr-solutions/' },
    { emoji: '📜', color: 'bg-purple-500', title: 'Policies & Procedures', desc: 'Living policy handbook, digital acknowledgements, and instant PDF export.', href: 'https://helponesoftware.com/policies-and-procedures/' },
    { emoji: '📚', color: 'bg-orange-500', title: 'Training Tracking', desc: 'Certifications, compliance assignments, reminders, and progress dashboards.', href: 'https://helponesoftware.com/training-tracking/' },
    { emoji: '🏛️', color: 'bg-cyan-500', title: 'Board Management', desc: 'Secure board portal, meeting packets, minutes, votes, and single source of truth.', href: 'https://helponesoftware.com/my-helpone' },
];

const trustItems = [
    '$399/mo Member Rate',
    'First 5 Orgs: 2 Mos Free',
    'Free Migration & Setup',
    'Unlimited Records & Users'
];

export default function NyconPage() {
    return (
        <main className="min-h-screen bg-[#0A1428]">

            {/* HERO SECTION */}
            <Hero
                badge="Who It's For • NYCON Members"
                title="NYCON Members:"
                titleAccent="$399/month for the first year"
                subtitle="Then $449/month thereafter. One unified platform for volunteers, events, fundraising, finance, HR, board management & more — with unlimited records and free white-glove migration."
                primaryCtaText="Book 20-Min Session"
                primaryCtaLink="/contact-us"
                secondaryCtaText="See Member Pricing"
                secondaryCtaLink="#pricing"
            />

            {/* TRUST BAR */}
            <TrustBar items={trustItems} />

            {/* NYCON FEATURES */}
            <NyconFeatures />

            {/* 9 MODULES */}
            <ModulesGrid modules={nyconModules} />

            {/* PRICING SECTION */}
            <section id="pricing" className="py-16 md:py-24 bg-black border-t border-white/5">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <div data-aos="fade-up" className="inline-flex items-center gap-2 bg-[#00E6C3]/15 border border-[#00E6C3]/40 text-[#00E6C3] px-5 py-2 rounded-full text-sm font-semibold mb-6">
                            Exclusive Member Offer
                        </div>
                        <h2 data-aos="fade-up" data-aos-delay="100" className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                            NYCON Member Exclusive Pricing
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="150" className="mt-4 text-xl text-white/70">
                            Locked-in preferred rates with zero setup fees and no long-term contracts.
                        </p>
                    </div>

                    <div data-aos="fade-up" className="bg-white/5 border border-[#00E6C3]/40 rounded-3xl overflow-hidden shadow-2xl">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#00E6C3]/10 border-b border-white/10">
                                    <th className="py-5 px-8 font-semibold text-white/80">Period</th>
                                    <th className="py-5 px-8 font-semibold text-[#00E6C3] text-right">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/10">
                                    <td className="py-6 px-8 text-lg font-medium">First 12 months</td>
                                    <td className="py-6 px-8 text-right text-3xl font-bold text-[#00E6C3]">
                                        $399<span className="text-base font-normal text-white/60">/month</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-6 px-8 text-lg font-medium">After 12 months</td>
                                    <td className="py-6 px-8 text-right text-3xl font-bold text-white">
                                        $449<span className="text-base font-normal text-white/60">/month</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* LIMITED OFFER BADGE */}
                    <div data-aos="fade-up" className="mt-8 flex justify-center">
                        <div className="inline-flex items-center gap-3 bg-[#00E6C3]/10 border border-[#00E6C3]/40 rounded-2xl px-6 py-4">
                            <i className="fas fa-gift text-[#00E6C3] text-xl"></i>
                            <span className="text-[#00E6C3] font-semibold text-base md:text-lg">
                                First 5 organizations also receive <span className="underline decoration-2 underline-offset-2">2 months free</span>
                            </span>
                        </div>
                    </div>

                    <ul data-aos="fade-up" className="mt-8 space-y-4 text-lg text-white/80 max-w-md mx-auto">
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-[#00E6C3] mt-1"></i>
                            <span>Free migration and white-glove setup</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-[#00E6C3] mt-1"></i>
                            <span>Unlimited records, users, volunteers &amp; donors</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-[#00E6C3] mt-1"></i>
                            <span>All 9 core nonprofit modules included</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-[#00E6C3] mt-1"></i>
                            <span>No long-term contract • Cancel anytime</span>
                        </li>
                    </ul>

                    <div data-aos="fade-up" className="text-center mt-10">
                        <BookDemoButton className="inline-flex items-center justify-center px-10 py-5 bg-[#00E6C3] hover:bg-white text-[#0A1428] text-lg font-semibold rounded-2xl transition-all">
                            Book Your NYCON Member Session →
                        </BookDemoButton>
                    </div>

                    <p className="text-center mt-6 text-sm text-white/50">
                        This offer is available exclusively to NYCON member organizations.
                    </p>
                </div>
            </section>

            {/* FUTURE-PROOF */}
            <FutureProof />

            {/* FINAL CTA BANNER */}
            <CtaBanner
                title="Ready to see how it works for your organization?"
                subtitle="Book a short 20-minute working session. We'll look at your current setup and show you where consolidation can save the most time and money."
                buttonText="Book Your NYCON Member Session"
                buttonClassName="!bg-[#0A1428] !text-white hover:!bg-[#1a2640]"
            />
        </main>
    );
}
