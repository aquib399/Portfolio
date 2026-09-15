import { IconGraduationCap, IconSparkles } from "./Icons";
import { EDUCATION_HISTORY } from "../data/portfolio";
import { SpineTab } from "./SpineTab";
import { cn } from "@/lib/utils";

export function EducationSection() {
  return (
    <section
      id="education"
      className="border-border bg-background w-full border-b-2 px-4 py-16 transition-colors sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="border-border bg-card flex border-3 shadow-[8px_8px_0px_0px_var(--primary)] transition-colors">
          {/* Vertical Spine Tab */}
          <SpineTab label="EDUCATIONAL BACKGROUND" theme="cream" side="left" />

          {/* Main Education Body */}
          <div className="bg-retro-dark text-foreground relative flex-1 overflow-hidden p-6 sm:p-10 md:p-14">
            {/* Celestial Starry Night Background Pattern */}
            <div className="halftone-dots text-foreground pointer-events-none absolute inset-0 opacity-20" />

            {/* Ambient Cosmic Glow */}
            <div className="bg-primary/15 pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="border-border/40 mb-12 flex flex-col justify-between gap-3 border-b-2 pb-6 sm:flex-row sm:items-baseline">
                <div>
                  <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
                    SECTION 03 // ACADEMIC FOUNDATION & SCIENTIFIC RIGOR
                  </span>
                  <h2 className="text-foreground font-display-wide mt-1 text-3xl leading-none tracking-tight sm:text-5xl">
                    EDUCATIONAL TIMELINE
                  </h2>
                </div>
                <div className="text-muted-foreground flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
                  <IconSparkles size={14} className="text-primary" />
                  <span>CELESTIAL ORBIT ARCHITECTURE</span>
                </div>
              </div>

              {/* Constellation Orbit Graphic Timeline */}
              <div className="relative">
                {/* SVG Orbit Lines Connecting Nodes */}
                <div className="from-primary via-border/50 to-primary/20 absolute top-0 bottom-0 left-6 hidden w-1 bg-gradient-to-b sm:block md:left-12" />

                <div className="space-y-12">
                  {EDUCATION_HISTORY.map((edu, idx) => (
                    <div
                      key={edu.id}
                      className="group relative sm:pl-24 md:pl-28"
                    >
                      {/* Planetary Node Orb */}
                      <div className="border-border bg-card text-foreground group-hover:border-primary absolute top-0 left-0 z-10 hidden h-12 w-12 items-center justify-center rounded-full border-2 font-mono text-xs font-bold shadow-[0_0_15px_rgba(229,56,38,0.4)] transition-all group-hover:scale-110 sm:flex md:left-6">
                        <IconGraduationCap size={20} className="text-primary" />
                      </div>

                      {/* Content Card */}
                      <div className="border-border/40 bg-card/80 hover:border-primary relative border-2 p-6 shadow-[3px_3px_0px_0px_var(--border)] transition-colors sm:p-8">
                        {/* Period Badge & Label */}
                        <div className="border-border/30 mb-4 flex flex-wrap items-center justify-between gap-3 border-b pb-4">
                          <div className="flex items-center gap-2">
                            <span className="font-display-condensed text-primary text-3xl font-bold tracking-wider sm:text-4xl">
                              {edu.period}
                            </span>
                            {edu.badge && (
                              <span className="bg-primary text-primary-foreground px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                                {edu.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                            {edu.location}
                          </span>
                        </div>

                        {/* Degree & Institution */}
                        <h3 className="text-card-foreground font-display-wide mb-1 text-2xl sm:text-3xl">
                          {edu.institution}
                        </h3>
                        <p className="text-primary mb-4 font-mono text-sm font-bold tracking-wider uppercase">
                          {edu.degree} — {edu.field}
                        </p>

                        {/* Achievements */}
                        {edu.achievements && edu.achievements.length > 0 && (
                          <div className="border-border/20 text-card-foreground/80 space-y-2 border-t pt-3 font-mono text-xs">
                            {edu.achievements.map((item, aIdx) => (
                              <div
                                key={aIdx}
                                className="flex items-start gap-2"
                              >
                                <span className="text-primary font-bold">
                                  ▪
                                </span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Index Corner Tag */}
                        <div className="text-muted-foreground absolute top-2 right-2 font-mono text-[10px]">
                          NODE 0{idx + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Orbital Inscription */}
              <div className="border-border/30 text-muted-foreground mt-12 flex flex-col items-center justify-between gap-2 border-t pt-6 font-mono text-xs tracking-widest uppercase sm:flex-row">
                <span>SYSTEM NODE: ACADEMIC CREDENTIALS</span>
                <span>DISCIPLINED PROBLEM SOLVING // FIRST PRINCIPLES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
