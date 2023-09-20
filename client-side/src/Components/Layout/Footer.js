import React from "react";
import { Images } from "../../assets/images/Images";
import SakuraImage from "./footerElements/SakuraImage";
import FooterContent from "./footerElements/FooterContent";

function Footer() {
  return (
    <div className="relative z-40">
      <div
        className="h-[42rem] lg:h-[36rem] w-full  text-secondaryText text-center"
        style={{ backgroundImage: `url(${Images.Footer})` }}
      >
        <FooterContent />
        <SakuraImage />
      </div>
    </div>
  );
}
export default Footer;
