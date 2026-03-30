export default function SecurityCertifications() {
    const certs = [
        {
            icon: "🔒",
            title: "SOC 2 Type II",
            desc: "Independent audit of security, availability, and confidentiality controls.",
            bg: "bg-orange-500/10"
        },
        {
            icon: "💳",
            title: "PCI DSS Level 1",
            desc: "Highest level of payment card data security.",
            bg: "bg-blue-500/10"
        },
        {
            icon: "🌍",
            title: "GDPR Compliant",
            desc: "Full data protection for international donors and volunteers.",
            bg: "bg-green-500/10"
        },
        {
            icon: "✅",
            title: "HIPAA Ready",
            desc: "Ready for health-related nonprofit data when needed.",
            bg: "bg-emerald-500/10"
        }
    ];

    return (
        <section className="py-24 bg-black">
            <div className="max-w-screen-xl mx-auto px-6 text-center">
                <h2 data-aos="fade-up" className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-16">
                    Certified. Audited. Trusted.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {certs.map((cert) => (
                        <div key={cert.title} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                            <div className="text-5xl mb-6">{cert.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{cert.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{cert.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
