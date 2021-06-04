import React from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faShoppingCart,
  faUtensils,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import Silver from "./Silver";
import Gold from "./Gold";
import Diamond from "./Diamond";

import "./Serve.css";
import { useImage } from "react-image";
import { Link } from "react-router-dom";
function Serve() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="c788" class="c789">OUR SERVICES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="c105 c800" to="./silver">
              {" "}
              Silver Package
            </Link>
            <Link className="c105 c800" to="./gold">
              {" "}
              Gold Package{" "}
            </Link>
            <Link className="c105 c800" to="diamond">
              Diamond Package
            </Link>

            <Link className="c105  c800" to="/">
              Back to home
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div class="onedivvv" style={{ backgroundImage: "url(myserve.jpg)" }}>
        <h1 className="bgtex">Our Services</h1>
      </div>
      <br></br> <br></br> <br></br> <br></br>
      <div className="center">
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="c103">
                <h3
                  className="cheading "
                  className="myhead "
                  style={{ textAlign: "left" }}
                >
                  {" "}
                  <span className="c104">OUR </span>SERVICES
                </h3>
                <p className="prag c102">
                  In our services we give a hotel convaince and shopping
                  faicilty you can choose a package for geetting our services
                  thank you
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              {" "}
              <div className="c103">
                <FontAwesomeIcon
                  icon={faHotel}
                  style={{ fontSize: "60px" }}
                  color="grey
"
                />{" "}
                <h3 className="c101">Hotels are here</h3>{" "}
                <p className="c102">
                  In every contry we must have a hotel for you where you can
                  stay and engoy your tour
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="c103">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  style={{ fontSize: "60px" }}
                  color="grey
"
                />{" "}
                <h3 className="c101">Shopping is here </h3>{" "}
                <p className="c102">
                  In shopping package we provide you a less price of things for
                  buyying.
                </p>
              </div>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col lg={4} md={6} sm={12}></Col>
            <Col lg={4} md={6} sm={12}>
              <div className="c103">
                <FontAwesomeIcon
                  icon={faPlane}
                  style={{ fontSize: "60px" }}
                  color="grey
"
                />{" "}
                <h3 className="c101">Convaince available here</h3>{" "}
                <p className="c102">
                  In convaince you can chosse buss or pickup or by air
                  facilities .Every thing has its own different charges
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              {" "}
              <div className="c103">
                <FontAwesomeIcon
                  icon={faUtensils}
                  style={{ fontSize: "60px" }}
                  color="grey
"
                />{" "}
                <h3 className="c101">Resturant are here </h3>{" "}
                <p className="c102">
                  Resturant is a most important thing in every tours we also
                  have one resturant in our tour services .
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="c106">
        <Row className="c112">
          <Col className="border border-white p-5" lg={4} md={6} sm={12}>
            <div className="c103">
              <h3 className="myhead c110 c112" style={{ textAlign: "left" }}>
                {" "}
                In Case Of Emergency
              </h3>
              <p className="prag c102">
                In case of emergency you can call us on the caontans us page and
                here you can email us easily.
              </p>
            </div>
          </Col>
          <Col className="border border-white p-5" lg={4} md={6} sm={12}>
            {" "}
            <div className="c103 c113">
              {" "}
              <h3 className="c101  c112 c110">Emergency issues</h3>{" "}
              <p className="c102">
                In emergency issue you can inculde like fire water and many
                other that type of thnigs.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className=" p-5">
              <h3
                className="myhead "
                className=" myhead c110 c112 "
                style={{ textAlign: "left" }}
              >
                {" "}
                OUR TIME TABLE
              </h3>
              <div className="c109">
                <h6 className="div">MORNING HOURS 9AM TO 10PM</h6>
              </div>
              <div className="c109">
                <h6 className="div">MORNING HOURS 9AM TO 10PM</h6>
              </div>
              <div className="c109">
                <h6 className="div">MORNING HOURS 9AM TO 10PM</h6>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Serve;
