import React from "react";
import { Images } from "../../assets/images/Images";
import SakuraImage from "./footerElements/SakuraImage";
import FooterContent from "./footerElements/FooterContent";

function Footer() {
  return (
    <div>
      <div
        className="h-[46rem] lg:h-[36rem] w-full  text-secondaryText text-center"
        style={{ backgroundImage: `url(${Images.Footer})` }}
      >
        <FooterContent />
        <SakuraImage />
      </div>
    </div>
  );
}
export default Footer;
