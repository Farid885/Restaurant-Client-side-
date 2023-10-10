import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div>
      <div
        id="links"
        className="opacity-100 text-secondaryText hidden lg:block base-in-right"
      >
        <ul className="flex gap-28">
          <li className="under cursor-pointer">
            <Link to={"/about"}>About Us</Link>
          </li>

          <li className="under cursor-pointer">
            <Link to={"/menu"}>View Menu</Link>
          </li>
          <li className="under cursor-pointer">
            <Link to={"/team"}>Our Team</Link>
          </li>
          <li className="under cursor-pointer">
            <Link to={"/reservation"}>Reservation</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavLinks;
