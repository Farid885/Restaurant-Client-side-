import React from "react";
import { Images } from "../../../assets/images/Images";

const AboutSushi = () => {
  return (
    <div className="position-relative sushiSection">
      <div className="sushi_section_1">
        <div className="sushi4">
          <img src={Images.sushi4} width="220" alt="sushi" />
        </div>

        <div className="sushi5">
          <img src={Images.sushi3} width="180" alt="sushi" />
        </div>

        <div className="sushi6">
          <img src={Images.sushi6} width="150px" alt="sushi" />
        </div>
      </div>

      <div className="sushi_section_2">
        <div className="sushi1">
          <img src={Images.sushi1} width="180" alt="sushi" />
        </div>

        <div className="sushi2">
          <img src={Images.sushi2} width="220" alt="sushi" />
        </div>

        <div className="sushi3">
          <img src={Images.sushi3} width="200" alt="sushi" />
        </div>
      </div>
    </div>
  );
};

export default AboutSushi;
