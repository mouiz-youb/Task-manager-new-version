import React from "react";
import "../App.css";
import { fadeIn } from "../hooks/variants";
import { motion } from "framer-motion";
function Signup() {
  return (
    <motion.div
      className="Signup-container"
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
    >
      <form className="signup-form"></form>
    </motion.div>
  );
}

export default Signup;
