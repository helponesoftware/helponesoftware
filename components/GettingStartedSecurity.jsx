import React from 'react';

export default function GettingStartedSecurity() {
    return (
        <section className="py-24 bg-black text-white text-center pb-32">
            <div className="max-w-[1400px] mx-auto px-6">
                <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl font-bold tracking-tighter mb-16">
                    Security You Can Feel
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-24 gap-y-6 text-sm md:text-base font-medium max-w-5xl mx-auto">
                    <span>SOC 2 Certified</span>
                    <span>PCI DSS Level 1</span>
                    <span>AES-256 Encryption</span>
                    <span>GDPR & HIPAA-ready</span>
                </div>
            </div>
        </section>
    );
}
