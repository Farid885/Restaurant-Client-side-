import React from "react";
import Hero from "./home/HeroSection";
import OurMission from "./home/OurMission";
import Menu from "./home/MenuSection";

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <OurMission />
      <Menu />
    </div>
  );
}
export default Home;
