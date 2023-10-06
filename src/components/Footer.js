import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HarishLogo from "../Assets/HarishLogo.png";

import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Resume from "./Resume/ResumeNew";
import Contact from "./Contact/Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
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
          <p className="footer-nav-items"> Home</p>
          <p className="footer-nav-items"> About</p>

          <p className="footer-nav-items"> Projects</p>
          <p className="footer-nav-items"> Resume</p>
          <p className="footer-nav-items"> Contact</p>
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
                href="#"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
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
      <Row>
        <hr></hr>
        <Col md="6" className="footer-copywright">
          <h3>Copyright © {year} HarishOffical</h3>
        </Col>

        <Col md="6" className="footer-copywright">
          <h3>Designed and Developed by Harish N Bonam</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
