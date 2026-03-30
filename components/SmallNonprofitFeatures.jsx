export default function SmallNonprofitFeatures() {
    return (
        <section className="bg-[#050914] border-t border-white/5">
            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-6 py-20 md:py-32">
                <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
                    {/* Left Column (Headline) */}
                    <div data-aos="fade-right" className="md:col-span-5 lg:col-span-5">
                        <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                            Small Team. Big<br />Mission.<br />
                            We've Got You.
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div data-aos="fade-left" className="md:col-span-7 lg:col-span-7">
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12">
                            You wear many hats. HelpOne takes the weight off so you can focus on what matters — changing lives. No more spreadsheets, no more expensive per-user fees, no more complicated tools.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-10 lg:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wider uppercase mb-3">Budget-Friendly</h3>
                                <p className="text-white/70 leading-relaxed">
                                    One flat price. Unlimited everything. Scales with you as you grow.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wider uppercase mb-3">Easy For Small Teams</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Intuitive, fast to learn, and loved by volunteers and staff alike.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
