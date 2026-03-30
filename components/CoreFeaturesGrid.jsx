import React from 'react';

// Import images from assets folder
import dash1 from '../assets/Volunteer Managment/01.png';
import dash2 from '../assets/Volunteer Managment/02.png';
import dash3 from '../assets/Volunteer Managment/03.png';

export default function CoreFeaturesGrid() {
    return (
        <section className="py-24 md:py-32 bg-[#02040D] text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 md:mb-24">
                    <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-5xl font-bold tracking-tighter mb-6 relative z-10">
                        Core Features. Pure Impact.
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto relative z-10">
                        From recruitment to reporting — everything flows together.
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">

                    {/* --- SECTION 1 --- */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">
                        {/* LEFT COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={dash1.src}
                            alt="Volunteer Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 1 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-[32px] md:text-4xl leading-none">📍</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Custom Positions & Shifts</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Define dates, locations, times, and exact needs. Volunteers claim roles through a beautiful self-service portal. Real-time dashboard shows who's in.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Events fill faster. Zero chasing.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-[32px] md:text-4xl leading-none">🗂️</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Comprehensive Volunteer Database</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Custom forms for skills, availability, and preferences. Secure photo & certificate uploads. Smart skill-matching engine puts the right person in the right role.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Better fit. Fewer drop-offs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px border-t border-dashed border-white/10"></div>

                    {/* --- SECTION 2 --- */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">



                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 3 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-[32px] md:text-4xl leading-none">🗓️</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Flexible Scheduling</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Self-scheduling with optional approval. Admin CSV import. Group reservations. Calendar sync with Events module. Automated reminders.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Dramatically fewer no-shows.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-[32px] md:text-4xl leading-none">💬</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Seamless Communication</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Broadcast messages with personalized placeholders. Instant SMS & email. Track opens. All inside HelpOne — no more MailChimp juggling.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Higher engagement. Stronger community.
                                </p>
                            </div>
                        </div>
                        {/* LEFT COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={dash2.src}
                            alt="Volunteer Web Portal"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px border-t border-dashed border-white/10"></div>

                    {/* --- SECTION 3 --- */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">
                        {/* LEFT COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={dash3.src}
                            alt="Admin View of Volunteers"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 5 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-[32px] md:text-4xl leading-none">⏱️</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Precision Hours Tracking + QR Magic</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    QR check-in/out on any device. Tamper-proof logs. Auto-feeds your P&L and Form 990 at the current IRS rate of $33.49/hour.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Hours that file themselves.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-[32px] md:text-4xl leading-none">📈</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Powerful Reporting</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    One-click exports for grants, impact reports, and audits. Real-time dashboards. Custom filters. Everything you need to tell your story.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Grant writers love you.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
