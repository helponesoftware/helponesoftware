import React from 'react';

const competitors = ['DonorDock', 'Bloomerang', 'LGL', 'Salesforce', 'VolunteerHub', 'WildApricot'];

// 'full' = native, 'partial' = limited or add-on, 'none' = not available.
// Each row lists HelpOne first, then the competitors in the order above.
const capabilities = [
    { name: 'Donor CRM & Contacts', values: ['full', 'full', 'full', 'full', 'full', 'none', 'partial'] },
    { name: 'Volunteer Management', values: ['full', 'partial', 'partial', 'partial', 'full', 'full', 'partial'] },
    { name: 'Event Management', values: ['full', 'partial', 'partial', 'partial', 'full', 'partial', 'full'] },
    { name: 'Fundraising & Online Giving', values: ['full', 'full', 'full', 'partial', 'full', 'none', 'partial'] },
    { name: 'Native Finances + Auto 990 / CHAR500', values: ['full', 'none', 'none', 'none', 'partial', 'none', 'none'] },
    { name: 'HR / Staff Management', values: ['full', 'none', 'none', 'none', 'partial', 'none', 'none'] },
    { name: 'Policies & Training Tracking', values: ['full', 'none', 'none', 'none', 'none', 'none', 'none'] },
    { name: 'IT Asset Tracking', values: ['full', 'none', 'none', 'none', 'none', 'none', 'none'] },
    { name: 'Free Data Migration', values: ['full', 'partial', 'partial', 'none', 'none', 'partial', 'none'] },
    { name: 'White-Glove Onboarding', values: ['full', 'partial', 'partial', 'none', 'none', 'partial', 'partial'] },
];

const marks = {
    full: { icon: 'fa-check', className: 'text-[#00E6C3]', label: 'Full / Native' },
    partial: { icon: 'fa-minus', className: 'text-amber-500', label: 'Limited or Add-on' },
    none: { icon: 'fa-times', className: 'text-red-500', label: 'Not Available' },
};

function Mark({ value }) {
    const mark = marks[value];
    return (
        <>
            <i className={`fas ${mark.icon} ${mark.className} text-xl`} aria-hidden="true"></i>
            <span className="sr-only">{mark.label}</span>
        </>
    );
}

export default function CompareFeatureMatrix() {
    return (
        <section className="py-16 md:py-24 bg-black text-white">
            <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-12 md:mb-16">
                    <h2 data-aos="fade-up" className="heading-font text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                        What You Actually Get
                    </h2>
                    <p className="text-lg md:text-xl text-white/70">
                        One platform vs. stitching multiple tools together.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
                    <div className="min-w-[1000px] p-4 sm:p-6">
                        <table className="w-full text-sm text-left">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="py-5 pr-4 font-medium text-white/60">Capability</th>
                                    <th className="py-5 px-3 text-center text-[#00E6C3] font-semibold">HelpOne</th>
                                    {competitors.map((name) => (
                                        <th key={name} className="py-5 px-3 text-center text-white/60 font-medium">{name}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {capabilities.map((row) => (
                                    <tr key={row.name} className="border-b border-white/10 last:border-b-0">
                                        <td className="py-4 pr-4">{row.name}</td>
                                        {row.values.map((value, i) => (
                                            <td key={i} className="py-4 px-3 text-center">
                                                <Mark value={value} />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10 text-sm text-white/60">
                    {Object.entries(marks).map(([key, mark]) => (
                        <div key={key} className="flex items-center gap-2">
                            <i className={`fas ${mark.icon} ${mark.className}`} aria-hidden="true"></i> {mark.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
