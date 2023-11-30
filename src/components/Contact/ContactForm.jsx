import React, { Component } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import ConfirmationPopup from "../UI-Elements/ConfirmationPopup";

const ContactForm = () =>  {

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_phone: '',
    message:''
  });

  const [showConfirmation, setShowConfirmation] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactFormHandler = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_r7fxnnj',
      'template_8lcdys7',
      formData,
      '6bhdj5Qga9uIEwIaY'
    )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setShowConfirmation(true);
        emailjs.send(
          'service_r7fxnnj',
          'template_47751oi',
          { from_email: formData.from_email,from_name: formData.from_name, subject: 'Confirmation',  message: 'Thank you for contacting us! We have received your message. We\'ll get in touch with you soon.' 
        },
          '6bhdj5Qga9uIEwIaY'
        )
          .then((clientResponse) => {
            console.log('Client confirmation email sent successfully:', clientResponse);
          })
          .catch((clientError) => {
            console.error('Client confirmation email sending failed:', clientError);
          });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };


    return (
      <div>
      <Form onSubmit={contactFormHandler}>
        <Form.Group controlId="name" style={{ paddingTop: "20px" }}>
          <Form.Control
            type="text"
            name="from_name"
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group controlId="email" style={{ paddingTop: "20px" }}>
          <Form.Control
            type="email"
            name="from_email"
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group controlId="contactNumber" style={{ paddingTop: "20px" }}>
          <Form.Control
            type="text"
            name="from_phone"
            onChange={handleChange}
            placeholder="Enter your contact number"
          />
        </Form.Group>

        <Form.Group controlId="message" style={{ paddingTop: "20px" }}>
          <Form.Control
            as="textarea"
            name="message"
            onChange={handleChange}
            placeholder="Enter your message"
            rows={4}
          />
        </Form.Group>
        <div style={{ paddingTop: "20px" }}></div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

       {/* ConfirmationPopup component */}
       {showConfirmation && (
        <ConfirmationPopup
          message="Thank you for Submission!"
          onClose={closeConfirmation}
        />
      )}
      </div>
    );
  }


export default ContactForm;
