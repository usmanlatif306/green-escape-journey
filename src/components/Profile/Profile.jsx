import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Navbar from "../Navbar";
import ProgressBar from "../ProgressBar";
import { useAuth } from "../../Context/AuthContext";
import { db, auth } from "../../firebase";
import firebase from "firebase/app";
import { Link } from "react-router-dom";

function Profile() {
  const imgRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const { currentUser, user, setUser, orders } = useAuth();
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [error, setError] = useState(null);
  const [noUpdateError, setNoUpdateError] = useState(null);
  const [pwderror, setpwdError] = useState(null);
  const [userOrders, setUserOrders] = useState([]);
  const [isChangeEmail, setIsChangeEmail] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  useEffect(() => {
    if (orders.length > 0) {
      setUserOrders(orders.filter((order) => order.user === currentUser.uid));
    }
  }, [orders]);

  let completed = userOrders.filter((item) => item.status === "Completed");
  const types = ["image/png", "image/jpeg", "image/jpg"];
  useEffect(() => {
    if (url) {
      var user = db.collection("profile").doc(currentUser.uid);
      user
        .update({
          image: url,
        })
        .then(() => {
          setUser({ ...user, image: url });
          imgRef.current.value = "";
          alert("Profile Image Successfully Uploaded");
        })
        .catch((err) => {
          console.log("Error updating document:", err);
        });
    }
  }, [url]);
  function handleImage(e) {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setImage(selected);
    } else {
      setImage(null);
      setError("plaese select an image file");
    }
  }
  function handleUpload() {
    setError("");
    if (image) {
      setFile(image);
    } else {
      setError("plaese select an file");
    }
  }
  function handleUpdateProfile() {
    setError(null);
    setNameError(null);
    setEmailError(null);
    setpwdError(null);
    setNoUpdateError(null);

    if (nameRef.current.value.toString().length < 3) {
      setNameError("Minimum 3 character required");
    } else if (!nameRef.current.value.match(/^[A-Za-z_ ]+$/)) {
      setNameError("Only letters are allowed");
    } else if (
      !emailRef.current.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setEmailError("Please type valid email");
    } else if (
      nameRef.current.value === user.name &&
      emailRef.current.value === user.email
    ) {
      setNoUpdateError("Nothing to Update");
    } else if (user.email !== emailRef.current.value && userPassword === "") {
      setIsChangeEmail(true);
    } else {
      var userRef = db.collection("profile").doc(currentUser.uid);
      if (user.email !== emailRef.current.value) {
        var credential = firebase.auth.EmailAuthProvider.credential(
          firebase.auth().currentUser.email,
          userPassword
        );
        currentUser
          .reauthenticateWithCredential(credential)
          .then(function () {
            userRef.update({
              name: nameRef.current.value,
              email: emailRef.current.value,
            });
            currentUser.updateEmail(emailRef.current.value).then(function () {
              setIsChangeEmail(false);
              alert("Profile Successfully Updated!");
            });
          })
          .catch(function (error) {
            setpwdError("Wrong password.");
          });
      } else {
        userRef
          .update({
            name: nameRef.current.value,
            email: emailRef.current.value,
          })
          .then(() => {
            alert("Profile Successfully Updated!");
          });
      }
    }
  }
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-info  c840 text-dark">Profile details</h1>
      <div className="container border border-dark">
        <Container>
          <Row>
            <Col lg={3} md={12} sm={12}>
              <img
                src={
                  url
                    ? url
                    : user && user.image !== ""
                    ? user.image
                    : "user.png"
                }
                alt=""
              />
              <br />
              <br />
              <input
                type="file"
                size="60"
                ref={imgRef}
                onChange={handleImage}
              />
              <br />
              <br />
              <Button variant="success" onClick={handleUpload} disabled={file}>
                Upload
              </Button>{" "}
              {error && <div className="alert alert-danger">{error}</div>}
              {file && (
                <ProgressBar file={file} setFile={setFile} setUrl={setUrl} />
              )}
            </Col>
            <Col lg={9} md={12} sm={12}>
              <h1 className="text-center  text-dark font-weight-bold">
                Active Plans
              </h1>
              {userOrders.length > 0 ? (
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Plan</th>
                      <th>City</th>
                      <th>Persons</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userOrders
                      .filter((item) => item.status !== "Completed")
                      .map((order, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{order.plan}</td>
                          <td>{order.city}</td>
                          <td>{order.persons}</td>
                          <td>{order.total}</td>
                          <td>{order.status}</td>
                          <td>
                            <Link
                              className="btn btn-sm btn-warning"
                              to={`/orders/${order.id}/update`}
                            >
                              Edit
                            </Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              ) : (
                <h1 class="c840">No Order Found</h1>
              )}
            </Col>
          </Row>
          <h1 className="text-center  c840 text-dark">Past History</h1>
          <Row>
            <Col lg={3} md={12} sm={12}>
              <label htmlFor="" className="font-weight-bold">
                {" "}
                Name
              </label>
              <input
                type="text"
                className=" ml-2"
                required
                ref={nameRef}
                defaultValue={user && user.name}
              />{" "}
              {nameError && (
                <div className="alert alert-danger">{nameError}</div>
              )}
              <label htmlFor="" className="font-weight-bold">
                {" "}
                Email
              </label>
              <input
                type="email"
                className=" ml-2"
                required
                ref={emailRef}
                defaultValue={user && user.email}
              />
              {emailError && (
                <div className="alert alert-danger">{emailError}</div>
              )}
              {noUpdateError && (
                <div className="alert alert-danger">{noUpdateError}</div>
              )}
              {isChangeEmail && (
                <>
                  <label htmlFor="" className="font-weight-bold">
                    {" "}
                    Please enter your password for change Email
                  </label>
                  <input
                    type="password"
                    className=" ml-2"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    required
                  />
                </>
              )}
              <br />
              <br />
              {pwderror && <div className="alert alert-danger">{pwderror}</div>}
              <div className="text-center">
                <Button variant="success" onClick={handleUpdateProfile}>
                  Update
                </Button>{" "}
              </div>
            </Col>

            <Col lg={9} md={12} sm={12}>
              {completed.length === 0 ? (
                <h1 class="c840">No past history found</h1>
              ) : (
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Plan</th>
                      <th>City</th>
                      <th>Persons</th>
                      <th>Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {completed.map((order, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{order.plan}</td>
                        <td>{order.city}</td>
                        <td>{order.persons}</td>
                        <td>{order.total}</td>
                        <td>{order.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Profile;
