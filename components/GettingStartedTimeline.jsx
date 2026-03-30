import React from 'react';

export default function GettingStartedTimeline() {
    return (
        <section className="py-24 md:py-32 bg-black text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
                <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-16 md:mb-24">
                    What to Expect in Your First 30 Days
                </h2>

                <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto items-start">
                    {/* Week 1 */}
                    <div>
                        <h3 className="text-[#00E6C3] text-5xl md:text-7xl font-medium mb-6 tracking-tight">Week 1</h3>
                        <p className="text-white text-lg font-medium leading-relaxed">
                            Data imported • Dashboard live •<br className="hidden md:block" /> First team login
                        </p>
                    </div>

                    {/* Week 2 */}
                    <div>
                        <h3 className="text-[#00E6C3] text-5xl md:text-7xl font-medium mb-6 tracking-tight">Week 2</h3>
                        <p className="text-white text-lg font-medium leading-relaxed">
                            Live training complete • First<br className="hidden md:block" /> donations processed • Time<br className="hidden md:block" /> savings visible
                        </p>
                    </div>

                    {/* Week 3-4 */}
                    <div>
                        <h3 className="text-[#00E6C3] text-5xl md:text-7xl font-medium mb-6 tracking-tight leading-[1.1]">Week 3-<br />4</h3>
                        <p className="text-white text-lg font-medium leading-relaxed">
                            Full adoption • Real-time insights •<br className="hidden md:block" /> Your specialist check-in
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
