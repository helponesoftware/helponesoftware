import React from 'react';
import Hero from '../../components/Hero';
import GettingStartedTimeline from '../../components/GettingStartedTimeline';
import GettingStartedStepsGrid from '../../components/GettingStartedStepsGrid';
import GettingStartedWhyLove from '../../components/GettingStartedWhyLove';
import GettingStartedSecurity from '../../components/GettingStartedSecurity';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
    title: 'Getting Started | HelpOne Software',
    description: 'Your 3-Step Transition to HelpOne. Simple, guided, and designed for immediate impact.',
};

export default function GettingStartedPage() {
    return (
        <main className="min-h-screen">
            <Hero
                title="Welcome to HelpOne."
                titleAccent="Your Mission Starts Here."
                subtitle="From day one you'll land in My HelpOne – your personalized portal that greets you by name and shows exactly what needs your attention today. Zero disruption. First-week wins."
             primaryCtaText="Schedule Your Onboarding Call" primaryCtaLink="/contact-us" secondaryCtaText="See the 3 Steps" secondaryCtaLink="/getting-started#steps" />

            <GettingStartedTimeline />
            <GettingStartedStepsGrid />
            <GettingStartedWhyLove />
            <GettingStartedSecurity />

            <CtaBanner
                title="Ready to get started?"
                subtitle="Your mission deserves a better platform. Let's make the switch simple and joyful."
                buttonText="Schedule Your Free Onboarding Call"
            />
        </main>
    );
}
