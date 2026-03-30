import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import Link from 'next/link';
import AutomatedProcessor from '../../components/AutomatedProcessor';
import SwitchingIsSimple from '../../components/SwitchingIsSimple';
import WhoItsFor from '../../components/WhoItsFor';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import FoundersProgram from '../../components/FoundersProgram';
import CtaBanner from '../../components/CtaBanner';
import PreHeroBanner from '../../components/PreHeroBanner';

export const metadata = {
    title: 'Switching to HelpOne Payments | HelpOne Software',
    description: 'Switch to HelpOne Payments and save thousands every year. Simple, fast, and zero workflow change.',
};

const trustItems = [
    '🛡️ SOC 2 • PCI Level 1',
    'AES-256 • GDPR',
    'Built exclusively for nonprofits',
    '30+ years nonprofit workflow expertise'
];

export default function SwitchingPage() {
    return (
        <main className="min-h-screen bg-[#0A1428]">
            <PreHeroBanner />
            {/* HERO SECTION */}
            <Hero
                badge="Switching to HelpOne Payments"
                title="Switch to HelpOne Payments,"
                titleAccent="Save Thousands Every Year."
                subtitle={
                    <span className="block text-lg md:text-xl text-white/90 font-medium">
                        You do NOT need a HelpOne subscription to sign up.<br />
                        Whether you&apos;re on QuickBooks Payments, PayPal,<br />
                        Donorbox, Zeffy, Givebutter or another platform —<br />
                        switching is simple, fast, and zero-workflow-change.<br />
                        Flat-rate $1.75/tx + $15/mo. No percentages. No contracts.<br />
                        No monthly minimums.
                    </span>
                }
                primaryCtaText="Schedule Free Demo"
                primaryCtaLink="/contact-us"
                secondaryCtaText="Claim Founders Rate — $499/mo forever"
                secondaryCtaLink="/pricing"
            />

            {/* TRUST BAR */}
            <TrustBar items={trustItems} />

            {/* PERCENTAGE THIEVES SECTION */}
            <section className="py-24 md:py-32 bg-[#050914] border-b border-white/5">
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Left Column */}
                        <div>
                            <div className="text-[#00E6C3] font-bold text-sm tracking-widest uppercase mb-4">
                                MOST PAYMENT PROCESSORS ARE
                            </div>
                            <h2 className="heading-font text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                                Percentage thieves.
                                <br />
                                You need flat-rate
                                <br />
                                freedom.
                            </h2>
                        </div>

                        {/* Right Column */}
                        <div>
                            <p className="text-lg text-white/80 leading-relaxed mb-12">
                                Unlike Stripe (2.9%+), PayPal, QuickBooks Payments, Donorbox, Zeffy or Givebutter (percentage fees + platform markup), switching to HelpOne is simple, fast, and zero-workflow-change. Use our secure payment links — just paste into invoices or replace your old checkout button. Flat-rate $1.75/tx + $15/mo (BYOP) or IC+ rates. Nonprofits save $500–$1,000+/month — often more than enough to cover the entire HelpOne platform.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-[#00E6C3] font-bold text-sm tracking-widest uppercase mb-3">
                                        ZERO WORKFLOW CHANGE
                                    </h4>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        Payment links work with QuickBooks, Donorbox, Zeffy, Givebutter — paste or replace button
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-[#00E6C3] font-bold text-sm tracking-widest uppercase mb-3">
                                        FLAT-RATE SAVINGS
                                    </h4>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        $1.75/tx + $15/mo beats percentages on 95% of gifts
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REAL MONTHLY SAVINGS TABLE */}
            <section className="py-24 md:py-32 bg-black border-b border-white/5">
                <div className="max-w-screen-xl mx-auto px-6 text-center">
                    <h2 className="heading-font text-4xl md:text-5xl font-bold text-white mb-4">
                        Real Monthly Savings
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 mb-16">
                        Based on $15,000 monthly processing volume (typical for growing nonprofits)
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="border-b border-white/10 text-white font-bold text-sm">
                                    <th className="py-6 px-6">Processor</th>
                                    <th className="py-6 px-6 text-center">Fee Structure</th>
                                    <th className="py-6 px-6 text-center">Monthly Cost</th>
                                    <th className="py-6 px-6 text-center text-[#00E6C3]">Monthly Savings vs HelpOne</th>
                                    <th className="py-6 px-6 text-center text-[#00E6C3]">Annual Savings</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/80 text-sm">
                                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="py-6 px-6 font-semibold text-white">Stripe</td>
                                    <td className="py-6 px-6 text-center">2.9% + $0.30</td>
                                    <td className="py-6 px-6 text-center">$465</td>
                                    <td className="py-6 px-6 text-center text-[#00E6C3] font-bold">$330</td>
                                    <td className="py-6 px-6 text-center text-[#00E6C3] font-bold">$3,960</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="py-6 px-6 font-semibold text-white">PayPal</td>
                                    <td className="py-6 px-6 text-center">2.99% + $0.49</td>
                                    <td className="py-6 px-6 text-center">$498</td>
                                    <td className="py-6 px-6 text-center text-[#00E6C3] font-bold">$363</td>
                                    <td className="py-6 px-6 text-center text-[#00E6C3] font-bold">$4,356</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="py-6 px-6 font-semibold text-white">QuickBooks Payments</td>
                                    <td className="py-6 px-6 text-center">2.9% + $0.30</td>
                                    <td className="py-6 px-6 text-center">$465</td>
                                    <td className="py-6 px-6 text-center text-[#00E6C3] font-bold">$330</td>
                                    <td className="py-6 px-6 text-center text-[#00E6C3] font-bold">$3,960</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="py-6 px-6 font-semibold text-white">Donorbox</td>
                                    <td className="py-6 px-6 text-center">3.0% + platform fee</td>
                                    <td className="py-6 px-6 text-center">$510+</td>
                                    <td className="py-6 px-6 text-center text-[#00E6C3] font-bold">$375+</td>
                                    <td className="py-6 px-6 text-center text-[#00E6C3] font-bold">$4,500+</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="py-6 px-6 font-semibold text-white">Zeffy</td>
                                    <td className="py-6 px-6 text-center">3.0% + platform fee</td>
                                    <td className="py-6 px-6 text-center">$510+</td>
                                    <td className="py-6 px-6 text-center text-[#00E6C3] font-bold">$375+</td>
                                    <td className="py-6 px-6 text-center text-[#00E6C3] font-bold">$4,500+</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="py-6 px-6 font-semibold text-white">Givebutter</td>
                                    <td className="py-6 px-6 text-center">3.0% + platform fee</td>
                                    <td className="py-6 px-6 text-center">$510+</td>
                                    <td className="py-6 px-6 text-center text-[#00E6C3] font-bold">$375+</td>
                                    <td className="py-6 px-6 text-center text-[#00E6C3] font-bold">$4,500+</td>
                                </tr>
                                <tr className="bg-[#00E6C3]/10">
                                    <td className="py-6 px-6 font-bold text-[#00E6C3]">HelpOne Payments</td>
                                    <td className="py-6 px-6 text-center text-[#00E6C3] font-bold">$1.75/tx + $15/mo</td>
                                    <td className="py-6 px-6 text-center text-[#00E6C3] font-bold">$135</td>
                                    <td className="py-6 px-6 text-center text-white/40">—</td>
                                    <td className="py-6 px-6 text-center text-white/40">—</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-white/40 text-sm mt-8">
                        Savings calculated at $15,000 monthly volume. Actual savings may vary. No contracts, no minimums.
                    </p>
                </div>
            </section>

            {/* TWO PATHS TO SWITCH */}
            <section className="py-24 md:py-32 bg-[#0A1428] border-b border-white/5">
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="heading-font text-4xl md:text-5xl font-bold text-white mb-4">
                            Two Paths to Switch – Choose Based on Your Current Setup
                        </h2>
                        <p className="text-lg md:text-xl text-white/70">
                            No setup fees. No contracts. No monthly minimums.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Card 1 */}
                        <div className="bg-[#121E38] border border-white/10 rounded-3xl p-10 flex flex-col hover:border-[#00E6C3]/40 transition-colors">
                            <div className="text-5xl mb-6">🛠️</div>
                            <h3 className="text-3xl font-bold text-white mb-6">Self-Service (Free)</h3>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00E6C3] font-bold mt-1">✓</span>
                                    <span className="text-white/80">Get your payment links in minutes</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00E6C3] font-bold mt-1">✓</span>
                                    <span className="text-white/80">Paste into QuickBooks, invoices, or replace old buttons</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00E6C3] font-bold mt-1">✓</span>
                                    <span className="text-white/80">1–3 day automated processor approval</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00E6C3] font-bold mt-1">✓</span>
                                    <span className="text-white/80">Full documentation & video guides</span>
                                </li>
                            </ul>
                            <Link
                                href="/contact-us"
                                className="inline-block w-full py-4 px-6 text-center border border-white/30 text-white font-bold rounded-2xl hover:bg-white hover:text-[#0A1428] transition-colors"
                            >
                                Start Self-Service Now (Free)
                            </Link>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#121E38] border border-white/10 rounded-3xl p-10 flex flex-col hover:border-[#00E6C3]/40 transition-colors">
                            <div className="text-5xl mb-6">🚀</div>
                            <h3 className="text-3xl font-bold text-white mb-6">Premium Migration (One-time fee)</h3>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00E6C3] font-bold mt-1">✓</span>
                                    <span className="text-white/80">Full data migration from your current processor</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00E6C3] font-bold mt-1">✓</span>
                                    <span className="text-white/80">Webhook setup & reconciliation</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00E6C3] font-bold mt-1">✓</span>
                                    <span className="text-white/80">Custom training & priority support</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00E6C3] font-bold mt-1">✓</span>
                                    <span className="text-white/80">Dedicated success manager</span>
                                </li>
                            </ul>
                            <Link
                                href="/contact-us"
                                className="inline-block w-full py-4 px-6 text-center bg-white text-[#0A1428] font-bold rounded-2xl hover:bg-[#00E6C3] transition-colors relative overflow-hidden group"
                            >
                                <span className="relative z-10">Get Premium Migration Quote</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT IS A PAYMENT LINK SECTION */}
            <section className="py-24 md:py-32 bg-black border-none">
                <div className="max-w-screen-xl mx-auto px-6 text-center">
                    <h2 className="heading-font text-4xl md:text-5xl font-bold text-white mb-6">
                        What Is a Payment Link &<br className="hidden sm:block" />How Does It Work?
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-20 leading-relaxed">
                        A simple, secure, branded link that replaces your old checkout button or invoice link.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#3B82F6] rounded-2xl flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg shadow-blue-500/20">
                                1
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">You get your link</h3>
                            <p className="text-white/70 leading-relaxed text-center">
                                We instantly generate a unique, branded payment link for your organization.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#3B82F6] rounded-2xl flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg shadow-blue-500/20">
                                2
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Paste or replace</h3>
                            <p className="text-white/70 leading-relaxed text-center">
                                Paste into QuickBooks notes, email signatures, or replace your old Donorbox/Zeffy button.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#3B82F6] rounded-2xl flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg shadow-blue-500/20">
                                3
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Donor pays instantly</h3>
                            <p className="text-white/70 leading-relaxed text-center">
                                Donor sees your branded page, pays securely, and funds hit your bank in 1–2 days.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AUTOMATED PROCESSOR */}
            <AutomatedProcessor />

            {/* SWITCHING IS SIMPLE */}
            <SwitchingIsSimple />

            {/* WHO ITS FOR */}
            <WhoItsFor />

            {/* MODULES GRID */}
            <ModulesGrid />

            {/* FUTURE PROOF */}
            <FutureProof />

            {/* FOUNDERS PROGRAM */}
            <FoundersProgram />

            {/* FINAL CTA BANNER */}
            <CtaBanner
                title={<>Ready to switch and<br className="hidden sm:block" />save thousands?</>}
                subtitle="Let's make the move simple and profitable."
                buttonText="Book Your Free Demo Today"
            />
        </main>
    );
}
