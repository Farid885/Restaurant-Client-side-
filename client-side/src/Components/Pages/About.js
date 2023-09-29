import React from "react";
import { Images } from "../../assets/images/Images";

function About() {
  return (
    <div>
      <section id="aboutHero" className="relative">
        <img
          className="h-screen lg:h-[48rem] w-full object-cover"
          src={Images.AboutBg}
          alt="aboutHero"
        />
        <div className="absolute top-48 lg:top-44 left-10 lg:left-28 z-10 text-primaryText font-bigText flex flex-col justify-center">
          <div className="text-8xl lg:text-9/5xl font-light">
            <div>
              <h1 className="lg:tracking-wider in-left">
                About <br /> Our Chef
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden lg:block">
        <div className="flex justify-between">
          <div className="flex gap-8 -rotate-[50deg]">
            <img className="w-48 h-48 spin" src={Images.sushi6} alt="sushi" />
            <img className="w-48 h-48 spin" src={Images.sushi5} alt="sushi" />
            <img className="w-48 h-48 spin" src={Images.sushi4} alt="sushi" />
          </div>
          <div className="flex gap-8 -rotate-[50deg] relative -top-[6rem]">
            <img className="w-48 h-48 spin" src={Images.sushi3} alt="sushi" />
            <img className="w-48 h-48 spin" src={Images.sushi2} alt="sushi" />
            <img className="w-48 h-48 spin" src={Images.sushi1} alt="sushi" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col justify-center mx-8 lg:mx-32">
            <div>
              <p className="font-bigText text-about text-2xl lg:text-3xl">EXECUTIVE CHEF</p>
              <h3 className="font-bigText text-about text-7xl lg:text-8xl mb-14">Lloyd Roberts</h3>
              <p className="font-miniText text-base lg:text-sm">
                Lloyd Roberts, Executive Chef of Sakura Restaurant in Birmingham
                Michigan. Prior to working at Sakura, Chef Lloyd worked and
                learned from master chefs Jean-Georges Vongerichten, Nobu
                Matsuhisa and others at Vong, Nobu Moscow and Nobu Budapest. His
                training reflects his experiences in French, Japanese and other
                Asian cuisines. Chef Lloyd was born on the island of Jamaica and
                has lived in New York, Moscow and Budapest – bringing with him a
                broad range of traditions and local cuisines.
              </p>
            </div>
          </div>
          <div className="mx-8 my-8 lg:mx-0 lg:my-0 lg:w-[200rem]">
            <img className="object-cover" src={Images.Chef} alt="sushi" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
