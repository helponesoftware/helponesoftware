import { BookDemoButton, ClaimFoundersButton } from '../../components/CtaButtons';
import CtaBanner from '../../components/CtaBanner';
import TrustBar from '../../components/TrustBar';
import Hero from '../../components/Hero';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';

export const metadata = {
    title: 'Nonprofit Software Pricing — Unlimited Everything, One Price',
    description: 'HelpOne pricing: one flat rate, unlimited users, records, events, transactions, and all 9 modules. No per-user fees, no hidden charges. Lock in the Founders Rate at $499/mo.',
    keywords: ['nonprofit software pricing', 'nonprofit platform cost', 'unlimited nonprofit software', 'nonprofit OS price', 'founders rate nonprofit'],
    alternates: {
        canonical: 'https://helponesoftware.com/pricing/',
    },
    openGraph: {
        title: 'Nonprofit Software Pricing — Unlimited Everything, One Price | HelpOne',
        description: 'Unlimited users, records, events, transactions, and all 9 modules. One flat price. No per-user fees.',
        url: 'https://helponesoftware.com/pricing/',
        images: [{ url: '/assets/Logo-06.png', alt: 'HelpOne Pricing' }],
    },
    twitter: {
        title: 'Nonprofit Software Pricing — Unlimited Everything | HelpOne',
        description: 'One flat price. Unlimited everything. All 9 nonprofit modules included.',
    },
};

export default function PricingPage() {
    return (
        <>
            {/* HERO */}
            <Hero
                badge="Pricing • Unlimited for Every Mission"
                title="Unlimited Everything."
                titleAccent="One Simple Price."
                subtitle="The only all-in-one nonprofit platform with truly unlimited users, records, transactions, events, custom fields, forms, reports, and more. No per-user fees. No hidden charges."
             primaryCtaText="Claim $499/mo Founders Rate" primaryCtaLink="/pricing" secondaryCtaText="Schedule Free Demo" secondaryCtaLink="/contact-us" />

            <TrustBar items={['Unlimited Custom Fields & Reports', 'No Per-Transaction Fees', 'Full White-Label in Scale Tier', 'SOC 2 • PCI Level 1']} />

            {/* FOUNDERS RATE */}
            <section className="py-12 md:py-24 bg-[#0A1428]">
                <div className="max-w-screen-2xl mx-auto px-4 md:px-6 text-center">
                    <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-2 md:px-6 md:py-3 rounded-3xl text-sm mb-4 md:mb-6">
                        <span className="text-[#00E6C3]">Limited Time</span>
                    </div>
                    <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 md:mb-6">Founders Rate – Lock in $499/mo</h2>
                    <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto">Sign up during launch and get $499/month locked for the first 12 months + permanent 20% lifetime discount.</p>
                    <ClaimFoundersButton className="mt-8 md:mt-12 inline-flex items-center justify-center px-8 py-4 md:px-16 md:py-8 bg-[#00E6C3] hover:bg-white text-[#0A1428] text-lg md:text-2xl font-semibold rounded-3xl transition-all mx-auto">
                        Secure My Founders Rate Now
                    </ClaimFoundersButton>
                </div>
            </section>

            {/* PRICING TIERS */}
            <section id="pricing" className="py-12 md:py-24 bg-black">
                <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Choose Your Plan</h2>
                        <p className="text-base md:text-xl text-white/70 mt-3 md:mt-4">All plans include unlimited everything. Upgrade only when you need full white-label branding and dedicated support.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">

                        {/* Founders / Beta */}
                        <div className="group module-card bg-white/5 rounded-3xl p-6 md:p-10 border-2 border-transparent hover:border-[#00E6C3] transition-colors flex flex-col">
                            <div className="text-[#00E6C3] text-sm font-medium mb-2 text-center">MOST POPULAR</div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-1 text-center">Founders / Beta</h3>
                            <div className="flex items-baseline justify-center gap-2">
                                <span className="text-5xl md:text-6xl font-mono font-bold">$499</span>
                                <span className="text-white/70">/month</span>
                            </div>
                            <div className="text-xs text-white/60 mb-6 md:mb-8 text-center">Locked for 12 months • 20% lifetime discount after</div>
                            <ul className="space-y-3 md:space-y-4 text-white/80 max-w-[260px] mx-auto flex-1">
                                <li className="flex items-start gap-3"><span className="text-[#00E6C3] mt-1">✓</span> Unlimited users, records, events, transactions</li>
                                <li className="flex items-start gap-3"><span className="text-[#00E6C3] mt-1">✓</span> Unlimited custom fields, forms, and reports</li>
                                <li className="flex items-start gap-3"><span className="text-[#00E6C3] mt-1">✓</span> All 9 modules included</li>
                                <li className="flex items-start gap-3"><span className="text-[#00E6C3] mt-1">✓</span> Standard support &amp; self-service onboarding</li>
                            </ul>
                            <ClaimFoundersButton className="mt-6 md:mt-10 w-full py-4 md:py-5 bg-white text-[#0A1428] group-hover:bg-[#00E6C3] font-semibold rounded-2xl transition-colors">
                                Claim Founders Rate
                            </ClaimFoundersButton>
                        </div>

                        {/* Growth */}
                        <div className="group module-card bg-white/5 rounded-3xl p-6 md:p-10 border-2 border-transparent hover:border-[#00E6C3] transition-colors flex flex-col">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-1 text-center">Growth</h3>
                            <div className="flex items-baseline justify-center gap-2">
                                <span className="text-5xl md:text-6xl font-mono font-bold">$599</span>
                                <span className="text-white/70">/month</span>
                            </div>
                            <div className="text-xs text-white/60 mb-6 md:mb-8 text-center">After Founders period</div>
                            <ul className="space-y-3 md:space-y-4 text-white/80 max-w-[260px] mx-auto flex-1">
                                <li className="flex items-start gap-3"><span className="text-[#00E6C3] mt-1">✓</span> Everything in Founders</li>
                                <li className="flex items-start gap-3"><span className="text-[#00E6C3] mt-1">✓</span> Guided onboarding (2–3 hours)</li>
                                <li className="flex items-start gap-3"><span className="text-[#00E6C3] mt-1">✓</span> Priority email support</li>
                            </ul>
                            <BookDemoButton className="mt-6 md:mt-10 w-full py-4 md:py-5 bg-white text-[#0A1428] group-hover:bg-[#00E6C3] font-semibold rounded-2xl transition-colors">
                                Choose Growth
                            </BookDemoButton>
                        </div>

                        {/* Scale */}
                        <div className="group module-card bg-white/5 rounded-3xl p-6 md:p-10 border-2 border-transparent hover:border-[#00E6C3] transition-colors flex flex-col">
                            <div className="text-[#00E6C3] text-sm font-medium mb-2 text-center">FOR LARGE &amp; NETWORKED ORGANIZATIONS</div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-1 text-center">Scale</h3>
                            <div className="text-xl md:text-2xl font-medium text-white/70 mb-6 md:mb-8 text-center">Custom Quote</div>
                            <ul className="space-y-3 md:space-y-4 text-white/80 max-w-[300px] mx-auto flex-1">
                                <li className="flex items-start gap-3"><span className="text-[#00E6C3] mt-1">✓</span> Everything in Growth</li>
                                <li className="flex items-start gap-3"><span className="text-[#00E6C3] mt-1">✓</span> Full white-label branding– your logo, colors, and custom domain on every screen</li>
                                <li className="flex items-start gap-3"><span className="text-[#00E6C3] mt-1">✓</span> Dedicated account manager with priority phone &amp; video support</li>
                                <li className="flex items-start gap-3"><span className="text-[#00E6C3] mt-1">✓</span> Unlimited custom development &amp; integrations</li>
                            </ul>
                            <BookDemoButton className="mt-6 md:mt-10 w-full py-4 md:py-5 bg-white text-[#0A1428] group-hover:bg-[#00E6C3] font-semibold rounded-2xl transition-colors">
                                Get Custom Scale Quote
                            </BookDemoButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className="py-12 md:py-24 bg-[#0A1428]">
                <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">What&apos;s Included in Every Plan</h2>
                        <p className="text-base md:text-xl text-white/70 mt-3 md:mt-4">Unlimited everything. Future-proof from day one.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                        <div className="bg-white/5 rounded-3xl p-6 md:p-10">
                            <ul className="space-y-4 md:space-y-6 text-white/80">
                                <li className="flex gap-3 md:gap-4"><span className="text-[#00E6C3] text-xl md:text-2xl">✓</span> Unlimited custom fields, forms, and reports</li>
                                <li className="flex gap-3 md:gap-4"><span className="text-[#00E6C3] text-xl md:text-2xl">✓</span> Unlimited donor, volunteer, and contact records</li>
                                <li className="flex gap-3 md:gap-4"><span className="text-[#00E6C3] text-xl md:text-2xl">✓</span> Unlimited events, ticketing, and fundraising</li>
                                <li className="flex gap-3 md:gap-4"><span className="text-[#00E6C3] text-xl md:text-2xl">✓</span> Unlimited transactions &amp; text-to-give</li>
                                <li className="flex gap-3 md:gap-4"><span className="text-[#00E6C3] text-xl md:text-2xl">✓</span> All 9 core modules included</li>
                            </ul>
                        </div>
                        <div className="bg-white/5 rounded-3xl p-6 md:p-10">
                            <ul className="space-y-4 md:space-y-6 text-white/80">
                                <li className="flex gap-3 md:gap-4"><span className="text-[#00E6C3] text-xl md:text-2xl">✓</span> PCI Level 1 payments included</li>
                                <li className="flex gap-3 md:gap-4"><span className="text-[#00E6C3] text-xl md:text-2xl">✓</span> Future features (AI, advanced analytics) at no extra cost</li>
                                <li className="flex gap-3 md:gap-4"><span className="text-[#00E6C3] text-xl md:text-2xl">✓</span> SOC 2 • PCI Level 1 • GDPR compliant</li>
                                <li className="flex gap-3 md:gap-4"><span className="text-[#00E6C3] text-xl md:text-2xl">✓</span> No setup fees • No contracts • Cancel anytime</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9 MODULES */}
            <ModulesGrid />

            {/* FUTURE-PROOF */}
            <FutureProof />

            {/* FINAL CTA */}
            <CtaBanner
                title="Ready to scale your impact?"
                subtitle="Lock in the Founders Rate or get a custom Scale quote today."
                buttonText="Claim $499/mo Founders Rate"
            />
        </>
    );
}
