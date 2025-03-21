"use client";
import SlideUpAnimation from "@/components/slide-up-animation";
import MultiFlipText from "@/components/multi-flip-text";
import RollAnimation from "@/components/roll-animation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

export default function SkillsShowcase() {
  return (
    <>
      <MobileTabSkills className="md:hidden" />
      <DesktopSkills className="hiddens md:block" />
    </>
  );
}

function MobileTabSkills({ className = "" }) {
  return (
    <section className={cn("px-4 py-12", className)}>
      <h2 className="mb-8 text-center text-3xl font-bold">Technical Skills</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {techSkills.map((skill) => (
          <div
            key={skill.text}
            className="border-foreground/20 bg-background hover:border-foreground/50 flex h-16 items-center justify-center rounded-lg border p-4 text-center shadow-sm transition-all hover:scale-105"
          >
            {skill.text}
          </div>
        ))}
      </div>
    </section>
  );
}

function DesktopSkills({ className = "" }) {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const section = sectionRef.current;

    if (!horizontal || !section || !triggerRef.current) return;

    let horizontalWidth = horizontal.scrollWidth;

    const speedFactor = 2.5;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalWidth * (1 / speedFactor)}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: false,
      },
    });

    tl.fromTo(
      horizontal,
      {
        x: window.innerWidth * 0.95,
      },
      {
        x: -horizontalWidth + window.innerWidth * 0.5,
        ease: "none",
      },
    );

    const handleResize = () => {
      horizontalWidth = horizontal.scrollWidth;
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn("border-y-foreground relative h-auto", className)}
    >
      <div ref={triggerRef}>
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          <div className="relative w-full">
            <div ref={horizontalRef} className="flex items-center">
              <div className="flex flex-nowrap gap-52">
                {techSkills.map((skill, index) => {
                  const AnimationComponent =
                    index % 3 === 0
                      ? SlideUpAnimation
                      : index % 3 === 1
                        ? MultiFlipText
                        : RollAnimation;

                  return (
                    <AnimationComponent
                      text={skill.text}
                      key={skill.text}
                      holdDuration={3.5}
                      className="text-7xl lg:text-8xl xl:text-9xl"
                    />
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

const techSkills = [
  { text: "HTML" },
  { text: "CSS" },
  { text: "JavaScript" },
  { text: "TypeScript" },
  { text: "Tailwind-CSS" },
  { text: "Shadcn.UI" },
  { text: "Material.UI" },
  { text: "Styled" },
  { text: "Chakra.UI" },
  { text: "Framer-Motion" },
  { text: "G.S.A.P" },

  { text: "Tanstack Query" },
  { text: "Redux" },
  { text: "Jotai" },
  { text: "Zustand" },

  { text: "Node.js" },
  { text: "Express.js" },
  { text: "React.js" },
  { text: "Next.js" },

  { text: "GIT" },
  { text: "GitHub" },
  { text: "Docker" },

  { text: "Lucia-Auth" },
  { text: "Clerk" },
  { text: "Next-Auth" },
  { text: "0Auth" },
  { text: "Better-Auth" },
  { text: "Arctic" },

  { text: "Jest" },
  { text: "Mocha" },
  { text: "Postman" },

  { text: "REST APIs" },
  { text: "Stripe" },

  { text: "Socket.io" },
  { text: "Postgres" },
  { text: "MongoDB" },
  { text: "Prisma" },
  { text: "Drizzle" },
  { text: "Redis" },

  { text: "Vercel" },
  { text: "AWS" },
  { text: "Cloudinary" },
  { text: "Google-Search-Console" },

  { text: "C" },
  { text: "C++" },
  { text: "Java" },
  { text: "Python" },
  { text: "Rust" },
  { text: "Go" },
];
