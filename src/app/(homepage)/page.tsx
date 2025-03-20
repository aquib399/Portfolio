import Skills from "@/components/skills";
import HomepageHero from "./hero";
import WhoAmI from "./who-am-i";

export default function Home() {
  return (
    <main>
      <HomepageHero />
      <WhoAmI />
      <Skills />

      {/* <div className="h-[500rem] w-full bg-gradient-to-b from-pink-500 via-yellow-400 to-red-600"></div> */}
      <div className="mt-40 flex flex-col items-center justify-center"></div>
    </main>
  );
}
