"use client";

import { AnimatedCounter } from "./animated-counter";

const qualifications = [
  {
    category: "Banking & Finance",
    items: ["CFA", "ACIB", "FRM", "Chartered Management"],
    note: "Actively supported and often funded",
  },
  {
    category: "UK Regulatory",
    items: ["PRA Frameworks", "FCA Regulations", "Practitioner Mentoring"],
    note: "Genuine differentiator given current agenda",
  },
  {
    category: "Technology",
    items: ["AWS", "Azure", "GCP", "Thought Machine", "Mambu"],
    note: "Technical credibility with architects",
  },
  {
    category: "MBA Pathways",
    items: ["LBS Sponsorship", "Oxford Saïd", "Re-entry at Manager"],
    note: "For strong performers",
  },
];

export function DevelopmentSection() {
  return (
    <section className="pt-6 lg:pt-8 pb-12 lg:pb-16 bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header with background image */}
        <div className="relative mb-10 lg:mb-14 rounded-xl overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/994521488-6KwL6AKxD9Lw2AdOVBDVoZYEAZmtlm.jpg"
              alt="Professional consultant standing in modern office with green plant walls"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          {/* Content */}
          <div className="relative py-16 lg:py-24 px-8 lg:px-12">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-4">
              Development
            </p>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                Qualifications that carry weight.
              </h2>
              <div>
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  Accenture invests over $1 billion annually in learning and 
                  development globally. In the UK Banking practice, that translates 
                  into structured support for credentials that matter.
                </p>
                <p className="text-4xl font-bold text-[#A100FF]">
                  $<AnimatedCounter end={1} duration={2000} suffix="bn+" />
                </p>
                <p className="text-sm text-white/70">
                  Annual global L&D investment
                </p>
                <p className="text-red-500 font-semibold mt-4">
                  Content TBC
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {qualifications.map((qual) => (
            <div key={qual.category} className="bg-white p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {qual.category}
              </h3>
              <div className="space-y-2 mb-6">
                {qual.items.map((item) => (
                  <div
                    key={item}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#A100FF]" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#A100FF] font-medium">{qual.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
