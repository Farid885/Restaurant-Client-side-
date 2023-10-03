import React from "react";
import { Images } from "../../assets/images/Images";

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
        <div className="max-w-screen-xl mx-auto py-8">
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
          <div className="mt-16">
            <div className="flex flex-col flex-wrap lg:flex-row gap-8 justify-center items-center lg:justify-between">
              <div className="bg-white p-8 rounded-md w-72 h-96">
                <div className="flex justify-center transition ease-in-out delay-150 hover:-translate-y-4">
                  <img
                    className="w-56 h-56"
                    src={Images.Delivery4}
                    alt="delivery"
                  />
                </div>
                <div className="flex justify-center text-center font-bigText uppercase text-md font-bold">
                  <h3 className="tracking-wide">Sushi cake</h3>
                </div>
                <div className="flex justify-center text-center font-miniText text-xs">
                  <p className="tracking-wide w-40">
                    Sushi Cake is designed for bright events and unforgettable
                    moments.
                  </p>
                </div>
                <div className="mt-2 flex justify-center text-center font-miniText text-lg">
                  <p className="tracking-wide w-40">$97.75</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-md w-72 h-96">
                <div className="flex justify-center transition ease-in-out delay-150 hover:-translate-y-4">
                  <img
                    className="w-56 h-56"
                    src={Images.Delivery2}
                    alt="delivery"
                  />
                </div>
                <div className="flex justify-center text-center font-bigText uppercase text-md font-bold">
                  <h3 className="tracking-wide">Secret set</h3>
                </div>
                <div className="flex justify-center text-center font-miniText text-xs">
                  <p className="tracking-wide w-40">
                    Secret Sushi Set - affordable price and interesting
                    presentation
                  </p>
                </div>
                <div className="mt-2 flex justify-center text-center font-miniText text-lg">
                  <p className="tracking-wide w-40">$97.75</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-md w-72 h-96">
                <div className="flex justify-center transition ease-in-out delay-150 hover:-translate-y-4">
                  <img
                    className="w-56 h-56"
                    src={Images.Delivery3}
                    alt="delivery"
                  />
                </div>
                <div className="flex justify-center text-center font-bigText uppercase text-md font-bold">
                  <h3 className="tracking-wide">Delux sushi set</h3>
                </div>
                <div className="flex justify-center text-center font-miniText text-xs">
                  <p className="tracking-wide w-40">
                    Deluks Sushi Set - classic sushi roles and a new taste.
                    Multitasking range
                  </p>
                </div>
                <div className="mt-2 flex justify-center text-center font-miniText text-lg">
                  <p className="tracking-wide w-40">$97.75</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-md w-72 h-96">
                <div className="flex justify-center transition ease-in-out delay-150 hover:-translate-y-4">
                  <img
                    className="w-56 h-56"
                    src={Images.Delivery1}
                    alt="delivery"
                  />
                </div>
                <div className="flex justify-center text-center font-bigText uppercase text-md font-bold">
                  <h3 className="tracking-wide">Mini sushi set</h3>
                </div>
                <div className="flex justify-center text-center font-miniText text-xs">
                  <p className="tracking-wide w-40">
                    Mini-sushi set also depends on the number of roles inside,
                    on taste
                  </p>
                </div>
                <div className="mt-2 flex justify-center text-center font-miniText text-lg">
                  <p className="tracking-wide w-40">$97.75</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-md w-72 h-96">
                <div className="flex justify-center transition ease-in-out delay-150 hover:-translate-y-4">
                  <img className="w-56 h-56" src={Images.Whisky1} alt="drink" />
                </div>
                <div className="flex justify-center text-center font-bigText uppercase text-md font-bold">
                  <h3 className="tracking-wide">BOWMORE</h3>
                </div>
                <div className="flex justify-center text-center font-miniText text-xs">
                  <p className="tracking-wide w-40">
                    15 YEAR OLD SINGLE MALT SCOTCH WHISKY 750 ML
                  </p>
                </div>
                <div className="mt-2 flex justify-center text-center font-miniText text-lg">
                  <p className="tracking-wide w-40">$120.20</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-md w-72 h-96">
                <div className="flex justify-center transition ease-in-out delay-150 hover:-translate-y-4">
                  <img
                    className="w-56 h-56"
                    src={Images.Whisky2}
                    alt="delivery"
                  />
                </div>
                <div className="flex justify-center text-center font-bigText uppercase text-md font-bold">
                  <h3 className="tracking-wide">THE MACALLAN</h3>
                </div>
                <div className="flex justify-center text-center font-miniText text-xs">
                  <p className="tracking-wide w-40">
                    12 YEAR OLD DOUBLE CASK WHISKY 750ML
                  </p>
                </div>
                <div className="mt-2 flex justify-center text-center font-miniText text-lg">
                  <p className="tracking-wide w-40">$130.20</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-md w-72 h-96">
                <div className="flex justify-center transition ease-in-out delay-150 hover:-translate-y-4">
                  <img
                    className="w-56 h-56"
                    src={Images.Whisky3}
                    alt="delivery"
                  />
                </div>
                <div className="flex justify-center text-center font-bigText uppercase text-md font-bold">
                  <h3 className="tracking-wide">TOKI</h3>
                </div>
                <div className="flex justify-center text-center font-miniText text-xs">
                  <p className="tracking-wide w-40">
                    BLENDED JAPANESE WHISKY 750ML
                  </p>
                </div>
                <div className="mt-2 flex justify-center text-center font-miniText text-lg">
                  <p className="tracking-wide w-40">$64.20</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-md w-72 h-96">
                <div className="flex justify-center transition ease-in-out delay-150 hover:-translate-y-4">
                  <img
                    className="w-56 h-56"
                    src={Images.Whisky4}
                    alt="delivery"
                  />
                </div>
                <div className="flex justify-center text-center font-bigText uppercase text-md font-bold">
                  <h3 className="tracking-wide">LAPHROAIG QUARTER CASK</h3>
                </div>
                <div className="flex justify-center text-center font-miniText text-xs">
                  <p className="tracking-wide w-40">
                    ISLAY SINGLE MALT SCOTCH WHISKY 750M
                  </p>
                </div>
                <div className="mt-2 flex justify-center text-center font-miniText text-lg">
                  <p className="tracking-wide w-40">$97.75</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;
