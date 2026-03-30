import React from 'react';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import EventFeatures from '../../components/EventFeatures';
import EventCoreFeaturesGrid from '../../components/EventCoreFeaturesGrid';
import WhoItsForRow from '../../components/WhoItsForRow';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import FoundersProgramCta from '../../components/FoundersProgramCta';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
    title: 'Event Management | HelpOne Software',
    description: 'Unified hub, dynamic ticketing, multi-day schedules, volunteer sync.',
};

export default function EventManagementPage() {
    return (
        <main className="min-h-screen">
            <Hero
                badge="Event Management • Part of the HelpOne OS"
                title="Event Management,"
                titleAccent="Rebuilt for Impact."
                subtitle="Unified hub. Dynamic ticketing. Multi-day schedules. Volunteer sync. Real-time fundraising counts & live dashboards. All inside the most beautiful nonprofit platform ever built."
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
        </main>
    );
}
