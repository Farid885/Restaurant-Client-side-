import React from "react";

function NavLinks() {
  return (
    <div>
      {/* Pages link qoyun */}
      <div
        id="links"
        className="opacity-100 text-secondaryText hidden lg:block in-right"
      >
        <ul className="flex gap-28">
          <li className="under cursor-pointer">About us</li>
          <li className="under cursor-pointer">Menu</li>
          <li className="under cursor-pointer">Team</li>
        </ul>
      </div>
      {/* =================== */}
    </div>
  );
}

export default NavLinks;
