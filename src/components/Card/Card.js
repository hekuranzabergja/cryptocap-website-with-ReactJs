import React from "react";
import "./Card.css";
import { CardData } from "./CardData";
// import usd from '../Images/usd.png'



const Card = (props) => {
  return (
  <div>
      <p>Market Trade</p>
        <div className="card0" >
      {CardData.map((item, index) => {
        return (
          <div className="card">
               <img src={props.img}  alt=""/>
            <div key={index}>
            <p>{item.shortname}</p>

              <p>{item.name}</p>
                <p>{item.value}</p>
            </div>
            <div>
            <img src={item.img}  alt=""/>

            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default Card;
