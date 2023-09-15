import React from "react";
import { Images } from "../../assets/images/Images";

function Footer() {
  return (
    <div>
      <div
        className="h-[42rem] lg:h-[36rem] w-full  text-secondaryText text-center"
        style={{ backgroundImage: `url(${Images.Footer})` }}
      >
        <div className="mx-16 relative top-32 lg:top-36">
          <div className="flex flex-col justify-center text-center items-center ">
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
            <div className="flex flex-col justify-center in-up lg:border border-secondaryText lg:px-16 lg:py-16 relative z-30">
              <ul className="flex justify-center gap-8 flex-col lg:flex-row lg:gap-20 font-bigText text-2xl font-light">
                <li className="cursor-pointer under">Home</li>
                <p className="hidden lg:block">|</p>
                <li className="cursor-pointer under">About</li>
                <p className="hidden lg:block">|</p>
                <li className="cursor-pointer under">Menu</li>
                <p className="hidden lg:block">|</p>
                <li className="cursor-pointer under">Team</li>
              </ul>
            </div>
            {/* =================== */}
            <div className="relative z-30 top-12 lg:top-8 flex flex-col lg:gap-52 lg:flex-row justify-between font-light text-sm lg:text-md">
              <div className="flex items-center gap-2 font-miniText in-left">
                <p>325 S OLD WOODWARD</p>|<p>BIRMINGHAM, MI 48009</p>|
                <p>COPYRIGHT 2022</p>
              </div>
              <div className="mt-4 lg:mt-0 border border-secondaryText font-bigText px-12 py-2 hover:bg-secondaryText hover:text-black text-lg transition ease transform duration-300 in-right cursor-pointer">
                <button>Reserve</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between in-up relative -top-14">
          <div>
            <img
              className="w-72 opacity-60"
              src={Images.sakura1}
              alt="sakura"
            />
          </div>
          <div className="">
            <img
              className="w-96 opacity-60 relative -top-44"
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
