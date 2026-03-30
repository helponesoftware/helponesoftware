import React from 'react';
import Hero from '../../components/Hero';
import MyHelpOneCommandCenter from '../../components/MyHelpOneCommandCenter';
import MyHelpOneFeaturesGrid from '../../components/MyHelpOneFeaturesGrid';
import MyHelpOneSecurity from '../../components/MyHelpOneSecurity';
import MyHelpOneCta from '../../components/MyHelpOneCta';

export const metadata = {
    title: 'My HelpOne | HelpOne Software',
    description: 'The beautiful, personalized dashboard built exclusively for nonprofit teams. Action items, time-off, events, calendar, timesheets — all in one intuitive place.',
};

export default function MyHelpOnePage() {
    return (
        <main className="min-h-screen">
            <Hero
                badge="My HelpOne • Your Daily Command Center"
                title="Welcome to My HelpOne."
                titleAccent="Your Mission, Simplified."
                subtitle="The beautiful, personalized dashboard built exclusively for nonprofit teams. Action items, time-off, events, calendar, timesheets — all in one intuitive place."
             />

            <MyHelpOneCommandCenter />
            <MyHelpOneFeaturesGrid />
            <MyHelpOneSecurity />
            <MyHelpOneCta />
        </main>
    );
}
