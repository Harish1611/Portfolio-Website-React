import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contactNumber: "",
      message: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Need to add mail or server post methods
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="name" style={{ paddingTop: "20px" }}>
          <Form.Control
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group controlId="email" style={{ paddingTop: "20px" }}>
          <Form.Control
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group controlId="contactNumber" style={{ paddingTop: "20px" }}>
          <Form.Control
            type="text"
            name="contactNumber"
            value={this.state.contactNumber}
            onChange={this.handleChange}
            placeholder="Enter your contact number"
          />
        </Form.Group>

        <Form.Group controlId="message" style={{ paddingTop: "20px" }}>
          <Form.Control
            as="textarea"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Enter your message"
            rows={4}
          />
        </Form.Group>
        <div style={{ paddingTop: "20px" }}></div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
