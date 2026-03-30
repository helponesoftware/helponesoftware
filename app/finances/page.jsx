import React from 'react';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import FinanceFeatures from '../../components/FinanceFeatures';
import FinanceCoreFeaturesGrid from '../../components/FinanceCoreFeaturesGrid';
import WhoItsForRow from '../../components/WhoItsForRow';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import FoundersProgramCta from '../../components/FoundersProgramCta';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
    title: 'Nonprofit Finances | HelpOne Software',
    description: 'Nonprofit-specific chart of accounts, real-time P&L, auto 990/CHAR500, restricted funds tracking. GAAP/FASB compliant.',
};

export default function FinancesPage() {
    return (
        <main className="min-h-screen">
            <Hero
                badge="Finances • Part of the HelpOne OS"
                title="Nonprofit Finances,"
                titleAccent="Rebuilt for Clarity."
                subtitle="Nonprofit-specific chart of accounts. Real-time P&L. Auto 990/CHAR500. Restricted funds tracking. Unlimited transactions, deep integrations, GAAP/FASB compliant — all in one breathtaking platform."
             />

            <TrustBar
                items={[
                    "SOC 2 • PCI Level 1",
                    "AES-256 • GDPR",
                    "Built exclusively for nonprofits",
                    "30+ years nonprofit workflow expertise"
                ]}
            />

            <FinanceFeatures />

            <FinanceCoreFeaturesGrid />

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
                title="Ready for crystal-clear nonprofit finances?"
                subtitle="Let's make financial management effortless."
            />
        </main>
    );
}
