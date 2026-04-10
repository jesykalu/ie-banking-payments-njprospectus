"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const capabilities = [
  {
    number: "01",
    title: "Core banking modernisation",
    description:
      "Supporting major UK retail banks through multi-year migrations to cloud-native architecture — vendor selection, business case, architecture blueprint, and phased delivery. Thought Machine Vault and Mambu are at the centre of several live programmes right now. This is genuinely complex, high-stakes work, and Accenture is leading it.",
  },
  {
    number: "02",
    title: "UK payments infrastructure",
    description:
      "Accenture has been engaged by the Bank of England on the renewal of the UK's Real-Time Gross Settlement system — a programme worth up to £150 million — and on New Payments Architecture work through Pay.UK. There are few mandates more central to UK financial infrastructure than these.",
  },
  {
    number: "03",
    title: "Regulatory response",
    description:
      "Helping UK banks navigate Basel 3.1 (final rules published early 2026, effective January 2027), Consumer Duty embedding, SM&CR reform, and the PRA's operational incident reporting framework. These aren't discretionary projects — they're regulatory imperatives, which means sustained, high-quality demand.",
  },
  {
    number: "04",
    title: "AI & data transformation",
    description:
      "Deploying AI-driven credit decisioning, fraud detection, and customer analytics using Accenture's AI Refinery and FinForge accelerators. As UK banks accelerate GenAI adoption, the demand for credible strategy and implementation advisory is significant — and growing.",
  },
  {
    number: "05",
    title: "Digital banking & CX",
    description:
      "Redesigning the end-to-end digital proposition for UK retail banks — proposition design, customer journey reimagination, and the commercial case for platform investment — often working in close partnership with Accenture Song.",
  },
  {
    number: "06",
    title: "Operating model & cost",
    description:
      "Delivering 20–25% cost reduction programmes through process redesign, AI-enabled automation, and organisational restructuring. In a UK environment of sustained margin pressure, these mandates are a constant.",
  },
]

export function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="practice" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <span className="inline-block text-sm text-[#A100FF] font-medium tracking-wide uppercase mb-4">
            The practice
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Where we work. What we do.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            The UK&I Banking practice sits within Financial Services S&C, part of 
            Accenture&apos;s Reinvention Services unit. Work is organised across both 
            client segments and capability domains — which means you build genuine 
            depth in a client, a topic, or both.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={capability.number}
              className={cn(
                "group relative p-6 lg:p-8 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm",
                activeIndex === index
                  ? "bg-white border-[#A100FF]/30 shadow-md shadow-[#A100FF]/5"
                  : "bg-white/80 border-border hover:border-[#A100FF]/20 hover:shadow-md hover:shadow-[#A100FF]/5"
              )}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Number indicator */}
              <div className="flex items-start gap-4 mb-4">
                <span
                  className={cn(
                    "text-sm font-mono transition-colors duration-300",
                    activeIndex === index ? "text-[#A100FF]" : "text-muted-foreground"
                  )}
                >
                  {capability.number}
                </span>
                <div className="flex-1">
                  <h3
                    className={cn(
                      "text-xl font-semibold mb-3 transition-colors duration-300",
                      activeIndex === index ? "text-foreground" : "text-foreground/90"
                    )}
                  >
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {capability.description}
                  </p>
                </div>
              </div>

              {/* Accent line */}
              <div
                className={cn(
                  "absolute left-0 top-6 bottom-6 w-0.5 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-[#A100FF]" : "bg-transparent"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
