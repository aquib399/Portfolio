"use client";

import { navigation } from "../data/navigation";
import { ToggleTheme } from "./theme-toggle";
import { useState } from "react";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";

const data = portfolio.personal;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-border bg-background/95 sticky top-0 z-50 border-b-2 backdrop-blur-sm transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between md:h-16">
          {/* Logo & Live Status */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group text-decoration-none flex items-center gap-2"
            >
              <span className="bg-primary h-2.5 w-2.5 animate-pulse rounded-full" />
              <span className="text-foreground group-hover:text-primary font-display-wide text-lg tracking-tight transition-colors md:text-xl">
                {data.name}
              </span>
            </Link>

            <span className="border-border/40 text-muted-foreground hidden border-l pl-2 font-mono text-xs tracking-wider uppercase lg:inline-block">
              {data.locationCode} • {data.role}
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1 md:flex lg:gap-3">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-foreground hover:bg-foreground/5 hover:text-primary flex items-center gap-1 rounded px-2.5 py-1 font-mono text-xs tracking-wider uppercase transition-all"
              >
                <span className="text-primary font-bold">{item.number}</span>
                <span>{item.title}</span>
              </a>
            ))}

            {/* Dark Mode Theme Toggle */}
            <ToggleTheme className="ml-1" />

            <a
              href="#contact"
              className="font-display-condensed border-border bg-primary text-primary-foreground hover:bg-foreground hover:text-background ml-2 border-2 px-3 py-1.5 text-xs tracking-wider shadow-[2px_2px_0px_0px_var(--border)] transition-all active:translate-x-0.5 active:translate-y-0.5"
            >
              LET'S TALK
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <ToggleTheme />
            <a
              href="#contact"
              className="font-display-condensed border-border bg-primary text-primary-foreground border-2 px-2.5 py-1 text-[11px] tracking-wider"
            >
              HIRE ME
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="text-foreground hover:text-primary cursor-pointer p-2 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-border bg-background space-y-2 border-t-2 px-4 py-4 shadow-lg md:hidden">
          <div className="border-border/20 text-muted-foreground border-b pb-2 font-mono text-[11px]">
            INDEX NAVIGATION
          </div>
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="border-border/15 text-foreground hover:text-primary flex items-center justify-between border-b py-2 font-mono text-sm transition-colors"
            >
              <span className="font-bold">{item.title}</span>
              <span className="text-primary text-xs font-bold">
                [{item.number}]
              </span>
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="border-border bg-primary font-display-condensed text-primary-foreground block w-full border-2 py-2.5 text-center text-lg tracking-widest shadow-[2px_2px_0px_0px_var(--border)]"
            >
              START A PROJECT
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
