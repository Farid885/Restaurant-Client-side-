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
      <section id="sushi" className="hidden lg:block">
        <div className="flex justify-between">
          <div className="flex gap-8 -rotate-[50deg]">
            <img className="w-48 h-48 spin" src={Images.sushi6} alt="sushi" />
            <img className="w-48 h-48 spin" src={Images.sushi5} alt="sushi" />
            <img className="w-48 h-48 spin" src={Images.sushi4} alt="sushi" />
          </div>
          <div className="flex gap-8 -rotate-[50deg] relative -top-[6rem] z-10 overflow-hidden">
            <img className="w-48 h-48 spin" src={Images.sushi3} alt="sushi" />
            <img className="w-48 h-48 spin" src={Images.sushi2} alt="sushi" />
            <img className="w-48 h-48 spin" src={Images.sushi1} alt="sushi" />
          </div>
        </div>
      </section>
      <section id="chef">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col justify-center mx-8 lg:mx-32 in-left">
            <div className="mb-14 lg:mb-0">
              <p className="font-bigText text-about text-2xl lg:text-3xl">
                EXECUTIVE CHEF
              </p>
              <h3 className="font-bigText text-about text-7xl lg:text-8xl mb-14">
                Lloyd Roberts
              </h3>
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
          <div className="mx-8 my-8 lg:mx-0 lg:my-0 lg:w-[200rem] in-right">
            <img className="object-cover" src={Images.Chef} alt="sushi" />
          </div>
        </div>
      </section>
      <section id="manager" className="">
        <div className="text-primaryText font-bigText bg-aboutManager">
          <div className="mx-8 lg:mx-28 pt-10 pb-28 lg:py-28 in-left">
            <p className="text-lg lg:text-2xl tracking-widest">RESTAURANT MANAGER</p>
            <h3 className="text-5xl lg:text-8xl mt-4">Shannon Dwyer</h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-between mx-8 lg:mx-28 lg:py-28 in-up">
            <div className="mb-8 lg:mb-0">
              <p className="text-2xl tracking-widest">ABOUT</p>
              <h3 className="text-8xl mt-4 font-logo">Sakura</h3>
            </div>
            <div className="flex flex-col gap-6 font-miniText text-xs lg:w-[36rem] mb-8 lg:mb-0 in-up">
              <p>
                If you’re looking for the best sushi in Michigan, look no
                further than Sakura restaurant in Birmingham. Our globally
                influenced Japanese-inspired restaurant is located in the
                beautiful Victorian Peabody Mansion and led by Executive Chef
                Lloyd Roberts, who brings years of experience and innovative
                technique to the kitchen.
              </p>
              <p>
                At Sakura, we offer a wide range of gastronomic adventures with
                small and large plates, specialty craft cocktails, and a full
                sushi bar featuring sashimi and nigiri options flown fresh from
                Japan. Our commitment to quality is evident in the fresh,
                locally and internationally sourced ingredients we use in all of
                our dishes.
              </p>
              <p>
                We take a vibe-driven approach to fine dining, emphasizing the
                social experience in our dining room, sushi lounge, and cocktail
                bar. Our chic ambiance and decor create a fun atmosphere that’s
                perfect for any occasion, whether you’re joining us for dinner,
                cocktails, a private party, or a special event.
              </p>
              <p>
                At Sakura, we pride ourselves on world-class hospitality and
                promise to make your experience special and memorable. Join us
                today and taste the best sushi in Michigan!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
