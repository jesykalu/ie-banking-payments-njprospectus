"use client";

const levels = [
  { title: "Analyst", years: "~2 years", desc: "Foundation building" },
  { title: "Consultant", years: "~2-3 years", desc: "Growing expertise" },
  { title: "Manager", years: "~3-4 years", desc: "Leading workstreams" },
  { title: "Senior Manager", years: "~3-5 years", desc: "Owning relationships" },
  { title: "Managing Director", years: "Partnership", desc: "Practice leadership" },
];

export function CareerSection() {
  return (
    <section id="career" className="py-24 lg:py-32 bg-white">
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
              The career ladder runs from Analyst through to Managing Director. 
              The system is meritocratic — the best people advance ahead of their 
              peer group. For experienced hires, entry level is matched to your 
              background and track record.
            </p>
          </div>
        </div>

        {/* Career levels - horizontal timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute top-6 left-0 right-0 h-px bg-border hidden lg:block" />
          <div className="absolute top-6 left-0 w-3/4 h-px bg-[#A100FF] hidden lg:block" />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {levels.map((level, index) => (
              <div key={level.title} className="relative">
                {/* Dot */}
                <div
                  className={`w-3 h-3 rounded-full mb-6 hidden lg:block ${
                    index < 4 ? "bg-[#A100FF]" : "bg-border"
                  }`}
                />

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {level.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{level.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 lg:mt-24 pt-16 border-t border-border">
          <blockquote className="text-2xl lg:text-3xl font-medium text-foreground max-w-3xl leading-relaxed">
            &quot;The system is meritocratic. The best people advance ahead of 
            their peer group, and that&apos;s consistent across the practice.&quot;
          </blockquote>
          <p className="text-muted-foreground mt-6">
            — UK Banking Practice Leadership
          </p>
        </div>
      </div>
    </section>
  );
}
