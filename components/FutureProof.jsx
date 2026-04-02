export default function FutureProof({
    title = "Even if you don't need every module today,",
    titleAccent = "you're still ready for tomorrow.",
    description = "Start with only what you need. Simply hide the rest – they disappear from your dashboard."
}) {
    return (
        <section className="py-12 md:py-24 bg-gradient-to-b from-black to-[#0A1428]">
            <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto bg-white/5 border border-[#00E6C3]/30 rounded-3xl p-6 md:p-12 lg:p-20">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-3 md:gap-4 bg-[#00E6C3]/10 text-[#00E6C3] px-4 py-2 md:px-6 md:py-3 rounded-3xl text-xs md:text-sm font-medium mb-5 md:mb-8">
                                <i className="fas fa-shield-alt"></i> FUTURE-PROOF FROM DAY ONE
                            </div>
                            <h2 data-aos="fade-up" className="heading-font text-2xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none">
                                {title}<br />
                                <span className="text-[#00E6C3]">{titleAccent}</span>
                            </h2>
                            <p className="text-base md:text-xl text-white/80 mt-6 md:mt-10">{description}</p>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="bg-[#0A1428] border border-white/10 rounded-3xl p-5 md:p-8">
                                <div className="text-sm uppercase tracking-widest text-white/60 mb-4 md:mb-6">Your clean dashboard today</div>
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    <div className="bg-white/10 rounded-2xl p-4 md:p-6 text-center">
                                        <div className="text-3xl md:text-4xl mb-2 md:mb-3">👥</div>
                                        <div className="font-semibold text-sm md:text-base">Volunteer Mgmt</div>
                                        <div className="text-xs text-[#00E6C3] mt-1">ACTIVE</div>
                                    </div>
                                    <div className="bg-white/10 rounded-2xl p-4 md:p-6 text-center">
                                        <div className="text-3xl md:text-4xl mb-2 md:mb-3">🎟️</div>
                                        <div className="font-semibold text-sm md:text-base">Events</div>
                                        <div className="text-xs text-[#00E6C3] mt-1">ACTIVE</div>
                                    </div>
                                    <div className="bg-white/5 rounded-2xl p-4 md:p-6 text-center opacity-40">
                                        <div className="text-3xl md:text-4xl mb-2 md:mb-3">💰</div>
                                        <div className="font-semibold text-sm md:text-base">Fundraising</div>
                                        <div className="text-xs text-white/40 mt-1">HIDDEN – tap to activate</div>
                                    </div>
                                    <div className="bg-white/5 rounded-2xl p-4 md:p-6 text-center opacity-40">
                                        <div className="text-3xl md:text-4xl mb-2 md:mb-3">📊</div>
                                        <div className="font-semibold text-sm md:text-base">Finances</div>
                                        <div className="text-xs text-white/40 mt-1">HIDDEN – tap to activate</div>
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-10 text-center text-sm text-[#00E6C3] font-medium">Grow at your pace. One platform forever.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
