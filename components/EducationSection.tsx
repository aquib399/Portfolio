import { portfolio } from "../data/portfolio";
import { IconGraduationCap } from "./Icons";
import { SpineTab } from "./SpineTab";
import Image from "next/image";

const data = portfolio.education;

export function EducationSection() {
  return (
    <section
      id="education"
      className="border-border bg-background relative w-full overflow-hidden border-b-2 px-4 py-10 transition-colors sm:px-6 sm:py-16 lg:px-8"
    >
      {/* Background print texture */}
      <div className="halftone-dots text-foreground pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="border-border bg-card flex border-3 shadow-[4px_4px_0px_0px_var(--border)] transition-colors sm:shadow-[8px_8px_0px_0px_var(--border)]">
          {/* Vertical Spine Tab */}
          <SpineTab
            label="EDUCATIONAL BACKGROUND"
            theme="primary"
            side="left"
          />

          {/* Main Education Body */}
          <div className="bg-card text-card-foreground relative flex-1 overflow-hidden p-4 sm:p-8 md:p-14">
            {/* Ambient Cosmic Glow */}
            <div className="bg-primary/15 pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="border-border/40 mb-8 flex flex-col justify-between gap-3 border-b-2 pb-6 sm:mb-12 sm:flex-row sm:items-baseline">
                <h2 className="text-card-foreground font-display-wide mt-1 text-2xl leading-none tracking-tight sm:text-4xl md:text-5xl">
                  EDUCATIONAL TIMELINE
                </h2>
              </div>

              {/* Constellation Orbit Graphic Timeline */}
              <div className="relative">
                {/* SVG Orbit Lines Connecting Nodes */}
                <div className="from-primary via-border/50 to-primary/20 absolute top-0 bottom-0 left-6 hidden w-1 bg-linear-to-b sm:block md:left-12" />

                <div className="space-y-6 sm:space-y-12">
                  {data.map((edu) => (
                    <div
                      key={edu.id}
                      className="group relative sm:pl-24 md:pl-28"
                    >
                      {/* Planetary Node Orb with College Logo */}
                      <div className="border-border bg-card text-foreground group-hover:border-primary absolute top-0 left-0 z-10 hidden h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 p-1.5 shadow-[0_0_15px_rgba(229,56,38,0.3)] transition-all group-hover:scale-110 sm:flex md:left-5">
                        {edu.media?.url ? (
                          <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
                            <Image
                              src={edu.media.url}
                              alt={edu.institution}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <IconGraduationCap
                            size={20}
                            className="text-primary"
                          />
                        )}
                      </div>

                      {/* Content Card */}
                      <div className="border-border/40 bg-card/80 hover:border-primary relative border-2 p-4 shadow-[2px_2px_0px_0px_var(--border)] transition-colors sm:p-8 sm:shadow-[3px_3px_0px_0px_var(--border)]">
                        {/* Period Badge & Label */}
                        <div className="border-border/30 mb-4 flex flex-wrap items-center justify-between gap-3 border-b pb-4">
                          <div className="flex items-center gap-2">
                            <span className="font-display-condensed text-primary text-2xl font-bold tracking-wider sm:text-4xl">
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

                        {/* Degree & Institution with Logo */}
                        <div className="mb-4 flex items-center gap-3.5">
                          {edu.media?.url && (
                            <div className="border-border relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 bg-white shadow-sm sm:h-12 sm:w-12">
                              <Image
                                src={edu.media.url}
                                alt={edu.institution}
                                fill
                                sizes="48px"
                                className="object-cover"
                              />
                            </div>
                          )}
                          <div>
                            <h3 className="text-card-foreground font-display-wide text-xl leading-snug sm:text-3xl">
                              {edu.institution}
                            </h3>
                            <p className="text-primary mt-1 font-mono text-xs font-bold tracking-wider uppercase sm:text-sm">
                              {edu.degree} — {edu.field}
                            </p>
                          </div>
                        </div>

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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
