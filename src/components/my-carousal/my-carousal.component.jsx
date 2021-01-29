import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Rotate from "react-reveal/Rotate";

import Slide1 from "../../assets/img/carousal/slide1.webp";
import Slide2 from "../../assets/img/carousal/slide2.webp";
import Slide3 from "../../assets/img/carousal/slide3.webp";
import Slide4 from "../../assets/img/carousal/slide4.webp";
import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <Roll left>
            <img
              className="d-block w-100 custom-img"
              src={Slide4}
              alt="Fourth slide"
            />
          </Roll>
        </Carousel.Item>
        <Carousel.Item>
          <Zoom top cascade>
            <img
              className="d-block w-100 custom-img"
              src={Slide2}
              alt="Second slide"
            />
          </Zoom>
        </Carousel.Item>
        <Carousel.Item>
          <Rotate top left>
            <img
              className="d-block w-100 custom-img"
              src={Slide3}
              alt="Third slide"
            />
          </Rotate>
        </Carousel.Item>
        <Carousel.Item>
          <Rotate bottom right>
            <img
              className="d-block w-100 custom-img"
              src={Slide1}
              alt="First slide"
            />
          </Rotate>
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;
