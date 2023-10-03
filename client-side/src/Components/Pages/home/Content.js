import React from "react";
import { Images } from "../../../assets/images/Images";

function Content() {
  return (
    <div>
         <div className="hidden lg:block">
        <div className="flex">
          <div className="relative top-12">
            <h3 className="text-9/5xl leading-[8rem] relative z-40 text-primaryText font-bigText ml-32 anim in-up">
              Stylish and Flavorful Components
            </h3>
          </div>
          <div className="relative lg:top-6 xl:-top-6 z-10 anim in-right">
            <img className="lg:w-[30rem] xl:w-[36rem] spin" src={Images.food1} alt="food" />
          </div>
        </div>
        <div className="flex gap-96">
          <div className="ml-16 anim in-left">
            <img className="w-[20rem] spin" src={Images.food2} alt="food" />
            <img
              className="w-[15rem] spin relative left-32 -top-8"
              src={Images.food3}
              alt="food"
            />
          </div>
          <div className="relative -top-8 anim in-up">
            <img className="w-[35rem] spin" src={Images.food4} alt="food" />
            <img
              className="w-[18rem] spin relative left-48 top-6"
              src={Images.food5}
              alt="food"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
