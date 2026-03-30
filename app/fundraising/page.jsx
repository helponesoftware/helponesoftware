import React from 'react';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import FundraisingFeatures from '../../components/FundraisingFeatures';
import FundraisingCoreFeaturesGrid from '../../components/FundraisingCoreFeaturesGrid';
import WhoItsForRow from '../../components/WhoItsForRow';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import FoundersProgramCta from '../../components/FoundersProgramCta';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
    title: 'Nonprofit Fundraising | HelpOne Software',
    description: 'Auctions, sponsorships, donations, pledges, contests, expenses — all unlimited in one beautiful platform.',
};

export default function FundraisingPage() {
    return (
        <main className="min-h-screen">
            <Hero
                badge="Fundraising • Part of the HelpOne OS"
                title="Fundraising,"
                titleAccent="Rebuilt for Impact."
                subtitle="Auctions, sponsorships, donations, pledges, contests, expenses — all unlimited in one beautiful platform. Real-time P&L, auto volunteer hour valuation for 990, deep integrations."
             />

            <TrustBar
                items={[
                    "SOC 2 • PCI Level 1",
                    "AES-256 • GDPR",
                    "Built exclusively for nonprofits",
                    "30+ years nonprofit workflow expertise"
                ]}
            />

            <FundraisingFeatures />

            <FundraisingCoreFeaturesGrid />

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
                title="Ready to raise more with less effort?"
                subtitle="Let's make fundraising seamless and unlimited."
            />
        </main>
    );
}
