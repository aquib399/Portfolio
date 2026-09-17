"use client";

import { portfolio } from "../data/portfolio";
import { IconChevronDown } from "./Icons";
import { SpineTab } from "./SpineTab";
import { useState } from "react";

const data = portfolio.experience;
const personal = portfolio.personal;

export function ExperienceSection() {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section
      id="experience"
      className="border-border bg-background w-full border-b-2 px-4 py-16 transition-colors sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="border-border bg-card flex border-3 shadow-[8px_8px_0px_0px_var(--border)] transition-colors">
          <SpineTab label="WORK EXPERIENCE" theme="background" side="left" />

          <div className="bg-card text-card-foreground relative flex-1 overflow-hidden p-6 sm:p-10 md:p-14">
            <div className="halftone-dots text-card-foreground pointer-events-none absolute inset-0 opacity-15" />

            <div className="relative z-10">
              <div className="border-border mb-10 flex flex-col justify-between gap-3 border-b-2 pb-6 sm:flex-row sm:items-baseline">
                <h2 className="text-card-foreground font-display-wide mt-1 text-3xl leading-none tracking-tight sm:text-5xl">
                  Experience & Career Chronicles
                </h2>
              </div>

              <div className="grid grid-cols-1 items-start gap-8">
                <div className="border-border bg-background border-2 p-5 shadow-[3px_3px_0px_0px_var(--border)]">
                  <span className="text-primary mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
                    {personal.experiencePhilosophy.title}
                  </span>
                  <p className="text-foreground/90 font-mono text-xs leading-relaxed">
                    &quot;{personal.experiencePhilosophy.quote}&quot;
                  </p>
                </div>

                <div className="space-y-6">
                  {data.map((exp, idx) => {
                    const isOpen = openIds.has(exp.id);

                    return (
                      <div
                        key={exp.id}
                        className="group border-border bg-background relative border-2 p-6 transition-all hover:shadow-[4px_4px_0px_0px_var(--primary)] sm:p-8"
                      >
                        {/* Top Bar: clickable toggle */}
                        <button
                          type="button"
                          onClick={() => toggle(exp.id)}
                          aria-expanded={isOpen}
                          aria-controls={`exp-body-${exp.id}`}
                          className="border-border mb-4 flex w-full cursor-pointer flex-wrap items-center justify-between gap-2 border-b-2 pb-3 text-left"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-display-condensed text-primary text-3xl leading-none font-bold sm:text-4xl">
                              {exp.period}
                            </span>
                            <span className="bg-primary text-primary-foreground px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase">
                              {exp.badge}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-muted-foreground font-mono text-xs uppercase">
                              {exp.location} • {exp.type}
                            </span>
                            <IconChevronDown
                              size={24}
                              className={`text-primary shrink-0 transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </button>

                        {/* Role & Company - always visible */}
                        <h3 className="text-foreground font-display-wide mb-1 text-2xl sm:text-3xl">
                          {exp.role}
                        </h3>
                        <p className="text-primary mb-3 font-mono text-xs font-bold tracking-wider uppercase sm:text-sm">
                          {exp.company}
                        </p>
                        <p className="text-foreground/85 font-mono text-xs leading-relaxed sm:text-sm">
                          {exp.description}
                        </p>

                        {/* Collapsible body */}
                        <div
                          id={`exp-body-${exp.id}`}
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="border-border/20 mb-4 space-y-1.5 border-t pt-3">
                              {exp.highlights.map((highlight, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="text-foreground flex items-start gap-2 font-mono text-xs"
                                >
                                  <span className="text-primary font-bold">
                                    ▪
                                  </span>
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-2">
                              {exp.skillsUsed.map((skill) => (
                                <span
                                  key={skill}
                                  className="border-border bg-muted/60 text-foreground border px-2 py-0.5 font-mono text-[10px] uppercase"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
