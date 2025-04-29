"use client";
import SlideUpAnimation from "@/components/slide-up-animation";
import MultiFlipText from "@/components/multi-flip-text";
import RollAnimation from "@/components/roll-animation";
import HorizontallScroll from "./horizontal-scroll";
import { cn } from "@/lib/utils";

export default function SkillsShowcase() {
  return (
    <>
      <MobileTabSkills className="md:hidden" />
      <DesktopSkills className="" />
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
  return (
    <HorizontallScroll
      heading={{ text: "TECHNOLOGIES", curveness: 100, fontSize: 40 }}
      className={cn(className)}
    >
      <div className="flex flex-nowrap gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            />
          );
        })}
      </div>
    </HorizontallScroll>
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
  // { text: "GSAP" },

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
  { text: "OAuth" },
  { text: "Better-Auth" },
  { text: "Arctic" },

  { text: "Jest" },
  { text: "Mocha" },
  { text: "Postman" },

  { text: "REST APIs" },
  { text: "Stripe" },

  // { text: "Socket.io" },
  { text: "Postgres" },
  { text: "MongoDB" },
  { text: "Prisma" },
  { text: "Drizzle" },
  { text: "Redis" },

  { text: "Vercel" },
  { text: "AWS" },
  { text: "Search-Console" },

  { text: "C" },
  { text: "C++" },
  { text: "Java" },
  { text: "Python" },
  // { text: "Golang" },
  // { text: "Rust" },
];
