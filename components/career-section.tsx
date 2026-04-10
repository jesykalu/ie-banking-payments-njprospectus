"use client";

import { FadeIn } from "@/components/fade-in";
import { useEffect, useRef, useState } from "react";

const levels = [
  { title: "Analyst", desc: "Foundation building" },
  { title: "Consultant", desc: "Growing expertise" },
  { title: "Manager", desc: "Leading workstreams" },
  { title: "Senior Manager", desc: "Owning relationships" },
  { title: "Managing Director", desc: "Accenture leadership" },
];

export function CareerSection() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on how much of the section is visible
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Start animation when section enters viewport
      if (sectionTop < windowHeight && rect.bottom > 0) {
        const visibleStart = Math.max(0, windowHeight - sectionTop);
        const totalVisible = windowHeight + sectionHeight * 0.5;
        const progressPercent = Math.min(100, (visibleStart / totalVisible) * 100);
        setProgress(progressPercent);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="career" className="py-24 lg:py-32 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Your Career
          </p>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              A clear and meritocratic path.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The career path runs from Analyst through to Managing Director.
              The system is meritocratic — the best people advance ahead of their
              peer group. For experienced hires, entry level is matched to your
              background and track record.
            </p>
          </div>
        </div>

        {/* Career levels - horizontal timeline */}
        <div className="relative">
          {/* Background progress line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-border hidden lg:block" />
          
          {/* Animated progress line */}
          <div 
            className="absolute bottom-0 left-0 h-px bg-[#A100FF] hidden lg:block transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
          
          {/* Animated ball */}
          <div 
            className="absolute bottom-0 -translate-y-1/2 w-4 h-4 rounded-full bg-[#A100FF] hidden lg:block transition-all duration-300 ease-out shadow-lg shadow-[#A100FF]/50"
            style={{ 
              left: `${progress}%`,
              transform: `translateX(-50%) translateY(50%)`,
            }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 pb-8">
            {levels.map((level, index) => {
              const levelProgress = (index / (levels.length - 1)) * 100;
              const isActive = progress >= levelProgress;
              
              return (
                <FadeIn key={level.title} delay={index * 100}>
                  <div className="relative group h-full flex flex-col">
                    {/* Title - fixed height to align */}
                    <h3 className={`text-lg font-semibold transition-colors duration-300 group-hover:text-[#A100FF] min-h-[56px] lg:min-h-[28px] ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {level.title}
                    </h3>
                    
                    {/* Description - fixed height to align */}
                    <p className="text-sm text-muted-foreground min-h-[40px] mb-6">{level.desc}</p>
                    
                    {/* Dot underneath - pushed to bottom */}
                    <div className="mt-auto">
                      <div
                        className={`w-3 h-3 rounded-full hidden lg:block transition-all duration-300 group-hover:scale-150 ${
                          isActive ? "bg-[#A100FF]" : "bg-border"
                        }`}
                      />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Quote with image */}
        <div className="mt-16 lg:mt-24 pt-16 border-t border-border">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
                  &quot;The system is meritocratic. The best people advance ahead of
                  their peer group, and that&apos;s consistent across the practice.&quot;
                </blockquote>
                <p className="text-muted-foreground mt-6">
                  — Anna McKinven - UK Banking Practice Leadership
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={200}>
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] image-zoom">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1131724309-TuaL73iFHpObVS9Ul3FrUEpNfmrBl1.jpg"
                  alt="Professional woman in urban business district looking ahead confidently"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
