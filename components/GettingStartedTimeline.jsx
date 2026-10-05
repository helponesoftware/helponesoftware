import React from 'react';

const weeks = [
    {
        label: 'Week 1',
        title: 'Kickoff & Migration',
        body: 'Kickoff call with your dedicated specialist. We review your current tools, collect data, and begin the migration process. You’ll receive clear templates and a simple project plan.',
    },
    {
        label: 'Week 2',
        title: 'Training & First Wins',
        body: 'Live training sessions complete. First donations and volunteer activity processed in HelpOne. Your team starts seeing real time savings.',
    },
    {
        label: 'Weeks 3–4',
        title: 'Full Adoption',
        body: 'Real-time dashboards are live. Your specialist does a final check-in and stays available for ongoing support.',
    },
];

export default function GettingStartedTimeline() {
    return (
        <section className="py-16 md:py-24 bg-black text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-12 md:mb-16">
                    <h2 data-aos="fade-up" className="heading-font text-3xl md:text-5xl font-bold tracking-tighter">
                        Your First 30 Days, Mapped Out
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {weeks.map((week) => (
                        <div
                            key={week.label}
                            data-aos="fade-up"
                            className="module-card bg-white/5 rounded-3xl p-8 lg:p-10 border border-white/10"
                        >
                            <div className="text-[#00E6C3] font-semibold mb-3">{week.label}</div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">{week.title}</h3>
                            <p className="text-white/70 leading-relaxed">{week.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
