import Hero from "../../components/Hero";
import TrustBar from "../../components/TrustBar";
import ModulesGrid from "../../components/ModulesGrid";
import FutureProof from "../../components/FutureProof";
import CtaBanner from "../../components/CtaBanner";
import DataResponsibility from "../../components/DataResponsibility";
import SecurityCertifications from "../../components/SecurityCertifications";
import Link from 'next/link';
import { BookDemoButton } from "../../components/CtaButtons";

export const metadata = {
    title: 'Enterprise-Grade Security | HelpOne Software',
    description: 'HelpOne secures your nonprofit data with SOC 2 Type II, PCI Level 1, and end-to-end encryption.',
};

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-[#0A1428]">
            {/* HERO */}
            <Hero
                badge="Company &bull; Security"
                title="Your Mission."
                titleAccent="Our Protection."
                subtitle="Enterprise-grade security trusted by nonprofits. SOC 2 Type II, PCI Level 1 certified, end-to-end encryption, and continuous monitoring so you can focus on your cause – not your data."
             primaryCtaText="Schedule Free Demo" primaryCtaLink="/contact-us" />

            {/* TRUST BAR */}
            <TrustBar
                items={[
                    "SOC 2 Type II Certified",
                    "PCI DSS Level 1",
                    "End-to-End Encryption",
                    "99.99% Uptime SLA"
                ]}
            />

            {/* DATA RESPONSIBILITY */}
            <DataResponsibility />

            {/* SECURITY CERTIFICATIONS */}
            <SecurityCertifications />

            {/* MODULES GRID (Optional depending on how much of standard page we want here, but user asked for reusable components) */}
            <ModulesGrid />

            {/* FUTURE PROOF */}
            <FutureProof
                title="Even if you don't need every module today,"
                titleAccent="your data is always protected."
                description="Start with only what you need. Simply hide the rest – they disappear from your dashboard. Security remains active across the entire platform."
            />

            {/* CTA */}
            <CtaBanner
                title="Your data is safe with us."
                subtitle="Ready to build with confidence?"
                buttonText="Schedule Your Free Demo"
                buttonClassName="bg-[#0A1428] text-white hover:bg-[#0A1428]/90"
            />
        </main>
    );
}
