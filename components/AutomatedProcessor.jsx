import Link from 'next/link';

export default function AutomatedProcessor() {
    return (
        <section className="py-20 bg-black" id="automated-processor">
            <div className="max-w-screen-lg mx-auto px-6 text-center">
                <h2 data-aos="fade-up" className="heading-font text-3xl md:text-5xl font-bold text-white mb-4">
                    Access the Automated Processor Approval System
                </h2>
                <p className="text-sm md:text-base text-white/80 mb-10">
                    Takes 60 seconds. Get approved in 1-3 business days — no commitment required.
                </p>
                <div className="bg-[#050914] border border-[#1a2640] p-8 md:p-12 rounded-2xl max-w-lg mx-auto">
                    <Link
                        href="/contact-us"
                        className="inline-block w-full py-5 px-6 bg-[#00E6C3] text-[#0A1428] font-bold rounded-xl hover:bg-white transition-colors text-center"
                    >
                        Start Quick Questionnaire (60 <br className="hidden sm:block" /> seconds)
                    </Link>
                    <p className="text-white/40 text-[10px] sm:text-xs mt-6 uppercase tracking-wider font-semibold">
                        No commitment. No credit card required.
                    </p>
                </div>
            </div>
        </section>
    );
}
