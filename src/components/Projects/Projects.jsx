import React from "react";
import { ProjectData } from "./ProjectData";
import { Container, Row, Col } from "react-bootstrap";
import HeadingDivider from "../UI-Elements/HeadingDivider";
import ProjectCard from "./ProjectCard";
import { animated, useTransition } from "react-spring";
const placeHolder = "https://placehold.co/600x400";

const Projects = () => {
  const transitions = useTransition(ProjectData, {
    from: { opacity: 0, transform: "scale(0.8)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.8)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <Container fluid className="section-style">
      <h2 className="heading-mystory"> My Recent Projects </h2>
      <HeadingDivider color={"white"} />

      <Container>
        <Row
          style={{
            justifyContent: "left",
            paddingBottom: "40px",
            paddingTop: "40px",
          }}
        >
          {transitions((style, project, _, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              style={{
                marginBottom: "20px",
                marginTop: "30px",
              }}
              className="projectCard-style"
            >
              <animated.div style={style}>
                <ProjectCard
                  imgPath={project.img || placeHolder}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.gitLink}
                  demoLink={project.demoLink}
                />
              </animated.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
