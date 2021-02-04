import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Carousel from "react-bootstrap/Carousel";

import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Rotate from "react-reveal/Rotate";

// projects
import L_ReactToDoList from "../../assets/img/projects/project1.webp";
import L_MernTipCalc from "../../assets/img/designs/poster/slide3.webp";
import L_GetGitHubInfo from "../../assets/img/projects/bookcover1.webp";
import L_SmartBrain from "../../assets/img/designs/card/slide4.webp";
import L_RoboFriends from "../../assets/img/projects/img19.webp";
import L_ProductHuntClone from "../../assets/img/experience/todoapp.webp";
import L_PortfolioUsingDjango from "../../assets/img/experience/chatapp.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
// import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
// import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
// import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
// import L_DJANGO from "../../assets/img/skills/django.svg";
// import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
// import L_GIT from "../../assets/img/skills/github-api.svg";
// import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

//SKILLS SLIDES
// posters
import Slide1 from "../../assets/img/designs/poster/slide1.webp";
import Slide2 from "../../assets/img/designs/poster/slide2.webp";
import Slide3 from "../../assets/img/designs/poster/slide3.webp";
import Slide4 from "../../assets/img/designs/poster/slide4.webp";
import Slide5 from "../../assets/img/designs/poster/slide5.webp";
// book covers
import Slide6 from "../../assets/img/designs/cover/slide1.webp";
import Slide7 from "../../assets/img/designs/cover/slide2.webp";
import Slide8 from "../../assets/img/designs/cover/slide3.webp";
// cards
import Slide9 from "../../assets/img/designs/card/slide1.webp";
import Slide10 from "../../assets/img/designs/card/slide2.webp";
import Slide11 from "../../assets/img/designs/card/slide3.webp";
import Slide110 from "../../assets/img/designs/card/slide4.webp";
import Slide111 from "../../assets/img/designs/card/slide5.webp";
//logo
import Slide12 from "../../assets/img/designs/logo/slide1.webp";
import Slide13 from "../../assets/img/designs/logo/Artboard3.webp";
import Slide14 from "../../assets/img/designs/logo/Artboard2.webp";
import Slide15 from "../../assets/img/designs/logo/Artboard1.webp";
//todo
//change image sizes to fit

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Isometric Grid */}
          <ImageEvent
            date="01/12/2020"
            className="text-center"
            text="Isometric Grid"
            src={L_ReactToDoList}
            alt="Isometric Grid"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an Isometric
                        design created using Adobe Illustrator
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">Adobe Illustrator</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center"></div>
            </div>
          </ImageEvent>

          {/* Project: Poster & Flyer Designs */}
          <ImageEvent
            date="15/08/2020"
            className="text-center"
            text="Poster & Flyer Designs"
            src={L_MernTipCalc}
            alt="Poster & Flyer Designs"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <Carousel
                          controls={false}
                          indicators
                          interval={2500}
                          pause={false}
                        >
                          <Carousel.Item>
                            <Roll left>
                              <img
                                className="d-block w-100 pcustom-img"
                                src={Slide4}
                                alt="Fourth slide"
                              />
                            </Roll>
                          </Carousel.Item>
                          <Carousel.Item>
                            <Zoom top cascade>
                              <img
                                className="d-block w-100 pcustom-img"
                                src={Slide2}
                                alt="Second slide"
                              />
                            </Zoom>
                          </Carousel.Item>
                          <Carousel.Item>
                            <Rotate top left>
                              <img
                                className="d-block w-100 pcustom-img"
                                src={Slide3}
                                alt="Third slide"
                              />
                            </Rotate>
                          </Carousel.Item>
                          <Carousel.Item>
                            <Rotate bottom right>
                              <img
                                className="d-block w-100 pcustom-img"
                                src={Slide1}
                                alt="First slide"
                              />
                            </Rotate>
                          </Carousel.Item>
                          <Carousel.Item>
                            <Rotate top right>
                              <img
                                className="d-block w-100 pcustom-img"
                                src={Slide5}
                                alt="First slide"
                              />
                            </Rotate>
                          </Carousel.Item>
                        </Carousel>
                        <strong>Description:</strong> design is created using
                        Adobe Photoshop
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">Adobe Photoshop</span>
                          </li>
                          <li>
                            <span className="p-2">Adobe Illustrator</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Book Cover Mockup Design */}
          <ImageEvent
            date="29/05/2020"
            className="text-center"
            text="Book Cover Mockup Design"
            src={L_GetGitHubInfo}
            alt="Book Cover Mockup Design"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <Carousel
                          controls={false}
                          indicators
                          interval={2500}
                          pause={false}
                        >
                          <Carousel.Item>
                            <Roll left>
                              <img
                                className="d-block w-100 pcustom-img"
                                src={Slide6}
                                alt="Fourth slide"
                              />
                            </Roll>
                          </Carousel.Item>
                          <Carousel.Item>
                            <Zoom top cascade>
                              <img
                                className="d-block w-100 pcustom-img"
                                src={Slide7}
                                alt="Second slide"
                              />
                            </Zoom>
                          </Carousel.Item>
                          <Carousel.Item>
                            <Rotate top left>
                              <img
                                className="d-block w-100 pcustom-img"
                                src={Slide8}
                                alt="Third slide"
                              />
                            </Rotate>
                          </Carousel.Item>
                        </Carousel>
                        <strong>Description:</strong> Some more Photoshop
                        designs
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">Adobe Photoshop</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Complimentry Card Designs */}
          <ImageEvent
            date="11/11/2020"
            className="text-center"
            text="Complimentry Card Designs"
            src={L_SmartBrain}
            alt="Complimentry Card Designs"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <Carousel
                          controls={false}
                          indicators
                          interval={2500}
                          pause={false}
                        >
                          <Carousel.Item>
                            <Roll left>
                              <img
                                className="d-block w-100 cpcustom-img"
                                src={Slide9}
                                alt="Fourth slide"
                              />
                            </Roll>
                          </Carousel.Item>
                          <Carousel.Item>
                            <Zoom top cascade>
                              <img
                                className="d-block w-100 cpcustom-img"
                                src={Slide10}
                                alt="Second slide"
                              />
                            </Zoom>
                          </Carousel.Item>
                          <Carousel.Item>
                            <Zoom top cascade>
                              <img
                                className="d-block w-100 cpcustom-img"
                                src={Slide11}
                                alt="Second slide"
                              />
                            </Zoom>
                          </Carousel.Item>
                          <Carousel.Item>
                            <Zoom top cascade>
                              <img
                                className="d-block w-100 cpcustom-img"
                                src={Slide110}
                                alt="Second slide"
                              />
                            </Zoom>
                          </Carousel.Item>
                          <Carousel.Item>
                            <Zoom top cascade>
                              <img
                                className="d-block w-100 cpcustom-img"
                                src={Slide111}
                                alt="Second slide"
                              />
                            </Zoom>
                          </Carousel.Item>
                        </Carousel>
                        <strong>Description:</strong>
                        Complimentry Cards
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">Adobe Photoshop</span>
                          </li>
                          <li>
                            <span className="p-2">Adobe Illustrator</span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Book Cover  */}

          <ImageEvent
            date="11/11/2020"
            className="text-center"
            text="Mock ups & Logos"
            src={L_RoboFriends}
            alt="Mock ups & Logos"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <Carousel
                          controls={false}
                          indicators
                          interval={2500}
                          pause={false}
                        >
                          <Carousel.Item>
                            <Roll left>
                              <img
                                className="d-block w-100 pcustom-img"
                                src={Slide12}
                                alt="Fourth slide"
                              />
                            </Roll>
                          </Carousel.Item>
                          <Carousel.Item>
                            <Zoom top cascade>
                              <img
                                className="d-block w-100 pcustom-img"
                                src={Slide13}
                                alt="Second slide"
                              />
                            </Zoom>
                          </Carousel.Item>
                          <Carousel.Item>
                            <Rotate top left>
                              <img
                                className="d-block w-100 pcustom-img"
                                src={Slide14}
                                alt="Third slide"
                              />
                            </Rotate>
                          </Carousel.Item>
                          <Carousel.Item>
                            <Rotate bottom right>
                              <img
                                className="d-block w-100 pcustom-img"
                                src={Slide15}
                                alt="First slide"
                              />
                            </Rotate>
                          </Carousel.Item>
                        </Carousel>
                        <strong>Description:</strong> Mock ups & Logos Designs
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">Adobe Photoshop</span>
                          </li>
                          <li>
                            <span className="p-2">Adobe Illustrator</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Todo App*/}

          <ImageEvent
            date="19/10/2020"
            className="text-center"
            text="Todo App"
            src={L_ProductHuntClone}
            alt="Todo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This webapp is developed
                        using react. It allows you to organize your todo list
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Add new todo list category</li>
                          <li>Add new todo list item</li>
                          <li>Remove list items</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="PostgreSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/ZacchNaa/todo-app"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ZacchNaa/react-online-phone-shop"
                  target="_blank"
                >
                  SOURCE CODE FOR MY ONLINE PHONE SHOP
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Simple Node Chat App */}
          <ImageEvent
            date="01/11/2019"
            className="text-center"
            text="Node Chat App"
            src={L_PortfolioUsingDjango}
            alt="Simple Node Chat App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Simple Node Chat App
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Sign up</li>
                          <li>Join a chat room</li>
                          <li>post your chats</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="PostgreSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Digital Ocean"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node js
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://napuo-node-chat-app.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ZacchNaa/node-chat-app"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://the-e-commerze.netlify.app/"
                  target="_blank"
                >
                  LIVE E-COMMERCE PAGE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
