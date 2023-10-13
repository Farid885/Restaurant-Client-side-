import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../../assets/images/Images";

function Menu() {
  return (
    <div>
      <section id="menu" className="relative z-40 -top-20">
        <div className="mx-10 relative -top-16 xl:top-24 flex justify-center">
          <h3 className="text-primaryText text-5xl xm:text-7xl md:text-8xl lg:text-9xl xl:text-11xl font-bigText anim in-up">
            View Our Menu
          </h3>
        </div>
        <div id="categories" className="flex flex-col lg:flex-row gap-4 relative z-40 anim in-up">
          <Link to={"/menu"} className="floating relative top-36">
            <img
              className="brightness-50 hover:brightness-90 transition duration-700 ease-in-out"
              src={Images.category1}
              alt="Delivery menu"
            />
            <p className="text-primaryText text-3xl font-bigText text-center relative -top-32">
              Delivery <br /> Menu
            </p>
          </Link>
          <Link to={"/menu"} className="floating relative top-24">
            <img
              className="brightness-50 hover:brightness-90 transition duration-700 ease-in-out"
              src={Images.category2}
              alt="Dining menu"
            />
            <p className="text-primaryText text-3xl font-bigText text-center relative -top-32">
              Dining <br /> Menu
            </p>
          </Link>
          <Link to={"/menu"} className="floating relative top-32">
            <img
              className="brightness-50 hover:brightness-90 transition duration-700 ease-in-out"
              src={Images.category4}
              alt="Drink menu"
            />
            <p className="text-primaryText text-3xl font-bigText text-center relative -top-32">
              Drink <br /> Menu
            </p>
          </Link>
          <Link to={"/menu"} className="floating relative top-40">
            <img
              className="brightness-50 hover:brightness-90 transition duration-700 ease-in-out"
              src={Images.category5}
              alt="Happy hour"
            />
            <p className="text-primaryText text-3xl font-bigText text-center relative -top-32">
              Happy <br /> Hour
            </p>
          </Link>
          <Link to={"/menu"} className="floating relative top-28">
            <img
              className="brightness-50 hover:brightness-90 transition duration-700 ease-in-out"
              src={Images.category3}
              alt="Dessert menu"
            />
            <p className="text-primaryText text-3xl font-bigText text-center relative -top-32">
              Dessert <br /> Menu
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Menu;
