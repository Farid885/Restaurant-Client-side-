import React from "react";
import { Images } from "../../../assets/images/Images";

function Chef() {
  return (
    <div>
      <section id="chef">
        <div className="flex flex-col-reverse md:flex-row lg:flex-row">
          <div className="flex flex-col justify-center mx-8 lg:mx-32 in-left">
            <div className="mb-14 lg:mb-0 anim in-left">
              <p className="font-bigText text-about text-2xl lg:text-3xl">EXECUTIVE CHEF</p>
              <h3 className="font-bigText text-about text-7xl lg:text-8xl mb-14">Lloyd Roberts</h3>
              <p className="font-miniText text-base lg:text-sm">
                Lloyd Roberts, Executive Chef of Sakura Restaurant in Birmingham Michigan. Prior to working at Sakura,
                Chef Lloyd worked and learned from master chefs Jean-Georges Vongerichten, Nobu Matsuhisa and others at
                Vong, Nobu Moscow and Nobu Budapest. His training reflects his experiences in French, Japanese and other
                Asian cuisines. Chef Lloyd was born on the island of Jamaica and has lived in New York, Moscow and
                Budapest – bringing with him a broad range of traditions and local cuisines.
              </p>
            </div>
          </div>
          <div className="mx-8 my-8 lg:mx-0 lg:my-0 lg:w-[200rem] anim in-right">
            <img className="object-cover" src={Images.Chef} alt="sushi" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chef;
