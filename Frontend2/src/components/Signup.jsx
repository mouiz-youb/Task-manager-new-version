import React, { useState } from "react";
import "../App.css";
import { fadeIn } from "../hooks/variants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <motion.div
      className="Signup-container"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
    >
      <form className="signup-form">
        <div className="left-side-signup-for">
          <div className="header-form-auth">
            <h2>sign up here</h2>
          </div>
          <div className="input-form-auth">
            <input
              type="text"
              placeholder="Enter the Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter the Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter the password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btn-form-auth">
            <div className="if-section">
              <p>
                if you have account{" "}
                <Link className="link-form" to="/login">
                  Log in
                </Link>{" "}
                now
              </p>
            </div>
            <div>
              <button type="submit" className="btn-submit">
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="right-side-signup-for">
          <p>Task Manager in your service</p>
          <p className="second-children">
            Your chance for being the first Sing up now
          </p>
        </div>
      </form>
    </motion.div>
  );
}

export default Signup;
