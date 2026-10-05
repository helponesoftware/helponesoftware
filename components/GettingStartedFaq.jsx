import React from 'react';

const questions = [
    {
        q: 'Does HelpOne replace QuickBooks?',
        a: 'HelpOne Finance is built specifically for nonprofits, with unlimited transactions, restricted funds tracking, and automatic 990/CHAR500 population. Many organizations use it in place of QuickBooks for day-to-day nonprofit accounting. We also support clean syncing with your QuickBooks or other finance system so you can work smoothly and uninterrupted.',
    },
    {
        q: 'Does HelpOne include payroll?',
        a: 'No. Most organizations keep their existing payroll provider (ADP, Paychex, Gusto, etc.) and use HelpOne for everything else. This keeps the transition simple and avoids disrupting payroll.',
    },
    {
        q: 'Does HelpOne replace Google Workspace or Microsoft 365?',
        a: 'No. Your team continues using Google Workspace or Microsoft 365 for email and calendar. HelpOne connects to Google Drive (and Dropbox/Microsoft) for files while your communication tools stay the same.',
    },
    {
        q: 'Do I need technical staff to implement HelpOne?',
        a: 'No. We handle the technical setup and migration. Your team’s role is reviewing data and participating in short training sessions.',
    },
];

export default function GettingStartedFaq() {
    return (
        <section className="py-16 md:py-24 bg-black text-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 data-aos="fade-up" className="heading-font text-3xl md:text-5xl font-bold tracking-tighter">
                        Common Questions
                    </h2>
                </div>

                <div className="space-y-6 md:space-y-8">
                    {questions.map((item) => (
                        <div
                            key={item.q}
                            data-aos="fade-up"
                            className="bg-white/5 rounded-3xl p-8 border border-white/10"
                        >
                            <h3 className="text-lg md:text-xl font-semibold mb-3">{item.q}</h3>
                            <p className="text-white/70 leading-relaxed">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
