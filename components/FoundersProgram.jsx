import Link from 'next/link';

export default function FoundersProgram() {
    return (
        <section className="py-20 md:py-32 bg-black" id="founders-program">
            <div className="max-w-screen-md mx-auto px-6 text-center">
                <div className="text-4xl md:text-5xl mb-6">🚀</div>
                <h2 data-aos="fade-up" className="heading-font text-3xl md:text-5xl font-bold text-white mb-4">
                    Founders Program
                </h2>
                <p className="text-sm md:text-base text-white/80 mb-10 max-w-sm mx-auto">
                    Be among the first 250 nonprofits to lock in the lowest rate ever offered.
                </p>
                <div className="bg-[#050914] border border-[#1a2640] rounded-2xl p-8 max-w-lg mx-auto">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-2">
                        <span className="text-5xl md:text-7xl font-bold text-[#00E6C3] tracking-tight">
                            $499
                        </span>
                    </div>
                    <div className="text-[11px] md:text-xs text-[#00E6C3] font-bold mb-8 uppercase tracking-widest">
                        /month • locked for first 12 months
                    </div>
                    <Link
                        href="/contact-us"
                        className="inline-block w-full py-4 text-[#0A1428] bg-white font-bold rounded-xl hover:bg-[#00E6C3] transition-colors"
                    >
                        Secure My Founders Spot Now
                    </Link>
                </div>
            </div>
        </section>
    );
}
