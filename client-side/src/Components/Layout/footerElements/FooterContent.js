import React from "react";
import { Images } from "../../../assets/images/Images";

function FooterContent() {
  return (
    <div className="mx-16 relative top-32 lg:top-52">
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
        {/* <div className="text-secondaryText ">
          <div className="flex gap-4 items-center mt-20 lg:mt-12 in-up">
            <p className="font-miniText font-light text-sm lg:text-lg">
              Contacts :
            </p>
            <div className="flex gap-2">
              <div className="cursor-pointer">
                <a href="https://github.com/Farid885">
                  <img
                    src={Images.Farid}
                    alt="Farid"
                    className="w-8 lg:w-14 h-8 lg:h-14 cursor-pointer"
                  />
                </a>
              </div>
              <div>
                <a href="https://github.com/ZackRavenscroft">
                  <img
                    src={Images.Zeynal}
                    alt="Zeynal"
                    className="w-8 lg:w-14 h-8 lg:h-14  cursor-pointer"
                  />
                </a>
              </div>
              <div>
                <a href="https://github.com/rhmv">
                  <img
                    src={Images.Murad}
                    alt="Murad"
                    className="w-8 lg:w-14 h-8 lg:h-14  cursor-pointer"
                  />
                </a>
              </div>
              <div>
                <a href="https://github.com/nazilya96">
                  <img
                    src={Images.Nazilya}
                    alt="Nazilya"
                    className="w-8 lg:w-14 h-8 lg:h-14  cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default FooterContent;
