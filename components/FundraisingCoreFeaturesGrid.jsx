import React from 'react';
import img1 from '../assets/Fundriasing/01.png';
import img2 from '../assets/Fundriasing/02.png';
import img3 from '../assets/Fundriasing/03.png';

export default function FundraisingCoreFeaturesGrid() {
    return (
        <section className="py-24 md:py-32 bg-[#02040D] text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 md:mb-24">
                    <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-5xl font-bold tracking-tighter mb-6 relative z-10">
                        Core Features. Pure Impact.
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto relative z-10">
                        Auctions, sponsorships, donations, pledges, contests, expenses all in one secure platform.
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">

                    {/* --- SECTION 1 --- */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">
                        {/* LEFT COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={img1.src}
                            alt="Auctions Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 1 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">🎟️</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Auction Tracking</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    From item listing to payout. Track bidders, payments, statuses. PCI DSS Level 1 compliant. Real-time performance insights.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Revenue boost with full transparency.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">🤝</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Sponsorship Management</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Unlimited sponsors, custom levels, payment automation, renewal tracking. Smart reminders and donor profile links.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Higher retention and recurring revenue.
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
                                    <span className="text-4xl leading-none">💝</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Donation & Pledge Tracking</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Unlimited one-time, recurring, in-kind, restricted gifts. Instant personalized thank-yous with exact amounts.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: More repeat gifts and stronger relationships.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">🏆</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Fundraising Contests</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Custom contests with goals, unlimited participants, real-time progress, and donation tiers for maximum engagement.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Fun + fundraising that works.
                                </p>
                            </div>
                        </div>

                        {/* Right COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={img2.src}
                            alt="Donations Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px border-t border-dashed border-white/10"></div>

                    {/* --- SECTION 3 --- */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">
                        {/* LEFT COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={img3.src}
                            alt="Contests Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 5 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📋</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Expense Tracking</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Log and approve costs tied to campaigns. Custom limits, supervisor approvals, detailed reports.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Grant-ready transparency.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📈</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Summary P&L + Dashboards</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Live revenue, expenses, volunteer hours, and net impact. Auto-syncs with all modules for instant profitability insights.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Data that tells your story instantly.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
