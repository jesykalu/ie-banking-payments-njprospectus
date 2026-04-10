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
    <section className="py-8 border-y border-border bg-secondary/30 overflow-hidden">
      <div className="flex items-center">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground px-6 lg:px-8 shrink-0">
          Our Clients
        </span>
        <div className="flex animate-scroll">
          {[...clients, ...clients].map((client, index) => (
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
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
