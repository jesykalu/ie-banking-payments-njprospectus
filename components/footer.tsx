"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#A100FF] font-bold">{">"}</span>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground">
                  Accenture UKI Banking Practice
                </span>
                <span className="text-xs text-muted-foreground italic">
                  Candidate Prospectus
                </span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="lg:text-right">
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
