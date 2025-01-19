import { AppleCardsCarouselDemo } from "@/components/ui/apple-cards-carousel";
import { BackgroundBeamsWithCollisionDemo } from "@/components/ui/background-beams-with-collision";
import { CoverDemo } from "@/components/ui/cover";
import { FocusCardsDemo } from "@/components/ui/focus-cards";
import { SignupFormDemo } from "@/components/ui/getInTouch";
import { SkillCard } from "@/components/ui/skillCard";
import { TimelineDemo } from "@/components/ui/timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050709]">
      {/* <NavbarDemo /> */}
      <BackgroundBeamsWithCollisionDemo para="Aspiring Software Developer | Crafting Innovative Solutions with Precision and Passion"/>
      {/* <FloatingDockDemo /> */}
      <CoverDemo word="Skills"/>
      <SkillCard />
      <CoverDemo word="Projects"/>
      {/* <FocusCardsDemo /> */}
      <AppleCardsCarouselDemo />
      <CoverDemo word="Work Experience"/>
      <TimelineDemo />
      <CoverDemo word="Let's get in Touch"/>
      <SignupFormDemo />
    </div>
  );
}