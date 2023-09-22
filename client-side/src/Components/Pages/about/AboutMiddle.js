import React from "react";
import "../../../assets/styles/aboutStyles/AboutMiddle.scss";
import { Images } from "../../../assets/images/Images";

const AboutMiddle = () => {
  return (
    <div className="aboutTitle">
      <div className="container">
        <div className="row flex-lg-row flex-column-reverse">
          <div className="col-lg-6 col-12">
            <p>
              <span className="text-uppercase fs-4">Executive Chef</span>

              <h1 className="mb-3">Lloyd Roberts</h1>

              <small>
                Lloyd Roberts, Executive Chef of Adachi Restaurant in Birmingham
                Michigan. Prior to working at Adachi, Chef Lloyd worked and
                learned from master chefs Jean-Georges Vongerichten, Nobu
                Matsuhisa and others at Vong, Nobu Moscow and Nobu Budapest. His
                training reflects his experiences in French, Japanese and other
                Asian cuisines. Chef Lloyd was born on the island of Jamaica and
                has lived in New York, Moscow and Budapest bringing with him a
                broad range of traditions and local cuisines.
              </small>
            </p>
          </div>

          <div className="col-lg-6 col-12">
            <div className="img position-relative">
              <img
                src={Images.About}
                className="img-fluid"
                height="2000rem"
                alt="chef"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMiddle;
