'use client';

import { useState, useMemo } from 'react';
import Hero from '../../components/Hero';
import CtaBanner from '../../components/CtaBanner';

export default function FAQPage() {
    const [search, setSearch] = useState('');
    const [openItems, setOpenItems] = useState({});

    const faqData = [
        {
            category: 'General Questions',
            items: [
                {
                    q: 'What is HelpOne?',
                    a: 'HelpOne is the only all-in-one platform built exclusively for nonprofits. One login gives you unlimited access to volunteer management, fundraising, events, donors, HR, finances, policies, training, and IT – with no per-user fees, no caps, and no hidden charges.',
                },
                {
                    q: 'Who is HelpOne for?',
                    a: 'Nonprofits of every size and cause: small community groups, faith communities, schools & youth organizations, social services, healthcare nonprofits, national associations, and everything in between.',
                },
                {
                    q: 'How is HelpOne different from other nonprofit software?',
                    a: '* Truly unlimited – no caps on donors, volunteers, events, transactions, or users\n* Flat-rate payments with no per-transaction platform fees\n* 9 modules in one login – not 9 separate subscriptions\n* Built exclusively for nonprofits, not adapted from for-profit tools\n* Your data is fully isolated – not shared in a multi-tenant pool',
                },
                {
                    q: 'Is HelpOne a new platform?',
                    a: 'HelpOne is currently in a Founders / Beta phase, which means early adopters lock in a discounted rate and directly influence the roadmap. The platform is live and operational.',
                },
            ],
        },
        {
            category: 'Pricing & Plans',
            items: [
                {
                    q: 'How much does HelpOne cost?',
                    a: 'We offer an introductory beta rate of $499/month (locked for 12 months), then $599/month standard. A Scale tier with white-label and dedicated support is available at a custom quote.',
                },
                {
                    q: 'Are there any hidden fees?',
                    a: 'No – one flat monthly price covers unlimited users, records, transactions, and features. No per-seat, no per-transaction platform fees, no onboarding fees, and no contract lock-in.',
                },
                {
                    q: "What's included in each tier?",
                    a: 'All plans include the full unlimited feature set. Tiers differ only in support level: Founders gets standard support, Growth adds guided onboarding and priority email, Scale adds a dedicated account manager, phone/video support, and full white-label branding.',
                },
                {
                    q: 'Can I cancel at any time?',
                    a: 'Yes – no contracts, no cancellation fees. You can cancel any time from your account settings.',
                },
            ],
        },
        {
            category: 'Payments & Processing',
            items: [
                {
                    q: 'What payment processing options does HelpOne offer?',
                    a: 'Two paths: Flat Rate ($1.75/tx + $15/mo) when you bring your own processor (BYOP) or IC+ Rate when HelpOne handles everything – interchange plus a small margin with no monthly fee. Both paths include text-to-give, QR codes, hosted pages, and embeddable forms.',
                },
                {
                    q: 'How much will I save on fees?',
                    a: 'Most nonprofits save $3,000–$14,000+ per year compared to Stripe, PayPal, Donorbox, Zeffy, and similar platforms when factoring in per-transaction fees, platform fees, and per-user costs.',
                },
                {
                    q: 'Do I need my own merchant account?',
                    a: 'For flat rate: Yes (BYOP). For IC+ rate: No – we handle everything.',
                },
                {
                    q: 'Can I keep my current software and just switch payments?',
                    a: 'Yes – use HelpOne payment links/QR codes or hosted pages. Paste them into your invoices or forms on any platform.',
                },
            ],
        },
        {
            category: 'Features & Customizations',
            items: [
                {
                    q: 'Is everything really unlimited?',
                    a: 'Yes – unlimited donors, volunteers, events, transactions, users, SMS, policies, reports, and more. No caps, no tiers that gate features.',
                },
                {
                    q: 'Can I customize HelpOne?',
                    a: 'Scale tier includes fully customizable options with our developers.',
                },
                {
                    q: 'What about white-labeling?',
                    a: 'Available in the Scale tier – remove all HelpOne branding and use your own domain/logo/colors.',
                },
                {
                    q: 'Will future features be included?',
                    a: 'Yes – AI tools, Impact Surveys, advanced analytics, and more are included at no extra cost as they launch.',
                },
                {
                    q: "Can I hide modules I don't use?",
                    a: "Absolutely – from your dashboard settings, simply hide any module you don't currently need. They disappear from your navigation and can be re-enabled at any time.",
                },
            ],
        },
        {
            category: 'Security & Compliance',
            items: [
                {
                    q: 'How secure is HelpOne?',
                    a: 'Fully isolated, siloed databases – your data is yours alone. AES-256 encryption, mandatory 2FA, role-based access control, and regular third-party penetration testing.',
                },
                {
                    q: 'Is HelpOne compliant with IRS Form 990?',
                    a: 'Yes – auto-track volunteer hours, donations, and in-kind contributions. Generate audit-ready reports that map directly to IRS Form 990 line items.',
                },
                {
                    q: 'Do you have a data breach plan?',
                    a: 'Yes – immediate containment, personal notifications, full report, final findings & monitoring, and we hold full liability under our DPA.',
                },
                {
                    q: 'Are you SOC 2 and PCI compliant?',
                    a: 'HelpOne is built to meet SOC 2 Type II and PCI Level 1 standards. Compliance documentation is available upon request.',
                },
            ],
        },
    ];

    const toggleItem = (catIdx, itemIdx) => {
        const key = `${catIdx}-${itemIdx}`;
        setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const filteredData = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return faqData;
        return faqData
            .map((cat) => ({
                ...cat,
                items: cat.items.filter(
                    (item) =>
                        item.q.toLowerCase().includes(q) ||
                        item.a.toLowerCase().includes(q)
                ),
            }))
            .filter((cat) => cat.items.length > 0);
    }, [search]);

    const totalResults = filteredData.reduce((sum, c) => sum + c.items.length, 0);

    return (
        <>
            {/* HERO */}
            <Hero
                badge="HelpOne FAQ"
                title="Frequently Asked"
                titleAccent="Questions"
                subtitle="Everything you need to know about HelpOne."
            >
                {/* Search bar as Hero child */}
                <div className="relative w-full max-w-2xl">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <svg
                            className="w-5 h-5 text-white/40"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search questions…"
                        className="w-full pl-14 pr-6 py-4 md:py-5 bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#00E6C3]/50 focus:border-[#00E6C3] rounded-2xl text-white placeholder-white/40 text-base md:text-lg outline-none transition-all duration-200"
                    />
                    {search && (
                        <button
                            onClick={() => setSearch('')}
                            className="absolute inset-y-0 right-0 pr-5 flex items-center text-white/40 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            </Hero>

            {/* FAQ CONTENT */}
            <section className="py-16 md:py-24 bg-[#0A1428]">
                <div className="max-w-screen-xl mx-auto px-4 md:px-6">

                    {/* Search status */}
                    {search && (
                        <div className="mb-10 flex items-center gap-3">
                            <span className="text-white/60 text-sm">
                                {totalResults === 0
                                    ? 'No results found for'
                                    : `${totalResults} result${totalResults !== 1 ? 's' : ''} for`}
                            </span>
                            <span className="text-[#00E6C3] font-medium text-sm">"{search}"</span>
                            <button
                                onClick={() => setSearch('')}
                                className="ml-2 text-xs text-white/40 hover:text-white underline transition-colors"
                            >
                                Clear
                            </button>
                        </div>
                    )}

                    {/* No results */}
                    {search && totalResults === 0 && (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-6">🔍</div>
                            <h3 className="heading-font text-2xl font-semibold mb-3">No results found</h3>
                            <p className="text-white/60">
                                Try a different search term, or{' '}
                                <a
                                    href="https://helponesoftware.com/contact-us/"
                                    className="text-[#00E6C3] hover:underline"
                                >
                                    contact our team
                                </a>
                                .
                            </p>
                        </div>
                    )}

                    {/* FAQ Categories */}
                    <div className="space-y-16">
                        {filteredData.map((cat, catIdx) => (
                            <div key={cat.category}>
                                {/* Category heading */}
                                <h2 className="heading-font text-2xl md:text-3xl font-bold text-[#00E6C3] mb-6 md:mb-8">
                                    {cat.category}
                                </h2>

                                {/* Accordion items */}
                                <div className="space-y-3">
                                    {cat.items.map((item, itemIdx) => {
                                        const key = `${catIdx}-${itemIdx}`;
                                        const isOpen = !!openItems[key];
                                        return (
                                            <div
                                                key={itemIdx}
                                                className={`bg-[#111827] rounded-2xl border transition-all duration-200 ${isOpen
                                                    ? 'border-[#00E6C3]/40'
                                                    : 'border-white/5 hover:border-white/20'
                                                    }`}
                                            >
                                                <button
                                                    onClick={() => toggleItem(catIdx, itemIdx)}
                                                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                                                >
                                                    <span
                                                        className={`font-medium text-base md:text-lg pr-4 transition-colors ${isOpen ? 'text-[#00E6C3]' : 'text-white'}`}
                                                    >
                                                        {highlight(item.q, search)}
                                                    </span>
                                                    <span
                                                        className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${isOpen
                                                            ? 'border-[#00E6C3] text-[#00E6C3]'
                                                            : 'border-white/30 text-white/60'
                                                            }`}
                                                    >
                                                        {isOpen ? (
                                                            /* Minus */
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14" />
                                                            </svg>
                                                        ) : (
                                                            /* Plus */
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
                                                            </svg>
                                                        )}
                                                    </span>
                                                </button>

                                                {/* Answer */}
                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                                >
                                                    <div className="px-6 pb-6 text-white/70 text-sm md:text-base leading-relaxed whitespace-pre-line">
                                                        {highlight(item.a, search)}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>

            {/* FINAL CTA */}
            <CtaBanner
                title="Still have questions?"
                subtitle="Our team is ready to help you succeed."
                buttonText="Book Your Free Demo"
            />
        </>
    );
}

/** Highlight matching search text inside a string */
function highlight(text, query) {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
        regex.test(part) ? (
            <mark key={i} className="bg-[#00E6C3]/30 text-[#00E6C3] rounded px-0.5">
                {part}
            </mark>
        ) : (
            part
        )
    );
}
