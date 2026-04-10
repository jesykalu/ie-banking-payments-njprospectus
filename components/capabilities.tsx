"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    id: "01",
    title: "Core Banking Modernisation",
    description:
      "Supporting major UK retail banks through multi-year migrations to cloud-native architecture. Thought Machine Vault and Mambu implementations at scale.",
  },
  {
    id: "02",
    title: "UK Payments Infrastructure",
    description:
      "Engaged by the Bank of England on RTGS renewal and New Payments Architecture through Pay.UK. Central to UK financial infrastructure.",
  },
  {
    id: "03",
    title: "Regulatory Response",
    description:
      "Navigating Basel 3.1, Consumer Duty, SM&CR reform, and PRA operational resilience. Regulatory imperatives driving sustained demand.",
  },
  {
    id: "04",
    title: "AI & Data Transformation",
    description:
      "Deploying AI-driven credit decisioning, fraud detection, and customer analytics using Accenture AI Refinery and FinForge accelerators.",
  },
  {
    id: "05",
    title: "Digital Banking & CX",
    description:
      "Redesigning end-to-end digital propositions for UK retail banks. Journey reimagination in partnership with Accenture Song.",
  },
  {
    id: "06",
    title: "Operating Model & Cost",
    description:
      "Delivering 20-25% cost reduction through process redesign, AI automation, and organisational restructuring.",
  },
];

export function Capabilities() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What We Do
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground max-w-2xl leading-tight">
            Six practice areas driving transformation.
          </h2>
        </div>

        {/* Capabilities list */}
        <div className="border-t border-border">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="group border-b border-border py-8 lg:py-10 cursor-pointer transition-colors hover:bg-secondary/30"
              onMouseEnter={() => setHoveredId(capability.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-start gap-6 lg:gap-12">
                {/* Number */}
                <span
                  className={`text-sm font-mono transition-colors duration-300 ${
                    hoveredId === capability.id
                      ? "text-[#A100FF]"
                      : "text-muted-foreground"
                  }`}
                >
                  {capability.id}
                </span>

                {/* Content */}
                <div className="flex-1 grid lg:grid-cols-2 gap-4 lg:gap-12">
                  <h3
                    className={`text-xl lg:text-2xl font-semibold transition-colors duration-300 ${
                      hoveredId === capability.id
                        ? "text-foreground"
                        : "text-foreground/80"
                    }`}
                  >
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  className={`w-5 h-5 transition-all duration-300 ${
                    hoveredId === capability.id
                      ? "text-[#A100FF] translate-x-1 -translate-y-1"
                      : "text-muted-foreground/30"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
