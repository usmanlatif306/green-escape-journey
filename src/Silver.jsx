import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Carousel,
  Row,
  Col,
  Modal,
  Button,
  Card,
} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Silver.css";
import { useImage } from "react-image";
import { Link } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";

function Service() {
  const { plans, setplans, dbPlans, cart, SetCart, currentUser } = useAuth();
  // console.log(silvers.filter((item) => item.plan_id === 1));
  // cart.map((item) => {
  //   console.log(item);
  // });
  function handleCart(id) {
    setplans(
      plans.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            inCart: !item.inCart,
          };
        }
        return item;
      })
    );
    let cartItem = plans.filter((item) => item.id === id)[0];
    SetCart([...cart, cartItem]);
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Link to="/serve">OUR SERVICES</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="c105" to="./silver">
              {" "}
              Silver Package
            </Link>
            <Link className="c105" to="./gold">
              {" "}
              Gold Package{" "}
            </Link>
            <Link className="c105" to="diamond">
              Diamond Package
            </Link>

            <Link className="c105" to="/">
              Back to home
            </Link>
            {currentUser && (
              <Link className="c105" to="/cart">
                <i className="fas fa-cart-plus text-danger"></i>
                <span>{cart.length}</span>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Carousel className="c401">
        <Carousel.Item>
          <img
            className="d-block  w-100"
            src="https://source.unsplash.com/1300x550/?islamabad"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="bg-danger">Lahore</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  w-100"
            src="https://source.unsplash.com/1300x550/?islamabad"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="bg-danger">Lahore</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  w-100"
            src="https://source.unsplash.com/1300x550/?islamabad"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="bg-danger">Lahore</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  w-100"
            src="https://source.unsplash.com/1300x550/?islamabad"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="bg-danger">Lahore</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1300x550/?lahore"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1300x550/?tom"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-center text-info display-4">Silver Package</h1>

      <div className="container mt-xl-5 mt-lg-5 mt-md-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {plans
            .filter((item) => item.plan_id === 1)
            .map((item) => (
              <div className="col" key={item.id}>
                <div className="card shadow-sm">
                  <img src={item.image} alt="" />
                  <div className="card-body">
                    <h4 className="text-center">{item.city}</h4>
                    <p className="card-text">{item.detail}</p>
                    <span className="font-weight-bold text-info">
                      Total price{" "}
                    </span>{" "}
                    <span className="font-weight-bold ml-5 text-info">
                      {" "}
                      Rs {item.price}{" "}
                    </span>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      {currentUser && (
                        <div className="btn-group">
                          <button
                            type="button"
                            className={`btn ${
                              item.inCart
                                ? "btn-outline-secondary"
                                : "btn-outline-primary"
                            }`}
                            disabled={item.inCart}
                            onClick={() => handleCart(item.id)}
                          >
                            {item.inCart ? "Added" : "ADD TO CART"}
                          </button>
                        </div>
                      )}
                      <small className="text-muted">For 3 Days</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <h1 className="display-5 text-center mt-5">OUR TOUR GALLERY</h1>
      <Container>
        <Row className=" mt-5 ">
          <Col lg={4} md={6} sm={12}>
            {" "}
            <img src="201.jpg" alt="" className=" img-fluid " />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <img src="202.jpg" alt="" className=" img-fluid " />{" "}
          </Col>
          <Col lg={4} md={6} sm={12}>
            <img src="203.jpg" alt="" className=" img-fluid " />{" "}
          </Col>
        </Row>
        <Row className=" mt-5 ">
          <Col lg={4} md={6} sm={12}>
            <img src="204.jpg" alt="" className=" img-fluid " />{" "}
          </Col>
          <Col lg={4} md={6} sm={12}>
            {" "}
            <img src="205.jpg" alt="" className=" img-fluid " />
          </Col>
          <Col lg={4} md={6} sm={12}>
            {" "}
            <img src="200.jpg" alt="" className=" img-fluid " />
          </Col>
        </Row>
      </Container>
      <div className="container-fluid bg-secondary mt-5 ">
        <div className="m-auto">
          <br></br>
          <br></br>
          <p className=" text-center    c502 bg-secondary ">
            CopyRight by Mian Shahzaib And Muhammad Hassan
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
