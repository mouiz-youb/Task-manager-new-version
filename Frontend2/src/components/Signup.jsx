import React, { useState } from "react";
import "../App.css";
import { fadeIn } from "../hooks/variants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <motion.div
      className="Signup-container"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
    >
      <form className="signup-form" onSubmit={handelSubmit}>
        <motion.div
          className="after-form"
          animate={{
            rotate: [-15, 10],
            skewY: [-40, 40],
          }}
          transition={{
            ease: "easeInOut",
            duration: 3,
          }}
        ></motion.div>
        <div className="left-side-signup-for">
          <div className="header-form-auth">
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeIn", delay: 0.5 }}
            >
              sign up here
            </motion.h2>
          </div>
          <div className="input-form-auth">
            <motion.input
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
              type="text"
              placeholder="Enter the Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <motion.p
              inputinitial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: "easeIn", delay: 0.5 }}
              type="email"
              placeholder="Enter the Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <motion.input
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
              type="password"
              placeholder="Enter the password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btn-form-auth">
            <div className="if-section">
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.25, ease: "easeIn", delay: 0.5 }}
              >
                if you have account{" "}
                <Link className="link-form" to="/login">
                  Log in
                </Link>{" "}
                now
              </motion.p>
            </div>
            <div>
              <motion.button
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeIn", delay: 0.5 }}
                type="submit"
                className="btn-submit"
              >
                Sign up
              </motion.button>
            </div>
          </div>
        </div>
        <div className="right-side-signup-for">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: "easeIn", delay: 0.5 }}
          >
            Task Manager in your service
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
            className="second-children"
          >
            Your chance for being the first Sing up now
          </motion.p>
        </div>
      </form>
    </motion.div>
  );
}

export default Signup;
