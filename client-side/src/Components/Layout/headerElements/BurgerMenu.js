import React from "react";
import { useState } from "react";

function BurgerMenu() {
  // ===================================
  // Burger menu generator
  // ===================================
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-secondaryText transition ease transform duration-300`;
  // ===================================
  // Burger menu generator end
  // ===================================

  return (
    <div className="block lg:hidden">
      <button
        className="flex flex-col justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "rotate-45 translate-y-3" : ""
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        />
      </button>
    </div>
  );
}

export default BurgerMenu;
