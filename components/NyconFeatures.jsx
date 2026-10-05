export default function NyconFeatures() {
    return (
        <section className="bg-[#050914] border-t border-white/5">
            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-6 py-20 md:py-32">
                <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
                    {/* Left Column (Headline) */}
                    <div data-aos="fade-right" className="md:col-span-5 lg:col-span-5">
                        <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                            Built for Nonprofits.<br />
                            Exclusive for NYCON.
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div data-aos="fade-left" className="md:col-span-7 lg:col-span-7">
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12">
                            Most nonprofits run five to eight separate tools just to manage daily operations. HelpOne brings the core pieces together in one unified platform so your team spends less time switching systems and more time on the mission.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-10 lg:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wider uppercase mb-3">All-In-One Consolidation</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Replace separate apps for volunteers, events, fundraising, HR, and finance with one integrated platform.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wider uppercase mb-3">Zero Risk &amp; Free Setup</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Free data migration &amp; onboarding done for you. No long-term contracts, cancel anytime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
