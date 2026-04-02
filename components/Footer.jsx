'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black py-20">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="grid md:grid-cols-5 gap-12">
                    <div data-aos="fade-up">
                        <div className="flex items-center mb-6 -m-5">
                            <Link href="/">
                                <Image
                                    src="/assets/Logo-06.png"
                                    alt="HelpOne Logo"
                                    width={160}
                                    height={64}
                                    className="h-20 w-auto object-contain"
                                />
                            </Link>
                        </div>
                        <p className="text-white/60 text-sm">The operating system for world-changing nonprofits.</p>
                        <div className="mt-8 text-xs text-white/40">© 2026 HelpOne Software, Inc.</div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="100">
                        <div className="font-medium mb-6 text-[#00E6C3]">Platform</div>
                        <div className="space-y-3 text-sm text-white/70">
                            <Link href="/volunteer-management" className="block hover:text-white">Volunteer Management</Link>
                            <Link href="/event-management" className="block hover:text-white">Event Management</Link>
                            <Link href="/fundraising" className="block hover:text-white">Fundraising</Link>
                            <Link href="/participants" className="block hover:text-white">Participants</Link>
                            <Link href="/donors-and-contacts" className="block hover:text-white">Donors &amp; Contacts</Link>
                            <Link href="/finances" className="block hover:text-white">Finances</Link>
                            <Link href="/hr-solutions" className="block hover:text-white">HR Solutions</Link>
                            <Link href="/policies-and-procedures" className="block hover:text-white">Policies &amp; Procedures</Link>
                            <Link href="/training-tracking" className="block hover:text-white">Training Tracking</Link>
                            <Link href="/it-asset-tracking-management" className="block hover:text-white">IT Asset Tracking</Link>
                            <Link href="/payments" className="block hover:text-white">Payments</Link>
                            <Link href="/switching-to-helpone-payments" className="block hover:text-white">Switching to HelpOne Payments</Link>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200">
                        <div className="font-medium mb-6 text-[#00E6C3]">Who It&apos;s For</div>
                        <div className="space-y-3 text-sm text-white/70">
                            <Link href="/faith-communities" className="block hover:text-white">Faith Communities</Link>
                            <Link href="/schools-youth" className="block hover:text-white">Schools &amp; Youth</Link>
                            <Link href="/animal-rescues" className="block hover:text-white">Animal Rescues</Link>
                            <Link href="/arts-culture" className="block hover:text-white">Arts &amp; Culture</Link>
                            <Link href="/community-groups" className="block hover:text-white">Community Groups</Link>
                            <Link href="/small-nonprofits" className="block hover:text-white">Small Nonprofits</Link>
                            <Link href="/environmental-causes" className="block hover:text-white">Environmental Causes</Link>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300">
                        <div className="font-medium mb-6 text-[#00E6C3]">Company</div>
                        <div className="space-y-3 text-sm text-white/70">
                            <Link href="/faq" className="block hover:text-white">FAQs</Link>
                            <Link href="/about-us" className="block hover:text-white">About Us</Link>
                            <Link href="/partners" className="block hover:text-white">Partners</Link>
                            <Link href="/security" className="block hover:text-white">Security</Link>
                            <Link href="/terms-and-conditions" className="block hover:text-white">Terms &amp; Conditions</Link>
                            <Link href="/privacy-policy" className="block hover:text-white">Privacy Policy</Link>
                            <Link href="/contact-us" className="block hover:text-white">Contact Us</Link>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400">
                        <div className="font-medium mb-6 text-[#00E6C3]">Get in touch</div>
                        <a href="mailto:hello@helponesoftware.com" className="text-sm text-white/70 hover:text-[#00E6C3] transition-colors mb-6 block [text-decoration:none]">hello@helponesoftware.com</a>
                        <Link
                            href="/contact-us"
                            className="block w-full py-4 text-center border border-white/30 hover:bg-white/10 rounded-2xl text-sm font-medium text-white transition-colors [text-decoration:none]"
                        >
                            Book a Free Demo
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
