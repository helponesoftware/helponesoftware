import React from 'react';
import Link from 'next/link';

export default function MyHelpOneCta() {
    return (
        <section className="bg-[#00E6C3] py-24 md:py-32 text-center">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#0A1428] mb-6">
                    Ready to experience<br />My HelpOne?
                </h2>
                <p className="text-[#0A1428] text-lg md:text-xl font-medium md:mb-12 mb-8">
                    Log in or request a personalized demo today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link data-aos="fade-up" href="/contact-us" className="w-full sm:w-auto px-8 py-5 bg-[#0A1428] text-white font-bold rounded-2xl flex items-center justify-center hover:bg-[#0A1428]/90 transition-all text-lg min-w-[200px] [text-decoration:none]">
                        Request Free Demo
                    </Link>
                    <Link data-aos="fade-up" href="/contact-us" className="w-full sm:w-auto px-8 py-5 bg-transparent border border-[#0A1428] text-[#0A1428] font-bold rounded-2xl flex items-center justify-center hover:bg-[#0A1428]/5 transition-all text-lg min-w-[200px] [text-decoration:none]">
                        Log In to My HelpOne
                    </Link>
                </div>
            </div>
        </section>
    );
}
