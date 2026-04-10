"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    id: "01",
    title: "The work is consequential",
    description:
      "UK banks are rebuilding core infrastructure, navigating generational regulatory shifts, and deploying AI at scale.",
  },
  {
    id: "02",
    title: "Strategy meets delivery",
    description:
      "Pure-play boutiques hand off at the business case. Accenture stays through implementation, making your career more versatile.",
  },
  {
    id: "03",
    title: "The UK regulatory moment",
    description:
      "Basel 3.1, Consumer Duty, NPA, SM&CR reform — the UK regulatory agenda is one of the busiest in a decade.",
  },
  {
    id: "04",
    title: "A transparent path",
    description:
      "The career ladder is clear, the meritocracy is real. Strong performers gain visibility well beyond the UK market.",
  },
];

export function WhyJoin() {
  return (
    <section id="join" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Why Join Us
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground max-w-2xl leading-tight">
            Why Accenture Banking. Our honest answer.
          </h2>
        </div>

        {/* Two column layout: Image + Reasons */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
            <Image
              src="/images/team-collaboration.jpg"
              alt="Accenture team collaborating in a modern office setting"
              fill
              className="object-cover"
            />
            {/* Subtle purple gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#A100FF]/20 via-transparent to-transparent" />
          </div>

          {/* Reasons list */}
          <div className="space-y-0 divide-y divide-border">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="group py-8 first:pt-0 last:pb-0 cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <span className="text-sm font-mono text-[#A100FF] mt-1">
                    {reason.id}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg lg:text-xl font-semibold text-foreground group-hover:text-[#A100FF] transition-colors">
                        {reason.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-[#A100FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
