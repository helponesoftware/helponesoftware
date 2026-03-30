import React from 'react';
import dash1 from '../assets/Nonprofit Finances/01.png';
import dash2 from '../assets/Nonprofit Finances/02.png';
import dash3 from '../assets/Nonprofit Finances/03.png';

export default function FinanceCoreFeaturesGrid() {
    return (
        <section className="py-24 md:py-32 bg-[#02040D] text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 md:mb-24">
                    <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-5xl font-bold tracking-tighter mb-6 relative z-10">
                        Core Features. Pure Clarity.
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto relative z-10">
                        From chart of accounts to one-click compliance — everything flows together.
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">

                    {/* --- SECTION 1 --- */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">
                        {/* LEFT COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={dash1.src}
                            alt="Finance Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 1 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📊</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Comprehensive Finance Dashboard</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Real-time snapshot of transactions, deadlines, restricted funds, and key metrics. Customizable views for board reports and audits.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Instant clarity, no more surprises.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📋</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Nonprofit-Specific Chart of Accounts</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Pre-built GAAP/FASB structures for donations, grants, restricted funds, programs. Easy customization and seamless GL sync.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Proper accounting without the headache.
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
                                <h3 className="text-2xl font-bold mb-4">Detailed Transaction Insights</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Full debit/credit, restrictions, descriptions, dates. Searchable, exportable, and audit-ready.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Complete transparency and control.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">💰</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Net Assets & Fund Tracking</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Real-time restricted vs unrestricted views, FASB-compliant breakdowns, one-click Statement of Activities and Financial Position.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Mission-aligned financial health.
                                </p>
                            </div>
                        </div>

                        {/* Right COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={dash2.src}
                            alt="Tax Receipts and Fund Tracking"
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
                            alt="Donation Management Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 5 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📝</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Donation & Sponsorship Management</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Unlimited entries with amounts, dates, methods, restrictions. Automated thank-yous and searchable database.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Stronger donor relationships.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📄</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Compliance & Reporting</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Pre-built templates for IRS Form 990, 990-T, CHAR500. Auto-population, easy customization, FASB/GAAP alignment.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Stress-free audits and filings.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
