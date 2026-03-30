const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) {
            processDir(p);
        } else if (p.endsWith('.jsx')) {
            let content = fs.readFileSync(p, 'utf8');
            let originalContent = content;

            // Don't touch FAQ page since it passes a search bar
            if (p.includes('faq\\page.jsx') || p.includes('faq/page.jsx')) {
                continue;
            }

            // Match <Hero ...> ... </Hero>
            const regex = /<Hero([\s\S]*?)>([\s\S]*?)<\/Hero>/g;
            content = content.replace(regex, (match, props, children) => {
                let p1 = props;
                let primaryText = '';
                let secondaryText = '';
                let secondaryLink = '';

                if (children.includes('Claim $499/mo Founders Rate')) {
                    primaryText = ' primaryCtaText="Claim $499/mo Founders Rate" primaryCtaLink="/pricing"';
                    secondaryText = ' secondaryCtaText="Schedule Free Demo" secondaryCtaLink="/contact-us"';
                } else if (children.includes('Become a Partner')) {
                    primaryText = ' primaryCtaText="Become a Partner" primaryCtaLink="/contact-us"';
                    secondaryText = ' secondaryCtaText="Schedule Partnership Call" secondaryCtaLink="/contact-us"';
                } else if (children.includes('Schedule Your Onboarding Call')) {
                    primaryText = ' primaryCtaText="Schedule Your Onboarding Call" primaryCtaLink="/contact-us"';
                    secondaryText = ' secondaryCtaText="See the 3 Steps" secondaryCtaLink="/getting-started#steps"';
                } else if (children.includes('See Pricing')) {
                    primaryText = ' primaryCtaText="Schedule Free Demo" primaryCtaLink="/contact-us"';
                    secondaryText = ' secondaryCtaText="See Pricing" secondaryCtaLink="/pricing"';
                } else if (children.includes('View Certifications')) {
                    primaryText = ' primaryCtaText="Schedule Free Demo" primaryCtaLink="/contact-us"';
                    secondaryText = ' secondaryCtaText="View Certifications" secondaryCtaLink="#certifications"';
                }

                // Remove the trailing slash if p1 had it, though regex <Hero([\s\S]*?)> assumes no trailing slash
                // If the user already had props, just append
                return `<Hero${p1}${primaryText}${secondaryText} />`;
            });

            // Remove CTA button imports
            content = content.replace(/import { BookDemoButton, ClaimFoundersButton.*} from '..\/components\/CtaButtons';\n/g, '');
            content = content.replace(/import { BookDemoButton } from '..\/components\/CtaButtons';\n/g, '');
            content = content.replace(/import { ClaimFoundersButton } from '..\/components\/CtaButtons';\n/g, '');

            // Also might be ../../components/CtaButtons
            content = content.replace(/import { BookDemoButton, ClaimFoundersButton.*} from '..\/..\/components\/CtaButtons';\n/g, '');
            content = content.replace(/import { BookDemoButton } from '..\/..\/components\/CtaButtons';\n/g, '');
            content = content.replace(/import { ClaimFoundersButton } from '..\/..\/components\/CtaButtons';\n/g, '');

            if (content !== originalContent) {
                fs.writeFileSync(p, content);
                console.log('Updated ' + p);
            }
        }
    }
}

processDir(path.join(process.cwd(), 'app'));
console.log('Done');
