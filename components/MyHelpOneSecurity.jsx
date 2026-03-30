import React from 'react';

export default function MyHelpOneSecurity() {
    return (
        <section className="py-24 md:py-32 bg-black text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
                <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl font-bold tracking-tighter mb-16">
                    Built for Nonprofits.<br />Secured Like Enterprise.
                </h2>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div className="bg-[#0D1117] rounded-3xl p-8 py-12 border border-white/5 flex flex-col items-center justify-center text-center hover:border-white/10 transition-colors">
                        <div className="text-4xl mb-6">🔒</div>
                        <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
                        <p className="text-white/70 text-sm">AES-256 at rest and in transit</p>
                    </div>

                    <div className="bg-[#0D1117] rounded-3xl p-8 py-12 border border-white/5 flex flex-col items-center justify-center text-center hover:border-white/10 transition-colors">
                        <div className="text-4xl mb-6">🛡️</div>
                        <h3 className="text-xl font-bold mb-2">SOC 2 • PCI Level 1</h3>
                        <p className="text-white/70 text-sm">Industry-leading compliance</p>
                    </div>

                    <div className="bg-[#0D1117] rounded-3xl p-8 py-12 border border-white/5 flex flex-col items-center justify-center text-center hover:border-white/10 transition-colors">
                        <div className="text-4xl mb-6">✅</div>
                        <h3 className="text-xl font-bold mb-2">Role-Based Access</h3>
                        <p className="text-white/70 text-sm">Every team member sees only<br className="hidden md:block" />what they need</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
