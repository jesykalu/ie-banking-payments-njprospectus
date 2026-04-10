"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { GraduationCap, Shield, Cpu, BookOpen } from "lucide-react"

const categories = [
  {
    id: "banking",
    label: "Banking & finance",
    icon: GraduationCap,
    content: {
      title: "Banking & finance",
      description:
        "CFA, ACIB, FRM, and Chartered Management qualifications are actively supported and often funded. These are the credentials that carry weight with UK banking clients, and Accenture backs you in getting them.",
    },
  },
  {
    id: "regulatory",
    label: "UK regulatory expertise",
    icon: Shield,
    content: {
      title: "UK regulatory expertise",
      description:
        "Structured learning on PRA and FCA frameworks, with mentoring from practitioners who have regulatory authority backgrounds. Given the current UK regulatory agenda, this is a genuine differentiator.",
    },
  },
  {
    id: "technology",
    label: "Technology platforms",
    icon: Cpu,
    content: {
      title: "Technology platforms",
      description:
        "Cloud platforms (AWS, Azure, GCP), core banking systems (Thought Machine, Mambu), AI and data qualifications, and Scrum Master certification. The technical credibility to sit alongside architects and engineers as a credible peer.",
    },
  },
  {
    id: "mba",
    label: "MBA pathways",
    icon: BookOpen,
    content: {
      title: "MBA pathways",
      description:
        "Sponsorship arrangements exist, with re-entry at Manager level. LBS and Oxford Saïd are realistic near-term goals for strong performers. Speak to us about eligibility if this matters to you.",
    },
  },
]

export function DevelopmentSection() {
  const [activeCategory, setActiveCategory] = useState("banking")

  const activeContent = categories.find((c) => c.id === activeCategory)?.content

  return (
    <section id="life" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <span className="inline-block text-sm text-[#A100FF] font-medium tracking-wide uppercase mb-4">
            Development
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Qualifications & development.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Accenture invests over $1 billion annually in learning and development 
            globally. In the UK Banking practice, that translates into structured 
            support for the credentials that carry weight in UK financial services.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Category tabs */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300",
                    activeCategory === category.id
                      ? "bg-[#A100FF]/10 border-[#A100FF]/30"
                      : "bg-card/50 border-border hover:border-[#A100FF]/20"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                      activeCategory === category.id
                        ? "bg-[#A100FF] text-white"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    <category.icon className="w-5 h-5" />
                  </div>
                  <span
                    className={cn(
                      "font-medium transition-colors",
                      activeCategory === category.id
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {category.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content panel */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card/50 overflow-hidden">
              {/* Header bar mimicking code editor */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-4 text-xs text-muted-foreground font-mono">
                  development.md
                </span>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {activeContent?.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activeContent?.description}
                </p>
              </div>
            </div>

            {/* All content cards (mobile/alternative view) */}
            <div className="mt-8 space-y-4 lg:hidden">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="p-6 rounded-2xl border border-border bg-card/50"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#A100FF]/10 flex items-center justify-center">
                      <category.icon className="w-4 h-4 text-[#A100FF]" />
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {category.content.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.content.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
