import SlideUpAnimation from "@/components/slide-up-animation";
import RollAnimation from "@/components/roll-animation";
import MultiFlipText from "@/components/multi-flip-text";

export default function TextsPage() {
  return (
    <main className="min-h-[95vh]">
      <div className="">
        <SlideUpAnimation text="Aquib_Alam" holdDuration={1} />
        <SlideUpAnimation text="Next.JS" holdDuration={1} />
        <RollAnimation text="Aquib_Alam" holdDuration={1} />
        <RollAnimation text="Next.JS" holdDuration={1} />
        <MultiFlipText text={"Aquib Alfiya Wakar"} holdDuration={1} />
        <MultiFlipText text={"Shabnam Mehbuba Diwana"} holdDuration={1} />
      </div>
    </main>
  );
}
