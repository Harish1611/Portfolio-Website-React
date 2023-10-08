import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeAboutCard from "./HomeAboutCard";
import myPic from "../../Assets/myImage.png";
import HomeSkills from "./HomeSkills";
import HeadingDivider from "../UI-Elements/HeadingDivider";

const HomeSection2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <h1> </h1>
          <HomeAboutCard
            imgPath={myPic}
            title="Meet the Creator"
            description="I'm Harish Naidu Bonam, hailing from the charming city of Vijayawada in Andhra Pradesh, India. Armed with a B.Tech degree in Electronics and Communications Engineering.Though my academic roots lie in electronics, I'm more inclined towards Software. I'm fimiliar with HTML, CSS, JS, ReactJS,NodeJS,ExpressJS, BootStrap, MySQL, Java. I can design a website for you as a freelance project, contact me if needed."
          />
        </Row>
        <Row>
          <Col md={12} className="home-about-skills ">
            <h1 className="heading-name-skills">Tools & Technologies</h1>
            <HeadingDivider color={"purple"} />

            <p className="home-about-body">
              I'm fimiliar with couple of Languages, Tools & Technologies. I
              mainly works in following Technologies
            </p>
            <HomeSkills />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default HomeSection2;
