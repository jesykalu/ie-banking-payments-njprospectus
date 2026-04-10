"use client"

import { cn } from "@/lib/utils"

const roles = [
  {
    number: "02",
    title: "Manager",
    duration: "~3–4 years at level",
    badge: null,
    description:
      "Leading delivery teams on UK banking mandates. Managing client relationships at working level. Structuring work plans, coaching junior colleagues, synthesising outputs. Contributing meaningfully to proposals and business development conversations. The pivot point between doing and leading — and the level at which your banking specialism becomes most visible to clients.",
  },
  {
    number: "03",
    title: "Senior Manager",
    duration: "~3–5 years at level",
    badge: "Most active entry point",
    description:
      "Day-to-day engagement leadership on major UK banking programmes. Primary counterpart to Director or Head of level at the client. C-suite client interaction. Building a commercial track record — shaping proposals, deepening client relationships, and helping bring in new work — without carrying a formal sales target. The level at which you start to shape the practice as well as serve it.",
  },
  {
    number: "04",
    title: "Managing Director",
    duration: "Partnership level",
    badge: null,
    description:
      "UK banking account ownership and P&L accountability. Firm and market leadership. The level at which you own the client relationship at ExCo or MD level and carry accountability for commercial outcomes. Equity and long-term incentive compensation become material at this level. London's profile within Accenture globally means strong MDs gain visibility well beyond the UK market.",
  },
]

export function CareerLadder() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <span className="inline-block text-sm text-[#A100FF] font-medium tracking-wide uppercase mb-4">
            The career ladder
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Where experienced hires come in.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            For experienced hires, entry level is matched to your background and 
            track record. Most people joining from banking, consulting, or financial 
            services roles come in at Manager or Senior Manager. Here&apos;s what those 
            levels involve.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {roles.map((role) => (
            <div
              key={role.number}
              className={cn(
                "relative p-6 lg:p-8 rounded-2xl border transition-all duration-300",
                role.badge
                  ? "bg-[#A100FF]/5 border-[#A100FF]/30"
                  : "bg-card/50 border-border hover:border-[#A100FF]/20"
              )}
            >
              {/* Badge */}
              {role.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 rounded-full bg-[#A100FF] text-white text-xs font-medium">
                    {role.badge}
                  </span>
                </div>
              )}

              {/* Card number */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-mono text-[#A100FF]">
                  Card {role.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {role.title}
              </h3>
              <span className="inline-block text-sm text-[#A100FF] font-medium mb-4">
                {role.duration}
              </span>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {role.description}
              </p>

              {/* Decorative line */}
              <div className={cn(
                "absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl",
                role.badge ? "bg-[#A100FF]" : "bg-border"
              )} />
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Entry level is determined by your background and track record. We&apos;ll 
            be direct with you about where you&apos;d come in and what the path looks 
            like from there.
          </p>
        </div>
      </div>
    </section>
  )
}
