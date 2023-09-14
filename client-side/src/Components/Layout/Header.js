import React from "react";

function Header() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
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
    <div id="navbar" className="fixed w-full z-50 opacity-95">
      <div className="mx-24 my-2 max-w-screen-xl">
        <div className="flex justify-between items-center">
          <h1 id="logo" className="font-logo text-secondaryText text-8xl">
            sakura
          </h1>
          <div id="links" className="opacity-100 text-secondaryText">
            <ul className="flex gap-28">
              <li className="under cursor-pointer">About us</li>
              <li className="under cursor-pointer">Menu</li>
              <li className="under cursor-pointer">Team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
