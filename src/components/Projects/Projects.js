import React from "react";
import { ProjectData } from "./ProjectData";
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
          {ProjectData.map((data) => (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={data.img}
                isBlog={false}
                title={data.title}
                description={data.description}
                ghLink={data.gitLink}
                demoLink={data.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
