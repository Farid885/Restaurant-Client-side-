import React from "react";
import AboutHero from "./about/AboutHero";
import Sushi from "./about/Sushi";
import Chef from "./about/Chef";
import Manager from "./about/Manager";

function About() {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <Sushi />
      <Chef />
      <Manager />
    </div>
  );
}

export default About;
