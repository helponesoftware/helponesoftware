import Link from 'next/link';

export default function WhoItsFor() {
    return (
        <section className="py-20 md:py-32 bg-[#0A1428]" id="who-its-for">
            <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl font-bold tracking-tight text-white mb-12 text-center">
                    Who It&apos;s For
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
                    {/* Box 1 */}
                    <Link href="/faith-communities" className="bg-[#121c32] hover:bg-[#1a2640] transition-colors rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[100px] cursor-pointer">
                        <span className="text-white font-medium">Faith Communities</span>
                    </Link>
                    {/* Box 2 */}
                    <Link href="/schools-youth" className="bg-[#121c32] hover:bg-[#1a2640] transition-colors rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[100px] cursor-pointer">
                        <span className="text-white font-medium">Schools &amp; Youth Groups</span>
                    </Link>
                    {/* Box 3 */}
                    <Link href="/animal-rescues" className="bg-[#121c32] hover:bg-[#1a2640] transition-colors rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[100px] cursor-pointer">
                        <span className="text-white font-medium">Animal Rescues</span>
                    </Link>
                    {/* Box 4 */}
                    <Link href="/arts-culture" className="bg-[#121c32] hover:bg-[#1a2640] transition-colors rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[100px] cursor-pointer">
                        <span className="text-white font-medium">Arts &amp; Culture Organizations</span>
                    </Link>
                    {/* Box 5 */}
                    <Link href="/community-groups" className="bg-[#121c32] hover:bg-[#1a2640] transition-colors rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[100px] cursor-pointer">
                        <span className="text-white font-medium">Community Groups</span>
                    </Link>
                    {/* Box 6 */}
                    <Link href="/environmental-causes" className="bg-[#121c32] hover:bg-[#1a2640] transition-colors rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[100px] cursor-pointer">
                        <span className="text-white font-medium">Environmental Causes</span>
                    </Link>
                </div>

                <p className="text-xl md:text-2xl font-medium text-white text-center">
                    Also perfect for any business that uses credit card transactions.
                </p>
            </div>
        </section>
    );
}
