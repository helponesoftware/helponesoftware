import React from 'react';

export default function EventFeatures() {
    return (
        <section className="py-24 md:py-32 bg-[#0A1428] text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Column (Headline) */}
                    <div className="lg:col-span-4">
                        <h3 className="text-[#00E6C3] font-bold text-sm tracking-[0.2em] uppercase mb-6 text-left">
                            MOST EVENT TOOLS ARE
                        </h3>
                        <h2 data-aos="fade-up" className="heading-font text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
                            Fragmented.<br />You need one unified hub.
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="lg:col-span-8">
                        <p className="text-base md:text-[17px] text-white/90 leading-relaxed mb-12">
                            Unlike Eventbrite (per-ticket fees) or SignUpGenius (limited features), HelpOne is truly unlimited<br className="hidden xl:block" />
                            with deep native integrations to Volunteer Management, Finances, and Donor CRM – auto-valuing<br className="hidden xl:block" />
                            volunteer hours for your 990 and syncing fundraising counts in real-time.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    UNLIMITED EVENTS & TICKETS
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    No per-event fees. No caps. Ever.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    REAL-TIME FUNDRAISING COUNTS
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    Live dashboards that tie directly to your<br className="hidden xl:block" />
                                    finances.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
