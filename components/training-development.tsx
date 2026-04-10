"use client";

import { FadeIn } from "@/components/fade-in";

export function TrainingDevelopment() {
  return (
    <section id="training" className="pt-12 lg:pt-16 pb-6 lg:pb-8 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div>
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Growth
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground max-w-3xl leading-tight">
              Training & Development
            </h2>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
