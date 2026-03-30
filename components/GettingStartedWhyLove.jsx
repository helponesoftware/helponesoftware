import React from 'react';

export default function GettingStartedWhyLove() {
    return (
        <section className="py-24 md:py-32 bg-[#02040D] text-white border-t border-white/5 justify-center flex flex-col items-center">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center w-full">
                <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-16 md:mb-20">
                    Why Nonprofits Love This Transition
                </h2>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
                    {/* Card 1 */}
                    <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-12 border border-white/5 hover:border-white/10 transition-colors flex flex-col items-center text-center">
                        <div className="text-5xl mb-6">📥</div>
                        <h3 className="text-xl font-bold mb-4">Seamless Imports</h3>
                        <p className="text-white/70 text-base leading-relaxed">
                            DonorPerfect, VolunteerHub,<br className="hidden md:block" />QuickBooks, and more — no<br className="hidden md:block" />data left behind.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-12 border border-white/5 hover:border-white/10 transition-colors flex flex-col items-center text-center">
                        <div className="text-5xl mb-6">❤️</div>
                        <h3 className="text-xl font-bold mb-4">Warm Human Support</h3>
                        <p className="text-white/70 text-base leading-relaxed">
                            Zero tech headaches. Your<br className="hidden md:block" />dedicated specialist is with you<br className="hidden md:block" />every step.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-12 border border-white/5 hover:border-white/10 transition-colors flex flex-col items-center text-center">
                        <div className="text-5xl mb-6">🚀</div>
                        <h3 className="text-xl font-bold mb-4">Immediate Impact</h3>
                        <p className="text-white/70 text-base leading-relaxed">
                            Teams see time savings and<br className="hidden md:block" />clearer insights in the first<br className="hidden md:block" />week.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
