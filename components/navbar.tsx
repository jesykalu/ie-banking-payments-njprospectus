"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, Show } from "@clerk/nextjs";
const navLinks = [
  { label: "What We Do", href: "#capabilities" },
  { label: "How We Work", href: "#work" },
  { label: "Your Career", href: "#career" },
  { label: "Our Work", href: "#our-work" },
  { label: "Why Join", href: "#join" },
  { label: "Diversity & Inclusion", href: "#diversity" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#A100FF] font-bold text-lg">{">"}</span>
            <span className="font-semibold text-foreground tracking-tight">
              Accenture Banking
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 underline-animation"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 text-sm">
                  Register Interest
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 text-sm">
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <UserButton afterSignOutUrl="/" />
            </Show>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Show when="signed-out">
              <div className="flex flex-col gap-3 mt-4">
                <SignInButton mode="modal">
                  <Button variant="outline" className="w-full rounded-full">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full">
                    Register Interest
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </SignUpButton>
              </div>
            </Show>
            <Show when="signed-in">
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <UserButton afterSignOutUrl="/" />
              </div>
            </Show>
          </div>
        </div>
      )}
    </nav>
  );
}
