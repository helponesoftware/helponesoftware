import React from 'react';

export default function ItAssetTrackingFeatures() {
    return (
        <section className="py-24 md:py-32 bg-[#0A1428] text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Column (Headline) */}
                    <div className="lg:col-span-5">
                        <h3 className="text-[#00E6C3] font-bold text-sm tracking-[0.2em] uppercase mb-6 text-left">
                            MOST IT ASSET TOOLS ARE
                        </h3>
                        <h2 data-aos="fade-up" className="heading-font text-5xl md:text-6xl font-bold tracking-tighter leading-tight pr-4">
                            Generic and limited.<br />You need nonprofit-<br />native unlimited.
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="lg:col-span-7">
                        <p className="text-base md:text-[17px] text-white/90 leading-relaxed mb-12">
                            Unlike generic spreadsheets or capped tools like Snipe-IT and Asset Panda, HelpOne delivers a centralized dashboard with real-time charts, budget meters, and condition tracking. Unlimited hardware/software inventory, vendor management, license/warranty tracking, user assignments, and expiration alerts – all in one secure, siloed platform built exclusively for nonprofits.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    UNLIMITED SCALE
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    Endless assets, licenses, vendors – no per-asset fees
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    CENTRALIZED HUB
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    Unified hardware + software + vendor tracking with budget meters
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
