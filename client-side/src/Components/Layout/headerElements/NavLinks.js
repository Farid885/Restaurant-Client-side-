import React from "react";
import {Link} from 'react-router-dom'

function NavLinks() {
  return (
    <div>
      {/* Pages link qoyun */}
      <div
        id="links"
        className="opacity-100 text-secondaryText hidden lg:block in-right"
      >
        <ul className="flex gap-28">
         <Link to={'/about'}>
          <li className="under cursor-pointer">About us</li>
         </Link>

         <Link to={'/menu'}> 
         
          <li className="under cursor-pointer">Menu</li>
         </Link>
         <Link to={'/team'}>
          <li className="under cursor-pointer">Team</li>
         </Link>
        </ul>
      </div>
      {/* =================== */}
    </div>
  );
}

export default NavLinks;