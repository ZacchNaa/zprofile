import React from "react";
import Typewriter from "typewriter-effect";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import INFOD_LOGO from "../../assets/img/experience/logo.svg";
import ZLOGO from "../../assets/img/experience/profile.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

import LOGO1 from "../../assets/img/designs/logo/slide2.png";
import LOGO2 from "../../assets/img/designs/logo/slide3.webp";
import LOGO3 from "../../assets/img/designs/logo/slide4.webp";
import LOGO4 from "../../assets/img/designs/logo/slide5.webp";
import LOGO5 from "../../assets/img/designs/logo/slide6.webp";
import LOGO6 from "../../assets/img/designs/logo/slide7.webp";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt
            options={{
              max: 25,
            }}
          >
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={ZLOGO}
                  alt="my photo"
                />
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={INFOD_LOGO}
                  alt="infoD logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    <div className="sub">
                      <Typewriter
                        options={{
                          strings: [
                            "PROJECT MANAGER AT MEDI@TECH, ABIDJAN",
                            "ASSISTANT WEB ADMINISTRATOR, ReCAS ICT SUPORT TEAM",
                            "RESEARCH & ADMINISTRATIVE ASSISTANT, ReCAS",
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 50,
                        }}
                      />
                    </div>
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style"></Card.Text>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="logodiv">
                  <div className="m-2 plogo">
                    <img src={LOGO1} alt="Pacific logo" />
                  </div>
                  <div className="m-2 plogo">
                    <img src={LOGO2} alt="Pacific logo" />
                  </div>
                  <div className="m-2 plogo">
                    <img src={LOGO3} alt="Pacific logo" />
                  </div>
                  {/* </div>
                <div className="logodiv"> */}
                  <div className="m-2 plogo">
                    <img src={LOGO4} alt="Pacific logo" />
                  </div>
                  <div className="m-2 plogo">
                    <img src={LOGO5} alt="Pacific logo" />
                  </div>
                  <div className="m-2 plogo">
                    <img src={LOGO6} alt="Pacific logo" />
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
