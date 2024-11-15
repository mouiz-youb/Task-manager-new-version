import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSignup } from "../hook/useSignup";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signup, isloading, error } = useSignup();
  const handelSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password,
    };
    console.log(user);
    await signup(username, email, password);
  };
  return (
    <form onSubmit={handelSubmit}>
      <div className="header">
        <h1>Sign Up</h1>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter the Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter the Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter the Password "
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="btn-container">
        <button type="submit">Sign up</button>
        <div>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
      {error && <div className="is error"> {error} </div>}
      {isloading && <div className="is isloading"> {isloading} </div>}
    </form>
  );
}

export default Signup;
// axios
// .post("http://localhost:3005/user/signup", {
//   username: username,
//   email: email,
//   password: password,
// })
// .then((response) => {
//   console.log(response.data);
// })
// .catch(() => {
//   console.log("error");
// });
