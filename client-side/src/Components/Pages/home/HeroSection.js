import React from "react";
import { Images } from "../../../assets/images/Images";

function Hero() {
  return (
    <div>
      <section id="hero" className="relative">
        <img
          className="h-screen lg:h-[54rem] w-full object-cover"
          src={Images.Hero}
          alt="Hero"
        />
        <div className="absolute top-48 lg:top-44 left-10 lg:left-28 z-10 text-primaryText font-bigText flex flex-col justify-center">
          <p className="text-2xl lg:text-2xl uppercase tracking-widest lg:tracking-widest base-in-up">
            fresh ingredients sourced globally
          </p>
          <div className="text-8xl lg:text-9/5xl font-light">
            <div>
              <h1 className="lg:tracking-wider base-in-left">
                Japanese Inspired
              </h1>
            </div>
            <div className="xl:tracking-widest lg:tracking-wide absolute base-in-left-next">
              <h1>Cuisine</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
