import Link from 'next/link';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';

export const metadata = {
    title: 'Affiliate Program — Earn While You Help Nonprofits | HelpOne',
    description: 'Join the HelpOne Affiliate Program and earn 20% recurring commissions for 12 months on every referred nonprofit. No minimums. Easy tracking. Marketing tools provided.',
    keywords: ['HelpOne affiliate', 'nonprofit software affiliate', 'recurring commissions', 'affiliate program'],
    alternates: { canonical: 'https://helponesoftware.com/affiliate/' },
    openGraph: {
        title: 'Affiliate Program — Earn While You Help Nonprofits | HelpOne',
        description: 'Earn 20% recurring commissions for 12 months on every nonprofit you refer.',
        url: 'https://helponesoftware.com/affiliate/',
        images: [{ url: '/assets/Logo-06.png', alt: 'HelpOne Affiliate Program' }],
    },
};

export default function AffiliatePage() {
    return (
        <>
            {/* HERO */}
            <Hero
                badge="Affiliate Program"
                title="Earn While You Help"
                titleAccent="Nonprofits Save Thousands."
                subtitle="Join the HelpOne Affiliate Program and earn 20% recurring commissions for 12 months on every referred nonprofit. No minimums. Easy tracking. Marketing tools provided."
             />

            {/* TRUST BAR */}
            <TrustBar items={[
                '20% Recurring for 12 Months',
                'No Minimums • Lifetime Access',
                'Real-Time Dashboard',
                'Dedicated Affiliate Manager',
            ]} />

            {/* WHY JOIN THE HELPONE AFFILIATE PROGRAM */}
            <section id="why-join" className="py-16 md:py-28 bg-[#0A1428]">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
                        {/* Left */}
                        <div>
                            <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                                Why Join the HelpOne Affiliate Program?
                            </h2>
                        </div>
                        {/* Right */}
                        <div>
                            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
                                Help nonprofits switch to flat-rate processing and save thousands every year — while you earn generous recurring commissions with zero risk.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    {
                                        label: '20% RECURRING',
                                        desc: 'For the first 12 months on every paid referral',
                                    },
                                    {
                                        label: 'EASY TRACKING',
                                        desc: 'Real-time dashboard and monthly payouts',
                                    },
                                    {
                                        label: 'MARKETING KIT',
                                        desc: 'Banners, emails, social posts, and case studies',
                                    },
                                    {
                                        label: 'NO MINIMUMS',
                                        desc: 'Start earning from your very first referral',
                                    },
                                ].map((item) => (
                                    <div key={item.label}>
                                        <div className="text-[#00E6C3] text-xs font-semibold tracking-widest uppercase mb-2">
                                            {item.label}
                                        </div>
                                        <p className="text-white/75 text-sm md:text-base leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS – 4 SIMPLE STEPS */}
            <section className="py-16 md:py-28 bg-black">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                            How It Works – 4 Simple Steps
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { step: '1', title: 'Sign Up Free', desc: 'Create your affiliate account in under 2 minutes.' },
                            { step: '2', title: 'Get Your Link', desc: 'Receive your unique referral link and marketing materials.' },
                            { step: '3', title: 'Share & Refer', desc: 'Share with nonprofits, consultants, or your network.' },
                            { step: '4', title: 'Earn Recurring', desc: 'Get paid 20% every month for 12 months per referral.' },
                        ].map((item) => (
                            <div key={item.step} className="flex flex-col items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4A9EFF] to-[#2563EB] flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-blue-500/25">
                                    {item.step}
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-[180px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AFFILIATE COMMISSION STRUCTURES */}
            <section className="py-16 md:py-28 bg-[#0A1428]">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-10 md:mb-14">
                        <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                            Affiliate Commission Structures
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl">
                            Simple, generous, and recurring — the best in the nonprofit tech space.
                        </p>
                    </div>
                    <div className="bg-[#0e1c33] border border-white/10 rounded-3xl overflow-hidden max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="grid grid-cols-3 px-8 py-5 border-b border-white/10 text-sm text-white/50 font-medium">
                            <span>Tier</span>
                            <span>Commission Rate</span>
                            <span>Duration</span>
                        </div>
                        {/* Row 1 */}
                        <div className="grid grid-cols-3 px-8 py-7 border-b border-white/10 items-center">
                            <div className="font-semibold text-white">Standard Referral</div>
                            <div className="text-[#00E6C3] text-2xl font-bold">20%</div>
                            <div className="text-white/70">
                                <div>Recurring for 12 months</div>
                                <div className="text-white/40 text-sm mt-1">$3,600 / year per referral</div>
                            </div>
                        </div>
                        {/* Row 2 */}
                        <div className="grid grid-cols-3 px-8 py-7 border-b border-white/10 items-center">
                            <div>
                                <div className="font-semibold text-white">High-Volume Partner</div>
                                <div className="text-white/40 text-sm">(10+ referrals/mo)</div>
                            </div>
                            <div className="text-[#00E6C3] text-2xl font-bold">25%</div>
                            <div className="text-white/70">
                                <div>Recurring for 12 months</div>
                                <div className="text-white/40 text-sm mt-1">$4,500 / year per referral</div>
                            </div>
                        </div>
                        {/* Footer notes */}
                        <div className="px-8 py-6 space-y-1.5 text-white/50 text-sm">
                            <div>• Paid monthly via PayPal or bank transfer</div>
                            <div>• No minimum payout threshold</div>
                            <div>• Lifetime access to your dashboard</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* READY TO START EARNING */}
            <section className="py-20 md:py-32 bg-black text-center">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-5">
                        Ready to Start Earning?
                    </h2>
                    <p className="text-white/65 text-lg md:text-xl max-w-xl mx-auto mb-12">
                        Join thousands of consultants, influencers, and nonprofits already earning with HelpOne.
                    </p>
                    <div className="inline-flex flex-col items-center gap-3 bg-[#111827] rounded-3xl p-6 md:p-8">
                        <Link
                            href="/contact-us"
                            className="px-10 py-5 bg-[#00E6C3] hover:bg-white text-[#0A1428] text-lg font-semibold rounded-2xl transition-colors [text-decoration:none]"
                        >
                            Join the Affiliate Program – Free
                        </Link>
                        <span className="text-white/40 text-sm">Instant approval • No fees • Start earning today</span>
                    </div>
                </div>
            </section>

            {/* TEAL CTA BANNER */}
            <section className="py-20 md:py-28 bg-[#00E6C3] text-center">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#0A1428] mb-8">
                        Help nonprofits save money.<br />
                        Earn while you do it.
                    </h2>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center justify-center px-10 py-5 bg-[#0A1428] hover:bg-black text-white text-lg font-semibold rounded-2xl transition-colors [text-decoration:none]"
                    >
                        Get Started Now
                    </Link>
                </div>
            </section>
        </>
    );
}
