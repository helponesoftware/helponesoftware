import React from 'react';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import PoliciesProceduresFeatures from '../../components/PoliciesProceduresFeatures';
import PoliciesProceduresCoreFeaturesGrid from '../../components/PoliciesProceduresCoreFeaturesGrid';
import WhoItsForRow from '../../components/WhoItsForRow';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import FoundersProgramCta from '../../components/FoundersProgramCta';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
    title: 'Policies & Procedures | HelpOne Software',
    description: 'Living books. Unlimited chapters. Smart approvals. Automated notifications. Professional PDF export. All in one beautiful, audit-ready platform built exclusively for nonprofits.',
};

export default function PoliciesProceduresPage() {
    return (
        <main className="min-h-screen">
            <Hero
                badge="Policies & Procedures • Part of the HelpOne OS"
                title="Policies & Procedures,"
                titleAccent="Rebuilt for Impact."
                subtitle="Living books. Unlimited chapters. Smart approvals. Automated notifications. Professional PDF export. All in one beautiful, audit-ready platform built exclusively for nonprofits."
             />

            <TrustBar
                items={[
                    "SOC 2 • PCI Level 1",
                    "AES-256 • GDPR",
                    "Built exclusively for nonprofits",
                    "30+ years nonprofit workflow expertise"
                ]}
            />

            <PoliciesProceduresFeatures />

            <PoliciesProceduresCoreFeaturesGrid />

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
                title="Ready for policies that actually work?"
                subtitle="Let's build a strong, trustworthy foundation."
            />
        </main>
    );
}
