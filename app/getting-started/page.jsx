import React from 'react';
import Hero from '../../components/Hero';
import GettingStartedTimeline from '../../components/GettingStartedTimeline';
import GettingStartedStepsGrid from '../../components/GettingStartedStepsGrid';
import GettingStartedFaq from '../../components/GettingStartedFaq';
import GettingStartedWhyLove from '../../components/GettingStartedWhyLove';
import GettingStartedSecurity from '../../components/GettingStartedSecurity';
import CtaBanner from '../../components/CtaBanner';
import GettingStartedHeroButtons from '../../components/GettingStartedHeroButtons';

export const metadata = {
    title: 'Getting Started, Migration & Onboarding',
    description:
        'See exactly how easy it is to switch to HelpOne. Free data migration, white-glove onboarding, and dedicated support so your team is up and running in weeks — not months.',
    keywords: [
        'nonprofit software migration', 'HelpOne onboarding', 'switch nonprofit CRM',
        'free data migration nonprofit', 'nonprofit software implementation',
    ],
    alternates: {
        canonical: 'https://helponesoftware.com/getting-started/',
    },
    openGraph: {
        title: 'Getting Started, Migration & Onboarding | HelpOne',
        description:
            'Free data migration, white-glove onboarding, and a dedicated specialist. Most organizations are fully up and running within 2–4 weeks.',
        url: 'https://helponesoftware.com/getting-started/',
        images: [{ url: '/assets/Logo-06.png', alt: 'Getting Started with HelpOne' }],
    },
    twitter: {
        title: 'Getting Started, Migration & Onboarding | HelpOne',
        description: 'Free migration, hands-on training, and a dedicated specialist. Up and running in 2–4 weeks.',
    },
};

export default function GettingStartedPage() {
    return (
        <main className="min-h-screen">
            <Hero
                badge="Getting Started • Migration & Onboarding"
                title="Getting Started"
                titleAccent="with HelpOne"
                subtitle="A smooth, guided transition designed for nonprofits — with free migration, hands-on training, and a dedicated specialist by your side. Most organizations are fully up and running within 2–4 weeks."
            >
                <GettingStartedHeroButtons />
            </Hero>

            <GettingStartedTimeline />
            <GettingStartedStepsGrid />
            <GettingStartedFaq />
            <GettingStartedWhyLove />
            <GettingStartedSecurity />

            <CtaBanner
                title="Ready to Make the Switch?"
                subtitle="Join the Founders Program and get free migration, white-glove onboarding, and a dedicated specialist — so your team can focus on the mission instead of the tools."
                buttonText="Book Your Free Demo"
            />
        </main>
    );
}
