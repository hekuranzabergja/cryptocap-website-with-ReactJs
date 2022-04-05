import React from "react";
import "./Card.css";
import { CardData } from "./CardData";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
const Card = (props) => {
  return (
    <div>
      <p>Market Trade</p>
      <div className="card0">
        {CardData.map((item, index) => {
          return (
            <div className="card">
              <div className="cryptoname">
                <img src={item.img} alt={item.name}></img>
                <p>{item.shortname}</p>
                <p>{item.name}</p>
                <div className="crypto-icon-state">
                  {item.percentage < 0 ? (
                    <span className="red">
                      {" "}
                      <AiOutlineArrowDown />
                    </span>
                  ) : (
                    <span className="green">
                      {" "}
                      <AiOutlineArrowUp />
                    </span>
                  )}
                </div>
              </div>
              <div className="break">
                <hr />
              </div>
              <div className="cryptovalue">
                <p>{item.value}</p>
                <img src={item.chart} alt={item.name}></img>

                <p>{item.percentage + "%"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
