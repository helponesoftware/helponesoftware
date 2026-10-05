import React from 'react';

const costs = [
    {
        emoji: '💸',
        title: 'Hidden Monthly Spend',
        body: 'CRM + Volunteer tool + Event tool + Accounting + HR = $400–$900+/month before anyone logs in. HelpOne replaces the stack for one flat rate.',
    },
    {
        emoji: '🧩',
        title: 'Data Silos Everywhere',
        body: 'Donor history lives in one system, volunteer hours in another, finance in a third. Reporting becomes a weekly export-and-paste nightmare.',
    },
    {
        emoji: '⏳',
        title: 'Staff Time Drain',
        body: 'Training on multiple platforms, fixing broken integrations, and reconciling data steals hours every week that should go to the mission.',
    },
];

export default function CompareToolSprawl() {
    return (
        <section className="py-16 md:py-24 bg-[#0A1428] text-white">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-12 md:mb-16">
                    <h2 data-aos="fade-up" className="heading-font text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                        The Real Cost of Tool Sprawl
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                        Most nonprofits end up with 3–5 separate systems. Here&apos;s what that actually costs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {costs.map((cost) => (
                        <div
                            key={cost.title}
                            data-aos="fade-up"
                            className="module-card bg-white/5 rounded-3xl p-8 lg:p-10 border border-white/10"
                        >
                            <div className="text-5xl mb-6">{cost.emoji}</div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">{cost.title}</h3>
                            <p className="text-white/70 leading-relaxed">{cost.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
