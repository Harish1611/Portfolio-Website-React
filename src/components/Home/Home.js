import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptopImg from "../../Assets/about.png";
import HomeSection2 from "./HomeSection2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <h1 className="heading-name headingstyle">
                I'm
                <strong className="main-name"> Harish Naidu</strong>
              </h1>
              <h2 className="heading-namesub">A Web Developer</h2>
              <div style={{ padding: 50, textAlign: "left" }}></div>
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeSection2 />
    </section>
  );
}

export default Home;
