"use client";

import { useState } from "react";

const engagementTypes = [
  {
    id: "strategy",
    label: "Strategy & Advisory",
    duration: "6-16 weeks",
    description:
      "Diagnostic studies, target operating model design, regulatory impact assessments, vendor selection. Fast-paced, C-suite facing, high-visibility from day one.",
  },
  {
    id: "delivery",
    label: "Programme Delivery",
    duration: "3 months - 3+ years",
    description:
      "From strategy into executable blueprint — business cases, architecture design, governance, mobilisation — through to full transformation execution.",
  },
  {
    id: "advisory",
    label: "Retained Advisory",
    duration: "Ongoing",
    description:
      "Standing advisory capacity — regulatory horizon scanning, strategic input, and programme oversight. Closest to senior client leadership.",
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
    <section id="work" className="py-12 lg:py-16 bg-secondary/30">
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
            <div className="space-y-4">
              {engagementTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`w-full text-left p-6 border transition-all duration-300 ${
                    activeType === type.id
                      ? "border-[#A100FF] bg-white"
                      : "border-border bg-white/50 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {type.label}
                    </h3>
                    <span className="text-sm text-[#A100FF] font-medium">
                      {type.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
