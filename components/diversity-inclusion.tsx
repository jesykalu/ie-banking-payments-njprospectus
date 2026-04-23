"use client";

import { useRef, useState, useEffect } from "react";
import { FadeIn } from "@/components/fade-in";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const placeholderEvents = [
  {
    id: 1,
    title: "Event Title Placeholder",
    description: "Brief description of the event goes here. This will be updated with actual event details.",
  },
  {
    id: 2,
    title: "Event Title Placeholder",
    description: "Brief description of the event goes here. This will be updated with actual event details.",
  },
  {
    id: 3,
    title: "Event Title Placeholder",
    description: "Brief description of the event goes here. This will be updated with actual event details.",
  },
  {
    id: 4,
    title: "Event Title Placeholder",
    description: "Brief description of the event goes here. This will be updated with actual event details.",
  },
  {
    id: 5,
    title: "Event Title Placeholder",
    description: "Brief description of the event goes here. This will be updated with actual event details.",
  },
  {
    id: 6,
    title: "Event Title Placeholder",
    description: "Brief description of the event goes here. This will be updated with actual event details.",
  },
];

export function DiversityInclusion() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 380;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      
      // If at the end and scrolling right, loop to start
      if (direction === "right" && !canScrollRight) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } 
      // If at the start and scrolling left, loop to end
      else if (direction === "left" && !canScrollLeft) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } 
      else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section 
      id="diversity" 
      className="py-12 lg:py-16 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 lg:mb-12">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Our Events
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground max-w-2xl leading-tight">
              Connect, Learn & Celebrate
            </h2>
          </FadeIn>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-end gap-3 mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#A100FF] group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#A100FF] group"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Event cards carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {placeholderEvents.map((event, index) => (
            <FadeIn key={event.id} delay={300 + index * 100}>
              <div className="group relative flex-shrink-0 w-[350px] bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:scale-[1.02] snap-start">
                {/* Placeholder image area */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-slate-300/50 flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-slate-400" />
                      </div>
                      <p className="text-sm font-medium text-slate-400">Event Image</p>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#A100FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-[#A100FF] transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A100FF] to-[#7B00CC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
