"use client";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react";
import { FishLeftSVG, FishRightSVG } from "@/lib/asset";
import ContactButton from "./contact-button";
import CurvedText from "./curved-text";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative min-h-[20rem] w-full">
      <div className="mx-auto max-w-xl space-y-4">
        <hr className="my-5 rounded-full opacity-30" />

        <div className="space-y-4 text-center">
          <CurvedText fontSize={32} arcHeight={80}>
            Have a project in mind?
          </CurvedText>
          <ContactButton className="px-8 py-7 text-2xl" text="Yes" />
        </div>

        <div className="space-y-4 text-center">
          <p className="mx-auto w-min text-lg hover:underline md:text-xl">
            <Link href={"matilto:aquibalam399@gmail.com"}>
              aquibalam399@gmail.com
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <LinkedinIcon strokeWidth="1.5" />
          <GithubIcon strokeWidth="1.5" />
          <TwitterIcon strokeWidth="1.5" />
        </div>
      </div>

      <>
        <div className="absolute bottom-0 left-0 cursor-pointer overflow-hidden rounded-tr-[12vw]">
          <FishLeftSVG className="fill-foreground w-[25vw] transition-colors duration-150 hover:fill-[rgba(0,0,0,0)] sm:w-[16vw]" />
        </div>
        <div className="absolute right-0 bottom-0 cursor-pointer overflow-hidden rounded-tl-[12vw]">
          <FishRightSVG className="fill-foreground w-[25vw] transition-colors duration-150 hover:fill-[rgba(0,0,0,0)] sm:w-[16vw]" />
        </div>
      </>
    </footer>
  );
}
