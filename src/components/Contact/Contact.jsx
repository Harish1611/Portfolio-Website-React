import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeadingDivider from "../UI-Elements/HeadingDivider";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Container fluid className="section-style">
      <h2 className="heading-mystory"> Reachout To Me </h2>
      <HeadingDivider color={"white"} />
      <Row
        style={{
          justifyContent: "center",
          position: "relative",
          paddingTop: "20px",
        }}
      >
        <Col md={10}>
          <p className="mystory" style={{ fontStyle: "italic" }}>
            Feel free to reach out to me for any inquiries, be it collaboration,
            recruitment offers, or freelance work. Please leave your message
            here, and I'll respond promptly. Your communication is important to
            me, and I look forward to connecting with you soon.
          </p>
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          position: "relative",
          paddingTop: "20px",
        }}
      >
        <Col md={8}>
          <div className="contact-card-view">
            <ContactForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
