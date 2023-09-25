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
        <div className="absolute top-48 lg:top-44 left-10 lg:left-28 z-10 text-primaryText font-bigText flex flex-col justify-center">
          <p className="text-2xl lg:text-2xl uppercase tracking-widest lg:tracking-widest in-up">
            fresh ingredients sourced globally
          </p>
          <div className="text-8xl lg:text-9/5xl font-light">
            <div>
              <h1 className="lg:tracking-wider in-left">Japanese Inspired</h1>
            </div>
            <div className="xl:tracking-widest lg:tracking-wide absolute in-left-next">
              <h1>Cuisine</h1>
            </div>
          </div>
        </div>
      </section>
      <section id="mission" className="relative z-10 -top-24 w-full">
        <div
          style={{
            backgroundImage: `url(${Images.Footer})`,
            backgroundSize: "cover",
          }}
          className="xl:w-[80rem] lg:h-[44rem] xl:h-[44rem]"
        >
          <div className="xl:w-[80rem]">
            <div className="text-secondaryText">
              <div>
                <h3 className="flex text-6xl font-bigText mx-6 md:mx-6 lg:mx-36 xl:mx-44 relative top-20 in-left">
                  Our Mission
                </h3>
                <div className="mx-6 lg:mx-24 mt-32 flex lg:justify-end xl:justify-end flex-col md:flex-row lg:flex-row xl:flex-row gap-8 font-miniText text-sm lg:text-xs in-up">
                  <div className="lg:w-[25rem]">
                    <p>
                      Looking for the best Japanese-inspired restaurant in
                      Birmingham, Michigan? Look no further than Sakura, nestled
                      in the Victorian Peabody Mansion. Executive Chef Lloyd
                      Roberts brings years of experience and innovation to the
                      kitchen, creating an array of gastronomic adventures for
                      guests to enjoy.
                    </p>
                    <p className="mt-1 xl:mt-2">
                      At Sakura, we offer a diverse menu of small and large
                      plates, specialty craft cocktails, and a full sushi bar
                      featuring sashimi and nigiri options flown fresh from
                      Japan. We source the freshest ingredients from both local
                      and international markets, ensuring our guests taste our
                      heartfelt commitment to quality.
                    </p>
                  </div>
                  <div className="lg:w-[25rem]">
                    <p>
                      Sakura sets itself apart by prioritizing the social
                      experience and taking a vibe-driven approach to fine
                      dining. Our chic ambiance and decor in the dining room,
                      sushi lounge, and cocktail bar create a fun and stylish
                      atmosphere.
                    </p>
                    <p className="mt-1 xl:mt-2">
                      Join us for dinner, cocktails, a private party, or any
                      special occasion. Sakura promises world-class hospitality,
                      making your visit special and memorable. Discover why
                      Sakura is the perfect destination for Japanese-inspired
                      cuisine in Birmingham, Michigan.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end xl:justify-end lg:mx-24">
                  <p className="mt-8 under text-xl font-bigText pb-1 cursor-pointer in-up ">
                    VIEW OUR MENU
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <img
                  className="object-cover w-[63rem] h-[28rem] hidden lg:block in-left"
                  src={Images.homePic}
                  alt="menu"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <img
            className="relative w-24 -top-10 spin"
            src={Images.food2}
            alt="food"
          />
          <div className="flex items-center font-bigText text-primaryText mx-8">
            <h3 className="text-6xl relative z-20">
              Stylish and Flavorful Components
            </h3>
            <img
              className="relative w-28 -left-24 spin"
              src={Images.food3}
              alt="food"
            />
          </div>
          <div className="flex gap-6 mt-8 relative z-30">
            <img
              className="relative z-30 w-24 spin"
              src={Images.food1}
              alt="food"
            />
            <img
              className="relative z-30 w-32 spin"
              src={Images.food4}
              alt="food"
            />
            <img
              className="relative z-30 w-24 spin"
              src={Images.food5}
              alt="food"
            />
          </div>
        </div>
      </section>
      <div className="hidden lg:block overflow-hidden">
        <div className="flex">
          <div className="relative top-12">
            <h3 className="text-9/5xl leading-[8rem] relative z-40 text-primaryText font-bigText ml-32">
              Stylish and Flavorful Components
            </h3>
          </div>
          <div className="relative -top-10 z-10">
            <img className="w-[40rem] spin" src={Images.food1} alt="food" />
          </div>
        </div>
        <div className="flex gap-96">
          <div className="ml-16">
            <img className="w-[20rem] spin" src={Images.food2} alt="food" />
            <img className="w-[25rem] spin relative left-32 -top-16" src={Images.food3} alt="food" />
          </div>
          <div className="relative top-8">
            <img className="w-[35rem] spin" src={Images.food4} alt="food" />
            <img className="w-[18rem] spin relative left-48 -top-8" src={Images.food5} alt="food" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
