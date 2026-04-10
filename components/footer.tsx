"use client";

import Link from "next/link";

const links = {
  practice: [
    { label: "What We Do", href: "#capabilities" },
    { label: "How We Work", href: "#work" },
    { label: "Your Career", href: "#career" },
  ],
  company: [
    { label: "About Accenture", href: "#" },
    { label: "UK&I Operations", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#A100FF] font-bold">{">"}</span>
              <span className="font-semibold text-foreground">
                Accenture Banking
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategy & Consulting
              <br />
              UK & Ireland
            </p>
          </div>

          {/* Practice links */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Practice
            </p>
            <ul className="space-y-3">
              {links.practice.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground hover:text-[#A100FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Company
            </p>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground hover:text-[#A100FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Legal
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-foreground hover:text-[#A100FF] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-foreground hover:text-[#A100FF] transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            2026 Accenture. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Candidate Prospectus - For discussion purposes only
          </p>
        </div>
      </div>
    </footer>
  );
}
