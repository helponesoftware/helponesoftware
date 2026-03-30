export const dynamic = 'force-static';

export default function sitemap() {
    const baseUrl = 'https://helponesoftware.com';

    // List of static routes built from app directory analysis
    const routes = [
        '',
        '/about-us',
        '/affiliate',
        '/animal-rescues',
        '/arts-culture',
        '/community-groups',
        '/contact-us',
        '/donors-and-contacts',
        '/environmental-causes',
        '/event-management',
        '/faith-communities',
        '/faq',
        '/finances',
        '/fundraising',
        '/getting-started',
        '/hr-solutions',
        '/it-asset-tracking-management',
        '/my-helpone',
        '/participants',
        '/partners',
        '/payments',
        '/policies-and-procedures',
        '/pricing',
        '/privacy-policy',
        '/schools-youth',
        '/security',
        '/small-nonprofits',
        '/switching-to-helpone-payments',
        '/terms-and-conditions',
        '/training-tracking',
        '/volunteer-management'
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
