"use client";

import { navigation } from "../data/navigation";
import { ToggleTheme } from "./theme-toggle";
import { portfolio } from "@/data/portfolio";
import { useState } from "react";
import Link from "next/link";

const data = portfolio.personal;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-border bg-background/95 sticky top-0 z-50 border-b-2 backdrop-blur-sm transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between md:h-16">
          {/* Logo & Live Status */}
          <div className="flex min-w-0 items-center gap-3">
            <Link href="/" className="group flex min-w-0 items-center gap-2">
              <span className="bg-primary h-2.5 w-2.5 shrink-0 animate-pulse rounded-full" />

              <span className="text-foreground group-hover:text-primary font-display-wide truncate text-lg tracking-tight transition-colors md:text-xl">
                {data.name}
              </span>
            </Link>

            <span className="border-border/40 text-muted-foreground hidden shrink-0 border-l pl-2 font-mono text-xs tracking-wider whitespace-nowrap uppercase 2xl:inline-block">
              {data.locationCode} • {data.role}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex xl:gap-2 2xl:gap-3">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-foreground hover:bg-foreground/5 hover:text-primary flex shrink-0 items-center gap-1.5 rounded px-2 py-1.5 font-mono text-xs tracking-wider whitespace-nowrap uppercase transition-all xl:px-2.5"
              >
                <span className="text-primary font-bold">{item.number}</span>

                <span>{item.title}</span>
              </a>
            ))}

            {/* Theme Toggle */}
            <ToggleTheme className="ml-1 shrink-0 xl:ml-2" />

            {/* CTA */}
            <a
              href="#contact"
              className="font-display-condensed border-border bg-primary text-primary-foreground hover:bg-foreground hover:text-background ml-1 shrink-0 border-2 px-3 py-1.5 text-xs tracking-wider whitespace-nowrap shadow-[2px_2px_0px_0px_var(--border)] transition-all active:translate-x-0.5 active:translate-y-0.5 xl:ml-2"
            >
              LET&apos;S TALK
            </a>
          </nav>

          {/* Mobile / Tablet Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ToggleTheme />

            <a
              href="#contact"
              className="font-display-condensed border-border bg-primary text-primary-foreground border-2 px-2.5 py-1 text-[11px] tracking-wider whitespace-nowrap"
            >
              HIRE ME
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle Navigation"
              aria-expanded={mobileMenuOpen}
              className="text-foreground hover:text-primary cursor-pointer p-2 focus:outline-none"
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

      {/* Mobile / Tablet Menu */}
      {mobileMenuOpen && (
        <div className="border-border bg-background space-y-2 border-t-2 px-4 py-4 shadow-lg lg:hidden">
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
