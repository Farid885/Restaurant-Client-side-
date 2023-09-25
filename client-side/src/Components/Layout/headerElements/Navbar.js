import React from "react";
import NavLinks from "./NavLinks";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";

function Navbar() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("logo").style.fontSize = "48px";
      document.getElementById("navbar").classList.add("bg-fixedNav");
    } else {
      document.getElementById("logo").style.fontSize = "96px";
      document.getElementById("logo").style.transition = "all .7s";
      document.getElementById("navbar").classList.remove("bg-fixedNav");
      document.getElementById("navbar").style.transition = "all .7s";
    }
  }
  return (
    <div id="navbar" className="fixed w-full z-50">
      <div className="mx-4 lg:mx-auto my-2 max-w-screen-xl">
        <div className="flex justify-between items-center">
          {/* Home page link (" / ") */}
          <div>
            <Link to={"/"}>
              <h1 id="logo" className="font-logo text-secondaryText text-8xl cursor-pointer">
                sakura
              </h1>
            </Link>
          </div>
          {/* ====================== */}
          <NavLinks />
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
