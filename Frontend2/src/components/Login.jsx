import React, { useState } from "react";
import "../App.css";
import { fadeIn } from "../hooks/variants";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin.js";
function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login, isloading, error } = useLogin();
  const [click, setClick] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are required.");
      return;
    }
    await Login(email, password);
  };
  // transform-origin: bottom left;
  //   transform: rotate(-15deg) skewY(-41deg) translateX(-20px);
  return (
    <motion.div
      className="Signup-container"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
    >
      <form className="signup-form" onSubmit={handleSubmit}>
        <motion.div
          animate={{
            rotate: [10, 0, -15],
            skewY: [40, 0, -40],
            translateX: 20,
          }}
          transition={{
            ease: "easeInOut",
            duration: 3,
          }}
          className="after-form2"
        ></motion.div>
        <div className="right-side-signup-for">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: "easeIn", delay: 0.5 }}
          >
            Task Manager in your service
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
            className=" left"
          >
            Your chance for being the first Log In now
          </motion.p>
        </div>
        <div className="left-side-signup-for">
          <div className="header-form-auth">
            <motion.h2
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeIn", delay: 0.5 }}
            >
              Log In here
            </motion.h2>
          </div>
          <div className="input-form-auth">
            <motion.input
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
              type="email"
              placeholder="Enter the Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <motion.input
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: "easeIn", delay: 0.5 }}
              type="password"
              placeholder="Enter the password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btn-form-auth">
            <div className="if-section">
              <motion.p
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
              >
                if you have account{" "}
                <Link className="link-form" to="/signup">
                  signup
                </Link>{" "}
                now
              </motion.p>
            </div>
            <div>
              <motion.button
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.25, ease: "easeIn", delay: 0.5 }}
                type="submit"
                className="btn-submit"
              >
                Log in
              </motion.button>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
}

export default Login;
