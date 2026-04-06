import React from 'react';

export default function DonorsContactsFeatures() {
    return (
        <section className="py-24 md:py-32 bg-[#0A1428] text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Column (Headline) */}
                    <div className="lg:col-span-5">
                       
                        <h2 data-aos="fade-up" className="heading-font text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
                            Unified Contact &<br />Company<br />Management
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="lg:col-span-7">
                        <p className="text-base md:text-[17px] text-white/90 leading-relaxed mb-12">
                          Build deeper connections with donors, sponsors, and partners. HelpOne’s nonprofit-smart CRM simplifies nurturing, follow-up, tracking, and communication in one intuitive hub.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    UNLIMITED SCALE
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    No contact caps. No vendor limits. Add as many records as your mission demands.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    NONPROFIT-FIRST
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    Seamless integration with events, fundraising, and finance for real-time insights.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
