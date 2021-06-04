import React, { useRef, useState } from "react";
import { auth } from "./firebase";

export const Forget = () => {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await auth.sendPasswordResetEmail(emailRef.current.value);
      setMessage("Reset password link has been sent to given email");
    } catch {
      setError("Failed to Login");
    }
  }
  return (
    
    <div className="w-50 mx-auto   flex justify-content-center align-items-center " >
      <form onSubmit={handleSubmit}>
        {message !== "" && (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        )}
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={emailRef}
          />
        </div>
        {error !== "" && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <button type="submit" class="btn btn-primary">
          Reset Password
        </button>
      </form>
    </div>
  );
};
