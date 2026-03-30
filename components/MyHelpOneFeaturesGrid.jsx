import React from 'react';

export default function MyHelpOneFeaturesGrid() {
    return (
        <section className="py-24 md:py-32 bg-[#02040D] text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 md:mb-24">
                    <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                        Everything You Need,<br />Exactly Where You Need It
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {/* Card 1 */}
                    <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="w-12 h-12 mb-6 text-4xl flex items-center justify-center">📋</div>
                        <h3 className="text-2xl font-bold mb-3">Personal Dashboard</h3>
                        <p className="text-white/70 text-base leading-relaxed">
                            Greets you by name with today's priorities, action items, approvals, and upcoming events.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="w-12 h-12 mb-6 text-4xl flex items-center justify-center">✅</div>
                        <h3 className="text-2xl font-bold mb-3">Action Items</h3>
                        <p className="text-white/70 text-base leading-relaxed">
                            Central list of tasks, approvals, timesheets, expenses, and time-off requests with due dates.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="w-12 h-12 mb-6 text-4xl flex items-center justify-center">⏰</div>
                        <h3 className="text-2xl font-bold mb-3">My Time-Off</h3>
                        <p className="text-white/70 text-base leading-relaxed">
                            Submit and track requests with status, notes, and balance totals.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="w-12 h-12 mb-6 text-4xl flex items-center justify-center">📅</div>
                        <h3 className="text-2xl font-bold mb-3">My Calendar</h3>
                        <p className="text-white/70 text-base leading-relaxed">
                            Interactive view of events, tasks, reviews, and deadlines with checkboxes.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="w-12 h-12 mb-6 text-4xl flex items-center justify-center">🕒</div>
                        <h3 className="text-2xl font-bold mb-3">My Timesheet</h3>
                        <p className="text-white/70 text-base leading-relaxed">
                            Track shifts, events, hours, and status with easy submission.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div data-aos="fade-up" className="bg-[#0A1428] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="w-12 h-12 mb-6 text-4xl flex items-center justify-center">🎟️</div>
                        <h3 className="text-2xl font-bold mb-3">Events Coming Up</h3>
                        <p className="text-white/70 text-base leading-relaxed">
                            Quick view of upcoming events with countdown timers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
