import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import Navbar from "./components/Navbar";
import { send } from "emailjs-com";
const Contact = () => {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  function handleSendEmail(e) {
    e.preventDefault();
    send(
      "service_qqwlrhy",
      "template_23bmo5n",
      toSend,
      "user_QquLLsPbkns5IQ1F5anSK"
    )
      .then(() => {
        alert("Message has been Sent");
        setToSend({
          ...toSend,
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        alert(error.text);
      });
  }
  return (
    <div className="main7">
      <Navbar />

      <div className="four">
        <br></br>
        <br></br>

        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Shahzaib"
                name="name"
                value={toSend.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={toSend.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <div className="responsive">
            <label>Type your message</label>
            <br></br>
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              name="message"
              value={toSend.message}
              onChange={handleChange}
            ></textarea>{" "}
          </div>
          <br></br>

          <Button variant="primary" type="submit" onClick={handleSendEmail}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
