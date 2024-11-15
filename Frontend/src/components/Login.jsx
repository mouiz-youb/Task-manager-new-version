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
    <form>
      <div className="header">
        <h1>log In</h1>
      </div>
      <div className="input-container">
        <input type="email" placeholder="Enter the Email" />
        <input type="password" placeholder="Enter the Password " />
      </div>
      <div className="btn-container">
        <button type="submit" onClick={handelSubmit}>
          log in
        </button>
        <div>
          don't have an account? <Link to="/">Sign up</Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
