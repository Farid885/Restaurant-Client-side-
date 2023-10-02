import React from "react";
import { Images } from "../../../assets/images/Images";

function AboutHero() {
  return (
    <div>
      <section id="aboutHero" className="relative">
        <img
          className="h-screen lg:h-[48rem] w-full object-cover"
          src={Images.AboutBg}
          alt="aboutHero"
        />
        <div className="absolute top-48 lg:top-44 mx-10 lg:mx-28 z-10 text-primaryText font-bigText flex flex-col justify-center">
          <div className="text-8xl md:text-9xl lg:text-9xl xl:text-9/5xl font-light">
            <div>
              <h1 className="lg:tracking-wider base-in-left">
                About <br /> Our Chef
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutHero;
