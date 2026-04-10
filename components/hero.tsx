"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";

export function Hero() {
  return (
    <section className="relative pt-16 lg:pt-20">
      {/* Hero Image Section - Full bleed */}
      <div className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt="Banking professional"
          fill
          className="object-cover object-top scale-105 animate-[scale-in_1.5s_ease-out_forwards]"
          priority
        />
        {/* Dark overlay for contrast - less transparent */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

        {/* Content on image */}
        <div className="absolute inset-0 flex flex-col justify-end pb-20 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <FadeIn delay={200} duration={800}>
                <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-6 font-medium">
                  Strategy & Consulting / Banking / UK & Ireland
                </p>
              </FadeIn>
              <FadeIn delay={400} duration={800}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                  Where banking
                  <br />
                  meets <span className="text-[#A100FF]">reinvention.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={600} duration={800}>
                <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                  We are strategists, technologists, and industry experts 
                  transforming the future of financial services.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section Below */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Left: Intro text */}
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Our Focus
              </p>
              <p className="text-2xl lg:text-3xl font-medium text-foreground leading-snug">
                Our collection of capabilities spans every stage of the 
                transformation journey.{" "}
                <span className="text-muted-foreground">
                  Explore how we help banks transform.
                </span>
              </p>
            </div>

            {/* Right: CTAs and Stats */}
            <div className="lg:col-span-7 lg:pl-12">
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  asChild
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6 text-sm font-medium"
                >
                  <a href="https://www.accenture.com/gb-en/careers" target="_blank" rel="noopener noreferrer">
                    Explore Opportunities
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { value: "150+", label: "UKI Banking Consultants" },
                  { value: "40+", label: "Banking clients" },
                  { value: "6", label: "Practice areas" },
                ].map((stat, index) => (
                  <FadeIn key={stat.label} delay={index * 100} direction="up">
                    <div className="border-l-2 border-[#A100FF] pl-4 hover-lift">
                      <p className="text-2xl lg:text-3xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                        {stat.label}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
