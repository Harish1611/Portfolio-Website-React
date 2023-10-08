import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
const HeadingDivider = (props) => {
  const divColor = {
    color: props.color,
  };
  return (
    <Container style={{ justifyContent: "center" }}>
      <div className="heading-div-parent">
        <hr className="heading-divider" style={divColor}></hr>
      </div>
    </Container>
  );
};

export default HeadingDivider;
