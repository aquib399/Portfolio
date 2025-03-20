import SlideUpAnimation from "@/components/slide-up-animation";
import RollAnimation from "@/components/roll-animation";
import IntroAnimation from "@/components/intro-animation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative container mx-auto max-w-[1000px] before:absolute before:top-0 before:left-0 before:h-full before:w-[1px] before:bg-[#0d0d0d] before:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-[#0d0d0d] after:content-['']">
        <SlideUpAnimation text="Aquib_Alam" holdDuration={0.1} />
        <SlideUpAnimation text="Next.JS" holdDuration={0.1} />
        <RollAnimation text="Aquib_Alam" holdDuration={0.11} />
        <RollAnimation text="Next.JS" holdDuration={0.1} />
        <IntroAnimation
          sentences={["React", "Gsap", "Text", "Animations"]}
          holdDuration={5}
        />
        <IntroAnimation
          sentences={["Tailwind", "Typescript", "Java", "Python"]}
          holdDuration={5}
        />
      </div>
    </main>
  );
}
