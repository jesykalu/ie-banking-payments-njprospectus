"use client";

const roles = [
  {
    level: "Managing Director",
    subtitle: "Partnership",
    description:
      "Account ownership and P&L accountability. Client relationships at ExCo level. Firm and market leadership. Equity and long-term incentives.",
  },
  {
    level: "Senior Manager",
    subtitle: "Day-to-day engagement leadership",
    description:
      "Primary client counterpart at Director level. C-suite interaction. Shaping proposals and deepening relationships.",
  },
  {
    level: "Manager",
    subtitle: "Leading delivery teams",
    description:
      "Managing client relationships at working level. Structuring work plans and coaching juniors. Contributing to proposals and business development.",
  },
  {
    level: "Consultant",
    subtitle: "Core workstream contributor",
    description:
      "Owns discrete analytical or design workstreams end-to-end. Conducts stakeholder interviews, develops deliverables. The level at which you build a visible banking specialism.",
  },
  {
    level: "Analyst",
    subtitle: "Delivery foundation",
    description:
      "Data gathering, quantitative analysis, modelling, and content production. The quality of analyst output sets the quality ceiling for the entire team.",
  },
];

export function CareerLadder() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Career Levels
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground max-w-2xl leading-tight">
            The consulting career ladder.
          </h2>
        </div>

        {/* Roles grid */}
        <div className="grid lg:grid-cols-5 gap-px bg-border mb-12">
          {roles.map((role) => (
            <div key={role.level} className="bg-white p-6 lg:p-8">
              <p className="text-xs uppercase tracking-[0.15em] text-[#A100FF] font-medium mb-2">
                {role.subtitle}
              </p>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                {role.level}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        {/* Multi-disciplinary note */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground max-w-4xl leading-relaxed">
            Teams are multi-disciplinary by design. We are augmented as needed
            with data scientists, technology architects, regulatory SMEs, and
            change management practitioners — all drawn from across
            Accenture&apos;s broader FS capability.
          </p>
        </div>
      </div>
    </section>
  );
}
