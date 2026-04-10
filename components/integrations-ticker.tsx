"use client"

const clients = [
  "Lloyds Banking Group",
  "NatWest Group",
  "Barclays",
  "HSBC",
  "Santander UK",
  "Nationwide",
  "Bank of England",
  "Pay.UK",
  "PRA",
  "FCA",
]

const platforms = [
  "Thought Machine",
  "Mambu",
  "AWS",
  "Azure",
  "GCP",
  "Accenture Song",
  "AI Refinery",
  "FinForge",
]

export function IntegrationsTicker() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <span className="inline-block text-sm text-[#A100FF] font-medium tracking-wide uppercase mb-4">
          Clients & ecosystem
        </span>
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
          Works with everything that matters in UK banking.
        </h2>
      </div>

      {/* Clients row */}
      <div className="relative mb-6 overflow-hidden">
        <div className="flex animate-scroll-left">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={`client-${index}`}
              className="shrink-0 mx-2"
            >
              <div className="px-6 py-3 rounded-full border border-border bg-white shadow-sm hover:border-[#A100FF]/30 hover:shadow-md transition-all duration-300">
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>

      {/* Platforms row */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-right">
          {[...platforms, ...platforms, ...platforms].map((platform, index) => (
            <div
              key={`platform-${index}`}
              className="shrink-0 mx-2"
            >
              <div className="px-6 py-3 rounded-full border border-[#A100FF]/30 bg-[#A100FF]/5 shadow-sm hover:border-[#A100FF]/50 hover:shadow-md transition-all duration-300">
                <span className="text-sm font-medium text-[#A100FF] whitespace-nowrap">
                  {platform}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 35s linear infinite;
        }
      `}</style>
    </section>
  )
}
