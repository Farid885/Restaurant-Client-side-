import React from "react";
import { Images } from "../../assets/images/Images";

function Reservation() {
  return (
    <div>
      <section className="relative">
        <img
          className="h-screen lg:h-[46rem] w-full object-cover"
          src={Images.Reservation}
          alt="Menu"
        />
        <div className="absolute top-48 left-10 lg:left-28 z-10 text-primaryText font-bigText flex flex-col justify-center">
          <div className="text-7xl md:text-9xl lg:text-9/5xl font-light">
            <div>
              <h1 className="lg:tracking-wide base-in-left">
                Make a <br /> Reservation
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="mx-4 md:mx-8 lg:mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="text-6xl md:text-8xl lg:text-9xl xl:text-10/5xl font-bigText text-secondaryText tracking-wide mt-8 anim in-up">
            We will be glad to see you
          </div>
          <div className="my-12 text-xs lg:w-[32rem] anim in-left">
            Sakura can provide an amazing experience for your next special
            occasion. Please contact our staff to learn more on how we can cater
            your next event.
          </div>
          <div className="flex justify-between my-8">
            <form className="w-full lg:w-1/2 font-bigText anim in-up">
              <div className="border-b bordeer-b-gray-300">
                <label className="text-sm uppercase tracking-wide" for="fName">
                  full name
                </label>
                <input
                  name="fName"
                  id="fName"
                  type="text"
                  className="w-full outline-none"
                  aria-invalid="false"
                />
              </div>
              <div className="border-b bordeer-b-gray-300 mt-8">
                <label className="text-sm uppercase tracking-wide" for="tel">
                  phone number
                </label>
                <input
                  name="tel"
                  id="tel"
                  type="tel"
                  className="w-full outline-none"
                  aria-invalid="false"
                />
              </div>
              <div className="border-b bordeer-b-gray-300 mt-8">
                <label className="text-sm uppercase tracking-wide" for="num">
                  persons
                </label>
                <input
                  name="num"
                  id="num"
                  type="number"
                  className="w-full outline-none"
                  aria-invalid="false"
                />
              </div>
              <div className="flex justify-between border-b bordeer-b-gray-300 mt-8">
                <div className="flex gap-8 items-center">
                  <label className="text-sm uppercase tracking-wide" for="date">
                    date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="outline-none"
                  />
                </div>
                <div className="flex gap-8 items-center">
                  <label className="text-sm uppercase tracking-wide" for="time">
                    time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    className="outline-none"
                  />
                </div>
              </div>
              <div className="border-b bordeer-b-gray-300 mt-8 pb-1">
                <label className="text-sm uppercase tracking-wide">
                  Choose your table
                </label>
                <div className="flex items-center space-x-6 mt-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="radio1"
                      id="radioButton1"
                      className="h-3 w-3"
                    />
                    <label
                      for="radioButton1"
                      className="pl-3 font-miniText uppercase"
                    >
                      simple
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="radio1"
                      id="radioButton2"
                      className="h-3 w-3"
                    />
                    <label
                      for="radioButton2"
                      className="pl-3 font-miniText uppercase"
                    >
                      vip
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button className="text-2xl uppercase">submit</button>
              </div>
            </form>
            <div className="anim in-right">
              <div className="hidden lg:block">
                <div className="flex justify-between">
                  <div className="flex gap-8 -rotate-[70deg] xl:-rotate-[65deg] relative -top-[3rem] left-[5rem] z-10">
                    <img
                      className="lg:w-32 xl:w-44 lg:h-32 xl:h-44 spin"
                      src={Images.sushi3}
                      alt="sushi"
                    />
                    <img
                      className="lg:w-32 xl:w-44 lg:h-32 xl:h-44 spin"
                      src={Images.food3}
                      alt="sushi"
                    />
                    <img
                      className="lg:w-32 xl:w-44 lg:h-32 xl:h-44 spin"
                      src={Images.sushi1}
                      alt="sushi"
                    />
                    <img
                      className="lg:w-32 xl:w-44 lg:h-32 xl:h-44 spin"
                      src={Images.food2}
                      alt="sushi"
                    />
                    <img
                      className="lg:w-32 xl:w-44 lg:h-32 xl:h-44 spin"
                      src={Images.food1}
                      alt="sushi"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Reservation;
