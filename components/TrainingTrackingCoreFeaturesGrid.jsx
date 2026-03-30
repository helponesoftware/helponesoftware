import React from 'react';
import dash1 from '../assets/Training Tracking/01.png';
import dash2 from '../assets/Training Tracking/02.png';
import dash3 from '../assets/Training Tracking/03.png';

export default function TrainingTrackingCoreFeaturesGrid() {
    return (
        <section className="py-24 md:py-32 bg-[#02040D] text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 md:mb-24">
                    <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-5xl font-bold tracking-tighter mb-6 relative z-10">
                        Core Features. Pure Clarity.
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto relative z-10">
                        From creation to completion — everything flows together.
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">

                    {/* --- SECTION 1 --- */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">
                        {/* LEFT COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={dash1.src}
                            alt="Centralized Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 1 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📊</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Centralized Dashboard</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Real-time status overview with bar charts (completed vs pending), upcoming deadlines table with reminders, and custom sorts.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Instant visibility and control.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">➕</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Easy Training Creation & Assignment</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Build trainings from any source (internal or external), assign by individual, role, department, or volunteer type — unlimited slots. Set renewals with auto-alerts.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Assignments in seconds.
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
                                <h3 className="text-2xl font-bold mb-4">Participant Management</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Track unlimited participants, attach completion certificates, send reminders, and view full status lists with one-click exports.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Higher completion rates and less admin time.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">🛎️</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Automated Reminders & Notifications</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Deadline alerts and renewal reminders sent automatically to participants and supervisors.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Fewer missed deadlines.
                                </p>
                            </div>
                        </div>

                        {/* Right COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={dash2.src}
                            alt="Participant Management Dashboard"
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
                            alt="Reporting and Exports Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 5 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📄</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Reporting & Exports</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    One-click CSV/PDF exports filtered by training or user — perfect for grants, audits, or board reports.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Faster, accurate reporting.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">🔒</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Secure & Siloed</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    AES-256 encryption, role-based access, HIPAA-compliant, fully private databases.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Complete peace of mind.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
