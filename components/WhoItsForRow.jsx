import React from 'react';
import Link from 'next/link';

export default function WhoItsForRow({
    title = "Who It's For",
    items = []
}) {
    // Helper to generate correct internal routes based on the provided label string
    const getRoute = (itemName) => {
        const routeMap = {
            'Faith Communities': '/faith-communities',
            'Schools & Youth Groups': '/schools-youth',
            'Animal Rescues': '/animal-rescues',
            'Arts & Culture Organizations': '/arts-culture',
            'Arts & Culture': '/arts-culture',
            'Community Groups': '/community-groups',
            'Environmental Causes': '/environmental-causes',
            'Small Nonprofits': '/small-nonprofits',
        };

        if (routeMap[itemName]) {
            return routeMap[itemName];
        }

        // Fallback generic formatter
        return '/' + itemName.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
    };

    return (
        <section className="py-24 bg-[#0A1428] text-white border-t border-b border-white/5">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                <h2 data-aos="fade-up" className="heading-font text-5xl font-bold tracking-tight text-center mb-16">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Tags */}
                    {items.map((item) => (
                        <Link
                            key={item}
                            href={getRoute(item)}
                            className="bg-[#121c32] hover:bg-[#1a2640] rounded-2xl p-6 transition-colors flex items-center justify-center text-center cursor-pointer min-h-[100px]"
                        >
                            <span className="text-white font-medium">{item}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
