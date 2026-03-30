import React from 'react';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import TrainingTrackingFeatures from '../../components/TrainingTrackingFeatures';
import TrainingTrackingCoreFeaturesGrid from '../../components/TrainingTrackingCoreFeaturesGrid';
import WhoItsForRow from '../../components/WhoItsForRow';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import FoundersProgramCta from '../../components/FoundersProgramCta';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
    title: 'Training Tracking | HelpOne Software',
    description: 'Centralized dashboard with real-time status charts and deadlines. Unlimited trainings & participants. Easy creation and assignment from any source (internal/external). Automated reminders, progress tracking, and completion certificates. All in one beautiful platform built exclusively for nonprofits.',
};

export default function TrainingTrackingPage() {
    return (
        <main className="min-h-screen">
            <Hero
                badge="Training Tracking • Part of the HelpOne OS"
                title="Training Tracking,"
                titleAccent="Rebuilt for Impact."
                subtitle="Centralized dashboard with real-time status charts and deadlines. Unlimited trainings & participants. Easy creation and assignment from any source (internal/external). Automated reminders, progress tracking, and completion certificates. All in one beautiful platform built exclusively for nonprofits."
             />

            <TrustBar
                items={[
                    "SOC 2 • PCI Level 1",
                    "AES-256 • GDPR",
                    "Built exclusively for nonprofits",
                    "30+ years nonprofit workflow expertise"
                ]}
            />

            <TrainingTrackingFeatures />

            <TrainingTrackingCoreFeaturesGrid />

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
                title="Ready to know every participant deeply?"
                subtitle="Let's turn one-time donors into lifelong supporters."
            />
        </main>
    );
}
