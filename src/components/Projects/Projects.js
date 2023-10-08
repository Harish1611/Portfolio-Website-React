import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeadingDivider from "../UI-Elements/HeadingDivider";

const Projects = () => {
  return (
    <Container fluid className="section-style">
      <h2 className="heading-mystory"> My Recent Projects </h2>
      <HeadingDivider color={"white"} />
      <Row></Row>
      <Row>
        <p className="mystory" style={{ paddingBottom: "200px" }}>
          {" "}
          All the projects will be display here in the card format
        </p>
      </Row>
    </Container>
  );
};

export default Projects;
