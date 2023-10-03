import React from "react";
import { Images } from "../../assets/images/Images";
import SakuraImage from "./footerElements/SakuraImage";
import FooterContent from "./footerElements/FooterContent";

function Footer() {
  return (
    <footer className="relative">
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
