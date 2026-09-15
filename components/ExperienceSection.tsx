import { portfolio } from "../data/portfolio";
import { IconBriefcase } from "./Icons";
import { SpineTab } from "./SpineTab";
import Image from "next/image";

const data = portfolio.experience;

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-border bg-primary w-full border-b-2 px-4 py-16 transition-colors sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="border-border bg-card flex border-3 shadow-[8px_8px_0px_0px_var(--border)] transition-colors">
          {/* Vertical Spine Tab */}
          <SpineTab label="WORK EXPERIENCE" theme="background" side="left" />

          {/* Main Experience Body */}
          <div className="bg-card text-card-foreground relative flex-1 overflow-hidden p-6 sm:p-10 md:p-14">
            {/* Background Texture */}
            <div className="halftone-dots text-card-foreground pointer-events-none absolute inset-0 opacity-15" />

            <div className="relative z-10">
              {/* Header */}
              <div className="border-border mb-10 flex flex-col justify-between gap-3 border-b-2 pb-6 sm:flex-row sm:items-baseline">
                <div>
                  <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
                    SECTION 04 // PROFESSIONAL TRAJECTORY & IMPACT
                  </span>
                  <h2 className="text-card-foreground font-display-wide mt-1 text-3xl leading-none tracking-tight sm:text-5xl">
                    CAREER CHRONICLES
                  </h2>
                </div>
                <div className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                  ENTERPRISE DELIVERIES • PROVEN EXECUTION
                </div>
              </div>

              {/* Grid: Left Column is Behance Cosmic Linocut Visual, Right Column is Experience Cards */}
              <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
                {/* Left Visual Column (Cosmic Face Motif from Behance Design) */}
                <div className="border-border bg-background flex flex-col justify-between border-2 p-3 shadow-[4px_4px_0px_0px_var(--border)] lg:col-span-4">
                  <div className="border-border/40 relative h-80 w-full overflow-hidden border sm:h-96">
                    <Image
                      src="/site/03-creative-portfolio-hero.png"
                      alt="Work Experience Cosmic Linocut Graphic"
                      fill
                      className="object-cover object-center contrast-125 grayscale filter transition-all duration-700 hover:grayscale-0"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="bg-primary text-primary-foreground absolute top-2 left-2 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase">
                      EXECUTION TRAIL
                    </div>
                  </div>

                  {portfolio.personal.experiencePhilosophy && (
                    <div className="border-border/30 bg-muted/40 mt-4 border p-3">
                      <div className="text-primary mb-1 flex items-center gap-2 font-mono text-xs font-bold uppercase">
                        <IconBriefcase size={16} />
                        <span>
                          {portfolio.personal.experiencePhilosophy.title}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-mono text-[11px] leading-relaxed">
                        "{portfolio.personal.experiencePhilosophy.quote}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Experience Chronology Cards */}
                <div className="space-y-6 lg:col-span-8">
                  {data.map((exp, idx) => (
                    <div
                      key={exp.id}
                      className="group border-border bg-background relative border-2 p-6 transition-all hover:shadow-[4px_4px_0px_0px_var(--primary)] sm:p-8"
                    >
                      {/* Top Bar: Period & Company */}
                      <div className="border-border mb-4 flex flex-wrap items-center justify-between gap-2 border-b-2 pb-3">
                        <div className="flex items-center gap-3">
                          <span className="font-display-condensed text-primary text-3xl leading-none font-bold sm:text-4xl">
                            {exp.period}
                          </span>
                          {exp.badge && (
                            <span className="bg-primary text-primary-foreground px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase">
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-muted-foreground font-mono text-xs uppercase">
                          {exp.location} • {exp.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-foreground font-display-wide mb-1 text-2xl sm:text-3xl">
                        {exp.role}
                      </h3>
                      <p className="text-primary mb-3 font-mono text-xs font-bold tracking-wider uppercase sm:text-sm">
                        {exp.company}
                      </p>

                      <p className="text-foreground/85 mb-4 font-mono text-xs leading-relaxed sm:text-sm">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="border-border/20 mb-4 space-y-1.5 border-t pt-3">
                        {exp.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="text-foreground flex items-start gap-2 font-mono text-xs"
                          >
                            <span className="text-primary font-bold">▪</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Used Badges */}
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

                      {/* Index tag */}
                      <div className="text-muted-foreground absolute top-2 right-2 font-mono text-[10px]">
                        REF 0{idx + 1}
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
