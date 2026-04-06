import React from 'react';

export default function HrSolutionsFeatures() {
    return (
        <section className="py-24 md:py-32 bg-[#0A1428] text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Column (Headline) */}
                    <div className="lg:col-span-5">
                        <h3 className="text-[#00E6C3] font-bold text-sm tracking-[0.2em] uppercase mb-6 text-left">
                            MOST NONPROFIT LEADERS STRUGGLE WITH
                        </h3>
                        <h2 data-aos="fade-up" className="heading-font text-5xl md:text-5xl lg:text-5xl font-bold tracking-tighter leading-tight pr-4">
                            Fragmented HR<br />systems that treat<br />staff and volunteers<br />as separate worlds<br />and leave compliance<br />as an afterthought.
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="lg:col-span-7">
                        <p className="text-base md:text-[17px] text-white/90 leading-relaxed mb-6">
                            Most nonprofit leaders struggle with fragmented HR systems that treat staff and volunteers as separate worlds and leave compliance as an afterthought. Unlike BambooHR or Gusto (capped features, separate volunteer tools, no 990 integration), HelpOne gives you <strong>unlimited staff + volunteers</strong> in one system, volunteer-staff unity, auto Form 990 compliance with volunteer hour valuation, self-service portal for both, and deep native integration across the entire HelpOne OS.
                        </p>
                        <p className="text-base md:text-[17px] text-white/90 leading-relaxed mb-12">
                            From seamless onboarding and performance reviews to training tracking, policy management, time-off requests, and compensation planning – everything is built for nonprofit realities with full audit-ready compliance.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    VOLUNTEER-STAFF UNITY
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    One platform for both – shared training, policies, reviews, time-off
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    TRULY UNLIMITED
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    No user caps, no per-record fees, no separate volunteer system
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
