"use client";
import { FishLeftSVG, FishRightSVG } from "@/lib/asset";
import CurvedText from "./curved-text";
import ContactButton from "./contact-button";

export default function Footer() {
  return (
    <footer className="relative min-h-[20rem] w-full">
      <hr className="mx-auto my-5 w-2/3 rounded-full opacity-30 md:my-8" />
      <div className="text-center">
        <CurvedText fontSize={32} arcHeight={80}>
          Have a project in mind?
        </CurvedText>
        <ContactButton className="px-8 py-7 text-2xl" text="Yes" />
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
