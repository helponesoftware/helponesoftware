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
    title: 'HelpOne — One Platform. Unlimited Missions.',
    description: 'HelpOne is the all-in-one nonprofit OS. Volunteer management, fundraising, events, donors, HR, finances & more — unlimited everything, one simple price.',
    keywords: ['nonprofit software', 'volunteer management software', 'nonprofit operating system', 'fundraising tools', 'donor management', 'nonprofit events platform', 'nonprofit HR software'],
    alternates: {
        canonical: 'https://helponesoftware.com/',
    },
    openGraph: {
        title: 'HelpOne — One Platform. Unlimited Missions.',
        description: 'Ditch 8+ logins. End spreadsheet chaos. The most beautiful, truly unlimited nonprofit OS ever built.',
        url: 'https://helponesoftware.com/',
        images: [{ url: '/assets/Logo-06.png', width: 2383, height: 872, alt: 'HelpOne' }],
    },
    twitter: {
        title: 'HelpOne — One Platform. Unlimited Missions.',
        description: 'Ditch 8+ logins. End spreadsheet chaos. The most beautiful nonprofit OS ever built.',
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
                subtitle={<>Ditch the 8+ logins. End spreadsheet chaos.<br />The most beautiful, truly unlimited nonprofit OS ever built.</>}
            />

            <TrustBar items={['SOC 2 • PCI Level 1', 'AES-256 • GDPR', 'Built exclusively for nonprofits', '30+ years nonprofit workflow expertise']} />

            {/* THE PROBLEM */}
            <section className="py-12 md:py-24 bg-[#0A1428]">
                <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                        <div className="md:col-span-5" data-aos="fade-right">
                            <div className="uppercase tracking-[3px] text-[#00E6C3] text-sm font-medium mb-3 md:mb-4">Most nonprofits run on</div>
                            <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-none tracking-tighter">Duct-taped tools.<br />You deserve better.</h2>
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

            {/* THE VISION */}
            <section id="platform" className="py-12 md:py-24 bg-gradient-to-b from-[#0A1428] to-black">
                <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20" data-aos="fade-up">
                        <div className="inline px-5 py-2 md:px-6 bg-[#00E6C3]/10 text-[#00E6C3] rounded-full text-sm font-medium">Built from first principles</div>
                        <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-4 md:mt-6">Your mission deserves Tesla-grade technology with Apple-grade simplicity.</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8">
                            <div className="flex gap-4 md:gap-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00E6C3]/10 rounded-2xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0">🌍</div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold">One unified dashboard</h3>
                                    <p className="text-white/70 mt-2 md:mt-3 text-sm md:text-base">Volunteers, donors, events, money, staff, policies — all in one breathtaking interface.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00E6C3]/10 rounded-2xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0">⚡</div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold">Instant impact</h3>
                                    <p className="text-white/70 mt-2 md:mt-3 text-sm md:text-base">QR check-ins, auto-thank-yous, 1-click 990s, self-service portals. Everything flows.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00E6C3]/10 rounded-2xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0">🛡️</div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold">Future-proof from day one</h3>
                                    <p className="text-white/70 mt-2 md:mt-3 text-sm md:text-base">Start with only what you need. Simply hide the rest — they disappear from your dashboard.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00E6C3]/10 rounded-2xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0">💳</div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold">Instant savings</h3>
                                    <p className="text-white/70 mt-2 md:mt-3 text-sm md:text-base">Payments is independently of the HelpOne system with lowest rates available. No subscription needed.</p>
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
                        <span className="text-[#00E6C3] text-sm font-medium tracking-widest">UNLIMITED ON EVERY PLAN</span>
                        <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-3 md:mt-4">No caps. No surprises.<br />Forever.</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { icon: 'fa-users', title: 'Unlimited Volunteers', desc: 'Shifts, QR check-ins, hours tracking & valuation' },
                            { icon: 'fa-calendar', title: 'Unlimited Events', desc: 'Ticketing, scheduling, multi-day, venues' },
                            { icon: 'fa-hand-holding-dollar', title: 'Unlimited Fundraising', desc: 'Auctions, pledges, donations, contests' },
                            { icon: 'fa-users-rectangle', title: 'Unlimited CRM', desc: 'Donors, contacts, companies, sponsors' },
                            { icon: 'fa-file-invoice-dollar', title: 'Unlimited Finances', desc: 'GAAP charts, auto 990 & CHAR500' },
                            { icon: 'fa-sms', title: 'Unlimited SMS/Texts', desc: 'To staff, volunteers, donors — instant' },
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
            <ModulesGrid />

            {/* FUTURE-PROOF */}
            <FutureProof />

            {/* FOUNDERS PROGRAM */}
            <section id="pricing" className="py-12 md:py-24 bg-gradient-to-b from-black to-[#0A1428]">
                <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
                    <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
                        <div className="text-5xl md:text-6xl mb-4 md:mb-6">🚀</div>
                        <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Founders Program</h2>
                        <p className="text-lg md:text-2xl mt-4 md:mt-6 text-white/80">Be among the first 250 nonprofits to lock in the lowest rate ever offered.</p>
                        <div className="mt-8 md:mt-12 bg-white/5 rounded-3xl p-6 md:p-12 border border-white/10">
                            <div className="text-5xl md:text-7xl font-mono font-bold text-[#00E6C3]">$499</div>
                            <div className="text-base md:text-xl mt-2">/month • locked for first 12 months</div>
                            <Link href="/contact-us" className="inline-block mt-8 md:mt-12 w-full py-5 md:py-7 bg-white text-[#0A1428] font-bold text-lg md:text-xl rounded-3xl hover:bg-[#00E6C3] transition-colors shadow-lg">
                                Secure My Founders Spot Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <CtaBanner />
        </>
    );
}
