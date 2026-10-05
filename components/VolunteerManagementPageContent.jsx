'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TrustBar from './TrustBar';
import WhoItsForRow from './WhoItsForRow';
import ModulesGrid from './ModulesGrid';
import FutureProof from './FutureProof';
import FoundersProgramCta from './FoundersProgramCta';
import CtaBanner from './CtaBanner';

export default function VolunteerManagementPageContent() {
    const [videoOpen, setVideoOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('availability');

    const bgImage = "https://picsum.photos/id/1015/2000/1200";

    const tabData = {
        availability: {
            title: 'My Availability',
            img: '/assets/volunteer-management/My Availability.png',
            alt: 'My Availability - date ranges and period selectors',
            description: 'Volunteers set their own recurring or one-time availability windows and preferred time periods. The system only surfaces open shifts that match.',
            outcome: 'Outcome: Better match rates and far fewer "I can\'t make it" messages.'
        },
        openshifts: {
            title: 'Open Shifts',
            img: '/assets/volunteer-management/Open Shifts.png',
            alt: 'Open Shifts - claimable opportunities with one-click Request',
            description: 'Volunteers browse only the shifts that fit their skills and availability. One-click Request puts them into the role or sends it for approval. Private events never appear.',
            outcome: 'Outcome: Shifts fill faster with almost no coordinator chasing.'
        },
        myshifts: {
            title: 'My Shifts',
            img: '/assets/volunteer-management/My Shifts.png',
            alt: 'My Shifts - upcoming and past assignments',
            description: 'A clean personal calendar of everything the volunteer has already claimed. Includes location, role, time, and any special notes.',
            outcome: 'Outcome: Volunteers always know where they need to be.'
        },
        skills: {
            title: 'My Skills',
            img: '/assets/volunteer-management/My Shifts-1.png',
            alt: 'My Skills - soft, technical and personal qualities',
            description: 'Volunteers keep their skills up to date. The matching engine uses this data to recommend the right people for the right roles.',
            outcome: 'Outcome: Better role fit and higher retention.'
        },
        training: {
            title: 'My Training',
            img: '/assets/volunteer-management/My Training.png',
            alt: 'My Training - assigned and completed courses',
            description: 'Mandatory and optional training appears here. Volunteers complete modules, upload certificates, and track progress inside their portal.',
            outcome: 'Outcome: Training compliance without spreadsheet tracking.',
            maxHeight: '260px'
        },
        timesheets: {
            title: 'My Timesheets',
            img: '/assets/volunteer-management/My Timesheets.png',
            alt: 'My Timesheets - logged hours and history',
            description: 'Every QR check-in and manual entry appears here. Volunteers can review their hours and see the automatic valuation used for impact reporting.',
            outcome: 'Outcome: Transparent hours that feed straight into 990 and grant reports.'
        },
        policies: {
            title: 'My Policies',
            img: '/assets/volunteer-management/My Policies.png',
            alt: 'My Policies - assigned documents and acknowledgments',
            description: 'Organization-specific policies are assigned and appear here. Volunteers read and digitally acknowledge each one so you always know who is current.',
            outcome: 'Outcome: Policy compliance without email reminders.'
        },
        documents: {
            title: 'My Documents',
            img: '/assets/volunteer-management/My Documents.png',
            alt: 'My Documents - certificates, IDs, extra background checks and uploads',
            description: 'Secure storage for certificates, photo IDs, signed forms, additional background checks, and any other required files.',
            outcome: 'Outcome: One secure place for every required document.'
        }
    };

    return (
        <main className="min-h-screen bg-[#0A1428] text-white overflow-hidden">
            {/* HERO SECTION */}
            <section className="hero-bg min-h-[65vh] md:min-h-[75vh] flex items-center relative py-16 sm:py-24">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: `url('${bgImage}')` }}
                />
                <div className="max-w-screen-2xl mx-auto px-5 sm:px-6 relative z-10 w-full flex justify-center">
                    <div className="w-full max-w-5xl text-left">
                        <div data-aos="fade-up" className="inline-flex items-center gap-2 bg-[#1a2640]/70 border border-white/10 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-3xl text-xs sm:text-sm mb-6 sm:mb-8">
                            <div className="w-2 h-2 bg-[#00E6C3] rounded-full animate-pulse"></div>
                            <span className="font-semibold tracking-wide text-white/90">Platform • Volunteer Management</span>
                        </div>

                        <h1 data-aos="fade-up" data-aos-delay="100" className="heading-font text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.15] sm:leading-none tracking-tighter mb-5 sm:mb-6">
                            Volunteer Management,<br />
                            <span className="text-[#00E6C3]">Built for Real Nonprofits.</span>
                        </h1>

                        <p data-aos="fade-up" data-aos-delay="200" className="text-base sm:text-xl md:text-2xl text-white/80 max-w-3xl mb-8 sm:mb-12 text-left leading-relaxed font-light">
                            Self-service portal. Native Checkr with expiring reminders. Automatic hour valuation for Form 990. Hours approval workflow. Master dashboard. Private events. All in one place.
                        </p>

                        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mt-8 w-full">
                            <Link href="/contact-us" className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-[#00E6C3] hover:bg-white text-[#0A1428] text-base md:text-lg font-semibold rounded-2xl flex items-center justify-center gap-3 group transition-colors [text-decoration:none]">
                                Schedule Free Demo <span className="text-lg md:text-xl group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            <button
                                onClick={() => setVideoOpen(true)}
                                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-transparent border border-white/60 hover:border-[#00E6C3] hover:bg-white/5 text-white text-base md:text-lg font-semibold rounded-2xl flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                            >
                                <i className="fas fa-play text-xs sm:text-sm text-[#00E6C3]"></i> Watch 2-min video
                            </button>
                        </div>

                        <p data-aos="fade-up" data-aos-delay="400" className="mt-5 sm:mt-6 text-xs sm:text-sm text-white/50">
                            <Link href="/pricing" className="underline hover:text-[#00E6C3] transition-colors">
                                Claim Founders Rate – $499/mo forever
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* TRUST BAR */}
            <TrustBar
                items={[
                    "SOC 2 • PCI Level 1",
                    "AES-256 • GDPR",
                    "Built exclusively for nonprofits",
                    "30+ years nonprofit workflow expertise"
                ]}
            />

            {/* GENERIC vs NATIVE */}
            <section className="py-16 sm:py-24 bg-black/60 border-t border-b border-white/10">
                <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
                    <p className="text-[#00E6C3] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4">Most volunteer tools are</p>
                    <h2 data-aos="fade-up" className="heading-font text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                        <span className="text-white/40">Generic.</span><br />
                        You need <span className="text-[#00E6C3]">nonprofit-native</span>.
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="mt-5 sm:mt-6 text-base sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                        HelpOne was built exclusively for 501(c)(3)s. Hours automatically value for Form 990 and P&amp;L. Background checks expire with reminders. Staff and volunteers live in one system. No workarounds.
                    </p>
                </div>
            </section>

            {/* TOP THREE HIGHLIGHTS */}
            <section className="py-16 sm:py-24 bg-[#0A1428]">
                <div className="max-w-screen-2xl mx-auto px-5 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                        {/* Highlight 1 */}
                        <div data-aos="fade-up" className="bg-[#121c32]/60 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col hover:border-[#00E6C3]/50 transition-all hover:shadow-2xl hover:shadow-[#00E6C3]/5 group">
                            <h3 className="heading-font text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-[#00E6C3] transition-colors">Self-Service Portal</h3>
                            <p className="text-white/70 leading-relaxed mb-5 text-sm sm:text-base">
                                Volunteers update their profile, set availability, claim open shifts, track skills, training, timesheets, policies, and documents — all under clear &ldquo;My&rdquo; tabs.
                            </p>
                            <p className="text-[#00E6C3] font-semibold text-xs sm:text-sm mb-5">Outcome: Zero chasing. Higher engagement.</p>
                            <div className="rounded-2xl border border-white/15 bg-[#060D1A]/90 mt-auto shadow-xl p-2 sm:p-3 group-hover:border-[#00E6C3]/40 transition-all duration-300">
                                <img
                                    src="/assets/volunteer-management/Self-Service Portal - small.png"
                                    alt="Volunteer Self-Service Portal"
                                    className="w-full h-auto max-h-60 object-contain rounded-xl mx-auto transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                            </div>
                        </div>

                        {/* Highlight 2 */}
                        <div data-aos="fade-up" data-aos-delay="100" className="bg-[#121c32]/60 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col hover:border-[#00E6C3]/50 transition-all hover:shadow-2xl hover:shadow-[#00E6C3]/5 group">
                            <h3 className="heading-font text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-[#00E6C3] transition-colors">Native Checkr + Compliance</h3>
                            <p className="text-white/70 leading-relaxed mb-5 text-sm sm:text-base">
                                Invite, track, and renew background checks. See expired checks instantly. Upload other checks and certifications. Calendar reminders keep everyone current.
                            </p>
                            <p className="text-[#00E6C3] font-semibold text-xs sm:text-sm mb-5">Outcome: Audit-ready compliance.</p>
                            <div className="rounded-2xl border border-white/15 bg-[#060D1A]/90 mt-auto shadow-xl p-2 sm:p-3 group-hover:border-[#00E6C3]/40 transition-all duration-300">
                                <img
                                    src="/assets/volunteer-management/Native Checkr - Compliance.png"
                                    alt="Native Checkr plus Compliance"
                                    className="w-full h-auto max-h-60 object-contain rounded-xl mx-auto transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                            </div>
                        </div>

                        {/* Highlight 3 */}
                        <div data-aos="fade-up" data-aos-delay="200" className="bg-[#121c32]/60 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col hover:border-[#00E6C3]/50 transition-all hover:shadow-2xl hover:shadow-[#00E6C3]/5 group">
                            <h3 className="heading-font text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-[#00E6C3] transition-colors">990-Ready Hours</h3>
                            <p className="text-white/70 leading-relaxed mb-5 text-sm sm:text-base">
                                Every hour is automatically valued (customizable rate) and ready for Form 990 and P&amp;L. One-click export. No spreadsheets.
                            </p>
                            <p className="text-[#00E6C3] font-semibold text-xs sm:text-sm mb-5">Outcome: Hours that file themselves.</p>
                            <div className="rounded-2xl border border-white/15 bg-[#060D1A]/90 mt-auto shadow-xl p-2 sm:p-3 group-hover:border-[#00E6C3]/40 transition-all duration-300">
                                <img
                                    src="/assets/volunteer-management/990-Ready Hours.png"
                                    alt="990-Ready Hours Valuation"
                                    className="w-full h-auto max-h-60 object-contain rounded-xl mx-auto transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE FEATURES GRID */}
            <section className="py-16 sm:py-24 bg-black/50 border-t border-white/10">
                <div className="max-w-screen-2xl mx-auto px-5 sm:px-6 lg:px-12">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 data-aos="fade-up" className="heading-font text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter">Everything You Actually Need</h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="mt-3 sm:mt-4 text-base sm:text-xl text-white/70">From onboarding to 990 — fully connected.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Feature 1 */}
                        <div data-aos="fade-up" className="bg-[#121c32]/50 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col hover:border-[#00E6C3]/40 transition-all hover:shadow-xl group">
                            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👤</div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-[#00E6C3] transition-colors">Volunteer Onboarding</h3>
                            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-5">Add new volunteers in one click. They complete their own profile, availability, skills, documents, and policies through the portal.</p>
                            <div className="rounded-2xl border border-white/10 bg-[#060D1A]/80 mt-auto p-2 sm:p-3 flex items-center justify-center group-hover:border-[#00E6C3]/30 transition-all">
                                <img src="/assets/volunteer-management/Volunteer Onboarding.png" alt="Volunteer Onboarding" className="w-full h-auto max-h-52 object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]" />
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div data-aos="fade-up" data-aos-delay="100" className="bg-[#121c32]/50 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col hover:border-[#00E6C3]/40 transition-all hover:shadow-xl group">
                            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔒</div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-[#00E6C3] transition-colors">Private Events</h3>
                            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-5">Mark any event as private so it never appears in the volunteer portal. Perfect for internal or sensitive opportunities.</p>
                            <div className="rounded-2xl border border-white/10 bg-[#060D1A]/80 mt-auto p-2 sm:p-3 flex items-center justify-center group-hover:border-[#00E6C3]/30 transition-all">
                                <img src="/assets/volunteer-management/Private Events.png" alt="Private Events Toggle" className="w-full h-auto max-h-52 object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]" />
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div data-aos="fade-up" data-aos-delay="200" className="bg-[#121c32]/50 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col hover:border-[#00E6C3]/40 transition-all hover:shadow-xl group">
                            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📅</div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-[#00E6C3] transition-colors">Smart Availability</h3>
                            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-5">Volunteers set date ranges and preferred periods (Morning / Day / Afternoon / Evening). The system only shows matching open shifts.</p>
                            <div className="rounded-2xl border border-white/10 bg-[#060D1A]/80 mt-auto p-2 sm:p-3 flex items-center justify-center group-hover:border-[#00E6C3]/30 transition-all">
                                <img src="/assets/volunteer-management/Smart Availability.png" alt="Smart Availability" className="w-full h-auto max-h-52 object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]" />
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div data-aos="fade-up" className="bg-[#121c32]/50 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col hover:border-[#00E6C3]/40 transition-all hover:shadow-xl group">
                            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✅</div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-[#00E6C3] transition-colors">Hours Approval Workflow</h3>
                            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-5">Open &rarr; Submitted &rarr; Approved. Track who changed status and why. Clean audit trail for every hour.</p>
                            <div className="rounded-2xl border border-white/10 bg-[#060D1A]/80 mt-auto p-2 sm:p-3 flex items-center justify-center group-hover:border-[#00E6C3]/30 transition-all">
                                <img src="/assets/volunteer-management/Hours Approval Workflow.png" alt="Hours Approval Workflow" className="w-full h-auto max-h-52 object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]" />
                            </div>
                        </div>

                        {/* Feature 5 */}
                        <div data-aos="fade-up" data-aos-delay="100" className="bg-[#121c32]/50 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col hover:border-[#00E6C3]/40 transition-all hover:shadow-xl group">
                            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-[#00E6C3] transition-colors">Communication Hub</h3>
                            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-5">Send SMS and email shift reminders and thank-yous per event. Templates included. Full delivery history.</p>
                            <div className="rounded-2xl border border-white/10 bg-[#060D1A]/80 mt-auto p-2 sm:p-3 flex items-center justify-center group-hover:border-[#00E6C3]/30 transition-all">
                                <img src="/assets/volunteer-management/Communication Hub.png" alt="Communication Hub" className="w-full h-auto max-h-52 object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]" />
                            </div>
                        </div>

                        {/* Feature 6 */}
                        <div data-aos="fade-up" data-aos-delay="200" className="bg-[#121c32]/50 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col hover:border-[#00E6C3]/40 transition-all hover:shadow-xl group">
                            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📋</div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-[#00E6C3] transition-colors">Certifications &amp; Extra Checks</h3>
                            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-5">Upload additional background checks and track other certifications beyond Checkr. Everything stays in one profile.</p>
                            <div className="rounded-2xl border border-white/10 bg-[#060D1A]/80 mt-auto p-2 sm:p-3 flex items-center justify-center group-hover:border-[#00E6C3]/30 transition-all">
                                <img src="/assets/volunteer-management/Certifications & Extra Checks.png" alt="Certifications and Extra Checks" className="w-full h-auto max-h-52 object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE SELF-SERVICE PORTAL */}
            <section className="py-16 sm:py-24 bg-[#0A1428]">
                <div className="max-w-screen-2xl mx-auto px-5 sm:px-6 lg:px-12">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 data-aos="fade-up" className="heading-font text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter">The Volunteer Self-Service Portal</h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="mt-3 sm:mt-4 text-base sm:text-xl text-white/70">Everything a volunteer needs under clear &ldquo;My&rdquo; tabs. No training required.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" className="bg-[#121c32]/60 rounded-3xl border border-white/15 overflow-hidden shadow-2xl backdrop-blur-xl">
                        {/* Window Header */}
                        <div className="bg-[#0A1428] px-4 sm:px-6 py-3.5 flex items-center gap-2 border-b border-white/10">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400/80"></div>
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400/80"></div>
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400/80"></div>
                            </div>
                            <div className="text-[11px] sm:text-xs font-mono text-white/50 ml-3 truncate">
                                Volunteer Portal — {tabData[activeTab].title}
                            </div>
                        </div>

                        <div className="p-5 sm:p-8 md:p-12">
                            {/* Scrollable Tab Switcher on Mobile / Wrapped on Desktop */}
                            <div className="flex overflow-x-auto sm:flex-wrap justify-start sm:justify-center gap-2 py-2 pb-3 sm:pb-2 mb-8 sm:mb-10 no-scrollbar scroll-smooth">
                                {Object.keys(tabData).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`shrink-0 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                                            activeTab === key
                                                ? 'bg-[#00E6C3]/20 border-[#00E6C3] text-[#00E6C3] shadow-lg shadow-[#00E6C3]/20'
                                                : 'border-white/10 text-white/70 hover:bg-white/5 hover:text-white'
                                        }`}
                                    >
                                        {tabData[key].title}
                                    </button>
                                ))}
                            </div>

                            {/* Active Tab Showcase */}
                            <div className="max-w-5xl mx-auto text-center">
                                <h3 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">{tabData[activeTab].title}</h3>

                                <div className="rounded-2xl border border-white/15 bg-[#060D1A] mb-6 sm:mb-8 shadow-2xl p-4 sm:p-5 md:p-6 overflow-hidden transition-all">
                                    <img
                                        src={tabData[activeTab].img}
                                        alt={tabData[activeTab].alt}
                                        className="w-full h-auto object-contain mx-auto"
                                        style={{ maxHeight: tabData[activeTab].maxHeight || '600px' }}
                                    />
                                </div>

                                <p className="text-white/80 text-base sm:text-xl leading-relaxed mb-3 sm:mb-4 max-w-3xl mx-auto">
                                    {tabData[activeTab].description}
                                </p>
                                <p className="text-[#00E6C3] font-bold text-sm sm:text-lg">
                                    {tabData[activeTab].outcome}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ADMIN MASTER DASHBOARD */}
            <section className="py-16 sm:py-24 bg-black/60 border-t border-white/10">
                <div className="max-w-screen-2xl mx-auto px-5 sm:px-6 lg:px-12">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 data-aos="fade-up" className="heading-font text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter">Admin Master Dashboard</h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="mt-3 sm:mt-4 text-base sm:text-xl text-white/70">One screen to run your entire volunteer program.</p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div data-aos="fade-right" className="lg:col-span-7">
                            <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#060D1A] p-2 sm:p-3.5 shadow-2xl hover:border-[#00E6C3]/40 transition-all group">
                                <img
                                    src="/assets/volunteer-management/Admin Master Dashboard.png"
                                    alt="Admin Master Dashboard"
                                    className="w-full h-auto object-contain rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                                />
                            </div>
                        </div>

                        <div data-aos="fade-left" className="lg:col-span-5 space-y-4 sm:space-y-6">
                            <div className="bg-[#121c32]/60 rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#00E6C3]/40 transition-colors">
                                <h3 className="font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2">Volunteer Overview</h3>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">Live count of active volunteers, total hours, and automatic dollar valuation at your custom hourly rate.</p>
                            </div>
                            <div className="bg-[#121c32]/60 rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#00E6C3]/40 transition-colors">
                                <h3 className="font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2">Need Attention Flags</h3>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">Instant visibility into expired background checks, missing documents, or incomplete profiles — with Checkr status icons.</p>
                            </div>
                            <div className="bg-[#121c32]/60 rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#00E6C3]/40 transition-colors">
                                <h3 className="font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2">Shift Management &amp; Hours Approval</h3>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">See fill rates per event, manage open shifts, and move hours through Open &rarr; Submitted &rarr; Approved with full audit trail.</p>
                            </div>
                            <div className="bg-[#121c32]/60 rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#00E6C3]/40 transition-colors">
                                <h3 className="font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2">Compliance Reporting</h3>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">One-click summary: &ldquo;32 hours ready for Form 990, $1,113.28 for P&amp;L&rdquo;. Export CSV or PDF by month, quarter, year, or YTD.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BACKGROUND SCREENING DONE RIGHT */}
            <section className="py-16 sm:py-24 bg-[#0A1428] border-t border-white/10">
                <div className="max-w-screen-2xl mx-auto px-5 sm:px-6 lg:px-12">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 data-aos="fade-up" className="heading-font text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter">Background Screening Done Right</h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="mt-3 sm:mt-4 text-base sm:text-xl text-white/70">Native Checkr + the ability to track everything else.</p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div data-aos="fade-right" className="lg:col-span-6">
                            <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#060D1A] p-2 sm:p-3.5 shadow-2xl hover:border-[#00E6C3]/40 transition-all group">
                                <img
                                    src="/assets/volunteer-management/Background Screening Done Right.png"
                                    alt="Background Screening Dashboard"
                                    className="w-full h-auto object-contain rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                                />
                            </div>
                        </div>

                        <div data-aos="fade-left" className="lg:col-span-6 space-y-4 sm:space-y-6">
                            <div className="flex gap-3.5 sm:gap-4">
                                <div className="text-[#00E6C3] text-lg sm:text-xl mt-0.5"><i className="fas fa-check-circle"></i></div>
                                <div>
                                    <h3 className="font-bold text-base sm:text-lg mb-1">Native Checkr Integration</h3>
                                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">Invite, track status, and receive real-time webhooks. Basic Criminal, National Sex Offender, SSN Trace, County Criminal packages included.</p>
                                </div>
                            </div>
                            <div className="flex gap-3.5 sm:gap-4">
                                <div className="text-[#00E6C3] text-lg sm:text-xl mt-0.5"><i className="fas fa-check-circle"></i></div>
                                <div>
                                    <h3 className="font-bold text-base sm:text-lg mb-1">Expiring Check Reminders</h3>
                                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">Automatic alerts when background checks expire. Visible on the master dashboard and calendar.</p>
                                </div>
                            </div>
                            <div className="flex gap-3.5 sm:gap-4">
                                <div className="text-[#00E6C3] text-lg sm:text-xl mt-0.5"><i className="fas fa-check-circle"></i></div>
                                <div>
                                    <h3 className="font-bold text-base sm:text-lg mb-1">Upload Other Checks &amp; Certifications</h3>
                                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">Not limited to Checkr. Upload additional background checks and track any other certifications your organization requires.</p>
                                </div>
                            </div>
                            <div className="flex gap-3.5 sm:gap-4">
                                <div className="text-[#00E6C3] text-lg sm:text-xl mt-0.5"><i className="fas fa-check-circle"></i></div>
                                <div>
                                    <h3 className="font-bold text-base sm:text-lg mb-1">Full Activity Log</h3>
                                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">See every invitation sent, completed, canceled, or expired with timestamps and volunteer names.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Checkr Disclaimer */}
                    <div data-aos="fade-up" className="mt-8 sm:mt-12 max-w-3xl mx-auto">
                        <div className="bg-[#121c32]/60 border border-white/10 rounded-2xl px-5 py-4 sm:px-6 sm:py-5 text-xs sm:text-sm text-white/70 leading-relaxed">
                            <strong className="text-white font-semibold">Note about Checkr:</strong> Checkr is a third-party background screening service. While fully integrated into HelpOne, background check fees are billed separately by Checkr and are not included in HelpOne&apos;s flat monthly rate. The good news — Checkr offers excellent nonprofit discounts.
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPETITIVE COMPARISON MATRIX */}
            <section className="py-16 sm:py-24 bg-black/60 border-t border-white/10">
                <div className="max-w-screen-2xl mx-auto px-5 sm:px-6 lg:px-12">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 data-aos="fade-up" className="heading-font text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-3 sm:mb-4">How HelpOne Compares</h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto">Raw feature comparison against the most popular volunteer management platforms.</p>
                    </div>

                    {/* Scroll Hint for Mobile */}
                    <div className="md:hidden text-xs text-[#00E6C3] text-center mb-3 flex items-center justify-center gap-1.5 font-medium">
                        <i className="fas fa-arrow-left"></i> Swipe table horizontally to compare features <i className="fas fa-arrow-right"></i>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" className="overflow-x-auto rounded-2xl sm:rounded-3xl border border-white/10 bg-[#121c32]/30 shadow-2xl webkit-overflow-scrolling-touch">
                        <table className="w-full text-xs sm:text-sm text-left min-w-[700px]">
                            <thead>
                                <tr className="border-b border-white/20 bg-white/5">
                                    <th className="py-4 sm:py-5 px-4 sm:px-6 font-semibold text-white">Feature</th>
                                    <th className="py-4 sm:py-5 px-3 sm:px-4 text-center text-[#00E6C3] font-bold text-sm sm:text-base bg-[#00E6C3]/10">HelpOne</th>
                                    <th className="py-4 sm:py-5 px-3 sm:px-4 text-center text-white/70 font-semibold">VolunteerHub</th>
                                    <th className="py-4 sm:py-5 px-3 sm:px-4 text-center text-white/70 font-semibold">Better Impact</th>
                                    <th className="py-4 sm:py-5 px-3 sm:px-4 text-center text-white/70 font-semibold">Galaxy Digital</th>
                                    <th className="py-4 sm:py-5 px-3 sm:px-4 text-center text-white/70 font-semibold">SignUpGenius</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                <tr>
                                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 font-medium text-white/90">Self-service portal with full &ldquo;My&rdquo; tabs</td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center bg-[#00E6C3]/5"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 font-medium text-white/90">Native Checkr + expiring reminders</td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center bg-[#00E6C3]/5"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 font-medium text-white/90">Upload other background checks &amp; certifications</td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center bg-[#00E6C3]/5"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 font-medium text-white/90">Automatic hour valuation for Form 990 / P&amp;L</td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center bg-[#00E6C3]/5"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 font-medium text-white/90">Hours approval workflow (Open &rarr; Submitted &rarr; Approved)</td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center bg-[#00E6C3]/5"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 font-medium text-white/90">Private events (hidden from volunteer portal)</td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center bg-[#00E6C3]/5"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 font-medium text-white/90">SMS + Email communication hub with templates</td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center bg-[#00E6C3]/5"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 font-medium text-white/90">Staff + Volunteers in one unified system</td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center bg-[#00E6C3]/5"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 font-medium text-white/90">Native Events + Fundraising + Finances modules</td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center bg-[#00E6C3]/5"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-times text-red-400 text-base sm:text-xl"></i></td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 font-medium text-white/90">Unlimited volunteers &amp; admins</td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center bg-[#00E6C3]/5"><i className="fas fa-check text-[#00E6C3] text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                    <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-center"><i className="fas fa-minus text-amber-400 text-base sm:text-xl"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-6 sm:mt-8 text-xs sm:text-sm text-white/60">
                        <div className="flex items-center gap-2"><i className="fas fa-check text-[#00E6C3]"></i> Full / Native</div>
                        <div className="flex items-center gap-2"><i className="fas fa-minus text-amber-400"></i> Limited or Add-on</div>
                        <div className="flex items-center gap-2"><i className="fas fa-times text-red-400"></i> Not Available</div>
                    </div>

                    {/* Pricing Callout */}
                    <div data-aos="fade-up" className="mt-10 sm:mt-12 max-w-3xl mx-auto text-center">
                        <div className="bg-[#00E6C3]/10 border border-[#00E6C3]/30 rounded-3xl p-6 sm:p-8">
                            <p className="text-base sm:text-xl text-white leading-relaxed">
                                <span className="text-white/70">Most pure volunteer tools get more expensive as you grow.</span><br />
                                <span className="font-bold text-[#00E6C3]">HelpOne stays at one flat rate with unlimited volunteers and admins</span> — and includes the rest of the platform (Events, Finances, 990-ready hours, etc.).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <WhoItsForRow
                title="Who It's For"
                items={[
                    'Faith Communities',
                    'Schools & Youth Groups',
                    'Animal Rescues',
                    'Arts & Culture Organizations',
                    'Community Groups',
                    'Environmental Causes'
                ]}
            />

            <FutureProof />

            <FoundersProgramCta />

            <CtaBanner
                title="Ready to fill every shift with the right people?"
                subtitle="Self-service portal. Checkr. 990-ready hours. Master dashboard. All connected."
                buttonText="Schedule Your Free Demo"
                buttonClassName="!bg-[#0A1428] !text-white hover:!bg-[#1a2640]"
            />

            {/* YOUTUBE DEMO VIDEO MODAL */}
            {videoOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                    onClick={() => setVideoOpen(false)}
                >
                    <div
                        className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setVideoOpen(false)}
                            className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center bg-black/70 hover:bg-black rounded-full text-white text-lg transition-all"
                            aria-label="Close modal"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        <iframe
                            src="https://www.youtube.com/embed/cPIaTTqqDm0?autoplay=1&rel=0"
                            title="HelpOne Volunteer Management Software | Self Service Scheduling, QR Check In & Form 990 Tracking"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </main>
    );
}
