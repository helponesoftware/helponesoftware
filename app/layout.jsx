import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AosInit from '../components/AosInit';
import Script from 'next/script';

const siteUrl = 'https://helponesoftware.com';

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'HelpOne – One Platform. Unlimited Missions.',
        template: '%s | HelpOne',
    },
    description: 'Manage donors, volunteers, fundraising, events, finances, and more – without juggling multiple tools, paying per user, or dealing with hidden fees.',
    keywords: [
        'nonprofit software', 'volunteer management', 'nonprofit OS', 'fundraising software',
        'nonprofit platform', 'donor management', 'event management nonprofits',
        'nonprofit HR', 'nonprofit finances', 'helponesoftware',
    ],
    authors: [{ name: 'HelpOne Software', url: siteUrl }],
    creator: 'HelpOne Software',
    publisher: 'HelpOne Software',
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName: 'HelpOne',
        title: 'HelpOne – One Platform. Unlimited Missions.',
        description: 'Manage donors, volunteers, fundraising, events, finances, and more – without juggling multiple tools, paying per user, or dealing with hidden fees.',
        images: [{ url: '/assets/Logo-06.png', width: 2383, height: 872, alt: 'HelpOne – One Platform. Unlimited Missions.' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@helponesoftware',
        creator: '@helponesoftware',
        title: 'HelpOne – One Platform. Unlimited Missions.',
        description: 'Manage donors, volunteers, fundraising, events, finances, and more – without juggling multiple tools, paying per user, or dealing with hidden fees.',
        images: ['/assets/Logo-06.png'],
    },
    alternates: {
        canonical: siteUrl,
    },
    category: 'technology',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HelpOne Software',
    url: siteUrl,
    logo: `${siteUrl}/assets/Logo-06.png`,
    sameAs: [],
    contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@helponesoftware.com',
        contactType: 'customer support',
    },
    description: 'All-in-one nonprofit operating system with volunteer management, fundraising, events, donors, HR, and finances.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
                <meta name="theme-color" content="#0A1428" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-JGSKFEED8X"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-JGSKFEED8X');
                    `}
                </Script>
                <Script
                    strategy="afterInteractive"
                    src="https://t.contentsquare.net/uxa/0c2435c647552.js"
                />
                <AosInit />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
