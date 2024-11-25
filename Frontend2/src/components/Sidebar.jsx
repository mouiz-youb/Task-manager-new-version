import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
import Profile from "./Profile";
import LinkSection from "./LinkSection";
import Button from "./Button";
function Sidebar() {
  return (
    <motion.div
      className="Side-Bar-container"
      variants={fadeIn("left", 1.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
    >
      <Profile />
      <LinkSection />
      <div className="btn-section">
        <Button title="log in" to="/signup" />
        <Button title="sign up" to="/login" />
      </div>
    </motion.div>
  );
}

export default Sidebar;
