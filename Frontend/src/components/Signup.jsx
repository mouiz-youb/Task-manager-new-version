import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3004/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data === "The registration is seccusfuly") {
          alert("Registration is successful");
          navigate("/home");
        }
      })
      .catch(() => {
        console.log("error");
      });
  };
  return (
    <form className="Sign-up" onSubmit={handelSubmit}>
      <h1>Sign up</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter the username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter the email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter the password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="btn-container">
        <div className="btn-submit">
          <button type="submit">Signup</button>
        </div>
        <div className="Have-account">
          <p>if yo have account </p>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </form>
  );
}

export default Signup;
