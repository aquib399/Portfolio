"use client";
import { MoonIconSVG, SunIconSVG } from "@/lib/asset";
import { useTheme } from "next-themes";

export default function HomepageHero() {
  const { setTheme } = useTheme();

  return (
    <section className="relative min-h-[200vh] w-full">
      <button
        type="button"
        onClick={() => setTheme("light")}
        className="absolute top-0 left-0 cursor-pointer overflow-hidden rounded-br-[12vw]"
      >
        <SunIconSVG className="fill-foreground hover:fill-background w-[16vw] transition-colors duration-150" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className="absolute top-0 right-0 cursor-pointer overflow-hidden rounded-bl-[12vw]"
      >
        <MoonIconSVG className="fill-foreground hover:fill-background w-[16vw] transition-colors duration-150" />
      </button>

      <div className="relative flex justify-center">
        <div className="bg-foreground text-background absolute -top-[2.5vw] size-[3.8vw] rotate-45 p-[0.2vw]">
          <p className="font-paytoneOne absolute right-[0.37vw] bottom-[0.3vw] -rotate-45 text-[1vw]">
            AA
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-[3vh] pt-[7vh]">
        <p className="uppercase">The Official Portfolio</p>
        <h1 className="font-rye text-4xl uppercase sm:text-[5.7vw] space-x-[0.5vw]">
          <span>AQUIB</span>
          <span className="border-[0.1vw] px-[1vw] rounded-[1vw]">ALAM</span>
        </h1>
      </div>
    </section>
  );
}
