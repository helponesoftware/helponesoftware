import React from 'react';

export default function FundraisingFeatures() {
    return (
        <section className="py-24 md:py-32 bg-[#0A1428] text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Column (Headline) */}
                    <div className="lg:col-span-5">
                        <h3 className="text-[#00E6C3] font-bold text-sm tracking-[0.2em] uppercase mb-6 text-left">
                            MOST FUNDRAISING TOOLS ARE
                        </h3>
                        <h2 data-aos="fade-up" className="heading-font text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
                            Limited.<br />You need truly<br />unlimited.
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="lg:col-span-7">
                        <p className="text-base md:text-[17px] text-white/90 leading-relaxed mb-12">
                            Unlike Bloomerang or Classy (per-record fees, caps, silos), HelpOne gives you **unlimited**<br className="hidden xl:block" />
                            donors, sponsors, vendors, gifts — with real-time P&L, auto volunteer hour valuation for your 990,<br className="hidden xl:block" />
                            and deep native integrations across the entire platform. No barriers. No upsells. Just impact.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    TRULY UNLIMITED
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    No donor caps. No per-event fees. No vendor<br className="hidden xl:block" />
                                    limits. Ever.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    REAL-TIME P&L + 990 READY
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    Live fundraising counts, auto volunteer<br className="hidden xl:block" />
                                    valuation, instant reports.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
