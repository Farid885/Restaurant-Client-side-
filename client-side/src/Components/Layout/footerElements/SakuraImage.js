import React from "react";
import { Images } from "../../../assets/images/Images";

function SakuraImage() {
  return (
    <div className="flex justify-between in-up relative -top-36">
      <div>
        <img className="w-72 opacity-60" src={Images.sakura1} alt="sakura" />
      </div>
      <div className="">
        <img
          className="w-96 opacity-60 relative -top-44"
          src={Images.sakura2}
          alt="sakura"
        />
      </div>
    </div>
  );
}

export default SakuraImage;
