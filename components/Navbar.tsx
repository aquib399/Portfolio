"use client";

import { PERSONAL_INFO, NAVIGATION_SECTIONS } from "../data/portfolio";
import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#111111] bg-[#F4EFEA]/95 backdrop-blur-sm transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between md:h-16">
          {/* Logo & Live Status */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group text-decoration-none flex items-center gap-2"
            >
              <span className="text-lg tracking-tight text-[#111111] transition-colors group-hover:text-[#E53826] md:text-xl">
                {PERSONAL_INFO.name}
              </span>
            </Link>

            <span className="hidden border-l border-[#111111]/30 pl-2 font-mono text-xs tracking-wider text-[#78716c] uppercase lg:inline-block">
              {PERSONAL_INFO.locationCode} • {PERSONAL_INFO.role}
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1 md:flex lg:gap-3">
            {NAVIGATION_SECTIONS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-1 rounded px-2.5 py-1 font-mono text-xs tracking-wider text-[#111111] uppercase transition-all hover:bg-[#111111]/5 hover:text-[#E53826]"
              >
                <span className="font-bold text-[#E53826]">{item.number}</span>
                <span>{item.title}</span>
              </a>
            ))}

            <a
              href="#contact"
              className="font-display-condensed ml-2 border border-[#111111] bg-[#E53826] px-3 py-1.5 text-xs tracking-wider text-white shadow-[2px_2px_0px_0px_#111111] transition-colors hover:bg-[#111111]"
            >
              LET'S TALK
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              className="font-display-condensed border border-[#111111] bg-[#E53826] px-2.5 py-1 text-[11px] tracking-wider text-white"
            >
              HIRE ME
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-[#111111] hover:text-[#E53826] focus:outline-none"
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
        <div className="space-y-2 border-t-2 border-[#111111] bg-[#F4EFEA] px-4 py-4 shadow-lg md:hidden">
          <div className="border-b border-[#111111]/20 pb-2 font-mono text-[11px] text-[#78716c]">
            INDEX NAVIGATION
          </div>
          {NAVIGATION_SECTIONS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between border-b border-[#111111]/10 py-2 font-mono text-sm text-[#111111] hover:text-[#E53826]"
            >
              <span className="font-bold">{item.title}</span>
              <span className="text-xs text-[#E53826]">[{item.number}]</span>
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display-condensed block w-full border border-[#111111] bg-[#E53826] py-2.5 text-center text-lg tracking-widest text-white"
            >
              START A PROJECT
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
