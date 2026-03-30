import React from 'react';

export default function VolunteerFeatures() {
    return (
        <section className="py-24 md:py-32 bg-[#0A1428] text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left Column (Headline) */}
                    <div className="lg:col-span-5">
                        <h3 className="text-[#00E6C3] font-bold text-sm tracking-[0.2em] uppercase mb-6 text-left">
                            MOST VOLUNTEER TOOLS ARE
                        </h3>
                        <h2 data-aos="fade-up" className="heading-font text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
                            Generic.<br />You need nonprofit-<br />native.
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="lg:col-span-7">
                        <p className="text-base md:text-[17px] text-white/90 leading-relaxed mb-12">
                            HelpOne was built exclusively for 501(c)(3)s. No bloated corporate features. Just the exact tools<br className="hidden md:block" />
                            you actually use \u2014 all connected, unlimited, and breathtakingly simple.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    SELF-SERVICE PORTALS
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    Volunteers sign up, check in, and track hours<br className="hidden md:block" />without ever emailing you.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    AUTO 990 VALUATION
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    $33.49 per hour \u2014 automatically calculated<br className="hidden md:block" />and ready for your return.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
