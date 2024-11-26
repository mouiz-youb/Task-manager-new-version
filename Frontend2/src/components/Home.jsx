import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
function Home() {
  return (
    <div className="Home-container">
      <h1 className="home-title">Welcome to my website</h1>
      <div className="home-content">
        <div className="lines-home">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="left-side"
          ></motion.div>
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="right-side"
          ></motion.div>
        </div>
        <div className="lines-home">
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="left-side"
          ></motion.div>
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="right-side"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;

{
  /* <div className="lines-home">
        <div className="lines-home">
          <motion.div
            variants={fadeIn("left", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="left-side"
          ></motion.div>
          <motion.div
            variants={fadeIn("right", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="right-side"
          ></motion.div>
        </div>
        <div className="lines-home">
  <div className="left-side"></div>
  <div className="right-side"></div>
</div>
<div className="lines-home">
  <div className="left-side"></div>
  <div className="right-side"></div>
</div>
<div className="lines-home">
  <div className="left-side"></div>
  <div className="right-side"></div>
</div> */
}
