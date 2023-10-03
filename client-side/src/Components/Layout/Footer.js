import React from "react";
import { Images } from "../../assets/images/Images";
import SakuraImage from "./footerElements/SakuraImage";
import FooterContent from "./footerElements/FooterContent";

function Footer() {
  return (
<<<<<<< HEAD
    <div>
=======
    <footer className="relative">
>>>>>>> b2b28983ffd98527c5ebbe852af86e160514d7b3
      <div
        className="w-full h-[40rem]  text-secondaryText text-center"
        style={{ backgroundImage: `url(${Images.Footer})` }}
      >
        <FooterContent />
        <SakuraImage />
      </div>
    </footer>
  );
}
export default Footer;
