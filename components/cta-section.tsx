"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-background/50 mb-6">
            Join Us
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-background leading-tight mb-8">
            There is no better seat in UK banking consulting.
          </h2>
          <p className="text-lg text-background/70 leading-relaxed mb-10 max-w-2xl">
            The UK banks that will define the next decade are rebuilding themselves 
            right now. Accenture is shaping that rebuilding. If this sounds like 
            the right next step, we&apos;d like to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#A100FF] hover:bg-[#A100FF]/90 text-white rounded-none px-8 py-6 text-sm font-medium">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="rounded-none px-8 py-6 text-sm font-medium border-background/20 text-background hover:bg-background/10 hover:text-background"
            >
              Download Prospectus
            </Button>
          </div>

          <p className="text-sm text-background/50 mt-8">
            For experienced professionals at Manager and Senior Manager level
          </p>
        </div>
      </div>
    </section>
  );
}
