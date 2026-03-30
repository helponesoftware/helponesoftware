import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import CtaButtons from '../../components/CtaButtons';
import Link from 'next/link';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import WhoItsFor from '../../components/WhoItsFor';
import AutomatedProcessor from '../../components/AutomatedProcessor';
import FoundersProgram from '../../components/FoundersProgram';
import PreHeroBanner from '../../components/PreHeroBanner';

export const metadata = {
    title: 'Payments | HelpOne Software',
    description: 'Flat-rate $1.75/tx + $15/mo for nonprofits and businesses. Keep more of every gift and process text-to-give, QR, Apple/Google Pay.',
};

const trustItems = [
    'SOC 2 • PCI Level 1',
    'AES-256 • GDPR',
    'Built exclusively for nonprofits',
    '30+ years nonprofit workflow expertise'
];

export default function PaymentsPage() {
    return (
        <main className="min-h-screen bg-[#0A1428]">
            <PreHeroBanner />
            {/* HERO SECTION */}
            <Hero
                badge="Payments • Part of the HelpOne OS"
                title="Nonprofit & Business"
                titleAccent="Payments, Rebuilt for Impact."
                subtitle="Flat-rate $1.75/tx + $15/mo (BYOP – bring your own processor). Unlimited transactions. Text-to-give, QR, Apple/Google Pay. Deep integrations. PCI Level 1. Keep more of every gift — no percentage fees stealing from your mission."
             />

            {/* TRUST BAR */}
            <TrustBar items={trustItems} />

            {/* PERCENTAGE THIEVES SECTION */}
            <section className="py-20 md:py-32 bg-[#0A1428]">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left */}
                        <div>
                            <span className="text-[#00E6C3] text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
                                MOST PAYMENT PROCESSORS ARE
                            </span>
                            <h2 className="heading-font text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                                Percentage thieves.
                                <br />
                                You need flat-rate freedom.
                            </h2>
                        </div>
                        {/* Right */}
                        <div className="space-y-8">
                            <p className="text-xl text-white/80 leading-relaxed font-light">
                                Unlike Stripe (2.9%+ fees), PayPal, or Square, HelpOne gives you <strong>flat $1.75/tx + $15/mo</strong> (bring your own processor) or competitive IC+ rates. Unlimited transactions. No setup fees. No contracts. No minimums. Deep native integration with Volunteer Management, Events, Fundraising, and Finances — auto 990 valuation and real-time P&L sync. Nonprofits and businesses report 20% higher giving and 40% faster collections.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-white/10">
                                <div>
                                    <span className="text-[#00E6C3] text-sm font-bold tracking-[0.1em] uppercase mb-2 block">
                                        FLAT-RATE REVOLUTION
                                    </span>
                                    <p className="text-white/80">
                                        $1.75/tx beats percentages on 95% of gifts
                                    </p>
                                </div>
                                <div>
                                    <span className="text-[#00E6C3] text-sm font-bold tracking-[0.1em] uppercase mb-2 block">
                                        TRULY UNLIMITED
                                    </span>
                                    <p className="text-white/80">
                                        No caps, no per-record fees, no vendor limits
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REAL MONTHLY SAVINGS TABLE */}
            <section className="py-20 bg-black">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-16">
                        <h2 className="heading-font text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                            Real Monthly Savings – Keep More for Your Mission
                        </h2>
                        <p className="text-white/60 text-lg">
                            Based on $15,000 monthly processing volume (typical for growing nonprofits & businesses)
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="border-b border-white/10 text-sm font-semibold uppercase tracking-wider text-white">
                                    <th className="py-6 px-6">Processor</th>
                                    <th className="py-6 px-6 text-center">Fee Structure</th>
                                    <th className="py-6 px-6 text-center">Monthly Cost</th>
                                    <th className="py-6 px-6 text-center text-[#00E6C3]">Monthly Savings vs HelpOne</th>
                                    <th className="py-6 px-6 text-center text-[#00E6C3]">Annual Savings</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-base">
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="py-5 px-6 font-medium text-white/90">Stripe</td>
                                    <td className="py-5 px-6 text-center text-white/70">2.9% + $0.30</td>
                                    <td className="py-5 px-6 text-center text-white/90">$465</td>
                                    <td className="py-5 px-6 text-center text-[#00E6C3] font-semibold">$330</td>
                                    <td className="py-5 px-6 text-center text-[#00E6C3] font-semibold">$3,960</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="py-5 px-6 font-medium text-white/90">PayPal</td>
                                    <td className="py-5 px-6 text-center text-white/70">2.99% + $0.49</td>
                                    <td className="py-5 px-6 text-center text-white/90">$498</td>
                                    <td className="py-5 px-6 text-center text-[#00E6C3] font-semibold">$363</td>
                                    <td className="py-5 px-6 text-center text-[#00E6C3] font-semibold">$4,356</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="py-5 px-6 font-medium text-white/90">QuickBooks Payments</td>
                                    <td className="py-5 px-6 text-center text-white/70">2.9% + $0.30</td>
                                    <td className="py-5 px-6 text-center text-white/90">$465</td>
                                    <td className="py-5 px-6 text-center text-[#00E6C3] font-semibold">$330</td>
                                    <td className="py-5 px-6 text-center text-[#00E6C3] font-semibold">$3,960</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="py-5 px-6 font-medium text-white/90">Donorbox</td>
                                    <td className="py-5 px-6 text-center text-white/70">3.0% + platform fee</td>
                                    <td className="py-5 px-6 text-center text-white/90">$510+</td>
                                    <td className="py-5 px-6 text-center text-[#00E6C3] font-semibold">$375+</td>
                                    <td className="py-5 px-6 text-center text-[#00E6C3] font-semibold">$4,500+</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="py-5 px-6 font-medium text-white/90">Zeffy</td>
                                    <td className="py-5 px-6 text-center text-white/70">3.0% + platform fee</td>
                                    <td className="py-5 px-6 text-center text-white/90">$510+</td>
                                    <td className="py-5 px-6 text-center text-[#00E6C3] font-semibold">$375+</td>
                                    <td className="py-5 px-6 text-center text-[#00E6C3] font-semibold">$4,500+</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="py-5 px-6 font-medium text-white/90">Givebutter</td>
                                    <td className="py-5 px-6 text-center text-white/70">3.0% + platform fee</td>
                                    <td className="py-5 px-6 text-center text-white/90">$510+</td>
                                    <td className="py-5 px-6 text-center text-[#00E6C3] font-semibold">$375+</td>
                                    <td className="py-5 px-6 text-center text-[#00E6C3] font-semibold">$4,500+</td>
                                </tr>
                                <tr className="bg-[#00E6C3]/10 border border-[#00E6C3]/20">
                                    <td className="py-5 px-6 font-bold text-[#00E6C3]">HelpOne Payments</td>
                                    <td className="py-5 px-6 text-center text-[#00E6C3] font-bold">$1.75/tx + $15/mo</td>
                                    <td className="py-5 px-6 text-center text-[#00E6C3] font-bold">$135</td>
                                    <td className="py-5 px-6 text-center font-bold text-white/40">—</td>
                                    <td className="py-5 px-6 text-center font-bold text-white/40">—</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center text-white/40 text-sm mt-8">
                        Savings calculated at $15,000 monthly volume. Actual savings may vary. No contracts, no minimums.
                    </p>
                </div>
            </section>

            {/* BYOP SECTION */}
            <section className="py-20 md:py-32 bg-[#0A1428]">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-16">
                        <h2 className="heading-font text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Bring Your Own Processor (BYOP)
                        </h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Already have a merchant account? Keep it and just connect to HelpOne for the lowest flat rate.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
                            {/* Desktop Divider */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2"></div>

                            {/* Left */}
                            <div>
                                <span className="text-[#00E6C3] text-sm font-bold tracking-[0.1em] uppercase mb-6 block">
                                    IF YOU ALREADY HAVE A PROCESSOR
                                </span>
                                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                                    Bring your existing merchant account (PayPal, Stripe, etc.) and pay only $1.75/tx + $15/mo gateway fee. No change to your bank deposits.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start text-white/80">
                                        <i className="fas fa-check text-[#00E6C3] mt-1 mr-3 flex-shrink-0 text-xl"></i>
                                        <span>Connect in minutes</span>
                                    </li>
                                    <li className="flex items-start text-white/80">
                                        <i className="fas fa-check text-[#00E6C3] mt-1 mr-3 flex-shrink-0 text-xl"></i>
                                        <span>Keep your current rates where you want</span>
                                    </li>
                                    <li className="flex items-start text-white/80">
                                        <i className="fas fa-check text-[#00E6C3] mt-1 mr-3 flex-shrink-0 text-xl"></i>
                                        <span>Enjoy HelpOne's low gateway fee</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right */}
                            <div>
                                <span className="text-[#00E6C3] text-sm font-bold tracking-[0.1em] uppercase mb-6 block">
                                    IF YOU NEED A PROCESSOR
                                </span>
                                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                                    Use our fast, automated approval system or premium migration. No setup fees either way.
                                </p>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex items-start gap-3">
                                        <span className="text-white/40">1.</span> Sign up for HelpOne Payments (free)
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white/40">2.</span> Choose "Need a processor"
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white/40">3.</span> Complete 60-second questionnaire
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white/40">4.</span> Get approved in 1-3 business days
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white/40">5.</span> Receive your payment links instantly
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE FEATURES SECTION */}
            <section className="py-20 md:py-32 bg-black">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-16">
                        <h2 className="heading-font text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Core Features. Pure Savings.
                        </h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Text-to-give, QR, Apple/Google Pay, recurring, auto-card updater — all unlimited.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="bg-[#0A1428] border border-white/5 rounded-2xl p-8 hover:border-white/10 hover:bg-[#0f1b33] transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                                <i className="fas fa-credit-card text-2xl text-blue-400"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Flat-Rate Processing</h3>
                            <p className="text-white/70 leading-relaxed mb-6">
                                $1.75/tx + $15/mo (BYOP – bring your own processor) or IC + 0.40% + $0.30/tx + $15/mo. No percentage fees. No setup. No contracts. No minimums.
                            </p>
                            <div className="text-[#00E6C3] text-sm font-semibold">
                                Outcome: Keep 99.98% of every gift.
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#0A1428] border border-white/5 rounded-2xl p-8 hover:border-white/10 hover:bg-[#0f1b33] transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                                <i className="fas fa-mobile-alt text-2xl text-purple-400"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Text-to-Give & QR Payments</h3>
                            <p className="text-white/70 leading-relaxed mb-6">
                                Instant donations via text or QR code. Seamless, branded, unlimited — integrated with fundraising.
                            </p>
                            <div className="text-[#00E6C3] text-sm font-semibold">
                                Outcome: 40% faster collections.
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#0A1428] border border-white/5 rounded-2xl p-8 hover:border-white/10 hover:bg-[#0f1b33] transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center mb-6">
                                <i className="fas fa-sync-alt text-2xl text-sky-400"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Auto-Card Updater & Recurring</h3>
                            <p className="text-white/70 leading-relaxed mb-6">
                                Refresh expired cards automatically ($0.21/tx optional). Recurring gifts with one-click setup.
                            </p>
                            <div className="text-[#00E6C3] text-sm font-semibold">
                                Outcome: Higher retention and recurring revenue.
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#0A1428] border border-white/5 rounded-2xl p-8 hover:border-white/10 hover:bg-[#0f1b33] transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6">
                                <i className="fas fa-file-invoice-dollar text-2xl text-indigo-400"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Invoicing & Hosted Pages</h3>
                            <p className="text-white/70 leading-relaxed mb-6">
                                Create/send unlimited invoices ($0.05/tx). Beautiful hosted checkout pages and buttons.
                            </p>
                            <div className="text-[#00E6C3] text-sm font-semibold">
                                Outcome: Professional donor experience.
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-[#0A1428] border border-white/5 rounded-2xl p-8 hover:border-white/10 hover:bg-[#0f1b33] transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6">
                                <i className="fas fa-shield-alt text-2xl text-cyan-400"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">PCI Level 1 Security & Fraud Tools</h3>
                            <p className="text-white/70 leading-relaxed mb-6">
                                Zero liability for card data. Advanced fraud prevention included at minimal cost.
                            </p>
                            <div className="text-[#00E6C3] text-sm font-semibold">
                                Outcome: Protected and trusted giving.
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-[#0A1428] border border-white/5 rounded-2xl p-8 hover:border-white/10 hover:bg-[#0f1b33] transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6">
                                <i className="fas fa-link text-2xl text-orange-400"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Deep HelpOne Integrations</h3>
                            <p className="text-white/70 leading-relaxed mb-6">
                                Auto-sync with Fundraising, Events, Volunteers (valued hours to P&L), and Form 990 reporting.
                            </p>
                            <div className="text-[#00E6C3] text-sm font-semibold">
                                Outcome: One platform, zero data entry.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO ITS FOR SECTION */}
            <WhoItsFor />

            {/* 9 MODULES */}
            <ModulesGrid />

            {/* FUTURE-PROOF */}
            <FutureProof />

            {/* READY TO SWITCH TO HELPONE PAYMENTS */}
            <section className="py-20 bg-[#0A1428]">
                <div className="max-w-screen-md mx-auto px-6 text-center">
                    <h2 className="heading-font text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to Switch to HelpOne Payments?
                    </h2>
                    <p className="text-base md:text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed block">
                        Zero-workflow-change payment links, premium migration options, and massive savings await. See how simple it is to start saving thousands every year.
                    </p>
                    <Link
                        href="/switching-to-helpone-payments/"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[#00E6C3] text-[#0A1428] font-bold rounded-2xl hover:bg-white transition-colors"
                    >
                        Learn How to Switch In Minutes ➔
                    </Link>
                </div>
            </section>

            {/* ACCESS THE AUTOMATED PROCESSOR */}
            <AutomatedProcessor />

            {/* FOUNDERS PROGRAM */}
            <FoundersProgram />

            {/* FINAL CTA BANNER */}
            <section className="py-20 md:py-24 bg-[#00E6C3] text-center">
                <div className="max-w-screen-md mx-auto px-6">
                    <h2 className="heading-font text-3xl md:text-5xl font-bold text-[#0A1428] mb-6">
                        Ready to keep more of<br className="hidden sm:block" />every gift?
                    </h2>
                    <p className="text-[#0A1428]/80 text-lg md:text-xl font-medium mb-10">
                        Let's make payments work for your mission.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center justify-center px-10 py-4 bg-[#0A1428] text-white font-bold rounded-xl hover:bg-[#1a2640] transition-colors"
                    >
                        Book Your Free Demo Today
                    </Link>
                </div>
            </section>
        </main>
    );
}
