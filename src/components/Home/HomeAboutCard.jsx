import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import HeadingDivider from "../UI-Elements/HeadingDivider";

const HomeAboutCard = (props) => {
  return (
    <row>
      <Card className="project-card-view">
        <div className="img-align">
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt="card-img"
            className="About-Home-card-img"
          />
        </div>
        <Card.Body>
          <Card.Title className="about-home-title">{props.title}</Card.Title>
          <HeadingDivider color={"white"} />

          <Card.Text
            style={{ textAlign: "justify" }}
            className="about-home-desc"
          >
            {props.description}
          </Card.Text>
          <Link to="/about">
            <button className="btn-primary"> Know More</button>{" "}
          </Link>
        </Card.Body>
      </Card>
    </row>
  );
};
export default HomeAboutCard;
