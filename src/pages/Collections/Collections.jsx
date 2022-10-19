import React from "react";
import "./collections.scss";
import { Rectangle16 } from "../../assets";
const Collections = () => {
  return (
    <div className="shared__container">
      <div className="my__collections">
        <div>My collection</div> <div>Likes</div>
      </div>
      <div className="mycollections__items">
        <div className="mycollections">
          <img src={Rectangle16} alt="" />
          <div className="mycollections__text">
            <h2>Limits</h2>
            <p>john watts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
