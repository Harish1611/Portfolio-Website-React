import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutMyStory from "./AboutMyStory";
import AboutMyJourney from "./AboutMyJourney";

const About = () => {
  return (
    <Container fluid className="section-style">
      <AboutMyStory />
      <AboutMyJourney />
    </Container>
  );
};

export default About;
