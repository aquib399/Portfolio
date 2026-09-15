import { SKILL_CATEGORIES } from "../data/portfolio";
import { SpineTab } from "./SpineTab";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const visualMotifs = [
    {
      image: "/site/08-ipad-mockup-outro-contact.png",
      caption: "VISUAL INTERFACES & DOM CRAFT",
      columnTitle: ["FRONT", "END", "UI"]
    },
    {
      image: "/site/06-project-b-surreal-eye.png",
      caption: "DATA PIPELINES & SERVICES",
      columnTitle: ["BACK", "END", "APIS"]
    },
    {
      image: "/site/07-project-c-woodcut-textures.png",
      caption: "CONTAINERS, CLOUD & SCALE",
      columnTitle: ["DEV", "OPS", "TOOLS"]
    }
  ];

  return (
    <section
      id="skills"
      className="border-border bg-retro-dark w-full border-b-2 px-4 py-16 transition-colors sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="border-border bg-card flex border-3 shadow-[8px_8px_0px_0px_var(--primary)] transition-colors">
          {/* Vertical Spine Tab */}
          <SpineTab label="TECHNICAL SKILLS" theme="cream" side="left" />

          {/* Main Skills Body */}
          <div className="bg-retro-dark text-foreground relative flex-1 overflow-hidden p-6 sm:p-10 md:p-14">
            {/* Background Texture */}
            <div className="halftone-dots text-foreground pointer-events-none absolute inset-0 opacity-10" />

            <div className="relative z-10">
              {/* Header */}
              <div className="border-border/40 mb-10 flex flex-col justify-between gap-3 border-b-2 pb-6 sm:flex-row sm:items-baseline">
                <div>
                  <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
                    SECTION 02 // TECHNICAL ARSENAL & CAPABILITIES
                  </span>
                  <h2 className="text-foreground font-display-wide mt-1 text-3xl leading-none tracking-tight sm:text-5xl">
                    ENGINEERING DOMAINS
                  </h2>
                </div>
                <div className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                  RIGOROUS SPECIFICATIONS • MODERN STANDARDS
                </div>
              </div>

              {/* 3 Pillars Grid */}
              <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
                {SKILL_CATEGORIES.map((category, index) => {
                  const motif = visualMotifs[index] || visualMotifs[0];

                  return (
                    <div
                      key={category.id}
                      className="group border-border/40 bg-card/60 hover:border-primary flex flex-col justify-between border-2 p-5 shadow-[2px_2px_0px_0px_var(--border)] transition-colors"
                    >
                      <div>
                        {/* Stacked Ultra-Condensed Title */}
                        <div className="border-border/30 mb-4 border-b pb-4">
                          <div className="flex items-start justify-between">
                            <div className="font-display-condensed text-foreground text-4xl leading-none tracking-wider sm:text-5xl">
                              {motif.columnTitle.map((part, i) => (
                                <div
                                  key={i}
                                  className="group-hover:text-primary transition-colors"
                                >
                                  {part}
                                </div>
                              ))}
                            </div>
                            <span className="text-primary font-mono text-xs font-bold">
                              [0{index + 1}]
                            </span>
                          </div>
                          <p className="text-muted-foreground mt-2 font-mono text-[11px] tracking-wider uppercase">
                            {category.subtitle}
                          </p>
                        </div>

                        {/* Inset Framed Artwork Motif */}
                        <div className="border-border/30 relative mb-4 h-36 w-full overflow-hidden border bg-black">
                          <Image
                            src={motif.image}
                            alt={motif.caption}
                            fill
                            className="object-cover object-center grayscale filter transition-all duration-500 group-hover:grayscale-0"
                            sizes="(max-width: 1024px) 100vw, 30vw"
                          />
                          <div className="absolute right-1 bottom-1 border border-white/20 bg-black/80 px-2 py-0.5 font-mono text-[9px] tracking-widest text-white uppercase">
                            {motif.caption}
                          </div>
                        </div>

                        {/* Skills List */}
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

                      <div className="border-border/30 text-muted-foreground mt-6 flex items-center justify-between border-t pt-4 font-mono text-[10px] uppercase">
                        <span>PILLAR 0{index + 1}</span>
                        <span className="text-primary font-bold">
                          PRODUCTION READY
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
