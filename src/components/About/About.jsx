import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutMyStory from "./AboutMyStory";
import AboutMyJourney from "./AboutMyJourney";
import AboutMySkills from "./AboutMySkills";

const About = () => {
  return (
    <Container fluid className="section-style">
      <AboutMyStory />
      <AboutMyJourney />
      <AboutMySkills />
    </Container>
  );
};

export default About;
