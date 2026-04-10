"use client"

import { Briefcase, Shield, Scale, TrendingUp } from "lucide-react"

const positioningPills = [
  "Strategy & delivery",
  "UK regulatory expertise",
  "AI at the frontier",
  "Meritocratic progression",
  "Global platform",
]

const features = [
  {
    icon: Briefcase,
    title: "The work is consequential",
    description:
      "UK banks are rebuilding their core infrastructure, navigating a generational regulatory shift, and working out how to deploy AI responsibly. Those projects are live, and Accenture is leading many of them. This isn't advisory work that sits in a drawer.",
  },
  {
    icon: Shield,
    title: "Strategy and delivery credibility",
    description:
      "Pure-play boutiques hand off at the business case. Accenture stays through implementation. That dual track record is rare in the market and makes your career trajectory more versatile, not less. You don't just design the answer — you help build it.",
  },
  {
    icon: Scale,
    title: "The UK regulatory moment",
    description:
      "Basel 3.1, Consumer Duty, NPA, SM&CR reform, operational resilience — the UK regulatory agenda is one of the busiest in a decade. These mandates are not optional for banks. They're a sustained source of high-quality, high-visibility work that isn't going anywhere.",
  },
  {
    icon: TrendingUp,
    title: "A transparent path",
    description:
      "The career ladder is clear, the meritocracy is real, and strong performers in the London practice gain visibility well beyond the UK market. We'll be direct with you about where you'd come in and what progression looks like from day one.",
  },
]

export function WhyJoin() {
  return (
    <section id="why-join" className="py-24 lg:py-32 bg-gradient-to-b from-white via-[#A100FF]/[0.02] to-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <span className="inline-block text-sm text-[#A100FF] font-medium tracking-wide uppercase mb-4">
            Why join us
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Why Accenture Banking.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
            We&apos;re aware this question appears in every prospectus. Here&apos;s our honest answer.
          </p>

          {/* Positioning pills */}
          <div className="flex flex-wrap gap-3">
            {positioningPills.map((pill) => (
              <div
                key={pill}
                className="px-4 py-2 rounded-full border border-[#A100FF]/30 bg-[#A100FF]/5 text-sm font-medium text-[#A100FF]"
              >
                {pill}
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 lg:p-8 rounded-2xl border border-border bg-white shadow-sm hover:border-[#A100FF]/30 hover:shadow-md hover:shadow-[#A100FF]/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#A100FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#A100FF]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#A100FF]" />
              </div>

              {/* Number */}
              <div className="absolute top-6 right-6 text-xs font-mono text-muted-foreground">
                0{index + 1}
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
