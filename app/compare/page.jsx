import React from 'react';
import Hero from '../../components/Hero';
import CompareCostTable from '../../components/CompareCostTable';
import CompareFeatureMatrix from '../../components/CompareFeatureMatrix';
import CompareToolSprawl from '../../components/CompareToolSprawl';
import CompareWhySwitch from '../../components/CompareWhySwitch';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
    title: 'HelpOne vs Competitors – DonorDock, Bloomerang, LGL, Salesforce & More',
    description:
        'See why nonprofits are switching from DonorDock, Bloomerang, Little Green Light, Salesforce Nonprofit Cloud, VolunteerHub, and WildApricot to HelpOne — the all-in-one platform with transparent pricing, free migration, and zero tool sprawl.',
    keywords: [
        'HelpOne vs DonorDock', 'HelpOne vs Bloomerang', 'Little Green Light alternative',
        'Salesforce Nonprofit Cloud alternative', 'VolunteerHub alternative', 'WildApricot alternative',
        'nonprofit software comparison', 'best nonprofit CRM',
    ],
    alternates: {
        canonical: 'https://helponesoftware.com/compare/',
    },
    openGraph: {
        title: 'HelpOne vs Competitors – Nonprofit Software Comparison | HelpOne',
        description:
            'DonorDock, Bloomerang, Little Green Light, Salesforce, VolunteerHub, and WildApricot each solve part of the puzzle. HelpOne solves the whole thing.',
        url: 'https://helponesoftware.com/compare/',
        images: [{ url: '/assets/Logo-06.png', alt: 'HelpOne vs Competitors' }],
    },
    twitter: {
        title: 'HelpOne vs Competitors – Nonprofit Software Comparison',
        description: 'One platform instead of five. Transparent pricing, free migration, zero tool sprawl.',
    },
};

export default function ComparePage() {
    return (
        <main className="min-h-screen">
            <Hero
                badge="Compare • Why Switch"
                title="Stop Paying for"
                titleAccent="Fragmented Tools"
                subtitle="DonorDock, Bloomerang, Little Green Light, Salesforce, VolunteerHub, and WildApricot each solve part of the puzzle. HelpOne solves the whole thing — at a fraction of the total cost and complexity."
                primaryCtaText="Book Free Demo"
                primaryCtaLink="/contact-us"
                secondaryCtaText="See the Full Comparison"
                secondaryCtaLink="/compare#comparison"
            />

            <CompareCostTable />
            <CompareFeatureMatrix />
            <CompareToolSprawl />
            <CompareWhySwitch />

            <CtaBanner
                title="Ready to Simplify?"
                subtitle="Stop paying for five tools that only half-work together. Join the Founders Program and get the full platform, free migration, and a dedicated specialist."
                buttonText="Book Your Free Demo"
            />
        </main>
    );
}
