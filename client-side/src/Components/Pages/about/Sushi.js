import React from "react";
import { Images } from "../../../assets/images/Images";

function Sushi() {
  return (
    <div>
      <section id="sushi" className="hidden lg:block">
        <div className="flex justify-between">
          <div className="flex gap-8 -rotate-[50deg]">
            <img className="w-48 h-48 spin" src={Images.sushi6} alt="sushi" />
            <img className="w-48 h-48 spin" src={Images.sushi5} alt="sushi" />
            <img className="w-48 h-48 spin" src={Images.sushi4} alt="sushi" />
          </div>
          <div className="flex gap-8 -rotate-[50deg] relative -top-[6rem] z-10">
            <img className="w-48 h-48 spin" src={Images.sushi3} alt="sushi" />
            <img className="w-48 h-48 spin" src={Images.sushi2} alt="sushi" />
            <img className="w-48 h-48 spin" src={Images.sushi1} alt="sushi" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sushi;
