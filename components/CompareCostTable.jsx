import React from 'react';

const rows = [
    {
        platform: 'HelpOne',
        startingPrice: '$499/mo',
        typicalCost: '$499–$599/mo',
        limitations: 'None — full platform included',
        advantage: 'All-in-one • Free migration • No add-ons',
        highlight: true,
    },
    {
        platform: 'DonorDock',
        startingPrice: '$500/mo',
        typicalCost: '$500 + $3,800 setup',
        limitations: 'Limited volunteers, events, finance, HR',
        advantage: 'Still need extra tools',
    },
    {
        platform: 'Bloomerang',
        startingPrice: '$125+/mo CRM',
        typicalCost: '$250–$500+/mo',
        limitations: 'Modules sold separately • Contact-based pricing',
        advantage: 'Fragmented + growing cost',
    },
    {
        platform: 'Little Green Light',
        startingPrice: '$45/mo',
        typicalCost: '$75–$150/mo',
        limitations: 'Basic CRM only • Weak events/volunteers/finance',
        advantage: 'Outgrown quickly',
    },
    {
        platform: 'Salesforce Nonprofit Cloud',
        startingPrice: '$60–$100/user',
        typicalCost: '$30k–$100k+ setup',
        limitations: 'Complex • Consultant-heavy • Slow',
        advantage: 'Overkill for most orgs',
    },
    {
        platform: 'VolunteerHub',
        startingPrice: '$143–$288/mo',
        typicalCost: '$200–$400+/mo',
        limitations: 'Volunteers only • No full CRM/finance',
        advantage: 'Still need 2–3 other systems',
    },
    {
        platform: 'WildApricot',
        startingPrice: '$60–$66/mo',
        typicalCost: '$140–$440+/mo',
        limitations: 'Contact-based pricing • Membership-focused • Weak finances/HR',
        advantage: 'Price rises with every contact',
    },
];

export default function CompareCostTable() {
    return (
        <section id="comparison" className="py-16 md:py-24 bg-[#0A1428] text-white scroll-mt-24">
            <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-12 md:mb-16">
                    <h2 data-aos="fade-up" className="heading-font text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                        Real Cost of Ownership
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                        What you actually pay when you add up the pieces most nonprofits need.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
                    <div className="min-w-[900px] p-4 sm:p-6">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="py-5 pr-6 text-sm font-medium text-white/60">Platform</th>
                                    <th className="py-5 px-4 text-sm font-medium text-white/60 text-center">Starting Price</th>
                                    <th className="py-5 px-4 text-sm font-medium text-white/60 text-center">Typical Mid-Size Cost</th>
                                    <th className="py-5 px-4 text-sm font-medium text-white/60 text-center">Key Limitations</th>
                                    <th className="py-5 px-4 text-sm font-medium text-[#00E6C3] text-center">HelpOne Advantage</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {rows.map((row) => (
                                    <tr
                                        key={row.platform}
                                        className={`border-b border-white/10 ${row.highlight ? 'bg-[#00E6C3]/10' : ''}`}
                                    >
                                        <td className={`py-5 pr-6 ${row.highlight ? 'font-semibold text-[#00E6C3]' : 'font-medium'}`}>
                                            {row.platform}
                                        </td>
                                        <td className="py-5 px-4 text-center font-mono">{row.startingPrice}</td>
                                        <td className="py-5 px-4 text-center font-mono">{row.typicalCost}</td>
                                        <td className="py-5 px-4 text-center text-white/70">{row.limitations}</td>
                                        <td className={`py-5 px-4 text-center ${row.highlight ? 'text-[#00E6C3] font-medium' : 'text-white/50'}`}>
                                            {row.advantage}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <p className="text-center text-white/50 text-sm mt-8">
                    Pricing based on publicly available information as of 2026. Actual costs vary by size and add-ons.
                </p>
            </div>
        </section>
    );
}
