import React from "react";

function BurgerMenu() {
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-secondaryText transition ease transform duration-300`;

  const openSidebar = () => {
    document.getElementById("sidebar").classList.remove("hidden");
  };

  return (
    <div id="burger" className="block lg:hidden">
      <button
        className="flex flex-col justify-center items-center group"
        onClick={openSidebar}
      >
        <div className={`${genericHamburgerLine}`} />
        <div className={`${genericHamburgerLine}`} />
        <div className={`${genericHamburgerLine}`} />
      </button>
    </div>
  );
}

export default BurgerMenu;
