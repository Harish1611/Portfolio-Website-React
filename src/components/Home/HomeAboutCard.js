import React from "react";
import Card from "react-bootstrap/Card";

function HomeAboutCard(props) {
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
          <Card.Text
            style={{ textAlign: "justify" }}
            className="about-home-desc"
          >
            {props.description}
          </Card.Text>
          <button className="btn-primary"> Know More</button>
        </Card.Body>
      </Card>
    </row>
  );
}
export default HomeAboutCard;
