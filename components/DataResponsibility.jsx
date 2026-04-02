export default function DataResponsibility() {
    return (
        <section className="py-24 md:py-32 bg-[#0A1428] text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left Column (Headline) */}
                    <div className="lg:col-span-5">
                        <h2 data-aos="fade-up" className="heading-font text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
                            Your Data. Our<br />Responsibility.
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="lg:col-span-7">
                        <p className="text-base md:text-[17px] text-white/90 leading-relaxed mb-12">
                            Nonprofits handle sensitive donor, volunteer, and beneficiary information. We treat it with the
                            highest level of care – because your mission depends on trust.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    PROTECTING DONORS
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    PCI Level 1 payment security and GDPR-compliant data handling.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    SAFEGUARDING MISSIONS
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    SOC 2 Type II audited controls and continuous monitoring.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
