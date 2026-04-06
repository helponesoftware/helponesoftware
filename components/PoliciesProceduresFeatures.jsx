import React from 'react';

export default function PoliciesProceduresFeatures() {
    return (
        <section className="py-24 md:py-32 bg-[#0A1428] text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Column (Headline) */}
                    <div className="lg:col-span-5">
                        <h3 className="text-[#00E6C3] font-bold text-sm tracking-[0.2em] uppercase mb-6 text-left">
                            MOST NONPROFITS STRUGGLE WITH
                        </h3>
                        <h2 data-aos="fade-up" className="heading-font text-5xl md:text-6xl font-bold tracking-tighter leading-tight pr-4">
                            Scattered documents<br />and manual chaos.
                        </h2>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="lg:col-span-7">
                        <p className="text-base md:text-[17px] text-white/90 leading-relaxed mb-12">
                            Unlike scattered Google Docs, SharePoint, or expensive enterprise tools like NAVEX and PolicyTech, HelpOne gives you living books with unlimited chapters, smart approval workflows, automated notifications, professional PDF export, and deep native integration with HR Solutions, Training Tracking, and Volunteer Management.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    LIVING DOCUMENTS
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    Unlimited books, chapters, and sections with rich text, images, and real-time updates
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#00E6C3] font-bold text-sm tracking-wide uppercase mb-3 text-left">
                                    AUTO COMPLIANCE
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed text-left">
                                    Audit-ready PDFs, version control, role-based access, and seamless 990/HR tie-in
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
