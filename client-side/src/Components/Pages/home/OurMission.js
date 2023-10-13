import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../../assets/images/Images";
import Content from "./Content";

function OurMission() {
  return (
    <div>
      <section id="mission" className="relative z-10 lg:-top-24 w-full">
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
                <h3 className="flex text-6xl font-bigText mx-6 md:mx-6 lg:mx-36 xl:mx-44 relative top-20 anim in-left">
                  Our Mission
                </h3>
                <div className="mx-6 lg:mx-24 mt-32 flex lg:justify-end xl:justify-end flex-col md:flex-row lg:flex-row xl:flex-row gap-8 font-miniText text-sm lg:text-xs anim in-up">
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
                  <Link to={"/menu"} className="mt-8 under text-xl font-bigText pb-1 cursor-pointer anim in-up">
                    VIEW OUR MENU
                  </Link>
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <img
                  className="object-cover w-[63rem] h-[28rem] hidden lg:block anim in-left"
                  src={Images.homePic}
                  alt="menu"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <img
            className="relative w-28 -top-10 spin"
            src={Images.food2}
            alt="food"
          />
          <div className="flex items-center font-bigText text-primaryText mx-8">
            <h3 className="text-6xl relative z-20 -top-16">
              Stylish and Flavorful Components
            </h3>
            <img
              className="relative w-32 -left-20 spin -top-14"
              src={Images.food3}
              alt="food"
            />
          </div>
          <div className="flex justify-between mt-8 relative z-30 w-full">
            <div className="relative -top-16 z-30 w-44 ">
              <img className="spin" src={Images.food1} alt="food" />
            </div>
            <div className="relative top-14 z-30 w-44">
              <img className="spin" src={Images.food4} alt="food" />
            </div>
            <div className="relative -top-16 z-30 w-44 ">
              <img className="spin" src={Images.food5} alt="food" />
            </div>
          </div>
        </div>
      </section>
      <Content />
    </div>
  );
}

export default OurMission;
