'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
    const [videoOpen, setVideoOpen] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false);
    const router = useRouter();
    const navRef = useRef(null);
    const hoverTimeoutRef = useRef(null);

    function openMobileMenu() {
        setMobileOpen(true);
    }

    function closeMobileMenu() {
        setMobileOpen(false);
        setOpenDropdowns({});
    }

    function toggleMobileDropdown(id) {
        setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
    }

    function handleMouseEnter(id) {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        setOpenDesktopDropdown(id);
    }

    function handleMouseLeave() {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        hoverTimeoutRef.current = setTimeout(() => {
            setOpenDesktopDropdown(null);
        }, 400);
    }

    function closeDesktopDropdowns() {
        setOpenDesktopDropdown(null);
        if (typeof document !== 'undefined' && document.activeElement) {
            document.activeElement.blur();
        }
    }

    function bookDemo() {
        router.push('/contact-us');
        closeMobileMenu();
    }

    function showDemoModal() {
        setVideoOpen(true);
    }

    function closeVideoModal() {
        setVideoOpen(false);
        setVideoPlaying(false);
        // Clear hash without scrolling
        if (window.location.hash === '#video') {
            window.history.pushState(null, '', window.location.pathname + window.location.search);
        }
    }

    // Handle hash-based triggers (e.g. from homepage Hero)
    useEffect(() => {
        const handleHash = () => {
            if (window.location.hash === '#video') {
                setVideoOpen(true);
            }
        };

        // Listen for internal Link navigation which might not fire native hashchange
        const handleLinkClick = (e) => {
            const link = e.target.closest('a');
            if (link && link.getAttribute('href') === '/#video' || (link && link.hash === '#video')) {
                setVideoOpen(true);
            }
        };

        handleHash();
        window.addEventListener('hashchange', handleHash);
        window.addEventListener('click', handleLinkClick);

        return () => {
            window.removeEventListener('hashchange', handleHash);
            window.removeEventListener('click', handleLinkClick);
        };
    }, []);

    // Handle clicks outside the desktop navigation to close dropdowns
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenDesktopDropdown(null);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <nav ref={navRef} className="sticky top-0 z-50 py-4 bg-[#0A1428]/95 backdrop-blur-lg border-b border-white/10">
                <div className="max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between h-14">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Link href="/">
                            <Image
                                src="/assets/Logo-06.png"
                                alt="HelpOne Logo"
                                width={160}
                                height={64}
                                className="h-16 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
                        {/* Platform */}
                        <div
                            className={`dropdown ${openDesktopDropdown === 'platform' ? 'open' : ''}`}
                            onMouseEnter={() => handleMouseEnter('platform')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="nav-link flex items-center gap-1.5 focus:outline-none" aria-label="Open Platform Menu">
                                Platform <i className={`fas fa-chevron-down text-xs mt-0.5 transition-transform duration-300 ${openDesktopDropdown === 'platform' ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className="dropdown-content" onClick={closeDesktopDropdowns}>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                                    <Link href="/volunteer-management" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Volunteer Management</Link>
                                    <Link href="/event-management" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Event Management</Link>
                                    <Link href="/fundraising" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Fundraising</Link>
                                    <Link href="/participants" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Participants</Link>
                                    <Link href="/donors-and-contacts" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Donors &amp; Contacts</Link>
                                    <Link href="/finances" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Finances</Link>
                                    <Link href="/hr-solutions" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">HR Solutions</Link>
                                    <Link href="/policies-and-procedures" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Policies &amp; Procedures</Link>
                                    <Link href="/training-tracking" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Training Tracking</Link>
                                    <Link href="/it-asset-tracking-management" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">IT Asset Tracking</Link>
                                    <Link href="/my-helpone" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">My HelpOne</Link>
                                    <Link href="/getting-started" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Getting Started</Link>
                                </div>
                            </div>
                        </div>

                        {/* Who It's For */}
                        <div
                            className={`dropdown ${openDesktopDropdown === 'who' ? 'open' : ''}`}
                            onMouseEnter={() => handleMouseEnter('who')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="nav-link flex items-center gap-1.5 focus:outline-none" aria-label="Open Who It's For Menu">
                                Who It&apos;s For <i className={`fas fa-chevron-down text-xs mt-0.5 transition-transform duration-300 ${openDesktopDropdown === 'who' ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className="dropdown-content" onClick={closeDesktopDropdowns}>
                                <Link href="/faith-communities" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Faith Communities</Link>
                                <Link href="/schools-youth" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Schools &amp; Youth</Link>
                                <Link href="/animal-rescues" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Animal Rescues</Link>
                                <Link href="/arts-culture" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Arts &amp; Culture</Link>
                                <Link href="/community-groups" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Community Groups</Link>
                                <Link href="/small-nonprofits" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Small Nonprofits</Link>
                                <Link href="/environmental-causes" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Environmental Causes</Link>
                            </div>
                        </div>

                        {/* Payments */}
                        <div
                            className={`dropdown ${openDesktopDropdown === 'payments' ? 'open' : ''}`}
                            onMouseEnter={() => handleMouseEnter('payments')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="nav-link flex items-center gap-1.5 focus:outline-none" aria-label="Open Payments Menu">
                                Payments <i className={`fas fa-chevron-down text-xs mt-0.5 transition-transform duration-300 ${openDesktopDropdown === 'payments' ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className="dropdown-content" onClick={closeDesktopDropdowns}>
                                <Link href="/payments" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Payments</Link>
                                <Link href="/switching-to-helpone-payments" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Switching to HelpOne Payments</Link>
                            </div>
                        </div>

                        <Link href="/pricing/" className="nav-link">Pricing</Link>

                        {/* Company */}
                        <div
                            className={`dropdown ${openDesktopDropdown === 'company' ? 'open' : ''}`}
                            onMouseEnter={() => handleMouseEnter('company')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="nav-link flex items-center gap-1.5 focus:outline-none" aria-label="Open Company Menu">
                                Company <i className={`fas fa-chevron-down text-xs mt-0.5 transition-transform duration-300 ${openDesktopDropdown === 'company' ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className="dropdown-content" onClick={closeDesktopDropdowns}>
                                <Link href="/faq" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">FAQs</Link>
                                <Link href="/about-us" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">About Us</Link>
                                <Link href="/partners" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Partners</Link>

                                <Link href="/security" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Security</Link>
                                <Link href="/terms-and-conditions" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Terms & Conditions</Link>
                                <Link href="/privacy-policy" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Privacy Policy</Link>
                                <Link data-aos="fade-up" href="/contact-us" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#00E6C3] transition-colors">Contact Us</Link>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={showDemoModal}
                            className="p-4 text-sm font-semibold border border-white/30 hover:border-white rounded-xl transition-all text-white"
                        >
                            Watch 2-min video
                        </button>
                        <Link
                            href="/contact-us"
                            className="p-4 text-sm bg-[#00E6C3] hover:bg-[#00E6C3]/90 text-[#0A1428] font-semibold rounded-xl flex items-center gap-2 transition-all [text-decoration:none]"
                        >
                            <i className="fas fa-calendar"></i> Book Free Demo
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        id="hamburger"
                        className="md:hidden text-3xl p-2 text-white"
                        onClick={openMobileMenu}
                        aria-label="Open menu"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                {/* ── Mobile Menu Panel ── */}
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                            onClick={closeMobileMenu}
                        />
                        {/* Drawer */}
                        <div className="fixed top-0 left-0 right-0 z-50 bg-[#0A1428] border-b border-white/10 max-h-[90vh] overflow-y-auto shadow-2xl">
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                                <Link href="/" onClick={closeMobileMenu}>
                                    <Image src="/assets/Logo-06.png" alt="HelpOne" width={120} height={48} className="h-10 w-auto object-contain" />
                                </Link>
                                <button onClick={closeMobileMenu} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white text-xl" aria-label="Close menu">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>

                            {/* Links */}
                            <div className="px-6 py-4 flex flex-col gap-1 text-white text-base">

                                {/* Platform */}
                                <button
                                    onClick={() => toggleMobileDropdown('platform')}
                                    className="flex items-center justify-between w-full py-3 font-semibold text-[#00E6C3]"
                                >
                                    Platform
                                    <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${openDropdowns['platform'] ? 'rotate-180' : ''}`}></i>
                                </button>
                                {openDropdowns['platform'] && (
                                    <div className="flex flex-col gap-1 pl-3 mb-2 border-l-2 border-[#00E6C3]/30">
                                        <Link href="/volunteer-management" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Volunteer Management</Link>
                                        <Link href="/event-management" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Event Management</Link>
                                        <Link href="/fundraising" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Fundraising</Link>
                                        <Link href="/participants" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Participants</Link>
                                        <Link href="/donors-and-contacts" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Donors &amp; Contacts</Link>
                                        <Link href="/finances" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Finances</Link>
                                        <Link href="/hr-solutions" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">HR Solutions</Link>
                                        <Link href="/policies-and-procedures" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Policies &amp; Procedures</Link>
                                        <Link href="/training-tracking" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Training Tracking</Link>
                                        <Link href="/it-asset-tracking-management" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">IT Asset Tracking</Link>
                                        <Link href="/my-helpone" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">My HelpOne</Link>
                                        <Link href="/getting-started" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Getting Started</Link>
                                    </div>
                                )}

                                {/* Who It's For */}
                                <button
                                    onClick={() => toggleMobileDropdown('who')}
                                    className="flex items-center justify-between w-full py-3 font-semibold text-[#00E6C3] border-t border-white/10"
                                >
                                    Who It&apos;s For
                                    <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${openDropdowns['who'] ? 'rotate-180' : ''}`}></i>
                                </button>
                                {openDropdowns['who'] && (
                                    <div className="flex flex-col gap-1 pl-3 mb-2 border-l-2 border-[#00E6C3]/30">
                                        <Link href="/faith-communities" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Faith Communities</Link>
                                        <Link href="/schools-youth" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Schools &amp; Youth</Link>
                                        <Link href="/animal-rescues" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Animal Rescues</Link>
                                        <Link href="/arts-culture" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Arts &amp; Culture</Link>
                                        <Link href="/community-groups" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Community Groups</Link>
                                        <Link href="/small-nonprofits" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Small Nonprofits</Link>
                                        <Link href="/environmental-causes" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Environmental Causes</Link>
                                    </div>
                                )}


                                {/* Payments */}
                                <button
                                    onClick={() => toggleMobileDropdown('payments')}
                                    className="flex items-center justify-between w-full py-3 font-semibold text-[#00E6C3] border-t border-white/10"
                                >
                                    Payments
                                    <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${openDropdowns['payments'] ? 'rotate-180' : ''}`}></i>
                                </button>
                                {openDropdowns['payments'] && (
                                    <div className="flex flex-col gap-1 pl-3 mb-2 border-l-2 border-[#00E6C3]/30">
                                        <Link href="/payments" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Payments</Link>
                                        <Link href="/switching-to-helpone-payments" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Switching to HelpOne Payments</Link>
                                    </div>
                                )}

                                {/* Pricing */}
                                <Link href="/pricing/" onClick={closeMobileMenu} className="py-3 font-semibold text-[#00E6C3]  border-t border-white/10 hover:text-[#00E6C3] transition-colors">
                                    Pricing
                                </Link>

                                {/* Company */}
                                <button
                                    onClick={() => toggleMobileDropdown('company')}
                                    className="flex items-center justify-between w-full py-3 font-semibold text-[#00E6C3] border-t border-white/10"
                                >
                                    Company
                                    <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${openDropdowns['company'] ? 'rotate-180' : ''}`}></i>
                                </button>
                                {openDropdowns['company'] && (
                                    <div className="flex flex-col gap-1 pl-3 mb-2 border-l-2 border-[#00E6C3]/30">
                                        <Link href="/faq" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">FAQs</Link>
                                        <Link href="/about-us" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">About Us</Link>
                                        <Link href="/partners" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Partners</Link>

                                        <Link href="/security" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Security</Link>
                                        <Link href="/terms-and-conditions" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Terms & Conditions</Link>
                                        <Link href="/privacy-policy" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Privacy Policy</Link>
                                        <Link href="/contact-us" onClick={closeMobileMenu} className="py-2 text-white/80 hover:text-[#00E6C3]">Contact Us</Link>
                                    </div>
                                )}
                            </div>

                            {/* CTA */}
                            <div className="px-6 pb-8 pt-2 border-t border-white/10 flex flex-col gap-3">
                                <button
                                    onClick={() => { showDemoModal(); closeMobileMenu(); }}
                                    className="w-full py-4 border border-white/30 text-white font-semibold rounded-2xl text-sm hover:border-white transition-all"
                                >
                                    <i className="fas fa-play mr-2"></i> Watch 2-min Video
                                </button>
                                <Link
                                    href="/contact-us"
                                    onClick={closeMobileMenu}
                                    className="w-full py-4 bg-[#00E6C3] text-[#0A1428] font-semibold rounded-2xl text-sm text-center [text-decoration:none] hover:bg-[#00E6C3]/90 transition-all"
                                >
                                    <i className="fas fa-calendar mr-2"></i> Book Free Demo
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </nav>
            {/* YouTube Video Modal */}
            {videoOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm"
                    onClick={closeVideoModal}
                >
                    <div
                        className="relative w-full max-w-4xl mx-4 aspect-video rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeVideoModal}
                            className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center bg-black/60 hover:bg-black rounded-full text-white text-lg transition-all"
                            aria-label="Close video"
                        >
                            <i className="fas fa-times"></i>
                        </button>

                        {videoPlaying ? (
                            /* Iframe – only loads after click */
                            <iframe
                                src="https://www.youtube.com/embed/3WDJsZBQXn0?autoplay=1&rel=0"
                                title="HelpOne 2-minute Demo"
                                className="w-full h-full"
                                allow="autoplay; encrypted-media; fullscreen"
                                allowFullScreen
                            />
                        ) : (
                            /* Thumbnail + play button */
                            <div className="relative w-full h-full cursor-pointer group" onClick={() => setVideoPlaying(true)}>
                                <img data-aos="zoom-in"
                                    src="/assets/thumbnail.png"
                                    alt="Watch HelpOne 2-min Demo"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fall back to YouTube auto-thumbnail if local file not found
                                        e.target.src = 'https://img.youtube.com/vi/3WDJsZBQXn0/maxresdefault.jpg';
                                    }}
                                />
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                                {/* Play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-[#00E6C3] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
                                        <i className="fas fa-play text-[#0A1428] text-2xl ml-1"></i>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
