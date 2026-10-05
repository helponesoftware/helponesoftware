import React from 'react';

const reasons = [
    {
        emoji: '🔄',
        title: 'Seamless Imports',
        body: 'DonorPerfect, VolunteerHub, QuickBooks, and more',
    },
    {
        emoji: '👤',
        title: 'Human Support',
        body: 'A real specialist walks with you the entire way',
    },
    {
        emoji: '⚡',
        title: 'Fast Time-to-Value',
        body: 'Most teams see clear time savings in the first two weeks',
    },
    {
        emoji: '🔓',
        title: 'No Long-Term Contracts',
        body: 'Cancel anytime and take your data with you',
    },
];

export default function GettingStartedWhyLove() {
    return (
        <section className="py-16 md:py-24 bg-[#0A1428] text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-12 md:mb-16">
                    <h2 data-aos="fade-up" className="heading-font text-3xl md:text-5xl font-bold tracking-tighter">
                        Built for Real Nonprofit Teams
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {reasons.map((reason) => (
                        <div
                            key={reason.title}
                            data-aos="fade-up"
                            className="module-card bg-white/5 rounded-3xl p-8 border border-white/10 text-center"
                        >
                            <div className="text-3xl mb-4">{reason.emoji}</div>
                            <h3 className="font-semibold mb-2">{reason.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{reason.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
