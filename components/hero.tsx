"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      {/* White/light gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90" />
      
      {/* Subtle accent gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            data-animate
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A100FF]/10 border border-[#A100FF]/20 mb-8 opacity-0 duration-700"
          >
            <Sparkles className="w-4 h-4 text-[#A100FF]" />
            <span className="text-sm text-[#A100FF] font-semibold tracking-wide">
              Strategy & Consulting Banking Practice
            </span>
          </div>

          {/* Subheadline */}
          <p
            data-animate
            className="text-lg lg:text-xl text-foreground/70 mb-4 opacity-0 duration-700 delay-100 font-medium"
          >
            UK & Ireland Candidate Prospectus 2026
          </p>

          {/* Main headline */}
          <h1
            data-animate
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 opacity-0 duration-700 delay-200"
          >
            <span className="text-balance">Shape the future of</span>
            <br />
            <span className="bg-gradient-to-r from-[#A100FF] to-[#7B00C4] bg-clip-text text-transparent">
              financial services.
            </span>
          </h1>

          {/* Body text */}
          <p
            data-animate
            className="text-lg text-foreground/60 max-w-2xl mb-10 leading-relaxed opacity-0 duration-700 delay-300"
          >
            Join Accenture&apos;s Banking Practice at a pivotal moment. We&apos;re partnering 
            with the UK&apos;s leading financial institutions on their most consequential 
            transformations — from core banking modernisation to regulatory change. 
            This is your opportunity to make a meaningful impact.
          </p>

          {/* CTAs */}
          <div
            data-animate
            className="flex flex-col sm:flex-row gap-4 opacity-0 duration-700 delay-500"
          >
            <Button
              size="lg"
              className="bg-[#A100FF] hover:bg-[#8B00DB] text-white font-semibold px-8 h-14 text-base shadow-lg shadow-[#A100FF]/25 group"
            >
              Explore Opportunities
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 hover:bg-foreground/5 text-foreground font-semibold px-8 h-14 text-base"
            >
              Learn About the Practice
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            data-animate
            className="mt-12 pt-8 border-t border-foreground/10 opacity-0 duration-700 delay-700"
          >
            <p className="text-sm text-foreground/50 mb-4 font-medium uppercase tracking-wider">
              For experienced professionals
            </p>
            <div className="flex flex-wrap gap-6">
              <span className="text-sm text-foreground/70">Manager Level</span>
              <span className="text-foreground/30">|</span>
              <span className="text-sm text-foreground/70">Senior Manager Level</span>
              <span className="text-foreground/30">|</span>
              <span className="text-sm text-foreground/70">London & Regional Offices</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-[#A100FF] animate-bounce" />
        </div>
      </div>
    </section>
  )
}
