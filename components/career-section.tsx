"use client";

import { FadeIn } from "@/components/fade-in";

const levels = [
  { 
    title: "Analyst", 
    role: "Delivery foundation",
    desc: "Data gathering, quantitative analysis, modelling, and content production. The quality of analyst output sets the quality ceiling for the entire team." 
  },
  { 
    title: "Consultant", 
    role: "Core workstream contributor",
    desc: "Owns discrete analytical or design workstreams end-to-end. Conducts stakeholder interviews, develops deliverables. The level at which you build a visible banking specialism." 
  },
  { 
    title: "Manager", 
    role: "Workstream lead",
    desc: "Manages day-to-day delivery: structures the work plan, coaches analysts and consultants, synthesises outputs. The pivot point between doing and leading." 
  },
  { 
    title: "Senior Manager", 
    role: "Engagement lead",
    desc: "Day-to-day leadership of the engagement. Primary counterpart to Director/Head of level at the bank. Manages quality, team performance, and the weekly rhythm of delivery." 
  },
  { 
    title: "Managing Director", 
    role: "Account / engagement sponsor",
    desc: "Owns the senior client relationship — typically ExCo or MD level at the bank. Shapes the commercial agreement, provides strategic oversight. Usually spans multiple concurrent engagements." 
  },
];

export function CareerSection() {
  return (
    <section id="career" className="pt-12 lg:pt-16 pb-6 lg:pb-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 lg:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Your Career
          </p>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              A clear and meritocratic path.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Teams are multi-disciplinary by design. We are augmented as needed with data scientists, technology architects, regulatory SMEs, and change management practitioners — all drawn from across Accenture&apos;s broader FS capability.
            </p>
          </div>
        </div>

        {/* Career levels - horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {levels.map((level, index) => (
            <FadeIn key={level.title} delay={index * 100}>
              <div className="relative group">
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-1 transition-colors duration-300 group-hover:text-[#A100FF]">
                  {level.title}
                </h3>
                
                {/* Role */}
                <p className="text-sm font-medium text-[#A100FF] mb-3">{level.role}</p>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">{level.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-10 lg:mt-14 pt-10 border-t border-border">
          <div className="max-w-4xl">
            <FadeIn direction="right">
              <div className="flex items-center gap-8 lg:gap-12">
                <div className="flex-1">
                  <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
                    &quot;The system is meritocratic. The best people advance ahead of
                    their peer group, and that&apos;s consistent across the practice.&quot;
                  </blockquote>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <img 
                    src="/images/anna-mckinven.png" 
                    alt="Anna McKinven"
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover"
                  />
                  <p className="mt-4 text-center">
                    <span className="text-lg font-semibold text-[#A100FF] block">Anna McKinven</span>
                    <span className="text-sm text-[#A100FF]">UK Banking Practice Leadership</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
