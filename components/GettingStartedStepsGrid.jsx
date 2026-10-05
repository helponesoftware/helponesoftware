import React from 'react';

const steps = [
    {
        title: 'Import & Setup',
        body: 'We handle the heavy lifting. Free data migration from your current systems so nothing is left behind.',
    },
    {
        title: 'Train & Configure',
        body: 'Live sessions tailored to your team. We configure the modules you need and hide the rest until you’re ready.',
    },
    {
        title: 'Go Live & Support',
        body: 'Your dedicated specialist stays with you through go-live and beyond. Most teams are fully operational in 2–4 weeks.',
    },
];

export default function GettingStartedStepsGrid() {
    return (
        <section id="steps" className="py-16 md:py-24 bg-[#0A1428] text-white scroll-mt-24">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-12 md:mb-16">
                    <h2 data-aos="fade-up" className="heading-font text-3xl md:text-5xl font-bold tracking-tighter">
                        A Simple, Guided Path to HelpOne
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {steps.map((step, i) => (
                        <div
                            key={step.title}
                            data-aos="fade-up"
                            className="module-card bg-white/5 rounded-3xl p-8 lg:p-10 border border-white/10"
                        >
                            <div className="text-4xl mb-5">{i + 1}</div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">{step.title}</h3>
                            <p className="text-white/70 leading-relaxed">{step.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
