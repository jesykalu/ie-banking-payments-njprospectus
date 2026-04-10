"use client"

const stats = [
  { value: "~150", label: "Banking S&C practitioners" },
  { value: "22", label: "FT gold ratings incl. financial services" },
  { value: "£150m+", label: "Bank of England RTGS mandate" },
  { value: "$3bn", label: "Global AI investment" },
  { value: "~15,000", label: "Accenture employees across UK&I" },
  { value: "$1bn+", label: "Annual global L&D investment" },
]

export function StatsTicker() {
  return (
    <section className="relative border-y border-border bg-gradient-to-r from-[#A100FF]/5 via-white to-[#A100FF]/5 overflow-hidden py-8">
      <div className="flex animate-scroll">
        {[...stats, ...stats, ...stats].map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-8 whitespace-nowrap"
          >
            <span className="text-2xl lg:text-3xl font-bold text-[#A100FF]">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">
              {stat.label}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-border ml-4" />
          </div>
        ))}
      </div>
      
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
