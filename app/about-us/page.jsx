import Image from 'next/image';
import Hero from '../../components/Hero';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
    title: 'About HelpOne – Built for Nonprofits That Change the World',
    description: 'HelpOne was built because nonprofits deserve better than scattered tools, high fees, and endless logins. Learn our story, mission, and the team behind the platform.',
    keywords: ['about HelpOne', 'nonprofit software company', 'nonprofit platform story', 'HelpOne mission'],
    alternates: {
        canonical: 'https://helponesoftware.com/about-us/',
    },
    openGraph: {
        title: 'About HelpOne – Built for Nonprofits That Change the World',
        description: 'We built HelpOne because nonprofits deserve better than scattered tools, high fees, and endless logins.',
        url: 'https://helponesoftware.com/about-us/',
        images: [{ url: '/assets/Logo-06.png', alt: 'About HelpOne' }],
    },
    twitter: {
        title: 'About HelpOne – Built for Nonprofits That Change the World',
        description: 'We built HelpOne because nonprofits deserve better.',
    },
};

const trustPoints = [
    {
        emoji: '∞',
        title: 'Truly Unlimited',
        desc: 'Unlimited users, donors, volunteers, events, transactions, reports – no caps, no per-seat fees, no surprises.',
    },
    {
        emoji: '💰',
        title: 'Keep More of Every Gift',
        desc: 'Flat-rate processing at $1.75/tx (when you bring your processor) or low IC+ rates – save thousands every year.',
    },
    {
        emoji: '🔒',
        title: 'Your Data, Your Control',
        desc: 'Fully isolated, siloed databases. Your information is never shared or sold. SOC II, AES-256, PCI Level 1 compliant.',
    },
    {
        emoji: '🔄',
        title: 'Everything Connected',
        desc: 'Volunteer hours automatically value in your P&L, payments sync to finance, donor data flows to events – one source of truth.',
    },
    {
        emoji: '🚀',
        title: 'Future-Proof from Day One',
        desc: 'New AI tools, Impact Surveys, advanced analytics, and features are added at no extra cost.',
    },
    {
        emoji: '❤️',
        title: 'Built by Nonprofits, for Nonprofits',
        desc: 'We understand your challenges because we\'ve lived them. Every feature is designed around real nonprofit needs.',
    },
];

export default function AboutPage() {
    return (
        <>
            {/* HERO */}
            <Hero
                badge="About HelpOne"
                title="Tools That Actually Work."
                titleAccent="For Nonprofits That Actually Change the World."
                subtitle="We built HelpOne because nonprofits deserve better than scattered tools, high fees, and endless logins."
            />

            {/* OUR STORY */}
            <section className="py-16 md:py-28 bg-black">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div>
                            <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                                Our Story
                            </h2>
                        </div>
                        <div className="space-y-6 text-white/75 text-base md:text-lg leading-relaxed">
                            <p>
                                HelpOne was created because nonprofits deserve better than scattered software, high fees, and endless logins. We saw the frustration – mission-driven teams spending more time managing tools than making an impact. So we built something different: one secure, intuitive platform that puts your cause first.
                            </p>
                            <p>
                                Founded by a team with deep roots in nonprofit operations and custom technology, HelpOne draws from real-world experience. Our strategic partner,{' '}
                                <span className="text-[#00E6C3] font-medium">Citinet Solutions</span>, brings over 30 years of expertise in building affordable, scalable custom software solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR MISSION */}
            <section className="py-16 md:py-28 bg-[#0A1428]">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8">
                            Our Mission
                        </h2>
                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                            To give every nonprofit the tools they need to thrive – powerful, easy to use, and built around your mission, not someone else&apos;s.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY NONPROFITS TRUST HELPONE */}
            <section className="py-16 md:py-28 bg-black">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                            Why Nonprofits Trust HelpOne
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {trustPoints.map((point) => (
                            <div
                                key={point.title}
                                className="module-card bg-[#111827] rounded-2xl p-7 md:p-9 border border-white/5 hover:border-[#00E6C3]/30 transition-all"
                            >
                                <div className="text-4xl md:text-5xl mb-5">{point.emoji}</div>
                                <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">
                                    {point.title}
                                </h3>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                                    {point.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* POWERED BY */}
            <section className="py-16 md:py-24 bg-[#0A1428]">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10 text-center">
                    <p className="text-white/50 text-sm uppercase tracking-widest mb-6">
                        Powered by
                    </p>
                    <div className="inline-flex flex-col items-center gap-6">
                        <div className="flex items-center gap-5">
                            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
                                <Image
                                    src="/assets/otherfiles/CNS_Logo.png"
                                    alt="Citinet Solutions"
                                    width={160}
                                    height={80}
                                    className="object-cover"
                                />
                            </div>
                            <span className="heading-font text-2xl md:text-3xl font-bold text-white">
                                Citinet Solutions
                            </span>
                        </div>
                        <p className="text-white/60 text-sm md:text-base max-w-md leading-relaxed">
                            Our strategic technology partner with over 30 years of experience building secure, scalable solutions for nonprofits and enterprises.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <CtaBanner
                title="Ready to join the movement?"
                subtitle="Let’s build something better together."
                buttonText="Book Your Free Demo"
            />
        </>
    );
}
