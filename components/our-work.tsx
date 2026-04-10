"use client";

import { FadeIn } from "@/components/fade-in";

const projects = [
  {
    title: "Core banking modernisation",
    body: "Supporting a major UK retail bank through a multi-year core platform migration to cloud-native architecture — vendor selection, architecture blueprint, business case, and phased delivery. Several of these programmes are live or in planning across UK Tier 1 banks right now.",
  },
  {
    title: "UK payments infrastructure",
    body: "Accenture has been engaged by the Bank of England on renewal of the UK's Real-Time Gross Settlement system and on broader New Payments Architecture work through Pay.UK. UK payments infrastructure is a marquee area for the practice.",
  },
  {
    title: "Regulatory response",
    body: "Helping UK banks respond to Basel 3.1, Consumer Duty embedding, SM&CR reform, and the PRA's new operational incident reporting framework — all active areas of demand right now.",
  },
  {
    title: "AI & data transformation",
    body: "Deploying AI-driven credit decisioning, fraud detection, and customer analytics for UK banks using Accenture's AI Refinery and FinForge accelerators. As UK banks accelerate GenAI adoption, demand for strategy and implementation advisory is significant.",
  },
  {
    title: "Digital banking & CX",
    body: "Redesigning the digital banking proposition for a UK retail bank — proposition design, customer journey reimagination, and the commercial case for platform investment — often working alongside Accenture Song.",
  },
  {
    title: "Cost & operating model",
    body: "Delivering cost reduction programmes across UK banking operations through process redesign, AI-enabled automation, and organisational restructuring. In the current UK environment of margin pressure, these mandates are consistently in demand.",
  },
];

export function OurWork() {
  return (
    <section id="our-work" className="py-12 lg:py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 lg:mb-12">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Our Work
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground max-w-3xl leading-tight mb-6">
              The work that matters most.
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
              Our work spans pure strategy through to large-scale transformation delivery, shaped by the distinctive character of the UK market: a concentrated Tier 1 banking sector, one of the world&apos;s most active regulatory regimes, a global payments infrastructure, and a vibrant challenger ecosystem.
            </p>
          </FadeIn>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 100}>
              <div className="bg-white p-8 border border-border hover:border-[#A100FF]/30 transition-all duration-500 hover-lift card-shine h-full">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
