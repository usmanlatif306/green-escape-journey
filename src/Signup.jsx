import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./signup.css";
import { useAuth } from "./Context/AuthContext";
import { db } from "./firebase";
// import Navbar from './components/Navbar'
function Signup() {
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState(null);
  const { signup } = useAuth();
  const emailRef = useRef();
  const pwdRef = useRef();
  const cpwdRef = useRef();
  const nameRef = useRef();
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setNameError(null);
    if (nameRef.current.value.toString().length < 3) {
      setNameError("Minimum 3 character required");
    } else if (!nameRef.current.value.match(/^[A-Za-z_ ]+$/)) {
      setNameError("Only letters are allowed");
    } else if (pwdRef.current.value !== cpwdRef.current.value) {
      return setError("Password does not match");
    } else if (
      pwdRef.current.value.length < 8 ||
      cpwdRef.current.value.length < 8
    ) {
      return setError("Password required minimum 8 character");
    } else {
      try {
        await signup(emailRef.current.value, pwdRef.current.value).then(
          (currentUser) => {
            db.collection("profile").doc(currentUser.user.uid).set({
              name: nameRef.current.value,
              image: "",
              email: emailRef.current.value,
              status: "active",
            });
          }
        );
        history.push("/");
      } catch {
        setError("Failed to Sign Up");
      }
    }
  }
  return (
    <div className="maintwo">
      {/* <Navbar/> */}
      <div id="login-box">
        <div class="left">
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit}>
            {/* <input type="text" name="username" placeholder="Username" /> */}
            <input type="text" name="name" placeholder="Name" ref={nameRef} />
            {nameError && (
              <div className="alert alert-danger" role="alert">
                {nameError}
              </div>
            )}
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              ref={emailRef}
            /> 
            <br /> <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={pwdRef}
            />
            <input
              type="password"
              name="password2"
              placeholder="Retype password"
              ref={cpwdRef}
            />
            {error !== "" && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <input type="submit"  className="h-25 c1122" name="signup_submit" value="Sign me up" />
          </form>
        </div>

        {/* <div class="right">
          <span class="loginwith">
            Sign in with
            <br />
            social network
          </span>

          <button class="social-signin facebook">Log in with facebook</button>
          <button class="social-signin twitter">Log in with Twitter</button>
          <button class="social-signin google">Log in with Google+</button>
        </div>
        <div class="or">OR</div> */}
      </div>
    </div>
  );
}
export default Signup;
