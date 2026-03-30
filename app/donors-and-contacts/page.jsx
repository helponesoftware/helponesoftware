import React from "react";
import Hero from "../../components/Hero";
import TrustBar from "../../components/TrustBar";
import DonorsContactsFeatures from "../../components/DonorsContactsFeatures";
import DonorsContactsCoreFeaturesGrid from "../../components/DonorsContactsCoreFeaturesGrid";
import WhoItsForRow from "../../components/WhoItsForRow";
import ModulesGrid from "../../components/ModulesGrid";
import FutureProof from "../../components/FutureProof";
import FoundersProgramCta from "../../components/FoundersProgramCta";
import CtaBanner from "../../components/CtaBanner";
import contactMgmtImg from "../../assets/donor/Centralized Contact & Company Management.png";
import donationTrackingImg from "../../assets/donor/Effortless Donation Tracking.png";
import emailCampaignsImg from "../../assets/donor/Powerful Email Campaigns.png";

export const metadata = {
  title: "Donors & Contacts | HelpOne Software",
  description:
    "Unified nonprofit CRM with unlimited contacts, companies, and vendors. Smart profiles, donation tracking, automated thank-yous, and powerful campaigns — all in one intuitive hub.",
};

export default function DonorsContactsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        badge="Platform • Donors & Contacts"
        title="Donors & Contacts."
        titleAccent="Build Relationships That Last."
        subtitle="Unified nonprofit CRM with unlimited contacts, companies, and vendors. Smart profiles, donation tracking, automated thank-yous, and powerful campaigns — all in one intuitive hub."
      />

      <TrustBar
        items={[
          "SOC 2 • PCI Level 1",
          "AES-256 • GDPR",
          "Built exclusively for nonprofits",
          "30+ years nonprofit workflow expertise",
        ]}
      />

      <DonorsContactsFeatures />
      {/* EVERYTHING IN ONE HUB (with image placeholders) */}
      <section className="py-24 bg-black">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-font text-5xl md:text-6xl font-bold tracking-tighter">
              Everything in One Hub
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="module-card bg-white/5 rounded-3xl p-0 sm:p-6">
              <img
                src={contactMgmtImg.src}
                alt="Centralized Contact Management"
                className="w-full h-56 sm:h-72  object-cover rounded-md mb-6"
              />
              <div className="text-6xl mb-6">📇</div>
              <h3 className="text-3xl font-semibold mb-4">
                Centralized Contact & Company Management
              </h3>
              <p className="text-white/70">
                Detailed profiles with history, notes, and custom fields. Track
                every interaction in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="module-card bg-white/5 rounded-3xl p-0 sm:p-6">
              <img
                src={donationTrackingImg.src}
                alt="Donation Tracking"
                className="w-full h-56 sm:h-72   object-cover rounded-md mb-6"
              />
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-3xl font-semibold mb-4">
                Effortless Donation Tracking
              </h3>
              <p className="text-white/70">
                Log gifts, recurring donations, and sponsorships. Auto-tied to
                profiles with real-time summaries.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="module-card bg-white/5 rounded-3xl p-0 sm:p-6">
              <img
                src={emailCampaignsImg.src}
                alt="Email Campaigns"
                className="w-full h-56 sm:h-72  object-cover rounded-md mb-6"
              />
              <div className="text-6xl mb-6">📧</div>
              <h3 className="text-3xl font-semibold mb-4">
                Powerful Email Campaigns
              </h3>
              <p className="text-white/70">
                Build custom groups, design beautiful emails, and track
                opens/clicks with seamless integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ModulesGrid />

      <FutureProof />

      <CtaBanner
        title="Ready to raise more with less effort?"
        subtitle="Let's make fundraising seamless and unlimited."
      />
    </main>
  );
}
