export default function ArtsCultureFeatures() {
    return (
        <section className="bg-[#050914] border-t border-white/5">
            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-6 py-20 md:py-32">
                <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
                    {/* Left Column (Headline) */}
                    <div data-aos="fade-right" className="md:col-span-5 lg:col-span-5">
                        <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                            Creativity Deserves<br />Better Tools.
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div data-aos="fade-left" className="md:col-span-7 lg:col-span-7">
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12">
                            From sold-out performances to blockbuster exhibitions, HelpOne removes the admin burden so artists, curators, and cultural leaders can focus on what they do best — inspiring communities. Unlimited everything. One flat price. No per-user fees.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-10 lg:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wider uppercase mb-3">Ticket To Impact</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Beautiful ticketing, dynamic pricing, and seamless online sales for performances and exhibitions.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wider uppercase mb-3">Volunteer &amp; Patron Power</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Easy scheduling for ushers, docents, and board members plus donor stewardship tools.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
