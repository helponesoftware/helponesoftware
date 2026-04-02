import Link from 'next/link';
import Image from 'next/image';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
    title: 'Partners – Strategic Alliances | HelpOne',
    description: 'Trusted technology leaders powering HelpOne. Revenue share, co-marketing, early access, and deep integrations that help nonprofits do more with less.',
    keywords: ['HelpOne partners', 'nonprofit technology partners', 'HelpOne integrations', 'revenue share partner program'],
    alternates: { canonical: 'https://helponesoftware.com/partners/' },
    openGraph: {
        title: 'Partners – Strategic Alliances | HelpOne',
        description: 'Trusted technology leaders powering HelpOne.',
        url: 'https://helponesoftware.com/partners/',
        images: [{ url: '/assets/Logo-06.png', alt: 'HelpOne Partners' }],
    },
};

export default function PartnersPage() {
    return (
        <>
            {/* HERO */}
            <Hero
                badge="Partners • Powering Nonprofit Success"
                title="Strategic Partners."
                titleAccent="Real Impact."
                subtitle="Trusted technology leaders powering HelpOne. Revenue share, co-marketing, early access, and deep integrations that help nonprofits do more with less."
                primaryCtaText="Become a Partner" primaryCtaLink="/contact-us" secondaryCtaText="Schedule Partnership Call" secondaryCtaLink="/contact-us" />

            {/* TRUST BAR */}
            <TrustBar items={[
                'SOC 2 • PCI Level 1',
                'Enterprise-Grade Integrations',
                'Revenue Share for Partners',
                'Co-Marketing Opportunities',
            ]} />

            {/* WHY PARTNER WITH HELPONE */}
            <section className="py-16 md:py-28 bg-[#0A1428]">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
                        {/* Left */}
                        <div>
                            <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                                Why Partner with HelpOne?
                            </h2>
                        </div>
                        {/* Right */}
                        <div>
                            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
                                We don&apos;t just integrate – we co-create success. Our partners get revenue share, co-branded marketing, lead generation, and early access to new features while helping nonprofits run more efficiently.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    {
                                        label: 'REVENUE SHARE',
                                        desc: 'Earn ongoing commissions on every referral and integration',
                                    },
                                    {
                                        label: 'CO-MARKETING',
                                        desc: 'Joint webinars, case studies, and featured placements',
                                    },
                                    {
                                        label: 'EARLY ACCESS',
                                        desc: 'Test and shape new features before public launch',
                                    },
                                    {
                                        label: 'DEEP INTEGRATION',
                                        desc: 'Native, bidirectional sync with the full HelpOne OS',
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

            {/* FEATURED PARTNERS */}
            <section className="py-16 md:py-28 bg-black">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                            Featured Partners
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                        {/* Citinet Solutions */}
                        <div className="bg-[#111827] border border-white/5 hover:border-[#00E6C3]/30 rounded-2xl p-8 md:p-10 flex flex-col gap-6 transition-all">
                            <div className="flex items-center gap-4">
                                <div className="rounded-sm overflow-hidden border border-white/10 flex-shrink-0">
                                    <Image
                                        src="/assets/otherfiles/CNS_Logo.png"
                                        alt="Citinet Solutions"
                                        width={80}
                                        height={50}
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="heading-font text-2xl md:text-3xl font-bold">Citinet Solutions</h3>
                            </div>
                            <div className="text-[#00E6C3] text-xs font-semibold tracking-widest uppercase">
                                Principal Strategic Technology Partner
                            </div>
                            <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed">
                                <p>
                                    HelpOne is powered by Citinet Solutions, a leading U.S.-based payments and technology expert with over 20 years of experience helping organizations accept and manage donations securely and efficiently.
                                </p>
                                <p>
                                    Citinet specializes in high-volume payment processing, custom integrations for nonprofit software, compliance-focused solutions (PCI Level 1, GDPR, IRS-ready reporting), and scalable infrastructure for growing organizations.
                                </p>
                                <p className="text-[#00E6C3]/80 text-sm italic">
                                    Through our partnership, Citinet provides the robust payment gateway backbone that enables HelpOne&apos;s flat-rate pricing, unlimited transactions, and full white-labeling.
                                </p>
                            </div>
                            <Link
                                href="https://citinetsolutions.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#00E6C3] hover:text-white text-sm font-medium transition-colors [text-decoration:none] mt-auto"
                            >
                                Visit Citinet Solutions →
                            </Link>
                        </div>

                        {/* Intwinely */}
                        <div className="bg-[#111827] border border-white/5 hover:border-[#00E6C3]/30 rounded-2xl p-8 md:p-10 flex flex-col gap-6 transition-all">
                            <div className="flex items-center gap-4">
                                <div className="rounded-sm overflow-hidden border border-white/10 flex-shrink-0">
                                    <Image
                                        src="/assets/otherfiles/Intwinely_logo.png"
                                        alt="Intwinely"
                                        width={80}
                                        height={50}
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="heading-font text-2xl md:text-3xl font-bold">Intwinely</h3>
                            </div>
                            <div className="text-[#00E6C3] text-xs font-semibold tracking-widest uppercase">
                                Strategic Partner
                            </div>
                            <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed">
                                <p>
                                    We are proud to collaborate with Intwinely, a company dedicated to helping small and medium businesses create unforgettable customer experiences through streamlined operations and improved employee engagement.
                                </p>
                                <p>
                                    Intwinely serves nonprofits, healthcare providers, educational institutions, and more. They focus on solving real-world challenges like operational firefighting, customer retention, team productivity, and reactive management.
                                </p>
                                <p className="text-[#00E6C3]/80 text-sm italic">
                                    This partnership complements HelpOne by reinforcing our commitment to operational excellence, customer-centric strategies, and long-term impact for the nonprofits we serve.
                                </p>
                            </div>
                            <Link
                                href="https://www.intwinely.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#00E6C3] hover:text-white text-sm font-medium transition-colors [text-decoration:none] mt-auto"
                            >
                                Visit Intwinely →
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* PARTNER PROGRAMS */}
            <section className="py-16 md:py-28 bg-[#0A1428]">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                            Partner Programs
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Technology Integration Partners',
                                desc: "Deep, native integrations with HelpOne's 9 modules. Early access and co-development.",
                            },
                            {
                                title: 'Referral Partners',
                                desc: 'Earn generous recurring revenue share on every referred nonprofit that signs up.',
                            },
                            {
                                title: 'Strategic Alliances',
                                desc: 'Co-marketing, joint events, and white-label opportunities for enterprise partners.',
                            },
                        ].map((program) => (
                            <div
                                key={program.title}
                                className="bg-white/5 border border-white/10 hover:border-[#00E6C3]/40 rounded-2xl p-8 transition-all"
                            >
                                <h3 className="text-xl md:text-2xl font-semibold mb-4">{program.title}</h3>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed">{program.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BECOME A HELPONE PARTNER TODAY */}
            <section className="py-20 md:py-32 bg-black text-center">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <h2 className="heading-font text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
                        Become a HelpOne Partner Today
                    </h2>
                    <p className="text-white/65 text-lg md:text-xl max-w-xl mx-auto mb-12">
                        Join the fastest-growing nonprofit operating system and start earning while helping organizations do more good.
                    </p>
                    <div className="inline-flex flex-col items-center gap-3 bg-[#111827] rounded-3xl p-6 md:p-8">
                        <Link
                            href="/contact-us"
                            className="px-10 py-5 bg-[#00E6C3] hover:bg-white text-[#0A1428] text-lg font-semibold rounded-2xl transition-colors [text-decoration:none]"
                        >
                            Apply to Become a Partner
                        </Link>

                    </div>
                </div>
            </section>
            {/* CTA BANNER */}
            <CtaBanner
                title="Ready to partner and grow together?"
                subtitle="Let’s build the future of nonprofit technology."
                buttonText="Book a Partnership Call"
            />
        </>
    );
}
