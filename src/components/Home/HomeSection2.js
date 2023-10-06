import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeAboutCard from "./HomeAboutCard";
import myPic from "../../Assets/myImage.png";

function HomeSection2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <h1> </h1>
          <HomeAboutCard
            imgPath={myPic}
            title="Meet the Creator"
            description="I am Harish Naidu Bonam, an Engineering graduate in Electronics and Communications. I can design and develop Websites from scratch. I'm fimiliar with HTML, CSS, JS, ReactJS,NodeJS,ExpressJS, BootStrap, MySQL, Java. I can design a website for you as a freelance project, contact me if needed."
          />
        </Row>
        <Row>
          <Col md={12} className="home-about-skills ">
            <h1>Tools & Technologies</h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeSection2;