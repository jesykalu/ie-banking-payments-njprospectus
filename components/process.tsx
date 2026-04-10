"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "I",
    title: "Strategy & advisory",
    duration: "6–16 weeks",
    description:
      "Diagnostic studies, target operating model design, regulatory impact assessments, vendor selection. Fast-paced, C-suite facing, and often the entry point for a larger programme. The work is high-visibility from day one.",
  },
  {
    number: "II",
    title: "Programme design & delivery",
    duration: "3 months to 3+ years",
    description:
      "From translating strategy into an executable blueprint — business cases, architecture design, governance, mobilisation — through to full transformation execution. Core modernisation, Basel implementation, and operational resilience programmes all sit here. Accenture UK has several multi-year banking engagements running concurrently at any time.",
  },
  {
    number: "III",
    title: "Retained advisory",
    duration: "Ongoing",
    description:
      "Standing advisory capacity — regulatory horizon scanning, strategic input, and programme oversight. Common with clients where Accenture has a deep, multi-decade relationship. The work that keeps you closest to the client's most senior leadership.",
  },
]

const weekSchedule = [
  {
    day: "Monday",
    description:
      "London office or home. Team planning call; align the week's priorities with Senior Manager. Advance regulatory workstream analysis. Review draft outputs from analysts.",
  },
  {
    day: "Tuesday",
    description:
      "On-site at client. Structured interviews with Operations and Technology stakeholders. Afternoon synthesis session with the Accenture team.",
  },
  {
    day: "Wednesday",
    description:
      "On-site. Facilitate working group with client programme team. Draft key findings for weekly steering pack. Call with Accenture's technology architecture lead.",
  },
  {
    day: "Thursday",
    description:
      "Hybrid. Deep-dive benchmarking and financial modelling. Peer review of deliverables with Senior Manager. Contribute to proposal for next phase. Call with payments CoE specialist.",
  },
  {
    day: "Friday",
    description:
      "Practice investment. UK Banking S&C knowledge share on PRA operational resilience updates. Accenture Learning module. Catch-up with People Lead on development priorities.",
  },
]

export function Process() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="work" className="py-24 lg:py-32 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <span className="inline-block text-sm text-[#A100FF] font-medium tracking-wide uppercase mb-4">
            Our work
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            How engagements work.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            One of the things that distinguishes Accenture Banking from pure-play 
            strategy boutiques is the range. Long-cycle transformation programmes 
            sit alongside sharp advisory mandates — and at Manager or Senior Manager 
            level, you&apos;ll typically move across both.
          </p>
        </div>

        {/* Steps timeline */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "relative p-6 lg:p-8 rounded-2xl border transition-all duration-300 cursor-pointer",
                activeStep === index
                  ? "bg-[#A100FF]/5 border-[#A100FF]/30"
                  : "bg-card/50 border-border hover:border-[#A100FF]/20"
              )}
              onClick={() => setActiveStep(index)}
            >
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300",
                    activeStep === index
                      ? "bg-[#A100FF] text-white"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {step.number}
                </div>
                <div className="flex-1">
                  <span className="text-xs text-[#A100FF] font-medium">
                    Step {step.number}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <span className="inline-block text-sm text-[#A100FF] font-medium mb-3">
                {step.duration}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Week view panel */}
        <div className="rounded-2xl border border-border bg-card/50 overflow-hidden">
          <div className="p-6 lg:p-8 border-b border-border bg-[#A100FF]/5">
            <h3 className="text-lg font-semibold text-foreground">
              A week in the practice
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Manager, core banking modernisation programme
            </p>
          </div>
          <div className="divide-y divide-border">
            {weekSchedule.map((item) => (
              <div
                key={item.day}
                className="p-6 lg:p-8 flex flex-col lg:flex-row lg:items-start gap-4 hover:bg-[#A100FF]/5 transition-colors duration-200"
              >
                <div className="lg:w-32 shrink-0">
                  <span className="text-sm font-semibold text-[#A100FF]">
                    {item.day}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
