import React from 'react';

const reasons = [
    {
        title: 'One Login. Everything.',
        body: 'Volunteers, donors, events, finances, HR, policies, training, and IT assets live in a single system. No more switching tabs or exporting CSVs.',
    },
    {
        title: 'Transparent, Flat Pricing',
        body: 'No per-contact fees, no per-user fees that punish growth, no surprise module charges. Founders Program locks in your rate for 12 months.',
    },
    {
        title: 'Free Migration + White-Glove Support',
        body: 'We move your data. We train your team. A dedicated specialist stays with you until you’re fully running — usually in 2–4 weeks.',
    },
    {
        title: 'Built for Nonprofits, Not Forced Fit',
        body: 'Restricted funds, auto 990/CHAR500, volunteer hour valuation, staff + volunteer unity — the things generic CRMs and membership tools force you to work around.',
    },
];

export default function CompareWhySwitch() {
    return (
        <section className="py-16 md:py-24 bg-black text-white">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-12 md:mb-16">
                    <h2 data-aos="fade-up" className="heading-font text-3xl md:text-5xl font-bold tracking-tighter">
                        Why Teams Are Switching to HelpOne
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {reasons.map((reason) => (
                        <div
                            key={reason.title}
                            data-aos="fade-up"
                            className="bg-white/5 rounded-3xl p-8 lg:p-10 border border-[#00E6C3]/30"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#00E6C3]">{reason.title}</h3>
                            <p className="text-white/80 leading-relaxed">{reason.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
