import React from "react";
import { Images } from "../../../assets/images/Images";

function TeamHero() {
  return (
    <div>
      <section id="team" className="relative">
        <img
          className="h-screen lg:h-[51rem] w-full object-cover brightness-[.65]"
          src={Images.team}
          alt="Team"
        />
        <div className="absolute top-52 lg:top-72 left-4 lg:left-20 z-10 text-primaryText font-bigText flex flex-col justify-center">
          <div className="text-8xl lg:text-9/5xl font-light">
            <div>
              <h1 className="lg:tracking-wider base-in-left">Our Team</h1>
            </div>
            <a
              href="#teamsection"
              className="flex justify-center mt-4 lg:mt-0 border border-primaryText font-bigText px-12 py-2 hover:bg-primaryText text-primaryText hover:text-black text-2xl transition ease transform duration-300 base-in-up cursor-pointer"
            >
              <button className="tracking-widest">View our team</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamHero;
