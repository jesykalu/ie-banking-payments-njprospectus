"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#A100FF]/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#A100FF]/10 rounded-full blur-[128px] opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#A100FF]/8 rounded-full blur-[100px] opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
          There is no better seat in{" "}
          <span className="bg-gradient-to-r from-[#A100FF] via-[#A100FF] to-[#c966ff] bg-clip-text text-transparent">
            UK banking consulting.
          </span>
        </h2>

        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          The UK banks that will define the next decade are rebuilding themselves 
          right now. Accenture is shaping that rebuilding — and the people who sit 
          in this practice tend to agree. If this sounds like the right next step, 
          we&apos;d like to hear from you.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-[#A100FF] hover:bg-[#A100FF]/90 text-white font-medium px-8 h-14 text-base group"
          >
            Get in touch
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-secondary text-foreground font-medium px-8 h-14 text-base group"
          >
            <ExternalLink className="mr-2 w-4 h-4" />
            Explore our work
          </Button>
        </div>

        {/* Small print */}
        <p className="text-sm text-muted-foreground">
          For experienced hires at Manager and Senior Manager level.
        </p>
      </div>
    </section>
  )
}
