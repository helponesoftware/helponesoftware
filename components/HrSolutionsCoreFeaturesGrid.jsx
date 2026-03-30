import React from 'react';
import dash1 from '../assets/Nonprofit HR/01.png';
import dash2 from '../assets/Nonprofit HR/02.png';
import dash3 from '../assets/Nonprofit HR/03.png';

export default function HrSolutionsCoreFeaturesGrid() {
    return (
        <section className="py-24 md:py-32 bg-[#02040D] text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 md:mb-24">
                    <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-5xl font-bold tracking-tighter mb-6 relative z-10">
                        Core Features. Pure Clarity.
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto relative z-10">
                        Onboarding to separation — everything flows together.
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">

                    {/* --- SECTION 1 --- */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">
                        {/* LEFT COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={dash1.src}
                            alt="Onboarding Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 1 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">🚀</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Onboarding & Separation</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Guided flows with custom checklists, auto-triggered docs/training, termination workflows including asset recovery and final pay. Unified for staff and volunteers.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Quicker onboarding, compliant offboarding.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">⭐</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Performance Reviews</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Customizable templates with self-assessments, supervisor input, goal alignment to nonprofit values, progress tracking.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Higher completion rates and mission-aligned growth.
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
                                    <span className="text-4xl leading-none">📚</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Training & Development</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Custom lists, automation, flexible assignments, automated reminders, real-time progress tracking for staff and volunteers.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Improved compliance and team capability.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📜</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Policies & Procedures</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Version-controlled policies with workflows, structured books, approval flows, one-click PDFs, offer letters for volunteers.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Reduced update time and full compliance.
                                </p>
                            </div>
                        </div>

                        {/* Right COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={dash2.src}
                            alt="Training and Policies Dashboard"
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
                            alt="Time off and Compensation Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 5 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">⏰</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Time Off & Attendance</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Self-service requests, balance views, calendar integration, approval workflows, shared for staff and volunteers.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Less tracking time and better team coordination.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">💼</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Compensation & Benefits</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Manage vacancies, salaries, bonuses, benefits enrollment, payroll prep — all in one secure place.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Enhanced updates and compliance.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
