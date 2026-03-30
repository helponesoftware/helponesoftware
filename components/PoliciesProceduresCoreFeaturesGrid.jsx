import React from 'react';
import dash1 from '../assets/Policies & Procedures/01.png';
import dash2 from '../assets/Policies & Procedures/02.png';
import dash3 from '../assets/Policies & Procedures/03.png';

export default function PoliciesProceduresCoreFeaturesGrid() {
    return (
        <section className="py-24 md:py-32 bg-[#02040D] text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 md:mb-24">
                    <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-5xl font-bold tracking-tighter mb-6 relative z-10">
                        Core Features. Pure Clarity.
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto relative z-10">
                        From draft to distribution — everything flows together.
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">

                    {/* --- SECTION 1 --- */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">
                        {/* LEFT COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={dash1.src}
                            alt="Policy Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 1 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📋</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Policy Dashboard</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Real-time queue with status pie charts (Draft, Under Review, Published, Expired). Role-based access and quick actions.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Instant visibility and control.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📖</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Living Books & Unlimited Structure</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Create books with unlimited chapters and sections. Rich text, images, and media — all version-controlled.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Always-current policies.
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
                                    <span className="text-4xl leading-none">✅</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Smart Approval Workflows</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Assign Review Committees, track submissions, and manage statuses from Draft to Published or Expired.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Faster, compliant approvals.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">🛎️</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Automated Notifications</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Send targeted updates to groups or all staff/volunteers when policies change.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Everyone stays informed.
                                </p>
                            </div>
                        </div>

                        {/* Right COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={dash2.src}
                            alt="Approval Workflows Dashboard"
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
                            alt="PDF Export and Security Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 5 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📄</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Professional PDF Export</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Generate polished PDFs with covers, indexes, and modification dates for sharing or audits.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Audit-ready documents instantly.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">🔒</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Secure & Compliant Storage</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    AES-256 encryption, role-based access, GDPR compliance, and seamless integration with HR/Training modules.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Peace of mind and full compliance.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
