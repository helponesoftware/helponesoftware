import React from 'react';

export default function GettingStartedStepsGrid() {
    return (
        <section className="py-24 md:py-32 bg-[#02040D] text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 md:mb-20">
                    <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                        Your 3-Step Transition to HelpOne
                    </h2>
                    <p className="text-xl md:text-2xl text-white/70">
                        Simple, guided, and designed for immediate impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {/* Step 1 */}
                    <div className="bg-[#0A1428] rounded-[2rem] p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="w-16 h-16 bg-[#4B84FF] rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-8 shadow-lg shadow-blue-500/20">
                            1
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Import & Setup</h3>
                        <p className="text-white/70 text-base md:text-lg leading-relaxed">
                            We send ready-to-use Master Excel/CSV templates for contacts, donors, volunteers, and more. Connect Google Drive, Dropbox, or Microsoft for files. Send your VAR sheet and start processing at $1.75/tx (or use our instant processor portal).
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-[#0A1428] rounded-[2rem] p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="w-16 h-16 bg-[#4B84FF] rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-8 shadow-lg shadow-blue-500/20">
                            2
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Customize &<br />Train</h3>
                        <p className="text-white/70 text-base md:text-lg leading-relaxed">
                            Tailor HR, volunteer positions, fundraising forms, and finance accounts. Schedule live role-based training or use our on-demand video library. Practice safely until everyone feels confident.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-[#0A1428] rounded-[2rem] p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="w-16 h-16 bg-[#4B84FF] rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-8 shadow-lg shadow-blue-500/20">
                            3
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Launch & Thrive</h3>
                        <p className="text-white/70 text-base md:text-lg leading-relaxed">
                            Go live with one click. Send welcome broadcast texts to staff and volunteers. Watch real-time dashboards light up. Your dedicated HelpOne specialist stays with you until you're flying solo — and anytime after.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
