import React from 'react';

export default function FinanceFeatures() {
    return (
        <section className="py-24 md:py-32 bg-[#0A1428] text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Column (Headline) */}
                    <div className="lg:col-span-5">
                        <h3 className="text-[#00E6C3] font-bold text-sm tracking-[0.2em] uppercase mb-6 text-left">
                            MOST FINANCE TOOLS ARE
                        </h3>
                        <h2 data-aos="fade-up" className="heading-font text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
                            Generic.<br />You need nonprofit-<br />native.
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="lg:col-span-7">
                        <p className="text-base md:text-[17px] text-white/90 leading-relaxed mb-12">
                            Unlike QuickBooks or Xero (capped features, per-transaction fees, no native nonprofit<br className="hidden xl:block" />
                            compliance), HelpOne gives you **unlimited** transactions, pre-built nonprofit chart of accounts,<br className="hidden xl:block" />
                            auto 990/CHAR500 population, real-time restricted funds tracking, and seamless integration with<br className="hidden xl:block" />
                            Volunteer Management, Events, and Fundraising – all GAAP/FASB compliant.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    TRULY UNLIMITED
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    No transaction caps. No per-record fees. No<br className="hidden xl:block" />
                                    vendor limits. Ever.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    AUTO 990 & CHAR500
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    One-click, auto-populated, FASB-compliant<br className="hidden xl:block" />
                                    reports.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
