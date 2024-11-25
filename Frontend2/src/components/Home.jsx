import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
import HomeLines from "./HomeLines";
function Home() {
  return (
    <div className="Home-container">
      <h1 className="home-title">Welcome to my website</h1>
      <div className="home-content">
        <div className="home-scrool">
          <HomeLines />
          <HomeLines />
          <HomeLines />
          <HomeLines />
        </div>
      </div>
    </div>
  );
}

export default Home;
