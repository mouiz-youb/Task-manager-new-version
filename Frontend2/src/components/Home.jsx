import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
function Home() {
  return (
    <div className="Home-container">
      <h1 className="home-title">Welcome to my website</h1>
      <div className="home-content">
        <div className="lines-home"></div>
        <div className="lines-home"></div>
        <div className="lines-home"></div>
        <div className="lines-home"></div>
      </div>
    </div>
  );
}

export default Home;
