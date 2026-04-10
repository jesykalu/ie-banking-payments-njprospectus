"use client";

const roles = [
  {
    level: "Manager",
    years: "~3-4 years",
    highlight: false,
    responsibilities: [
      "Leading delivery teams on UK banking mandates",
      "Managing client relationships at working level",
      "Structuring work plans & coaching juniors",
      "Contributing to proposals and BD",
    ],
  },
  {
    level: "Senior Manager",
    years: "~3-5 years",
    highlight: true,
    badge: "Most common entry point",
    responsibilities: [
      "Day-to-day engagement leadership",
      "Primary client counterpart at Director level",
      "C-suite interaction",
      "Shaping proposals & deepening relationships",
    ],
  },
  {
    level: "Managing Director",
    years: "Partnership",
    highlight: false,
    responsibilities: [
      "Account ownership and P&L accountability",
      "Client relationships at ExCo level",
      "Firm and market leadership",
      "Equity and long-term incentives",
    ],
  },
];

export function CareerLadder() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Entry Points
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground max-w-2xl leading-tight">
            Where experienced hires come in.
          </h2>
        </div>

        {/* Roles */}
        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {roles.map((role) => (
            <div
              key={role.level}
              className={`relative p-8 lg:p-10 ${
                role.highlight ? "bg-foreground text-background" : "bg-white"
              }`}
            >
              {/* Badge */}
              {role.badge && (
                <span className="absolute top-4 right-4 text-xs px-3 py-1 bg-[#A100FF] text-white">
                  {role.badge}
                </span>
              )}

              <p
                className={`text-sm font-medium mb-2 ${
                  role.highlight ? "text-[#A100FF]" : "text-[#A100FF]"
                }`}
              >
                {role.years}
              </p>
              <h3
                className={`text-2xl lg:text-3xl font-bold mb-6 ${
                  role.highlight ? "text-background" : "text-foreground"
                }`}
              >
                {role.level}
              </h3>

              <ul className="space-y-3">
                {role.responsibilities.map((resp) => (
                  <li
                    key={resp}
                    className={`text-sm flex items-start gap-3 ${
                      role.highlight
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span
                      className={`w-1 h-1 rounded-full mt-2 shrink-0 ${
                        role.highlight ? "bg-[#A100FF]" : "bg-[#A100FF]"
                      }`}
                    />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
