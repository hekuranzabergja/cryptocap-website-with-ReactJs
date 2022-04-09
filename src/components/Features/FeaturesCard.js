import React from "react";
import './FeatureCard.css'
import { FeaturesData } from "./FeaturesData";
import { AiOutlineArrowRight,  } from "react-icons/ai";



export const FeaturesCard = (props) => {
  return (
    <div className="featureCard">
      {FeaturesData.map((item, index) => {
        return (
          <div className="featureContent">
            <div>
              <img src={item.img} alt="" className="featuresImage"></img>
              <p className="featuresTitle">{item.title}</p>
              <p className="featuresDescription">{item.content}</p>
            </div>
            <div className="seeMoreFeatures">
              <button className="featureButton">{item.buttonType}</button>
              <div className="arrowfeature">
              <AiOutlineArrowRight/>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
