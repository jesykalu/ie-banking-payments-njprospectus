"use client"

import { MapPin } from "lucide-react"

const offices = [
  { city: "London", primary: true },
  { city: "Edinburgh", primary: false },
  { city: "Manchester", primary: false },
  { city: "Newcastle", primary: false },
  { city: "Dublin", primary: false },
]

const stats = [
  { value: "~15,000", label: "Accenture employees across UK&I" },
  { value: "22", label: "FT gold ratings including financial services" },
  { value: "#1", label: "Ranked UK banking consulting practice" },
]

export function GlobalSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm text-[#A100FF] font-medium tracking-wide uppercase mb-4">
              About Accenture UK&I
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              One of the firm&apos;s most strategically important markets globally.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Accenture&apos;s UK & Ireland operation spans approximately 15,000 people 
              across five cities. It sits consistently at the top of the FT&apos;s UK 
              consultancy rankings — 22 gold ratings across categories, including 
              Financial Services — and operates across the full spectrum from strategy 
              through to large-scale technology delivery. The Strategy & Consulting 
              practice sits at the premium advisory end of that footprint, led in the 
              UK, Ireland & Africa by Jonathan Keane.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-[#A100FF] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UK&I Map Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#A100FF]/10 via-secondary/50 to-transparent border border-border p-8 lg:p-12">
              {/* Stylized UK & Ireland outline */}
              <div className="relative w-full h-full">
                {/* Background glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-[#A100FF]/10 rounded-full blur-3xl" />
                </div>

                {/* UK Shape representation */}
                <svg
                  viewBox="0 0 200 250"
                  className="w-full h-full relative z-10"
                  fill="none"
                >
                  {/* Simplified UK + Ireland shapes */}
                  <path
                    d="M60 40 L80 35 L95 45 L100 70 L110 80 L115 100 L120 130 L130 150 L135 180 L125 200 L110 210 L95 200 L85 180 L75 160 L70 130 L65 100 L55 80 L50 60 Z"
                    fill="url(#ukGradient)"
                    stroke="rgba(161, 0, 255, 0.3)"
                    strokeWidth="1"
                  />
                  {/* Ireland */}
                  <path
                    d="M30 70 L45 65 L55 75 L55 95 L50 110 L40 115 L30 105 L25 85 Z"
                    fill="url(#ukGradient)"
                    stroke="rgba(161, 0, 255, 0.3)"
                    strokeWidth="1"
                  />
                  <defs>
                    <linearGradient id="ukGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(161, 0, 255, 0.2)" />
                      <stop offset="100%" stopColor="rgba(161, 0, 255, 0.05)" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Office location dots */}
                <div className="absolute top-[65%] left-[55%] w-3 h-3 bg-[#A100FF] rounded-full animate-pulse shadow-lg shadow-[#A100FF]/50" title="London" />
                <div className="absolute top-[30%] left-[45%] w-2 h-2 bg-[#A100FF]/70 rounded-full" title="Edinburgh" />
                <div className="absolute top-[50%] left-[42%] w-2 h-2 bg-[#A100FF]/70 rounded-full" title="Manchester" />
                <div className="absolute top-[40%] left-[50%] w-2 h-2 bg-[#A100FF]/70 rounded-full" title="Newcastle" />
                <div className="absolute top-[50%] left-[20%] w-2 h-2 bg-[#A100FF]/70 rounded-full" title="Dublin" />
              </div>
            </div>

            {/* Office pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className={`
                    inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-colors
                    ${
                      office.primary
                        ? "bg-[#A100FF]/10 border-[#A100FF]/30 text-[#A100FF]"
                        : "bg-card border-border text-muted-foreground hover:border-[#A100FF]/20"
                    }
                  `}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-sm font-medium">{office.city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
