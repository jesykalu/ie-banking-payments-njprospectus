"use client";

export function PerformanceSection() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Performance
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              How performance works.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Accenture runs a structured, bi-annual performance process. Each cycle, 
              you&apos;re evaluated across client delivery, practice contribution, and 
              development. Everyone is assigned a People Lead — a senior advocate 
              who represents you in calibration.
            </p>

            {/* People Lead callout */}
            <div className="p-6 border-l-2 border-[#A100FF] bg-white">
              <p className="text-foreground font-medium mb-2">Your People Lead</p>
              <p className="text-sm text-muted-foreground">
                A senior advocate who knows your work, represents you in calibration 
                meetings, and helps you build the case for progression.
              </p>
            </div>
          </div>

          {/* Right: Cycles */}
          <div className="space-y-6">
            <div className="p-8 bg-white border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">Cycle 1</h3>
                <span className="text-sm text-[#A100FF] font-medium">
                  Aug - Dec
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mid-year calibration. Your People Lead presents your performance 
                across client delivery and practice contribution.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-3 py-1 bg-secondary text-muted-foreground">
                  Promotion consideration
                </span>
                <span className="text-xs px-3 py-1 bg-secondary text-muted-foreground">
                  Bonus
                </span>
              </div>
            </div>

            <div className="p-8 bg-white border border-[#A100FF]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">Cycle 2</h3>
                <span className="text-sm text-[#A100FF] font-medium">
                  Mar - May
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Year-end calibration. The primary promotion window. The most 
                significant performance conversation of the year.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-[#A100FF]/10 text-[#A100FF]">
                  Primary promotion window
                </span>
                <span className="text-xs px-3 py-1 bg-secondary text-muted-foreground">
                  Compensation Review
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
