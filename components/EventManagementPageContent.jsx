'use client';

import React, { useState } from 'react';
import Hero from './Hero';
import TrustBar from './TrustBar';
import EventFeatures from './EventFeatures';
import EventCoreFeaturesGrid from './EventCoreFeaturesGrid';
import WhoItsForRow from './WhoItsForRow';
import ModulesGrid from './ModulesGrid';
import FutureProof from './FutureProof';
import FoundersProgramCta from './FoundersProgramCta';
import CtaBanner from './CtaBanner';

export default function EventManagementPageContent() {
    const [videoOpen, setVideoOpen] = useState(false);

    return (
        <main className="min-h-screen">
            <Hero
                badge="Event Management • Part of the HelpOne OS"
                title="Event Management,"
                titleAccent="Rebuilt for Impact."
                subtitle="Unified hub. Dynamic ticketing. Multi-day schedules. Volunteer sync. Real-time fundraising counts & live dashboards. All inside the most beautiful nonprofit platform ever built."
                secondaryCtaText="Watch 60 Second Demo Video"
                onSecondaryCtaClick={() => setVideoOpen(true)}
            />

            <TrustBar
                items={[
                    "SOC 2 • PCI Level 1",
                    "AES-256 • GDPR",
                    "Built exclusively for nonprofits",
                    "30+ years nonprofit workflow expertise"
                ]}
            />

            <EventFeatures />

            <EventCoreFeaturesGrid />

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

            <ModulesGrid />

            <FutureProof />

            <FoundersProgramCta />

            <CtaBanner
                title="Ready to host flawless events that advance your mission?"
                subtitle="Let's make every event unforgettable."
            />

            {/* YOUTUBE DEMO VIDEO MODAL */}
            {videoOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                    onClick={() => setVideoOpen(false)}
                >
                    <div
                        className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setVideoOpen(false)}
                            className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center bg-black/70 hover:bg-black rounded-full text-white text-lg transition-all cursor-pointer"
                            aria-label="Close modal"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        <iframe
                            src="https://www.youtube.com/embed/yQnNMijYgdg?autoplay=1&rel=0"
                            title="HelpOne Event Management: Stop Using 4 Tools for One Event"
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
