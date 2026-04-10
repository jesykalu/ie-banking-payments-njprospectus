"use client";

const clients = [
  "Barclays",
  "HSBC",
  "Lloyds Banking Group",
  "NatWest",
  "Santander UK",
  "Standard Chartered",
  "Bank of England",
  "Virgin Money",
  "Nationwide",
  "Metro Bank",
];

export function StatsTicker() {
  return (
    <section className="py-8 border-y border-border bg-secondary/30">
      <div className="flex items-center">
        {/* Static "Our Clients" label with background to prevent overlap */}
        <div className="relative z-20 shrink-0 bg-secondary/30 pr-4">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground px-6 lg:px-8 whitespace-nowrap">
            Our Clients
          </span>
          {/* Gradient fade to blend into the scrolling area */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-secondary/30 to-transparent" />
        </div>

        {/* Scrolling clients container */}
        <div className="relative flex-1 overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex items-center gap-8 px-8 whitespace-nowrap"
              >
                <span className="text-sm text-foreground/70 font-medium">
                  {client}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#A100FF]" />
              </div>
            ))}
          </div>
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
