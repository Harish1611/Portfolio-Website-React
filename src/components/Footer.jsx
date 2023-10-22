import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HarishLogo from "../Assets/HarishLogo.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <img
            src={HarishLogo}
            className="img-fluid  footer-logo"
            alt="brand"
          />
        </Col>

        <Col md="4" className="footer-copywright">
          <h2 className="footer-heading">Quick Links</h2>
          <Link className="footer-nav-items" to="/">
            Home
          </Link>
          <div className="break"> </div>
          <Link className="footer-nav-items" to="/about">
            About
          </Link>
          <div className="break"> </div>
          <Link className="footer-nav-items" to="/project">
            Projects
          </Link>
          <div className="break"> </div>
          <Link className="footer-nav-items" to="/resume">
            Resume
          </Link>
          <div className="break"> </div>
          <Link className="footer-nav-items" to="/contact">
            Contact
          </Link>
        </Col>
        <Col md="4" className="footer-copywright">
          <h2 className="footer-heading">Reachout To Me</h2>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/Harish1611"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/harish-naidu-bonam/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/harish-naidu-bonam/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/harish-naidu-bonam/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="footer-bottom-col">
        <hr></hr>
        <Col md="6">
          <h4 className="footer-bottom">Copyright © {year} HarishOffical</h4>
        </Col>

        <Col md="6">
          <h4 className="footer-bottom">
            Designed and Developed by Harish N Bonam
          </h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
