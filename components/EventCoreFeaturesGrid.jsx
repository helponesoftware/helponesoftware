import React from 'react';

// Import images from assets folder
import dash1 from '../assets/Event Managements/01.png';
import dash2 from '../assets/Event Managements/02.png';
import dash3 from '../assets/Event Managements/03.png';

export default function EventCoreFeaturesGrid() {
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
                            alt="Ticketing and Scheduling Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 1 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">🎟️</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Dynamic Ticketing & Registration</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Early-bird pricing, group discounts, sponsorship tiers, waitlists, and instant QR tickets. All customizable without code.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Higher attendance. Less manual work.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">🗓️</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Multi-Day & Complex Scheduling</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Drag-and-drop agenda builder, session tracks, speaker management, room assignments. Syncs automatically with volunteers and attendees.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Flawless multi-day events.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px border-t border-dashed border-white/10"></div>

                    {/* --- SECTION 2 --- */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">

                        {/* LEFT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 3 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">👥</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Volunteer Sync & Check-Ins</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Real-time volunteer shifts linked to events. QR check-in/out that auto-updates hours in Volunteer Management.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Zero coordination headaches.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">💰</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Integrated Payments & Sponsorships</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Stripe & PayPal built-in. Sponsorship tiers, auction integration, and automatic financial reporting.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Money flows straight to your books.
                                </p>
                            </div>
                        </div>

                        {/* Right COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={dash2.src}
                            alt="Volunteer and Payment Dashboard"
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
                            alt="Reporting and Metrics Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 5 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📊</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Powerful Reporting</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    One-click exports for grants, impact reports, and audits. Real-time dashboards. Custom filters. Everything you need to tell your story.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Grant writers love you.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📈</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Real-Time Dashboards</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Bird's-eye view of all events with live attendance, revenue, volunteer hours, and metrics. Auto-syncs for instant P&L insights.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Data that tells your story in real time.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
