import { NavbarDemo } from "@/components/Navbar";
import { BackgroundBeamsWithCollisionDemo } from "@/components/ui/background-beams-with-collision";
import { CoverDemo } from "@/components/ui/cover";
import { FloatingDockDemo } from "@/components/ui/floating-dock";
import { SkillCard } from "@/components/ui/skillCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050709]">
      {/* <NavbarDemo /> */}
      <BackgroundBeamsWithCollisionDemo para="Aspiring Software Developer | Crafting Innovative Solutions with Precision and Passion"/>
      {/* <FloatingDockDemo /> */}
      <CoverDemo />
      <SkillCard />
    </div>
  );
}