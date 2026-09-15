import { portfolio } from "../data/portfolio";
import { SpineTab } from "./SpineTab";
import Image from "next/image";

const data = portfolio.skillCategory;

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-border bg-primary w-full border-b-2 px-4 py-16 transition-colors sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="border-border bg-card flex border-3 shadow-[8px_8px_0px_0px_var(--primary)] transition-colors">
          <SpineTab label="TECHNICAL SKILLS" theme="background" side="left" />

          <div className="bg-card text-card-foreground relative flex-1 overflow-hidden p-6 sm:p-10 md:p-14">
            <div className="halftone-dots text-card-foreground pointer-events-none absolute inset-0 opacity-10" />

            <div className="relative z-10">
              {/* Header */}
              <div className="border-border/40 mb-10 flex flex-col justify-between gap-3 border-b-2 pb-6 sm:flex-row sm:items-baseline">
                <div>
                  <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
                    SECTION 02 // TECHNICAL ARSENAL & CAPABILITIES
                  </span>

                  <h2 className="text-card-foreground font-display-wide mt-1 text-3xl leading-none tracking-tight sm:text-5xl">
                    ENGINEERING DOMAINS
                  </h2>
                </div>

                <div className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                  RIGOROUS SPECIFICATIONS • MODERN STANDARDS
                </div>
              </div>

              {/* Skill Categories */}
              <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
                {data.map((category, index) => (
                  <div
                    key={category.id}
                    className="group border-border/40 bg-card/60 hover:border-primary flex flex-col justify-between border-2 p-5 shadow-[2px_2px_0px_0px_var(--border)] transition-colors"
                  >
                    <div>
                      {/* Category Title */}
                      <div className="border-border/30 mb-4 border-b pb-4">
                        <div className="flex items-start justify-between">
                          <div className="font-display-condensed text-card-foreground text-4xl leading-none tracking-wider sm:text-5xl">
                            {category.stackedTitle.map((part) => (
                              <div
                                key={part}
                                className="group-hover:text-primary transition-colors"
                              >
                                {part}
                              </div>
                            ))}
                          </div>

                          <span className="text-primary font-mono text-xs font-bold">
                            [{String(index + 1).padStart(2, "0")}]
                          </span>
                        </div>

                        <p className="text-muted-foreground mt-2 font-mono text-[11px] tracking-wider uppercase">
                          {category.subtitle}
                        </p>
                      </div>

                      {/* Artwork */}
                      {category.media && (
                        <div className="border-border/30 relative mb-4 h-36 w-full overflow-hidden border bg-black">
                          <Image
                            src={category.media.url}
                            alt={category.media.alt}
                            fill
                            className="object-cover object-center grayscale filter transition-all duration-500 group-hover:grayscale-0"
                            sizes="(max-width: 1024px) 100vw, 30vw"
                          />

                          {category.media.caption && (
                            <div className="absolute right-1 bottom-1 border border-white/20 bg-black/80 px-2 py-0.5 font-mono text-[9px] tracking-widest text-white uppercase">
                              {category.media.caption}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Skills */}
                      <div className="space-y-2.5">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="border-border/20 bg-card hover:border-primary/70 border p-2 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-card-foreground font-mono text-xs font-bold tracking-wide">
                                {skill.name}
                              </span>

                              {skill.level && (
                                <span className="border-primary/40 bg-primary/10 text-primary border px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase">
                                  {skill.level}
                                </span>
                              )}
                            </div>

                            {skill.description && (
                              <p className="text-muted-foreground mt-1 font-mono text-[10px] leading-normal">
                                {skill.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="border-border/30 text-muted-foreground mt-6 flex items-center justify-between border-t pt-4 font-mono text-[10px] uppercase">
                      <span>PILLAR {String(index + 1).padStart(2, "0")}</span>

                      <span className="text-primary font-bold">
                        {category.statusBadge ?? "PRODUCTION READY"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
