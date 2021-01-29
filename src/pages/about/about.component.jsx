import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <Zoom top cascade>
          <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        </Zoom>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Fade top cascade>
                  <Image
                    className="profile justify-content-end"
                    alt="profile"
                    src={Profile}
                    roundedCircle
                    fluid
                  />
                </Fade>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                So! <strong>&nbsp;Who am I?</strong>
                <br />A programmer and a Graphic Designer. I am a Full Stack Web
                Developer with React.js, Redux, Express.js, Node.js, mongoDB and
                MySQL.
                <br />
                I hold a Bachelor of Science in Computer Science
                <br />
                My motivation to work is driven by results. And I pay keen
                attention to detail. I enjoy whatever I do with fun.
                <br />
                <br />
                At every point in time I enjoy exploring whatever is of
                interest. I just love to learn, because it is fun doing!!!
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Get in touch
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1C464Rd_3S5PH2OKylDnxlcly-eUoGO7H/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/ZacchNaa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/zacchaeus-napuo-988248159/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
