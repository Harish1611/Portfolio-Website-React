import { Container, Row, Col } from "react-bootstrap";
import HeadingDivider from "../UI-Elements/HeadingDivider";
const AboutMyStory = () => {
  return (
    <Container fluid className="about-story">
      <h2 className="heading-mystory"> My Story </h2>
      <HeadingDivider color={"white"} />
      <Row style={{ justifyContent: "left", position: "relative" }}>
        <Col md={8}>
          <p className="mystory">
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span style={{ color: "#c770f0" }}>Hello there,</span> I'm Harish
            Naidu Bonam, hailing from the charming city of Vijayawada in Andhra
            Pradesh, India. Armed with a B.Tech degree in Electronics and
            Communications Engineering.Though my academic roots lie in
            electronics, I'm more inclined towards Software.
            <div className="mystory-div"></div> I've honed my skills in a
            variety of languages and technologies, including{" "}
            <span style={{ color: "#c770f0" }}>
              {" "}
              JavaScript, Java, C, PHP, HTML, CSS3, Bootstrap, SQL, MongoDB,
              Mongoose, ReactJS, NodeJS, ExpressJS, Postman, WordPress
            </span>{" "}
            and more. While I thrive in the digital realm, I've also delved into
            freelancing and crafted couple of great websites using WordPress,
            Elementor, PHP, JS, HTML, CSS3, and more. To support my journey,
            I've taken up freelancing, primarily developing websites with
            WordPress and PHP, to manage my EMIs.
            <div className="mystory-div"></div>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now, I'm on the
            lookout for an opportunity as a{" "}
            <span style={{ color: "#c770f0" }}>
              Fullstack/Software Developer
            </span>{" "}
            to further my career in this dynamic field.
          </p>
        </Col>
        <Col md={4} className="mystory-image">
          <p style={{ textAlign: "left" }}>Image Here</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMyStory;
