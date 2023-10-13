import React from "react";
import { Images } from "../../assets/images/Images";
import Title from "./reservation/Title";
import Form from "./reservation/Form";
import AnimateImg from "./reservation/AnimateImg";

function Reservation() {
  return (
    <div>
      <section className="relative">
        <img
          className="h-screen lg:h-[46rem] w-full object-cover"
          src={Images.Reservation}
          alt="Reservation"
        />
        <div className="absolute top-72 lg:top-48 left-10 lg:left-28 z-10 text-primaryText font-bigText flex flex-col justify-center">
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
          <Title />
          <div className="flex justify-between my-8">
            <Form />
            <AnimateImg />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Reservation;
