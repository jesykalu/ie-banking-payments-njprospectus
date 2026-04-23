"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#A100FF] font-bold">{">"}</span>
              <div className="flex flex-col">
                <span className="font-semibold text-white">
                  Accenture UKI Banking Practice
                </span>
                <span className="text-xs text-slate-400 italic">
                  Candidate Prospectus
                </span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="lg:text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">
              Legal
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-[#A100FF] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-[#A100FF] transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            2026 Accenture. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Candidate Prospectus - For discussion purposes only
          </p>
        </div>
      </div>
    </footer>
  );
}
