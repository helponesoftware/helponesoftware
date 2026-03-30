import React from 'react';

// Import images from assets folder
import dash1 from '../assets/DASHBOARD IMAGE 1.webp';
import dash2 from '../assets/DASHBOARD IMAGE 2.webp';
import dash3 from '../assets/DASHBOARD IMAGE 3.png';

export default function ParticipantsCoreFeaturesGrid() {
    return (
        <section className="py-24 md:py-32 bg-[#02040D] text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 md:mb-24">
                    <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-5xl font-bold tracking-tighter mb-6 relative z-10">
                        Core Features. Pure Insight.
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto relative z-10">
                        From first interaction to lifelong supporter everything in one place.
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">

                    {/* --- SECTION 1 --- */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">
                        {/* LEFT COLUMN: Image Container */}
                        <div className="w-full flex justify-center rounded-3xl overflow-hidden bg-[#0A1428] border border-white/5 relative z-10 h-full">
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full -z-10 transform scale-125" />
                            <img data-aos="zoom-in"
                                src={dash1.src}
                                alt="360 Participant View Dashboard"
                                className="w-full max-h-[500px] object-contain relative z-10 hover:scale-[1.03] transition-transform duration-700 p-2"
                            />
                        </div>

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 1 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">👤</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">360° Participant View</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Contact info + custom fields + lifetime value score + engagement timeline + recent activity heatmap + cross-module history.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Know who to thank, re-engage, or ask for major gifts.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📊</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Lifetime Value & Engagement Scoring</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Auto-calculated score: events attended + donations + volunteer hours × recency. Color tiers (Red → Gold). Sort/filter by score.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Instantly spot your top supporters and lapsed ones.
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
                                    <span className="text-4xl leading-none">🔍</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Powerful List & Search</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Sortable/searchable master list. Filters (first-time vs returning, by event, custom question, engagement score). Bulk actions and saved segments.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Target campaigns with precision.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📝</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Custom Questions & Impact Reporting</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Collect any field. One-click aggregates (total children served, average impact score). Word clouds from open feedback. Longitudinal cohorts.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Prove impact to funders and board.
                                </p>
                            </div>
                        </div>

                        {/* Right COLUMN: Image Container */}
                        <div className="w-full flex justify-center rounded-3xl overflow-hidden bg-[#0A1428] border border-white/5 relative z-10 h-full">
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full -z-10 transform scale-125" />
                            <img data-aos="zoom-in"
                                src={dash2.src}
                                alt="List and Search Dashboard"
                                className="w-full max-h-[500px] object-contain relative z-10 hover:scale-[1.03] transition-transform duration-700 p-2"
                            />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px border-t border-dashed border-white/10"></div>

                    {/* --- SECTION 3 --- */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">
                        {/* LEFT COLUMN: Image Container */}
                        <div className="w-full flex justify-center rounded-3xl overflow-hidden bg-[#0A1428] border border-white/5 relative z-10 h-full">
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full -z-10 transform scale-125" />
                            <img data-aos="zoom-in"
                                src={dash3.src}
                                alt="Security and Portal Dashboard"
                                className="w-full max-h-[500px] object-contain relative z-10 hover:scale-[1.03] transition-transform duration-700 p-2"
                            />
                        </div>

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 5 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">🔒</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Private & Siloed Security</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    AES-256 encrypted. Role-based access. Every organization's data stays completely isolated.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Complete peace of mind.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📱</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Self-Service Participant Portal</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Participants view past events, total volunteer hours & tax receipt, update contact info, cancel/edit registrations via email link.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Dramatically less admin work.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
