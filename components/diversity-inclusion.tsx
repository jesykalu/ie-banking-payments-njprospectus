"use client";

import { FadeIn } from "@/components/fade-in";
import { Calendar, MapPin } from "lucide-react";

const placeholderEvents = [
  {
    id: 1,
    title: "Event Title Placeholder",
    description: "Brief description of the event goes here. This will be updated with actual event details.",
    date: "Date TBC",
    location: "Location TBC",
  },
  {
    id: 2,
    title: "Event Title Placeholder",
    description: "Brief description of the event goes here. This will be updated with actual event details.",
    date: "Date TBC",
    location: "Location TBC",
  },
  {
    id: 3,
    title: "Event Title Placeholder",
    description: "Brief description of the event goes here. This will be updated with actual event details.",
    date: "Date TBC",
    location: "Location TBC",
  },
  {
    id: 4,
    title: "Event Title Placeholder",
    description: "Brief description of the event goes here. This will be updated with actual event details.",
    date: "Date TBC",
    location: "Location TBC",
  },
  {
    id: 5,
    title: "Event Title Placeholder",
    description: "Brief description of the event goes here. This will be updated with actual event details.",
    date: "Date TBC",
    location: "Location TBC",
  },
  {
    id: 6,
    title: "Event Title Placeholder",
    description: "Brief description of the event goes here. This will be updated with actual event details.",
    date: "Date TBC",
    location: "Location TBC",
  },
];

export function DiversityInclusion() {
  return (
    <section 
      id="diversity" 
      className="relative py-12 lg:py-16"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/936444-xDc48UUQfNl5Ywd8wwC7VLVvPvQTln.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/70" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 lg:mb-12">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300 mb-4">
              Our Events
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-3xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
              Connect, Learn & Celebrate
            </h2>
          </FadeIn>
        </div>

        {/* Event cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {placeholderEvents.map((event, index) => (
            <FadeIn key={event.id} delay={300 + index * 100}>
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:scale-[1.02]">
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
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-[#A100FF]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-[#A100FF]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
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
