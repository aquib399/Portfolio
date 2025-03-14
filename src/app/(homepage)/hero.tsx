"use client";
import { MoonIconSVG, PROFILE_1, SunIconSVG } from "@/lib/asset";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function HomepageHero() {
  const { setTheme } = useTheme();

  return (
    <section className="relative w-full px-3">
      {/* Theme buttons */}
      <>
        <button
          type="button"
          onClick={() => setTheme("light")}
          className="absolute top-0 left-0 cursor-pointer overflow-hidden rounded-br-[12vw]"
        >
          <SunIconSVG className="fill-foreground hover:fill-background w-[27vw] transition-colors duration-150 sm:w-[16vw]" />
        </button>
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className="absolute top-0 right-0 cursor-pointer overflow-hidden rounded-bl-[12vw]"
        >
          <MoonIconSVG className="fill-foreground hover:fill-background w-[27vw] transition-colors duration-150 sm:w-[16vw]" />
        </button>
      </>
      {/* AA Center text */}
      <div className="relative flex justify-center">
        <div className="bg-foreground text-background absolute -top-[2rem] size-16 rotate-45">
          <p className="font-paytoneOne absolute right-2 bottom-2 -rotate-45 text-xl">
            AA
          </p>
        </div>
      </div>

      {/* Hero text */}
      <div className="flex flex-col items-center justify-center gap-[3vh] pt-16">
        <p className="text-sm">Oh, hey! You found me. I&apos;m:</p>
        <h1 className="font-rye space-x-[0.5vw] text-4xl uppercase sm:text-[5.7vw]">
          <span>AQUIB</span>
          <span className="rounded-[1vw] border-[0.1vw] px-[1vw]">ALAM</span>
        </h1>
      </div>

      {/* Curved Text and image*/}
      <div className="relative mt-4 flex w-full items-center justify-center pb-24">
        <svg width="270" height="180" viewBox="0 0 400 200">
          <defs>
            <path
              id="curvePath"
              d="M 50,180 A 120,120 0 0,1 350,180"
              fill="transparent"
            />
          </defs>

          <text
            textAnchor="middle"
            className="font-rye fill-foreground text-3xl"
          >
            <textPath href="#curvePath" startOffset="50%">
              FULLSTACK DEVELOPER
            </textPath>
          </text>
        </svg>
        <Image
          src={PROFILE_1}
          alt="Aquib Alam"
          width={1080}
          height={1080}
          quality={100}
          className="absolute top-12 size-48 rounded-full object-cover"
        />
      </div>

      {/* Contact */}
      <div className="custom-shadow relative mx-auto flex max-w-xs flex-col items-center gap-2 rounded-md border p-[30px_8px_25px]">
        <div className="bg-background absolute -top-3.5 w-full max-w-36 rounded border px-2 py-1 text-center text-[10px] uppercase">
          Working 🤝 Together
        </div>
        <p>Let&apos;s Work Together!</p>
        <Button className="font-paytoneOne custom-shadow-button cursor-pointer rounded uppercase">
          Contact
        </Button>
      </div>
    </section>
  );
}
