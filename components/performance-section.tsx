"use client"

import { Calendar, Users } from "lucide-react"

const cycles = [
  {
    title: "Cycle 1",
    period: "August–December",
    description:
      "Mid-year calibration. Your People Lead presents your performance across client delivery and practice contribution. Eligible outcomes at this cycle: promotion consideration and bonus.",
    icon: Calendar,
  },
  {
    title: "Cycle 2",
    period: "March–May",
    description:
      "Year-end calibration. The primary promotion window. The most significant performance conversation of the year — and the one your People Lead will have been building toward with you since the start of the cycle.",
    icon: Users,
  },
]

export function PerformanceSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <span className="inline-block text-sm text-[#A100FF] font-medium tracking-wide uppercase mb-4">
            Performance
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Performance management.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Accenture runs a structured, bi-annual performance process called 
            Performance Achievement. Each cycle, you&apos;re evaluated across client 
            delivery, practice contribution, and development against your level. 
            Everyone is assigned a People Lead — a senior advocate who knows your 
            work, represents you in calibration meetings, and helps you build the 
            case for progression.
          </p>
        </div>

        {/* PA Cycle cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cycles.map((cycle, index) => (
            <div
              key={cycle.title}
              className="relative p-6 lg:p-8 rounded-2xl border border-border bg-card/50 hover:border-[#A100FF]/30 transition-all duration-300"
            >
              {/* Cycle indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#A100FF]/10 flex items-center justify-center">
                    <cycle.icon className="w-6 h-6 text-[#A100FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {cycle.title}
                    </h3>
                    <span className="text-sm text-[#A100FF] font-medium">
                      {cycle.period}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  0{index + 1}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {cycle.description}
              </p>

              {/* Timeline connector */}
              {index === 0 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Attribution */}
        <div className="text-center">
          <p className="text-muted-foreground text-lg italic max-w-3xl mx-auto">
            &quot;Everyone is assigned a People Lead from day one — a senior advocate 
            who represents you in calibration and champions your development throughout the year.&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
