import React from 'react';

export default function ParticipantsFeatures() {
    return (
        <section className="py-24 md:py-32 bg-[#0A1428] text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Column (Headline) */}
                    <div className="lg:col-span-5">
                        <h3 className="text-[#00E6C3] font-bold text-sm tracking-[0.2em] uppercase mb-6 text-left">
                            MOST CRMS ARE
                        </h3>
                        <h2 data-aos="fade-up" className="heading-font text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
                            Generic lists.<br />You need 360°<br />insight.
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="lg:col-span-7">
                        <p className="text-base md:text-[17px] text-white/90 leading-relaxed mb-12">
                            Unlike Bloomerang or Raiser&apos;s Edge (names & emails only, caps, silos), HelpOne gives you a true<br className="hidden xl:block" />
                            360° view: lifetime value + engagement scoring (cash + volunteer time + recency in **one<br className="hidden xl:block" />
                            number**), unlimited records, self-service portal, and deep native integration with Volunteer<br className="hidden xl:block" />
                            Management, Events, Fundraising, and Finances.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    LIFETIME VALUE SCORING
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    Cash + volunteer time + recency — no<br className="hidden xl:block" />
                                    competitor consolidates this
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    TRULY UNLIMITED
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    No donor caps. No per-record fees. Grow<br className="hidden xl:block" />
                                    freely.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
