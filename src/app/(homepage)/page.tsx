import Skills from "@/components/skills";
import HomepageHero from "./hero";
import WhoAmI from "./who-am-i";

export default function Home() {
  return (
    <main>
      <HomepageHero />
      <WhoAmI />
      <Skills />

      <div className="h-[500rem] w-full bg-gradient-to-b from-red-500 via-yellow-200 to-blue-800"></div>
    </main>
  );
}
