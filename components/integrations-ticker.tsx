"use client";

const clients = [
  "Lloyds Banking Group",
  "NatWest Group",
  "Barclays",
  "HSBC",
  "Santander UK",
  "Nationwide",
  "Bank of England",
  "Pay.UK",
];

const platforms = [
  "Thought Machine",
  "Mambu",
  "AWS",
  "Azure",
  "AI Refinery",
  "FinForge",
  "Accenture Song",
];

export function IntegrationsTicker() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/clients-background.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/75" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-300 mb-4">
          Clients & Ecosystem
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
          Works with everything that<br />matters in UK banking.
        </h2>
      </div>

      {/* Clients row */}
      <div className="relative mb-4 overflow-hidden">
        <div className="flex animate-scroll-left">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={`client-${index}`} className="shrink-0 mx-2">
              <div className="px-6 py-3 border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-medium text-white whitespace-nowrap">
                {client}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900/75 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900/75 to-transparent z-10" />
      </div>

      {/* Platforms row */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-right">
          {[...platforms, ...platforms, ...platforms].map((platform, index) => (
            <div key={`platform-${index}`} className="shrink-0 mx-2">
              <div className="px-6 py-3 border border-[#A100FF]/50 bg-[#A100FF]/20 backdrop-blur-sm text-sm font-medium text-white whitespace-nowrap">
                {platform}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900/75 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900/75 to-transparent z-10" />
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 35s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
