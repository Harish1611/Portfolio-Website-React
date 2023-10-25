import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
  DiMysql,
  DiHtml5,
  DiCss3Full,
  DiBootstrap,
  DiEclipse,
  DiGit,
  DiGithub,
  DiWordpress,
} from "react-icons/di";

const AboutMySkills = () => {
  const responsive = {
    0: {
      items: 2,
      itemsFit: "contain",
    },
    568: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 5,
      itemsFit: "contain",
    },
  };

  const items = [
    <DiHtml5 />,
    <DiCss3Full />,
    <DiBootstrap />,
    <DiJavascript1 />,
    <DiReact />,
    <DiNodejs />,
    <DiJava />,
    <DiMysql />,
    <DiMongodb />,
    <DiEclipse />,
    <DiGit />,
    <DiGithub />,
    <DiWordpress />,
  ].map((item) => <div className="tech-icons-myskill"> {item} </div>);

  return (
    <Container>
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        responsive={responsive}
        autoPlay
        autoPlayInterval={2000}
        infinite
      />
    </Container>
  );
};

export default AboutMySkills;
