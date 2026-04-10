"use client"

import { useEffect, useRef, useState } from "react"

const careerLevels = [
  { level: "Analyst", duration: "~2 years at level", color: "from-[#A100FF]/20 to-[#A100FF]/5" },
  { level: "Consultant", duration: "~2–3 years at level", color: "from-[#A100FF]/30 to-[#A100FF]/10" },
  { level: "Manager", duration: "~3–4 years at level", color: "from-[#A100FF]/40 to-[#A100FF]/15" },
  { level: "Senior Manager", duration: "~3–5 years at level", color: "from-[#A100FF]/50 to-[#A100FF]/20" },
]

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const increment = target / 50
          const timer = setInterval(() => {
            start += increment
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 30)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-[#A100FF]">
      ~{count}
      {suffix}
    </div>
  )
}

export function CareerSection() {
  return (
    <section id="career" className="py-24 lg:py-32 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm text-[#A100FF] font-medium tracking-wide uppercase mb-4">
            Your career
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            A clear and meritocratic path.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The career ladder in S&C runs from Analyst through Consultant, Manager, 
            and Senior Manager to Managing Director. The system is meritocratic — the 
            best people advance ahead of their peer group, and that&apos;s consistent 
            across the practice. For experienced hires, entry level is matched to your 
            background and track record. We&apos;ll be direct with you about where you&apos;d 
            come in and what the path forward looks like.
          </p>
        </div>

        {/* Career level cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {careerLevels.map((item, index) => (
            <div
              key={item.level}
              className="relative group"
            >
              <div className={`
                relative p-6 lg:p-8 rounded-2xl border border-border bg-gradient-to-br ${item.color}
                hover:border-[#A100FF]/30 transition-all duration-300
              `}>
                {/* Level number */}
                <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground">
                  0{index + 1}
                </div>
                
                {/* Animated counter */}
                <AnimatedCounter target={index === 0 ? 2 : index === 1 ? 3 : index === 2 ? 4 : 5} />
                
                <div className="text-sm text-muted-foreground mt-2 mb-4">
                  years at level
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {item.level}
                </h3>

                {/* Progress bar */}
                <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#A100FF] rounded-full transition-all duration-1000"
                    style={{ width: `${(index + 1) * 25}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Meritocracy statement */}
        <div className="text-center">
          <p className="text-muted-foreground text-lg italic">
            &quot;The system is meritocratic. The best people advance ahead of their peer group.&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
