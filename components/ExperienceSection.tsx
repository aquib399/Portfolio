"use client";

import { portfolio } from "../data/portfolio";
import { IconChevronDown } from "./Icons";
import { SpineTab } from "./SpineTab";
import { useState } from "react";
import Image from "next/image";

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
      className="border-border bg-background relative w-full overflow-hidden border-b-2 px-4 py-10 transition-colors sm:px-6 sm:py-16 lg:px-8"
    >
      {/* Background print texture */}
      <div className="halftone-dots text-foreground pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="border-border bg-card flex border-3 shadow-[4px_4px_0px_0px_var(--border)] transition-colors sm:shadow-[8px_8px_0px_0px_var(--border)]">
          <SpineTab label="WORK EXPERIENCE" theme="primary" side="left" />

          <div className="bg-card text-card-foreground relative flex-1 overflow-hidden p-4 sm:p-8 md:p-14">
            <div className="relative z-10">
              <div className="border-border mb-6 flex flex-col justify-between gap-3 border-b-2 pb-4 sm:mb-10 sm:flex-row sm:items-baseline sm:pb-6">
                <h2 className="text-card-foreground font-display-wide mt-1 text-2xl leading-none tracking-tight sm:text-5xl">
                  Experience & Career Chronicles
                </h2>
              </div>

              <div className="grid grid-cols-1 items-start gap-6 sm:gap-8">
                <div className="border-border bg-muted/30 border-2 p-4 shadow-[3px_3px_0px_0px_var(--border)] sm:p-5">
                  <span className="text-primary mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
                    {personal.experiencePhilosophy.title}
                  </span>
                  <p className="text-card-foreground/90 font-mono text-xs leading-relaxed">
                    &quot;{personal.experiencePhilosophy.quote}&quot;
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {data.map((exp) => {
                    const isOpen = openIds.has(exp.id);

                    return (
                      <div
                        key={exp.id}
                        className="group border-border bg-card relative border-2 p-4 transition-all hover:shadow-[4px_4px_0px_0px_var(--primary)] sm:p-6 md:p-8"
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
                            <span className="font-display-condensed text-primary text-2xl leading-none font-bold sm:text-4xl">
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

                        {/* Role & Company with Logo - always visible */}
                        <div className="mb-3.5 flex items-center gap-3.5 sm:gap-4">
                          {exp.media?.url && (
                            <div className="border-border relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 bg-white shadow-sm sm:h-12 sm:w-12">
                              <Image
                                src={exp.media.url}
                                alt={exp.company}
                                fill
                                sizes="48px"
                                className="object-cover"
                              />
                            </div>
                          )}
                          <div>
                            <h3 className="text-card-foreground font-display-wide text-xl leading-none sm:text-3xl">
                              {exp.role}
                            </h3>
                            <p className="text-primary mt-1 font-mono text-xs font-bold tracking-wider uppercase sm:text-sm">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <p className="text-card-foreground/85 font-mono text-xs leading-relaxed sm:text-sm">
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
                                  className="text-card-foreground flex items-start gap-2 font-mono text-xs"
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
                                  className="border-border bg-muted/60 text-card-foreground border px-2 py-0.5 font-mono text-[10px] uppercase"
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
