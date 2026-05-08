"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export function CTASection() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/events-background.jpg"
          alt=""
          className="w-full h-full object-cover object-[center_70%]"
        />
      </div>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <FadeIn delay={100}>
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Let there be change.
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">
              Accenture is at the centre of UK banking&apos;s transformation. There&apos;s no better place to be.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-[#A100FF] hover:bg-[#8a00db] text-white rounded-none px-8 py-6 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#A100FF]/25"
              >
                <a href="https://www.accenture.com/gb-en/careers/jobsearch" target="_blank" rel="noopener noreferrer">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
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
