import React from "react";
import "./Card.css";
import { CardData } from "./CardData";

const Card = (props) => {
  return (
    <div className="card0" >
      {CardData.map((item, index) => {
        return (
          <div className="card">
            <div key={index}>
              <p>{item.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
