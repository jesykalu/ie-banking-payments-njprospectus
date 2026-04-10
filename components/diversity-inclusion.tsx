"use client";

export function DiversityInclusion() {
  return (
    <section id="diversity" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Our Commitment
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground max-w-2xl leading-tight">
            Diversity & Inclusion
          </h2>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Image 1 - Inclusive workplace */}
          <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1211322739-tbmOYig5Mm6XPUYI6gymd2ZIKhyzLW.jpg"
              alt="Colleagues collaborating in a modern office environment"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 - Work-life balance */}
          <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Row100-Stocksy_txpa83009d9c2q300_OriginalDelivery_3619623-QqK2G8fZhMugO0bNXjqHe6RmcqrgWZ.jpg"
              alt="Parent working from home while caring for child"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Placeholder content */}
        <div className="flex items-center justify-center min-h-[120px] border-2 border-dashed border-muted-foreground/30 rounded-lg">
          <p className="text-xl font-semibold text-red-500">
            CONTENT TBC
          </p>
        </div>
      </div>
    </section>
  );
}
