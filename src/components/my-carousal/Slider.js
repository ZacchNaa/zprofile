import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

//images
import Slide1 from "../../assets/img/carousal/slide1.webp";
import Slide2 from "../../assets/img/carousal/slide2.webp";
import Slide3 from "../../assets/img/carousal/slide3.webp";
import Slide4 from "../../assets/img/carousal/slide4.webp";

export const Slide = styled(animated.div)`
  height: 100%;
  width: 100%;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: absolute;
`;

export const StyledSlider = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const images = [
  { id: 0, url: Slide1 },
  { id: 1, url: Slide2 },
  { id: 2, url: Slide3 },
  { id: 3, url: Slide4 },
];

// Slider
const Slider = ({ auto }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Transitions
  const transitions = useTransition(
    images[currentIndex],
    (item) => {
      return item.id;
    },
    {
      from: {
        opacity: 0,
        transform: "scale(1)",
      },
      enter: {
        opacity: 1,
        transform: auto ? "scale(1.5)" : "scale(1)",
      },
      leave: {
        opacity: 0,
      },
      config: {
        mass: 1,
        tension: auto ? 40 : 200,
        friction: auto ? 100 : 20,
      },
    }
  );

  useEffect(() => {
    if (auto) {
      void setInterval(() => {
        setCurrentIndex((i) => {
          return (i + 1) % 4;
        });
      }, 5000);
    }
  }, [auto]);

  return (
    <>
      <StyledSlider>
        {transitions.map(({ item, props, key }) => (
          <Slide key={key} style={{ ...props }} image={item.url} />
        ))}
      </StyledSlider>
    </>
  );
};

export default Slider;
