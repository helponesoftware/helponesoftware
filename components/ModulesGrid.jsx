import Link from 'next/link';

export default function ModulesGrid({ modules }) {
    const defaultModules = [
        { emoji: '👥', color: 'bg-[#00E6C3]', title: 'Volunteer Management', desc: 'Self-service portal, QR check-ins, skill matching, hours tracking that auto-feeds your 990.', href: '/volunteer-management' },
        { emoji: '🎟️', color: 'bg-violet-500', title: 'Event Management', desc: 'Unified hub, dynamic ticketing, multi-day schedules, volunteer sync.', href: '/event-management' },
        { emoji: '💰', color: 'bg-amber-500', title: 'Fundraising', desc: 'Auctions, pledges, donations, contests, sponsorships.', href: '/fundraising' },
        { emoji: '📇', color: 'bg-emerald-500', title: 'Donors & Contacts', desc: 'Rich profiles, history, smart folders, custom blasts.', href: '/donors-and-contacts' },
        { emoji: '📊', color: 'bg-rose-500', title: 'Finances', desc: 'GAAP charts, auto 990 & CHAR500, restricted funds.', href: '/finances' },
        { emoji: '👔', color: 'bg-sky-500', title: 'HR Solutions', desc: 'Onboarding, reviews, time-off, nonprofit-specific.', href: '/hr-solutions' },
        { emoji: '📜', color: 'bg-purple-500', title: 'Policies & Procedures', desc: 'Living books, approvals, instant PDF export.', href: '/policies-and-procedures' },
        { emoji: '📚', color: 'bg-orange-500', title: 'Training Tracking', desc: 'Assignments, reminders, progress dashboards.', href: '/training-tracking' },
        { emoji: '💻', color: 'bg-cyan-500', title: 'IT Asset Tracking', desc: 'Hardware, licenses, vendors, budget tracking.', href: '/it-asset-tracking-management' },
    ];

    const displayModules = modules || defaultModules;

    return (
        <section id="modules" className="py-12 md:py-24 bg-[#0A1428]">
            <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
                <div className="text-center mb-8 md:mb-16" data-aos="fade-up">
                    <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">9 Powerful Modules.<br />One breathtaking platform.</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
                    {displayModules.map((mod, index) => (
                        <div key={mod.title} className="module-card bg-white/5 rounded-3xl overflow-hidden" data-aos="fade-up" data-aos-delay={index * 50}>
                            <div className={`h-2 ${mod.color}`}></div>
                            <div className="p-5 md:p-8">
                                <div className="text-4xl md:text-5xl mb-4 md:mb-6">{mod.emoji}</div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">{mod.title}</h3>
                                <p className="text-white/70 text-sm leading-relaxed">{mod.desc}</p>
                                <Link href={mod.href} className="mt-5 md:mt-8 inline-flex items-center text-[#00E6C3] text-sm font-medium hover:underline">Explore →</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
