"use client";

import { useState } from "react";
import { Compass, Rocket, Users } from "lucide-react";

const engagementTypes = [
  {
    id: "strategy",
    label: "Strategy & Advisory",
    duration: "6-16 weeks",
    description:
      "Diagnostic studies, target operating model design, regulatory impact assessments, vendor selection. Fast-paced, C-suite facing, high-visibility from day one.",
    icon: Compass,
  },
  {
    id: "delivery",
    label: "Programme Delivery",
    duration: "3 months - 3+ years",
    description:
      "From strategy into executable blueprint — business cases, architecture design, governance, mobilisation — through to full transformation execution.",
    icon: Rocket,
  },
  {
    id: "advisory",
    label: "Retained Advisory",
    duration: "Ongoing",
    description:
      "Standing advisory capacity — regulatory horizon scanning, strategic input, and programme oversight. Closest to senior client leadership.",
    icon: Users,
  },
];

const weekSchedule = [
  {
    day: "Mon",
    activities: [
      "Team planning call",
      "Regulatory workstream analysis",
      "Review analyst outputs",
    ],
  },
  {
    day: "Tue",
    activities: [
      "Client site: stakeholder interviews",
      "Afternoon synthesis session",
    ],
  },
  {
    day: "Wed",
    activities: [
      "Facilitate working group",
      "Draft steering pack",
      "Architecture lead call",
    ],
  },
  {
    day: "Thu",
    activities: [
      "Benchmarking & modelling",
      "Peer review",
      "Proposal development",
    ],
  },
  {
    day: "Fri",
    activities: [
      "Practice knowledge share",
      "Learning module",
      "People Lead check-in",
    ],
  },
];

export function Process() {
  const [activeType, setActiveType] = useState("strategy");

  return (
    <section id="work" className="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 lg:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            How We Work
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground max-w-3xl leading-tight">
            Long-cycle transformation meets sharp advisory.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Engagement Types */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Engagement Types
            </p>
            <div className="space-y-5">
              {engagementTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`group relative w-full text-left p-7 rounded-2xl transition-all duration-500 ease-out overflow-hidden ${
                    activeType === type.id
                      ? "bg-gradient-to-br from-white via-white to-[#A100FF]/5 shadow-[0_8px_30px_rgb(161,0,255,0.12)] scale-[1.02]"
                      : "bg-white/80 hover:bg-white shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:scale-[1.01]"
                  }`}
                >
                  {/* Active indicator line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-500 ${
                    activeType === type.id
                      ? "bg-gradient-to-b from-[#A100FF] to-[#7B00CC]"
                      : "bg-transparent group-hover:bg-slate-200"
                  }`} />
                  
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`relative p-3 rounded-xl transition-all duration-500 ${
                        activeType === type.id
                          ? "bg-gradient-to-br from-[#A100FF] to-[#7B00CC] shadow-[0_4px_14px_rgb(161,0,255,0.4)]"
                          : "bg-slate-100 group-hover:bg-slate-200"
                      }`}>
                        <type.icon className={`w-5 h-5 transition-colors duration-500 ${
                          activeType === type.id
                            ? "text-white"
                            : "text-slate-500 group-hover:text-slate-700"
                        }`} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                          activeType === type.id
                            ? "text-foreground"
                            : "text-foreground/80 group-hover:text-foreground"
                        }`}>
                          {type.label}
                        </h3>
                        <span className={`inline-flex items-center text-xs font-medium mt-1 px-2.5 py-0.5 rounded-full transition-all duration-300 ${
                          activeType === type.id
                            ? "bg-[#A100FF]/10 text-[#A100FF]"
                            : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                        }`}>
                          {type.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className={`text-sm leading-relaxed pl-16 transition-colors duration-300 ${
                    activeType === type.id
                      ? "text-muted-foreground"
                      : "text-muted-foreground/70 group-hover:text-muted-foreground"
                  }`}>
                    {type.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Week View */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              A Week in the Practice
            </p>
            <div className="bg-white border border-border">
              <div className="p-6 border-b border-border">
                <p className="text-sm text-muted-foreground">
                  Manager, Core Banking Programme
                </p>
              </div>
              <div className="divide-y divide-border">
                {weekSchedule.map((day) => (
                  <div key={day.day} className="p-6 flex gap-6">
                    <span className="text-sm font-semibold text-[#A100FF] w-12 shrink-0">
                      {day.day}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {day.activities.map((activity) => (
                        <span
                          key={activity}
                          className="text-xs px-3 py-1 bg-secondary text-muted-foreground rounded-full"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
