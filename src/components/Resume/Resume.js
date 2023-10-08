import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Harish_Naidu_Bonam_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../../style.css";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const updatedResumeGitLink =
  "https://github.com/Harish1611/Resume/blob/main/Harish_Naidu_Bonam_Resume.pdf";

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col xs={12}>
            <div className="resume-message">
              <div className="resume-message-greet"> Hello there,</div>
              Thank you for visiting my profile. If you are impressed with my
              profile and skills, please let me know. You can download my
              current Resume/CV below. If it is not updated, you can always find
              my updated resume in my Git Resume Repo. Click on the "Updated
              Resume" button to access my most recent resume.
              <div className="resume-message-dec">Sincerely,</div>
              <div className="resume-message-dec">Harish Naidu Bonam</div>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={2} sm={2}>
            {" "}
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              &nbsp;
              <AiOutlineDownload />
              &nbsp;&nbsp;Download CV&nbsp;
            </Button>
          </Col>
          <Col md={2} sm={2}>
            {" "}
            <Button
              variant="primary"
              href={updatedResumeGitLink}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              &nbsp; <FaExternalLinkAlt />
              &nbsp; &nbsp;Updated CV&nbsp;&nbsp;
            </Button>
          </Col>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
