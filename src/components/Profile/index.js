import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import ProgressBar from "../ProgressBar";
import { useAuth } from "../../Context/AuthContext";
import { db } from "../../firebase";

const Profile = () => {
  const imgRef = useRef();
  const { currentUser, user, setUser } = useAuth();
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
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
          alert("Profile Successfully Updated");
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
  return (
    <div className="prof">
      <Navbar />
      <div className="w-50 h-75 mx-auto pb-3  bg-red border border-primary c801">
        <Container>
          <Row>
            <Col className=" border-primary" lg={12} md={12} sm={12}>
              <div className="">
                <img
                  src={
                    url
                      ? url
                      : user && user.image !== ""
                      ? user.image
                      : "user.png"
                  }
                  className="mx-auto d-block img-fluid rounded-circle"
                  alt=""
                />
                {/* <h4 className="text-center text-info">Full name ae ga</h4> */}

                <input type="file" ref={imgRef} onChange={handleImage} />
                <Button
                  variant="primary"
                  className="mr-1 text-center"
                  onClick={handleUpload}
                  disabled={file}
                >
                  Upload
                </Button>
                {error && <div className="alert alert-danger">{error}</div>}
                {file && (
                  <ProgressBar file={file} setFile={setFile} setUrl={setUrl} />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Profile;
