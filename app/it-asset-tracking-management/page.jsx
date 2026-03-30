import React from 'react';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import ItAssetTrackingFeatures from '../../components/ItAssetTrackingFeatures';
import ItAssetTrackingCoreFeaturesGrid from '../../components/ItAssetTrackingCoreFeaturesGrid';
import WhoItsForRow from '../../components/WhoItsForRow';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import FoundersProgramCta from '../../components/FoundersProgramCta';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
    title: 'IT Asset Tracking | HelpOne Software',
    description: 'Centralized dashboard with real-time charts, budget meters, and condition tracking. Unlimited hardware/software inventory, vendor management, license/warranty tracking, user assignments, expiration alerts. All in one beautiful platform built exclusively for nonprofits.',
};

export default function ItAssetTrackingPage() {
    return (
        <main className="min-h-screen">
            <Hero
                badge="IT Asset Tracking • Part of the HelpOne OS"
                title="IT Asset Tracking,"
                titleAccent="Rebuilt for Impact."
                subtitle="Centralized dashboard with real-time charts, budget meters, and condition tracking. Unlimited hardware/software inventory, vendor management, license/warranty tracking, user assignments, expiration alerts. All in one beautiful platform built exclusively for nonprofits."
             />

            <TrustBar
                items={[
                    "SOC 2 • PCI Level 1",
                    "AES-256 • GDPR",
                    "Built exclusively for nonprofits",
                    "30+ years nonprofit workflow expertise"
                ]}
            />

            <ItAssetTrackingFeatures />

            <ItAssetTrackingCoreFeaturesGrid />

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
                title="Ready to simplify your nonprofit IT management?"
                subtitle="Let's cut chaos and gain control."
            />
        </main>
    );
}
