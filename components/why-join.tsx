"use client";

import { ArrowUpRight } from "lucide-react";

const reasons = [
  {
    id: "01",
    title: "The work is consequential",
    description:
      "UK banks are rebuilding core infrastructure, navigating generational regulatory shifts, and deploying AI at scale. These projects are live, and Accenture is leading many of them.",
  },
  {
    id: "02",
    title: "Strategy meets delivery",
    description:
      "Pure-play boutiques hand off at the business case. Accenture stays through implementation. That dual credibility makes your career trajectory more versatile.",
  },
  {
    id: "03",
    title: "The UK regulatory moment",
    description:
      "Basel 3.1, Consumer Duty, NPA, SM&CR reform — the UK regulatory agenda is one of the busiest in a decade. A sustained source of high-visibility work.",
  },
  {
    id: "04",
    title: "A transparent path",
    description:
      "The career ladder is clear, the meritocracy is real. Strong performers gain visibility well beyond the UK market. We&apos;ll be direct about where you&apos;d come in.",
  },
];

export function WhyJoin() {
  return (
    <section id="join" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Why Join Us
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground max-w-2xl leading-tight">
            Why Accenture Banking. Our honest answer.
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="group bg-white p-8 lg:p-12 hover:bg-secondary/30 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-sm font-mono text-[#A100FF]">
                  {reason.id}
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-[#A100FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
