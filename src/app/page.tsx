import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MissionVision } from "@/components/sections/MissionVision";
import { Menu } from "@/components/sections/Menu";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MissionVision />
      <Menu />
      <Location />
      <Contact />
    </>
  );
}
