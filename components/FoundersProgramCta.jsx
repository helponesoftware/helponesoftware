import React from 'react';
import Link from 'next/link';

export default function FoundersProgramCta() {
    return (
        <section className="py-24 bg-[#050914] text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="mb-8">
                    <span className="text-5xl inline-block mb-4">🚀</span>
                    <h2 data-aos="fade-up" className="heading-font text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                        Founders Program
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90">
                        Be among the first 250 nonprofits to lock in the lowest rate ever offered.
                    </p>
                </div>

                <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-10 md:p-14 border border-white/10 max-w-2xl mx-auto shadow-2xl">
                    <div className="mb-8 block">
                        <span className="text-[#00E6C3] text-6xl md:text-7xl font-bold tracking-tighter">
                            $499
                        </span>
                    </div>

                    <p className="text-white/80 text-lg mb-10 font-medium tracking-wide">
                        /month • locked for first 12 months
                    </p>

                    <Link data-aos="fade-up" href="/contact-us" className="inline-block text-center w-full bg-white text-[#0A1428] text-lg font-bold py-5 rounded-xl hover:bg-[#00E6C3] transition-colors shadow-lg">
                        Secure My Founders Spot Now
                    </Link>
                </div>
            </div>
        </section>
    );
}
