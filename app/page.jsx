import Image from 'next/image';
import Link from 'next/link';
import { BookDemoButton, ClaimFoundersButton, WatchVideoButton } from '../components/CtaButtons';
import Hero from '../components/Hero';
import CtaBanner from '../components/CtaBanner';
import TrustBar from '../components/TrustBar';
import ModulesGrid from '../components/ModulesGrid';
import FutureProof from '../components/FutureProof';
import homepageImg from '../assets/homepage.png';

export const metadata = {
    title: 'HelpOne – One Platform. Unlimited Missions.',
    description: 'Manage donors, volunteers, fundraising, events, finances, and more – without juggling multiple tools, paying per user, or dealing with hidden fees.',
    keywords: ['nonprofit software', 'volunteer management software', 'nonprofit operating system', 'fundraising tools', 'donor management', 'nonprofit events platform', 'nonprofit HR software'],
    alternates: {
        canonical: 'https://helponesoftware.com/',
    },
    openGraph: {
        title: 'HelpOne – One Platform. Unlimited Missions.',
        description: 'Manage donors, volunteers, fundraising, events, finances, and more – without juggling multiple tools, paying per user, or dealing with hidden fees.',
        url: 'https://helponesoftware.com/',
        images: [{ url: '/assets/Logo-06.png', width: 2383, height: 872, alt: 'HelpOne' }],
    },
    twitter: {
        title: 'HelpOne – One Platform. Unlimited Missions.',
        description: 'Manage donors, volunteers, fundraising, events, finances, and more – without juggling multiple tools, paying per user, or dealing with hidden fees.',
    },
};

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <Hero
                badge="Founders Beta • Only 217 spots left"
                title="One Platform."
                titleAccent="Unlimited Missions."
                subtitle="Manage donors, volunteers, fundraising, events, finances, and more – without juggling multiple tools, paying per user, or dealing with hidden fees."
                primaryCtaText="Book a free demo"
                secondaryCtaText="Watch our 2-min product walkthrough"
                secondaryCtaLink="/#video"
            />

            <TrustBar items={['SOC 2 • PCI Level 1', 'AES-256 • GDPR', 'Built exclusively for nonprofits', '30+ years nonprofit workflow expertise']} />

            {/* THE PROBLEM */}
            <section className="py-12 md:py-24 bg-[#0A1428]">
                <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                        <div className="md:col-span-5" data-aos="fade-right">
                            <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-none tracking-tighter">The problem most nonprofits face – You&apos;re probably using 5–8 different tools that don&apos;t talk to each other.</h2>
                        </div>
                        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                            <div className="bg-white/5 p-5 md:p-8 rounded-3xl" data-aos="fade-up" data-aos-delay="100">
                                <div className="text-3xl md:text-4xl mb-3 md:mb-6">8+</div>
                                <div className="font-semibold text-lg md:text-xl mb-1 md:mb-2">Logins &amp; passwords</div>
                                <div className="text-white/70 text-sm md:text-base">VolunteerHub. Bloomerang. QuickBooks. SignUpGenius. Google Sheets...</div>
                            </div>
                            <div className="bg-white/5 p-5 md:p-8 rounded-3xl" data-aos="fade-up" data-aos-delay="200">
                                <div className="text-3xl md:text-4xl mb-3 md:mb-6">∞</div>
                                <div className="font-semibold text-lg md:text-xl mb-1 md:mb-2">Manual spreadsheets</div>
                                <div className="text-white/70 text-sm md:text-base">Hours tracking. Donor lists. 990 prep. Event tasks.</div>
                            </div>
                            <div className="bg-white/5 p-5 md:p-8 rounded-3xl" data-aos="fade-up" data-aos-delay="300">
                                <div className="text-3xl md:text-4xl mb-3 md:mb-6">$</div>
                                <div className="font-semibold text-lg md:text-xl mb-1 md:mb-2">Hidden fees everywhere</div>
                                <div className="text-white/70 text-sm md:text-base">Per-record. Per-user. Per-event. 3%+ payment processing.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* HELPONE BRINGS IT TOGETHER */}
            <section className="py-12 md:py-24 bg-black">
                <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
                        <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">HelpOne brings it together</h2>
                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                            One login. Truly unlimited volunteers, donors, events, and records. Flat monthly pricing. And payment processing rates that can save the average organization thousands per year.
                        </p>
                    </div>
                </div>
            </section>

            {/* THE VISION */}
            <section id="platform" className="py-12 md:py-24 bg-gradient-to-b from-[#0A1428] to-black">
                <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20" data-aos="fade-up">
                        <div className="inline-block px-5 py-2 md:px-6 bg-[#00E6C3]/10 text-[#00E6C3] rounded-3xl text-sm font-medium">Start with what you need – grow when you&apos;re ready</div>
                        <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-4 md:mt-6">HelpOne is built exclusively for nonprofits with over 30 years of combined workflow experience.</h2>
                        <p className="text-white/70 mt-6 text-lg">It gives you one clean, simple dashboard where everything lives together – no more switching between tools.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8">
                            <div className="flex gap-4 md:gap-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00E6C3]/10 rounded-2xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0">🌍</div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold">One unified dashboard</h3>
                                    <p className="text-white/70 mt-2 md:mt-3 text-sm md:text-base">Volunteers, donors, events, finances, staff, and policies – all in one place. Hide any module you’re not using yet so your dashboard stays clean and focused.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00E6C3]/10 rounded-2xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0">⚡</div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold">Instant impact</h3>
                                    <p className="text-white/70 mt-2 md:mt-3 text-sm md:text-base">QR code check-ins, automated thank-you messages, self-service portals, hours tracking, and one-click 990 & CHAR500 reporting – so your team spends less time on admin and more time on your mission.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00E6C3]/10 rounded-2xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0">🛡️</div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold">Future-proof from day one</h3>
                                    <p className="text-white/70 mt-2 md:mt-3 text-sm md:text-base">Activate modules as you grow. Everything is already connected, so there’s no messy data migration later.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00E6C3]/10 rounded-2xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0">💳</div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold">Real savings on payments</h3>
                                    <p className="text-white/70 mt-2 md:mt-3 text-sm md:text-base">Process donations and payments directly in HelpOne with competitive flat rates or low interchange-plus pricing. Most organizations will save thousands per year. No subscription to HelpOne need to use Payments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#00E6C3]/5 to-transparent border border-[#00E6C3]/20 rounded-3xl p-5 md:p-10 relative" data-aos="zoom-in" data-aos-delay="200">
                            <Image src={homepageImg} alt="Dashboard Preview" width={800} height={600} className="rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* UNLIMITED EVERYTHING */}
            <section className="py-12 md:py-24 bg-black">
                <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-8 md:mb-16" data-aos="fade-up">
                        <span className="text-[#00E6C3] text-sm font-medium tracking-widest uppercase">Truly unlimited on every plan</span>
                        <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-3 md:mt-4">No per-record limits. No surprises.</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { icon: 'fa-users', title: 'Unlimited Volunteers', desc: 'Shifts, QR check-ins, hours tracking & valuation' },
                            { icon: 'fa-calendar', title: 'Unlimited Events', desc: 'Ticketing, scheduling, multi-day, venues' },
                            { icon: 'fa-hand-holding-dollar', title: 'Unlimited Fundraising', desc: 'Auctions, pledges, donations, contests' },
                            { icon: 'fa-users-rectangle', title: 'Unlimited CRM', desc: 'Donors, contacts, companies, sponsors' },
                            { icon: 'fa-file-invoice-dollar', title: 'Unlimited Finances', desc: 'GAAP charts, auto 990 & CHAR500' },
                            { icon: 'fa-sms', title: 'Unlimited SMS/Texts', desc: 'To staff, volunteers, donors – instant' },
                            { icon: 'fa-file-signature', title: 'Unlimited e-Signatures', desc: 'Onboarding, offers, policies' },
                            { icon: 'fa-shield-alt', title: 'Unlimited Policies', desc: 'Living books, chapters, auto-PDFs' },
                        ].map((item, index) => (
                            <div key={item.title} className="bg-white/5 p-4 md:p-8 rounded-3xl hover:bg-white/10 transition-all" data-aos="fade-up" data-aos-delay={index * 50}>
                                <i className={`fas ${item.icon} text-2xl md:text-4xl text-[#00E6C3] mb-3 md:mb-6`}></i>
                                <h4 className="font-semibold text-base md:text-xl">{item.title}</h4>
                                <p className="text-white/70 mt-1 md:mt-3 text-xs md:text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9 POWERFUL MODULES */}
            <ModulesGrid title="9 Powerful Modules. One platform." />

            {/* FUTURE-PROOF */}
            <FutureProof />

            {/* FROM THE FOUNDER */}
            <section className="py-12 md:py-24 bg-white/5 border-t border-b border-white/10">
                <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <h2 className="heading-font text-3xl md:text-5xl font-bold tracking-tighter mb-8">From the Founder</h2>
                        <p className="text-xl text-white/90 leading-relaxed italic mb-6">
                             &quot;Hi, I’m Edward Zaremba, Founder & CEO of HelpOne. After years working closely with nonprofits and seeing the daily frustration of fragmented tools and high fees, I built HelpOne to make operations simpler and more affordable. We’re a new platform and we’re growing it together with a small group of early organizations. If you’re open to working with us as we improve, I’d love to show you the system personally.&quot;
                        </p>
                    </div>
                </div>
            </section>

            {/* FOUNDERS PROGRAM */}
            <section id="pricing" className="py-12 md:py-24 bg-gradient-to-b from-black to-[#0A1428]">
                <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
                        <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">Founders Program – Early Access</h2>
                        <p className="text-lg md:text-xl text-white/80 mb-10">
                            We’re intentionally onboarding a limited number of founding organizations so we can provide hands-on support and incorporate your feedback directly into the product.
                        </p>
                        
                        <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 mb-12">
                            <div className="text-4xl md:text-5xl font-bold text-[#00E6C3] mb-4">Early pricing: $499/month</div>
                            <p className="text-white/60 text-lg mb-8">(locked for the first 12 months) with a permanent 20% lifetime discount for those who join now.</p>
                            
                            <div className="grid md:grid-cols-3 gap-6 text-left border-t border-white/10 pt-8 mt-8">
                                <div className="flex gap-3">
                                    <span className="text-[#00E6C3]">✓</span>
                                    <span className="text-white/90">Direct access to our team</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[#00E6C3]">✓</span>
                                    <span className="text-white/90">Priority support</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[#00E6C3]">✓</span>
                                    <span className="text-white/90">Influence on the roadmap</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact-us" className="px-10 py-5 bg-[#00E6C3] text-[#0A1428] font-bold text-lg rounded-2xl hover:bg-white transition-all shadow-lg">
                                Secure My Founding Spot
                            </Link>
                            <Link href="/contact-us" className="px-10 py-5 border border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all text-center">
                                Book a free demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <CtaBanner 
                title="Ready to see if HelpOne is a fit for your organization?"
                subtitle="Book a free personalized demo today."
                buttonText="Book Free Demo"
            />
        </>
    );
}
