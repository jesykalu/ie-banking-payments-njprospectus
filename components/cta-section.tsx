"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 lg:py-40 bg-[#0a0a0a]">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">
            Join Us
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Let there be change.
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Accenture is at the centre of UK banking's transformation. There's no better place to be.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#A100FF] hover:bg-[#8a00db] text-white rounded-none px-8 py-6 text-sm font-semibold">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <p className="text-sm text-white/40 mt-8">
            For experienced professionals at Manager and Senior Manager level
          </p>
        </div>
      </div>
    </section>
  );
}
