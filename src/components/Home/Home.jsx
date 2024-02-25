import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptopImg from "../../Assets/about.png";
import HomeSection2 from "./HomeSection2";
import { useSpring, animated, config, useInView } from "react-spring";

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
  });

  const [heroContentRef, heroContentInView] = useInView({
    triggerOnce: true,
  });

  const heroAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? "translate3d(0, 0, 0)" : "translate3d(90%, 0, 0)",
    config: config.default,
  });

  const heroContent = useSpring({
    opacity: heroContentInView ? 1 : 0,
    transform: heroContentInView
      ? "translate3d(0, 0, 0)"
      : "translate3d(-90%, 0, 0)",

    config: config.default,
  });

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <animated.div
                className="hero"
                ref={heroRef}
                style={heroAnimation}
              >
                <img src={laptopImg} alt="about" className="img-fluid" />
              </animated.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <animated.div ref={heroContentRef} style={heroContent}>
                <h1 className="heading-name headingstyle">
                  I'm
                  <strong className="main-name"> Harish Naidu</strong>
                </h1>
                <h2 className="heading-namesub">A FullStack Developer</h2>
                <div style={{ padding: 50, textAlign: "left" }}></div>
              </animated.div>
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeSection2 />
    </section>
  );
};

export default Home;
