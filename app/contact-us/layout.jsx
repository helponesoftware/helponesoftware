// This server layout provides metadata for the 'use client' contact-us page
export const metadata = {
    title: 'Contact Us – Book a Free Demo or Get in Touch',
    description: 'Contact HelpOne to book a free demo, claim your Founders Rate, or ask about pricing. We help nonprofits streamline operations with our all-in-one software platform.',
    keywords: ['contact helpone', 'book nonprofit software demo', 'nonprofit software inquiry', 'helpone demo', 'nonprofit platform demo'],
    alternates: {
        canonical: 'https://helponesoftware.com/contact-us/',
    },
    openGraph: {
        title: 'Contact HelpOne – Book a Free Demo',
        description: 'Book a free demo, claim the Founders Rate, or ask about pricing. Let your nonprofit\'s mission shine with HelpOne.',
        url: 'https://helponesoftware.com/contact-us/',
        images: [{ url: '/assets/Logo-06.png', alt: 'Contact HelpOne' }],
    },
    twitter: {
        title: 'Contact HelpOne – Book a Free Demo',
        description: 'Book a free demo or ask about pricing. Let your nonprofit\'s mission shine.',
    },
};

export default function ContactLayout({ children }) {
    return children;
}
