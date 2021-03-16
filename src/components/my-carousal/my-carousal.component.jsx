import React from "react";
import Slider from "./Slider";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      {/* animation */}
      <Slider auto />
    </div>
  );
};

export default MyCarousal;
