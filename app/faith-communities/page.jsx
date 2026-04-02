import Hero from '../../components/Hero';
import { BookDemoButton } from '../../components/CtaButtons';
import TrustBar from '../../components/TrustBar';
import FaithFeatures from '../../components/FaithFeatures';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import CtaBanner from '../../components/CtaBanner';
import Link from 'next/link';

export const metadata = {
    title: 'Faith Communities | HelpOne Software',
    description: 'The all-in-one platform built for churches, ministries, and faith-based organizations.',
};

const trustItems = [
    'Flat $1.75/tx giving',
    'Unlimited volunteers & members',
    'Small group tools',
    'Built for the Church'
];

export default function FaithCommunitiesPage() {
    return (
        <main className="min-h-screen bg-[#0A1428]">
            {/* HERO SECTION */}
            <Hero
                badge="Who It's For • Faith Communities"
                title="Faith Communities."
                titleAccent="Equipping the Saints, One Platform at a Time."
                subtitle="The all-in-one platform built for churches, ministries, and faith-based organizations. Unlimited volunteer coordination, online giving, worship events, small groups, and member care – so you can focus on discipleship and kingdom impact."
             primaryCtaText="Schedule Free Demo" primaryCtaLink="/contact-us" secondaryCtaText="See Pricing" secondaryCtaLink="/pricing" />

            {/* TRUST BAR */}
            <TrustBar items={trustItems} />

            {/* FAITH FEATURES */}
            <FaithFeatures />

            {/* 9 MODULES */}
            <ModulesGrid />

            {/* FUTURE-PROOF */}
            <FutureProof />

            {/* FINAL CTA BANNER */}
            <CtaBanner
                title="Ready to equip your church?"
                subtitle="HelpOne is designed to serve the body of Christ. Let's get your ministry started today."
                buttonText="Schedule Your Free Demo"
                buttonClassName="!bg-[#0A1428] !text-white hover:!bg-[#1a2640]"
            />
        </main>
    );
}
