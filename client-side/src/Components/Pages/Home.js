import React from "react";
import { Images } from "../../assets/images/Images";

function Home() {
  return (
    <div>
      <div className="relative">
        <img
          className="h-screen lg:h-[54rem] w-full object-cover opacity-90"
          src={Images.Hero}
          alt="Hero"
        />
        <div className="absolute top-48 xl:top-44 left-10 lg:left-28 z-10 text-primaryText font-bigText">
          <div>
            <p className="text-2xl lg:text-2xl uppercase tracking-widest lg:tracking-widest in-up">
              fresh ingredients sourced globally
            </p>
          </div>
          <div className="text-8xl lg:text-9xl xl:text-9/5xl font-light">
            <div>
              <h1 className="xl:tracking-wider in-left">Japanese Inspired</h1>
            </div>
            <div className="xl:tracking-widest lg:tracking-wide absolute in-left-next">
              <h1>Cuisine</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
