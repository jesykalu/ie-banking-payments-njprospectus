"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    id: "01",
    title: "The most complex market in the world",
    description:
      "London gives you access to Tier 1 global banks, the Bank of England, world-class payments infrastructure, and one of the world's most active challenger ecosystems — all in one market. There are also opportunities to work for global clients.",
  },
  {
    id: "02",
    title: "Strategy and delivery credibility",
    description:
      "Unlike pure-play strategy boutiques, Accenture holds both the strategy and the delivery. You don't just design the answer — you help build it. That dual credibility is rare and makes your career trajectory far more versatile.",
  },
  {
    id: "03",
    title: "The UK regulatory moment",
    description:
      "Basel 3.1, Consumer Duty, NPA, SM&CR reform, operational resilience — the UK regulatory agenda is one of the busiest in a decade. These mandates are not optional for UK banks.",
  },
  {
    id: "04",
    title: "AI at the frontier",
    description:
      "Accenture is investing $3 billion globally in AI with proprietary tools already deployed in UK banking engagements. Joining now means shaping what AI-native UK banking looks like.",
  },
  {
    id: "05",
    title: "A clear and meritocratic path",
    description:
      "The career path is transparent, the meritocracy is real, and London's profile within Accenture globally means strong performers gain visibility well beyond the UK market.",
  },
  {
    id: "06",
    title: "Community and culture",
    description:
      "People are at the core for our practice. We combine intellectual rigour with genuine collaborative culture — united by a shared passion for banking and the challenges it presents.",
  },
];

export function WhyJoin() {
  return (
    <section id="join" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1216177466-MoqVpSs36SEfAGZoeQ2qp4GMkfguLv.jpg"
          alt="Hand holding smartphone displaying financial charts with city bokeh background"
          fill
          className="object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4">
            Why Join Us
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight text-balance">
            Accenture is at the centre of UK banking&apos;s transformation. There&apos;s no better place to be.
          </h2>
        </div>

        {/* Reasons list - two columns */}
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="group py-6 border-t border-white/20 cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <span className="text-sm font-mono text-[#A100FF] mt-1">
                  {reason.id}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-[#A100FF] transition-colors">
                      {reason.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#A100FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
