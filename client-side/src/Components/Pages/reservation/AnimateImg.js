import React from "react";
import { Images } from "../../../assets/images/Images";

function AnimateImg() {
  return (
    <div className="anim in-right">
      <div className="hidden lg:block">
        <div className="flex justify-between">
          <div className="flex gap-8 -rotate-[70deg] xl:-rotate-[65deg] relative -top-[6rem] left-[5rem] z-10">
            <img
              className="lg:w-32 xl:w-44 lg:h-32 xl:h-44 spin"
              src={Images.sushi3}
              alt="sushi"
            />
            <img
              className="lg:w-32 xl:w-44 lg:h-32 xl:h-44 spin"
              src={Images.food3}
              alt="sushi"
            />
            <img
              className="lg:w-32 xl:w-44 lg:h-32 xl:h-44 spin"
              src={Images.sushi1}
              alt="sushi"
            />
            <img
              className="lg:w-32 xl:w-44 lg:h-32 xl:h-44 spin"
              src={Images.food2}
              alt="sushi"
            />
            <img
              className="lg:w-32 xl:w-44 lg:h-32 xl:h-44 spin"
              src={Images.food1}
              alt="sushi"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AnimateImg;
