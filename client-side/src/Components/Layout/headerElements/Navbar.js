import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 80 || document.documentElement.scrollTop > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isScrolled ? "bg-fixedNav" : "";

  return (
    <div id="navbar" className={`fixed w-full z-50 ${navbarClass}`}>
      <div className="mx-4 lg:mx-16 my-2">
        <div className="flex justify-between items-center">
          <div>
            <Link to={"/"}>
              <h1
                id="logo"
                className="font-logo text-secondaryText text-8xl cursor-pointer"
                style={{
                  fontSize: isScrolled ? "48px" : "96px",
                  transition: "all .7s",
                }}
              >
                sakura
              </h1>
            </Link>
          </div>
          <NavLinks />
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
