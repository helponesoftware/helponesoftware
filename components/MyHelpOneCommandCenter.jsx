import React from 'react';
import Image from 'next/image';

export default function MyHelpOneCommandCenter() {
    return (
        <section className="py-24 md:py-32 bg-[#02040D] text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 data-aos="fade-up" className="heading-font text-3xl md:text-5xl lg:text-5xl font-bold tracking-tighter">
                        Your Personal Nonprofit Command Center
                    </h2>
                </div>

                <div className="relative w-full rounded-[2rem] overflow-hidden mb-8 border border-white/10 aspect-video md:aspect-[21/9]">
                    <div className="absolute inset-0 bg-[#0A1428]">
                        <Image
                            src="/assets/otherfiles/myHelpOne.png"
                            alt="Command Center Dashboard"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-white/70 text-sm md:text-base font-medium">
                    <span>Real-time greeting</span>
                    <span>•</span>
                    <span>Action items</span>
                    <span>•</span>
                    <span>Upcoming events</span>
                    <span>•</span>
                    <span>My calendar</span>
                    <span>•</span>
                    <span>Timesheet</span>
                    <span>•</span>
                    <span>Time-off requests</span>
                </div>
            </div>
        </section>
    );
}
