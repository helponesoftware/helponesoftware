'use client';

import { useState } from 'react';
import Hero from '../../components/Hero';
import CtaBanner from '../../components/CtaBanner';

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        interest: '',
        message: '',
    });
    const [toast, setToast] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function handleChange(e) {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('https://formsubmit.co/ajax/hello@helponesoftware.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    _subject: `New inquiry: ${formData.interest || 'Contact Form'}`,
                    _captcha: 'false',
                    'First Name': formData.firstName,
                    'Last Name': formData.lastName,
                    'Email Address': formData.email,
                    'Organization': formData.organization,
                    'Interested In': formData.interest,
                    'Message': formData.message,
                }),
            });
            if (res.ok) {
                setFormData({ firstName: '', lastName: '', email: '', organization: '', interest: '', message: '' });
                setToast(true);
                setTimeout(() => setToast(false), 4000);
            } else {
                setError('Submission failed. Please email us at hello@helponesoftware.com');
            }
        } catch {
            setError('Network error. Please check your connection and try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#0A1428] relative">

            {/* Toast */}
            {toast && (
                <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 px-6 py-4 bg-[#141C2B] border border-[#00E6C3]/50 rounded-2xl shadow-2xl animate-fade-in">
                    <div className="w-8 h-8 rounded-full bg-[#00E6C3]/10 flex items-center justify-center">
                        <i className="fas fa-check text-[#00E6C3] text-sm"></i>
                    </div>
                    <div>
                        <p className="text-white font-semibold text-sm">Thank you!</p>
                        <p className="text-white/50 text-xs">We'll be in touch shortly.</p>
                    </div>
                </div>
            )}

            {/* HERO SECTION */}
            <Hero
                badge="Company &bull; Contact Us"
                title="Let's Talk About"
                titleAccent="Your Mission."
                subtitle="Whether you're ready for a demo, have a question, or just want to say hello — we're here to help. Fill out the form or reach out directly."
                hideButtons={true}
            />

            {/* FORM GRID SECTION */}
            {/* Adjusted padding to seamlessly flow from the Hero component */}
            <div className="px-6 pb-24 -mt-10 relative z-20">
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* ── LEFT: FORM PANEL ── */}
                    <div className="lg:col-span-7 bg-[#141C2B] rounded-2xl p-8 sm:p-10 shadow-2xl">
                        <h1 className="text-2xl font-bold text-white mb-8">Send us a message</h1>

                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* First + Last Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-white block">First Name <span className="text-white">*</span></label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-transparent border border-[#2A364F] text-white text-sm focus:outline-none focus:border-[#00E6C3] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-white block">Last Name <span className="text-white">*</span></label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-transparent border border-[#2A364F] text-white text-sm focus:outline-none focus:border-[#00E6C3] transition-all"
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-white block">Email Address <span className="text-white">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-transparent border border-[#2A364F] text-white text-sm focus:outline-none focus:border-[#00E6C3] transition-all"
                                />
                            </div>

                            {/* Organization */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-white block">Organization <span className="text-white">*</span></label>
                                <input
                                    type="text"
                                    name="organization"
                                    required
                                    value={formData.organization}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-transparent border border-[#2A364F] text-white text-sm focus:outline-none focus:border-[#00E6C3] transition-all"
                                />
                            </div>

                            {/* I'm interested in... */}
                            <div className="space-y-2 relative">
                                <label className="text-xs font-semibold text-white block">I'm interested in... <span className="text-white">*</span></label>
                                <div className="relative">
                                    <select
                                        name="interest"
                                        required
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-transparent border border-[#2A364F] text-white text-sm focus:outline-none focus:border-[#00E6C3] transition-all appearance-none cursor-pointer"
                                        style={{ WebkitAppearance: 'none' }}
                                    >
                                        <option value="" disabled className="bg-[#141C2B] text-white/50">Select an option</option>
                                        <option value="Demo & Sales" className="bg-[#141C2B] text-white">Demo & Sales</option>
                                        <option value="General Support" className="bg-[#141C2B] text-white">General Support</option>
                                        <option value="Partnerships" className="bg-[#141C2B] text-white">Partnerships</option>
                                        <option value="Other" className="bg-[#141C2B] text-white">Other</option>
                                    </select>
                                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50">
                                        <i className="fas fa-chevron-down text-xs"></i>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-white block">Message <span className="text-white">*</span></label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-transparent border border-[#2A364F] text-white text-sm focus:outline-none focus:border-[#00E6C3] transition-all resize-y"
                                />
                            </div>

                            {/* Error */}
                            {error && (
                                <p className="text-red-400 text-sm mt-2">{error}</p>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 mt-4 bg-[#00E6C3] hover:bg-[#00E6C3]/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-[#060B14] font-bold rounded-xl text-sm transition-all flex items-center justify-center"
                            >
                                {loading ? (
                                    <><i className="fas fa-spinner fa-spin mr-2"></i> Sending...</>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>

                    {/* ── RIGHT: INFO PANELS ── */}
                    <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">

                        {/* Direct Contact Panel */}
                        <div className="bg-[#141C2B] rounded-2xl p-8 sm:p-10 shadow-2xl">
                            <h2 className="text-lg font-bold text-white mb-8">Direct Contact</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-[#00E6C3] text-xs font-bold mb-1">General Inquiries</h3>
                                    <a href="mailto:hello@helponesoftware.com" className="text-white text-sm hover:underline font-medium">hello@helponesoftware.com</a>
                                </div>
                                <div>
                                    <h3 className="text-[#00E6C3] text-xs font-bold mb-1">Demo & Sales</h3>
                                    <a href="mailto:sales@helponesoftware.com" className="text-white text-sm hover:underline font-medium">sales@helponesoftware.com</a>
                                </div>
                                <div>
                                    <h3 className="text-[#00E6C3] text-xs font-bold mb-1">Support</h3>
                                    <a href="mailto:support@helponesoftware.com" className="text-white text-sm hover:underline font-medium">support@helponesoftware.com</a>
                                </div>
                                <div>
                                    <h3 className="text-[#00E6C3] text-xs font-bold mb-1">Phone</h3>
                                    <a href="tel:+914-449-4600" className="text-white text-sm hover:underline font-medium">914-449-4600</a>
                                </div>
                            </div>
                        </div>

                        {/* Our Location Panel */}
                        <div className="bg-[#141C2B] rounded-2xl p-8 sm:p-10 shadow-2xl">
                            <h2 className="text-lg font-bold text-white mb-6">Our Location</h2>
                            <address className="text-white/90 text-sm not-italic leading-relaxed font-medium">
                                HelpOne Software<br />
                                Somers, NY 10589<br />
                                United States
                            </address>
                        </div>

                    </div>
                </div>
            </div>

            {/* CTA BANNER */}
            <CtaBanner
                title="Ready to simplify your nonprofit?"
                subtitle={null}
                buttonText="Book Your Free Demo"
                buttonClassName="bg-[#0A1428] text-white hover:bg-[#141C2B]"
            />
        </div>
    );
}
