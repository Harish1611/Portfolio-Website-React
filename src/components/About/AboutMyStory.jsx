import { Container, Row, Col } from "react-bootstrap";
import HeadingDivider from "../UI-Elements/HeadingDivider";
import aboutMe from "../../Assets/aboutMe.svg";
import { useSpring, animated, config, useInView } from "react-spring";

const AboutMyStory = () => {
  const [homeMyStoryRef, homeMyStoryInView] = useInView({
    triggerOnce: true,
  });
  const [textRef, textInView] = useInView({
    triggerOnce: true,
  });
  const homeMyStorySection = useSpring({
    opacity: homeMyStoryInView ? 1 : 0,
    transform: homeMyStoryInView
      ? "translate3d(0, 0, 0)"
      : "translate3d(0, 100%, 0)",
    config: config.default,
  });

  const textAnimation = useSpring({
    opacity: textInView ? 1 : 0,
    transform: textInView ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)",
    config: config.default,
  });

  return (
    <Container fluid>
      <h2 className="heading-mystory"> My Story </h2>
      <HeadingDivider color={"white"} />
      <Row style={{ justifyContent: "left", position: "relative" }}>
        <Col md={8}>
          <animated.div className="text" ref={textRef} style={textAnimation}>
            <p className="mystory">
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span style={{ color: "#c770f0" }}>Hello there,</span> I'm Harish
              Naidu Bonam, hailing from the charming city of Vijayawada in
              Andhra Pradesh, India. Armed with a B.Tech degree in Electronics
              and Communications Engineering.Though my academic roots lie in
              electronics, I'm more inclined towards Software.
              <div className="mystory-div"></div> I've honed my skills in a
              variety of languages and technologies, including{" "}
              <span style={{ color: "#c770f0" }}>
                {" "}
                JavaScript, Java, C, PHP, HTML, CSS3, Bootstrap, SQL, MongoDB,
                Mongoose, ReactJS, NodeJS, ExpressJS, Postman, WordPress
              </span>{" "}
              and more. While I thrive in the digital realm, I've also delved
              into freelancing and crafted couple of great websites using
              WordPress, Elementor, PHP, JS, HTML, CSS3, and more. To support my
              journey, I've taken up freelancing, primarily developing websites
              with WordPress and PHP, to manage my EMIs.
              <div className="mystory-div"></div>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now, I'm on the
              lookout for an opportunity as a{" "}
              <span style={{ color: "#c770f0" }}>
                Fullstack/Software Developer
              </span>{" "}
              to further my career in this dynamic field.
            </p>
          </animated.div>
        </Col>
        <Col md={4} className="mystory-image">
          <animated.div
            className="text"
            ref={homeMyStoryRef}
            style={homeMyStorySection}
          >
            <img src={aboutMe} alt="about" className="img-about" />
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMyStory;
