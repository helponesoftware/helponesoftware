import React from "react";
import Hero from "../../components/Hero";
import ModulesGrid from "../../components/ModulesGrid";
import FutureProof from "../../components/FutureProof";
import CtaBanner from "../../components/CtaBanner";

export const metadata = {
  title: "Participant CRM | HelpOne Software",
  description:
    "Powerful participant management and reporting with real-time dashboards, engagement scoring, activity breakdowns, and smart exports.",
};

export default function ParticipantsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        badge="Platform • Participants"
        title="Participants"
        titleAccent="Know Your People Better."
        subtitle="Powerful participant management and reporting with real-time dashboards, engagement scoring, activity breakdowns, and smart exports."
      />

      {/* <ParticipantsFeatures /> */}

      {/* <!-- PARTICIPANT DASHBOARD --> */}
      <section className="py-24 bg-[#0A1428]">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-font text-5xl md:text-6xl font-bold tracking-tighter">
              Participant Dashboard
            </h2>
            <p className="text-xl text-white/70 mt-4">
              Instant insights at your fingertips. See what matters most — and
              take action faster.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-12">
            <h3 className="text-2xl font-semibold mb-10 text-center">Overview</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-3xl p-10 text-center">
                <div className="text-[#00E6C3] text-sm font-medium">
                  TOTAL PARTICIPANTS
                </div>
                <div className="text-6xl font-mono font-bold mt-4">1,248</div>
                <div className="text-green-400 text-sm mt-2">
                  ↑ 14% from last month
                </div>
                <p className="text-white/70 text-sm mt-6">
                  Your community continues to grow steadily.
                </p>
              </div>
              <div className="bg-white/10 rounded-3xl p-10 text-center">
                <div className="text-[#00E6C3] text-sm font-medium">
                  NEW PARTICIPANTS
                </div>
                <div className="text-6xl font-mono font-bold mt-4">187</div>
                <div className="text-white/70 text-sm mt-2">
                  First-time attendees & donors
                </div>
                <p className="text-white/70 text-sm mt-6">
                  Welcome 187 fresh faces this month.
                </p>
              </div>
              <div className="bg-white/10 rounded-3xl p-10 text-center">
                <div className="text-[#00E6C3] text-sm font-medium">
                  RETURNING PARTICIPANTS
                </div>
                <div className="text-6xl font-mono font-bold mt-4">1,061</div>
                <div className="text-white/70 text-sm mt-2">
                  85% repeat engagement rate
                </div>
                <p className="text-white/70 text-sm mt-6">
                  Strong loyalty — people keep coming back.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mt-12">
              <div className="bg-white/10 rounded-3xl p-10 text-center">
                <div className="text-[#00E6C3] text-sm font-medium">
                  ACTIVE THIS MONTH
                </div>
                <div className="text-5xl font-mono font-bold mt-4">412</div>
                <p className="text-white/70 text-sm mt-6">
                  Engaged in the last 30 days
                </p>
              </div>
              <div className="bg-white/10 rounded-3xl p-10 text-center">
                <div className="text-[#00E6C3] text-sm font-medium">
                  DONATIONS FROM PARTICIPANTS
                </div>
                <div className="text-5xl font-mono font-bold mt-4">48k</div>
                <p className="text-white/70 text-sm mt-6">
                  Average $39 per participant
                </p>
              </div>
              <div className="bg-white/10 rounded-3xl p-10 text-center">
                <div className="text-[#00E6C3] text-sm font-medium">
                  AVG EVENTS ATTENDED
                </div>
                <div className="text-5xl font-mono font-bold mt-4">2.8</div>
                <p className="text-white/70 text-sm mt-6">
                  Per participant this month
                </p>
              </div>
              <div className="bg-white/10 rounded-3xl p-10 text-center">
                <div className="text-[#00E6C3] text-sm font-medium">
                  TOP ENGAGED PARTICIPANT
                </div>
                <div className="text-4xl font-mono font-bold mt-4 text-center">
                  14 events
                </div>
                <p className="text-white/70 text-sm mt-6">+ $1,250 donated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITY BREAKDOWN */}
      <section className="py-24 bg-black">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="heading-font text-4xl font-bold mb-12 text-center">
            Participant Activity Breakdown
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vertical List */}
            <div className="bg-white/5 rounded-3xl p-10">
              <h3 className="text-2xl font-semibold mb-6">By Event Attendance</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="font-medium">Spring Gala</div>
                  <div className="text-[#00E6C3] text-2xl font-mono">248</div>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="font-medium">Youth Camp</div>
                  <div className="text-[#00E6C3] text-2xl font-mono">195</div>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="font-medium">Annual Fundraiser</div>
                  <div className="text-[#00E6C3] text-2xl font-mono">312</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-medium">Volunteer Day</div>
                  <div className="text-[#00E6C3] text-2xl font-mono">87</div>
                </div>
              </div>
              <p className="text-white/70 text-sm mt-6">
                Quickly see which events draw the biggest crowds and spot trends
                at a glance.
              </p>
            </div>

            {/* Line Chart */}
            <div className="bg-white/5 rounded-3xl p-10">
              <h3 className="text-2xl font-semibold mb-6">Donation Trends</h3>
              <div className="h-64 bg-[#1f2937] rounded-2xl p-8 relative flex items-end">
                <div className="flex-1 h-12 bg-gradient-to-t from-[#00E6C3] to-transparent rounded"></div>
                <div className="flex-1 h-20 bg-gradient-to-t from-[#00E6C3] to-transparent rounded"></div>
                <div className="flex-1 h-32 bg-gradient-to-t from-[#00E6C3] to-transparent rounded"></div>
                <div className="flex-1 h-52 bg-[#00E6C3] rounded"></div>
                <div className="flex-1 h-28 bg-gradient-to-t from-[#00E6C3] to-transparent rounded"></div>
                <div className="flex-1 h-44 bg-[#00E6C3] rounded"></div>
              </div>
              <p className="text-white/70 text-sm mt-6">
                Track giving patterns over time and identify your most generous
                supporters.
              </p>
            </div>

            {/* Pie Chart */}
            <div className="bg-white/5 rounded-3xl p-10">
              <h3 className="text-2xl font-semibold mb-6">Engagement Score</h3>
              <div className="h-64 bg-[#1f2937] rounded-2xl flex items-center justify-center relative">
                <div className="w-48 h-48 rounded-full border-[35px] border-[#00E6C3] border-r-transparent border-b-transparent border-l-transparent relative">
                  <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div>
                      <div className="text-5xl font-bold text-[#00E6C3]">62%</div>
                      <div className="text-xs text-white/70">HIGH</div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-8 flex flex-col items-center gap-1 text-xs">
                  <div>High 62%</div>
                  <div>Medium 28%</div>
                  <div>Low 10%</div>
                </div>
              </div>
              <p className="text-white/70 text-sm mt-6">
                Instantly segment your audience and focus stewardship where it
                matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ModulesGrid />

      <FutureProof />

      <CtaBanner
        title="Ready to know every participant deeply?"
        subtitle="Let's turn one-time donors into lifelong supporters."
      />
    </main>
  );
}
