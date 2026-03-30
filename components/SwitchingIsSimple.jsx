export default function SwitchingIsSimple() {
    return (
        <section className="py-24 md:py-32 bg-black">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl font-bold text-white mb-4">
                        Switching Is Simple. Savings Are Immediate.
                    </h2>
                    <p className="text-lg md:text-xl text-[#00E6C3]/80 mb-10 max-w-2xl mx-auto">
                        Two paths. Zero disruption. Thousands saved.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-[#121c2c] border border-white/5 rounded-3xl p-8 hover:border-[#00E6C3]/30 transition-colors">
                        <div className="text-4xl mb-4">🔗</div>
                        <h3 className="text-2xl font-bold text-white mb-3">Payment Links (Zero Changes)</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Share a secure, branded link or QR code. Paste into QuickBooks notes/custom field or replace Donorbox/Zeffy/Givebutter checkout button. Donors pay instantly — funds deposit to your bank.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-[#00E6C3] font-bold text-sm">Outcome:</span>
                            <span className="text-[#00E6C3] text-sm">Immediate switch with zero disruption.</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#121c2c] border border-white/5 rounded-3xl p-8 hover:border-[#00E6C3]/30 transition-colors">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="text-2xl font-bold text-white mb-3">Flat-Rate Pricing</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            $1.75/tx + $15/mo gateway (bring your own processor) or IC+ Interchange + 0.40% + $0.30/tx + $15/mo. No percentages. No contracts. No minimums.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-[#00E6C3] font-bold text-sm">Outcome:</span>
                            <span className="text-[#00E6C3] text-sm">Predictable low cost and massive savings.</span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#121c2c] border border-white/5 rounded-3xl p-8 hover:border-[#00E6C3]/30 transition-colors">
                        <div className="text-4xl mb-4">🚀</div>
                        <h3 className="text-2xl font-bold text-white mb-3">1-3 Day Processor Approval</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Apply through HelpOne — get approved in 1-3 business days. Keep your existing merchant account (PayPal) or start fresh.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-[#00E6C3] font-bold text-sm">Outcome:</span>
                            <span className="text-[#00E6C3] text-sm">Fastest switch possible.</span>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#121c2c] border border-white/5 rounded-3xl p-8 hover:border-[#00E6C3]/30 transition-colors">
                        <div className="text-4xl mb-4">🛠️</div>
                        <h3 className="text-2xl font-bold text-white mb-3">Integration &amp; Migration Packages</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Self-Service (Free) — Basic ($499 one-time) — Standard ($999–$1500) — Premium Full-Service ($1,999–$3500). Includes webhook setup, data migration, training, and priority support.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-[#00E6C3] font-bold text-sm">Outcome:</span>
                            <span className="text-[#00E6C3] text-sm">Savings pay for everything in 1-2 months.</span>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#121c2c] border border-white/5 rounded-3xl p-8 hover:border-[#00E6C3]/30 transition-colors">
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="text-2xl font-bold text-white mb-3">Real Savings Examples</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            QuickBooks users save $500–$1,000+/mo. Donorbox/Givebutter users save $600–$1,000+/mo. Even Zeffy users save enough to cover HelpOne + migration.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-[#00E6C3] font-bold text-sm">Outcome:</span>
                            <span className="text-[#00E6C3] text-sm">Switch pays for itself instantly.</span>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#121c2c] border border-white/5 rounded-3xl p-8 hover:border-[#00E6C3]/30 transition-colors">
                        <div className="text-4xl mb-4">🔄</div>
                        <h3 className="text-2xl font-bold text-white mb-3">Seamless Reconciliation</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Auto-reconcile via bank feed or webhooks. View every transaction in your HelpOne dashboard with full donor/participant linking.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-[#00E6C3] font-bold text-sm">Outcome:</span>
                            <span className="text-[#00E6C3] text-sm">No manual entry ever again.</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
