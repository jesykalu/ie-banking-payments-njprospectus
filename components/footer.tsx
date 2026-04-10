"use client"

const footerLinks = {
  practice: [
    { label: "About Accenture UK&I", href: "#about" },
    { label: "The Banking Practice", href: "#practice" },
    { label: "Our Work", href: "#work" },
  ],
  career: [
    { label: "Life in the Practice", href: "#life" },
    { label: "Your Career", href: "#career" },
    { label: "Why Join Us", href: "#why-join" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-white to-[#A100FF]/[0.03]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="text-lg font-semibold text-foreground">
                Accenture S&C Banking
              </span>
              <span className="block text-sm text-muted-foreground mt-1">
                UK & Ireland
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The banking practice for the work that matters most.
            </p>
          </div>

          {/* Practice links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Practice
            </h4>
            <ul className="space-y-3">
              {footerLinks.practice.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[#A100FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Career links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Career
            </h4>
            <ul className="space-y-3">
              {footerLinks.career.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[#A100FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[#A100FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            April 2026 · For discussion purposes only
          </p>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#A100FF]" />
            <span className="text-xs text-muted-foreground">
              Accenture Strategy & Consulting
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
