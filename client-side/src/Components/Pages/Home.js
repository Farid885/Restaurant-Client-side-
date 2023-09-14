import React from "react";
import { Images } from "../../assets/images/Images";

function Home() {
  return (
    <div>
      <div className="relative">
        <img
          className="h-screen lg:h-[62rem] w-screen lg:w-full object-cover"
          src={Images.Hero}
          alt="Hero"
        />
        <div className="absolute top-48 lg:top-44 left-10 lg:left-28 z-10 text-primaryText font-bigText flex flex-col justify-center">
          <p className="text-2xl lg:text-2xl uppercase tracking-widest lg:tracking-widest in-up">
            fresh ingredients sourced globally
          </p>
          <div className="text-8xl lg:text-9/5xl font-light">
            <div>
              <h1 className="lg:tracking-wider in-left">Japanese Inspired</h1>
            </div>
            <div className="lg:tracking-widest absolute  xl:top-40 lg:top-80 in-left-next">
              <h1>Cuisine</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
