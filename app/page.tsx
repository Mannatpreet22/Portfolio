import { AppleCardsCarouselDemo } from "@/components/ui/apple-cards-carousel";
import { BackgroundBeamsWithCollisionDemo } from "@/components/ui/background-beams-with-collision";
import Footer from "@/components/ui/footer";
import { SignupFormDemo } from "@/components/ui/getInTouch";
import { SkillCard } from "@/components/ui/skillCard";
import { TimelineDemo } from "@/components/ui/timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050709]">
      <BackgroundBeamsWithCollisionDemo />
      <SkillCard />
      <AppleCardsCarouselDemo />
      {/* <CoverDemo word="Education & Experience"/> */}
      <TimelineDemo />
      {/* <CoverDemo word="Let's get in Touch"/> */}
      <SignupFormDemo />
      <Footer />
    </div>
  );
}