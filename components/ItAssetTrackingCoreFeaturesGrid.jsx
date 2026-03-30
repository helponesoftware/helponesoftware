import React from 'react';
import dash1 from '../assets/IT Asset Tracking/01.png';
import dash2 from '../assets/IT Asset Tracking/02.png';
import dash3 from '../assets/IT Asset Tracking/03.png';

export default function ItAssetTrackingCoreFeaturesGrid() {
    return (
        <section className="py-24 md:py-32 bg-[#02040D] text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 md:mb-24">
                    <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-5xl font-bold tracking-tighter mb-6 relative z-10">
                        Core Features. Pure Clarity.
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto relative z-10">
                        From inventory to assignments — everything flows together.
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">

                    {/* --- SECTION 1 --- */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">
                        {/* LEFT COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={dash1.src}
                            alt="IT Asset Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 1 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📊</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">IT Asset Dashboard</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Bird's-eye view with real-time totals, assigned/taken qty, purchase costs, subscriptions, recent activity, filtering, sorting, and charting.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Instant insights and control.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📁</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Category Management</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Create and manage equipment and software categories with sub-categories, descriptions, and easy organization.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Structured and searchable inventory.
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
                                    <span className="text-4xl leading-none">🤝</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Vendor Management</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Add vendors with full contact details, assign to assets, track purchase orders, qty, costs, and documents.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Streamlined vendor relationships.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">💻</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Equipment Inventory</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Track serial numbers, qty on hand/remaining, purchase orders, conditions (New/Good/Unusable/Damaged), warranties, and assign to users.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Full lifecycle control.
                                </p>
                            </div>
                        </div>

                        {/* Right COLUMN: Image */}
                        <img data-aos="zoom-in"
                            src={dash2.src}
                            alt="Vendor and Equipment Management Dashboard"
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
                            alt="Software Inventory Dashboard"
                            className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl relative z-10 hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                        />

                        {/* RIGHT COLUMN: 2 Feature Cards */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full justify-center">
                            {/* Card 5 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">🗄️</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Software Inventory</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    Manage versions, licenses, subscriptions (annual/monthly), expiration dates with reminders, and user assignments.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: License compliance effortless.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors relative z-20 shadow-lg">
                                <div className="w-12 h-12 mb-8">
                                    <span className="text-4xl leading-none">📈</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Recently Assigned & Purchased</h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6">
                                    View recent activity with names, types, assigned to, dates, qty, and costs for quick oversight.
                                </p>
                                <p className="text-[#00E6C3] font-semibold text-sm">
                                    Outcome: Stay on top of changes instantly.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
