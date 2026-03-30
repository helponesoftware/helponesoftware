import React from 'react';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import VolunteerFeatures from '../../components/VolunteerFeatures';
import CoreFeaturesGrid from '../../components/CoreFeaturesGrid';
import WhoItsForRow from '../../components/WhoItsForRow';
import FutureProof from '../../components/FutureProof';
import FoundersProgramCta from '../../components/FoundersProgramCta';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
    title: 'Volunteer Management | HelpOne Software',
    description: 'Self-service portals, QR magic check-ins, skill matching, and more.',
};

export default function VolunteerManagementPage() {
    return (
        <main className="min-h-screen">
            <Hero
                badge="Volunteer Management • Part of the HelpOne OS"
                title="Volunteer Management,"
                titleAccent="Rebuilt for Impact."
                subtitle="Self-service portals. QR magic check-ins. Skill matching. Hours that auto-value at $33.49/hr for your 990. All inside the most beautiful nonprofit platform ever built."
             />

            <TrustBar
                items={[
                    "SOC 2 • PCI Level 1",
                    "AES-256 • GDPR",
                    "Built exclusively for nonprofits",
                    "30+ years nonprofit workflow expertise"
                ]}
            />

            <VolunteerFeatures />

            <CoreFeaturesGrid />

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
                subtitle="Let's make volunteer management effortless."
            />
        </main>
    );
}
