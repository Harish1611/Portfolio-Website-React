import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeadingDivider from "../UI-Elements/HeadingDivider";
import ProjectCard from "./ProjectCard";
const placeHolder = "https://placehold.co/600x400";

const Projects = () => {
  return (
    <Container fluid className="section-style">
      <h2 className="heading-mystory"> My Recent Projects </h2>
      <HeadingDivider color={"white"} />

      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeHolder}
              isBlog={false}
              title="Big Sale - eCommerce Website"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeHolder}
              isBlog={false}
              title="My Protfolio - React"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeHolder}
              isBlog={false}
              title="Drum Game"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeHolder}
              isBlog={false}
              title="IoT Disinfection Booth"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeHolder}
              isBlog={false}
              title="RSA & LSB Encryption App"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeHolder}
              isBlog={false}
              title="Place Holder"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
