import React from "react";
import { Images } from "../../assets/images/Images";

function Home() {
  return (
    <div>
      <section id="hero" className="relative">
        <img
          className="h-screen lg:h-[54rem] w-full object-cover"
          src={Images.Hero}
          alt="Hero"
        />
        <div className="absolute top-48 xl:top-44 left-10 lg:left-28 z-10 text-primaryText font-bigText">
          <div>
            <p className="text-2xl lg:text-2xl uppercase tracking-widest lg:tracking-widest in-up">
              fresh ingredients sourced globally
            </p>
          </div>
          <div className="text-8xl lg:text-9xl xl:text-9/5xl font-light">
            <div>
              <h1 className="xl:tracking-wider in-left">Japanese Inspired</h1>
            </div>
            <div className="xl:tracking-widest lg:tracking-wide absolute in-left-next">
              <h1>Cuisine</h1>
            </div>
          </div>
        </div>
      </section>
      <section id="mission" className="relative z-10 -top-24 in-left w-full">
        <div>
          <img
            className="h-screen lg:h-[44rem] w-full lg:w-[80rem] object-cover"
            src={Images.Footer}
            alt="Hero"
          />
        </div>
        <div className="text-secondaryText absolute top-8 lg:top-24 w-full">
          <div className="text-6xl font-bigText mx-4 lg:mx-0 in-left">
            <p>Our Mission</p>
          </div>
          <div className="flex text-base lg:text-xs flex-col lg:flex-row in-up mt-8">
            <div className="w-[23rem] lg:w-[24rem] mt-8 lg:mt-0 mx-4 lg:mx-0">
              <p>
                Looking for the best Japanese-inspired restaurant in Birmingham,
                Michigan? Look no further than Adachi, nestled in the Victorian
                Peabody Mansion. Executive Chef Lloyd Roberts brings years of
                experience and innovation to the kitchen, creating an array of
                gastronomic adventures for guests to enjoy.
              </p>
              <p className="mt-1 lg:mt-2">
                At Adachi, we offer a diverse menu of small and large plates,
                specialty craft cocktails, and a full sushi bar featuring
                sashimi and nigiri options flown fresh from Japan. We source the
                freshest ingredients from both local and international markets,
                ensuring our guests taste our heartfelt commitment to quality.
              </p>
            </div>
            <div className="w-[23rem] lg:w-[24rem] mt-8 lg:mt-0 mx-4 lg:mx-0">
              <p>
                Adachi sets itself apart by prioritizing the social experience
                and taking a vibe-driven approach to fine dining. Our chic
                ambiance and decor in the dining room, sushi lounge, and
                cocktail bar create a fun and stylish atmosphere.
              </p>
              <p className="mt-1 lg:mt-2">
                Join us for dinner, cocktails, a private party, or any special
                occasion. Adachi promises world-class hospitality, making your
                visit special and memorable. Discover why Adachi is the perfect
                destination for Japanese-inspired cuisine in Birmingham,
                Michigan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
