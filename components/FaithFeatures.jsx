export default function FaithFeatures() {
    return (
        <section className="bg-[#050914] border-t border-white/5">
            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-6 py-20 md:py-32">
                <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
                    {/* Left Column (Headline) */}
                    <div data-aos="fade-right" className="md:col-span-5 lg:col-span-5">
                        <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                            Serving God&apos;s People.<br />Made Simple.
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div data-aos="fade-left" className="md:col-span-7 lg:col-span-7">
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12">
                            From Sunday services to midweek small groups, HelpOne removes the admin burden so your leaders can focus on discipleship, prayer, and reaching the lost. Unlimited everything. One flat price. No per-user fees.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-10 lg:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wider uppercase mb-3">Stewardship Made Easy</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Secure online giving, flat-rate processing, and clear financial reporting for faithful stewardship.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wider uppercase mb-3">Volunteer Readiness</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Easy scheduling, training tracking, and ministry sign-ups for your servant-hearted team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
