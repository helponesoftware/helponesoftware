import React from 'react';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import HrSolutionsFeatures from '../../components/HrSolutionsFeatures';
import HrSolutionsCoreFeaturesGrid from '../../components/HrSolutionsCoreFeaturesGrid';
import WhoItsForRow from '../../components/WhoItsForRow';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import FoundersProgramCta from '../../components/FoundersProgramCta';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
    title: 'Nonprofit HR Solutions | HelpOne Software',
    description: 'Onboarding, performance reviews, training, policies, time-off, compensation, vacancies — unlimited staff and volunteers in one intuitive platform.',
};

export default function HrSolutionsPage() {
    return (
        <main className="min-h-screen">
            <Hero
                badge="HR Solutions • Part of the HelpOne OS"
                title="Nonprofit HR,"
                titleAccent="Rebuilt for Impact."
                subtitle="Onboarding, performance reviews, training, policies, time-off, compensation, vacancies — unlimited staff and volunteers in one intuitive platform. Volunteer-staff unity, auto Form 990 compliance, mission-aligned."
             />

            <TrustBar
                items={[
                    "SOC 2 • PCI Level 1",
                    "AES-256 • GDPR",
                    "Built exclusively for nonprofits",
                    "30+ years nonprofit workflow expertise"
                ]}
            />

            <HrSolutionsFeatures />

            <HrSolutionsCoreFeaturesGrid />

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
                title="Ready to know every donor deeply?"
                subtitle="Let's turn one-time givers into lifelong supporters."
            />
        </main>
    );
}
