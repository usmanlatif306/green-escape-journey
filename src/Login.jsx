import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./login.css";
import { useAuth } from "./Context/AuthContext";
function Login() {
  const emailRef = useRef();
  const pwdRef = useRef();
  const history = useHistory();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (pwdRef.current.value.toString().length < 8) {
      setError("Password requires minimum 8 characters");
    } else {
      try {
        setError("");
        setIsLoading(true);
        await login(emailRef.current.value, pwdRef.current.value);
        history.push("/");
      } catch {
        setError("Failed to Login");
        pwdRef.current.value = "";
      }
    }

    setIsLoading(false);
  }
  return (
  

    <div class="container3 px-4 py-5 mx-auto">
      <Navbar />
      <div class="card card0">
        <div class="d-flex flex-lg-row flex-column-reverse">
          <div class="card card1">
            <div class="row justify-content-center my-auto">
              <div class="col-md-8 col-10 my-5">
                <div class="row justify-content-center px-3 mb-3">
                  {" "}
                  <img id="logo" src="https://i.imgur.com/PSXxjNY.png" />{" "}
                </div>
                <h3 class="mb-5 text-center heading">WE ARE GEJ</h3>
                <h6 class="msg-info">Please login to your account</h6>
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    {" "}
                    <label class="form-control-label text-muted">
                      Email
                    </label>{" "}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email"
                      class="form-control"
                      ref={emailRef}
                    />{" "}
                  </div>
                  <div class="form-group">
                    {" "}
                    <label class="form-control-label text-muted">
                      Password
                    </label>{" "}
                    <input
                      type="password"
                      id="psw"
                      name="psw"
                      placeholder="Password"
                      class="form-control"
                      ref={pwdRef}
                    />{" "}
                  </div>
                  {error !== "" && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  <div class="row justify-content-center my-3 px-3">
                    {" "}
                    <button
                      type="submit"
                      class="btn-block btn-color"
                      disabled={isLoading}
                    >
                      Login to jeg
                    </button>{" "}
                  </div>
                </form>
                <div class="row justify-content-center my-2">
                  {" "}
                  <a href="http://localhost:3000/reset-password">
                    <small class="text-muted">Forgot Password?</small>
                  </a>{" "}
                </div>
              </div>
            </div>
            <div class="bottom text-center mb-5">
              <p href="#" class="sm-text mx-auto mb-3">
                Don't have an account?
                <button class="btn btn-white ml-2">
                  <Link to="/signup">Create new account</Link>
                </button>
              </p>
            </div>
          </div>
          <div class="card card2">
            <div class="my-auto mx-md-5 px-md-5 right">
              <h3 class="text-white">We are more than just a company</h3>{" "}
              <small class="text-white">
                We are not just a company .we provide you proffestional tours
                for Refreshments.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
