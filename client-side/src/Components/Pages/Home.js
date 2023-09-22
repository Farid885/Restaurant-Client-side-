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
      <section
        id="mission"
        className="relative z-10 -top-24 in-left lg:w-[80rem]"
      >
        <div>
          <img
            className="h-screen lg:h-[44rem] w-full lg:w-[80rem] object-cover"
            src={Images.Footer}
            alt="Hero"
          />
        </div>
        <div className="text-secondaryText absolute top-8 lg:top- w-[80rem]">
          <div className="flex  flex-col absolute lg:w-[70rem]">
            <div className="flex lg:ml-52 text-6xl font-bigText in-left">
              <p>Our Mission</p>
            </div>
            <div className="flex gap-4 font-miniText text-base lg:text-xs font-light flex-col in-up mt-8">
              <div className="flex justify-end flex-col lg:flex-row">
                <div className="w-[23rem] mt-8 lg:mt-0">
                  <p>
                    Looking for the best Japanese-inspired restaurant in
                    Birmingham, Michigan? Look no further than Sakura, nestled
                    in the Victorian Peabody Mansion. Executive Chef Lloyd
                    Roberts brings years of experience and innovation to the
                    kitchen, creating an array of gastronomic adventures for
                    guests to enjoy.
                  </p>
                  <p className="mt-1 lg:mt-2">
                    At Sakura, we offer a diverse menu of small and large
                    plates, specialty craft cocktails, and a full sushi bar
                    featuring sashimi and nigiri options flown fresh from Japan.
                    We source the freshest ingredients from both local and
                    international markets, ensuring our guests taste our
                    heartfelt commitment to quality.
                  </p>
                </div>
                <div className="w-[23rem] lg:w-[24rem] mt-8 lg:mt-0">
                  <p>
                    Sakura sets itself apart by prioritizing the social
                    experience and taking a vibe-driven approach to fine dining.
                    Our chic ambiance and decor in the dining room, sushi
                    lounge, and cocktail bar create a fun and stylish
                    atmosphere.
                  </p>
                  <p className="mt-1 lg:mt-2">
                    Join us for dinner, cocktails, a private party, or any
                    special occasion. Sakura promises world-class hospitality,
                    making your visit special and memorable. Discover why Sakura
                    is the perfect destination for Japanese-inspired cuisine in
                    Birmingham, Michigan.
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end lg:w-[70rem]">
                {/* Menu page link */}
                <p className="mt-8 under text-xl font-bigText pb-1 cursor-pointer">
                  VIEW OUR MENU
                </p>
                {/* ============== */}
              </div>
            </div>
          </div>
          <div className="relative hidden lg:flex justify-end top-96">
            <img
              className="object-cover w-[63rem] h-[28rem]"
              src={Images.homePic}
              alt="Hero"
            />
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
}
export default Home;
