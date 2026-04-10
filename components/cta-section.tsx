"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export function CTASection() {
  return (
    <section className="relative py-16 lg:py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#A100FF]/20 blur-[120px] animate-pulse" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={100}>
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Let there be change.
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Accenture is at the centre of UK banking&apos;s transformation. There&apos;s no better place to be.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#A100FF] hover:bg-[#8a00db] text-white rounded-none px-8 py-6 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#A100FF]/25">
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="text-sm text-white/40 mt-8">
              For experienced professionals at Consultant, Manager and Senior Manager level
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
