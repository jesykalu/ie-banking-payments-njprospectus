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
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Development
          </p>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              Qualifications that carry weight.
            </h2>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Accenture invests over $1 billion annually in learning and 
                development globally. In the UK Banking practice, that translates 
                into structured support for credentials that matter.
              </p>
              <p className="text-4xl font-bold text-[#A100FF]">
                $<AnimatedCounter end={1} duration={2000} suffix="bn+" />
              </p>
              <p className="text-sm text-muted-foreground">
                Annual global L&D investment
              </p>
            </div>
          </div>
        </div>

        {/* Image and Qualifications grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-0">
          {/* Image */}
          <div className="lg:col-span-1 relative overflow-hidden rounded-xl lg:rounded-none lg:rounded-l-xl aspect-[4/3] lg:aspect-auto">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1200911287-ZZfjZrt3atGHfE2R4jpMKv0xEacSo8.jpg"
              alt="Professional entering modern office building"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Qualifications grid */}
          <div className="lg:col-span-4 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
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
      </div>
    </section>
  );
}
