import React from "react";
import { Images } from "../../assets/images/Images";
import MenuCard from "./menu/MenuCard";

function Menu() {
  return (
    <div>
      <section id="menu" className="relative">
        <img
          className="h-screen lg:h-[51rem] w-full object-cover"
          src={Images.Menu}
          alt="Menu"
        />
        <div className="absolute top-56 lg:top-56 left-10 lg:left-28 z-10 text-primaryText font-bigText flex flex-col justify-center">
          <div className="text-8xl lg:text-9/5xl font-light">
            <div>
              <h1 className="lg:tracking-wide base-in-left">Our Menu</h1>
            </div>
            <a
              href="reserve"
              className="flex justify-center mt-4 lg:mt-0 border border-primaryText font-bigText px-12 py-2 hover:bg-primaryText text-primaryText hover:text-black text-2xl transition ease transform duration-300 base-in-up cursor-pointer w-52 sm:w-full2 md:w-full lg:w-full xl:w-full"
            >
              <button className="tracking-wide">Reserve</button>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="mx-14 py-8">
          <div className="flex justify-center items-center gap-6 lg:gap-0 py-4 anim in-up">
            <ul className="flex flex-wrap justify-between text-secondaryText font-bigText text-xl uppercase w-72 lg:w-full">
              <li className="under cursor-pointer hover:italic">All menu</li>
              <li className="under cursor-pointer hover:italic">
                delivery menu
              </li>
              <li className="under cursor-pointer hover:italic">dining menu</li>
              <li className="under cursor-pointer hover:italic">drink menu</li>
              <li className="under cursor-pointer hover:italic">happy hour</li>
              <li className="under cursor-pointer hover:italic">
                dessert menu
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <MenuCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;
