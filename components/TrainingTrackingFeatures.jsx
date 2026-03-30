import React from 'react';

export default function TrainingTrackingFeatures() {
    return (
        <section className="py-24 md:py-32 bg-[#0A1428] text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Column (Headline) */}
                    <div className="lg:col-span-5">
                        <h3 className="text-[#00E6C3] font-bold text-sm tracking-[0.2em] uppercase mb-6 text-left">
                            MOST TRAINING TOOLS ARE
                        </h3>
                        <h2 data-aos="fade-up" className="heading-font text-5xl md:text-6xl font-bold tracking-tighter leading-tight pr-4">
                            Limited LMS lock-ins.<br />You need unlimited<br />freedom.
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="lg:col-span-7">
                        <p className="text-base md:text-[17px] text-white/90 leading-relaxed mb-12">
                            Unlike limited LMS tools or scattered spreadsheets, HelpOne offers a centralized dashboard with<br className="hidden xl:block" />
                            real-time status charts and upcoming deadlines. Unlimited trainings, participants, and supervisors<br className="hidden xl:block" />
                            — no caps, no extra fees. Easy creation and assignment from any source (internal or external),<br className="hidden xl:block" />
                            automated reminders, progress tracking, completion certificates, and one-click exports for grants<br className="hidden xl:block" />
                            or audits.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    UNLIMITED SCALE
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    Add endless trainings, participants, or<br className="hidden xl:block" />
                                    supervisors — no caps, no fees
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    CENTRALIZED HUB
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    Organize all your favorite external platforms in<br className="hidden xl:block" />
                                    one secure spot
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
