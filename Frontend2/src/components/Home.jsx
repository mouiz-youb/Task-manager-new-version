import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
function Home() {
  return (
    <motion.div className="Home-container">
      <h1 className="home-title">Welcome to my website</h1>
      <div className="home-content"></div>
    </motion.div>
  );
}

export default Home;
