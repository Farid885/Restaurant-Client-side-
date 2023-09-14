import React from "react";
import { Images } from "../../assets/images/Images";

function Footer() {
  return (
    <div className="relative">
      <div
        className="h-[38rem] lg:h-[44rem] w-full absolute text-secondaryText text-center left-1/2 transform -translate-x-1/2"
        style={{ backgroundImage: `url(${Images.Footer})` }}
      >
        <div className="absolute top-16 lg:top-64 text-center left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col">
            {/* Home page link (" / ") */}
            <div>
              <h1
                id="footerLogo"
                className="font-logo text-secondaryText text-6xl lg:text-8xl cursor-pointer in-up"
              >
                sakura
              </h1>
            </div>
            {/* ====================== */}

            {/* Pages link qoyun */}
            <div className="flex flex-col justify-center in-up ">
              <ul className="flex flex-col lg:flex-row gap-8 lg:gap-48 relative z-10 lg:top-16 font-bigText text-2xl font-light">
                <li className="under cursor-pointer">Home</li>
                <li className="under cursor-pointer">About</li>
                <li className="under cursor-pointer">Menu</li>
                <li className="under cursor-pointer">Team</li>
              </ul>
            </div>
            {/* =================== */}
            <div className="relative top-8 lg:top-32 flex flex-col lg:flex-row justify-between font-light">
              <div className="flex items-center gap-2 font-miniText in-left">
                <p>325 S OLD WOODWARD</p>|<p>BIRMINGHAM, MI 48009</p>|
                <p>COPYRIGHT 2022</p>
              </div>
              <div className="mt-4 lg:mt-0 border border-secondaryText font-bigText px-12 py-2 hover:bg-secondaryText hover:text-black text-xl transition ease transform duration-300 in-right">
                <button>Reserve</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between in-up">
          <div className="relative top-24">
            <img
              className="w-72 opacity-60"
              src={Images.sakura1}
              alt="sakura"
            />
          </div>
          <div className="relative top-36">
            <img
              className="w-96 opacity-60 "
              src={Images.sakura2}
              alt="sakura"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
