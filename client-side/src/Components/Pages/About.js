import React from "react";
import AboutHero from "./about/AboutHero";
import Sushi from "./about/Sushi";
import Chef from "./about/Chef";
import Manager from "./about/Manager";

function About() {
  return (
    <div>
      <AboutHero />
      <Sushi />
      <Chef />
      <Manager />
    </div>
  );
}

export default About;
