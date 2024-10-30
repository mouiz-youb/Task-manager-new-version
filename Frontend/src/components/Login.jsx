import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3004/login", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data === "User not found") {
          alert("User not found");
        } else if (response.data === "Invalid password ") {
          alert("Invalid password");
        } else {
          alert(`login has seccusfuly`);
          navigate("/home");
        }
      })
      .catch(() => {
        console.log("error");
      });
  };
  return (
    <form className="Sign-up" onSubmit={handelSubmit}>
      <h1>Log In</h1>
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
          {/* <button type="submit">Log In </button> */}
          <input type="submit" />
        </div>
        <div className="Have-account">
          <p>if you don't have account </p>
          <Link to="/">Sign up</Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
