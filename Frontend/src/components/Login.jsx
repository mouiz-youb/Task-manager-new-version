import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hook/useLogin";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { Login, error, isloading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user);
    await Login(email, password);
  };
  return (
    <div className="container-of-from">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="header">
          <h1>log In</h1>
        </div>
        <div className="input-container">
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
          <button type="submit">log in</button>
          <div>
            don't have an account? <Link to="/">Sign up</Link>
          </div>
        </div>
        {error && <div className="is error"> {error} </div>}
        {isloading && <div className="is isloading"> {isloading} </div>}
      </form>
    </div>
  );
}

export default Login;
