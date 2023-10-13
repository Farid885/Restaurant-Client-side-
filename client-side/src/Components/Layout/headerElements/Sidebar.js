import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../../assets/images/Images";

function Sidebar() {
  const closeSidebar = () => {
    document.getElementById("sidebar").classList.add("hidden");
  };

  return (
    <div
      id="sidebar"
      className="hidden lg:hidden w-full h-full fixed z-50 base-in-left"
      style={{
        backgroundImage: `url(${Images.Sidebar})`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <div className="flex flex-col justify-center items-center my-16">
          <div className="flex flex-col justify-center text-center w-96">
            <h1
              onClick={closeSidebar}
              id="logo"
              className="font-logo text-secondaryText text-8xl cursor-pointer"
            >
              sakura
            </h1>
            <div
              id="links"
              className="opacity-100 text-secondaryText base-in-up mt-8"
            >
              <ul
                className="flex flex-col gap-20 font-bigText text-3xl"
                onClick={closeSidebar}
              >
                <li className="cursor-pointer">
                  <Link to={"/about"} className="under">About Us</Link>
                </li>

                <li className=" cursor-pointer">
                  <Link to={"/menu"} className="under">View Menu</Link>
                </li>

                <li className=" cursor-pointer">
                  <Link to={"/team"} className="under">Our Team</Link>
                </li>
                <li className=" cursor-pointer">
                  <Link to={"/reservation"} className="under">Reservation</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
