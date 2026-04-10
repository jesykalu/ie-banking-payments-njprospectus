"use client";

import { AnimatedCounter } from "./animated-counter";
import { FadeIn } from "@/components/fade-in";

const offices = [
  { city: "London", role: "HQ", people: "~8,000" },
  { city: "Manchester", role: "Regional Hub", people: "~2,500" },
  { city: "Edinburgh", role: "Regional Hub", people: "~1,500" },
  { city: "Dublin", role: "Ireland HQ", people: "~1,800" },
];

export function GlobalSection() {
  return (
    <section className="py-12 lg:py-16 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-background/50 mb-4">
              Our Banking Practice
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-background leading-tight mb-8">
              One of the firm&apos;s most strategically important markets globally.
            </h2>
            <p className="text-lg text-background/70 leading-relaxed mb-6">
              Accenture&apos;s UK & Ireland operation is one of the firm&apos;s most strategically 
              important markets globally. With approximately 15,000 employees across the UK&I 
              — spanning London, Edinburgh, Manchester, Newcastle, and Dublin — it is a 
              substantial presence in UK professional services.
            </p>
            <p className="text-lg text-background/70 leading-relaxed mb-6">
              The S&C practice, led by Jonathan Keane (appointed UK, Ireland & Africa S&C 
              lead in 2025), sits at the premium advisory end of that footprint.
            </p>
            <p className="text-lg text-background/70 leading-relaxed mb-6">
              Within Financial Services, Banking is the largest and most active practice area. 
              The UK Banking S&C community runs into the hundreds of dedicated practitioners, 
              with deep specialisms across retail, commercial, transaction banking, payments, and risk.
            </p>
            <p className="text-lg text-background/70 leading-relaxed mb-12">
              Scale matters here. The concentration of Tier 1 banks, regulators, fintechs, and 
              infrastructure bodies in the UK makes this one of the most intellectually rich 
              banking consulting markets anywhere in the world.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-[#A100FF]">
                  ~<AnimatedCounter end={15} duration={2000} suffix="k" />
                </p>
                <p className="text-sm text-background/50 mt-2">Accenture employees across UK&I</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-[#A100FF]">
                  ~<AnimatedCounter end={150} duration={2000} />
                </p>
                <p className="text-sm text-background/50 mt-2">S&C Banking Practitioners</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-[#A100FF]">
                  <AnimatedCounter end={22} duration={2000} />
                </p>
                <p className="text-sm text-background/50 mt-2">FT Gold Ratings (incl. Financial Services)</p>
              </div>
            </div>
          </div>

          {/* Right: Image and Offices */}
          <div className="space-y-8">
            {/* Canary Wharf Image */}
            <FadeIn direction="left">
              <div className="relative overflow-hidden rounded-xl aspect-[16/9] image-zoom">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/990909558-9FUZz9L4LGu88jK1iQJAJdJHLhAYub.jpg"
                  alt="Professional working with tablet in London's Canary Wharf financial district at night"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>

            <p className="text-xs uppercase tracking-[0.2em] text-background/50">
              Our Locations
            </p>
            <div className="space-y-4">
              {offices.map((office, index) => (
                <FadeIn key={office.city} delay={index * 80} direction="left">
                  <div
                    className={`p-6 border transition-all duration-500 hover:translate-x-2 ${
                      index === 0
                        ? "border-[#A100FF] bg-[#A100FF]/10"
                        : "border-background/10 hover:border-background/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-background">
                          {office.city}
                        </h3>
                        <p className="text-sm text-background/50">{office.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[#A100FF]">
                          {office.people}
                        </p>
                        <p className="text-xs text-background/50">people</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
