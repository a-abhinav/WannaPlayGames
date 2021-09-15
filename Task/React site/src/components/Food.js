import React from "react";
import "../App.css";
import item1 from "./assets/item-1.jpg";
import item2 from "./assets/item-2.jpg";
import item3 from "./assets/item-3.jpg";

function Food() {
  return (
    <div className="food-details">
      <h1>Food-Details</h1>
      <div className="items">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <img src={item1} alt="First slide" />
      </div>

      <div className="items">
        <img src={item2} alt="First slide" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="items">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <img src={item3} alt="First slide" />
      </div>
    </div>
  );
}

export default Food;
