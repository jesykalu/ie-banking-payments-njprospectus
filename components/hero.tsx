"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useRef } from "react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A100FF]/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#A100FF]/20 rounded-full blur-[128px] opacity-50" />
      <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-[#A100FF]/15 rounded-full blur-[100px] opacity-40" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            data-animate
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A100FF]/10 border border-[#A100FF]/20 mb-8 opacity-0 duration-700"
          >
            <span className="w-2 h-2 rounded-full bg-[#A100FF] animate-pulse" />
            <span className="text-sm text-[#A100FF] font-medium tracking-wide">
              S&C Banking · UK & Ireland · 2026
            </span>
          </div>

          {/* Subheadline */}
          <p
            data-animate
            className="text-lg lg:text-xl text-muted-foreground mb-4 opacity-0 duration-700 delay-100"
          >
            Financial services is going through a once-in-a-generation reinvention.
          </p>

          {/* Main headline */}
          <h1
            data-animate
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 opacity-0 duration-700 delay-200"
          >
            <span className="text-balance">This is where that reinvention</span>
            <br />
            <span className="bg-gradient-to-r from-[#A100FF] via-[#A100FF] to-[#c966ff] bg-clip-text text-transparent">
              gets built.
            </span>
          </h1>

          {/* Body text */}
          <p
            data-animate
            className="text-lg lg:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed opacity-0 duration-700 delay-300"
          >
            New cores. New data foundations. New regulatory frameworks. The banks that will 
            define the next decade are making their most consequential decisions right now — 
            and Accenture is at the table for most of them. This prospectus is for experienced 
            professionals considering a move into the practice at Manager or Senior Manager level. 
            It&apos;s meant to give you a clear and honest picture of what we do, how we work, 
            and what a career here looks like.
          </p>

          {/* CTAs */}
          <div
            data-animate
            className="flex flex-col sm:flex-row gap-4 opacity-0 duration-700 delay-500"
          >
            <Button
              size="lg"
              className="bg-[#A100FF] hover:bg-[#A100FF]/90 text-white font-medium px-8 h-12 text-base group"
            >
              Explore the practice
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary text-foreground font-medium px-8 h-12 text-base group"
            >
              <Play className="mr-2 w-4 h-4" />
              View our work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-[#A100FF] animate-bounce" />
        </div>
      </div>
    </section>
  )
}
